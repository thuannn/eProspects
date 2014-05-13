package com.lemania.eprospects.client;

public class ApplicationItem {
	//
	String itemCode = "";
	String itemDescription = "";
	Double itemAmount = 0.0;
	
	
	public ApplicationItem(String itemCode, String itemDescription,
			Double itemAmount) {
		super();
		this.itemCode = itemCode;
		this.itemDescription = itemDescription;
		this.itemAmount = itemAmount;
	}
	
	public String getItemCode() {
		return itemCode;
	}
	public void setItemCode(String itemCode) {
		this.itemCode = itemCode;
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
}
