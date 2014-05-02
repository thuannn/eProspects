package com.lemania.eprospects.client.presenter;

import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ContentSlot;
import com.gwtplatform.mvp.client.annotations.ProxyEvent;
import com.gwtplatform.mvp.client.annotations.ProxyStandard;
import com.gwtplatform.mvp.client.proxy.Proxy;
import com.gwtplatform.mvp.client.proxy.RevealContentHandler;
import com.gwtplatform.mvp.client.proxy.RevealRootContentEvent;
import com.google.web.bindery.event.shared.EventBus;
import com.google.gwt.event.shared.GwtEvent.Type;
import com.google.gwt.user.client.History;
import com.google.inject.Inject;
import com.lemania.eprospects.client.CurrentUser;
import com.lemania.eprospects.client.event.ActionCompletedEvent;
import com.lemania.eprospects.client.event.ActionInProgressEvent;
import com.lemania.eprospects.client.event.AfterUserLogOutEvent;
import com.lemania.eprospects.client.event.DrawSchoolInterfaceEvent;
import com.lemania.eprospects.client.event.LoginAuthenticatedEvent;
import com.lemania.eprospects.client.event.PageAfterSelectEvent;
import com.lemania.eprospects.client.event.ActionCompletedEvent.ActionCompletedHandler;
import com.lemania.eprospects.client.event.ActionInProgressEvent.ActionInProgressHandler;
import com.lemania.eprospects.client.event.DrawSchoolInterfaceEvent.DrawSchoolInterfaceHandler;
import com.lemania.eprospects.client.event.LoginAuthenticatedEvent.LoginAuthenticatedHandler;
import com.lemania.eprospects.client.event.PageAfterSelectEvent.PageAfterSelectHandler;
import com.lemania.eprospects.client.place.NameTokens;
import com.lemania.eprospects.client.uihandler.MainPageUiHandler;

