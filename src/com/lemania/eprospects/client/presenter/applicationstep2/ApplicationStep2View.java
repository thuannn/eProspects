package com.lemania.eprospects.client.presenter.applicationstep2;

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

public class ApplicationStep2View extends
		ViewWithUiHandlers<ApplicationStep2UiHandlers> implements
		ApplicationStep2Presenter.MyView {
	interface Binder extends UiBinder<Widget, ApplicationStep2View> {
	}

	@UiField
	SimplePanel main;
	@UiField Button cmdNextStep;

	@Inject
	ApplicationStep2View(Binder uiBinder) {
		initWidget(uiBinder.createAndBindUi(this));
	}

	@Override
	public void setInSlot(Object slot, IsWidget content) {
		if (slot == ApplicationStep2Presenter.SLOT_ApplicationStep2) {
			main.setWidget(content);
		} else {
			super.setInSlot(slot, content);
		}
	}
	
	/*
	 * */
	@UiHandler("cmdNextStep")
	void onCmdNextStepClick(ClickEvent event) {
		//
		getUiHandlers().nextStep();
	}
}
