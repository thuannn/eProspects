package com.lemania.eprospects.server.service;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;


public class ContactDao extends MyDAOBase {
	
	public void sendEmail ( String email, String message, String subject ){
		//
		Properties props = new Properties();
        Session session = Session.getDefaultInstance(props, null);
        //
        try {
	        Message msg = new MimeMessage(session);
	        msg.setFrom(new InternetAddress( "thuannn@gmail.com", "Lemania Summer School"));
	        //
	        msg.addRecipient(Message.RecipientType.TO, new InternetAddress(email, "Thuan NGUYEN"));
	        //
	        msg.setSubject( subject );
	        msg.setText( message );
	        //
	        Transport.send(msg);
	    } catch (Exception e) {
	    	throw new RuntimeException(e);
	    }
	}
	
	public void sendEmailSummerTeam ( String message, String subject ){
		//
		Properties props = new Properties();
        Session session = Session.getDefaultInstance(props, null);
        //
        try {
	        Message msg = new MimeMessage(session);
	        msg.setFrom(new InternetAddress( "thuannn@gmail.com", "Lemania Summer School"));
	        //
	        msg.addRecipient(Message.RecipientType.TO, new InternetAddress("thuannn@gmail.com", "Thuan NGUYEN"));
	        msg.addRecipient(Message.RecipientType.TO, new InternetAddress("shane.levine@lemania.ch", "Shane Levine"));
//	        msg.addRecipient(Message.RecipientType.TO, new InternetAddress("Olga.Theofanidis@lemania.ch", "Olga THEOFANIDIS"));
	        //
	        msg.setSubject( subject );
	        msg.setText( message );
	        //
	        Transport.send(msg);
	    } catch (Exception e) {
	    	throw new RuntimeException(e);
	    }
	}
}