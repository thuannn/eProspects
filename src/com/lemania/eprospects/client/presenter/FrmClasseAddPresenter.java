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
import com.lemania.eprospects.client.uihandler.FrmClasseAddUiHandler;
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
import com.google.inject.Inject;
import com.google.web.bindery.requestfactory.shared.Receiver;
import com.google.web.bindery.requestfactory.shared.ServerFailure;
import com.google.gwt.core.client.GWT;
import com.google.web.bindery.event.shared.EventBus;
import com.google.gwt.user.client.Window;
import com.gwtplatform.mvp.client.proxy.RevealContentEvent;

public class FrmClasseAddPresenter 
	extends Presenter<FrmClasseAddPresenter.MyView, FrmClasseAddPresenter.MyProxy> 
	implements FrmClasseAddUiHandler, LoginAuthenticatedHandler {
	
	
	//
	private CurrentUser currentUser;
	

	public interface MyView extends View, HasUiHandlers<FrmClasseAddUiHandler> {
		//
		public void setEcoleList(List<EcoleProxy> ecoleList);
		
		public void setCoursList(List<CoursProxy> coursList);
		
		public void showStatus(String msg);
		
		public void resetForm();
	}

	@ProxyCodeSplit
	@NameToken(NameTokens.classeadd)
	@UseGatekeeper(AdminGateKeeper.class)
	public interface MyProxy extends ProxyPlace<FrmClasseAddPresenter> {
	}

	@Inject
	public FrmClasseAddPresenter(final EventBus eventBus, final MyView view,
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
	}
	
	@Override
	protected void onReset() {
		//
		super.onReset();
		//
		this.getEventBus().fireEvent( new PageAfterSelectEvent(NameTokens.classeadd));
		// Thuan
		getView().resetForm();
		loadActiveEcoleList();
	}

	
	/*
	 * Load active ecole list when the form is opened.
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

	
	/*
	 * 
	 * */
	@Override
	public void addNewClasse(String className, String coursId, Boolean isActif) {
		//
		if (this.currentUser.isReadOnly()){
			Window.alert(NotificationTypes.readOnly);
			return;
		}
		
		// 
		if (className.isEmpty()) {
			Window.alert( NotificationTypes.invalid_input + " - Nom de la classe");
			return;
		}
		
		if (coursId.isEmpty()){
			Window.alert( NotificationTypes.invalid_input + " - Merci de choisir un programme");
			return;
		}
		
		// Save data
		ClasseRequestFactory rf = GWT.create(ClasseRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ClasseRequestContext rc = rf.classeRequest();
		
		ClasseProxy classe = rc.create(ClasseProxy.class);
		classe.setClassName(className);
		classe.setIsActive(isActif);
		
		rc.save(classe, coursId).fire(new Receiver<Void>(){
			@Override
			public void onSuccess(Void response){
				getView().showStatus( NotificationTypes.classe_create_good );
				getView().resetForm();
			}
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
		});
	}

	@Override
	public void onEcoleSelected(String ecoleId) {
		// 
		if (ecoleId.isEmpty()){
			return;
		}
		
		CoursRequestFactory rf = GWT.create(CoursRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		CoursRequestContext rc = rf.coursRequest();
		rc.listAll(ecoleId).fire(new Receiver<List<CoursProxy>>(){
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

	
	@ProxyEvent
	@Override
	public void onLoginAuthenticated(LoginAuthenticatedEvent event) {
		// 
		this.currentUser = event.getCurrentUser();
	}
}
