package com.lemania.eprospects.server.itemprice;

import com.lemania.eprospects.server.DatastoreObject;


public class ItemPrice extends DatastoreObject {
	//
	String itemDescription;
	Double itemPrice;
	
	public String getItemDescription() {
		return itemDescription;
	}
	
	public void setItemDescription(String itemDescription) {
		this.itemDescription = itemDescription;
	}
	
	public Double getItemPrice() {
		return itemPrice;
	}
	
	public void setItemPrice(Double itemPrice) {
		this.itemPrice = itemPrice;
	}
}
