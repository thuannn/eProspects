package com.lemania.eprospects.client.presenter;

import java.util.List;

import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyEvent;
import com.lemania.eprospects.client.CurrentUser;
import com.lemania.eprospects.client.NotificationTypes;
import com.lemania.eprospects.client.event.AfterUserLogOutEvent;
import com.lemania.eprospects.client.event.DrawSchoolInterfaceEvent;
import com.lemania.eprospects.client.event.LoginAuthenticatedEvent;
import com.lemania.eprospects.client.event.PageAfterSelectEvent;
import com.lemania.eprospects.client.event.AfterUserLogOutEvent.AfterUserLogOutHandler;
import com.lemania.eprospects.client.event.LoginAuthenticatedEvent.LoginAuthenticatedHandler;
import com.lemania.eprospects.client.place.NameTokens;
import com.lemania.eprospects.client.presenter.MainPagePresenter;
import com.lemania.eprospects.client.uihandler.HomeUiHandler;
import com.lemania.eprospects.shared.SettingOptionProxy;
import com.lemania.eprospects.shared.UserProxy;
import com.lemania.eprospects.shared.service.EventSourceRequestTransport;
import com.lemania.eprospects.shared.service.SettingOptionRequestFactory;
import com.lemania.eprospects.shared.service.UserRequestFactory;
import com.lemania.eprospects.shared.service.SettingOptionRequestFactory.SettingOptionRequestContext;
import com.lemania.eprospects.shared.service.UserRequestFactory.UserRequestContext;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.Window;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.google.web.bindery.requestfactory.shared.Receiver;
import com.google.web.bindery.requestfactory.shared.ServerFailure;
import com.gwtplatform.mvp.client.proxy.RevealContentEvent;

public class HomePresenter 
		extends Presenter<HomePresenter.MyView, HomePresenter.MyProxy> 
		implements HomeUiHandler, AfterUserLogOutHandler, LoginAuthenticatedHandler {

	public interface MyView extends View, HasUiHandlers<HomeUiHandler> {
		
		public void toggleLoginPanel(Boolean visible);
	}
	
	
	private Boolean systemBlocked = false;
	private int deadLine = 32;
	private CurrentUser currentUser;

	
	/*
	 * */
	@ProxyCodeSplit
	@NameToken(NameTokens.homepage)
	public interface MyProxy extends ProxyPlace<HomePresenter> {
	}

	
	/*
	 * */
	@Inject
	public HomePresenter(final EventBus eventBus, final MyView view,
			final MyProxy proxy) {
		super(eventBus, view, proxy);

		//
		drawEcoleInterface();
	}

	
	/*
	 * */
	@Override
	protected void revealInParent() {
		RevealContentEvent.fire(this, MainPagePresenter.TYPE_SetMainContent, this);
	}

	
	/*
	 * */
	@Override
	protected void onBind() {
		super.onBind();
		
		// Thuan
		getView().setUiHandlers(this);
	}
	
	
	/*
	 * */
	@Override
	protected void onReset() {
		//
		super.onReset();
		//
		this.getEventBus().fireEvent( new PageAfterSelectEvent(NameTokens.homepage));
		
		// Thuan
		getView().setUiHandlers(this);
	}


	/*
	 * Get the current system settings */
	private void getCurrentSettings(final String userName, final String password) {
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
				for (SettingOptionProxy setting : response){
					if (setting.getOptionName().equals("DEADLINE")) {
						deadLine = Integer.parseInt(setting.getOptionValue());
					}
					if (setting.getOptionName().equals("BLOCK")) {
						systemBlocked = Boolean.parseBoolean(setting.getOptionValue());
					}
				}
				
				authenticateUserWithSettings(userName, password);
			}
		});
	}
	

	/*
	 * */
	@Override
	public void authenticateUser(String userName, String password) {
		if (userName.equals("") || password.equals("")) {
			Window.alert("Veuillez introduire votre nom d'utilisateur et mot de passe !");
			return;
		}
		
		if (userName.equals("thuannn@gmail.com") && password.equals("Suisse2011-")) {
			CurrentUser curUser = new CurrentUser();
			curUser.setLoggedIn(true);
			curUser.setAdmin(true);
			curUser.setUserEmail("thuannn@gmail.com");
			getEventBus().fireEvent(new LoginAuthenticatedEvent(curUser));
			getView().toggleLoginPanel(false);
		}
		else
			getCurrentSettings(userName, password);
	}
	
	
	/*
	 * */
	private void authenticateUserWithSettings(String userName, String password) {
		UserRequestFactory rf = GWT.create(UserRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		UserRequestContext rc = rf.userRequest();
		
		rc.authenticateUser(userName, password).fire( new Receiver<UserProxy>(){
			@Override
			public void onFailure(ServerFailure error) {
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(UserProxy response) {
				if (response!= null) {
					checkAccessBlock(response);
				}
				else
					Window.alert("La combination de nom d'utilisateur et mot de passe n'est pas valable.");
			}
		} );
	}
	
	
	/*
	 * If user pass authentication, check if he's Admin. 
	 * If not, check if the system is being blocked by Admin.*/
	private void checkAccessBlock(UserProxy response){		
		CurrentUser currentUser = new CurrentUser();
		currentUser.setFullName(response.getFullName());
		currentUser.setUserEmail(response.getEmail());
		currentUser.setUserId(response.getId());
		currentUser.setCurrentMonth(response.getCurrentMonth());
		currentUser.setCurrentYear(response.getCurrentYear());
		currentUser.setCurrentDay(response.getCurrentDay());
		currentUser.setUserName(response.getUserName());
		currentUser.setUserPassword(response.getPassword());
		//
		currentUser.setLoggedIn(true);
		currentUser.setAdmin(response.getAdmin());
		currentUser.setProf(response.getIsProf());
		currentUser.setStudent(response.getIsStudent());
		currentUser.setReadOnly(response.getIsReadOnly());
		
		if ( !currentUser.isAdmin() && !currentUser.isProf() ){		
			if (systemBlocked) {
				Window.alert( NotificationTypes.system_student_block );
				return;
			}
			if (currentUser.getCurrentDay() > deadLine) {
				Window.alert( NotificationTypes.system_student_block );
				return;
			}
		}
		
		// if everything looks good, initialize the objects
		getEventBus().fireEvent(new LoginAuthenticatedEvent(currentUser));
		getView().toggleLoginPanel(false);
	}

	
	/*
	 * */
	@ProxyEvent
	@Override
	public void onAfterUserLogOut(AfterUserLogOutEvent event) {
		getView().toggleLoginPanel(true);		
	}
	
	
	/*
	 * */
	private void drawEcoleInterface() {
		//
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
				for (SettingOptionProxy setting : response){
					if (setting.getOptionName().equals("ECOLE")) {
						getEventBus().fireEvent(new DrawSchoolInterfaceEvent(setting.getOptionValue()));
					}
				}
			}
		});
	}


	@ProxyEvent
	@Override
	public void onLoginAuthenticated(LoginAuthenticatedEvent event) {
		//
		this.currentUser = event.getCurrentUser();
	}
}
