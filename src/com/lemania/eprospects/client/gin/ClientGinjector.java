package com.lemania.eprospects.client.gin;

import com.google.web.bindery.event.shared.EventBus;
import com.google.gwt.inject.client.AsyncProvider;
import com.google.gwt.inject.client.GinModules;
import com.google.gwt.inject.client.Ginjector;
import com.google.inject.Provider;
import com.gwtplatform.mvp.client.proxy.PlaceManager;
import com.lemania.eprospects.client.AdminGateKeeper;
import com.lemania.eprospects.client.LoggedInGatekeeper;
import com.lemania.eprospects.client.presenter.CoursAddPresenter;
import com.lemania.eprospects.client.presenter.CoursPresenter;
import com.lemania.eprospects.client.presenter.EcoleAddPresenter;
import com.lemania.eprospects.client.presenter.EcolePresenter;
import com.lemania.eprospects.client.presenter.FrmBrancheAddPresenter;
import com.lemania.eprospects.client.presenter.FrmBrancheListPresenter;
import com.lemania.eprospects.client.presenter.FrmBulletinCreationPresenter;
import com.lemania.eprospects.client.presenter.FrmBulletinManagementPresenter;
import com.lemania.eprospects.client.presenter.FrmBulletinViewDetailPresenter;
import com.lemania.eprospects.client.presenter.FrmBulletinViewSummaryPresenter;
import com.lemania.eprospects.client.presenter.FrmClasseAddPresenter;
import com.lemania.eprospects.client.presenter.FrmClasseListPresenter;
import com.lemania.eprospects.client.presenter.FrmEvaluationInputPresenter;
import com.lemania.eprospects.client.presenter.FrmEvaluationInputStudentPresenter;
import com.lemania.eprospects.client.presenter.FrmEvaluationReportListPresenter;
import com.lemania.eprospects.client.presenter.FrmMarkInputPresenter;
import com.lemania.eprospects.client.presenter.FrmPasswordPresenter;
import com.lemania.eprospects.client.presenter.FrmSubjectAddPresenter;
import com.lemania.eprospects.client.presenter.FrmSubjectListPresenter;
import com.lemania.eprospects.client.presenter.HomePresenter;
import com.lemania.eprospects.client.presenter.ProfileManagementPresenter;
import com.lemania.eprospects.client.presenter.ProfsAddPresenter;
import com.lemania.eprospects.client.presenter.ProfsPresenter;
import com.lemania.eprospects.client.presenter.SettingsPresenter;
import com.lemania.eprospects.client.presenter.StudentAddPresenter;
import com.lemania.eprospects.client.presenter.StudentPresenter;
import com.lemania.eprospects.client.presenter.UserManagementPresenter;
import com.lemania.eprospects.client.presenter.applicationfinal.ApplicationFinalPresenter;
import com.lemania.eprospects.client.presenter.applicationhome.ApplicationHomePresenter;
import com.lemania.eprospects.client.presenter.applicationpayment.ApplicationPaymentPresenter;
import com.lemania.eprospects.client.presenter.applicationstep1.ApplicationStep1Presenter;
import com.lemania.eprospects.client.presenter.applicationstep2.ApplicationStep2Presenter;
import com.lemania.eprospects.client.presenter.applicationstep3.ApplicationStep3Presenter;
import com.lemania.eprospects.client.presenter.applicationstep4.ApplicationStep4Presenter;
import com.lemania.eprospects.client.presenter.applicationstep5.ApplicationStep5Presenter;
import com.lemania.eprospects.client.presenter.contact.ContactPresenter;
import com.lemania.eprospects.client.presenter.mainpage.MainPagePresenter;

@GinModules({ ClientModule.class })
public interface ClientGinjector extends Ginjector {
	
	EventBus getEventBus();
	
	Provider<MainPagePresenter> getMainPagePresenter();
	
	AsyncProvider<HomePresenter> getHomePresenter();
	
	PlaceManager getPlaceManager();

	AsyncProvider<EcolePresenter> getEcolePresenter();

	AsyncProvider<EcoleAddPresenter> getEcoleAddPresenter();

	AsyncProvider<ProfsPresenter> getProfsPresenter();

	AsyncProvider<ProfsAddPresenter> getProfsAddPresenter();

	AsyncProvider<ContactPresenter> getContactPresenter();	
	
	// Thuan
	LoggedInGatekeeper getLoggedInGatekeeper();
	AdminGateKeeper getAdminGateKeeper();

	AsyncProvider<UserManagementPresenter> getUserManagementPresenter();

	AsyncProvider<SettingsPresenter> getSettingsPresenter();

	AsyncProvider<FrmPasswordPresenter> getFrmPasswordPresenter();

	AsyncProvider<StudentPresenter> getStudentPresenter();

	AsyncProvider<StudentAddPresenter> getStudentAddPresenter();

	AsyncProvider<FrmBrancheListPresenter> getFrmBrancheListPresenter();

	AsyncProvider<FrmBrancheAddPresenter> getFrmBrancheAddPresenter();

	AsyncProvider<FrmSubjectListPresenter> getSubjectListPresenter();

	AsyncProvider<FrmSubjectAddPresenter> getFrmSubjectAddPresenter();

	AsyncProvider<CoursAddPresenter> getCoursAddPresenter();

	AsyncProvider<CoursPresenter> getCoursPresenter();

	AsyncProvider<FrmClasseListPresenter> getFrmClasseListPresenter();

	AsyncProvider<FrmClasseAddPresenter> getFrmClasseAddPresenter();

	AsyncProvider<ProfileManagementPresenter> getProfileManagementPresenter();

	AsyncProvider<FrmBulletinCreationPresenter> getFrmBulletinCreationPresenter();

	AsyncProvider<FrmMarkInputPresenter> getFrmMarkInputPresenter();

	AsyncProvider<FrmBulletinViewDetailPresenter> getFrmBulletinViewDetailPresenter();

	AsyncProvider<FrmBulletinManagementPresenter> getFrmBulletinManagementPresenter();

	AsyncProvider<FrmBulletinViewSummaryPresenter> getFrmBulletinViewSummaryPresenter();

	AsyncProvider<FrmEvaluationReportListPresenter> getFrmEvaluationReportListPresenter();

	AsyncProvider<FrmEvaluationInputPresenter> getFrmEvaluationInputPresenter();

	AsyncProvider<FrmEvaluationInputStudentPresenter> getFrmEvaluationInputStudentPresenter();
	
	//
	
	AsyncProvider<ApplicationHomePresenter> getApplicationHomePresenter();
	
	AsyncProvider<ApplicationStep1Presenter> getApplicationStep1Presenter();
	
	AsyncProvider<ApplicationStep2Presenter> getApplicationStep2Presenter();
	
	AsyncProvider<ApplicationStep3Presenter> getApplicationStep3Presenter();
	
	AsyncProvider<ApplicationStep4Presenter> getApplicationStep4Presenter();
	
	AsyncProvider<ApplicationStep5Presenter> getApplicationStep5Presenter();
	
	AsyncProvider<ApplicationPaymentPresenter> getApplicationPaymentPresenter();
	
	AsyncProvider<ApplicationFinalPresenter> getApplicationFinalPresenter();
}
