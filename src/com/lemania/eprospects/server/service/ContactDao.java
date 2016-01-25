package com.lemania.eprospects.server.service;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;


public class ContactDao extends MyDAOBase {
	
	public void sendEmail ( String email, String message, String subject ) {
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
	        msg.setReplyTo( new javax.mail.Address[] {
	        		new javax.mail.internet.InternetAddress("summercamp@lemania.ch", "Lemania Summer School")
	        });
	        //
	        msg.setSubject( subject );
	        msg.setText( message );
	        //
	        Transport.send(msg);
	    } catch (Exception e) {
	    	throw new RuntimeException(e);
	    }
	}
	
	public void sendEmailSummerTeam ( String message, String subject ) {
		//
		Properties props = new Properties();
        Session session = Session.getDefaultInstance(props, null);
        //
        try {
	        Message msg = new MimeMessage(session);
	        msg.setFrom(new InternetAddress( "thuannn@gmail.com", "Lemania Summer School"));
	        //
	        msg.addRecipient(Message.RecipientType.TO, new InternetAddress("thuan.lemania@gmail.com", "Thuan NGUYEN"));
	        //
//	        msg.addRecipient(Message.RecipientType.TO, new InternetAddress("shane.levine@lemania.ch", "Shane Levine"));
	        msg.addRecipient(Message.RecipientType.TO, new InternetAddress("david.tshitoko@lemania.ch", "David Tshitoko"));
	        //
	        msg.addRecipient(Message.RecipientType.TO, new InternetAddress("summercamp@lemania.ch", "Summer Camp"));
	        msg.addRecipient(Message.RecipientType.TO, new InternetAddress("Anh-Tan.THAI@lemania.ch", "THAI Anh-Tan"));
	        msg.addRecipient(Message.RecipientType.TO, new InternetAddress("Pascal.CAVADINI@lemania.ch", "CAVADINI Pascal"));
//	        //
//	        msg.setReplyTo( new javax.mail.Address[] {
//	        		new javax.mail.internet.InternetAddress("summercamp@lemania.ch", "Lemania Summer School")
//	        });
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