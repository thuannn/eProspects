package com.lemania.eprospects.client.presenter.applicationstep5;

import com.gwtplatform.mvp.client.UiHandlers;

public interface ApplicationStep5UiHandlers extends UiHandlers {
	//
	void nextStep(
			boolean chkConditionAgreement,
			String txtDatePlace,
			String txtFullName
		);
	//
	void toggleLeaveNotice();
	//
	void previousStep();
}
