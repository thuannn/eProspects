package com.lemania.eprospects.client.presenter.applicationstep2;

import com.gwtplatform.mvp.client.UiHandlers;

public interface ApplicationStep2UiHandlers extends UiHandlers {
	//
	void nextStep (
			boolean chkApplicaitonFee,
			boolean chkPackAssurance,
			String programmesCode,
			String courseCode,
			String startDate,
			String weekNumber,
			String txtJulyWeek,
			String txtAugustWeek,
			boolean chkContinueAfter,
			boolean optConfortPlusPrivate,
			boolean optConfortPrivate,
			boolean optStandardPrivate,
			boolean optConfortPlusShare,
			boolean optConfortShare,
			boolean optStandardShare,
			boolean optKeyDepositCHF,
			boolean optKeyDepositEuro,
			boolean optKeyDepositUSD );
	//
	void calculatePrice (
			String programmesCode,
			String courseCode,
			String startDate,
			String weekNumber,
			String txtJulyWeek,
			String txtAugustWeek,
			boolean optConfortPlusPrivate,
			boolean optConfortPrivate,
			boolean optStandardPrivate,
			boolean optConfortPlusShare,
			boolean optConfortShare,
			boolean optStandardShare );
	//
	void editItemPrice( String itemCode, boolean selected );
	//
	void previousStep();
}