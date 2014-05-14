package com.lemania.eprospects.client.presenter.applicationpayment;

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
import com.gwtplatform.mvp.client.annotations.UseGatekeeper;
import com.gwtplatform.mvp.client.proxy.PlaceManager;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.gwtplatform.mvp.client.proxy.RevealContentHandler;
import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.lemania.eprospects.client.ApplicationItem;
import com.lemania.eprospects.client.CurrentUser;
import com.lemania.eprospects.client.LoggedInGatekeeper;
import com.lemania.eprospects.client.NotificationTypes;
import com.lemania.eprospects.client.event.ApplicationItemSavedEvent;
import com.lemania.eprospects.client.event.ApplicationItemSavedEvent.ApplicationItemSavedHandler;
import com.lemania.eprospects.client.event.ApplicationItemSelectedEvent;
import com.lemania.eprospects.client.event.ApplicationItemSelectedEvent.ApplicationItemSelectedHandler;
import com.lemania.eprospects.client.event.ApplicationPaymentEvent;
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

public class ApplicationPaymentPresenter
		extends
		Presenter<ApplicationPaymentPresenter.MyView, ApplicationPaymentPresenter.MyProxy>
		implements 
				ApplicationPaymentUiHandlers,
				LoginAuthenticatedHandler,
				ApplicationItemSelectedHandler,
				ApplicationItemSavedHandler {
	
	//
	private CurrentUser curUser;
	//
	private final PlaceManager placeManager;
	
	
	interface MyView extends View, HasUiHandlers<ApplicationPaymentUiHandlers> {
		//
		void initializeUI();
		//
		void showApplicationDetails( ApplicationFormProxy app );
		//
		void showSelectedItems( List<ApplicationItemProxy> ais);
	}

	@ContentSlot
	public static final Type<RevealContentHandler<?>> SLOT_ApplicationPayment = new Type<RevealContentHandler<?>>();

	@NameToken(NameTokens.applicationpayment)
	@ProxyCodeSplit
	@UseGatekeeper(LoggedInGatekeeper.class)
	public interface MyProxy extends ProxyPlace<ApplicationPaymentPresenter> {
	}

	@Inject
	public ApplicationPaymentPresenter(EventBus eventBus, MyView view,
			MyProxy proxy, PlaceManager placeManager ) {
		super(eventBus, view, proxy, MainPagePresenter.TYPE_SetMainContent);
		
		this.placeManager = placeManager;

		getView().setUiHandlers(this);
	}

	protected void onBind() {
		super.onBind();
		//
		getView().initializeUI();
	}

	protected void onReset() {
		super.onReset();
		//
		loadCurrentApplication();
		//
		placeManager.setOnLeaveConfirmation( NotificationTypes.system_unsaveddata );
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
			boolean optPaypal,
			boolean optPayDirect,
			boolean optBankTransfer,
			boolean optDirectCash,
			boolean optDirectCard ) {
		//validate data
		if ( !formCompleted (
				 optPaypal,
				 optPayDirect,
				 optBankTransfer,
				 optDirectCash,
				 optDirectCard ) )
			return;
		// save data
		ApplicationFormRequestFactory rf = GWT.create(ApplicationFormRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ApplicationFormRequestContext rc = rf.applicationFormRequest();
		
		rc.savePaymentStep( curUser.getUserEmail(), curUser.getApplicationId(), 
				 optPaypal,
				 optPayDirect,
				 optBankTransfer,
				 optDirectCash,
				 optDirectCard )
		.fire( new Receiver<Boolean>() {
			@Override
			public void onSuccess(Boolean saved){
				//
				placeManager.setOnLeaveConfirmation(null);
				// Go to the next page
				getEventBus().fireEvent( new ApplicationPaymentEvent() );
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
	private boolean formCompleted(boolean optPaypal, boolean optPayDirect,
			boolean optBankTransfer, boolean optDirectCash,
			boolean optDirectCard) {
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

	
	/*
	 * 
	 * */
	@ProxyEvent
	@Override
	public void onApplicationItemSelected(ApplicationItemSelectedEvent event) {
		//
		ApplicationItem ai = event.getAi();
		ApplicationItemRequestFactory rf = GWT.create(ApplicationItemRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ApplicationItemRequestContext rc = rf.applicationItemRequest();
		rc.saveAndReturn ( 
				curUser.getUserEmail(), 
				curUser.getApplicationId(), 
				ai.getItemCode(), 
				ai.getItemDescription(), 
				ai.getItemAmount() )
		.fire( new Receiver<ApplicationItemProxy>() {
			@Override
			public void onSuccess(ApplicationItemProxy ai){
				// Go to the next page
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
	@ProxyEvent
	@Override
	public void onApplicationItemSaved(ApplicationItemSavedEvent event) {
		//
		ApplicationItemRequestFactory rf = GWT.create(ApplicationItemRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ApplicationItemRequestContext rc = rf.applicationItemRequest();
		rc.listAll( curUser.getUserEmail(), curUser.getApplicationId() ).fire( new Receiver<List<ApplicationItemProxy>>() {
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
	
	
	
	/*
	 * */
	@Override
	public void toggleLeaveNotice() {
		//
		placeManager.setOnLeaveConfirmation( NotificationTypes.system_unsaveddata );
	}

	@Override
	public void clearLeaveNotice() {
		//
		placeManager.setOnLeaveConfirmation( null );
	}

}
