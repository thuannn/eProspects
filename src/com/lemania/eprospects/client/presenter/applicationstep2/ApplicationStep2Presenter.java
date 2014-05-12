package com.lemania.eprospects.client.presenter.applicationstep2;

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
import com.lemania.eprospects.client.event.ApplicationStep1CompletedEvent;
import com.lemania.eprospects.client.event.ApplicationStep2CompletedEvent;
import com.lemania.eprospects.client.event.GotoPreviousPageEvent;
import com.lemania.eprospects.client.event.LoginAuthenticatedEvent;
import com.lemania.eprospects.client.event.LoginAuthenticatedEvent.LoginAuthenticatedHandler;
import com.lemania.eprospects.client.presenter.mainpage.MainPagePresenter;
import com.lemania.eprospects.client.place.NameTokens;
import com.lemania.eprospects.shared.ApplicationFormProxy;
import com.lemania.eprospects.shared.service.ApplicationFormRequestFactory;
import com.lemania.eprospects.shared.service.EventSourceRequestTransport;
import com.lemania.eprospects.shared.service.ApplicationFormRequestFactory.ApplicationFormRequestContext;

public class ApplicationStep2Presenter
		extends
		Presenter<ApplicationStep2Presenter.MyView, ApplicationStep2Presenter.MyProxy>
		implements 
			ApplicationStep2UiHandlers,
			LoginAuthenticatedHandler {
	
	//
	CurrentUser curUser;
	
	interface MyView extends View, HasUiHandlers<ApplicationStep2UiHandlers> {
		//
		void initializeUI();
		void showApplicationDetails( ApplicationFormProxy app );
	}

	@ContentSlot
	public static final Type<RevealContentHandler<?>> SLOT_ApplicationStep2 = new Type<RevealContentHandler<?>>();

	@NameToken(NameTokens.applicationstep2)
	@ProxyCodeSplit
	public interface MyProxy extends ProxyPlace<ApplicationStep2Presenter> {
	}

	@Inject
	public ApplicationStep2Presenter(EventBus eventBus, MyView view,
			MyProxy proxy) {
		super(eventBus, view, proxy, MainPagePresenter.TYPE_SetMainContent);

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
			boolean chkApplicaitonFee,
			boolean chkPackAssurance,
			String programmesCode,
			String courseCode,
			String startDate,
			String weekNumber,
			String txtJulyWeek,
			String txtAugustWeek,
			boolean chkContinueAfter,
			boolean optConfortPlusPrivate,
			boolean optConfortPrivate,
			boolean optStandardPrivate,
			boolean optConfortPlusShare,
			boolean optConfortShare,
			boolean optStandardShare,
			boolean optKeyDepositCHF,
			boolean optKeyDepositEuro,
			boolean optKeyDepositUSD ) {
		//validate data
		if ( !formCompleted(
				 chkApplicaitonFee,
				 chkPackAssurance,
				 programmesCode,
				 courseCode,
				 startDate,
				 weekNumber,
				 txtJulyWeek,
				 txtAugustWeek,
				 chkContinueAfter,
				 optConfortPlusPrivate,
				 optConfortPrivate,
				 optStandardPrivate,
				 optConfortPlusShare,
				 optConfortShare,
				 optStandardShare,
				 optKeyDepositCHF,
				 optKeyDepositEuro,
				 optKeyDepositUSD) )
			return;
		// save data
		ApplicationFormRequestFactory rf = GWT.create(ApplicationFormRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ApplicationFormRequestContext rc = rf.applicationFormRequest();
		
		rc.saveStep2( curUser.getUserEmail(), curUser.getApplicationId(), 
				 chkApplicaitonFee,
				 chkPackAssurance,
				 programmesCode,
				 courseCode,
				 startDate,
				 weekNumber,
				 txtJulyWeek,
				 txtAugustWeek,
				 chkContinueAfter,
				 optConfortPlusPrivate,
				 optConfortPrivate,
				 optStandardPrivate,
				 optConfortPlusShare,
				 optConfortShare,
				 optStandardShare,
				 optKeyDepositCHF,
				 optKeyDepositEuro,
				 optKeyDepositUSD )
		.fire( new Receiver<Boolean>() {
			@Override
			public void onSuccess(Boolean saved){
				// Go to the next page
				getEventBus().fireEvent( new ApplicationStep2CompletedEvent() );
			}
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
		});
		//
	}

	
	private boolean formCompleted(boolean chkApplicaitonFee,
			boolean chkPackAssurance, String programmesCode, String courseCode,
			String startDate, String weekNumber, String txtJulyWeek,
			String txtAugustWeek, boolean chkContinueAfter, boolean optConfortPlusPrivate,
			boolean optConfortPrivate, boolean optStandardPrivate,
			boolean optConfortPlusShare, boolean optConfortShare,
			boolean optStandardShare, boolean optKeyDepositCHF,
			boolean optKeyDepositEuro, boolean optKeyDepositUSD) {
		// TODO Auto-generated method stub
		return true;
	}

	/*
	 * */
	@Override
	public void previousStep() {
		//
		this.getEventBus().fireEvent( new GotoPreviousPageEvent( History.getToken()) );
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
