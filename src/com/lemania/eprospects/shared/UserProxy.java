package com.lemania.eprospects.shared;

import com.google.web.bindery.requestfactory.shared.EntityProxy;
import com.google.web.bindery.requestfactory.shared.ProxyFor;
import com.lemania.eprospects.server.ObjectifyLocator;

@ProxyFor(value=com.lemania.eprospects.server.User.class, locator=ObjectifyLocator.class)
public interface UserProxy extends EntityProxy {
	
	public String getUserName();
	public void setUserName(String userName);
	
	public String getPassword();
	public void setPassword(String password);
	
	public String getFullName();
	public void setFullName(String fullName);
	
	public String getEmail();
	public void setEmail(String email);
	
	public Boolean getActive();
	public void setActive(Boolean active);
	
	public Boolean getAdmin();
	public void setAdmin(Boolean admin);
	
	public Boolean getIsProf();
	public void setIsProf(Boolean isProf);

	public Boolean getIsStudent();
	public void setIsStudent(Boolean isStudent);
	
	public Boolean getIsReadOnly();
	public void setIsReadOnly(Boolean isReadOnly);
	
	public int getCurrentYear();
	public int getCurrentMonth();
	public int getCurrentDay();
	
	public Long getId();
	
	public String getLastLoggedInTime();
	public void setLastLoggedInTime(String lastLoggedInTime);
	
	public String getCurrentLoggedInTime();
	public void setCurrentLoggedInTime(String currentLoggedInTime);
}