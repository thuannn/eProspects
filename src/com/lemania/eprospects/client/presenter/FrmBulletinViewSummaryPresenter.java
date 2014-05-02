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
import com.lemania.eprospects.client.event.DrawSchoolInterfaceEvent;
import com.lemania.eprospects.client.event.LoginAuthenticatedEvent;
import com.lemania.eprospects.client.event.PageAfterSelectEvent;
import com.lemania.eprospects.client.event.DrawSchoolInterfaceEvent.DrawSchoolInterfaceHandler;
import com.lemania.eprospects.client.event.LoginAuthenticatedEvent.LoginAuthenticatedHandler;
import com.lemania.eprospects.client.place.NameTokens;
import com.lemania.eprospects.client.presenter.MainPagePresenter;
import com.lemania.eprospects.client.uihandler.FrmBulletinViewSummaryUiHandler;
import com.lemania.eprospects.shared.BulletinProxy;
import com.lemania.eprospects.shared.BulletinSubjectProxy;
import com.lemania.eprospects.shared.ClasseProxy;
import com.lemania.eprospects.shared.service.BulletinRequestFactory;
import com.lemania.eprospects.shared.service.BulletinSubjectRequestFactory;
import com.lemania.eprospects.shared.service.ClasseRequestFactory;
import com.lemania.eprospects.shared.service.EventSourceRequestTransport;
import com.lemania.eprospects.shared.service.BulletinRequestFactory.BulletinRequestContext;
import com.lemania.eprospects.shared.service.BulletinSubjectRequestFactory.BulletinSubjectRequestContext;
import com.lemania.eprospects.shared.service.ClasseRequestFactory.ClasseRequestContext;
import com.gwtplatform.mvp.client.annotations.UseGatekeeper;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.Window;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.google.web.bindery.requestfactory.shared.Receiver;
import com.google.web.bindery.requestfactory.shared.ServerFailure;
import com.gwtplatform.mvp.client.proxy.RevealContentEvent;

public class FrmBulletinViewSummaryPresenter
		extends
		Presenter<FrmBulletinViewSummaryPresenter.MyView, FrmBulletinViewSummaryPresenter.MyProxy>
		implements FrmBulletinViewSummaryUiHandler, DrawSchoolInterfaceHandler, LoginAuthenticatedHandler {

	public interface MyView extends View, HasUiHandlers<FrmBulletinViewSummaryUiHandler> {
		//
		void resetForm();
		//
		void setClasseList(List<ClasseProxy> classes);
		//
		void setStudentListData(List<BulletinProxy> bulletins);
		//
		void drawBulletinSubjectList( List<BulletinSubjectProxy> subjects );
		//
		void saveRemarqueDirection( BulletinProxy bp );
		//
		void drawPierreViretInterface();
		//
		void drawDate(String date);
	}
	
	
	// Thuan
	CurrentUser currentUser;
		

	@ProxyCodeSplit
	@NameToken(NameTokens.bulletin)
	@UseGatekeeper(AdminGateKeeper.class)
	public interface MyProxy extends ProxyPlace<FrmBulletinViewSummaryPresenter> {
	}

	@Inject
	public FrmBulletinViewSummaryPresenter(final EventBus eventBus,
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
		
		// Thuan
		getView().setUiHandlers(this);
	}
	
	@Override
	protected void onReset(){
		super.onReset();
		//
		this.getEventBus().fireEvent( new PageAfterSelectEvent(NameTokens.bulletin));
		// Thuan
		getView().resetForm();
		loadClassList();
	}

	
	/**/
	private void loadClassList() {
		//
		ClasseRequestFactory rf = GWT.create(ClasseRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ClasseRequestContext rc = rf.classeRequest();
		rc.listAllActive().fire(new Receiver<List<ClasseProxy>>(){
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
	public void onClassChange(String classId) {
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

	
	/**/
	@Override
	public void onBulletinChange(String bulletinId) {
		//
		BulletinSubjectRequestFactory rf = GWT.create(BulletinSubjectRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		BulletinSubjectRequestContext rc = rf.bulletinSubjectRequest();
		rc.listAll( bulletinId ).fire(new Receiver<List<BulletinSubjectProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<BulletinSubjectProxy> response) {
				getView().drawBulletinSubjectList(response);
			}
		});
	}

	
	/*
	 * */
	@Override
	public void saveBulletinRemarques(String bulletinId, final String remarqueDirection) {
		//
		if (this.currentUser.isReadOnly()){
			Window.alert(NotificationTypes.readOnly);
			return;
		}
		
		//
		BulletinRequestFactory rf = GWT.create(BulletinRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		BulletinRequestContext rc = rf.bulletinRequest();
		rc.saveBulletinRemarqueDirection( bulletinId, remarqueDirection ).fire(new Receiver<BulletinProxy>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(BulletinProxy response) {
				getView().saveRemarqueDirection( response );
			}
		});
	}

	@ProxyEvent
	@Override
	public void onDrawSchoolInterface(DrawSchoolInterfaceEvent event) {
		//
		if (event.getSchoolCode() == NotificationTypes.pierreViret)
			getView().drawPierreViretInterface();
	}

	@ProxyEvent
	@Override
	public void onLoginAuthenticated(LoginAuthenticatedEvent event) {
		//
		this.currentUser = event.getCurrentUser();
		getView().drawDate(this.currentUser.getCurrentDay()+ "." 
					+ this.currentUser.getCurrentMonth() + "." 
					+ this.currentUser.getCurrentYear());
	}
}
