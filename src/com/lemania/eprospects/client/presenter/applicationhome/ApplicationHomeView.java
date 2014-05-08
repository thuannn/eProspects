package com.lemania.eprospects.client.presenter.applicationhome;

import javax.inject.Inject;

import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.IsWidget;
import com.google.gwt.user.client.ui.SimplePanel;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewImpl;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.user.client.ui.ListBox;
import com.lemania.eprospects.client.SummerCampSettingValues;

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
		getUiHandlers().startApplication( txtEmail.getText() );
	}

	/*
	 * */
	@Override
	public void initializeUI() {
		//
		lstProgrammes.addItem( SummerCampSettingValues.applicationName, SummerCampSettingValues.applicationCode );
	}
}
