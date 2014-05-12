package com.lemania.eprospects.client.presenter.applicationstep1;

import com.gwtplatform.mvp.client.UiHandlers;

public interface ApplicationStep1UiHandlers extends UiHandlers {
	//
	void nextStep(
			String genderCode,
			String lastName_Student,
			String firstName_Student,
			String DOB_Student,
			String nationality_Student,
			String address_Student,
			String city_Student,
			String country_Student,
			String email_Student,
			String mobilePhone_Student,
			String lastName_Parents,
			String firstName_Parents,
			String address_Parents,
			String city_Parents,
			String country_Parents,
			String mobilePhone_Mother,
			String mobilePhone_Father,
			String homePhone_Parents,
			String workPhone_Parents,
			String fax_Parents,
			String email_Parents,
			String companyName_Invoice,
			String fullName_Invoice,
			String address_Invoice,
			String city_Invoice,
			String country_Invoice
	);
	void previousStep();
}
