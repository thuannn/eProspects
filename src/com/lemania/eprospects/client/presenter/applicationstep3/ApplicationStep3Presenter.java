package com.lemania.eprospects.client.presenter.applicationstep3;

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
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.gwtplatform.mvp.client.proxy.RevealContentHandler;
import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.ProxyEvent;
import com.lemania.eprospects.client.CurrentUser;
import com.lemania.eprospects.client.event.ApplicationItemSavedEvent;
import com.lemania.eprospects.client.event.ApplicationItemSavedEvent.ApplicationItemSavedHandler;
import com.lemania.eprospects.client.event.ApplicationStep3CompletedEvent;
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

public class ApplicationStep3Presenter
		extends
		Presenter<ApplicationStep3Presenter.MyView, ApplicationStep3Presenter.MyProxy>
		implements 
				ApplicationStep3UiHandlers,
				LoginAuthenticatedHandler,
				ApplicationItemSavedHandler {
	
	//
	private CurrentUser curUser;
	
	interface MyView extends View, HasUiHandlers<ApplicationStep3UiHandlers> {
		//
		void initializeUi();
		//
		void showApplicationDetails( ApplicationFormProxy app );
		//
		void showSelectedItems( List<ApplicationItemProxy> ais);
	}

	@ContentSlot
	public static final Type<RevealContentHandler<?>> SLOT_ApplicationStep3 = new Type<RevealContentHandler<?>>();

	@NameToken(NameTokens.applicationstep3)
	@ProxyCodeSplit
	public interface MyProxy extends ProxyPlace<ApplicationStep3Presenter> {
	}

	@Inject
	public ApplicationStep3Presenter(EventBus eventBus, MyView view,
			MyProxy proxy) {
		super(eventBus, view, proxy, MainPagePresenter.TYPE_SetMainContent);

		getView().setUiHandlers(this);
	}

	protected void onBind() {
		super.onBind();
		//
		getView().initializeUi();
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
	public void nextStep( 
			String lstAirportDirection,
			boolean optPrivateCourse,
			String txtPrivateCoursePeriod,
			boolean chkGeneveOneway,
			boolean chkZurichOneway,
			boolean chkGeneveRoundtrip,
			boolean chkZurichRoundtrip,
			String txtAirlineName,
			String txtArriveVol,
			String txtArriveTime,
			String txtDepartVol,
			String txtDepartTime,
			boolean chkVisaLetterRequest,
			boolean optMoneyDepositYes,
			boolean optMoneyDepositNo,
			String txtMoneyDepositAmount,
			boolean chkMealPackage,
			boolean chkActivitiesPackage ) {
		//validate data
		if ( !formCompleted(
				 lstAirportDirection,
				 optPrivateCourse,
				 txtPrivateCoursePeriod,
				 chkGeneveOneway,
				 chkZurichOneway,
				 chkGeneveRoundtrip,
				 chkZurichRoundtrip,
				 txtAirlineName,
				 txtArriveVol,
				 txtArriveTime,
				 txtDepartVol,
				 txtDepartTime,
				 chkVisaLetterRequest,
				 optMoneyDepositYes,
				 optMoneyDepositNo,
				 txtMoneyDepositAmount,
				 chkMealPackage,
				 chkActivitiesPackage) )
			return;
		// save data
		ApplicationFormRequestFactory rf = GWT.create(ApplicationFormRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ApplicationFormRequestContext rc = rf.applicationFormRequest();
		
		rc.saveStep3( curUser.getUserEmail(), curUser.getApplicationId(), 
				lstAirportDirection,
				 optPrivateCourse,
				 txtPrivateCoursePeriod,
				 chkGeneveOneway,
				 chkZurichOneway,
				 chkGeneveRoundtrip,
				 chkZurichRoundtrip,
				 txtAirlineName,
				 txtArriveVol,
				 txtArriveTime,
				 txtDepartVol,
				 txtDepartTime,
				 chkVisaLetterRequest,
				 optMoneyDepositYes,
				 optMoneyDepositNo,
				 txtMoneyDepositAmount,
				 chkMealPackage,
				 chkActivitiesPackage )
		.fire( new Receiver<Boolean>() {
			@Override
			public void onSuccess(Boolean saved){
				// Go to the next page
				getEventBus().fireEvent( new ApplicationStep3CompletedEvent() );
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
	private boolean formCompleted(
			String lstAirportDirection,
			boolean optPrivateCourse,
			String txtPrivateCoursePeriod,
			boolean chkGeneveOneway,
			boolean chkZurichOneway,
			boolean chkGeneveRoundtrip,
			boolean chkZurichRoundtrip,
			String txtAirlineName,
			String txtArriveVol,
			String txtArriveTime,
			String txtDepartVol,
			String txtDepartTime,
			boolean chkVisaLetterRequest,
			boolean optMoneyDepositYes,
			boolean optMoneyDepositNo,
			String txtMoneyDepositAmount,
			boolean chkMealPackage,
			boolean chkActivitiesPackage) {
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
