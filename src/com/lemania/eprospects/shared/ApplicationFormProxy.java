package com.lemania.eprospects.shared;

import com.google.web.bindery.requestfactory.shared.EntityProxy;
import com.google.web.bindery.requestfactory.shared.ProxyFor;
import com.lemania.eprospects.server.ApplicationForm;
import com.lemania.eprospects.server.ObjectifyLocator;

@ProxyFor(value=ApplicationForm.class, locator=ObjectifyLocator.class)
public interface ApplicationFormProxy extends EntityProxy {
	//
	Long getId();
	
	//
	public String getApplicationID();
	public void setApplicationID(String applicationID);

	public String getEmailAddress();
	public void setEmailAddress(String emailAddress);

	public String getFirstName();
	public void setFirstName(String firstName);

	public String getLastName();
	public void setLastName(String lastName);
	
	public boolean isPaid();
	public void setPaid(boolean isPaid);

	public boolean isCompleted();
	public void setCompleted(boolean isCompleted);
	
	//
}
