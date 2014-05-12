package com.lemania.eprospects.client.presenter.applicationpayment;

import com.google.gwt.user.client.ui.RadioButton;
import com.gwtplatform.mvp.client.UiHandlers;

public interface ApplicationPaymentUiHandlers extends UiHandlers {
	//
	void nextStep(
			boolean optPaypal,
			boolean optPayDirect,
			boolean optBankTransfer,
			boolean optDirectCash,
			boolean optDirectCard );
	//
	void previousStep();
}
