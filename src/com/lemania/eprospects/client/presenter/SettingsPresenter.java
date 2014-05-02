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
import com.lemania.eprospects.client.NotificationTypes;
import com.lemania.eprospects.client.event.LoginAuthenticatedEvent;
import com.lemania.eprospects.client.event.PageAfterSelectEvent;
import com.lemania.eprospects.client.event.LoginAuthenticatedEvent.LoginAuthenticatedHandler;
import com.lemania.eprospects.client.place.NameTokens;
import com.lemania.eprospects.client.presenter.MainPagePresenter;
import com.lemania.eprospects.client.uihandler.SettingOptionsUiHandler;
import com.lemania.eprospects.shared.SettingOptionProxy;
import com.lemania.eprospects.shared.service.EventSourceRequestTransport;
import com.lemania.eprospects.shared.service.SettingOptionRequestFactory;
import com.lemania.eprospects.shared.service.UserRequestFactory;
import com.lemania.eprospects.shared.service.SettingOptionRequestFactory.SettingOptionRequestContext;
import com.lemania.eprospects.shared.service.UserRequestFactory.UserRequestContext;
import com.gwtplatform.mvp.client.annotations.UseGatekeeper;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.Window;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.google.web.bindery.requestfactory.shared.Receiver;
import com.google.web.bindery.requestfactory.shared.ServerFailure;
import com.gwtplatform.mvp.client.proxy.RevealContentEvent;

public class SettingsPresenter 
	extends Presenter<SettingsPresenter.MyView, SettingsPresenter.MyProxy> 
	implements SettingOptionsUiHandler, LoginAuthenticatedHandler {
	
	//
	private CurrentUser currentUser;

	public interface MyView extends View, HasUiHandlers<SettingOptionsUiHandler>{
		//
		void setUpdateStatus(String text);
		//
		void initializeInterface(boolean isAdmin);
		//
		void populateCurrentSettings(List<SettingOptionProxy> settingOptions);
	}

	@ProxyCodeSplit
	@NameToken(NameTokens.settings)
	@UseGatekeeper(AdminGateKeeper.class)
	public interface MyProxy extends ProxyPlace<SettingsPresenter> {
	}

	@Inject
	public SettingsPresenter(final EventBus eventBus, final MyView view,
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
		
		// Set this presenter as UiHandler
		getView().setUiHandlers(this);		
	}

	@Override
	protected void onReset() {
		//
		super.onReset();
		//
		this.getEventBus().fireEvent( new PageAfterSelectEvent(NameTokens.settings));
		
		// Retrieve the current settings
		if (currentUser.getUserEmail().equals("thuannn@gmail.com"))
			getView().initializeInterface(true);
		else
			getView().initializeInterface(false);
		//
		retrieveCurrentSettings();
	}

	@Override
	public void updateSettingOptionDeadline(String dayNumber) {
		//
		if (this.currentUser.isReadOnly()){
			Window.alert(NotificationTypes.readOnly);
			return;
		}
		
		//
		SettingOptionRequestFactory rf = GWT.create(SettingOptionRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		SettingOptionRequestContext rc = rf.settingOptionRequest();
		rc.save("DEADLINE", dayNumber).fire(new Receiver<Void>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(Void response) {
				updateSuccessNotice();
			}
		});
	}
	
	
	/*
	 * 
	 * */
	private void retrieveCurrentSettings(){
		SettingOptionRequestFactory rf = GWT.create(SettingOptionRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		SettingOptionRequestContext rc = rf.settingOptionRequest();
		rc.listAll().fire(new Receiver<List<SettingOptionProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<SettingOptionProxy> response) {
				getView().populateCurrentSettings(response);
			}
		});
	}

	
	/*
	 * */
	@Override
	public void updateSettingOptionManualBlock(Boolean blnBlock) {
		//
		if (this.currentUser.isReadOnly()){
			Window.alert(NotificationTypes.readOnly);
			return;
		}
		
		//
		SettingOptionRequestFactory rf = GWT.create(SettingOptionRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		SettingOptionRequestContext rc = rf.settingOptionRequest();
		rc.save("BLOCK", blnBlock.toString()).fire(new Receiver<Void>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(Void response) {
				updateSuccessNotice();
			}
		});
	}

	
	/*
	 * */
	protected void updateSuccessNotice() {
		getView().setUpdateStatus("Setting saved.");
	}

	
	/*
	 * */
	@Override
	public void updateCurrentEcole(String ecoleCode) {
		//
		if (this.currentUser.isReadOnly()){
			Window.alert(NotificationTypes.readOnly);
			return;
		}
		
		//
		SettingOptionRequestFactory rf = GWT.create(SettingOptionRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		SettingOptionRequestContext rc = rf.settingOptionRequest();
		rc.save("ECOLE", ecoleCode ).fire(new Receiver<Void>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(Void response) {
				updateSuccessNotice();
			}
		});
	}

	/*
	 * */
	@Override
	public void fixStudentName() {
		//
		if (this.currentUser.isReadOnly()){
			Window.alert(NotificationTypes.readOnly);
			return;
		}
		
		//
		UserRequestFactory rf = GWT.create(UserRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		UserRequestContext rc = rf.userRequest();		
		rc.fixStudentName().fire( new Receiver<Void>(){
			@Override
			public void onFailure(ServerFailure error) {
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(Void response) {
				//
			}
		} );	
	}

	/*
	 * 
	 * */
	@ProxyEvent
	@Override
	public void onLoginAuthenticated(LoginAuthenticatedEvent event) {
		//
		this.currentUser = event.getCurrentUser();
	}
	

	/*
	 * 
	 * */
	@Override
	public void updateDeadlinesMatu(String deadlineT1, String deadlineT2) {
		// 
		if (this.currentUser.isReadOnly()){
			Window.alert(NotificationTypes.readOnly);
			return;
		}
		//
		saveDeadline(NotificationTypes.deadline_matu_t1, deadlineT1);
		saveDeadline(NotificationTypes.deadline_matu_t2, deadlineT2);		
	}
	

	/*
	 * 
	 * */
	private void saveDeadline(String code, String value) {
		//
		if (this.currentUser.isReadOnly()){
			Window.alert(NotificationTypes.readOnly);
			return;
		}
		
		// 
		SettingOptionRequestFactory rf = GWT.create(SettingOptionRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		SettingOptionRequestContext rc = rf.settingOptionRequest();
		rc.save(code, value ).fire(new Receiver<Void>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(Void response) {
				updateSuccessNotice();
			}
		});
	}
	

	/*
	 * 
	 * */
	@Override
	public void updateDeadlinesES(String deadlineT1, String deadlineT2, String deadlineT3) {
		// 
		if (this.currentUser.isReadOnly()){
			Window.alert(NotificationTypes.readOnly);
			return;
		}
		//
		saveDeadline(NotificationTypes.deadline_es_t1, deadlineT1);
		saveDeadline(NotificationTypes.deadline_es_t2, deadlineT2);	
		saveDeadline(NotificationTypes.deadline_es_t3, deadlineT3);
	}

	/*
	 * */
	@Override
	public void updateDeadlinesBAC(String deadlineT1, String deadlineT2,
			String deadlineT3) {
		// 
		if (this.currentUser.isReadOnly()){
			Window.alert(NotificationTypes.readOnly);
			return;
		}
		//
		saveDeadline(NotificationTypes.deadline_bac_t1, deadlineT1);
		saveDeadline(NotificationTypes.deadline_bac_t2, deadlineT2);	
		saveDeadline(NotificationTypes.deadline_bac_t3, deadlineT3);
	}	
}
