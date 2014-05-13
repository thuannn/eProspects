package com.lemania.eprospects.shared.applicationitem;

import com.google.web.bindery.requestfactory.shared.EntityProxy;
import com.google.web.bindery.requestfactory.shared.ProxyFor;
import com.lemania.eprospects.server.ObjectifyLocator;
import com.lemania.eprospects.server.applicationitem.ApplicationItem;

@ProxyFor(value=ApplicationItem.class, locator=ObjectifyLocator.class)
public interface ApplicationItemProxy extends EntityProxy {
	//
	Long getId();
	//
	public String getItemDescription();
	public void setItemDescription(String itemDescription);
	
	public Double getItemAmount();
	public void setItemAmount(Double itemAmount);
	
	public String getItemCode();
	public void setItemCode(String itemCode);
}
