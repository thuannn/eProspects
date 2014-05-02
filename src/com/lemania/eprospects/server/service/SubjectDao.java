package com.lemania.eprospects.server.service;

import java.util.ArrayList;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.Query;
import com.lemania.eprospects.server.Bulletin;
import com.lemania.eprospects.server.Profile;
import com.lemania.eprospects.server.ProfileSubject;
import com.lemania.eprospects.server.Subject;

public class SubjectDao extends MyDAOBase {
	
	public void initialize(){
		return;
	}
	
	
	/*
	 * 
	 * */
	public List<Subject> listAll(){
		Query<Subject> q = this.ofy().query(Subject.class).order("subjectName");
		List<Subject> returnList = new ArrayList<Subject>();
		for (Subject subject : q){
			returnList.add(subject);
		}
		return returnList;
	}
	
	
	/*
	 * 
	 * */
	public List<Subject> listAllActive(){
		Query<Subject> q = this.ofy().query(Subject.class).order("subjectName");
		List<Subject> returnList = new ArrayList<Subject>();
		for (Subject subject : q){
			if (subject.getIsActive())
				returnList.add(subject);
		}
		return returnList;
	}
	
	/*
	 * 
	 * */
	public List<Subject> listAllActiveByProfile(Bulletin bulletin){
		//
		Profile profile;
		try { 
			profile = this.ofy().get( bulletin.getProfile() ); 
		} catch (RuntimeException exception) {
			Query<Profile> profiles = this.ofy().query(Profile.class)
					.filter("classe", bulletin.getClasse());
			profile = profiles.list().get(0);
		}
		//
		Query<ProfileSubject> profileSubjects = this.ofy().query(ProfileSubject.class)
				.filter("profile", profile)
				.order("subjectName");				
		//
		List<Subject> returnList = new ArrayList<Subject>();
		for (ProfileSubject ps : profileSubjects){
			returnList.add( this.ofy().get( ps.getSubject() ));
		}
		return returnList;
	}
	
	
	/*
	 * 
	 * */
	public void save(Subject subject){
		this.ofy().put(subject);
	}
	
	
	/*
	 * 
	 * */
	public Subject saveAndReturn(Subject subject){
		Key<Subject> key = this.ofy().put(subject);
		try {
			return this.ofy().get(key);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	
	/*
	 * 
	 * */
	public void removeSubject(Subject subject){
		this.ofy().delete(subject);
	}

}
