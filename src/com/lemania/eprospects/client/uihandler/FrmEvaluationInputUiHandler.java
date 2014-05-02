package com.lemania.eprospects.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;
import com.lemania.eprospects.shared.EvaluationSubjectProxy;

public interface FrmEvaluationInputUiHandler extends UiHandlers {
	//
	void onProfessorSelected( String profId );
	//
	void onAssignmentSelected(String assignmentId);
	//
	void onLstEvaluationHeaderSelected( String profId, String assignmentId, String evaluationHeaderId );
	//
	void updateEvaluation(EvaluationSubjectProxy es, String value, int order);
}
