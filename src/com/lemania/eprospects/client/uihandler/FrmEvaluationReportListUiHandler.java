package com.lemania.eprospects.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;
import com.lemania.eprospects.shared.EvaluationHeaderProxy;

public interface FrmEvaluationReportListUiHandler extends UiHandlers {
	//
	void onEcoleSelected(String ecoleId);
	//
	void onProgrammeSelected(String programmeId);
	//
	void loadClassMasterList();
	//
	void createNewReport(String fromDate, String toDate, String objective, String schoolYear, String classId, String classMasterId);
	//
	void onClassSelected(String classId);
	//
	void updateReport(EvaluationHeaderProxy evaluationHeader, String dateFrom, String dateTo, 
			String classMasterId, String objective);
	//
}
