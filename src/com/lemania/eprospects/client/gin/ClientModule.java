package com.lemania.eprospects.client.gin;

import com.gwtplatform.mvp.client.gin.AbstractPresenterModule;
import com.gwtplatform.mvp.client.gin.DefaultModule;
import com.lemania.eprospects.client.place.DefaultPlace;
import com.lemania.eprospects.client.place.NameTokens;
import com.lemania.eprospects.client.place.SISPlaceManager;
import com.lemania.eprospects.client.presenter.ContactPresenter;
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
import com.lemania.eprospects.client.presenter.MainPagePresenter;
import com.lemania.eprospects.client.presenter.ProfileManagementPresenter;
import com.lemania.eprospects.client.presenter.ProfsAddPresenter;
import com.lemania.eprospects.client.presenter.ProfsPresenter;
import com.lemania.eprospects.client.presenter.SettingsPresenter;
import com.lemania.eprospects.client.presenter.StudentAddPresenter;
import com.lemania.eprospects.client.presenter.StudentPresenter;
import com.lemania.eprospects.client.presenter.UserManagementPresenter;
import com.lemania.eprospects.client.view.ContactView;
import com.lemania.eprospects.client.view.CoursAddView;
import com.lemania.eprospects.client.view.CoursView;
import com.lemania.eprospects.client.view.EcoleAddView;
import com.lemania.eprospects.client.view.EcoleView;
import com.lemania.eprospects.client.view.FrmBrancheAddView;
import com.lemania.eprospects.client.view.FrmBrancheListView;
import com.lemania.eprospects.client.view.FrmBulletinCreationView;
import com.lemania.eprospects.client.view.FrmBulletinManagementView;
import com.lemania.eprospects.client.view.FrmBulletinViewDetailView;
import com.lemania.eprospects.client.view.FrmBulletinViewSummaryView;
import com.lemania.eprospects.client.view.FrmClasseAddView;
import com.lemania.eprospects.client.view.FrmClasseListView;
import com.lemania.eprospects.client.view.FrmEvaluationInputStudentView;
import com.lemania.eprospects.client.view.FrmEvaluationInputView;
import com.lemania.eprospects.client.view.FrmEvaluationReportListView;
import com.lemania.eprospects.client.view.FrmMarkInputView;
import com.lemania.eprospects.client.view.FrmPasswordView;
import com.lemania.eprospects.client.view.FrmSubjectAddView;
import com.lemania.eprospects.client.view.FrmSubjectListView;
import com.lemania.eprospects.client.view.HomeView;
import com.lemania.eprospects.client.view.MainPageView;
import com.lemania.eprospects.client.view.ProfileManagementView;
import com.lemania.eprospects.client.view.ProfsAddView;
import com.lemania.eprospects.client.view.ProfsView;
import com.lemania.eprospects.client.view.SettingsView;
import com.lemania.eprospects.client.view.StudentAddView;
import com.lemania.eprospects.client.view.StudentView;
import com.lemania.eprospects.client.view.UserManagementView;

public class ClientModule extends AbstractPresenterModule {

