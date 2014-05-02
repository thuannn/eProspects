package com.lemania.eprospects.shared;

import com.google.web.bindery.requestfactory.shared.EntityProxy;
import com.google.web.bindery.requestfactory.shared.ProxyFor;
import com.lemania.eprospects.server.ObjectifyLocator;
import com.lemania.eprospects.server.Profile;

@ProxyFor(value=Profile.class, locator=ObjectifyLocator.class)
public interface ProfileProxy extends EntityProxy {
	//
	Long getId();
	
	public String getProfileName();
	public void setProfileName(String profileName);

	public Boolean getIsActive();
	public void setIsActive(Boolean isActive);
}
