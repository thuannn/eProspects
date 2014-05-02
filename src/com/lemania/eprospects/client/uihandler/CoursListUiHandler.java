package com.lemania.eprospects.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;
import com.lemania.eprospects.shared.CoursProxy;

public interface CoursListUiHandler extends UiHandlers {
	//
	void updateCoursStatus(CoursProxy cours, Boolean value);
	void updateCoursName(CoursProxy cours, String name);
	void populateCoursList(String ecoleId);
}
