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
		Request<Void> save(ApplicationFormProxy a);
		Request<ApplicationFormProxy> saveAndReturn(ApplicationFormProxy app);
		Request<ApplicationFormProxy> saveAndReturn(String emailAddress);
		//
		Request<Void> initialize();
	}
	
	ApplicationFormRequestContext applicationFormRequest();

}
