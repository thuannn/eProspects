package com.lemania.eprospects.server.applicationitem;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.cmd.Query;
import com.lemania.eprospects.server.applicationform.ApplicationForm;
import com.lemania.eprospects.server.service.MyDAOBase;

public class ApplicationItemDao extends MyDAOBase {
	//
	public void initialize(){
		return;
	}
	
	
	/*
	 * */
	public void save(ApplicationItem ai){
		//
		ofy().save().entities(ai).now();
	}
	
	
	/*
	 * */
	public List<ApplicationItem> listAll() {
		//
		Query<ApplicationItem> q = ofy().load().type(ApplicationItem.class);
		List<ApplicationItem> returnList = new ArrayList<ApplicationItem>();
		for (ApplicationItem ai : q){
			returnList.add(ai);
		}
		Collections.sort(returnList);
		return returnList;
	}
	
	
	
	/*
	 * */
	public List<ApplicationItem> listAll( String emailAddress, String appId ){
		// check if the current application is valid
		Query<ApplicationForm> qa = ofy().load().type(ApplicationForm.class)
				.filter( "applicationID", appId )
				.filter( "emailAddress", emailAddress );
		if (qa.count()<1)
			throw new RuntimeException( new Exception("Application not found") );
		
		// check if this item is already existed
		Query<ApplicationItem> qi = ofy().load().type(ApplicationItem.class)
				.filter( "app", qa.keys() );
		//
		List<ApplicationItem> returnList = new ArrayList<ApplicationItem>();
		for (ApplicationItem ai : qi){
			returnList.add(ai);
		}
		Collections.sort(returnList);
		return returnList;
	}
	
	
	
	/*
	 * */
	public ApplicationItem saveAndReturn(ApplicationItem app) {
		//
		Key<ApplicationItem> key = ofy().save().entities(app).now().keySet().iterator().next();
		try {
			return ofy().load().key(key).now();
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	
	
	/*
	 * */
	public ApplicationItem saveAndReturn(String emailAddress, String appId, String itemCode, String itemDesc, Double itemAmount){
		// check if the current application is valid
		Query<ApplicationForm> q = ofy().load().type(ApplicationForm.class)
				.filter( "applicationID", appId )
				.filter( "emailAddress", emailAddress );
		if (q.count()<1)
			throw new RuntimeException( new Exception("Application not found") );
		
		// check if this item is already existed
		Query<ApplicationItem> qi = ofy().load().type(ApplicationItem.class)
				.filter( "app", q.keys() )
				.filter( "itemCode", itemCode );
		ApplicationItem ai;
		if (qi.count() <1) {
			ai = new ApplicationItem();
			ai.setItemCode(itemCode);
			ai.setItemDescription(itemDesc);
			ai.setItemAmount(itemAmount);
			ai.setApp( q.keys().list().get(0) );
			//
			Key<ApplicationItem> key = ofy().save().entities(ai).now().keySet().iterator().next();
			try {
				return ofy().load().key(key).now();
			} catch (Exception e) {
				throw new RuntimeException(e);
			}
		}
		else {
			ai = qi.list().get(0);
			ai.setItemDescription(itemDesc);
			ai.setItemAmount(itemAmount);
			ai.setApp( q.keys().list().get(0) );
			//
			Key<ApplicationItem> key = ofy().save().entities(ai).now().keySet().iterator().next();
			try {
				return ofy().load().key(key).now();
			} catch (Exception e) {
				throw new RuntimeException(e);
			}
		}
	}
}
