package com.lemania.eprospects.server.applicationitem;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Index;
import com.lemania.eprospects.server.DatastoreObject;
import com.lemania.eprospects.server.applicationform.ApplicationForm;

@Entity
@Index
public class ApplicationItem extends DatastoreObject implements Comparable<ApplicationItem> {
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

	@Override
	public int compareTo(ApplicationItem o) {
		//
		return itemCode.compareTo( o.getItemCode() );
	}
}
