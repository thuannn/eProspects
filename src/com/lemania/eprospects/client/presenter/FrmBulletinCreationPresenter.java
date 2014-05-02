package com.lemania.eprospects.client.presenter;

import java.util.List;

import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyEvent;
import com.lemania.eprospects.client.AdminGateKeeper;
import com.lemania.eprospects.client.CurrentUser;
import com.lemania.eprospects.client.NotificationTypes;
import com.lemania.eprospects.client.event.LoadNonAttribuedStudentEvent;
import com.lemania.eprospects.client.event.LoginAuthenticatedEvent;
import com.lemania.eprospects.client.event.PageAfterSelectEvent;
import com.lemania.eprospects.client.event.LoadNonAttribuedStudentEvent.LoadNonAttribuedStudentHandler;
import com.lemania.eprospects.client.event.LoginAuthenticatedEvent.LoginAuthenticatedHandler;
import com.lemania.eprospects.client.place.NameTokens;
import com.lemania.eprospects.client.presenter.MainPagePresenter;
import com.lemania.eprospects.client.uihandler.FrmBulletinCreationUiHandler;
import com.lemania.eprospects.shared.BulletinProxy;
import com.lemania.eprospects.shared.ClasseProxy;
import com.lemania.eprospects.shared.CoursProxy;
import com.lemania.eprospects.shared.EcoleProxy;
import com.lemania.eprospects.shared.ProfileProxy;
import com.lemania.eprospects.shared.StudentProxy;
import com.lemania.eprospects.shared.service.BulletinRequestFactory;
import com.lemania.eprospects.shared.service.ClasseRequestFactory;
import com.lemania.eprospects.shared.service.CoursRequestFactory;
import com.lemania.eprospects.shared.service.EcoleRequestFactory;
import com.lemania.eprospects.shared.service.EventSourceRequestTransport;
import com.lemania.eprospects.shared.service.ProfileRequestFactory;
import com.lemania.eprospects.shared.service.StudentRequestFactory;
import com.lemania.eprospects.shared.service.BulletinRequestFactory.BulletinRequestContext;
import com.lemania.eprospects.shared.service.ClasseRequestFactory.ClasseRequestContext;
import com.lemania.eprospects.shared.service.CoursRequestFactory.CoursRequestContext;
import com.lemania.eprospects.shared.service.EcoleRequestFactory.EcoleRequestContext;
import com.lemania.eprospects.shared.service.ProfileRequestFactory.ProfileRequestContext;
import com.lemania.eprospects.shared.service.StudentRequestFactory.StudentRequestContext;
import com.gwtplatform.mvp.client.annotations.UseGatekeeper;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.Window;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.google.web.bindery.requestfactory.shared.Receiver;
import com.google.web.bindery.requestfactory.shared.ServerFailure;
import com.gwtplatform.mvp.client.proxy.RevealContentEvent;

