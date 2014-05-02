package com.lemania.eprospects.client.presenter;

import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyEvent;
import com.lemania.eprospects.client.AdminGateKeeper;
import com.lemania.eprospects.client.CurrentUser;
import com.lemania.eprospects.client.FieldValidation;
import com.lemania.eprospects.client.NotificationTypes;
import com.lemania.eprospects.client.event.LoginAuthenticatedEvent;
import com.lemania.eprospects.client.event.PageAfterSelectEvent;
import com.lemania.eprospects.client.event.LoginAuthenticatedEvent.LoginAuthenticatedHandler;
import com.lemania.eprospects.client.place.NameTokens;
import com.lemania.eprospects.client.presenter.MainPagePresenter;
import com.lemania.eprospects.client.uihandler.FrmBrancheAddUiHandler;
import com.lemania.eprospects.shared.BrancheProxy;
import com.lemania.eprospects.shared.service.BrancheRequestFactory;
import com.lemania.eprospects.shared.service.EventSourceRequestTransport;
import com.lemania.eprospects.shared.service.BrancheRequestFactory.BrancheRequestContext;
import com.gwtplatform.mvp.client.annotations.UseGatekeeper;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.google.inject.Inject;
import com.google.web.bindery.requestfactory.shared.Receiver;
import com.google.web.bindery.requestfactory.shared.ServerFailure;
import com.google.gwt.core.client.GWT;
import com.google.web.bindery.event.shared.EventBus;
import com.google.gwt.user.client.Window;
import com.gwtplatform.mvp.client.proxy.RevealContentEvent;

public class FrmBrancheAddPresenter
		extends
		Presenter<FrmBrancheAddPresenter.MyView, FrmBrancheAddPresenter.MyProxy>
		implements
		FrmBrancheAddUiHandler, LoginAuthenticatedHandler  {

	//
	private CurrentUser currentUser;
	
	
	public interface MyView extends View, HasUiHandlers<FrmBrancheAddUiHandler> {
		//
		public void showStatus(String msg);
		public void resetForm();
	}

	
	@ProxyCodeSplit
	@NameToken(NameTokens.brancheadd)
	@UseGatekeeper(AdminGateKeeper.class)
	public interface MyProxy extends ProxyPlace<FrmBrancheAddPresenter> {
	}

	
	@Inject
	public FrmBrancheAddPresenter(final EventBus eventBus, final MyView view,
			final MyProxy proxy) {
		super(eventBus, view, proxy);
	}

	
	@Override
	protected void revealInParent() {
		RevealContentEvent.fire(this, MainPagePresenter.TYPE_SetMainContent, this);
	}

	
	@Override
	protected void onBind() {
		super.onBind();
		
		// Thuan
		getView().setUiHandlers(this);
	}
	
	@Override
	protected void onReset() {
		//
		super.onReset();
		//
		this.getEventBus().fireEvent( new PageAfterSelectEvent(NameTokens.brancheadd));
		// Thuan
		getView().setUiHandlers(this);
	}
	

	
	@Override
	public void addNewBranche(String brancheName, String brancheCoef, Boolean brancheActive) {
		//
		if (this.currentUser.isReadOnly()){
			Window.alert(NotificationTypes.readOnly);
			return;
		}
		
		// Validate data
		if ( brancheName.isEmpty() ){
			Window.alert( NotificationTypes.invalid_input + " - Nom de la branche.");
			return;
		}
		if ( FieldValidation.isNumeric( brancheCoef) ) {
			if ( Double.parseDouble(brancheCoef) < 0 ) {
				Window.alert( NotificationTypes.invalid_input + " - Coefficient");
				return;
			}
		} else {
			Window.alert( NotificationTypes.invalid_input + " - Coefficient");
			return;
		}
		// Save
		BrancheRequestFactory rf = GWT.create(BrancheRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		BrancheRequestContext rc = rf.brancheRequest();
		
		BrancheProxy ep = rc.create(BrancheProxy.class);
		ep.setBrancheName( brancheName );
		ep.setDefaultCoef( Double.parseDouble(brancheCoef) );
		ep.setIsActive( brancheActive );
		rc.save(ep).fire( new Receiver<Void>() {
			@Override
			public void onSuccess(Void response){
				getView().showStatus( NotificationTypes.branche_create_good );
				getView().resetForm();
			}
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
		} );
		//
	}


	@ProxyEvent
	@Override
	public void onLoginAuthenticated(LoginAuthenticatedEvent event) {
		//
		this.currentUser = event.getCurrentUser();
	}
}