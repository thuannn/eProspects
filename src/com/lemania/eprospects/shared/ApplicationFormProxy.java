package com.lemania.eprospects.shared;

import com.google.web.bindery.requestfactory.shared.EntityProxy;
import com.google.web.bindery.requestfactory.shared.ProxyFor;
import com.lemania.eprospects.server.ApplicationForm;
import com.lemania.eprospects.server.ObjectifyLocator;

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
	public boolean isChkApplicaitonFee();
	public void setChkApplicaitonFee(boolean chkApplicaitonFee);

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
}
