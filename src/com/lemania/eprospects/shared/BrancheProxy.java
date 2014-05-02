package com.lemania.eprospects.shared;

import com.google.web.bindery.requestfactory.shared.EntityProxy;
import com.google.web.bindery.requestfactory.shared.ProxyFor;
import com.lemania.eprospects.server.Branche;
import com.lemania.eprospects.server.ObjectifyLocator;

@ProxyFor(value=Branche.class, locator=ObjectifyLocator.class)
public interface BrancheProxy extends EntityProxy {
	Long getId();
	
	public String getBrancheName();
	public void setBrancheName(String brancheName);
	
	public Double getDefaultCoef();
	public void setDefaultCoef(Double defaultCoef);
	
	public Boolean getIsActive();
	public void setIsActive(Boolean isActive);
}
