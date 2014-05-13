package com.lemania.eprospects.shared.applicationitem;

import java.util.List;

import com.google.web.bindery.requestfactory.shared.Request;
import com.google.web.bindery.requestfactory.shared.RequestContext;
import com.google.web.bindery.requestfactory.shared.RequestFactory;
import com.google.web.bindery.requestfactory.shared.Service;
import com.lemania.eprospects.server.applicationitem.ApplicationItemDao;
import com.lemania.eprospects.server.service.DaoServiceLocator;

public interface ApplicationItemRequestFactory extends RequestFactory {
	
	@Service(value=ApplicationItemDao.class, locator=DaoServiceLocator.class)
	interface ApplicationItemRequestContext extends RequestContext {
		//
		Request<Void> save(ApplicationItemProxy ai);
		Request<List<ApplicationItemProxy>> listAll();
		Request<ApplicationItemProxy> saveAndReturn(ApplicationItemProxy app);
		//
		Request<List<ApplicationItemProxy>> listAll( String email, String appId );
		Request<ApplicationItemProxy> saveAndReturn(String emailAddress, String appId, String itemCode, String itemDesc, Double itemAmount);
		//
	}

	ApplicationItemRequestContext applicationItemRequest();
}
