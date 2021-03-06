package com.lemania.eprospects.client.presenter.applicationpayment;

import java.util.List;

import javax.inject.Inject;

import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.IsWidget;
import com.google.gwt.user.client.ui.SimplePanel;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.user.client.ui.RadioButton;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.lemania.eprospects.shared.applicationform.ApplicationFormProxy;
import com.lemania.eprospects.shared.applicationitem.ApplicationItemProxy;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.Label;

public class ApplicationPaymentView extends
		ViewWithUiHandlers<ApplicationPaymentUiHandlers> implements
		ApplicationPaymentPresenter.MyView {
	interface Binder extends UiBinder<Widget, ApplicationPaymentView> {
	}

	@UiField
	SimplePanel main;
	@UiField HorizontalPanel pnlOptionDirect;
	@UiField Button cmdNextStep;
	@UiField HTML htmlPaypalButton;
	@UiField Button cmdPreviousStep;
	
	@UiField RadioButton optPaypal;
	@UiField RadioButton optPayDirect;
	@UiField RadioButton optBankTransfer;
	@UiField RadioButton optDirectCash;
	@UiField RadioButton optDirectCard;
	@UiField FlexTable tblItems;
	@UiField Label lblTotalAmount;
	@UiField Label lblApplicationInfo;
	@UiField Label lblStartDate;
	@UiField Label lblDuration;

	@Inject
	ApplicationPaymentView(Binder uiBinder) {
		initWidget(uiBinder.createAndBindUi(this));
	}

	@Override
	public void setInSlot(Object slot, IsWidget content) {
		if (slot == ApplicationPaymentPresenter.SLOT_ApplicationPayment) {
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
				 optPaypal.getValue(),
				 optPayDirect.getValue(),
				 optBankTransfer.getValue(),
				 optDirectCash.getValue(),
				 optDirectCard.getValue() );
	}
	
	
	/*
	 * */
	void showOptionDirect(boolean show){
		cmdNextStep.setVisible( show );
		pnlOptionDirect.setVisible( show );
	}
	
	
	/*
	 * */
	@UiHandler("optPayDirect")
	void onOptPayDirectClick(ClickEvent event) {
		//
		showOptionDirect( true );
		//
		htmlPaypalButton.setVisible(false);
		//
		getUiHandlers().toggleLeaveNotice();
	}
	
	
	/*
	 * */
	@UiHandler("optPaypal")
	void onOptPaypalClick(ClickEvent event) {
		//
		showOptionDirect( false );
		//
		htmlPaypalButton.setVisible(true);
		//
		getUiHandlers().clearLeaveNotice();
	}
	

	/*
	 * */
	@Override
	public void initializeUI() {
		//
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
	@UiHandler("optBankTransfer")
	void onOptBankTransferClick(ClickEvent event) {
		//
		showOptionDirect(false);
		cmdNextStep.setVisible(true);
		//
		htmlPaypalButton.setVisible(false);
		//
		getUiHandlers().toggleLeaveNotice();
	}

	
	/*
	 * */
	@Override
	public void showApplicationDetails(ApplicationFormProxy app) {
		//
		lblApplicationInfo.setText( app.getEmailAddress() + " - " + app.getApplicationID() );
		//
		optPaypal.setValue( app.isOptPaypal() );
		optPayDirect.setValue( app.isOptPayDirect() );
		optBankTransfer.setValue( app.isOptBankTransfer() );
		optDirectCash.setValue( app.isOptDirectCash() );
		optDirectCard.setValue( app.isOptDirectCard() );
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
		lblTotalAmount.setText( Double.toString( totalAmount + (totalAmount*3/100) ));
		//
		showPaypalButton();
	}
	
	
	/*
	 * */
	private void showPaypalButton() {
		//
		htmlPaypalButton.setHTML(
				"<form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_top'>" +
					"<input type='hidden' name='cmd' value='_xclick'>" +
					"<input type='hidden' name='item_name' value='Lemania Summer Camp & Courses'>" +
					"<input type='hidden' name='amount' value='" + lblTotalAmount.getText() +"'>" +
					//"<input type='hidden' name='amount' value='500'>" +
					"<input type='hidden' name='business' value='J2A4WFF2URAN2'>" +
					"<input type='hidden' name='lc' value='US'>" +
					"<input type='hidden' name='button_subtype' value='services'>" +
					"<input type='hidden' name='no_note' value='1'>" +
					"<input type='hidden' name='no_shipping' value='1'>" +
					"<input type='hidden' name='rm' value='1'>" +
					"<input type='hidden' name='return' value='http://lemania-eprospects-dev.appspot.com/#applicationfinal'>" +
					"<input type='hidden' name='currency_code' value='CHF'>" +
					"<input type='hidden' name='bn' value='PP-BuyNowBF:btn_paynowCC_LG.gif:NonHosted'>" +
					"<input type='image' src='https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif' border='0' name='submit' alt='PayPal - The safer, easier way to pay online!'>" +
					"<img alt='' border='0' src='https://www.paypalobjects.com/fr_FR/i/scr/pixel.gif' width='1' height='1'>" +
				"</form>"
		);
	}
}
