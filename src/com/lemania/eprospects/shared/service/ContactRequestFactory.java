package com.lemania.eprospects.shared.service;

import com.google.web.bindery.requestfactory.shared.Request;
import com.google.web.bindery.requestfactory.shared.RequestContext;
import com.google.web.bindery.requestfactory.shared.RequestFactory;
import com.google.web.bindery.requestfactory.shared.Service;
import com.lemania.eprospects.server.service.ContactDao;
import com.lemania.eprospects.server.service.DaoServiceLocator;

public interface ContactRequestFactory extends RequestFactory {
	@Service(value=ContactDao.class, locator=DaoServiceLocator.class)
	interface ContactRequestContext extends RequestContext {
		Request<Void> sendEmail( String lastName, String firstName, String email, String message );
	}
	
	ContactRequestContext contactRequest();
}
