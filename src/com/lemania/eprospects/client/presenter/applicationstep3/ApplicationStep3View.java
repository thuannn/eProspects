package com.lemania.eprospects.client.presenter.applicationstep3;

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
import com.lemania.eprospects.shared.ApplicationFormProxy;
import com.google.gwt.user.client.ui.CheckBox;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.RadioButton;

public class ApplicationStep3View extends
		ViewWithUiHandlers<ApplicationStep3UiHandlers> implements
		ApplicationStep3Presenter.MyView {
	interface Binder extends UiBinder<Widget, ApplicationStep3View> {
	}

	@UiField
	SimplePanel main;
	@UiField Button cmdNextStep;
	@UiField Button cmdPreviousStep;
	@UiField ListBox lstAirportDirection;
	@UiField CheckBox optPrivateCourse;
	@UiField TextBox txtPrivateCoursePeriod;
	@UiField CheckBox chkGeneveOneway;
	@UiField CheckBox chkZurichOneway;
	@UiField CheckBox chkGeneveRoundtrip;
	@UiField CheckBox chkZurichRoundtrip;
	@UiField TextBox txtAirlineName;
	@UiField TextBox txtArriveVol;
	@UiField TextBox txtArriveTime;
	@UiField TextBox txtDepartVol;
	@UiField TextBox txtDepartTime;
	@UiField CheckBox chkVisaLetterRequest;
	@UiField RadioButton optMoneyDepositYes;
	@UiField RadioButton optMoneyDepositNo;
	@UiField TextBox txtMoneyDepositAmount;
	@UiField CheckBox chkMealPackage;
	@UiField CheckBox chkActivitiesPackage;

	@Inject
	ApplicationStep3View(Binder uiBinder) {
		initWidget(uiBinder.createAndBindUi(this));
	}

	@Override
	public void setInSlot(Object slot, IsWidget content) {
		if (slot == ApplicationStep3Presenter.SLOT_ApplicationStep3) {
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
				 lstAirportDirection.getValue( lstAirportDirection.getSelectedIndex() ),
				 optPrivateCourse.getValue(),
				 txtPrivateCoursePeriod.getText(),
				 chkGeneveOneway.getValue(),
				 chkZurichOneway.getValue(),
				 chkGeneveRoundtrip.getValue(),
				 chkZurichRoundtrip.getValue(),
				 txtAirlineName.getText(),
				 txtArriveVol.getText(),
				 txtArriveTime.getText(),
				 txtDepartVol.getText(),
				 txtDepartTime.getText(),
				 chkVisaLetterRequest.getValue(),
				 optMoneyDepositYes.getValue(),
				 optMoneyDepositNo.getValue(),
				 txtMoneyDepositAmount.getText(),
				 chkMealPackage.getValue(),
				 chkActivitiesPackage.getValue()
				);
	}
	
	
	/*
	 * */
	@UiHandler("cmdPreviousStep")
	void onCmdPreviousStepClick(ClickEvent event) {
		this.getUiHandlers().previousStep();
	}
	

	/*
	 * */
	@Override
	public void initializeUi() {
		//
		lstAirportDirection.addItem("Veuillez choisir", "");
		lstAirportDirection.addItem( SummerCampSettingValues.airport_direction_from_description, SummerCampSettingValues.airport_direction_from_code );
		lstAirportDirection.addItem( SummerCampSettingValues.airport_direction_to_description, SummerCampSettingValues.airport_direction_to_code );
	}
	
	
	/*
	 * */
	@Override
	public void showApplicationDetails(ApplicationFormProxy app) {
		//
		 FieldValidation.selectItemFromList(lstAirportDirection, app.getLstAirportDirection());
		 optPrivateCourse.setValue( app.getOptPrivateCourse() );
		 txtPrivateCoursePeriod.setText( app.getTxtPrivateCoursePeriod() );
		 chkGeneveOneway.setValue( app.getChkGeneveOneway() );
		 chkZurichOneway.setValue( app.getChkZurichOneway() );
		 chkGeneveRoundtrip.setValue( app.getChkGeneveRoundtrip() );
		 chkZurichRoundtrip.setValue( app.getChkZurichRoundtrip() );
		 txtAirlineName.setText( app.getTxtAirlineName() );
		 txtArriveVol.setText( app.getTxtArriveVol() );
		 txtArriveTime.setText( app.getTxtArriveTime() );
		 txtDepartVol.setText( app.getTxtDepartVol() );
		 txtDepartTime.setText( app.getTxtDepartTime() );
		 chkVisaLetterRequest.setValue( app.getChkVisaLetterRequest() );
		 optMoneyDepositYes.setValue( app.getOptMoneyDepositYes() );
		 optMoneyDepositNo.setValue( app.getOptMoneyDepositNo() );
		 txtMoneyDepositAmount.setText( app.getTxtMoneyDepositAmount() );
		 chkMealPackage.setValue( app.getChkMealPackage() );
		 chkActivitiesPackage.setValue( app.getChkActivitiesPackage() );
	}
}
