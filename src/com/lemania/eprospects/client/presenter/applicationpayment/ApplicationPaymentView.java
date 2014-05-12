package com.lemania.eprospects.client.presenter.applicationpayment;

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
import com.lemania.eprospects.shared.ApplicationFormProxy;

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
		showOptionDirect( true );
	}
	
	
	/*
	 * */
	@UiHandler("optPaypal")
	void onOptPaypalClick(ClickEvent event) {
		showOptionDirect( false );
	}
	

	/*
	 * */
	@Override
	public void initializeUI() {
		//
		htmlPaypalButton.setHTML(
				"<form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_top'>" +
				"<input type='hidden' name='cmd' value='_xclick'>" +
				"<input type='hidden' name='item_name' value='Lemania Summer Camp & Courses'>" +
				"<input type='hidden' name='amount' value='0.1'>" +
				"<input type='hidden' name='business' value='J2A4WFF2URAN2'>" +
				"<input type='hidden' name='lc' value='CH'>" +
				"<input type='hidden' name='button_subtype' value='services'>" +
				"<input type='hidden' name='no_note' value='1'>" +
				"<input type='hidden' name='no_shipping' value='1'>" +
				"<input type='hidden' name='rm' value='1'>" +
				"<input type='hidden' name='return' value='http://lemania-eprospects-dev.appspot.com/#applicationfinal'>" +
				"<input type='hidden' name='currency_code' value='CHF'>" +
				"<input type='hidden' name='bn' value='PP-BuyNowBF:btn_paynowCC_LG.gif:NonHosted'>" +
				"<input type='image' src='https://www.paypalobjects.com/fr_FR/CH/i/btn/btn_paynowCC_LG.gif' border='0' name='submit' alt='PayPal - la solution de paiement en ligne la plus simple et la plus sécurisée !'>" +
				"<img alt='' border='0' src='https://www.paypalobjects.com/fr_FR/i/scr/pixel.gif' width='1' height='1'>" +
				"</form>"
		);
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
		
	}

	
	/*
	 * */
	@Override
	public void showApplicationDetails(ApplicationFormProxy app) {
		//
		 optPaypal.setValue( app.isOptPaypal() );
		 optPayDirect.setValue( app.isOptPayDirect() );
		 optBankTransfer.setValue( app.isOptBankTransfer() );
		 optDirectCash.setValue( app.isOptDirectCash() );
		 optDirectCard.setValue( app.isOptDirectCard() );
	}
}
