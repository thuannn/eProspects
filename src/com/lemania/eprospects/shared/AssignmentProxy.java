package com.lemania.eprospects.shared;

import com.google.web.bindery.requestfactory.shared.EntityProxy;
import com.google.web.bindery.requestfactory.shared.ProxyFor;
import com.lemania.eprospects.server.Assignment;
import com.lemania.eprospects.server.ObjectifyLocator;

@ProxyFor(value=Assignment.class, locator=ObjectifyLocator.class)
public interface AssignmentProxy extends EntityProxy {
	//
	Long getId();
	
	public String getClasseName();
	public void setClasseName(String classeName);
	
	public String getProgrammeName();
	public void setProgrammeName(String programmeName);
	
	public String getCourseName();	
	public void setCourseName(String classeeName);
	
	public String getSubjectName();	
	public void setSubjectName(String subjectName);
	
	public String getSchoolName();	
	public void setSchoolName(String schoolName);
	
	public Boolean getActive();	
	public void setActive(Boolean active);
}
