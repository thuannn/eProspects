package com.lemania.eprospects.client.presenter.applicationhome;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.shared.GwtEvent.Type;
import com.google.gwt.user.client.Window;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.google.web.bindery.requestfactory.shared.Receiver;
import com.google.web.bindery.requestfactory.shared.ServerFailure;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ContentSlot;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.gwtplatform.mvp.client.proxy.RevealContentHandler;
import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.lemania.eprospects.client.CurrentUser;
import com.lemania.eprospects.client.FieldValidation;
import com.lemania.eprospects.client.NotificationTypes;
import com.lemania.eprospects.client.event.ApplicationStartEvent;
import com.lemania.eprospects.client.event.DrawSchoolInterfaceEvent;
import com.lemania.eprospects.client.event.LoginAuthenticatedEvent;
import com.lemania.eprospects.client.presenter.mainpage.MainPagePresenter;
import com.lemania.eprospects.client.place.NameTokens;
import com.lemania.eprospects.shared.applicationform.ApplicationFormProxy;
import com.lemania.eprospects.shared.applicationform.ApplicationFormRequestFactory;
import com.lemania.eprospects.shared.applicationform.ApplicationFormRequestFactory.ApplicationFormRequestContext;
import com.lemania.eprospects.shared.service.EventSourceRequestTransport;

public class ApplicationHomePresenter
		extends
		Presenter<ApplicationHomePresenter.MyView, ApplicationHomePresenter.MyProxy>
		implements ApplicationHomeUiHandlers {
	interface MyView extends View, HasUiHandlers<ApplicationHomeUiHandlers> {
		//
		void initializeUI();
		void showApplicationIDRequest();
	}

	@ContentSlot
	public static final Type<RevealContentHandler<?>> SLOT_ApplicationHome = new Type<RevealContentHandler<?>>();

	@NameToken(NameTokens.applicationhome)
	@ProxyCodeSplit
	public interface MyProxy extends ProxyPlace<ApplicationHomePresenter> {
	}

	@Inject
	public ApplicationHomePresenter(EventBus eventBus, MyView view,
			MyProxy proxy) {
		super(eventBus, view, proxy, MainPagePresenter.TYPE_SetMainContent);

		getView().setUiHandlers(this);
	}
	

	/*
	 * */
	protected void onBind() {
		//
		super.onBind();
		//
		getEventBus().fireEvent( new DrawSchoolInterfaceEvent() );
	}
	

	/*
	 * */
	protected void onReset() {
		//
		super.onReset();
		//
		getView().initializeUI();
	}
	

	/*
	 * Validate the email, if it exist in the DB, ask for the application id, otherwise create a new application
	 * */
	@Override
	public void startApplication(final String emailAddress, final boolean createNew, boolean editOne, String appId ) {
		// Check the email address
		if ( ! FieldValidation.isValidEmailAddress(emailAddress)) {
			Window.alert( NotificationTypes.invalid_input + "Email");
			return;
		}
		// If it's for editing an existing one, check if user entered the app id
		if (editOne && appId.equals("")) {
			Window.alert( NotificationTypes.invalid_input + " Application ID");
			return;
		}
		//
		if (editOne && !appId.equals("")) {
			loadExistingApplication( emailAddress, appId );
			return;
		}
		//
		ApplicationFormRequestFactory rf = GWT.create(ApplicationFormRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ApplicationFormRequestContext rc = rf.applicationFormRequest();
		
		rc.checkExistence(emailAddress).fire(new Receiver<Boolean>(){
			@Override
			public void onSuccess(Boolean existed){
				if (existed) {
					if (createNew)
						createNewApplication( emailAddress );
					else
						getView().showApplicationIDRequest();
				} else {
					createNewApplication( emailAddress );
				}
			}
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
		});
	}
	
	
	/*
	 * */
	private void loadExistingApplication(String emailAddress, String appId) {
		//
		ApplicationFormRequestFactory rf = GWT.create(ApplicationFormRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ApplicationFormRequestContext rc = rf.applicationFormRequest();
		
		rc.loadAndReturn( emailAddress, appId ).fire(new Receiver<ApplicationFormProxy>() {
			@Override
			public void onSuccess(ApplicationFormProxy app){
				// Keep the current user info and fire an event
				CurrentUser curUser = new CurrentUser();
				curUser.setUserEmail( app.getEmailAddress() );
				curUser.setApplicationId( app.getApplicationID() );
				curUser.setCandidate( true );
				curUser.setLoggedIn(true);
				getEventBus().fireEvent( new LoginAuthenticatedEvent(curUser) );
				// Go to the next page
				getEventBus().fireEvent( new ApplicationStartEvent() );
			}
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
		});
	}
	

	/*
	 * */
	void createNewApplication( final String emailAddress ) {
		//
		ApplicationFormRequestFactory rf = GWT.create(ApplicationFormRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ApplicationFormRequestContext rc = rf.applicationFormRequest();
		
		rc.saveAndReturn( emailAddress ).fire(new Receiver<ApplicationFormProxy>() {
			@Override
			public void onSuccess(ApplicationFormProxy app){
				// Keep the current user info and fire an event
				CurrentUser curUser = new CurrentUser();
				curUser.setUserEmail( app.getEmailAddress() );
				curUser.setApplicationId( app.getApplicationID() );
				curUser.setCandidate( true );
				curUser.setLoggedIn(true);
				getEventBus().fireEvent( new LoginAuthenticatedEvent(curUser) );
				// Go to the next page
				getEventBus().fireEvent( new ApplicationStartEvent() );
			}
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
		});
	}

}
