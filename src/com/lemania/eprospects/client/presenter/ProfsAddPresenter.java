package com.lemania.eprospects.client.presenter;

import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyEvent;
import com.gwtplatform.mvp.client.annotations.UseGatekeeper;
import com.lemania.eprospects.client.AdminGateKeeper;
import com.lemania.eprospects.client.CurrentUser;
import com.lemania.eprospects.client.FieldValidation;
import com.lemania.eprospects.client.NotificationTypes;
import com.lemania.eprospects.client.event.LoginAuthenticatedEvent;
import com.lemania.eprospects.client.event.PageAfterSelectEvent;
import com.lemania.eprospects.client.event.ProfessorAfterAddEvent;
import com.lemania.eprospects.client.event.LoginAuthenticatedEvent.LoginAuthenticatedHandler;
import com.lemania.eprospects.client.place.NameTokens;
import com.lemania.eprospects.client.presenter.MainPagePresenter;
import com.lemania.eprospects.client.uihandler.ProfessorAddUiHandler;
import com.lemania.eprospects.shared.ProfessorProxy;
import com.lemania.eprospects.shared.service.EventSourceRequestTransport;
import com.lemania.eprospects.shared.service.ProfessorRequestFactory;
import com.lemania.eprospects.shared.service.ProfessorRequestFactory.ProfessorRequestContext;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.History;
import com.google.gwt.user.client.Window;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.google.web.bindery.requestfactory.shared.Receiver;
import com.google.web.bindery.requestfactory.shared.ServerFailure;
import com.gwtplatform.mvp.client.proxy.RevealContentEvent;

public class ProfsAddPresenter 
	extends Presenter<ProfsAddPresenter.MyView, ProfsAddPresenter.MyProxy> 
	implements ProfessorAddUiHandler, LoginAuthenticatedHandler {
	
	//
	private CurrentUser currentUser;
	private ProfessorProxy prof;

	public interface MyView extends View, HasUiHandlers<ProfessorAddUiHandler> {
		void disableUiAfterAdd();
		void initializeUi();
	}

	@ProxyCodeSplit
	@NameToken(NameTokens.profsadd)
	@UseGatekeeper(AdminGateKeeper.class)
	public interface MyProxy extends ProxyPlace<ProfsAddPresenter> {
	}

	@Inject
	public ProfsAddPresenter(final EventBus eventBus, final MyView view,
			final MyProxy proxy) {
		super(eventBus, view, proxy);
		
		// Thuan
		getView().setUiHandlers(this);
	}

	@Override
	protected void revealInParent() {
		RevealContentEvent.fire(this, MainPagePresenter.TYPE_SetMainContent, this);
	}

	@Override
	protected void onBind() {
		super.onBind();
	}
	
	@Override
	protected void onReset(){
		//
		getView().initializeUi();
		//
		this.getEventBus().fireEvent( new PageAfterSelectEvent(NameTokens.profsadd));
	}

	@Override
	public void professorAddCancelled() {
		
		History.newItem(NameTokens.profs);
	}

	/*
	 * Create a new professor, fire the ProfessorAfterAddEvent to create a new access code.
	 * */
	@Override
	public void professorAdd(String profName, String profEmail, Boolean profStatus) {
		//
		if (this.currentUser.isReadOnly()){
			Window.alert(NotificationTypes.readOnly);
			return;
		}
		
		//
		if (profName.isEmpty()){
			Window.alert("Veuillez saissir le nom du professeur !");
			return;
		}
		
		if ( ! FieldValidation.isValidEmailAddress( profEmail ) ){
			Window.alert("Adresse email invalid !");
			return;
		}
		
		//
		ProfessorRequestFactory rf = GWT.create(ProfessorRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		
		ProfessorRequestContext rc = rf.professorRequest();
		prof = rc.create(ProfessorProxy.class);
		prof.setProfName(profName);
		prof.setProfActive(profStatus);
		prof.setProfEmail( profEmail );
		
		rc.save(prof).fire(new Receiver<Void>(){
			@Override
			public void onSuccess(Void response){
				getEventBus().fireEvent( new ProfessorAfterAddEvent(prof) );
				getView().initializeUi();
			}
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
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
