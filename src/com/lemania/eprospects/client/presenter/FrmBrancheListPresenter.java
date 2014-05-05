package com.lemania.eprospects.client.presenter;

import java.util.List;

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
import com.lemania.eprospects.client.event.BrancheNameAfterChangeEvent;
import com.lemania.eprospects.client.event.LoginAuthenticatedEvent;
import com.lemania.eprospects.client.event.PageAfterSelectEvent;
import com.lemania.eprospects.client.event.BrancheNameAfterChangeEvent.BrancheNameAfterChangeHandler;
import com.lemania.eprospects.client.event.LoginAuthenticatedEvent.LoginAuthenticatedHandler;
import com.lemania.eprospects.client.place.NameTokens;
import com.lemania.eprospects.client.presenter.mainpage.MainPagePresenter;
import com.lemania.eprospects.client.uihandler.FrmBrancheListUiHandler;
import com.lemania.eprospects.shared.BrancheProxy;
import com.lemania.eprospects.shared.service.BrancheRequestFactory;
import com.lemania.eprospects.shared.service.BulletinBrancheRequestFactory;
import com.lemania.eprospects.shared.service.EventSourceRequestTransport;
import com.lemania.eprospects.shared.service.BrancheRequestFactory.BrancheRequestContext;
import com.lemania.eprospects.shared.service.BulletinBrancheRequestFactory.BulletinBrancheRequestContext;
import com.gwtplatform.mvp.client.annotations.UseGatekeeper;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.Window;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.google.web.bindery.requestfactory.shared.Receiver;
import com.google.web.bindery.requestfactory.shared.ServerFailure;
import com.gwtplatform.mvp.client.proxy.RevealContentEvent;

public class FrmBrancheListPresenter
		extends Presenter<FrmBrancheListPresenter.MyView, FrmBrancheListPresenter.MyProxy>
		implements FrmBrancheListUiHandler, LoginAuthenticatedHandler, BrancheNameAfterChangeHandler {
	
	//
	private CurrentUser currentUser;
	private String oldBrancheName = "";
	private String newBrancheName = "";
	

	public interface MyView extends View, HasUiHandlers<FrmBrancheListUiHandler> {
		//
		public void initializeBrancheTable();
		public void setBrancheTableData(List<BrancheProxy> branches);
		public void refreshUpdatedBranche( BrancheProxy branche );
	}
	

	@ProxyCodeSplit
	@NameToken(NameTokens.branchelist)
	@UseGatekeeper(AdminGateKeeper.class)
	public interface MyProxy extends ProxyPlace<FrmBrancheListPresenter> {
	}
	

	@Inject
	public FrmBrancheListPresenter(final EventBus eventBus, final MyView view,
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
		getView().initializeBrancheTable();
	}
	
	
	@Override
	protected void onReset() {
		//
		super.onReset();
		//
		this.getEventBus().fireEvent( new PageAfterSelectEvent(NameTokens.branchelist));
		// Thuan
		loadBrancheList();
	}
	
	
	/* 
	 * Load branche list when form is opened 
	 * */
	public void loadBrancheList(){
		BrancheRequestContext rc = getBrancheRequestContext();
		rc.listAll().fire(new Receiver<List<BrancheProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<BrancheProxy> response) {
				getView().setBrancheTableData(response);
			}
		});
	}
	
	
	/* Get the request context for BrancheRequestFactory
	 * Used in every function which call to Request Factory */
	public BrancheRequestContext getBrancheRequestContext() {
		BrancheRequestFactory rf = GWT.create(BrancheRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		return rf.brancheRequest();
	}


	// Update a branche, then update the datagrid
	@Override
	public void updateBranche(BrancheProxy branche, String brancheName, String brancheCoef, Boolean isActive) {
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
		
		// In case of name changing, keep the values and fire an event after to update all the bulletin
		if (!branche.getBrancheName().equals(brancheName)) {
			oldBrancheName = branche.getBrancheName();
			newBrancheName = brancheName;
		}
		
		// Update
		BrancheRequestContext rc = getBrancheRequestContext();
		branche = rc.edit(branche);
		branche.setBrancheName(brancheName);
		branche.setDefaultCoef(Double.parseDouble(brancheCoef));
		branche.setIsActive(isActive);
		
		rc.saveAndReturn(branche).fire(new Receiver<BrancheProxy>(){
			@Override
			public void onFailure(ServerFailure error){
				//
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(BrancheProxy response) {
				//
				getView().refreshUpdatedBranche(response);
				//
				if (!oldBrancheName.equals(newBrancheName))
					getEventBus().fireEvent(new BrancheNameAfterChangeEvent());
			}
		});
		//
	}


	/*
	 * */
	@ProxyEvent
	@Override
	public void onLoginAuthenticated(LoginAuthenticatedEvent event) {
		//
		this.currentUser = event.getCurrentUser();
	}


	/*
	 * */
	@ProxyEvent
	@Override
	public void onBrancheNameAfterChange(BrancheNameAfterChangeEvent event) {
		//
		if (this.currentUser.isReadOnly()){
			Window.alert(NotificationTypes.readOnly);
			return;
		}
		//		
		BulletinBrancheRequestFactory rf = GWT.create( BulletinBrancheRequestFactory.class );
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		BulletinBrancheRequestContext rc = rf.bulletinBrancheRequest();		
		rc.refreshBulletinBrancheNames(oldBrancheName, newBrancheName).fire(new Receiver<Void>(){
			@Override
			public void onFailure(ServerFailure error){
				//
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(Void response) {
				//				
			}
		});
	}
}
