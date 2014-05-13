package com.lemania.eprospects.client.presenter.applicationstep4;

import java.util.List;

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
import com.gwtplatform.mvp.client.annotations.ProxyStandard;
import com.gwtplatform.mvp.client.proxy.Proxy;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.gwtplatform.mvp.client.proxy.RevealContentHandler;
import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.proxy.PlaceRequest;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.lemania.eprospects.client.CurrentUser;
import com.lemania.eprospects.client.event.ApplicationItemSavedEvent;
import com.lemania.eprospects.client.event.ApplicationItemSavedEvent.ApplicationItemSavedHandler;
import com.lemania.eprospects.client.event.ApplicationStep3CompletedEvent;
import com.lemania.eprospects.client.event.ApplicationStep4CompletedEvent;
import com.lemania.eprospects.client.event.GotoPreviousPageEvent;
import com.lemania.eprospects.client.event.LoginAuthenticatedEvent;
import com.lemania.eprospects.client.event.LoginAuthenticatedEvent.LoginAuthenticatedHandler;
import com.lemania.eprospects.client.presenter.mainpage.MainPagePresenter;
import com.lemania.eprospects.client.place.NameTokens;
import com.lemania.eprospects.shared.applicationform.ApplicationFormProxy;
import com.lemania.eprospects.shared.applicationform.ApplicationFormRequestFactory;
import com.lemania.eprospects.shared.applicationform.ApplicationFormRequestFactory.ApplicationFormRequestContext;
import com.lemania.eprospects.shared.applicationitem.ApplicationItemProxy;
import com.lemania.eprospects.shared.applicationitem.ApplicationItemRequestFactory;
import com.lemania.eprospects.shared.applicationitem.ApplicationItemRequestFactory.ApplicationItemRequestContext;
import com.lemania.eprospects.shared.service.EventSourceRequestTransport;

public class ApplicationStep4Presenter
		extends
		Presenter<ApplicationStep4Presenter.MyView, ApplicationStep4Presenter.MyProxy>
		implements 
			ApplicationStep4UiHandlers,
			LoginAuthenticatedHandler,
			ApplicationItemSavedHandler {
	
	//
	private CurrentUser curUser;
	
	//
	
	interface MyView extends View, HasUiHandlers<ApplicationStep4UiHandlers> {
		//
		void showApplicationDetails( ApplicationFormProxy app );
		//
		void showSelectedItems( List<ApplicationItemProxy> ais);
	}

	@ContentSlot
	public static final Type<RevealContentHandler<?>> SLOT_ApplicationStep4 = new Type<RevealContentHandler<?>>();

	@NameToken(NameTokens.applicationstep4)
	@ProxyCodeSplit
	public interface MyProxy extends ProxyPlace<ApplicationStep4Presenter> {
	}

	@Inject
	public ApplicationStep4Presenter(EventBus eventBus, MyView view,
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
				getEventBus().fireEvent( new ApplicationItemSavedEvent() );
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
	public void previousStep() {
		//
		getEventBus().fireEvent( new GotoPreviousPageEvent(History.getToken()) );
	}

	@Override
	public void nextStep(boolean optHealthProblemYes, boolean optHealProblemNo,
			String txtHealthProblem, boolean optAllergyYes,
			boolean optAllergyNo, String txtAllergy, boolean optMedicalYes,
			boolean optMedicalNo, String txtMedical, String txtOther) {
			//validate data
			if ( !formCompleted (
					 optHealthProblemYes,
					 optHealProblemNo,
					 txtHealthProblem,
					 optAllergyYes,
					 optAllergyNo,
					 txtAllergy,
					 optMedicalYes,
					 optMedicalNo,
					 txtMedical,
					 txtOther ) )
				return;
			// save data
			ApplicationFormRequestFactory rf = GWT.create(ApplicationFormRequestFactory.class);
			rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
			ApplicationFormRequestContext rc = rf.applicationFormRequest();
			
			rc.saveStep4( curUser.getUserEmail(), curUser.getApplicationId(), 
					optHealthProblemYes,
					optHealProblemNo,
					txtHealthProblem,
					optAllergyYes,
					optAllergyNo,
					txtAllergy,
					optMedicalYes,
					optMedicalNo,
					txtMedical,
					txtOther )
			.fire( new Receiver<Boolean>() {
				@Override
				public void onSuccess(Boolean saved){
					// Go to the next page
					getEventBus().fireEvent( new ApplicationStep4CompletedEvent() );
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
	private boolean formCompleted(boolean optHealthProblemYes,
			boolean optHealProblemNo, String txtHealthProblem,
			boolean optAllergyYes, boolean optAllergyNo, String txtAllergy,
			boolean optMedicalYes, boolean optMedicalNo, String txtMedical,
			String txtOther) {
		// TODO Auto-generated method stub
		return true;
	}

	
	/*
	 * */
	@ProxyEvent
	@Override
	public void onLoginAuthenticated(LoginAuthenticatedEvent event) {
		//
		this.curUser = event.getCurrentUser();
	}
	
	
	/*
	 * */
	@ProxyEvent
	@Override
	public void onApplicationItemSaved(ApplicationItemSavedEvent event) {
		//
		ApplicationItemRequestFactory rf = GWT.create(ApplicationItemRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ApplicationItemRequestContext rc = rf.applicationItemRequest();
		rc.listAll().fire( new Receiver<List<ApplicationItemProxy>>() {
			@Override
			public void onSuccess(List<ApplicationItemProxy> ais){
				// show selected items
				getView().showSelectedItems(ais);
			}
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
		});
	}
}
