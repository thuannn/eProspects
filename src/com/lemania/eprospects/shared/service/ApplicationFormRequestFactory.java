package com.lemania.eprospects.shared.service;

import java.util.List;

import com.google.web.bindery.requestfactory.shared.Request;
import com.google.web.bindery.requestfactory.shared.RequestContext;
import com.google.web.bindery.requestfactory.shared.RequestFactory;
import com.google.web.bindery.requestfactory.shared.Service;
import com.lemania.eprospects.server.service.ApplicationFormDao;
import com.lemania.eprospects.server.service.DaoServiceLocator;
import com.lemania.eprospects.shared.ApplicationFormProxy;

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
				boolean optKeyDepositUSD );
		//
		Request<Void> initialize();
	}
	
	ApplicationFormRequestContext applicationFormRequest();

}
