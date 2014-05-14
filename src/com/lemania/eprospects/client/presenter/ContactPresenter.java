package com.lemania.eprospects.client.presenter;

import java.util.List;

import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyEvent;
import com.lemania.eprospects.client.CurrentUser;
import com.lemania.eprospects.client.event.ApplicationStep5CompletedEvent;
import com.lemania.eprospects.client.event.ApplicationStep5CompletedEvent.ApplicationStep5CompletedHandler;
import com.lemania.eprospects.client.event.LoginAuthenticatedEvent;
import com.lemania.eprospects.client.event.PageAfterSelectEvent;
import com.lemania.eprospects.client.event.LoginAuthenticatedEvent.LoginAuthenticatedHandler;
import com.lemania.eprospects.client.place.NameTokens;
import com.lemania.eprospects.client.presenter.mainpage.MainPagePresenter;
import com.lemania.eprospects.client.uihandler.ContactUiHandler;
import com.lemania.eprospects.shared.applicationform.ApplicationFormProxy;
import com.lemania.eprospects.shared.applicationform.ApplicationFormRequestFactory;
import com.lemania.eprospects.shared.applicationform.ApplicationFormRequestFactory.ApplicationFormRequestContext;
import com.lemania.eprospects.shared.applicationitem.ApplicationItemProxy;
import com.lemania.eprospects.shared.applicationitem.ApplicationItemRequestFactory;
import com.lemania.eprospects.shared.applicationitem.ApplicationItemRequestFactory.ApplicationItemRequestContext;
import com.lemania.eprospects.shared.service.ContactRequestFactory;
import com.lemania.eprospects.shared.service.EventSourceRequestTransport;
import com.lemania.eprospects.shared.service.ContactRequestFactory.ContactRequestContext;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.Window;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.google.web.bindery.requestfactory.shared.Receiver;
import com.google.web.bindery.requestfactory.shared.ServerFailure;
import com.gwtplatform.mvp.client.proxy.RevealContentEvent;


public class ContactPresenter extends
		Presenter<ContactPresenter.MyView, ContactPresenter.MyProxy> 
		implements 
				ContactUiHandler, 
				LoginAuthenticatedHandler,
				ApplicationStep5CompletedHandler {

	//
	private CurrentUser currentUser;
	
	public interface MyView extends View, HasUiHandlers<ContactUiHandler> {
		//
		void resetForm();
	}

	@ProxyCodeSplit
	@NameToken(NameTokens.contact)
	public interface MyProxy extends ProxyPlace<ContactPresenter> {
	}

	@Inject
	public ContactPresenter(final EventBus eventBus, final MyView view,
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
	protected void onReset() {
		super.onReset();
		
		//
		this.getEventBus().fireEvent( new PageAfterSelectEvent(NameTokens.contact));
	}

	/*
	 * No need to check Read-only status of the user 
	 * */
	@Override
	public void sendMessage(String lastName, String firstName, String email, String message) {		
		//
		ContactRequestFactory rf = GWT.create(ContactRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ContactRequestContext rc = rf.contactRequest();
		rc.sendEmail( currentUser.getApplicationId(), lastName, firstName, email, message).fire(new Receiver<Void>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(Void response) {
				getView().resetForm();
			}
		});
	}

	
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
	public void onApplicationStep5Completed(ApplicationStep5CompletedEvent event) {
		//
		ApplicationFormRequestFactory rf = GWT.create(ApplicationFormRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ApplicationFormRequestContext rc = rf.applicationFormRequest();
		
		rc.loadAndReturn( currentUser.getUserEmail(), currentUser.getApplicationId() ).fire(new Receiver<ApplicationFormProxy>() {
			@Override
			public void onSuccess(ApplicationFormProxy app){
				getApplicationItems( app.getLastName_Student(), app.getFirstName_Student(), currentUser.getUserEmail(), applicationBody(app), app );
			}
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
		});
	}
	
	/*
	 * */
	private void getApplicationItems(final String fistName, final String lastName, final String email, final String applicationBody, final ApplicationFormProxy app){
		//
		ApplicationItemRequestFactory rf = GWT.create(ApplicationItemRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ApplicationItemRequestContext rc = rf.applicationItemRequest();
		rc.listAll( currentUser.getUserEmail(), currentUser.getApplicationId() ).fire( new Receiver<List<ApplicationItemProxy>>() {
			@Override
			public void onSuccess(List<ApplicationItemProxy> ais){
				// 
				String message =  applicationBody;
				double total = 0.0;
				message = message + "\n------ Programme details ------" + "\n\n";
				for (ApplicationItemProxy aip : ais) {
					message = message + aip.getItemDescription() + " : "+ aip.getItemAmount() + " CHF\n";
					total = total + aip.getItemAmount();
				}
				message = message + "\nTOTAL AMOUNT: " + Double.toString(total) + " CHF\n";
				// message = message + "Payment Type : Direct: " + app.isOptPayDirect() + " - Bank transfer: " + app.isOptBankTransfer() + " - Paypal: " + app.isOptPaypal();
				
				sendMessage( fistName, lastName, email, message );
			}
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
		});
	}
	
	/*
	 * */
	private String applicationBody(ApplicationFormProxy app) {
		//
		String message = "LEMANIA SUMMER SCHOOL - NEW APPLICATION" + "\n\n";;
		
		message = message + "Application ID:     " + app.getApplicationID() + "\n";
		message = message + "Email:              " + app.getEmailAddress() + "\n";
		
		// step 1
		message = message + "\n------ Students ------" + "\n";
		message = message + "Sex:             " + app.getGenderCode() + "\n";
		message = message + "Last name:       " + app.getLastName_Student() + "\n";
		message = message + "First name:      " + app.getFirstName_Student() + "\n";
		message = message + "DOB:             " + app.getDOB_Student() + "\n";
		message = message + "Nationality:     " + app.getNationality_Student() + "\n";
		message = message + "Address:         " + app.getAddress_Student() + "\n";
		message = message + "City:            " + app.getCity_Student() + "\n";
		message = message + "Country:         " + app.getCountry_Student() + "\n";
		message = message + "Email:           " + app.getEmail_Student() + "\n";
		message = message + "Mobile:          " + app.getMobilePhone_Student() + "\n";
		
		message = message + "\n------ Parents ------" + "\n";
		message = message + "Last name:       " + app.getLastName_Parents() + "\n";
		message = message + "First name:      " + app.getFirstName_Parents() + "\n";
		message = message + "Address:         " + app.getAddress_Parents() + "\n";
		message = message + "City:            " + app.getCity_Parents() + "\n";
		message = message + "Country:         " + app.getCountry_Parents() + "\n";		
		message = message + "Mobile - Mother: " + app.getMobilePhone_Mother() + "\n";
		message = message + "Mobile - Father: " + app.getMobilePhone_Father() + "\n";
		message = message + "Home phone:      " + app.getHomePhone_Parents() + "\n";
		message = message + "Work phone:      " + app.getWorkPhone_Parents() + "\n";
		message = message + "Fax:             " + app.getFax_Parents() + "\n";
		message = message + "Email:           " + app.getEmail_Parents() + "\n";
	
		message = message + "\n------ Invoice details ------" + "\n";
		message = message + "Company name:    " + app.getCompanyName_Invoice() + "\n";
		message = message + "Full name:       " + app.getFullName_Invoice() + "\n";
		message = message + "Address:         " + app.getAddress_Invoice() + "\n";
		message = message + "City:            " + app.getCity_Invoice() + "\n";
		message = message + "Country:         " + app.getCountry_Invoice() + "\n";
		
		return message;
	}
}