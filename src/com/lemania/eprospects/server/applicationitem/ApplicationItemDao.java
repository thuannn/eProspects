package com.lemania.eprospects.server.applicationitem;

import java.util.ArrayList;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.Query;
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
		this.ofy().put(ai);
	}
	
	
	/*
	 * */
	public List<ApplicationItem> listAll(){
		Query<ApplicationItem> q = this.ofy().query(ApplicationItem.class);
		List<ApplicationItem> returnList = new ArrayList<ApplicationItem>();
		for (ApplicationItem ai : q){
			returnList.add(ai);
		}
		return returnList;
	}
	
	
	
	/*
	 * */
	public List<ApplicationItem> listAll( String emailAddress, String appId ){
		// check if the current application is valid
		Query<ApplicationForm> qa = this.ofy().query(ApplicationForm.class)
				.filter( "applicationID", appId )
				.filter( "emailAddress", emailAddress );
		if (qa.count()<1)
			throw new RuntimeException( new Exception("Application not found") );
		
		// check if this item is already existed
		Query<ApplicationItem> qi = this.ofy().query(ApplicationItem.class)
				.filter( "app", qa.getKey() );
		//
		List<ApplicationItem> returnList = new ArrayList<ApplicationItem>();
		for (ApplicationItem ai : qi){
			returnList.add(ai);
		}
		return returnList;
	}
	
	
	
	/*
	 * */
	public ApplicationItem saveAndReturn(ApplicationItem app){
		Key<ApplicationItem> key = this.ofy().put(app);
		try {
			return this.ofy().get(key);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	
	
	/*
	 * */
	public ApplicationItem saveAndReturn(String emailAddress, String appId, String itemCode, String itemDesc, Double itemAmount){
		// check if the current application is valid
		Query<ApplicationForm> q = this.ofy().query(ApplicationForm.class)
				.filter( "applicationID", appId )
				.filter( "emailAddress", emailAddress );
		if (q.count()<1)
			throw new RuntimeException( new Exception("Application not found") );
		
		// check if this item is already existed
		Query<ApplicationItem> qi = this.ofy().query(ApplicationItem.class)
				.filter( "app", q.getKey() )
				.filter( "itemCode", itemCode );
		ApplicationItem ai;
		if (qi.count() <1) {
			ai = new ApplicationItem();
			ai.setItemCode(itemCode);
			ai.setItemDescription(itemDesc);
			ai.setItemAmount(itemAmount);
			ai.setApp( q.getKey() );
			//
			Key<ApplicationItem> key = this.ofy().put(ai);
			try {
				return this.ofy().get(key);
			} catch (Exception e) {
				throw new RuntimeException(e);
			}
		}
		else {
			ai = qi.get();
			ai.setItemDescription(itemDesc);
			ai.setItemAmount(itemAmount);
			ai.setApp( q.getKey() );
			//
			Key<ApplicationItem> key = this.ofy().put(ai);
			try {
				return this.ofy().get(key);
			} catch (Exception e) {
				throw new RuntimeException(e);
			}
		}
	}
}
