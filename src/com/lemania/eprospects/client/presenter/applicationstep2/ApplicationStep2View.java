package com.lemania.eprospects.client.presenter.applicationstep2;

import java.util.Date;
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
import com.google.gwt.i18n.shared.DateTimeFormat;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.RadioButton;
import com.google.gwt.user.datepicker.client.CalendarUtil;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.lemania.eprospects.client.FieldValidation;
import com.lemania.eprospects.client.SummerCampSettingValues;
import com.lemania.eprospects.shared.applicationform.ApplicationFormProxy;
import com.lemania.eprospects.shared.applicationitem.ApplicationItemProxy;
import com.google.gwt.user.client.ui.CheckBox;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.Label;

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
	@UiField FlexTable tblItems;
	@UiField Label lblTotalAmount;
	@UiField Label lblApplicationInfo;
	@UiField Label lblStartDate;
	@UiField Label lblDuration;
	@UiField ListBox lstLanguageOptions;

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
				optKeyDepositUSD.getValue(),
				lstLanguageOptions.getValue( lstLanguageOptions.getSelectedIndex() )
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
		
		lstStartDate.addItem("","");
		while (beginDate.before(lastDate)) {
			CalendarUtil.addDaysToDate(beginDate, 7);
			if (beginDate.before(today))
				continue;
			maxWeek--;
			lstStartDate.addItem( fmt.format(beginDate) , Integer.toString(maxWeek) );
		}
		
		// Programmes
		lstProgrammes.addItem("Please choose","");
		lstProgrammes.addItem( SummerCampSettingValues.programme_name_summercamp,SummerCampSettingValues.programme_code_summercamp );
		lstProgrammes.addItem( SummerCampSettingValues.programme_name_summercourse,SummerCampSettingValues.programme_code_summercourse );
		
		// Courses
		lstCourses.addItem("Please choose","");
		lstCourses.addItem( SummerCampSettingValues.course_name_noconversation,SummerCampSettingValues.course_code_noconversation );
		lstCourses.addItem( SummerCampSettingValues.course_name_withconversation,SummerCampSettingValues.course_code_withconversation );
		
		//
		lstWeekNumber.addItem("","");
	}
	
	
	/*
	 * Depends on the start date, the number of week changes
	 * */
	@UiHandler("lstStartDate")
	void onLstStartDateChange(ChangeEvent event) {
		//
		if (lstStartDate.getValue( lstStartDate.getSelectedIndex() ).equals(""))
			return;
		lblStartDate.setText(lstStartDate.getItemText(lstStartDate.getSelectedIndex()));
		//
		lstWeekNumber.clear();
		//
		int weekNumber = Integer.parseInt( lstStartDate.getValue(lstStartDate.getSelectedIndex()));
		while ( weekNumber>0 ) {
			lstWeekNumber.addItem( Integer.toString(weekNumber), Integer.toString(weekNumber));
			weekNumber--;
		}
		//
		// If the number of week is more than 2, the minimum duration is 2 weeks, otherwise they can choose one week
		// 20150202 - Allow people to choose one week
//		if ( Integer.parseInt( lstStartDate.getValue(lstStartDate.getSelectedIndex())) > SummerCampSettingValues.minimumNumberOfWeek )
//			lstWeekNumber.removeItem( lstWeekNumber.getItemCount()-1 );
		
		// Show the weeks in detail
		onLstWeekNumberChange(null);
		
		//
		if ( event != null )
			getUiHandlers().toggleLeaveNotice();
	}
	
	
	/*
	 * */
	@UiHandler("lstWeekNumber")
	void onLstWeekNumberChange(ChangeEvent event) {
		//
		int maxJuly = Integer.parseInt( lstStartDate.getValue(lstStartDate.getSelectedIndex()) ) - 2;
		int weekNumber = Integer.parseInt( lstWeekNumber.getValue(lstWeekNumber.getSelectedIndex()));
		//
		if (maxJuly >0){
			if (weekNumber - maxJuly > 0) {
				txtJulyWeek.setText( Integer.toString(maxJuly) );
				txtAugustWeek.setText( Integer.toString( weekNumber - maxJuly) );
			}
			else {
				txtJulyWeek.setText( Integer.toString(weekNumber) );
				txtAugustWeek.setText( "0" );
			}
		}
		else {
			txtJulyWeek.setText( "0" );
			txtAugustWeek.setText( Integer.toString( weekNumber ) );
		}
		
		//
		lblDuration.setText( lstWeekNumber.getValue(lstWeekNumber.getSelectedIndex()) );
		
		//
		getUiHandlers().calculatePrice (
				lstProgrammes.getValue( lstProgrammes.getSelectedIndex() ),
				lstCourses.getValue( lstCourses.getSelectedIndex() ),
				lstStartDate.getItemText( lstStartDate.getSelectedIndex() ),
				lstWeekNumber.getItemText( lstWeekNumber.getSelectedIndex() ),
				txtJulyWeek.getText(),
				txtAugustWeek.getText(),
				optConfortPlusPrivate.getValue(),
				optConfortPrivate.getValue(),
				optStandardPrivate.getValue(),
				optConfortPlusShare.getValue(),
				optConfortShare.getValue(),
				optStandardShare.getValue() );
		
		//
		getUiHandlers().toggleLeaveNotice();
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
		lblApplicationInfo.setText( app.getEmailAddress() + " - " + app.getApplicationID() );
		//
		chkApplicaitonFee.setValue( app.isChkApplicationFee() );
		chkPackAssurance.setValue( app.isChkPackAssurance());
		//
		FieldValidation.selectItemFromList( lstProgrammes, app.getProgrammesCode() );
		FieldValidation.selectItemFromList( lstCourses, app.getCourseCode() );
		onLstCoursesChange(null);
		FieldValidation.selectItemFromList( lstLanguageOptions, app.getLanguageOption() );
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
		//
		lblStartDate.setText( app.getStartDate() );
		lblDuration.setText( app.getWeekNumber() );
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
			tblItems.getCellFormatter().setStyleName(i, 1, "brancheLine_number");
		}
		lblTotalAmount.setText( Double.toString(totalAmount));
	}
	
	
	/*
	 * */
	@UiHandler("lstProgrammes")
	void onLstProgrammesChange(ChangeEvent event) {
		//
		getUiHandlers().calculatePrice (
				lstProgrammes.getValue( lstProgrammes.getSelectedIndex() ),
				lstCourses.getValue( lstCourses.getSelectedIndex() ),
				lstStartDate.getItemText( lstStartDate.getSelectedIndex() ),
				lstWeekNumber.getItemText( lstWeekNumber.getSelectedIndex() ),
				txtJulyWeek.getText(),
				txtAugustWeek.getText(),
				optConfortPlusPrivate.getValue(),
				optConfortPrivate.getValue(),
				optStandardPrivate.getValue(),
				optConfortPlusShare.getValue(),
				optConfortShare.getValue(),
				optStandardShare.getValue() );
		//
		getUiHandlers().toggleLeaveNotice();
	}
	
	
	/*
	 * */
	@UiHandler("lstCourses")
	void onLstCoursesChange(ChangeEvent event) {
		//
		changeLanguageOptions();
		//
		getUiHandlers().calculatePrice (
				lstProgrammes.getValue( lstProgrammes.getSelectedIndex() ),
				lstCourses.getValue( lstCourses.getSelectedIndex() ),
				lstStartDate.getItemText( lstStartDate.getSelectedIndex() ),
				lstWeekNumber.getItemText( lstWeekNumber.getSelectedIndex() ),
				txtJulyWeek.getText(),
				txtAugustWeek.getText(),
				optConfortPlusPrivate.getValue(),
				optConfortPrivate.getValue(),
				optStandardPrivate.getValue(),
				optConfortPlusShare.getValue(),
				optConfortShare.getValue(),
				optStandardShare.getValue() );
		//
		getUiHandlers().toggleLeaveNotice();
	}
	
	
	/*
	 * */
	private void changeLanguageOptions() {
		//
		lstLanguageOptions.clear();
		lstLanguageOptions.addItem("","");
		//
		if (lstCourses.getValue(lstCourses.getSelectedIndex()).equals( SummerCampSettingValues.course_code_noconversation )) {
			lstLanguageOptions.addItem( SummerCampSettingValues.course_name_english, SummerCampSettingValues.course_code_english );
			lstLanguageOptions.addItem( SummerCampSettingValues.course_name_french, SummerCampSettingValues.course_code_french );
		}
		//
		if (lstCourses.getValue(lstCourses.getSelectedIndex()).equals( SummerCampSettingValues.course_code_withconversation )) {
			lstLanguageOptions.addItem( SummerCampSettingValues.course_name_englishenglish, SummerCampSettingValues.course_code_englishenglish );
			lstLanguageOptions.addItem( SummerCampSettingValues.course_name_englishfrench, SummerCampSettingValues.course_code_englishfrench );
			lstLanguageOptions.addItem( SummerCampSettingValues.course_name_frenchfrench, SummerCampSettingValues.course_code_frenchfrench );
			lstLanguageOptions.addItem( SummerCampSettingValues.course_name_frenchenglish, SummerCampSettingValues.course_code_frenchenglish );
		}
	}

	
	/*
	 * */
	@UiHandler("optConfortPlusPrivate")
	void onOptConfortPlusPrivateClick(ClickEvent event) {
		//
		getUiHandlers().calculatePrice (
				lstProgrammes.getValue( lstProgrammes.getSelectedIndex() ),
				lstCourses.getValue( lstCourses.getSelectedIndex() ),
				lstStartDate.getItemText( lstStartDate.getSelectedIndex() ),
				lstWeekNumber.getItemText( lstWeekNumber.getSelectedIndex() ),
				txtJulyWeek.getText(),
				txtAugustWeek.getText(),
				optConfortPlusPrivate.getValue(),
				optConfortPrivate.getValue(),
				optStandardPrivate.getValue(),
				optConfortPlusShare.getValue(),
				optConfortShare.getValue(),
				optStandardShare.getValue() );
		//
		getUiHandlers().toggleLeaveNotice();
	}
	
	
	/*
	 * */
	@UiHandler("optConfortPrivate")
	void onOptConfortPrivateClick(ClickEvent event) {
		//
		getUiHandlers().calculatePrice (
				lstProgrammes.getValue( lstProgrammes.getSelectedIndex() ),
				lstCourses.getValue( lstCourses.getSelectedIndex() ),
				lstStartDate.getItemText( lstStartDate.getSelectedIndex() ),
				lstWeekNumber.getItemText( lstWeekNumber.getSelectedIndex() ),
				txtJulyWeek.getText(),
				txtAugustWeek.getText(),
				optConfortPlusPrivate.getValue(),
				optConfortPrivate.getValue(),
				optStandardPrivate.getValue(),
				optConfortPlusShare.getValue(),
				optConfortShare.getValue(),
				optStandardShare.getValue() );
		//
		getUiHandlers().toggleLeaveNotice();
	}
	
	
	/*
	 * */
	@UiHandler("optStandardPrivate")
	void onOptStandardPrivateClick(ClickEvent event) {
		//
		getUiHandlers().calculatePrice (
				lstProgrammes.getValue( lstProgrammes.getSelectedIndex() ),
				lstCourses.getValue( lstCourses.getSelectedIndex() ),
				lstStartDate.getItemText( lstStartDate.getSelectedIndex() ),
				lstWeekNumber.getItemText( lstWeekNumber.getSelectedIndex() ),
				txtJulyWeek.getText(),
				txtAugustWeek.getText(),
				optConfortPlusPrivate.getValue(),
				optConfortPrivate.getValue(),
				optStandardPrivate.getValue(),
				optConfortPlusShare.getValue(),
				optConfortShare.getValue(),
				optStandardShare.getValue() );
		//
		getUiHandlers().toggleLeaveNotice();
	}
	
	
	/*
	 * */
	@UiHandler("optConfortPlusShare")
	void onOptConfortPlusShareClick(ClickEvent event) {
		//
		getUiHandlers().calculatePrice (
				lstProgrammes.getValue( lstProgrammes.getSelectedIndex() ),
				lstCourses.getValue( lstCourses.getSelectedIndex() ),
				lstStartDate.getItemText( lstStartDate.getSelectedIndex() ),
				lstWeekNumber.getItemText( lstWeekNumber.getSelectedIndex() ),
				txtJulyWeek.getText(),
				txtAugustWeek.getText(),
				optConfortPlusPrivate.getValue(),
				optConfortPrivate.getValue(),
				optStandardPrivate.getValue(),
				optConfortPlusShare.getValue(),
				optConfortShare.getValue(),
				optStandardShare.getValue() );
		//
		getUiHandlers().toggleLeaveNotice();
	}
	
	
	/*
	 * */
	@UiHandler("optConfortShare")
	void onOptConfortShareClick(ClickEvent event) {
		//
		getUiHandlers().calculatePrice (
				lstProgrammes.getValue( lstProgrammes.getSelectedIndex() ),
				lstCourses.getValue( lstCourses.getSelectedIndex() ),
				lstStartDate.getItemText( lstStartDate.getSelectedIndex() ),
				lstWeekNumber.getItemText( lstWeekNumber.getSelectedIndex() ),
				txtJulyWeek.getText(),
				txtAugustWeek.getText(),
				optConfortPlusPrivate.getValue(),
				optConfortPrivate.getValue(),
				optStandardPrivate.getValue(),
				optConfortPlusShare.getValue(),
				optConfortShare.getValue(),
				optStandardShare.getValue() );
		//
		getUiHandlers().toggleLeaveNotice();
	}
	
	
	/*
	 * */
	@UiHandler("optStandardShare")
	void onOptStandardShareClick(ClickEvent event) {
		//
		getUiHandlers().calculatePrice (
				lstProgrammes.getValue( lstProgrammes.getSelectedIndex() ),
				lstCourses.getValue( lstCourses.getSelectedIndex() ),
				lstStartDate.getItemText( lstStartDate.getSelectedIndex() ),
				lstWeekNumber.getItemText( lstWeekNumber.getSelectedIndex() ),
				txtJulyWeek.getText(),
				txtAugustWeek.getText(),
				optConfortPlusPrivate.getValue(),
				optConfortPrivate.getValue(),
				optStandardPrivate.getValue(),
				optConfortPlusShare.getValue(),
				optConfortShare.getValue(),
				optStandardShare.getValue() );
		//
		getUiHandlers().toggleLeaveNotice();
	}
	
	
	/*
	 * */
	@UiHandler("chkPackAssurance")
	void onChkPackAssuranceClick(ClickEvent event) {
		//
		getUiHandlers().editItemPrice( SummerCampSettingValues.item_asssurancepack_code, chkPackAssurance.getValue() );
		//
		getUiHandlers().toggleLeaveNotice();
	}
	
	/*
	 * */
	@UiHandler("chkContinueAfter")
	void onChkContinueAfterClick(ClickEvent event) {
		//
		getUiHandlers().toggleLeaveNotice();
	}
	
	/*
	 * */
	@UiHandler("optKeyDepositCHF")
	void onOptKeyDepositCHFClick(ClickEvent event) {
		//
		getUiHandlers().toggleLeaveNotice();
	}
	
	/*
	 * */
	@UiHandler("optKeyDepositEuro")
	void onOptKeyDepositEuroClick(ClickEvent event) {
		//
		getUiHandlers().toggleLeaveNotice();
	}
	
	/*
	 * */
	@UiHandler("optKeyDepositUSD")
	void onOptKeyDepositUSDClick(ClickEvent event) {
		//
		getUiHandlers().toggleLeaveNotice();
	}
	

	/*
	 * 
	 * */
	@Override
	public void toggleAssurance(boolean useInternat) {
		//
		chkPackAssurance.setValue( useInternat );
		//
		onChkPackAssuranceClick( null ); 
	}
}
