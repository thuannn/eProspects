package com.lemania.eprospects.client.presenter;

import java.util.List;

import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyEvent;
import com.lemania.eprospects.client.CurrentUser;
import com.lemania.eprospects.client.LoggedInGatekeeper;
import com.lemania.eprospects.client.NotificationTypes;
import com.lemania.eprospects.client.event.CheckClassMasterRoleEvent;
import com.lemania.eprospects.client.event.EvaluationStudentReportLoadEvent;
import com.lemania.eprospects.client.event.LoginAuthenticatedEvent;
import com.lemania.eprospects.client.event.PageAfterSelectEvent;
import com.lemania.eprospects.client.event.CheckClassMasterRoleEvent.CheckClassMasterRoleHandler;
import com.lemania.eprospects.client.event.EvaluationStudentReportLoadEvent.EvaluationStudentReportLoadHandler;
import com.lemania.eprospects.client.event.LoginAuthenticatedEvent.LoginAuthenticatedHandler;
import com.lemania.eprospects.client.place.NameTokens;
import com.lemania.eprospects.client.uihandler.FrmEvaluationInputStudentUiHandler;
import com.lemania.eprospects.shared.BulletinProxy;
import com.lemania.eprospects.shared.ClasseProxy;
import com.lemania.eprospects.shared.CoursProxy;
import com.lemania.eprospects.shared.EcoleProxy;
import com.lemania.eprospects.shared.EvaluationHeaderProxy;
import com.lemania.eprospects.shared.EvaluationStudentReportProxy;
import com.lemania.eprospects.shared.EvaluationSubjectProxy;
import com.lemania.eprospects.shared.service.BulletinRequestFactory;
import com.lemania.eprospects.shared.service.ClasseRequestFactory;
import com.lemania.eprospects.shared.service.CoursRequestFactory;
import com.lemania.eprospects.shared.service.EcoleRequestFactory;
import com.lemania.eprospects.shared.service.EvaluationHeaderRequestFactory;
import com.lemania.eprospects.shared.service.EvaluationStudentReportRequestFactory;
import com.lemania.eprospects.shared.service.EvaluationSubjectRequestFactory;
import com.lemania.eprospects.shared.service.EventSourceRequestTransport;
import com.lemania.eprospects.shared.service.UserRequestFactory;
import com.lemania.eprospects.shared.service.BulletinRequestFactory.BulletinRequestContext;
import com.lemania.eprospects.shared.service.ClasseRequestFactory.ClasseRequestContext;
import com.lemania.eprospects.shared.service.CoursRequestFactory.CoursRequestContext;
import com.lemania.eprospects.shared.service.EcoleRequestFactory.EcoleRequestContext;
import com.lemania.eprospects.shared.service.EvaluationHeaderRequestFactory.EvaluationHeaderRequestContext;
import com.lemania.eprospects.shared.service.EvaluationStudentReportRequestFactory.EvaluationStudentReportRequestContext;
import com.lemania.eprospects.shared.service.EvaluationSubjectRequestFactory.EvaluationSubjectRequestContext;
import com.lemania.eprospects.shared.service.UserRequestFactory.UserRequestContext;
import com.gwtplatform.mvp.client.annotations.UseGatekeeper;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.Window;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.google.web.bindery.requestfactory.shared.Receiver;
import com.google.web.bindery.requestfactory.shared.ServerFailure;
import com.gwtplatform.mvp.client.proxy.RevealContentEvent;

