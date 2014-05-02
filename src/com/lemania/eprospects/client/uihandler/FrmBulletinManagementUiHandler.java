package com.lemania.eprospects.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;
import com.lemania.eprospects.shared.BulletinBrancheProxy;
import com.lemania.eprospects.shared.BulletinProxy;
import com.lemania.eprospects.shared.BulletinSubjectProxy;

public interface FrmBulletinManagementUiHandler extends UiHandlers {
	//
	void onEcoleSelected(String ecoleId);
	//
	void onProgrammeSelected(String programmeId);
	//
	void onBulletinSelected(BulletinProxy bulletin);
	//
	void onClassChange(String classId);
	//
	void removeSubject(BulletinSubjectProxy subject);
	void removeBranche( BulletinBrancheProxy branche );
	//
	void onSubjectSelected(BulletinSubjectProxy subject);
	//
	void updateBrancheCoef(BulletinBrancheProxy branche, String coef);
	void updateSubjectCoef( BulletinSubjectProxy subject, String coef, Integer lastSubjectIndex);
	//
	void addSubject(String bulletinId, String subjectId, String profId, String coef);
	void addBranche(String bulletinSubjectId, String brancheId, String coef);
	//
	void loadProfessorList( String subjectId, String classId );
}
