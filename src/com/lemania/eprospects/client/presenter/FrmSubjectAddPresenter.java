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
import com.lemania.eprospects.client.presenter.mainpage.MainPagePresenter;
import com.lemania.eprospects.client.uihandler.FrmSubjectAddUiHandler;
import com.lemania.eprospects.shared.SubjectProxy;
import com.lemania.eprospects.shared.service.EventSourceRequestTransport;
import com.lemania.eprospects.shared.service.SubjectRequestFactory;
import com.lemania.eprospects.shared.service.SubjectRequestFactory.SubjectRequestContext;
import com.gwtplatform.mvp.client.annotations.UseGatekeeper;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.Window;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.google.web.bindery.requestfactory.shared.Receiver;
import com.google.web.bindery.requestfactory.shared.ServerFailure;
import com.gwtplatform.mvp.client.proxy.RevealContentEvent;

public class FrmSubjectAddPresenter
		extends Presenter<FrmSubjectAddPresenter.MyView, FrmSubjectAddPresenter.MyProxy> 
		implements FrmSubjectAddUiHandler, LoginAuthenticatedHandler {
	
	//
	private CurrentUser currentUser;
	

	public interface MyView extends View, HasUiHandlers<FrmSubjectAddUiHandler> {
		void resetForm();
		void showStatus(String msg);
	}

	@ProxyCodeSplit
	@NameToken(NameTokens.subjectadd)
	@UseGatekeeper(AdminGateKeeper.class)
	public interface MyProxy extends ProxyPlace<FrmSubjectAddPresenter> {
	}

	@Inject
	public FrmSubjectAddPresenter(final EventBus eventBus, final MyView view,
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
	protected void onReset(){
		//
		super.onReset();
		//
		this.getEventBus().fireEvent( new PageAfterSelectEvent(NameTokens.subjectadd));		
		// Thuan
		getView().resetForm();
	}
	
	
	/**/
	@Override
	public void addNewSubject(String subjectName, String defaultCoef, Boolean isActive) {
		//
		if (this.currentUser.isReadOnly()){
			Window.alert(NotificationTypes.readOnly);
			return;
		}
		
		// Validate data
		if ( subjectName.isEmpty() ){
			Window.alert( NotificationTypes.invalid_input + " - Nom de la matière.");
			return;
		}
		if ( FieldValidation.isNumeric( defaultCoef) ) {
			if ( Double.parseDouble( defaultCoef ) < 0 ) {
				Window.alert( NotificationTypes.invalid_input + " - Coefficient");
				return;
			}
		} else {
			Window.alert( NotificationTypes.invalid_input + " - Coefficient");
			return;
		}
		// Save
		SubjectRequestFactory rf = GWT.create(SubjectRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		SubjectRequestContext rc = rf.subjectRequest();
		
		SubjectProxy ep = rc.create(SubjectProxy.class);
		ep.setSubjectName( subjectName );
		ep.setDefaultCoef( Double.parseDouble( defaultCoef ) );
		ep.setIsActive( isActive );
		rc.save(ep).fire( new Receiver<Void>() {
			@Override
			public void onSuccess(Void response){
				getView().showStatus( NotificationTypes.subject_create_good );
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
