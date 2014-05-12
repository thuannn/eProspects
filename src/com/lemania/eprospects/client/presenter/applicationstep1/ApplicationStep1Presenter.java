package com.lemania.eprospects.client.presenter.applicationstep1;

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
import com.lemania.eprospects.client.FieldValidation;
import com.lemania.eprospects.client.event.ApplicationStep1CompletedEvent;
import com.lemania.eprospects.client.event.GotoPreviousPageEvent;
import com.lemania.eprospects.client.event.LoginAuthenticatedEvent;
import com.lemania.eprospects.client.event.LoginAuthenticatedEvent.LoginAuthenticatedHandler;
import com.lemania.eprospects.client.presenter.mainpage.MainPagePresenter;
import com.lemania.eprospects.client.place.NameTokens;
import com.lemania.eprospects.shared.ApplicationFormProxy;
import com.lemania.eprospects.shared.service.ApplicationFormRequestFactory;
import com.lemania.eprospects.shared.service.EventSourceRequestTransport;
import com.lemania.eprospects.shared.service.ApplicationFormRequestFactory.ApplicationFormRequestContext;

public class ApplicationStep1Presenter
		extends
		Presenter<ApplicationStep1Presenter.MyView, ApplicationStep1Presenter.MyProxy>
		implements 
			ApplicationStep1UiHandlers,
			LoginAuthenticatedHandler {
	
	// Keep the current user
	CurrentUser curUser;
	
	interface MyView extends View, HasUiHandlers<ApplicationStep1UiHandlers> {
		//
		void initializeUi();
		void showApplicationInfo( String email, String appId );
		void showApplicationDetails( ApplicationFormProxy app );
	}

	@ContentSlot
	public static final Type<RevealContentHandler<?>> SLOT_ApplicationStep1 = new Type<RevealContentHandler<?>>();

	@NameToken(NameTokens.applicationstep1)
	@ProxyCodeSplit
	public interface MyProxy extends ProxyPlace<ApplicationStep1Presenter> {
	}

	@Inject
	public ApplicationStep1Presenter(EventBus eventBus, MyView view,
			MyProxy proxy) {
		super(eventBus, view, proxy, MainPagePresenter.TYPE_SetMainContent);

		getView().setUiHandlers(this);
	}

	/*
	 * Call the DrawSchoolInterfaceEvent to show the appropriate logo
	 * */
	protected void onBind() {
		//
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
			String genderCode,
			String lastName_Student,
			String firstName_Student,
			String DOB_Student,
			String nationality_Student,
			String address_Student,
			String city_Student,
			String country_Student,
			String email_Student,
			String mobilePhone_Student,
			String lastName_Parents,
			String firstName_Parents,
			String address_Parents,
			String city_Parents,
			String country_Parents,
			String mobilePhone_Mother,
			String mobilePhone_Father,
			String homePhone_Parents,
			String workPhone_Parents,
			String fax_Parents,
			String email_Parents,
			String companyName_Invoice,
			String fullName_Invoice,
			String address_Invoice,
			String city_Invoice,
			String country_Invoice
			) {
		// validate fields
		if ( !formCompleted(
				genderCode,
				lastName_Student,
				firstName_Student,
				DOB_Student,
				nationality_Student,
				address_Student,
				city_Student,
				country_Student,
				email_Student,
				mobilePhone_Student,
				lastName_Parents,
				firstName_Parents,
				address_Parents,
				city_Parents,
				country_Parents,
				mobilePhone_Mother,
				mobilePhone_Father,
				homePhone_Parents,
				workPhone_Parents,
				fax_Parents,
				email_Parents,
				companyName_Invoice,
				fullName_Invoice,
				address_Invoice,
				city_Invoice,
				country_Invoice) )
			return;
		
		// save data
		ApplicationFormRequestFactory rf = GWT.create(ApplicationFormRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ApplicationFormRequestContext rc = rf.applicationFormRequest();
		
		rc.saveStep1( curUser.getUserEmail(), curUser.getApplicationId(), 
				genderCode, 
				lastName_Student, 
				firstName_Student, 
				DOB_Student, 
				nationality_Student, 
				address_Student, 
				city_Student, 
				country_Student, 
				email_Student, 
				mobilePhone_Student, 
				lastName_Parents, 
				firstName_Parents, 
				address_Parents, 
				city_Parents, 
				country_Parents, 
				mobilePhone_Mother, 
				mobilePhone_Father, 
				homePhone_Parents, 
				workPhone_Parents, 
				fax_Parents, 
				email_Parents, 
				companyName_Invoice, 
				fullName_Invoice, 
				address_Invoice, 
				city_Invoice, 
				country_Invoice)
		.fire( new Receiver<Boolean>() {
			@Override
			public void onSuccess(Boolean saved){
				// Go to the next page
				getEventBus().fireEvent( new ApplicationStep1CompletedEvent() );
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
	private boolean formCompleted (
			String genderCode,
			String lastName_Student,
			String firstName_Student,
			String DOB_Student,
			String nationality_Student,
			String address_Student,
			String city_Student,
			String country_Student,
			String email_Student,
			String mobilePhone_Student,
			String lastName_Parents,
			String firstName_Parents,
			String address_Parents,
			String city_Parents,
			String country_Parents,
			String mobilePhone_Mother,
			String mobilePhone_Father,
			String homePhone_Parents,
			String workPhone_Parents,
			String fax_Parents,
			String email_Parents,
			String companyName_Invoice,
			String fullName_Invoice,
			String address_Invoice,
			String city_Invoice,
			String country_Invoice
			) {
		if ( FieldValidation.isEmptyString( genderCode, "Sexe - Etudiant"))
			return false;
		if ( FieldValidation.isEmptyString( lastName_Student, "Nome - Etudiant"))
			return false;
		if ( FieldValidation.isEmptyString( firstName_Student, "Prénom - Etudiant"))
			return false;
		if ( FieldValidation.isEmptyString( DOB_Student, "Date de naissance - Etudiant"))
			return false;
		if ( FieldValidation.isEmptyString( nationality_Student, "Nationalité - Etudiant"))
			return false;
		if ( FieldValidation.isEmptyString( address_Student, "Adresse (Rue, Numéro) -Etudiant"))
			return false;
		if ( FieldValidation.isEmptyString( city_Student, "Code Postale/ Ville - Etudiant"))
			return false;
		if ( FieldValidation.isEmptyString( country_Student, "Pays - Etudiant"))
			return false;
		if ( FieldValidation.isEmptyString( email_Student, "Email - Etudiant"))
			return false;
		if ( FieldValidation.isEmptyString( mobilePhone_Student, "Mobile - Etudiant"))
			return false;
		if ( FieldValidation.isEmptyString( lastName_Parents, "Nom - Parents"))
			return false;
		if ( FieldValidation.isEmptyString( firstName_Parents, "Prénom - Parents"))
			return false;
		if ( FieldValidation.isEmptyString( address_Parents, "Adresse - Parent"))
			return false;
		if ( FieldValidation.isEmptyString( city_Parents, "Code postale/ Ville - Parent"))
			return false;
		if ( FieldValidation.isEmptyString( country_Parents, "Pays - Parents"))
			return false;
		if ( FieldValidation.isEmptyString( mobilePhone_Mother, "Mobile - Mère"))
			return false;
		if ( FieldValidation.isEmptyString( mobilePhone_Father, "Mobile - Père"))
			return false;
		if ( FieldValidation.isEmptyString( homePhone_Parents, "Téléphone (domicile) - Parents"))
			return false;
		if ( FieldValidation.isEmptyString( workPhone_Parents, "Téléphone (professionnel) - Parents"))
			return false;
		if ( FieldValidation.isEmptyString( fax_Parents, "Fax - Parents"))
			return false;
		if ( FieldValidation.isEmptyString( email_Parents, "Email - Parents"))
			return false;
		return true;
	}

	/*
	 * */
	@Override
	public void previousStep() {
		//
		getEventBus().fireEvent( new GotoPreviousPageEvent(History.getToken()) );
	}

	@ProxyEvent
	@Override
	public void onLoginAuthenticated(LoginAuthenticatedEvent event) {
		//
		this.curUser = event.getCurrentUser();
		this.getView().showApplicationInfo( curUser.getUserEmail(), curUser.getApplicationId() );
	}

}
