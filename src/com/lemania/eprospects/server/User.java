package com.lemania.eprospects.server;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.NotSaved;


@Entity
public class User extends DatastoreObject implements Comparable<User> {
	private String fullName;
	private String userName;
	private String password;
	private String email;
	private Boolean active = false;
	//
	private Boolean admin = false;
	private Boolean isProf = false;
	private Boolean isStudent = false;
	private Boolean isReadOnly = false;
	private Boolean isCandidate = false;
	//
	private String lastLoggedInTime;
	private String currentLoggedInTime;
	
	@NotSaved
	private int currentMonth = 0;

	@NotSaved
	private int currentYear = 0;
	
	@NotSaved
	private int currentDay = 0;
	
	public String getUserName() {
		return userName;
	}
	
	public void setUserName(String userName) {
		this.userName = userName;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getFullName() {
		return fullName;
	}
	
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	
	public Boolean getActive() {
		return active;
	}
	
	public void setActive(Boolean active) {
		this.active = active;
	}
	
	public Boolean getAdmin() {
		return admin;
	}

	public void setAdmin(Boolean admin) {
		this.admin = admin;
	}
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	public int getCurrentMonth() {
		return currentMonth;
	}
	
	public int getCurrentYear() {
		return currentYear;
	}
	
	public void setCurrentMonth(int currentMonth) {
		this.currentMonth = currentMonth;
	}

	public void setCurrentYear(int currentYear) {
		this.currentYear = currentYear;
	}

	public int getCurrentDay() {
		return currentDay;
	}

	public void setCurrentDay(int currentDay) {
		this.currentDay = currentDay;
	}
	
	public Boolean getIsProf() {
		return isProf;
	}

	public void setIsProf(Boolean isProf) {
		this.isProf = isProf;
	}

	public Boolean getIsStudent() {
		return isStudent;
	}

	public void setIsStudent(Boolean isStudent) {
		this.isStudent = isStudent;
	}

	@Override
	public int compareTo(User u) {		
		return this.fullName.compareTo( u.getFullName() );
	}

	public String getLastLoggedInTime() {
		return (this.lastLoggedInTime == null)? "" : this.lastLoggedInTime;
	}

	public void setLastLoggedInTime(String lastLoggedInTime) {
		this.lastLoggedInTime = lastLoggedInTime;
	}

	public String getCurrentLoggedInTime() {
		return (this.currentLoggedInTime == null)? "" : this.currentLoggedInTime;
	}

	public void setCurrentLoggedInTime(String currentLoggedInTime) {
		this.currentLoggedInTime = currentLoggedInTime;
	}

	public Boolean getIsReadOnly() {
		return isReadOnly;
	}

	public void setIsReadOnly(Boolean isReadOnly) {
		this.isReadOnly = isReadOnly;
	}

	public Boolean getIsCandidate() {
		return isCandidate;
	}

	public void setIsCandidate(Boolean isCandidate) {
		this.isCandidate = isCandidate;
	}
}
