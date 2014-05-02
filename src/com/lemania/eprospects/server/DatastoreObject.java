package com.lemania.eprospects.server;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.persistence.Id;
import javax.persistence.PrePersist;

public class DatastoreObject {
	//
	@Id private Long id;
	private Integer version = 0;
	private String createDate = "";
	private String modifyDate = "";
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}	
	
	public Integer getVersion() {
		return version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@PrePersist
	void onPersist(){
		this.version++ ;
		
		DateFormat dateFormat = new SimpleDateFormat("dd.MM.yyyy HH:mm");
		Date date = new Date();
		if (this.createDate == "")
			this.createDate = dateFormat.format(date);
		this.modifyDate = dateFormat.format(date);
	}

	public String getCreateDate() {
		return createDate;
	}

	public void setCreateDate(String createDate) {
		this.createDate = createDate;
	}

	public String getModifyDate() {
		return modifyDate;
	}

	public void setModifyDate(String modifyDate) {
		this.modifyDate = modifyDate;
	}
}