public class FrmEvaluationInputStudentPresenter
		extends
		Presenter<FrmEvaluationInputStudentPresenter.MyView, FrmEvaluationInputStudentPresenter.MyProxy> 
		implements FrmEvaluationInputStudentUiHandler, CheckClassMasterRoleHandler, LoginAuthenticatedHandler, EvaluationStudentReportLoadHandler {
	
	//
	private CurrentUser currentUser;

	public interface MyView extends View, HasUiHandlers<FrmEvaluationInputStudentUiHandler> {
		//
		public void initializeUI();		
		public void resetForm();
		//
		void setEcoleList(List<EcoleProxy> ecoles);
		//
		void setCoursList(List<CoursProxy> programmes);
		//
		void setClasseList(List<ClasseProxy> classes);
		//
		void setStudentListData(List<BulletinProxy> students);
		//
		void setEvaluationHeaderListData(List<EvaluationHeaderProxy> headers);
		//		
		void setEvaluationSubjectTableData( List<EvaluationSubjectProxy> evaluationSubject );
		//
		void enableCommentEditing(Boolean isClassMaster);
		//
		void setStudentReportData(EvaluationStudentReportProxy report);
		//
		void removeDeletedEvaluationSubject();
	}

	@ProxyCodeSplit
	@NameToken(NameTokens.evaluationinputstudent)
	@UseGatekeeper(LoggedInGatekeeper.class)
	public interface MyProxy extends ProxyPlace<FrmEvaluationInputStudentPresenter> {
	}

	@Inject
	public FrmEvaluationInputStudentPresenter(final EventBus eventBus,
			final MyView view, final MyProxy proxy) {
		super(eventBus, view, proxy);
	}

	@Override
	protected void revealInParent() {
		RevealContentEvent.fire(this, MainPagePresenter.TYPE_SetMainContent, this);
	}

	@Override
	protected void onBind() {
		super.onBind();		
		//
		getView().setUiHandlers(this);		
		// UI
		getView().initializeUI();
		loadEcoleList();
	}

	@Override
	protected void onReset() {
		super.onReset();		
		//
		this.getEventBus().fireEvent( new PageAfterSelectEvent(NameTokens.evaluationinputstudent));	
		// Thuan
		getView().resetForm();		
	}

	/*
	 * */
	private void loadEcoleList() {
		// 
		EcoleRequestFactory rf = GWT.create(EcoleRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		EcoleRequestContext rc = rf.ecoleRequest();
		rc.listAll().fire(new Receiver<List<EcoleProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<EcoleProxy> response) {
				getView().setEcoleList(response);
			}
		});
	}
	
	/*
	 * */
	@Override
	public void onEcoleSelected(String ecoleId) {
		//
		if (ecoleId.isEmpty()){
			return;
		}
		
		CoursRequestFactory rf = GWT.create(CoursRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		CoursRequestContext rc = rf.coursRequest();
		rc.listAllActive(ecoleId).fire(new Receiver<List<CoursProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<CoursProxy> response) {
				getView().setCoursList(response);
			}
		});
	}
	
	/*
	 * */
	@Override
	public void onProgrammeSelected(String programmeId) {		
		//
		ClasseRequestFactory rf = GWT.create(ClasseRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ClasseRequestContext rc = rf.classeRequest();
		rc.listAllActive(programmeId).fire(new Receiver<List<ClasseProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<ClasseProxy> response) {
				getView().setClasseList(response);
			}
		});
	}

	@Override
	public void onClassSelected(String classId) {		
		// 
		BulletinRequestFactory rf = GWT.create(BulletinRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		BulletinRequestContext rc = rf.bulletinRequest();
		rc.listAllActiveByClass( classId ).fire(new Receiver<List<BulletinProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<BulletinProxy> response) {
				getView().setStudentListData(response);
			}
		});
	}

	/*
	 * */
	@Override
	public void onBulletinSelected(String classId) {		
		//
		EvaluationHeaderRequestFactory rf = GWT.create(EvaluationHeaderRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		EvaluationHeaderRequestContext rc = rf.evaluationHeaderRequest();				
		rc.listAllByClass(classId).fire(new Receiver<List<EvaluationHeaderProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<EvaluationHeaderProxy> response) {
				getView().setEvaluationHeaderListData(response);
			}
		});
	}

	/*
	 * */
	@Override
	public void onEvaluationHeaderSelected(String classId, final String bulletinId, final String evaluationHeaderId, final String classMasterId) {
		//
		if (classId.isEmpty()){
			Window.alert(NotificationTypes.invalid_input + " - Classe");
			return;
		}
		if (bulletinId.isEmpty()){
			Window.alert(NotificationTypes.invalid_input + " - Elève");
			return;
		}
		if (evaluationHeaderId.isEmpty()){
			Window.alert(NotificationTypes.invalid_input + " - Evaluation");
			return;
		}
		//
		EvaluationSubjectRequestFactory rf = GWT.create(EvaluationSubjectRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		EvaluationSubjectRequestContext rc = rf.evaluationSubjectRequest();				
		rc.listAllByStudent(classId, bulletinId, evaluationHeaderId).fire(new Receiver<List<EvaluationSubjectProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<EvaluationSubjectProxy> response) {
				//
				getView().setEvaluationSubjectTableData(response);
				//
				getEventBus().fireEvent( new CheckClassMasterRoleEvent(classMasterId) );
				//
				getEventBus().fireEvent( new EvaluationStudentReportLoadEvent(bulletinId, evaluationHeaderId));
			}
		});
	}

	/*
	 * */
	@ProxyEvent
	@Override
	public void onCheckClassMasterRole(CheckClassMasterRoleEvent event) {
		//
		if (currentUser.isAdmin()) {
			getView().enableCommentEditing(true);
			return;
		}
		//
		UserRequestFactory rf = GWT.create(UserRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		UserRequestContext rc = rf.userRequest();
		rc.checkClassMasterRole( currentUser.getUserId().toString(), event.getProfId() ).fire(new Receiver<Boolean>() {
			@Override
			public void onFailure(ServerFailure error) {
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(Boolean response) {
				getView().enableCommentEditing(response);
			}
		});
	}

	/*
	 * */
	@ProxyEvent
	@Override
	public void onLoginAuthenticated(LoginAuthenticatedEvent event) {
		//
		this.currentUser = event.getCurrentUser();
	}
	
	/*
	 * */
	@Override
	public void saveEvaluationStudentReport(String bulletinId,
			String evaluationHeaderId, String commentaire) {
		//
		if (currentUser.isReadOnly()) {
			Window.alert(NotificationTypes.readOnly);
			return;
		}
		//
		EvaluationStudentReportRequestFactory rf = GWT.create(EvaluationStudentReportRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		EvaluationStudentReportRequestContext rc = rf.evaluationStudentReportRequest();
		rc.save( bulletinId, evaluationHeaderId, commentaire ).fire(new Receiver<Void>() {
			@Override
			public void onFailure(ServerFailure error) {
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(Void response) {
				//
				Window.alert("Données sauvegardées");
			}
		});
	}

	/*
	 * */
	@ProxyEvent
	@Override
	public void onEvaluationStudentReportLoad(
			EvaluationStudentReportLoadEvent event) {
		//
		EvaluationStudentReportRequestFactory rf = GWT.create(EvaluationStudentReportRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		EvaluationStudentReportRequestContext rc = rf.evaluationStudentReportRequest();
		rc.load( event.getBulletinId(), event.getEvaluationHeaderId() ).fire(new Receiver<EvaluationStudentReportProxy>() {
			@Override
			public void onFailure(ServerFailure error) {
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(EvaluationStudentReportProxy response) {
				//
				if (response != null)
					getView().setStudentReportData(response);
			}
		});
	}

	/*
	 * */
	@Override
	public void removeEvaluationSubject(EvaluationSubjectProxy es) {
		//
		if (currentUser.isReadOnly()) {
			Window.alert(NotificationTypes.readOnly);
			return;
		}
		//
		if (!currentUser.isAdmin()) {
			Window.alert(NotificationTypes.readOnly);
			return;
		}
		//
		EvaluationSubjectRequestFactory rf = GWT.create(EvaluationSubjectRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		EvaluationSubjectRequestContext rc = rf.evaluationSubjectRequest();				
		rc.removeEvaluationSubject(es).fire(new Receiver<Void>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(Void response) {
				//
				getView().removeDeletedEvaluationSubject();				
			}
		});
	}
}
