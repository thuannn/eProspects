package com.lemania.eprospects.server.applicationitem;

import com.googlecode.objectify.Key;
import com.lemania.eprospects.server.DatastoreObject;
import com.lemania.eprospects.server.applicationform.ApplicationForm;

public class ApplicationItem extends DatastoreObject{
	//
	Key<ApplicationForm> app;
	//
	String itemCode;
	String itemDescription;
	Double itemAmount;

	//
	public Key<ApplicationForm> getApp() {
		return app;
	}
	
	public void setApp(Key<ApplicationForm> app) {
		this.app = app;
	}
	
	public String getItemDescription() {
		return itemDescription;
	}
	
	public void setItemDescription(String itemDescription) {
		this.itemDescription = itemDescription;
	}
	
	public Double getItemAmount() {
		return itemAmount;
	}
	
	public void setItemAmount(Double itemAmount) {
		this.itemAmount = itemAmount;
	}

	public String getItemCode() {
		return itemCode;
	}

	public void setItemCode(String itemCode) {
		this.itemCode = itemCode;
	}
}
