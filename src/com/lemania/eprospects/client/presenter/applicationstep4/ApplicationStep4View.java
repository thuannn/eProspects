package com.lemania.eprospects.client.presenter.applicationstep4;

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
import com.google.gwt.user.client.ui.RadioButton;
import com.google.gwt.user.client.ui.TextArea;
import com.lemania.eprospects.shared.applicationform.ApplicationFormProxy;
import com.lemania.eprospects.shared.applicationitem.ApplicationItemProxy;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.event.logical.shared.ValueChangeEvent;

public class ApplicationStep4View extends
		ViewWithUiHandlers<ApplicationStep4UiHandlers> implements
		ApplicationStep4Presenter.MyView {
	interface Binder extends UiBinder<Widget, ApplicationStep4View> {
	}

	@UiField
	SimplePanel main;
	@UiField Button cmdNextStep;
	@UiField Button cmdPreviousStep;
	@UiField RadioButton optHealthProblemYes;
	@UiField RadioButton optHealProblemNo;
	@UiField TextArea txtHealthProblem;
	@UiField RadioButton optAllergyYes;
	@UiField RadioButton optAllergyNo;
	@UiField TextArea txtAllergy;
	@UiField RadioButton optMedicalYes;
	@UiField RadioButton optMedicalNo;
	@UiField TextArea txtMedical;
	@UiField TextArea txtOther;
	@UiField FlexTable tblItems;
	@UiField Label lblTotalAmount;
	@UiField Label lblApplicationInfo;

	@Inject
	ApplicationStep4View(Binder uiBinder) {
		initWidget(uiBinder.createAndBindUi(this));
	}
	

	@Override
	public void setInSlot(Object slot, IsWidget content) {
		if (slot == ApplicationStep4Presenter.SLOT_ApplicationStep4) {
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
				optHealthProblemYes.getValue(),
				optHealProblemNo.getValue(),
				txtHealthProblem.getText(),
				optAllergyYes.getValue(),
				optAllergyNo.getValue(),
				txtAllergy.getText(),
				optMedicalYes.getValue(),
				optMedicalNo.getValue(),
				txtMedical.getText(),
				txtOther.getText()
		);
	}
	
	
	/*
	 * */
	@UiHandler("cmdPreviousStep")
	void onCmdPreviousStepClick(ClickEvent event) {
		//
		getUiHandlers().previousStep();
	}
	
	
	/*
	 * */
	@Override
	public void showApplicationDetails(ApplicationFormProxy app) {
		//
		lblApplicationInfo.setText( app.getEmailAddress() + " - " + app.getApplicationID() );
		//
		optHealthProblemYes.setValue( app.isOptHealthProblemYes() );
		optHealProblemNo.setValue( app.isOptHealProblemNo() );
		txtHealthProblem.setText( app.getTxtHealthProblem() );
		optAllergyYes.setValue( app.isOptAllergyYes() );
		optAllergyNo.setValue( app.isOptAllergyNo() );
		txtAllergy.setText( app.getTxtAllergy() );
		optMedicalYes.setValue( app.isOptMedicalYes() );
		optMedicalNo.setValue( app.isOptMedicalNo() );
		txtMedical.setText( app.getTxtMedical() );
		txtOther.setText( app.getTxtOther() );
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
	@UiHandler("txtAllergy")
	void onTxtAllergyValueChange(ValueChangeEvent<String> event) {
		//
		getUiHandlers().toggleLeaveNotice();
	}
	@UiHandler("txtMedical")
	void onTxtMedicalValueChange(ValueChangeEvent<String> event) {
		//
		getUiHandlers().toggleLeaveNotice();
	}
	@UiHandler("txtHealthProblem")
	void onTxtHealthProblemValueChange(ValueChangeEvent<String> event) {
		//
		getUiHandlers().toggleLeaveNotice();
	}
	@UiHandler("txtOther")
	void onTxtOtherValueChange(ValueChangeEvent<String> event) {
		//
		getUiHandlers().toggleLeaveNotice();
	}
	@UiHandler("optMedicalNo")
	void onOptMedicalNoValueChange(ValueChangeEvent<Boolean> event) {
		//
		getUiHandlers().toggleLeaveNotice();
	}
	@UiHandler("optMedicalYes")
	void onOptMedicalYesValueChange(ValueChangeEvent<Boolean> event) {
		//
		getUiHandlers().toggleLeaveNotice();
	}
	@UiHandler("optHealProblemNo")
	void onOptHealProblemNoValueChange(ValueChangeEvent<Boolean> event) {
		//
		getUiHandlers().toggleLeaveNotice();
	}
	@UiHandler("optAllergyNo")
	void onOptAllergyNoValueChange(ValueChangeEvent<Boolean> event) {
		//
		getUiHandlers().toggleLeaveNotice();
	}
	@UiHandler("optAllergyYes")
	void onOptAllergyYesValueChange(ValueChangeEvent<Boolean> event) {
		//
		getUiHandlers().toggleLeaveNotice();
	}
	@UiHandler("optHealthProblemYes")
	void onOptHealthProblemYesValueChange(ValueChangeEvent<Boolean> event) {
		//
		getUiHandlers().toggleLeaveNotice();
	}
}
