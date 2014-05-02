package com.lemania.eprospects.shared.service;

import java.util.List;

import com.google.web.bindery.requestfactory.shared.Request;
import com.google.web.bindery.requestfactory.shared.RequestContext;
import com.google.web.bindery.requestfactory.shared.RequestFactory;
import com.google.web.bindery.requestfactory.shared.Service;
import com.lemania.eprospects.server.service.DaoServiceLocator;
import com.lemania.eprospects.server.service.StudentDao;
import com.lemania.eprospects.shared.StudentProxy;

public interface StudentRequestFactory extends RequestFactory {

	@Service(value=StudentDao.class, locator=DaoServiceLocator.class)
	interface StudentRequestContext extends RequestContext {
		
		Request<Void> save( StudentProxy student );
		
		Request<StudentProxy> saveAndReturn( StudentProxy newStudent );
		Request<StudentProxy> saveAndReturn( String firstName, String lastName, String email, Boolean active );
		
		Request<Void> removeStudent( StudentProxy student );
		
		Request<List<StudentProxy>> listAll();
		Request<List<StudentProxy>> listAllActive();
		Request<List<StudentProxy>> listAllActiveWithoutBulletin();
		Request<List<StudentProxy>> listByEmail(String email);
	}
	
	StudentRequestContext studentRequest();
}
