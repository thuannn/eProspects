package com.lemania.eprospects.shared;

import com.google.web.bindery.requestfactory.shared.EntityProxy;
import com.google.web.bindery.requestfactory.shared.ProxyFor;
import com.lemania.eprospects.server.Cours;
import com.lemania.eprospects.server.ObjectifyLocator;

@ProxyFor(value=Cours.class, locator=ObjectifyLocator.class)
public interface CoursProxy extends EntityProxy {
	//
	Long getId();
	
	public String getSchoolName();
	public void setSchoolName(String schoolName);
	
	public String getCoursNom();	
	public void setCoursNom(String coursNom);
	
	public Boolean getCoursActif();	
	public void setCoursActif(Boolean coursActif);
}
