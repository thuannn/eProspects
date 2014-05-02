package com.lemania.eprospects.server;

import com.googlecode.objectify.annotation.Entity;

@Entity
public class SettingOption extends DatastoreObject {
	//
	private String optionName;
	private String optionValue;
	
	public String getOptionName() {
		return optionName;
	}
	
	public void setOptionName(String optionName) {
		this.optionName = optionName;
	}
	
	public String getOptionValue() {
		return optionValue;
	}
	
	public void setOptionValue(String optionValue) {
		this.optionValue = optionValue;
	}
}
