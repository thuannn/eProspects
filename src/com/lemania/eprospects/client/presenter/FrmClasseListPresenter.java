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
import com.lemania.eprospects.client.event.LoginAuthenticatedEvent;
import com.lemania.eprospects.client.event.PageAfterSelectEvent;
import com.lemania.eprospects.client.event.LoginAuthenticatedEvent.LoginAuthenticatedHandler;
import com.lemania.eprospects.client.place.NameTokens;
import com.lemania.eprospects.client.presenter.MainPagePresenter;
import com.lemania.eprospects.client.uihandler.FrmClasseListUiHandler;
import com.lemania.eprospects.shared.ClasseProxy;
import com.lemania.eprospects.shared.CoursProxy;
import com.lemania.eprospects.shared.EcoleProxy;
import com.lemania.eprospects.shared.service.ClasseRequestFactory;
import com.lemania.eprospects.shared.service.CoursRequestFactory;
import com.lemania.eprospects.shared.service.EcoleRequestFactory;
import com.lemania.eprospects.shared.service.EventSourceRequestTransport;
import com.lemania.eprospects.shared.service.ClasseRequestFactory.ClasseRequestContext;
import com.lemania.eprospects.shared.service.CoursRequestFactory.CoursRequestContext;
import com.lemania.eprospects.shared.service.EcoleRequestFactory.EcoleRequestContext;
import com.gwtplatform.mvp.client.annotations.UseGatekeeper;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.Window;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.google.web.bindery.requestfactory.shared.Receiver;
import com.google.web.bindery.requestfactory.shared.ServerFailure;
import com.gwtplatform.mvp.client.proxy.RevealContentEvent;

public class FrmClasseListPresenter
		extends Presenter<FrmClasseListPresenter.MyView, FrmClasseListPresenter.MyProxy> 
		implements FrmClasseListUiHandler, LoginAuthenticatedHandler {
	
	//
	private CurrentUser currentUser;

	public interface MyView extends View, HasUiHandlers<FrmClasseListUiHandler> {
		//
		void initializeTable();
		void resetForm();
		
		void setEcoleList(List<EcoleProxy> ecoleList);
		void setCoursList(List<CoursProxy> subjectList);
		
		void setClasseListData(List<ClasseProxy> classeList);
		void refreshUpdatedClasse(ClasseProxy classe);
	}

	@ProxyCodeSplit
	@NameToken(NameTokens.classlist)
	@UseGatekeeper(AdminGateKeeper.class)
	public interface MyProxy extends ProxyPlace<FrmClasseListPresenter> {
	}

	
	@Inject
	public FrmClasseListPresenter(final EventBus eventBus, final MyView view, final MyProxy proxy) {
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
		getView().initializeTable();
	}
	
	
	@Override
	protected void onReset(){
		//
		super.onReset();
		//
		this.getEventBus().fireEvent( new PageAfterSelectEvent(NameTokens.classlist));
		// Thuan
		loadActiveEcoleList();
		
		// Clear all the rest of the form
		getView().resetForm();
	}

	/*
	 * 
	 * */
	private void loadActiveEcoleList() {
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
	@Override
	public void updateClasse(ClasseProxy classe, String classeName, Boolean isActive) {
		//
		if (this.currentUser.isReadOnly()){
			Window.alert(NotificationTypes.readOnly);
			return;
		}
		
		//
		ClasseRequestFactory rf = GWT.create(ClasseRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ClasseRequestContext rc = rf.classeRequest();
		
		ClasseProxy classeForUpdate = rc.edit(classe);
		classeForUpdate.setClassName(classeName);
		classeForUpdate.setIsActive(isActive);
		
		rc.saveAndReturn(classeForUpdate).fire(new Receiver<ClasseProxy>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(ClasseProxy response) {
				getView().refreshUpdatedClasse(response);
			}
		});
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


	/*
	 * Load class list when a program is selected
	 * */
	@Override
	public void onSubjectSelected(String subjectId) {
		//
		ClasseRequestFactory rf = GWT.create(ClasseRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ClasseRequestContext rc = rf.classeRequest();
		rc.listAll(subjectId).fire(new Receiver<List<ClasseProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<ClasseProxy> response) {
				getView().setClasseListData(response);
			}
		});
	}


	@ProxyEvent
	@Override
	public void onLoginAuthenticated(LoginAuthenticatedEvent event) {
		//
		this.currentUser = event.getCurrentUser();
	}
}
