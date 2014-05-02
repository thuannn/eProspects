package com.lemania.eprospects.shared.service;

import java.util.List;

import com.google.web.bindery.requestfactory.shared.Request;
import com.google.web.bindery.requestfactory.shared.RequestContext;
import com.google.web.bindery.requestfactory.shared.RequestFactory;
import com.google.web.bindery.requestfactory.shared.Service;
import com.lemania.eprospects.server.service.BrancheDao;
import com.lemania.eprospects.server.service.DaoServiceLocator;
import com.lemania.eprospects.shared.BrancheProxy;

public interface BrancheRequestFactory extends RequestFactory {
	
	@Service(value=BrancheDao.class, locator=DaoServiceLocator.class)
	interface BrancheRequestContext extends RequestContext {
	//
		//
		Request<List<BrancheProxy>> listAll();
		
		Request<Void> save(BrancheProxy branche);
		Request<BrancheProxy> saveAndReturn(BrancheProxy branche);
		
		Request<Void> removeBranche(BrancheProxy branche);
		
		Request<Void> initialize();
		//
	}
	
	BrancheRequestContext brancheRequest();
	//
}