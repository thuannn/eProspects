package com.lemania.eprospects.server.applicationform;

import com.googlecode.objectify.annotation.Entity;
import com.lemania.eprospects.server.DatastoreObject;

@Entity
public class ApplicationForm extends DatastoreObject {
	//
	private String applicationID = "";
	private String emailAddress = "";
	
	// step 1
	String genderCode;
	String lastName_Student;
	String firstName_Student;
	String DOB_Student;
	String nationality_Student;
	String address_Student;
	String city_Student;
	String country_Student;
	String email_Student;
	String mobilePhone_Student;
	String lastName_Parents;
	String firstName_Parents;
	String address_Parents;
	String city_Parents;
	String country_Parents;
	String mobilePhone_Mother;
	String mobilePhone_Father;
	String homePhone_Parents;
	String workPhone_Parents;
	String fax_Parents;
	String email_Parents;
	String companyName_Invoice;
	String fullName_Invoice;
	String address_Invoice;
	String city_Invoice;
	String country_Invoice;
	
	// step 2
	boolean chkApplicaitonFee;
	boolean chkPackAssurance;
	String programmesCode;
	String courseCode;
	String startDate;
	String weekNumber;
	String txtJulyWeek;
	String txtAugustWeek;
	boolean chkContinueAfter;
	boolean optConfortPlusPrivate;
	boolean optConfortPrivate;
	boolean optStandardPrivate;
	boolean optConfortPlusShare;
	boolean optConfortShare;
	boolean optStandardShare;
	boolean optKeyDepositCHF;
	boolean optKeyDepositEuro;
	boolean optKeyDepositUSD;
	
	// step 3
	String lstAirportDirection;
	boolean optPrivateCourse;
	String txtPrivateCoursePeriod;
	boolean chkGeneveOneway;
	boolean chkZurichOneway;
	boolean chkGeneveRoundtrip;
	boolean chkZurichRoundtrip;
	String txtAirlineName;
	String txtArriveVol;
	String txtArriveTime;
	String txtDepartVol;
	String txtDepartTime;
	boolean chkVisaLetterRequest;
	boolean optMoneyDepositYes;
	boolean optMoneyDepositNo;
	String txtMoneyDepositAmount;
	boolean chkMealPackage;
	boolean chkActivitiesPackage;
	
	// step 4
	boolean optHealthProblemYes;
	boolean optHealProblemNo;
	String 	txtHealthProblem;
	boolean optAllergyYes;
	boolean optAllergyNo;
	String 	txtAllergy;
	boolean optMedicalYes;
	boolean optMedicalNo;
	String 	txtMedical;
	String 	txtOther;
	
	// step 5
	boolean chkConditionAgreement;
	String txtDatePlace;
	String txtFullName;
	
	// payment step
	boolean optPaypal;
	boolean optPayDirect;
	boolean optBankTransfer;
	boolean optDirectCash;
	boolean optDirectCard;
	
	//
	private boolean isPaid = false;
	private boolean isCompleted = false;
	
	//
	public String getApplicationID() {
		return applicationID;
	}

	public void setApplicationID(String applicationID) {
		this.applicationID = applicationID;
	}

