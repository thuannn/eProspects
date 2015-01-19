package com.lemania.eprospects.server.service;

import com.googlecode.objectify.Objectify;
import com.googlecode.objectify.ObjectifyFactory;
import com.googlecode.objectify.ObjectifyService;
import com.lemania.eprospects.server.Assignment;
import com.lemania.eprospects.server.Branche;
import com.lemania.eprospects.server.Bulletin;
import com.lemania.eprospects.server.BulletinBranche;
import com.lemania.eprospects.server.BulletinSubject;
import com.lemania.eprospects.server.Classe;
import com.lemania.eprospects.server.Cours;
import com.lemania.eprospects.server.Ecole;
import com.lemania.eprospects.server.EvaluationHeader;
import com.lemania.eprospects.server.EvaluationStudentReport;
import com.lemania.eprospects.server.EvaluationSubject;
import com.lemania.eprospects.server.Professor;
import com.lemania.eprospects.server.Profile;
import com.lemania.eprospects.server.ProfileBranche;
import com.lemania.eprospects.server.ProfileSubject;
import com.lemania.eprospects.server.SettingOption;
import com.lemania.eprospects.server.Student;
import com.lemania.eprospects.server.Subject;
import com.lemania.eprospects.server.User;
import com.lemania.eprospects.server.applicationform.ApplicationForm;
import com.lemania.eprospects.server.applicationitem.ApplicationItem;
import com.lemania.eprospects.server.itemprice.ItemPrice;

public class MyDAOBase {
	
	public static Objectify ofy() {
        return ObjectifyService.ofy();
    }

    public static ObjectifyFactory factory() {
        return ObjectifyService.factory();
    }

	static {
		//
		try {
			ObjectifyService.register(SettingOption.class);
		} catch (Exception e){
			// do nothing
		}
		
		try {
    		ObjectifyService.register(User.class);        
    	} catch (Exception e) {
    		// do nothing
    	}
		
		try {
        	ObjectifyService.register(Professor.class);
        } catch (Exception e) {
        	// do nothing
        }
		
		try {
        	ObjectifyService.register(Ecole.class);
        } catch (Exception e) {
        	// do nothing
        }
		
		try {
        	ObjectifyService.register(Cours.class);
        } catch (Exception e) {
        	// do nothing
        }
		
		try {
        	ObjectifyService.register(Student.class);
        } catch (Exception e) {
        	// do nothing
        }
		
		try {
        	ObjectifyService.register(Classe.class);
        } catch (Exception e) {
        	// do nothing
        }
		
		try {
        	ObjectifyService.register(Branche.class);
        } catch (Exception e) {
        	// do nothing
        }
		
		try {
        	ObjectifyService.register(Subject.class);
        } catch (Exception e) {
        	// do nothing
        }
		
		try {
        	ObjectifyService.register(Assignment.class);
        } catch (Exception e) {
        	// do nothing
        }
		
		try {
        	ObjectifyService.register(Profile.class);
        } catch (Exception e) {
        	// do nothing
        }
		
		try {
        	ObjectifyService.register(ProfileSubject.class);
        } catch (Exception e) {
        	// do nothing
        }
		
		try {
        	ObjectifyService.register(ProfileBranche.class);
        } catch (Exception e) {
        	// do nothing
        }
		
		try {
        	ObjectifyService.register(Bulletin.class);
        } catch (Exception e) {
        	// do nothing
        }		
		
		try {
        	ObjectifyService.register(BulletinSubject.class);
        } catch (Exception e) {
        	// do nothing
        }
		
		try {
        	ObjectifyService.register(BulletinBranche.class);
        } catch (Exception e) {
        	// do nothing
        }	
		
		try {
        	ObjectifyService.register(EvaluationHeader.class);
        } catch (Exception e) {
        	// do nothing
        }
		
		try {
        	ObjectifyService.register(EvaluationSubject.class);
        } catch (Exception e) {
        	// do nothing
        }
		
		try {
        	ObjectifyService.register(EvaluationStudentReport.class);
        } catch (Exception e) {
        	// do nothing
        }
		
		try {
        	ObjectifyService.register(ApplicationForm.class);
        } catch (Exception e) {
        	// do nothing
        }	
		
		try {
        	ObjectifyService.register(ItemPrice.class);
        } catch (Exception e) {
        	// do nothing
        }	
		
		try {
        	ObjectifyService.register(ApplicationItem.class);
        } catch (Exception e) {
        	// do nothing
        }	
	}
}
