package com.lemania.eprospects.shared.service;

import java.util.List;

import com.google.web.bindery.requestfactory.shared.Request;
import com.google.web.bindery.requestfactory.shared.RequestContext;
import com.google.web.bindery.requestfactory.shared.RequestFactory;
import com.google.web.bindery.requestfactory.shared.Service;
import com.lemania.eprospects.server.service.ClasseDao;
import com.lemania.eprospects.server.service.DaoServiceLocator;
import com.lemania.eprospects.shared.ClasseProxy;

public interface ClasseRequestFactory extends RequestFactory {
	@Service(value=ClasseDao.class, locator=DaoServiceLocator.class)
	interface ClasseRequestContext extends RequestContext {
		Request<List<ClasseProxy>> listAll();
		Request<List<ClasseProxy>> listAllActive();
		
		Request<List<ClasseProxy>> listAll(String coursId);		
		Request<List<ClasseProxy>> listAllActive(String coursId);
		
		Request<Void> save(ClasseProxy cours);
		Request<Void> save(ClasseProxy cours, String ecoleId);
		
		Request<ClasseProxy> saveAndReturn(ClasseProxy newClasse);
		Request<Void> removeClasse(ClasseProxy classe);
		
		Request<Void> initialize();
	}
	
	ClasseRequestContext classeRequest();
}