	public String getEmailAddress() {
		return emailAddress;
	}

	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}

	public boolean isPaid() {
		return isPaid;
	}

	public void setPaid(boolean isPaid) {
		this.isPaid = isPaid;
	}

	public boolean isCompleted() {
		return isCompleted;
	}

	public void setCompleted(boolean isCompleted) {
		this.isCompleted = isCompleted;
	}

	public String getGenderCode() {
		return genderCode;
	}

	public void setGenderCode(String genderCode) {
		this.genderCode = genderCode;
	}

	public String getLastName_Student() {
		return lastName_Student;
	}

	public void setLastName_Student(String lastName_Student) {
		this.lastName_Student = lastName_Student;
	}

	public String getFirstName_Student() {
		return firstName_Student;
	}

	public void setFirstName_Student(String firstName_Student) {
		this.firstName_Student = firstName_Student;
	}

	public String getDOB_Student() {
		return DOB_Student;
	}

	public void setDOB_Student(String dOB_Student) {
		DOB_Student = dOB_Student;
	}

	public String getNationality_Student() {
		return nationality_Student;
	}

	public void setNationality_Student(String nationality_Student) {
		this.nationality_Student = nationality_Student;
	}

	public String getAddress_Student() {
		return address_Student;
	}

	public void setAddress_Student(String address_Student) {
		this.address_Student = address_Student;
	}

	public String getCity_Student() {
		return city_Student;
	}

	public void setCity_Student(String city_Student) {
		this.city_Student = city_Student;
	}

	public String getCountry_Student() {
		return country_Student;
	}

	public void setCountry_Student(String country_Student) {
		this.country_Student = country_Student;
	}

	public String getEmail_Student() {
		return email_Student;
	}

	public void setEmail_Student(String email_Student) {
		this.email_Student = email_Student;
	}

	public String getMobilePhone_Student() {
		return mobilePhone_Student;
	}

	public void setMobilePhone_Student(String mobilePhone_Student) {
		this.mobilePhone_Student = mobilePhone_Student;
	}

	public String getLastName_Parents() {
		return lastName_Parents;
	}

	public void setLastName_Parents(String lastName_Parents) {
		this.lastName_Parents = lastName_Parents;
	}

	public String getFirstName_Parents() {
		return firstName_Parents;
	}

	public void setFirstName_Parents(String firstName_Parents) {
		this.firstName_Parents = firstName_Parents;
	}

	public String getAddress_Parents() {
		return address_Parents;
	}

	public void setAddress_Parents(String address_Parents) {
		this.address_Parents = address_Parents;
	}

	public String getCity_Parents() {
		return city_Parents;
	}

	public void setCity_Parents(String city_Parents) {
		this.city_Parents = city_Parents;
	}

	public String getCountry_Parents() {
		return country_Parents;
	}

	public void setCountry_Parents(String country_Parents) {
		this.country_Parents = country_Parents;
	}

	public String getMobilePhone_Mother() {
		return mobilePhone_Mother;
	}

	public void setMobilePhone_Mother(String mobilePhone_Mother) {
		this.mobilePhone_Mother = mobilePhone_Mother;
	}

	public String getMobilePhone_Father() {
		return mobilePhone_Father;
	}

	public void setMobilePhone_Father(String mobilePhone_Father) {
		this.mobilePhone_Father = mobilePhone_Father;
	}

	public String getHomePhone_Parents() {
		return homePhone_Parents;
	}

	public void setHomePhone_Parents(String homePhone_Parents) {
		this.homePhone_Parents = homePhone_Parents;
	}

	public String getWorkPhone_Parents() {
		return workPhone_Parents;
	}

	public void setWorkPhone_Parents(String workPhone_Parents) {
		this.workPhone_Parents = workPhone_Parents;
	}

	public String getFax_Parents() {
		return fax_Parents;
	}

	public void setFax_Parents(String fax_Parents) {
		this.fax_Parents = fax_Parents;
	}

	public String getEmail_Parents() {
		return email_Parents;
	}

	public void setEmail_Parents(String email_Parents) {
		this.email_Parents = email_Parents;
	}

	public String getCompanyName_Invoice() {
		return companyName_Invoice;
	}

	public void setCompanyName_Invoice(String companyName_Invoice) {
		this.companyName_Invoice = companyName_Invoice;
	}

	public String getFullName_Invoice() {
		return fullName_Invoice;
	}

	public void setFullName_Invoice(String fullName_Invoice) {
		this.fullName_Invoice = fullName_Invoice;
	}

	public String getAddress_Invoice() {
		return address_Invoice;
	}

	public void setAddress_Invoice(String address_Invoice) {
		this.address_Invoice = address_Invoice;
	}

	public String getCity_Invoice() {
		return city_Invoice;
	}

	public void setCity_Invoice(String city_Invoice) {
		this.city_Invoice = city_Invoice;
	}

	public String getCountry_Invoice() {
		return country_Invoice;
	}

	public void setCountry_Invoice(String country_Invoice) {
		this.country_Invoice = country_Invoice;
	}

	public boolean isChkApplicaitonFee() {
		return chkApplicaitonFee;
	}

	public void setChkApplicaitonFee(boolean chkApplicaitonFee) {
		this.chkApplicaitonFee = chkApplicaitonFee;
	}

	public boolean isChkPackAssurance() {
		return chkPackAssurance;
	}

	public void setChkPackAssurance(boolean chkPackAssurance) {
		this.chkPackAssurance = chkPackAssurance;
	}

	public String getProgrammesCode() {
		return programmesCode;
	}

	public void setProgrammesCode(String programmesCode) {
		this.programmesCode = programmesCode;
	}

	public String getCourseCode() {
		return courseCode;
	}

	public void setCourseCode(String courseCode) {
		this.courseCode = courseCode;
	}

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getWeekNumber() {
		return weekNumber;
	}

	public void setWeekNumber(String weekNumber) {
		this.weekNumber = weekNumber;
	}

	public String getTxtJulyWeek() {
		return txtJulyWeek;
	}

	public void setTxtJulyWeek(String txtJulyWeek) {
		this.txtJulyWeek = txtJulyWeek;
	}

	public String getTxtAugustWeek() {
		return txtAugustWeek;
	}

	public void setTxtAugustWeek(String txtAugustWeek) {
		this.txtAugustWeek = txtAugustWeek;
	}

	public boolean isOptConfortPlusPrivate() {
		return optConfortPlusPrivate;
	}

	public void setOptConfortPlusPrivate(boolean optConfortPlusPrivate) {
		this.optConfortPlusPrivate = optConfortPlusPrivate;
	}

	public boolean isOptConfortPrivate() {
		return optConfortPrivate;
	}

	public void setOptConfortPrivate(boolean optConfortPrivate) {
		this.optConfortPrivate = optConfortPrivate;
	}

	public boolean isOptStandardPrivate() {
		return optStandardPrivate;
	}

	public void setOptStandardPrivate(boolean optStandardPrivate) {
		this.optStandardPrivate = optStandardPrivate;
	}

	public boolean isOptConfortPlusShare() {
		return optConfortPlusShare;
	}

	public void setOptConfortPlusShare(boolean optConfortPlusShare) {
		this.optConfortPlusShare = optConfortPlusShare;
	}

	public boolean isOptConfortShare() {
		return optConfortShare;
	}

	public void setOptConfortShare(boolean optConfortShare) {
		this.optConfortShare = optConfortShare;
	}

	public boolean isOptStandardShare() {
		return optStandardShare;
	}

	public void setOptStandardShare(boolean optStandardShare) {
		this.optStandardShare = optStandardShare;
	}

	public boolean isOptKeyDepositCHF() {
		return optKeyDepositCHF;
	}

	public void setOptKeyDepositCHF(boolean optKeyDepositCHF) {
		this.optKeyDepositCHF = optKeyDepositCHF;
	}

	public boolean isOptKeyDepositEuro() {
		return optKeyDepositEuro;
	}

	public void setOptKeyDepositEuro(boolean optKeyDepositEuro) {
		this.optKeyDepositEuro = optKeyDepositEuro;
	}

	public boolean isOptKeyDepositUSD() {
		return optKeyDepositUSD;
	}

	public void setOptKeyDepositUSD(boolean optKeyDepositUSD) {
		this.optKeyDepositUSD = optKeyDepositUSD;
	}

	public boolean isChkContinueAfter() {
		return chkContinueAfter;
	}

	public void setChkContinueAfter(boolean chkContinueAfter) {
		this.chkContinueAfter = chkContinueAfter;
	}

	public String getLstAirportDirection() {
		return lstAirportDirection;
	}

	public void setLstAirportDirection(String lstAirportDirection) {
		this.lstAirportDirection = lstAirportDirection;
	}

	public boolean getOptPrivateCourse() {
		return optPrivateCourse;
	}

	public void setOptPrivateCourse(boolean optPrivateCourse) {
		this.optPrivateCourse = optPrivateCourse;
	}

	public String getTxtPrivateCoursePeriod() {
		return txtPrivateCoursePeriod;
	}

	public void setTxtPrivateCoursePeriod(String txtPrivateCoursePeriod) {
		this.txtPrivateCoursePeriod = txtPrivateCoursePeriod;
	}

	public boolean getChkGeneveOneway() {
		return chkGeneveOneway;
	}

	public void setChkGeneveOneway(boolean chkGeneveOneway) {
		this.chkGeneveOneway = chkGeneveOneway;
	}

	public boolean getChkZurichOneway() {
		return chkZurichOneway;
	}

	public void setChkZurichOneway(boolean chkZurichOneway) {
		this.chkZurichOneway = chkZurichOneway;
	}

	public boolean getChkGeneveRoundtrip() {
		return chkGeneveRoundtrip;
	}

	public void setChkGeneveRoundtrip(boolean chkGeneveRoundtrip) {
		this.chkGeneveRoundtrip = chkGeneveRoundtrip;
	}

	public boolean getChkZurichRoundtrip() {
		return chkZurichRoundtrip;
	}

	public void setChkZurichRoundtrip(boolean chkZurichRoundtrip) {
		this.chkZurichRoundtrip = chkZurichRoundtrip;
	}

	public String getTxtAirlineName() {
		return txtAirlineName;
	}

	public void setTxtAirlineName(String txtAirlineName) {
		this.txtAirlineName = txtAirlineName;
	}

	public String getTxtArriveVol() {
		return txtArriveVol;
	}

	public void setTxtArriveVol(String txtArriveVol) {
		this.txtArriveVol = txtArriveVol;
	}

	public String getTxtArriveTime() {
		return txtArriveTime;
	}

	public void setTxtArriveTime(String txtArriveTime) {
		this.txtArriveTime = txtArriveTime;
	}

	public String getTxtDepartVol() {
		return txtDepartVol;
	}

	public void setTxtDepartVol(String txtDepartVol) {
		this.txtDepartVol = txtDepartVol;
	}

	public String getTxtDepartTime() {
		return txtDepartTime;
	}

	public void setTxtDepartTime(String txtDepartTime) {
		this.txtDepartTime = txtDepartTime;
	}

	public boolean getChkVisaLetterRequest() {
		return chkVisaLetterRequest;
	}

	public void setChkVisaLetterRequest(boolean chkVisaLetterRequest) {
		this.chkVisaLetterRequest = chkVisaLetterRequest;
	}

	public boolean getOptMoneyDepositYes() {
		return optMoneyDepositYes;
	}

	public void setOptMoneyDepositYes(boolean optMoneyDepositYes) {
		this.optMoneyDepositYes = optMoneyDepositYes;
	}

	public boolean getOptMoneyDepositNo() {
		return optMoneyDepositNo;
	}

	public void setOptMoneyDepositNo(boolean optMoneyDepositNo) {
		this.optMoneyDepositNo = optMoneyDepositNo;
	}

	public String getTxtMoneyDepositAmount() {
		return txtMoneyDepositAmount;
	}

	public void setTxtMoneyDepositAmount(String txtMoneyDepositAmount) {
		this.txtMoneyDepositAmount = txtMoneyDepositAmount;
	}

	public boolean getChkMealPackage() {
		return chkMealPackage;
	}

	public void setChkMealPackage(boolean chkMealPackage) {
		this.chkMealPackage = chkMealPackage;
	}

	public boolean getChkActivitiesPackage() {
		return chkActivitiesPackage;
	}

	public void setChkActivitiesPackage(boolean chkActivitiesPackage) {
		this.chkActivitiesPackage = chkActivitiesPackage;
	}

	public boolean isOptHealthProblemYes() {
		return optHealthProblemYes;
	}

	public void setOptHealthProblemYes(boolean optHealthProblemYes) {
		this.optHealthProblemYes = optHealthProblemYes;
	}

	public boolean isOptHealProblemNo() {
		return optHealProblemNo;
	}

	public void setOptHealProblemNo(boolean optHealProblemNo) {
		this.optHealProblemNo = optHealProblemNo;
	}

	public String getTxtHealthProblem() {
		return txtHealthProblem;
	}

	public void setTxtHealthProblem(String txtHealthProblem) {
		this.txtHealthProblem = txtHealthProblem;
	}

	public boolean isOptAllergyYes() {
		return optAllergyYes;
	}

	public void setOptAllergyYes(boolean optAllergyYes) {
		this.optAllergyYes = optAllergyYes;
	}

	public boolean isOptAllergyNo() {
		return optAllergyNo;
	}

	public void setOptAllergyNo(boolean optAllergyNo) {
		this.optAllergyNo = optAllergyNo;
	}

	public String getTxtAllergy() {
		return txtAllergy;
	}

	public void setTxtAllergy(String txtAllergy) {
		this.txtAllergy = txtAllergy;
	}

	public boolean isOptMedicalYes() {
		return optMedicalYes;
	}

	public void setOptMedicalYes(boolean optMedicalYes) {
		this.optMedicalYes = optMedicalYes;
	}

	public boolean isOptMedicalNo() {
		return optMedicalNo;
	}

	public void setOptMedicalNo(boolean optMedicalNo) {
		this.optMedicalNo = optMedicalNo;
	}

	public String getTxtMedical() {
		return txtMedical;
	}

	public void setTxtMedical(String txtMedical) {
		this.txtMedical = txtMedical;
	}

	public String getTxtOther() {
		return txtOther;
	}

	public void setTxtOther(String txtOther) {
		this.txtOther = txtOther;
	}

	public boolean isChkConditionAgreement() {
		return chkConditionAgreement;
	}

	public void setChkConditionAgreement(boolean chkConditionAgreement) {
		this.chkConditionAgreement = chkConditionAgreement;
	}

	public String getTxtDatePlace() {
		return txtDatePlace;
	}

	public void setTxtDatePlace(String txtDatePlace) {
		this.txtDatePlace = txtDatePlace;
	}

	public String getTxtFullName() {
		return txtFullName;
	}

	public void setTxtFullName(String txtFullName) {
		this.txtFullName = txtFullName;
	}

	public boolean isOptPaypal() {
		return optPaypal;
	}

	public void setOptPaypal(boolean optPaypal) {
		this.optPaypal = optPaypal;
	}

	public boolean isOptPayDirect() {
		return optPayDirect;
	}

	public void setOptPayDirect(boolean optPayDirect) {
		this.optPayDirect = optPayDirect;
	}

	public boolean isOptBankTransfer() {
		return optBankTransfer;
	}

	public void setOptBankTransfer(boolean optBankTransfer) {
		this.optBankTransfer = optBankTransfer;
	}

	public boolean isOptDirectCash() {
		return optDirectCash;
	}

	public void setOptDirectCash(boolean optDirectCash) {
		this.optDirectCash = optDirectCash;
	}

	public boolean isOptDirectCard() {
		return optDirectCard;
	}

	public void setOptDirectCard(boolean optDirectCard) {
		this.optDirectCard = optDirectCard;
	}
}
