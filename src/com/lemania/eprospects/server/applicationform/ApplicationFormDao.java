package com.lemania.eprospects.server.applicationform;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.Query;
import com.lemania.eprospects.server.service.MyDAOBase;

public class ApplicationFormDao extends MyDAOBase {
	//
	public void initialize(){
		return;
	}
	
	
	/*
	 * */
	public void save(ApplicationForm a){
		this.ofy().put(a);
	}
	
	
	/*
	 * */
	public List<ApplicationForm> listAll(){
		Query<ApplicationForm> q = this.ofy().query(ApplicationForm.class);
		List<ApplicationForm> returnList = new ArrayList<ApplicationForm>();
		for (ApplicationForm a : q){
			returnList.add(a);
		}
		return returnList;
	}
	
	/*
	 * */
	public ApplicationForm saveAndReturn(ApplicationForm app){
		Key<ApplicationForm> key = this.ofy().put(app);
		try {
			return this.ofy().get(key);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	/*
	 * */
	public ApplicationForm saveAndReturn(String emailAddress){
		//
		ApplicationForm app = new ApplicationForm();
		app.setEmailAddress(emailAddress);
		//
		Calendar cal = Calendar.getInstance();
		app.setApplicationID( "LM" 
				+ Integer.toString( cal.get(Calendar.YEAR) + cal.get(Calendar.MONTH) + cal.get(Calendar.DAY_OF_MONTH))
				+ Integer.toString( cal.get(Calendar.HOUR_OF_DAY) + cal.get(Calendar.MINUTE) ) );
		//
		try {
			this.ofy().put(app);
			return app;
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	
	/*
	 * */
	public boolean saveStep1( String emailAddress, String appId,
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
			){
		Query<ApplicationForm> q = this.ofy().query(ApplicationForm.class)
				.filter( "applicationID", appId )
				.filter( "emailAddress", emailAddress );
		ApplicationForm app;
		if (q.count()>0) {
			//
			app = q.list().get(0);
			app.setGenderCode(genderCode);
			app.setLastName_Student(lastName_Student);
			app.setFirstName_Student(firstName_Student);
			app.setDOB_Student(DOB_Student);
			app.setNationality_Student(nationality_Student);
			app.setAddress_Student(address_Student);
			app.setCity_Student(city_Student);
			app.setCountry_Student(country_Student);
			app.setEmail_Student(email_Student);
			app.setMobilePhone_Student(mobilePhone_Student);
			app.setLastName_Parents(lastName_Parents);
			app.setFirstName_Parents(firstName_Parents);
			app.setAddress_Parents(address_Parents);
			app.setCity_Parents(city_Parents);
			app.setCountry_Parents(country_Parents);
			app.setMobilePhone_Mother(mobilePhone_Mother);
			app.setMobilePhone_Father(mobilePhone_Father);
			app.setHomePhone_Parents(homePhone_Parents);
			app.setWorkPhone_Parents(workPhone_Parents);
			app.setFax_Parents(fax_Parents);
			app.setEmail_Parents(email_Parents);
			app.setCompanyName_Invoice(companyName_Invoice);
			app.setFullName_Invoice(fullName_Invoice);
			app.setAddress_Invoice(address_Invoice);
			app.setCity_Invoice(city_Invoice);
			app.setCountry_Invoice(country_Invoice);
			//
			try {
				this.ofy().put(app);
				return true;
			} catch (Exception e) {
				throw new RuntimeException(e);
			}
		}
		else
			return false;
	}
	
	
	/*
	 * */
	public boolean saveStep2 ( String emailAddress, String appId,
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
			boolean optKeyDepositUSD ){
		//
		Query<ApplicationForm> q = this.ofy().query(ApplicationForm.class)
				.filter( "applicationID", appId )
				.filter( "emailAddress", emailAddress );
		ApplicationForm app;
		if (q.count()>0) {
			//
			app = q.list().get(0);
			app.setChkApplicaitonFee(chkApplicaitonFee); 
			app.setChkPackAssurance(chkPackAssurance);
			app.setProgrammesCode(programmesCode);
			app.setCourseCode(courseCode);
			app.setStartDate(startDate);
			app.setWeekNumber(weekNumber);
			app.setTxtJulyWeek(txtJulyWeek);
			app.setTxtAugustWeek(txtAugustWeek);
			app.setChkContinueAfter(chkContinueAfter);
			app.setOptConfortPlusPrivate(optConfortPlusPrivate);
			app.setOptConfortPrivate(optConfortPrivate);
			app.setOptStandardPrivate(optStandardPrivate);
			app.setOptConfortPlusShare(optConfortPlusShare);
			app.setOptConfortShare(optConfortShare);
			app.setOptStandardShare(optStandardShare);
			app.setOptKeyDepositCHF(optKeyDepositCHF);
			app.setOptKeyDepositEuro(optKeyDepositEuro);
			app.setOptKeyDepositUSD(optKeyDepositUSD);
 			//
			try {
				this.ofy().put(app);
				return true;
			} catch (Exception e) {
				throw new RuntimeException(e);
			}
		}
		else
			return false;
	}
	
	

	/*
	 * */
	public boolean saveStep3 ( String emailAddress, String appId,
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
			boolean chkActivitiesPackage ){
		//
		Query<ApplicationForm> q = this.ofy().query(ApplicationForm.class)
				.filter( "applicationID", appId )
				.filter( "emailAddress", emailAddress );
		ApplicationForm app;
		if (q.count()>0) {
			//
			app = q.list().get(0);
			app.setLstAirportDirection(lstAirportDirection);
			app.setOptPrivateCourse(optPrivateCourse);
			app.setTxtPrivateCoursePeriod(txtPrivateCoursePeriod);
			app.setChkGeneveOneway(chkGeneveOneway);
			app.setChkZurichOneway(chkZurichOneway);
			app.setChkGeneveRoundtrip(chkGeneveRoundtrip);
			app.setChkZurichRoundtrip(chkZurichRoundtrip);
			app.setTxtAirlineName(txtAirlineName);
			app.setTxtArriveVol(txtArriveVol);
			app.setTxtArriveTime(txtArriveTime);
			app.setTxtDepartVol(txtDepartVol);
			app.setTxtDepartTime(txtDepartTime);
			app.setChkVisaLetterRequest(chkVisaLetterRequest);
			app.setOptMoneyDepositYes(optMoneyDepositYes);
			app.setOptMoneyDepositNo(optMoneyDepositNo);
			app.setTxtMoneyDepositAmount(txtMoneyDepositAmount);
			app.setChkMealPackage(chkMealPackage);
			app.setChkActivitiesPackage(chkActivitiesPackage);
 			//
			try {
				this.ofy().put(app);
				return true;
			} catch (Exception e) {
				throw new RuntimeException(e);
			}
		}
		else
			return false;
	}

	
	
	/*
	 * */
	public boolean saveStep4 ( String emailAddress, String appId,
			boolean optHealthProblemYes,
			boolean optHealProblemNo,
			String 	txtHealthProblem,
			boolean optAllergyYes,
			boolean optAllergyNo,
			String 	txtAllergy,
			boolean optMedicalYes,
			boolean optMedicalNo,
			String 	txtMedical,
			String 	txtOther ){
		//
		Query<ApplicationForm> q = this.ofy().query(ApplicationForm.class)
				.filter( "applicationID", appId )
				.filter( "emailAddress", emailAddress );
		ApplicationForm app;
		if (q.count()>0) {
			//
			app = q.list().get(0);
			app.setOptHealthProblemYes(optHealthProblemYes);
			app.setOptHealProblemNo(optHealProblemNo);
			app.setTxtHealthProblem(txtHealthProblem);
			app.setOptAllergyYes(optAllergyYes);
			app.setOptAllergyNo(optAllergyNo);
			app.setTxtAllergy(txtAllergy);
			app.setOptMedicalYes(optMedicalYes);
			app.setOptMedicalNo(optMedicalNo);
			app.setTxtMedical(txtMedical);
			app.setTxtOther(txtOther);
 			//
			try {
				this.ofy().put(app);
				return true;
			} catch (Exception e) {
				throw new RuntimeException(e);
			}
		}
		else
			return false;
	}
	
	
	
	/*
	 * */
	public boolean saveStep5 ( String emailAddress, String appId,
			boolean chkConditionAgreement,
			String txtDatePlace,
			String txtFullName ){
		//
		Query<ApplicationForm> q = this.ofy().query(ApplicationForm.class)
				.filter( "applicationID", appId )
				.filter( "emailAddress", emailAddress );
		ApplicationForm app;
		if (q.count()>0) {
			//
			app = q.list().get(0);
			app.setChkConditionAgreement(chkConditionAgreement);
			app.setTxtDatePlace(txtDatePlace);
			app.setTxtFullName(txtFullName);
 			//
			try {
				this.ofy().put(app);
				return true;
			} catch (Exception e) {
				throw new RuntimeException(e);
			}
		}
		else
			return false;
	}
	
	
	
	/*
	 * */
	public boolean savePaymentStep ( String emailAddress, String appId,
			boolean optPaypal,
			boolean optPayDirect,
			boolean optBankTransfer,
			boolean optDirectCash,
			boolean optDirectCard ){
		//
		Query<ApplicationForm> q = this.ofy().query(ApplicationForm.class)
				.filter( "applicationID", appId )
				.filter( "emailAddress", emailAddress );
		ApplicationForm app;
		if (q.count()>0) {
			//
			app = q.list().get(0);
			app.setOptPaypal(optPaypal);
			app.setOptPayDirect(optPayDirect);
			app.setOptBankTransfer(optBankTransfer);
			app.setOptDirectCard(optDirectCard);
			app.setOptDirectCash(optDirectCash);
 			//
			try {
				this.ofy().put(app);
				return true;
			} catch (Exception e) {
				throw new RuntimeException(e);
			}
		}
		else
			return false;
	}
	
	
	
	/*
	 * */
	public boolean checkExistence(String emailAddress){
		Query<ApplicationForm> q = this.ofy().query(ApplicationForm.class)
				.filter("emailAddress", emailAddress);
		if (q.count()>0)
			return true;
		else
			return false;
	}
	
	
	
	/*
	 * */
	public ApplicationForm loadAndReturn( String emailAddress, String appId ){
		Query<ApplicationForm> q = this.ofy().query(ApplicationForm.class)
				.filter( "applicationID", appId )
				.filter( "emailAddress", emailAddress );
		if (q.count()>0)
			return q.list().get(0);
		else
			return null;
	}
}
