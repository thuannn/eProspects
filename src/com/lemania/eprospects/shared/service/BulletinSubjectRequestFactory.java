package com.lemania.eprospects.shared.service;

import java.util.List;

import com.google.web.bindery.requestfactory.shared.Request;
import com.google.web.bindery.requestfactory.shared.RequestContext;
import com.google.web.bindery.requestfactory.shared.RequestFactory;
import com.google.web.bindery.requestfactory.shared.Service;
import com.lemania.eprospects.server.service.BulletinSubjectDao;
import com.lemania.eprospects.server.service.DaoServiceLocator;
import com.lemania.eprospects.shared.BulletinSubjectProxy;

public interface BulletinSubjectRequestFactory extends RequestFactory {
	//
	@Service(value=BulletinSubjectDao.class, locator=DaoServiceLocator.class)
	interface BulletinSubjectRequestContext extends RequestContext {
		//
		Request<List<BulletinSubjectProxy>> listAll();		
		Request<List<BulletinSubjectProxy>> listAll( String bulletinId );	
		//
		Request<List<BulletinSubjectProxy>> listAllActive();		
		//
		Request<List<BulletinSubjectProxy>> listAllByAssignment(String assignmentId);
		//
		Request<Void> save(BulletinSubjectProxy profile);
		Request<BulletinSubjectProxy> saveAndReturn(BulletinSubjectProxy newBulletinSubject);
		Request<BulletinSubjectProxy> saveAndReturn(String bulletinId, String subjectId, String professorId, String subjectCoef );
		//
		Request<Boolean> removeProfileSubject(BulletinSubjectProxy bulletinSubject);
		//
		Request<Void> initialize();
		//
		Request<BulletinSubjectProxy> calculateTotalBrancheCoef( String bulletinSubjectId );
		//
	}
	
	BulletinSubjectRequestContext bulletinSubjectRequest();
}