public class MainPagePresenter extends
		Presenter<MainPagePresenter.MyView, MainPagePresenter.MyProxy>
		implements 	MainPageUiHandler, LoginAuthenticatedHandler, 
					ActionInProgressHandler, ActionCompletedHandler, PageAfterSelectHandler,
					DrawSchoolInterfaceHandler {
	/**
	   * Child presenters can fire a RevealContentEvent with TYPE_SetMainContent to set themselves
	   * as children of this presenter.
	   */
	@ContentSlot
	public static final Type<RevealContentHandler<?>> TYPE_SetMainContent = new Type<RevealContentHandler<?>>();
	
	private CurrentUser currentUser;

	public interface MyView extends View, HasUiHandlers<MainPageUiHandler> {
		void showUserInfo(CurrentUser currentUser);
		void initializeUi(CurrentUser currentUser);
		void showProgressBar(boolean visible);
		void enableMainPanel(Boolean disabled);
		void showCurrentPageOnMenu( String tokenName );
		//
		void drawSchoolInterface(String schoolCode);
	}
	
	@ProxyStandard
	public interface MyProxy extends Proxy<MainPagePresenter> {
	}

	@Inject
	public MainPagePresenter(final EventBus eventBus, final MyView view,
			final MyProxy proxy) {
		super(eventBus, view, proxy);	
	}

	@Override
	protected void revealInParent() {
		RevealRootContentEvent.fire(this, this);
	}

	@Override
	protected void onBind() {
		super.onBind();
		
		// Thuan: attach Ui handler
		getView().setUiHandlers(this);
		//
		getView().initializeUi(currentUser);
	}

	
	/*
	 * */
	@Override
	protected void onReset() {
		//
		getView().initializeUi(currentUser);
	}

	
	/*
	 * */
	@Override
	public void showHomepage() {
		// TODO Auto-generated method stub
		History.newItem(NameTokens.homepage, true);
	}

	
	/*
	 * */
	@Override
	public void showEcoleList() {
		// TODO Auto-generated method stub
		History.newItem(NameTokens.ecolepage, true);
	}

	@Override
	public void showEcoleAdd() {
		// TODO Auto-generated method stub
		History.newItem(NameTokens.addecole, true);
	}

	@Override
	public void showCoursList() {
		// TODO Auto-generated method stub
		History.newItem(NameTokens.cours, true);
	}

	@Override
	public void showCoursAdd() {
		// TODO Auto-generated method stub
		History.newItem(NameTokens.coursadd, true);
	}

	@Override
	public void showProfessorList() {
		// TODO Auto-generated method stub
		History.newItem(NameTokens.profs, true);
	}

	@Override
	public void showProfessorAdd() {
		// TODO Auto-generated method stub
		History.newItem(NameTokens.profsadd, true);
	}

	@Override
	public void showTypeList() {
		// TODO Auto-generated method stub
		History.newItem(NameTokens.types, true);
	}

	@Override
	public void showTypeAdd() {
		// TODO Auto-generated method stub
		History.newItem(NameTokens.typesadd, true);
	}

	@Override
	public void showTimeInput() {
		// TODO Auto-generated method stub
		History.newItem(NameTokens.timeinput, true);
	}

	@Override
	public void showContact() {
		// TODO Auto-generated method stub
		History.newItem(NameTokens.contact);
	}
	
	@Override
	public void showUserManagement() {
		History.newItem(NameTokens.usermanagement);
	}

	@Override
	public void logOut() {
		if (currentUser == null)
			currentUser = new CurrentUser();
		currentUser.setLoggedIn(false);
		this.getEventBus().fireEvent(new LoginAuthenticatedEvent(currentUser));
		this.getEventBus().fireEvent(new AfterUserLogOutEvent());
	}

	@ProxyEvent
	@Override
	public void onLoginAuthenticated(LoginAuthenticatedEvent event) {
		currentUser = event.getCurrentUser();
		getView().initializeUi(currentUser);
	}

	@Override
	public void showExtractDataForm() {
		History.newItem(NameTokens.extractdata);
	}

	@Override
	public void showRptByDept() {
		History.newItem(NameTokens.rptbydept);		
	}
	
	@Override
	public void showRptBySchool() {
		History.newItem(NameTokens.rptbyschool);		
	}

	@Override
	public void showRptByMonth() {
		// 
		History.newItem(NameTokens.rpttimebymonth);
	}

	@ProxyEvent
	@Override
	public void onActionInProgress(ActionInProgressEvent event) {
		// 
		getView().showProgressBar(true);
		// getView().enableMainPanel(false);
	}

	@ProxyEvent
	@Override
	public void onActionCompleted(ActionCompletedEvent event) {
		// 
		getView().showProgressBar(false);
		// getView().enableMainPanel(true);
	}

	@Override
	public void showSettingsScreen() {
		History.newItem(NameTokens.settings);		
	}

	@Override
	public void showFrmPassword() {
		History.newItem(NameTokens.password);		
	}

	@Override
	public void showFrmStudents() {
		History.newItem(NameTokens.students);		
	}

	@Override
	public void showFrmCreateStudents() {
		History.newItem(NameTokens.studentadd);
	}

	@Override
	public void showBrancheList() {
		History.newItem(NameTokens.branchelist);
	}

	@Override
	public void showBrancheAdd() {
		History.newItem(NameTokens.brancheadd);		
	}

	@Override
	public void showFrmSubjectList() {
		History.newItem(NameTokens.subjectlist);		
	}

	@Override
	public void showFrmSubjectAdd() {
		History.newItem(NameTokens.subjectadd);		
	}

	@Override
	public void showClasseList() {
		History.newItem(NameTokens.classlist);	
	}

	@Override
	public void showClasseAdd() {
		History.newItem(NameTokens.classeadd);	
	}

	@Override
	public void showProfileManagement() {
		History.newItem(NameTokens.profilemgt);		
	}

	@Override
	public void showCreateBulletins() {
		History.newItem(NameTokens.bulletincreation);
	}

	@Override
	public void showFrmMarkInput() {
		History.newItem(NameTokens.markinput);
	}

	@Override
	public void showFrmBulletinViewDetail() {
		History.newItem(NameTokens.bulletindetail);
	}

	@Override
	public void showFrmBulletinManagement() {
		History.newItem(NameTokens.bulletinmanagement);
	}
		
	/*
	 * */
	@ProxyEvent
	@Override
	public void onPageAfterSelect(PageAfterSelectEvent event) {
		//
		getView().showCurrentPageOnMenu( event.getTokenName() );
	}

	/*
	 * */
	@ProxyEvent
	@Override
	public void onDrawSchoolInterface(DrawSchoolInterfaceEvent event) {
		//
		getView().drawSchoolInterface(event.getSchoolCode());
	}
}
