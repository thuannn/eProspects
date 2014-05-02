package com.lemania.eprospects.shared.service;

import java.util.List;

import com.google.web.bindery.requestfactory.shared.Request;
import com.google.web.bindery.requestfactory.shared.RequestContext;
import com.google.web.bindery.requestfactory.shared.RequestFactory;
import com.google.web.bindery.requestfactory.shared.Service;
import com.lemania.eprospects.server.service.DaoServiceLocator;
import com.lemania.eprospects.server.service.SettingOptionDao;
import com.lemania.eprospects.shared.SettingOptionProxy;

public interface SettingOptionRequestFactory extends RequestFactory {
	@Service(value=SettingOptionDao.class, locator=DaoServiceLocator.class)
	interface SettingOptionRequestContext extends RequestContext {
		
		Request<List<SettingOptionProxy>> listAll();
		
		Request<Void> save(String optionName, String optionValue);
	
		Request<SettingOptionProxy> saveAndReturn(SettingOptionProxy newHour);
		
		Request<Void> removeSettingOption(SettingOptionProxy type);
		
		Request<Void> initialize();
	}
	
	SettingOptionRequestContext settingOptionRequest();
}