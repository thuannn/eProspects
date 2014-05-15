package com.lemania.eprospects.client.presenter.applicationhome;

import javax.inject.Inject;

import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.IsWidget;
import com.google.gwt.user.client.ui.SimplePanel;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.user.client.ui.ListBox;
import com.lemania.eprospects.client.SummerCampSettingValues;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.RadioButton;

public class ApplicationHomeView extends
		ViewWithUiHandlers<ApplicationHomeUiHandlers> implements
		ApplicationHomePresenter.MyView {
	interface Binder extends UiBinder<Widget, ApplicationHomeView> {
	}

	@UiField
	SimplePanel main;
	@UiField Button cmdStartApplication;
	@UiField TextBox txtEmail;
	@UiField ListBox lstProgrammes;
	@UiField VerticalPanel pnlApplicationIdRequest;
	@UiField RadioButton optNew;
	@UiField TextBox txtApplicationId;
	@UiField RadioButton optModify;

	@Inject
	ApplicationHomeView(Binder uiBinder) {
		initWidget(uiBinder.createAndBindUi(this));
	}

	@Override
	public void setInSlot(Object slot, IsWidget content) {
		if (slot == ApplicationHomePresenter.SLOT_ApplicationHome) {
			main.setWidget(content);
		} else {
			super.setInSlot(slot, content);
		}
	}
	
	@UiHandler("cmdStartApplication")
	void onCmdStartApplicationClick(ClickEvent event) {
		//
		txtEmail.setText( txtEmail.getText().toLowerCase() );
		getUiHandlers().startApplication( txtEmail.getText(), optNew.getValue(), optModify.getValue(), txtApplicationId.getText() );
	}

	/*
	 * */
	@Override
	public void initializeUI() {
		//
		lstProgrammes.addItem( SummerCampSettingValues.applicationName, SummerCampSettingValues.applicationCode );
	}

	/*
	 * */
	@Override
	public void showApplicationIDRequest() {
		//
		pnlApplicationIdRequest.setVisible(true);
	}
	
}
