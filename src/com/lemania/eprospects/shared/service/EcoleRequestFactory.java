package com.lemania.eprospects.shared.service;

import java.util.List;

import com.google.web.bindery.requestfactory.shared.Request;
import com.google.web.bindery.requestfactory.shared.RequestContext;
import com.google.web.bindery.requestfactory.shared.RequestFactory;
import com.google.web.bindery.requestfactory.shared.Service;
import com.lemania.eprospects.server.service.DaoServiceLocator;
import com.lemania.eprospects.server.service.EcoleDao;
import com.lemania.eprospects.shared.EcoleProxy;

public interface EcoleRequestFactory extends RequestFactory {
	
	@Service(value=EcoleDao.class, locator=DaoServiceLocator.class)
	interface EcoleRequestContext extends RequestContext {
		//
		Request<List<EcoleProxy>> listAll();
		Request<List<EcoleProxy>> listAllActive();
		
		Request<Void> save(EcoleProxy ecole);
		Request<EcoleProxy> saveAndReturn(EcoleProxy newEcole);
		
		Request<Void> removeEcole(EcoleProxy ecole);
		
		Request<Void> initialize();
	}
	
	EcoleRequestContext ecoleRequest();
}