public class FrmBulletinCreationPresenter
		extends
		Presenter<FrmBulletinCreationPresenter.MyView, FrmBulletinCreationPresenter.MyProxy> 
		implements 
		FrmBulletinCreationUiHandler, LoginAuthenticatedHandler, LoadNonAttribuedStudentHandler {
	
	//
	private CurrentUser currentUser;
	

	public interface MyView extends View, HasUiHandlers<FrmBulletinCreationUiHandler> {
		//
		void resetForm();
		//
		void initializeTables();
		//
		void setStudentTableData(List<StudentProxy> students);
		void setBulletinTableData(List<BulletinProxy> bulletins);
		//
		void setProfileListData(List<ProfileProxy> profiles);
		void setEcoleList(List<EcoleProxy> ecoles);
		void setCoursList(List<CoursProxy> programmes);
		void setClasseList(List<ClasseProxy> classes);
		//
		void addNewBulletinToTable(BulletinProxy bulletin);
		//
		void removeStudentWithBulletin();
		//
		void removeDeletedBulletinFromTable();
		void refreshBulletinTable( BulletinProxy bp );
	}

	@ProxyCodeSplit
	@NameToken(NameTokens.bulletincreation)
	@UseGatekeeper(AdminGateKeeper.class)
	public interface MyProxy extends ProxyPlace<FrmBulletinCreationPresenter> {
	}

	@Inject
	public FrmBulletinCreationPresenter(final EventBus eventBus, final MyView view,
			final MyProxy proxy) {
		super(eventBus, view, proxy);
	}

	@Override
	protected void revealInParent() {
		RevealContentEvent.fire(this, MainPagePresenter.TYPE_SetMainContent, this);
	}

	@Override
	protected void onBind() {
		super.onBind();
		
		// Thuan
		getView().setUiHandlers(this);
		getView().initializeTables();
	}
	
	@Override
	protected void onReset() {
		//
		super.onReset();
		//
		this.getEventBus().fireEvent( new PageAfterSelectEvent(NameTokens.bulletincreation));
		// Thuan
		getView().resetForm();
		//
		loadActiveStudentList();
		//
		loadEcoleList();
	}
	
	
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

	/**/
	private void loadActiveProfileList(String classId) {
		//
		ProfileRequestFactory rf = GWT.create(ProfileRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		
		ProfileRequestContext rc = rf.profileRequest();
		rc.listAllActiveByClass(classId).fire(new Receiver<List<ProfileProxy>>(){
			@Override
			public void onSuccess(List<ProfileProxy> response){
				getView().setProfileListData( response );
			}
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
		});
		//		
	}
	

	/*
	 * Load active student list
	 * */
	public void loadActiveStudentList(){
		StudentRequestContext rc = getStudentRequestContext();
		rc.listAllActiveWithoutBulletin().fire(new Receiver<List<StudentProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<StudentProxy> response) {
				getView().setStudentTableData(response);
			}
		});
	}
	
	/* Get the request context for StudenProxy.
	 * Used in every function which call to Request Factory */
	public StudentRequestContext getStudentRequestContext() {
		StudentRequestFactory rf = GWT.create(StudentRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		return rf.studentRequest();
	}
	

	/**/
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

	
	/**/
	@Override
	public void onProgrammeSelected(String coursId) {
		//
		ClasseRequestFactory rf = GWT.create(ClasseRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ClasseRequestContext rc = rf.classeRequest();
		rc.listAllActive(coursId).fire(new Receiver<List<ClasseProxy>>(){
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

	
	/**/
	@Override
	public void createBulletin(String studentId, String classId, String year, String profileId) {
		//
		if (this.currentUser.isReadOnly()){
			Window.alert(NotificationTypes.readOnly);
			return;
		}
		
		//
		if (studentId.isEmpty()){
			Window.alert( NotificationTypes.invalid_input + " - Elève");
			return;
		}
		if (classId.isEmpty()){
			Window.alert( NotificationTypes.invalid_input + " - Classe");
			return;
		}
		if (year.isEmpty()){
			Window.alert( NotificationTypes.invalid_input + " - Année");
			return;
		}
		if (profileId.isEmpty()){
			Window.alert( NotificationTypes.invalid_input + " - Profil");
			return;
		}
		//
		BulletinRequestFactory rf = GWT.create(BulletinRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		BulletinRequestContext rc = rf.bulletinRequest();
		rc.createBulletin(studentId, classId, year, profileId).fire(new Receiver<BulletinProxy>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(BulletinProxy response) {
				getView().addNewBulletinToTable(response);
				getView().removeStudentWithBulletin();
			}
		});
	}

	
	/**/
	@Override
	public void onClassChanged(final String classId) {
		//
		if (classId.isEmpty()){
			Window.alert(NotificationTypes.invalid_input + " - Classe");
			return;
		}
		// 
		BulletinRequestFactory rf = GWT.create(BulletinRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		BulletinRequestContext rc = rf.bulletinRequest();
		rc.listAllByClass( classId ).fire(new Receiver<List<BulletinProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<BulletinProxy> response) {
				getView().setBulletinTableData(response);
				loadActiveProfileList(classId);
			}
		});
	}

	//
	@Override
	public void removeBulletin(BulletinProxy bp) {
		//
		if (this.currentUser.isReadOnly()){
			Window.alert(NotificationTypes.readOnly);
			return;
		}
		
		//
		BulletinRequestFactory rf = GWT.create(BulletinRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		BulletinRequestContext rc = rf.bulletinRequest();
		rc.removeBulletin(bp).fire(new Receiver<Boolean>() {
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(Boolean response) {
				if (response) {
					getView().removeDeletedBulletinFromTable();
					getEventBus().fireEvent( new LoadNonAttribuedStudentEvent() );
				} else
					Window.alert("Une erreur s'est produite.");
			}
		});	
	}

	
	@ProxyEvent
	@Override
	public void onLoginAuthenticated(LoginAuthenticatedEvent event) {
		//
		this.currentUser = event.getCurrentUser();
	}

	
	// 
	@Override
	public void updateBulletinFinishedStatus(BulletinProxy bp,
			Boolean isFinished) {
		//
		if (this.currentUser.isReadOnly()){
			Window.alert(NotificationTypes.readOnly);
			return;
		}
		
		//
		BulletinRequestFactory rf = GWT.create(BulletinRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		BulletinRequestContext rc = rf.bulletinRequest();
		BulletinProxy editBP = rc.edit(bp);
		editBP.setIsFinished(isFinished);
		rc.saveAndReturn(editBP).fire(new Receiver<BulletinProxy>() {
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(BulletinProxy response) {
					getEventBus().fireEvent( new LoadNonAttribuedStudentEvent() );
					getView().refreshBulletinTable(response);
			}
		});	
	}

	/*
	 * */
	@ProxyEvent
	@Override
	public void onLoadNonAttribuedStudent(LoadNonAttribuedStudentEvent event) {
		//
		loadActiveStudentList();
	}
}
