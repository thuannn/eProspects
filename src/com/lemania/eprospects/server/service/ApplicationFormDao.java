package com.lemania.eprospects.server.service;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.Query;
import com.lemania.eprospects.server.ApplicationForm;

public class ApplicationFormDao extends MyDAOBase {
	//
	public void initialize(){
		return;
	}
	
	
	/*
	 * */
	public void save(ApplicationForm a){
		this.ofy().put(a);
	}
	
	
	/*
	 * */
	public List<ApplicationForm> listAll(){
		Query<ApplicationForm> q = this.ofy().query(ApplicationForm.class);
		List<ApplicationForm> returnList = new ArrayList<ApplicationForm>();
		for (ApplicationForm a : q){
			returnList.add(a);
		}
		return returnList;
	}
	
	/*
	 * */
	public ApplicationForm saveAndReturn(ApplicationForm app){
		Key<ApplicationForm> key = this.ofy().put(app);
		try {
			return this.ofy().get(key);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	/*
	 * */
	public ApplicationForm saveAndReturn(String emailAddress){
		//
		ApplicationForm app = new ApplicationForm();
		app.setEmailAddress(emailAddress);
		//
		Calendar cal = Calendar.getInstance();
		app.setApplicationID( "LM" 
				+ Integer.toString( cal.get(Calendar.YEAR) + cal.get(Calendar.MONTH) + cal.get(Calendar.DAY_OF_MONTH) + cal.get(Calendar.HOUR_OF_DAY) + cal.get(Calendar.MINUTE) ) );
		//
		try {
			this.ofy().put(app);
			return app;
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	/*
	 * */
	public boolean checkExistence(String emailAddress){
		Query<ApplicationForm> q = this.ofy().query(ApplicationForm.class)
				.filter("emailAddress", emailAddress);
		if (q.count()>0)
			return true;
		else
			return false;
	}
}
