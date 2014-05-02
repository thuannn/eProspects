package com.lemania.eprospects.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;
import com.lemania.eprospects.shared.BulletinProxy;

public interface FrmBulletinCreationUiHandler extends UiHandlers {
	//
	void onEcoleSelected(String ecoleId);
	//
	void onProgrammeSelected(String coursId);
	void onClassChanged(String classId);
	//
	void createBulletin(String studentId, String classId, String year, String profileId);
	//
	void removeBulletin( BulletinProxy bp );
	//
	void updateBulletinFinishedStatus( BulletinProxy bp, Boolean isFinished );
}
