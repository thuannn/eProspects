package com.lemania.eprospects.shared.applicationform;

import java.util.List;

import com.google.web.bindery.requestfactory.shared.Request;
import com.google.web.bindery.requestfactory.shared.RequestContext;
import com.google.web.bindery.requestfactory.shared.RequestFactory;
import com.google.web.bindery.requestfactory.shared.Service;
import com.lemania.eprospects.server.applicationform.ApplicationFormDao;
import com.lemania.eprospects.server.service.DaoServiceLocator;

public interface ApplicationFormRequestFactory extends RequestFactory {
	
	@Service(value=ApplicationFormDao.class, locator=DaoServiceLocator.class)
	interface ApplicationFormRequestContext extends RequestContext {
		//
		Request<List<ApplicationFormProxy>> listAll();		
		Request<Boolean> checkExistence(String emailAddress);
		//
		Request<ApplicationFormProxy> loadAndReturn( String emailAddress, String appId );
		Request<Void> save(ApplicationFormProxy a);
		Request<ApplicationFormProxy> saveAndReturn(ApplicationFormProxy app);
		Request<ApplicationFormProxy> saveAndReturn(String emailAddress);
		//
		Request<Boolean> saveStep1( String emailAddress, String appId,
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
		//
		Request<Boolean> saveStep2 ( String emailAddress, String appId,
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
				boolean optKeyDepositUSD,
				String languageOption);
		//
		Request<Boolean> saveStep3 ( String emailAddress, String appId,
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
		Request<Boolean> saveStep4 ( String emailAddress, String appId,
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
		Request<Boolean> saveStep5 ( String emailAddress, String appId,
				boolean chkConditionAgreement,
				String txtDatePlace,
				String txtFullName );
		//
		Request<Boolean> savePaymentStep ( String emailAddress, String appId,
				boolean optPaypal,
				boolean optPayDirect,
				boolean optBankTransfer,
				boolean optDirectCash,
				boolean optDirectCard );
		//
		Request<Void> initialize();
	}
	
	ApplicationFormRequestContext applicationFormRequest();

}