	@Override
	protected void configure() {
		// Singletons
		install(new DefaultModule(SISPlaceManager.class));
		
		// Set DefaultPlace to homepage
		bindConstant().annotatedWith(DefaultPlace.class).to(
				NameTokens.homepage);
		
		bindPresenter(MainPagePresenter.class, MainPagePresenter.MyView.class,
				MainPageView.class, MainPagePresenter.MyProxy.class);

		bindPresenter(HomePresenter.class, HomePresenter.MyView.class,
				HomeView.class, HomePresenter.MyProxy.class);

		bindPresenter(EcolePresenter.class, EcolePresenter.MyView.class,
				EcoleView.class, EcolePresenter.MyProxy.class);

		bindPresenter(EcoleAddPresenter.class, EcoleAddPresenter.MyView.class,
				EcoleAddView.class, EcoleAddPresenter.MyProxy.class);

		bindPresenter(ProfsPresenter.class, ProfsPresenter.MyView.class,
				ProfsView.class, ProfsPresenter.MyProxy.class);

		bindPresenter(ProfsAddPresenter.class, ProfsAddPresenter.MyView.class,
				ProfsAddView.class, ProfsAddPresenter.MyProxy.class);

		bindPresenter(ContactPresenter.class, ContactPresenter.MyView.class,
				ContactView.class, ContactPresenter.MyProxy.class);

		bindPresenter(UserManagementPresenter.class,
				UserManagementPresenter.MyView.class, UserManagementView.class,
				UserManagementPresenter.MyProxy.class);

		bindPresenter(SettingsPresenter.class, SettingsPresenter.MyView.class,
				SettingsView.class, SettingsPresenter.MyProxy.class);

		bindPresenter(FrmPasswordPresenter.class,
				FrmPasswordPresenter.MyView.class, FrmPasswordView.class,
				FrmPasswordPresenter.MyProxy.class);

		bindPresenter(StudentPresenter.class, StudentPresenter.MyView.class,
				StudentView.class, StudentPresenter.MyProxy.class);

		bindPresenter(StudentAddPresenter.class,
				StudentAddPresenter.MyView.class, StudentAddView.class,
				StudentAddPresenter.MyProxy.class);

		bindPresenter(FrmBrancheListPresenter.class,
				FrmBrancheListPresenter.MyView.class, FrmBrancheListView.class,
				FrmBrancheListPresenter.MyProxy.class);

		bindPresenter(FrmBrancheAddPresenter.class,
				FrmBrancheAddPresenter.MyView.class, FrmBrancheAddView.class,
				FrmBrancheAddPresenter.MyProxy.class);

		bindPresenter(FrmSubjectListPresenter.class,
				FrmSubjectListPresenter.MyView.class, FrmSubjectListView.class,
				FrmSubjectListPresenter.MyProxy.class);

		bindPresenter(FrmSubjectAddPresenter.class,
				FrmSubjectAddPresenter.MyView.class, FrmSubjectAddView.class,
				FrmSubjectAddPresenter.MyProxy.class);

		bindPresenter(CoursAddPresenter.class, CoursAddPresenter.MyView.class,
				CoursAddView.class, CoursAddPresenter.MyProxy.class);

		bindPresenter(CoursPresenter.class, CoursPresenter.MyView.class,
				CoursView.class, CoursPresenter.MyProxy.class);

		bindPresenter(FrmClasseListPresenter.class,
				FrmClasseListPresenter.MyView.class, FrmClasseListView.class,
				FrmClasseListPresenter.MyProxy.class);

		bindPresenter(FrmClasseAddPresenter.class,
				FrmClasseAddPresenter.MyView.class, FrmClasseAddView.class,
				FrmClasseAddPresenter.MyProxy.class);

		bindPresenter(ProfileManagementPresenter.class,
				ProfileManagementPresenter.MyView.class,
				ProfileManagementView.class,
				ProfileManagementPresenter.MyProxy.class);

		bindPresenter(FrmBulletinCreationPresenter.class,
				FrmBulletinCreationPresenter.MyView.class,
				FrmBulletinCreationView.class,
				FrmBulletinCreationPresenter.MyProxy.class);

		bindPresenter(FrmMarkInputPresenter.class,
				FrmMarkInputPresenter.MyView.class, FrmMarkInputView.class,
				FrmMarkInputPresenter.MyProxy.class);

		bindPresenter(FrmBulletinViewDetailPresenter.class,
				FrmBulletinViewDetailPresenter.MyView.class,
				FrmBulletinViewDetailView.class,
				FrmBulletinViewDetailPresenter.MyProxy.class);

		bindPresenter(FrmBulletinManagementPresenter.class,
				FrmBulletinManagementPresenter.MyView.class,
				FrmBulletinManagementView.class,
				FrmBulletinManagementPresenter.MyProxy.class);

		bindPresenter(FrmBulletinViewSummaryPresenter.class,
				FrmBulletinViewSummaryPresenter.MyView.class,
				FrmBulletinViewSummaryView.class,
				FrmBulletinViewSummaryPresenter.MyProxy.class);

		bindPresenter(FrmEvaluationReportListPresenter.class,
				FrmEvaluationReportListPresenter.MyView.class,
				FrmEvaluationReportListView.class,
				FrmEvaluationReportListPresenter.MyProxy.class);

		bindPresenter(FrmEvaluationInputPresenter.class,
				FrmEvaluationInputPresenter.MyView.class,
				FrmEvaluationInputView.class,
				FrmEvaluationInputPresenter.MyProxy.class);

		bindPresenter(FrmEvaluationInputStudentPresenter.class,
				FrmEvaluationInputStudentPresenter.MyView.class,
				FrmEvaluationInputStudentView.class,
				FrmEvaluationInputStudentPresenter.MyProxy.class);
	}
}