package com.lemania.eprospects.client.presenter.applicationstep4;

import com.gwtplatform.mvp.client.UiHandlers;

public interface ApplicationStep4UiHandlers extends UiHandlers {
	//
	void nextStep(
			boolean optHealthProblemYes,
			boolean optHealProblemNo,
			String 	txtHealthProblem,
			boolean optAllergyYes,
			boolean optAllergyNo,
			String 	txtAllergy,
			boolean optMedicalYes,
			boolean optMedicalNo,
			String 	txtMedical,
			String 	txtOther );
	//
	void previousStep();
}
