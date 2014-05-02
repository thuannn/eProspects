package com.lemania.eprospects.shared;

import com.google.web.bindery.requestfactory.shared.EntityProxy;
import com.google.web.bindery.requestfactory.shared.ProxyFor;
import com.lemania.eprospects.server.EvaluationStudentReport;
import com.lemania.eprospects.server.ObjectifyLocator;

@ProxyFor(value=EvaluationStudentReport.class, locator=ObjectifyLocator.class)
public interface EvaluationStudentReportProxy extends EntityProxy {
	//
	public boolean isPublished();
	public void setPublished(boolean isPublished);
	
	public String getEvaluationNote();
	public void setEvaluationNote(String evaluationNote);
}
