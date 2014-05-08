package com.lemania.eprospects.client.presenter.applicationstep1;

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

public class ApplicationStep1View extends
		ViewWithUiHandlers<ApplicationStep1UiHandlers> implements
		ApplicationStep1Presenter.MyView {
	interface Binder extends UiBinder<Widget, ApplicationStep1View> {
	}

	@UiField
	SimplePanel main;
	@UiField Button button;
	@UiField ListBox lstGender;

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
		getUiHandlers().nextStep();
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
}
