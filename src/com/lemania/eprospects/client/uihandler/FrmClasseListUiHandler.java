package com.lemania.eprospects.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;
import com.lemania.eprospects.shared.ClasseProxy;

public interface FrmClasseListUiHandler extends UiHandlers {
	//
	void updateClasse( ClasseProxy classe, String classeName, Boolean value );
	
	// Load subject list when a school is chosen
	void onEcoleSelected( String ecoleId );
	
	// Load class list when a program is selected
	void onSubjectSelected( String subjectId );
}
