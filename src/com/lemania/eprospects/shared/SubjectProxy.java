package com.lemania.eprospects.shared;

import com.google.web.bindery.requestfactory.shared.EntityProxy;
import com.google.web.bindery.requestfactory.shared.ProxyFor;
import com.lemania.eprospects.server.ObjectifyLocator;
import com.lemania.eprospects.server.Subject;

@ProxyFor(value=Subject.class, locator=ObjectifyLocator.class)
public interface SubjectProxy extends EntityProxy {
	Long getId();
		
	public String getSubjectName();
	public void setSubjectName(String subjectName);
	
	public Double getDefaultCoef();
	public void setDefaultCoef(Double defaultCoef);
	
	public Boolean getIsActive();
	public void setIsActive(Boolean isActive);
}