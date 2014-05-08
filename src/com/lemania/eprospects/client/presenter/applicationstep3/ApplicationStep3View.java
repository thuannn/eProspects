package com.lemania.eprospects.client.presenter.applicationstep3;

import javax.inject.Inject;

import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.IsWidget;
import com.google.gwt.user.client.ui.SimplePanel;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewImpl;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.user.client.ui.ListBox;
import com.lemania.eprospects.client.SummerCampSettingValues;

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
		getUiHandlers().nextStep();
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
}
