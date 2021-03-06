package com.lemania.eprospects.shared.applicationform;

import com.google.web.bindery.requestfactory.shared.EntityProxy;
import com.google.web.bindery.requestfactory.shared.ProxyFor;
import com.lemania.eprospects.server.ObjectifyLocator;
import com.lemania.eprospects.server.applicationform.ApplicationForm;

@ProxyFor(value=ApplicationForm.class, locator=ObjectifyLocator.class)
public interface ApplicationFormProxy extends EntityProxy {
	//
	
	Long getId();
	
	//
	
	public String getApplicationID();
	public void setApplicationID(String applicationID);

	public String getEmailAddress();
	public void setEmailAddress(String emailAddress);
	
	public boolean isPaid();
	public void setPaid(boolean isPaid);

	public boolean isCompleted();
	public void setCompleted(boolean isCompleted);
	
	// step 1
	
	public String getGenderCode();
	public void setGenderCode(String genderCode);

	public String getLastName_Student();
	public void setLastName_Student(String lastName_Student);
	
	public String getFirstName_Student();
	public void setFirstName_Student(String firstName_Student);
	
	public String getDOB_Student();
	public void setDOB_Student(String dOB_Student);

	public String getNationality_Student();
	public void setNationality_Student(String nationality_Student);

	public String getAddress_Student();
	public void setAddress_Student(String address_Student);

	public String getCity_Student();
	public void setCity_Student(String city_Student);

	public String getCountry_Student();
	public void setCountry_Student(String country_Student);

	public String getEmail_Student();
	public void setEmail_Student(String email_Student);

	public String getMobilePhone_Student();
	public void setMobilePhone_Student(String mobilePhone_Student);

	public String getLastName_Parents();
	public void setLastName_Parents(String lastName_Parents);

	public String getFirstName_Parents();
	public void setFirstName_Parents(String firstName_Parents);

	public String getAddress_Parents();
	public void setAddress_Parents(String address_Parents);

	public String getCity_Parents();
	public void setCity_Parents(String city_Parents);

	public String getCountry_Parents();
	public void setCountry_Parents(String country_Parents);

	public String getMobilePhone_Mother();
	public void setMobilePhone_Mother(String mobilePhone_Mother);

	public String getMobilePhone_Father();
	public void setMobilePhone_Father(String mobilePhone_Father);

	public String getHomePhone_Parents();
	public void setHomePhone_Parents(String homePhone_Parents);

	public String getWorkPhone_Parents();
	public void setWorkPhone_Parents(String workPhone_Parents);

	public String getFax_Parents();
	public void setFax_Parents(String fax_Parents);

	public String getEmail_Parents();
	public void setEmail_Parents(String email_Parents);

	public String getCompanyName_Invoice();
	public void setCompanyName_Invoice(String companyName_Invoice);

	public String getFullName_Invoice();
	public void setFullName_Invoice(String fullName_Invoice);

	public String getAddress_Invoice();
	public void setAddress_Invoice(String address_Invoice);

	public String getCity_Invoice();
	public void setCity_Invoice(String city_Invoice);

	public String getCountry_Invoice();
	public void setCountry_Invoice(String country_Invoice);
	
	// step 2
	
	public boolean isChkApplicationFee();
	public void setChkApplicaitonFee(boolean chkApplicationFee);

	public boolean isChkPackAssurance();
	public void setChkPackAssurance(boolean chkPackAssurance);

	public String getProgrammesCode();
	public void setProgrammesCode(String programmesCode);

	public String getCourseCode();
	public void setCourseCode(String courseCode);

	public String getStartDate();
	public void setStartDate(String startDate);

	public String getWeekNumber();
	public void setWeekNumber(String weekNumber);

	public String getTxtJulyWeek();
	public void setTxtJulyWeek(String txtJulyWeek);

	public String getTxtAugustWeek();
	public void setTxtAugustWeek(String txtAugustWeek);

	public boolean isOptConfortPlusPrivate();
	public void setOptConfortPlusPrivate(boolean optConfortPlusPrivate);

	public boolean isOptConfortPrivate();
	public void setOptConfortPrivate(boolean optConfortPrivate);

	public boolean isOptStandardPrivate();
	public void setOptStandardPrivate(boolean optStandardPrivate);

	public boolean isOptConfortPlusShare();
	public void setOptConfortPlusShare(boolean optConfortPlusShare);

	public boolean isOptConfortShare();
	public void setOptConfortShare(boolean optConfortShare);

