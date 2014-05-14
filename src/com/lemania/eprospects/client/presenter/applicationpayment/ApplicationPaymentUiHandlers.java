package com.lemania.eprospects.client.presenter.applicationpayment;

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
	void toggleLeaveNotice();
	//
	void clearLeaveNotice();
	//
	void previousStep();
}
