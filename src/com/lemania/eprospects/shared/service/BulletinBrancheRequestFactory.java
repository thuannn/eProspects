package com.lemania.eprospects.shared.service;

import java.util.List;

import com.google.web.bindery.requestfactory.shared.Request;
import com.google.web.bindery.requestfactory.shared.RequestContext;
import com.google.web.bindery.requestfactory.shared.RequestFactory;
import com.google.web.bindery.requestfactory.shared.Service;
import com.lemania.eprospects.server.service.BulletinBrancheDao;
import com.lemania.eprospects.server.service.DaoServiceLocator;
import com.lemania.eprospects.shared.BulletinBrancheProxy;
import com.lemania.eprospects.shared.BulletinSubjectProxy;

public interface BulletinBrancheRequestFactory extends RequestFactory {
	//
	@Service(value=BulletinBrancheDao.class, locator=DaoServiceLocator.class)
	interface BulletinBrancheRequestContext extends RequestContext {
		//
		Request<List<BulletinBrancheProxy>> listAll();
		Request<List<BulletinBrancheProxy>> listAllActive();
		
		Request<List<BulletinBrancheProxy>> listAll( String bulletinSubjectId );
		Request<List<BulletinBrancheProxy>> listAllByBulletin( String bulletinId );
		Request<Void> save(BulletinBrancheProxy bulletinBranche);
		
		Request<BulletinBrancheProxy> saveAndReturn(BulletinBrancheProxy branche);		
		Request<BulletinBrancheProxy> saveAndReturn(String bulletinSubjectId, String brancheId, String brancheCoef );
		
		Request<List<BulletinBrancheProxy>> addRelatedBranches( BulletinSubjectProxy bulletinSubject );
		
		Request<Void> removeBulletinBranche(BulletinBrancheProxy bulletinBranche);
		
		Request<Void> refreshBulletinBrancheNames(String oldBrancheName, String newBrancheName);
	}
	
	BulletinBrancheRequestContext bulletinBrancheRequest();
}
