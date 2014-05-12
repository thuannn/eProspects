package com.lemania.eprospects.client.presenter.applicationstep5;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.shared.GwtEvent.Type;
import com.google.gwt.user.client.History;
import com.google.gwt.user.client.Window;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.google.web.bindery.requestfactory.shared.Receiver;
import com.google.web.bindery.requestfactory.shared.ServerFailure;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ContentSlot;
import com.gwtplatform.mvp.client.annotations.ProxyEvent;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.gwtplatform.mvp.client.proxy.RevealContentHandler;
import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.lemania.eprospects.client.CurrentUser;
import com.lemania.eprospects.client.event.ApplicationStep5CompletedEvent;
import com.lemania.eprospects.client.event.GotoPreviousPageEvent;
import com.lemania.eprospects.client.event.LoginAuthenticatedEvent;
import com.lemania.eprospects.client.event.LoginAuthenticatedEvent.LoginAuthenticatedHandler;
import com.lemania.eprospects.client.presenter.mainpage.MainPagePresenter;
import com.lemania.eprospects.client.place.NameTokens;
import com.lemania.eprospects.shared.ApplicationFormProxy;
import com.lemania.eprospects.shared.service.ApplicationFormRequestFactory;
import com.lemania.eprospects.shared.service.EventSourceRequestTransport;
import com.lemania.eprospects.shared.service.ApplicationFormRequestFactory.ApplicationFormRequestContext;

public class ApplicationStep5Presenter
		extends
		Presenter<ApplicationStep5Presenter.MyView, ApplicationStep5Presenter.MyProxy>
		implements 
			ApplicationStep5UiHandlers,
			LoginAuthenticatedHandler {
	
	//
	private CurrentUser curUser;
	
	interface MyView extends View, HasUiHandlers<ApplicationStep5UiHandlers> {
		//
		void showApplicationDetails( ApplicationFormProxy app );
	}

	@ContentSlot
	public static final Type<RevealContentHandler<?>> SLOT_ApplicationStep5 = new Type<RevealContentHandler<?>>();

	@NameToken(NameTokens.applicationstep5)
	@ProxyCodeSplit
	public interface MyProxy extends ProxyPlace<ApplicationStep5Presenter> {
	}

	@Inject
	public ApplicationStep5Presenter(EventBus eventBus, MyView view,
			MyProxy proxy) {
		super(eventBus, view, proxy, MainPagePresenter.TYPE_SetMainContent);

		getView().setUiHandlers(this);
	}

	protected void onBind() {
		super.onBind();
	}

	protected void onReset() {
		super.onReset();
		//
		loadCurrentApplication();
	}
	
	
	/*
	 * */
	private void loadCurrentApplication() {
		//
		ApplicationFormRequestFactory rf = GWT.create(ApplicationFormRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ApplicationFormRequestContext rc = rf.applicationFormRequest();
		
		rc.loadAndReturn( curUser.getUserEmail(), curUser.getApplicationId()).fire( new Receiver<ApplicationFormProxy>() {
			@Override
			public void onSuccess(ApplicationFormProxy app){
				// show result
				getView().showApplicationDetails(app);
			}
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
		});
	}
	
	

	/*
	 * */
	@Override
	public void nextStep(
			boolean chkConditionAgreement,
			String txtDatePlace,
			String txtFullName
			) {
		//validate data
		if ( !formCompleted (
				 chkConditionAgreement,
				 txtDatePlace,
				 txtFullName ) )
			return;
		// save data
		ApplicationFormRequestFactory rf = GWT.create(ApplicationFormRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ApplicationFormRequestContext rc = rf.applicationFormRequest();
		
		rc.saveStep5( curUser.getUserEmail(), curUser.getApplicationId(), 
				 chkConditionAgreement,
				 txtDatePlace,
				 txtFullName )
		.fire( new Receiver<Boolean>() {
			@Override
			public void onSuccess(Boolean saved){
				// Go to the next page
				getEventBus().fireEvent( new ApplicationStep5CompletedEvent() );
			}
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
		});
		//
	}

	
	/*
	 * */
	private boolean formCompleted(boolean chkConditionAgreement,
			String txtDatePlace, String txtFullName) {
		// TODO Auto-generated method stub
		return true;
	}
	

	/*
	 * */
	@Override
	public void previousStep() {
		//
		getEventBus().fireEvent( new GotoPreviousPageEvent(History.getToken()) );
	}

	
	/*
	 * */
	@ProxyEvent
	@Override
	public void onLoginAuthenticated(LoginAuthenticatedEvent event) {
		//
		this.curUser = event.getCurrentUser();
	}

}
