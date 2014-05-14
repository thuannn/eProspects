package com.lemania.eprospects.client.presenter.applicationstep3;

import java.util.List;

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
import com.lemania.eprospects.shared.applicationitem.ApplicationItemProxy;
import com.google.gwt.user.client.ui.CheckBox;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.RadioButton;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.event.logical.shared.ValueChangeEvent;
import com.google.gwt.event.dom.client.ChangeEvent;

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
	@UiField FlexTable tblItems;
	@UiField Label lblTotalAmount;
	@UiField Label lblApplicationInfo;

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
		lblApplicationInfo.setText( app.getEmailAddress() + " - " + app.getApplicationID() );
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
	
	
	/*
	 * */
	@Override
	public void showSelectedItems(List<ApplicationItemProxy> ais) {
		//
		tblItems.removeAllRows();
		//
		double totalAmount = 0.0;
		for (int i=0; i<ais.size(); i++) {
			tblItems.setText(i, 0, ais.get(i).getItemDescription());
			tblItems.setText(i, 1, ais.get(i).getItemAmount().toString());
			totalAmount = totalAmount + ais.get(i).getItemAmount();
			//
			tblItems.getCellFormatter().setStyleName(i, 0, "brancheLine");
			tblItems.getCellFormatter().setStyleName(i, 1, "brancheLine");
		}
		lblTotalAmount.setText( Double.toString(totalAmount));
	}
	
	
	/*
	 * */
	@UiHandler("chkGeneveOneway")
	void onChkGeneveOnewayClick(ClickEvent event) {
		//
		getUiHandlers().editItemPrice( SummerCampSettingValues.item_onewaygeneve_code, chkGeneveOneway.getValue() );
		//
		getUiHandlers().toggleLeaveNotice();
	}
	
	
	/*
	 * */
	@UiHandler("chkZurichOneway")
	void onChkZurichOnewayClick(ClickEvent event) {
		//
		getUiHandlers().editItemPrice( SummerCampSettingValues.item_onewayzurich_code, chkZurichOneway.getValue() );
		//
		getUiHandlers().toggleLeaveNotice();
	}
	
	
	/*
	 * */
	@UiHandler("chkGeneveRoundtrip")
	void onChkGeneveRoundtripClick(ClickEvent event) {
		//
		getUiHandlers().editItemPrice( SummerCampSettingValues.item_roundtripgeneve_code, chkGeneveRoundtrip.getValue() );
		//
		getUiHandlers().toggleLeaveNotice();
	}
	
	
	/*
	 * */
	@UiHandler("chkZurichRoundtrip")
	void onChkZurichRoundtripClick(ClickEvent event) {
		//
		getUiHandlers().editItemPrice( SummerCampSettingValues.item_roundtripzurich_code, chkZurichRoundtrip.getValue() );
		//
		getUiHandlers().toggleLeaveNotice();
	}
	
	
	/*
	 * */
	@UiHandler("chkVisaLetterRequest")
	void onChkVisaLetterRequestClick(ClickEvent event) {
		//
		getUiHandlers().editItemPrice( SummerCampSettingValues.item_visaletter_code, chkVisaLetterRequest.getValue() );
	}
	
	
	/*
	 * */
	@UiHandler("chkMealPackage")
	void onChkMealPackageClick(ClickEvent event) {
		//
		getUiHandlers().editItemPrice( SummerCampSettingValues.item_mealpackage_code, chkMealPackage.getValue() );
		//
		getUiHandlers().toggleLeaveNotice();
	}
	
	/*
	 * */
	@UiHandler("chkActivitiesPackage")
	void onChkActivitiesPackageClick(ClickEvent event) {
		//
		getUiHandlers().editItemPrice( SummerCampSettingValues.item_activitypackage_code, chkActivitiesPackage.getValue() );
		//
		getUiHandlers().toggleLeaveNotice();
	}
	
	/*
	 * */
	@UiHandler("txtPrivateCoursePeriod")
	void onTxtPrivateCoursePeriodValueChange(ValueChangeEvent<String> event) {
		//
		if (!txtPrivateCoursePeriod.getText().equals("")
			&& FieldValidation.isNumeric( txtPrivateCoursePeriod.getText())) {
			//
			getUiHandlers().editItemPrice( SummerCampSettingValues.item_privatecourse_code, optPrivateCourse.getValue(), Double.parseDouble(txtPrivateCoursePeriod.getText()) );
			//
			getUiHandlers().toggleLeaveNotice();
		}
	}
	
	/*
	 * */
	@UiHandler("optPrivateCourse")
	void onOptPrivateCourseClick(ClickEvent event) {
		//
		onTxtPrivateCoursePeriodValueChange(null);
		//
		getUiHandlers().toggleLeaveNotice();
	}
	
	/*
	 * */
	@UiHandler("txtMoneyDepositAmount")
	void onTxtMoneyDepositAmountValueChange(ValueChangeEvent<String> event) {
		//
		if (!txtMoneyDepositAmount.getText().equals("")
			&& FieldValidation.isNumeric( txtMoneyDepositAmount.getText())) {
			//
			getUiHandlers().editItemPrice( SummerCampSettingValues.item_deposit_code, optMoneyDepositYes.getValue(), Double.parseDouble( txtMoneyDepositAmount.getText() ) );
			//
			getUiHandlers().toggleLeaveNotice();
		}
	}
	
	/*
	 * */
	@UiHandler("optMoneyDepositYes")
	void onOptMoneyDepositYesClick(ClickEvent event) {
		//
		if (!txtMoneyDepositAmount.getText().equals("")
			&& FieldValidation.isNumeric( txtMoneyDepositAmount.getText())) {
			//
			getUiHandlers().editItemPrice( SummerCampSettingValues.item_deposit_code, optMoneyDepositYes.getValue(), Double.parseDouble( txtMoneyDepositAmount.getText() ) );
			//
			getUiHandlers().toggleLeaveNotice();
		}
	}
	
	
	/*
	 * */
	@UiHandler("optMoneyDepositNo")
	void onOptMoneyDepositNoClick(ClickEvent event) {
		//
		txtMoneyDepositAmount.setText("0");
		if (!txtMoneyDepositAmount.getText().equals("")
			&& FieldValidation.isNumeric( txtMoneyDepositAmount.getText())) {
			//
			getUiHandlers().editItemPrice( SummerCampSettingValues.item_deposit_code, optMoneyDepositYes.getValue(), Double.parseDouble( txtMoneyDepositAmount.getText() ) );
			//
			getUiHandlers().toggleLeaveNotice();
		}
	}
	
	
	@UiHandler("lstAirportDirection")
	void onLstAirportDirectionChange(ChangeEvent event) {
		//
		getUiHandlers().toggleLeaveNotice();
	}
	@UiHandler("txtAirlineName")
	void onTxtAirlineNameValueChange(ValueChangeEvent<String> event) {
		//
		getUiHandlers().toggleLeaveNotice();
	}
	@UiHandler("txtDepartTime")
	void onTxtDepartTimeValueChange(ValueChangeEvent<String> event) {
		//
		getUiHandlers().toggleLeaveNotice();
	}
	@UiHandler("txtArriveVol")
	void onTxtArriveVolValueChange(ValueChangeEvent<String> event) {
		//
		getUiHandlers().toggleLeaveNotice();
	}
	@UiHandler("txtArriveTime")
	void onTxtArriveTimeValueChange(ValueChangeEvent<String> event) {
		//
		getUiHandlers().toggleLeaveNotice();
	}
	@UiHandler("txtDepartVol")
	void onTxtDepartVolValueChange(ValueChangeEvent<String> event) {
		//
		getUiHandlers().toggleLeaveNotice();
	}
}
