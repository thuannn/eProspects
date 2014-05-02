package com.lemania.eprospects.shared.service;

import java.util.List;

import com.google.web.bindery.requestfactory.shared.Request;
import com.google.web.bindery.requestfactory.shared.RequestContext;
import com.google.web.bindery.requestfactory.shared.RequestFactory;
import com.google.web.bindery.requestfactory.shared.Service;
import com.lemania.eprospects.server.service.DaoServiceLocator;
import com.lemania.eprospects.server.service.SubjectDao;
import com.lemania.eprospects.shared.BulletinProxy;
import com.lemania.eprospects.shared.SubjectProxy;

public interface SubjectRequestFactory extends RequestFactory {
	@Service(value=SubjectDao.class, locator=DaoServiceLocator.class)
	interface SubjectRequestContext extends RequestContext {
	//
		//
		Request<List<SubjectProxy>> listAll();
		Request<List<SubjectProxy>> listAllActive();
		Request<List<SubjectProxy>> listAllActiveByProfile(BulletinProxy bulletin);
		
		Request<Void> save( SubjectProxy subject );
		Request<SubjectProxy> saveAndReturn( SubjectProxy subject );
		
		Request<Void> removeSubject( SubjectProxy subject );
		
		Request<Void> initialize();
		//
	}
	
	SubjectRequestContext subjectRequest();
	//

}
