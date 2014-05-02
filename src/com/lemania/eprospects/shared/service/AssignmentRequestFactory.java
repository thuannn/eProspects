package com.lemania.eprospects.shared.service;

import java.util.List;

import com.google.web.bindery.requestfactory.shared.Request;
import com.google.web.bindery.requestfactory.shared.RequestContext;
import com.google.web.bindery.requestfactory.shared.RequestFactory;
import com.google.web.bindery.requestfactory.shared.Service;
import com.lemania.eprospects.server.service.AssignmentDao;
import com.lemania.eprospects.server.service.DaoServiceLocator;
import com.lemania.eprospects.shared.AssignmentProxy;
import com.lemania.eprospects.shared.ProfessorProxy;

public interface AssignmentRequestFactory extends RequestFactory {
	
	@Service(value=AssignmentDao.class, locator=DaoServiceLocator.class)
	interface AssignmentRequestContext extends RequestContext {
		//
		Request<List<AssignmentProxy>> listAll();		
		Request<List<AssignmentProxy>> listAll(String profId);
		Request<List<AssignmentProxy>> listAllActive();
		Request<List<AssignmentProxy>> listAllActive(String profId);
		
		Request<List<ProfessorProxy>> listAllProfessorBySubject(String subjectId);
		Request<List<ProfessorProxy>> listAllProfessorBySubject(String subjectId, String classId);
		
		Request<Void> save(AssignmentProxy a);
		Request<AssignmentProxy> saveAndReturn(AssignmentProxy a);
		Request<AssignmentProxy> saveAndReturn(String profId, String classId, String subjectId, Boolean isActive);
		
		Request<AssignmentProxy> updateAssignmentStatus(Long userId, AssignmentProxy assignment, Boolean status);
		
		Request<Void> removeAssignment(AssignmentProxy a);
		Request<Void> initialize();
	}
	
	AssignmentRequestContext assignmentRequest();
}