	public boolean isOptStandardShare();
	public void setOptStandardShare(boolean optStandardShare);

	public boolean isOptKeyDepositCHF();
	public void setOptKeyDepositCHF(boolean optKeyDepositCHF);

	public boolean isOptKeyDepositEuro();
	public void setOptKeyDepositEuro(boolean optKeyDepositEuro);

	public boolean isOptKeyDepositUSD();	
	public void setOptKeyDepositUSD(boolean optKeyDepositUSD);
	
	public boolean isChkContinueAfter();
	public void setChkContinueAfter(boolean chkContinueAfter);
	
	public void setLanguageOption(String languageOption);
	public String getLanguageOption();
	
	// step 3
	
	public String getLstAirportDirection();
	public void setLstAirportDirection(String lstAirportDirection);

	public boolean getOptPrivateCourse();
	public void setOptPrivateCourse(boolean optPrivateCourse);

	public String getTxtPrivateCoursePeriod();
	public void setTxtPrivateCoursePeriod(String txtPrivateCoursePeriod);

	public boolean getChkGeneveOneway();
	public void setChkGeneveOneway(boolean chkGeneveOneway);

	public boolean getChkZurichOneway();
	public void setChkZurichOneway(boolean chkZurichOneway);

	public boolean getChkGeneveRoundtrip();
	public void setChkGeneveRoundtrip(boolean chkGeneveRoundtrip);

	public boolean getChkZurichRoundtrip();	
	public void setChkZurichRoundtrip(boolean chkZurichRoundtrip);

	public String getTxtAirlineName();
	public void setTxtAirlineName(String txtAirlineName);

	public String getTxtArriveVol();
	public void setTxtArriveVol(String txtArriveVol);

	public String getTxtArriveTime();
	public void setTxtArriveTime(String txtArriveTime);

	public String getTxtDepartVol();
	public void setTxtDepartVol(String txtDepartVol);

	public String getTxtDepartTime();
	public void setTxtDepartTime(String txtDepartTime);

	public boolean getChkVisaLetterRequest();
	public void setChkVisaLetterRequest(boolean chkVisaLetterRequest);

	public boolean getOptMoneyDepositYes();
	public void setOptMoneyDepositYes(boolean optMoneyDepositYes);

	public boolean getOptMoneyDepositNo();
	public void setOptMoneyDepositNo(boolean optMoneyDepositNo);

	public String getTxtMoneyDepositAmount();
	public void setTxtMoneyDepositAmount(String txtMoneyDepositAmount);

	public boolean getChkMealPackage();
	public void setChkMealPackage(boolean chkMealPackage);

	public boolean getChkActivitiesPackage();
	public void setChkActivitiesPackage(boolean chkActivitiesPackage);
	
	//

	public boolean isOptHealthProblemYes();
	public void setOptHealthProblemYes(boolean optHealthProblemYes);

	public boolean isOptHealProblemNo();
	public void setOptHealProblemNo(boolean optHealProblemNo);

	public String getTxtHealthProblem();
	public void setTxtHealthProblem(String txtHealthProblem);

	public boolean isOptAllergyYes();
	public void setOptAllergyYes(boolean optAllergyYes);

	public boolean isOptAllergyNo();
	public void setOptAllergyNo(boolean optAllergyNo);

	public String getTxtAllergy();
	public void setTxtAllergy(String txtAllergy);

	public boolean isOptMedicalYes();
	public void setOptMedicalYes(boolean optMedicalYes);

	public boolean isOptMedicalNo();
	public void setOptMedicalNo(boolean optMedicalNo);

	public String getTxtMedical();
	public void setTxtMedical(String txtMedical);

	public String getTxtOther();
	public void setTxtOther(String txtOther);
	
	//
	
	public boolean isChkConditionAgreement();	
	public void setChkConditionAgreement(boolean chkConditionAgreement);

	public String getTxtDatePlace();
	public void setTxtDatePlace(String txtDatePlace);

	public String getTxtFullName();
	public void setTxtFullName(String txtFullName);
	
	//
	
	public boolean isOptPaypal();
	public void setOptPaypal(boolean optPaypal);

	public boolean isOptPayDirect();
	public void setOptPayDirect(boolean optPayDirect);

	public boolean isOptBankTransfer();
	public void setOptBankTransfer(boolean optBankTransfer);

	public boolean isOptDirectCash();
	public void setOptDirectCash(boolean optDirectCash);

	public boolean isOptDirectCard();
	public void setOptDirectCard(boolean optDirectCard);
	
	//
}
