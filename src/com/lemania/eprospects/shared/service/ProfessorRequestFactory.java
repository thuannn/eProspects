package com.lemania.eprospects.shared.service;

import java.util.List;

import com.google.web.bindery.requestfactory.shared.Request;
import com.google.web.bindery.requestfactory.shared.RequestContext;
import com.google.web.bindery.requestfactory.shared.RequestFactory;
import com.google.web.bindery.requestfactory.shared.Service;
import com.lemania.eprospects.server.service.DaoServiceLocator;
import com.lemania.eprospects.server.service.ProfessorDao;
import com.lemania.eprospects.shared.ProfessorProxy;

public interface ProfessorRequestFactory extends RequestFactory {
	
	@Service(value=ProfessorDao.class, locator=DaoServiceLocator.class)
	interface ProfessorRequestContext extends RequestContext {
		
		Request<List<ProfessorProxy>> listAll();
		
		Request<List<ProfessorProxy>> getByEmail(String email);
		
		Request<Void> save(ProfessorProxy prof);
		
		Request<ProfessorProxy> saveAndReturn(ProfessorProxy newProf);
		
		Request<Void> removeProfessor(ProfessorProxy prof);
		
		Request<Void> initialize();
	}
	
	ProfessorRequestContext professorRequest();

}