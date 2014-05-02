package com.lemania.eprospects.shared;

import com.google.web.bindery.requestfactory.shared.EntityProxy;
import com.google.web.bindery.requestfactory.shared.ProxyFor;
import com.lemania.eprospects.server.ObjectifyLocator;
import com.lemania.eprospects.server.ProfileSubject;

@ProxyFor(value=ProfileSubject.class, locator=ObjectifyLocator.class)
public interface ProfileSubjectProxy extends EntityProxy {
	//
	Long getId();

	public String getSubjectName();
	public void setSubjectName(String subjectName);
	
	public Double getSubjectCoef();
	public void setSubjectCoef(Double subjectCoef);
	
	public Double getTotalBrancheCoef();
	public void setTotalBrancheCoef(Double totalBrancheCoef);
	
	public String getProfName();
	public void setProfName(String profName);
	
	public Boolean getIsActive();
	public void setIsActive(Boolean isActive);
}
