package com.lemania.eprospects.client.presenter.applicationstep5;

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
import com.google.gwt.user.client.ui.CheckBox;
import com.google.gwt.user.client.ui.TextBox;
import com.lemania.eprospects.shared.applicationform.ApplicationFormProxy;
import com.lemania.eprospects.shared.applicationitem.ApplicationItemProxy;
import com.google.gwt.user.client.ui.FlexTable;

public class ApplicationStep5View extends
		ViewWithUiHandlers<ApplicationStep5UiHandlers> implements
		ApplicationStep5Presenter.MyView {
	interface Binder extends UiBinder<Widget, ApplicationStep5View> {
	}

	@UiField
	SimplePanel main;
	@UiField Button cmdNextStep;
	@UiField Button cmdPreviousStep;
	@UiField CheckBox chkConditionAgreement;
	@UiField TextBox txtDatePlace;
	@UiField TextBox txtFullName;
	@UiField FlexTable tblItems;

	@Inject
	ApplicationStep5View(Binder uiBinder) {
		initWidget(uiBinder.createAndBindUi(this));
	}

	@Override
	public void setInSlot(Object slot, IsWidget content) {
		if (slot == ApplicationStep5Presenter.SLOT_ApplicationStep5) {
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
				chkConditionAgreement.getValue(),
				txtDatePlace.getText(),
				txtFullName.getText());
	}
	
	/*
	 * */
	@UiHandler("cmdPreviousStep")
	void onCmdPreviousStepClick(ClickEvent event) {
		getUiHandlers().previousStep();
	}

	
	/*
	 * */
	@Override
	public void showApplicationDetails(ApplicationFormProxy app) {
		//
		chkConditionAgreement.setValue( app.isChkConditionAgreement() );
		txtDatePlace.setText( app.getTxtDatePlace() );
		txtFullName.setText( app.getTxtFullName() );
	}
	

	/*
	 * */
	@Override
	public void showSelectedItems(List<ApplicationItemProxy> ais) {
		//
		for (int i=0; i<ais.size(); i++) {
			tblItems.setText(i, 0, ais.get(i).getItemDescription());
			tblItems.setText(i, 1, ais.get(i).getItemAmount().toString());
		}
	}
}
