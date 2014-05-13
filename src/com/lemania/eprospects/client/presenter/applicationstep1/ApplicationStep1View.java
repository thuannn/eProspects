package com.lemania.eprospects.client.presenter.applicationstep1;

import javax.inject.Inject;

import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.IsWidget;
import com.google.gwt.user.client.ui.SimplePanel;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.user.client.ui.ListBox;
import com.lemania.eprospects.client.FieldValidation;
import com.lemania.eprospects.client.SummerCampSettingValues;
import com.lemania.eprospects.shared.applicationform.ApplicationFormProxy;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.TextBox;

public class ApplicationStep1View extends
		ViewWithUiHandlers<ApplicationStep1UiHandlers> implements
		ApplicationStep1Presenter.MyView {
	interface Binder extends UiBinder<Widget, ApplicationStep1View> {
	}

	@UiField
	SimplePanel main;
	@UiField Button button;
	@UiField ListBox lstGender;
	@UiField Label lblApplicationInfo;
	@UiField TextBox txtLastName_Student;
	@UiField TextBox txtFirstName_Student;
	@UiField TextBox txtDOB_Student;
	@UiField TextBox txtNationality_Student;
	@UiField TextBox txtAddress_Student;
	@UiField TextBox txtCity_Student;
	@UiField TextBox txtCountry_Student;
	@UiField TextBox txtEmail_Student;
	@UiField TextBox txtMobilePhone_Student;
	@UiField TextBox txtLastName_Parents;
	@UiField TextBox txtFirstName_Parents;
	@UiField TextBox txtAddress_Parents;
	@UiField TextBox txtCity_Parents;
	@UiField TextBox txtCountry_Parents;
	@UiField TextBox txt_MobilePhone_Mother;
	@UiField TextBox txtMobilePhone_Father;
	@UiField TextBox txtHomePhone_Parents;
	@UiField TextBox txtWorkPhone_Parents;
	@UiField TextBox txtFax_Parents;
	@UiField TextBox txtEmail_Parents;
	@UiField TextBox txtCompanyName_Invoice;
	@UiField TextBox txtFullName_Invoice;
	@UiField TextBox txtAddress_Invoice;
	@UiField TextBox txtCity_Invoice;
	@UiField TextBox txtCountry_Invoice;

	@Inject
	ApplicationStep1View(Binder uiBinder) {
		initWidget(uiBinder.createAndBindUi(this));
	}
	

	@Override
	public void setInSlot(Object slot, IsWidget content) {
		if (slot == ApplicationStep1Presenter.SLOT_ApplicationStep1) {
			main.setWidget(content);
		} else {
			super.setInSlot(slot, content);
		}
	}
	
	
	/* 
	 * */
	@UiHandler("cmdNextStep")
	void onCmdNextStepClick(ClickEvent event) {
		getUiHandlers().nextStep(
				lstGender.getValue( lstGender.getSelectedIndex() ),
				txtLastName_Student.getText(),
				txtFirstName_Student.getText(),
				txtDOB_Student.getText(),
				txtNationality_Student.getText(),
				txtAddress_Student.getText(),
				txtCity_Student.getText(),
				txtCountry_Student.getText(),
				txtEmail_Student.getText(),
				txtMobilePhone_Student.getText(),
				txtLastName_Parents.getText(),
				txtFirstName_Parents.getText(),
				txtAddress_Parents.getText(),
				txtCity_Parents.getText(),
				txtCountry_Parents.getText(),
				txt_MobilePhone_Mother.getText(),
				txtMobilePhone_Father.getText(),
				txtHomePhone_Parents.getText(),
				txtWorkPhone_Parents.getText(),
				txtFax_Parents.getText(),
				txtEmail_Parents.getText(),
				txtCompanyName_Invoice.getText(),
				txtFullName_Invoice.getText(),
				txtAddress_Invoice.getText(),
				txtCity_Invoice.getText(),
				txtCountry_Invoice.getText()
		);
	}
	
	
	/*
	 * */
	@UiHandler("button")
	void onButtonClick(ClickEvent event) {
		getUiHandlers().previousStep();
	}
	

	/*
	 * */
	@Override
	public void initializeUi() {
		//
		lstGender.addItem("Veuillez choisir","");
		lstGender.addItem( SummerCampSettingValues.sexe_male_description, SummerCampSettingValues.sexe_male_code );
		lstGender.addItem( SummerCampSettingValues.sexe_female_description, SummerCampSettingValues.sexe_female_code );
	}
	

	/*
	 * */
	@Override
	public void showApplicationInfo(String email, String appId) {
		//
		lblApplicationInfo.setText( email + " - " + appId );
	}
	
	
	/*
	 * */
	@Override
	public void showApplicationDetails(ApplicationFormProxy app) {
		//
		FieldValidation.selectItemFromList( lstGender, app.getGenderCode() );
		txtLastName_Student.setText( app.getLastName_Student() );
		txtFirstName_Student.setText( app.getFirstName_Student() );
		txtDOB_Student.setText( app.getDOB_Student() );
		txtNationality_Student.setText( app.getNationality_Student() );
		txtAddress_Student.setText( app.getAddress_Student() );;
		txtCity_Student.setText( app.getCity_Student() );
		txtCountry_Student.setText( app.getCountry_Student() );
		txtEmail_Student.setText( app.getEmail_Student() );
		txtMobilePhone_Student.setText( app.getMobilePhone_Student() );
		txtLastName_Parents.setText( app.getLastName_Parents() );
		txtFirstName_Parents.setText( app.getFirstName_Parents() );
		txtAddress_Parents.setText( app.getAddress_Parents() );
		txtCity_Parents.setText( app.getCity_Parents() );
		txtCountry_Parents.setText( app.getCountry_Parents() );
		txt_MobilePhone_Mother.setText( app.getMobilePhone_Mother() );
		txtMobilePhone_Father.setText( app.getMobilePhone_Father() );
		txtHomePhone_Parents.setText( app.getHomePhone_Parents() );
		txtWorkPhone_Parents.setText( app.getWorkPhone_Parents() );
		txtFax_Parents.setText( app.getFax_Parents() );
		txtEmail_Parents.setText( app.getEmail_Parents() );
		txtCompanyName_Invoice.setText( app.getCompanyName_Invoice() );
		txtFullName_Invoice.setText( app.getFullName_Invoice() );
		txtAddress_Invoice.setText( app.getAddress_Invoice() );
		txtCity_Invoice.setText( app.getCity_Invoice() );
		txtCountry_Invoice.setText( app.getCountry_Invoice() );
	}
}
