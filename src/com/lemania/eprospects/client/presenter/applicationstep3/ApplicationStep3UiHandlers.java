package com.lemania.eprospects.client.presenter.applicationstep3;

import com.gwtplatform.mvp.client.UiHandlers;

public interface ApplicationStep3UiHandlers extends UiHandlers {
	//
	void nextStep(
			String lstAirportDirection,
			boolean optPrivateCourse,
			String txtPrivateCoursePeriod,
			boolean chkGeneveOneway,
			boolean chkZurichOneway,
			boolean chkGeneveRoundtrip,
			boolean chkZurichRoundtrip,
			String txtAirlineName,
			String txtArriveVol,
			String txtArriveTime,
			String txtDepartVol,
			String txtDepartTime,
			boolean chkVisaLetterRequest,
			boolean optMoneyDepositYes,
			boolean optMoneyDepositNo,
			String txtMoneyDepositAmount,
			boolean chkMealPackage,
			boolean chkActivitiesPackage );
	//
	void previousStep();
}
