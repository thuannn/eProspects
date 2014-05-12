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
import com.google.gwt.event.dom.client.ChangeEvent;
import com.lemania.eprospects.client.FieldValidation;
import com.lemania.eprospects.client.SummerCampSettingValues;
import com.lemania.eprospects.shared.ApplicationFormProxy;
import com.google.gwt.user.client.ui.CheckBox;

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
	@UiField TextBox txtAugustWeek;
	@UiField ListBox lstProgrammes;
	@UiField RadioButton optConfortPlusPrivate;
	@UiField ListBox lstCourses;
	@UiField Button cmdPreviousStep;
	@UiField CheckBox chkApplicaitonFee;
	@UiField CheckBox chkPackAssurance;
	@UiField RadioButton optConfortPrivate;
	@UiField RadioButton optStandardPrivate;
	@UiField RadioButton optConfortPlusShare;
	@UiField RadioButton optConfortShare;
	@UiField RadioButton optStandardShare;
	@UiField RadioButton optKeyDepositCHF;
	@UiField RadioButton optKeyDepositEuro;
	@UiField RadioButton optKeyDepositUSD;
	@UiField CheckBox chkContinueAfter;

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
		getUiHandlers().nextStep(
				chkApplicaitonFee.getValue(),
				chkPackAssurance.getValue(),
				lstProgrammes.getValue( lstProgrammes.getSelectedIndex() ),
				lstCourses.getValue( lstCourses.getSelectedIndex() ),
				lstStartDate.getItemText( lstStartDate.getSelectedIndex() ),
				lstWeekNumber.getItemText(lstWeekNumber.getSelectedIndex() ),
				txtJulyWeek.getText(),
				txtAugustWeek.getText(),
				chkContinueAfter.getValue(),
				optConfortPlusPrivate.getValue(),
				optConfortPrivate.getValue(),
				optStandardPrivate.getValue(),
				optConfortPlusShare.getValue(),
				optConfortShare.getValue(),
				optStandardShare.getValue(),
				optKeyDepositCHF.getValue(),
				optKeyDepositEuro.getValue(),
				optKeyDepositUSD.getValue() 
		);
	}

	/*
	 * */
	@Override
	public void initializeUI() {
		// For each start date, calculate the maximum number of week people can apply, put these in the value field
		DateTimeFormat fmt = DateTimeFormat.getFormat("dd/MM/yyyy");
		Date today = new Date();
		Date beginDate = fmt.parse( SummerCampSettingValues.firstMonday );
		Date lastDate = fmt.parse( SummerCampSettingValues.lastMonday );
		
		// date and weeks
		int maxWeek = SummerCampSettingValues.maxWeek;
		
		lstStartDate.addItem("Veuillez choisir","");
		while (beginDate.before(lastDate)) {
			CalendarUtil.addDaysToDate(beginDate, 7);
			if (beginDate.before(today))
				continue;
			maxWeek--;
			lstStartDate.addItem( fmt.format(beginDate) , Integer.toString(maxWeek) );
		}
		
		// Programmes
		lstProgrammes.addItem("Veuillez choisir","");
		lstProgrammes.addItem( SummerCampSettingValues.programme_name_summercamp,SummerCampSettingValues.programme_code_summercamp );
		lstProgrammes.addItem( SummerCampSettingValues.programme_name_summercourse,SummerCampSettingValues.programme_code_summercourse );
		
		// Courses
		lstCourses.addItem("Veuillez choisir","");
		lstCourses.addItem( SummerCampSettingValues.course_name_noconversation,SummerCampSettingValues.course_code_noconversation );
		lstCourses.addItem( SummerCampSettingValues.course_name_withconversation,SummerCampSettingValues.course_code_withconversation );
	}
	
	/*
	 * Depends on the start date, the number of week changes
	 * */
	@UiHandler("lstStartDate")
	void onLstStartDateChange(ChangeEvent event) {
		//
		lstWeekNumber.clear();
		//
		int weekNumber = Integer.parseInt( lstStartDate.getValue(lstStartDate.getSelectedIndex()));
		while ( weekNumber>0 ) {
			lstWeekNumber.addItem( Integer.toString(weekNumber), Integer.toString(weekNumber));
			weekNumber--;
		}
		// If the number of week is more than 2, the minimum duration is 2 weeks, otherwise they can choose one week
		if ( Integer.parseInt( lstStartDate.getValue(lstStartDate.getSelectedIndex())) > SummerCampSettingValues.minimumNumberOfWeek )
			lstWeekNumber.removeItem( lstWeekNumber.getItemCount()-1 );
		// Show the weeks in detail
		onLstWeekNumberChange(null);
	}
	
	/*
	 * */
	@UiHandler("lstWeekNumber")
	void onLstWeekNumberChange(ChangeEvent event) {
		//
		int weekNumber = Integer.parseInt( lstWeekNumber.getValue(lstWeekNumber.getSelectedIndex()));
		if (weekNumber>5) {
			txtAugustWeek.setText( Integer.toString(weekNumber-5) );
			txtJulyWeek.setText("5");
		} else {
			txtAugustWeek.setText("");
			txtJulyWeek.setText( Integer.toString(weekNumber) );
		}
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
		chkApplicaitonFee.setValue( app.isChkApplicaitonFee() );
		chkPackAssurance.setValue( app.isChkPackAssurance());
		FieldValidation.selectItemFromList( lstProgrammes, app.getProgrammesCode() );
		FieldValidation.selectItemFromList( lstCourses, app.getCourseCode() );
		//
		FieldValidation.selectItemFromListByText( lstStartDate, app.getStartDate() );
		onLstStartDateChange( null );
		//
		FieldValidation.selectItemFromListByText( lstWeekNumber, app.getWeekNumber() );		
		txtJulyWeek.setText( app.getTxtJulyWeek() );
		txtAugustWeek.setText( app.getTxtAugustWeek() );
		chkContinueAfter.setValue( app.isChkContinueAfter() );
		optConfortPlusPrivate.setValue( app.isOptConfortPlusPrivate() );
		optConfortPrivate.setValue( app.isOptConfortPrivate() );
		optStandardPrivate.setValue( app.isOptStandardPrivate() );
		optConfortPlusShare.setValue( app.isOptConfortPlusShare() );
		optConfortShare.setValue( app.isOptConfortShare() );
		optStandardShare.setValue( app.isOptStandardShare() );
		optKeyDepositCHF.setValue( app.isOptKeyDepositCHF() );
		optKeyDepositEuro.setValue( app.isOptKeyDepositEuro() );
		optKeyDepositUSD.setValue( app.isOptKeyDepositUSD() );
	}
}
