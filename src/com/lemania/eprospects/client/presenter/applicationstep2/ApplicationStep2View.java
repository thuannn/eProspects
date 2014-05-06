package com.lemania.eprospects.client.presenter.applicationstep2;

import java.util.Date;

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
import com.google.gwt.i18n.shared.DateTimeFormat;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.RadioButton;
import com.google.gwt.user.datepicker.client.CalendarUtil;

public class ApplicationStep2View extends
		ViewWithUiHandlers<ApplicationStep2UiHandlers> implements
		ApplicationStep2Presenter.MyView {
	interface Binder extends UiBinder<Widget, ApplicationStep2View> {
	}

	@UiField
	SimplePanel main;
	@UiField Button cmdNextStep;
	@UiField ListBox lstStartDate;
	@UiField ListBox lstWeekNumber;
	@UiField TextBox txtJulyWeek;
	@UiField TextBox txtAgustWeek;
	@UiField ListBox lstProgrammes;
	@UiField RadioButton optConfortPlus;

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

	/*
	 * */
	@Override
	public void initializeUI() {
		//
		DateTimeFormat fmt = DateTimeFormat.getFormat("dd/MM/yyyy");
		Date today = new Date();
		Date beginDate = fmt.parse("23/06/2014");
		Date lastDate = fmt.parse("11/08/2014");
		
		lstStartDate.addItem("Veuillez choisir","0");
		while (beginDate.before(lastDate)) {
			CalendarUtil.addDaysToDate(beginDate, 7);
			if (beginDate.before(today))
				continue;
			lstStartDate.addItem( fmt.format(beginDate) ,"0");
		}
	}
}
