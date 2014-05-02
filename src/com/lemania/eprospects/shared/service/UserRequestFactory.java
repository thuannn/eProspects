package com.lemania.eprospects.shared.service;

import java.util.List;

import com.google.web.bindery.requestfactory.shared.Request;
import com.google.web.bindery.requestfactory.shared.RequestContext;
import com.google.web.bindery.requestfactory.shared.RequestFactory;
import com.google.web.bindery.requestfactory.shared.Service;
import com.lemania.eprospects.server.service.DaoServiceLocator;
import com.lemania.eprospects.server.service.UserDao;
import com.lemania.eprospects.shared.UserProxy;

public interface UserRequestFactory extends RequestFactory {
	
	@Service(value=UserDao.class, locator=DaoServiceLocator.class)
	interface UserRequestContext extends RequestContext {
		
		Request<List<UserProxy>> listAll();
		Request<List<UserProxy>> listAllByType(String type);
		Request<List<UserProxy>> listAllActive();
		
		Request<Void> save(UserProxy user);
		Request<UserProxy> saveAndReturn(UserProxy newUser);
		
		Request<Void> removeUser(UserProxy user);
		
		Request<UserProxy> authenticateUser(String userName, String password);
		Request<UserProxy> changePassword(String userName, String password, String newPassword);
		
		Request<Void> updateUserActiveStatus(String userEmail, Boolean userStatus);
		
		Request<Void> initialize();
		
		Request<Void> fixStudentName();
		
		Request<Boolean> checkClassMasterRole(String userId, String profId);
	}
	
	UserRequestContext userRequest();
}
