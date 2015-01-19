package com.lemania.eprospects.client.gin;

import com.google.web.bindery.event.shared.EventBus;
import com.google.gwt.inject.client.AsyncProvider;
import com.google.gwt.inject.client.GinModules;
import com.google.gwt.inject.client.Ginjector;
import com.google.inject.Provider;
import com.gwtplatform.mvp.client.proxy.PlaceManager;
import com.lemania.eprospects.client.AdminGateKeeper;
import com.lemania.eprospects.client.LoggedInGatekeeper;
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
	
	PlaceManager getPlaceManager();
	
	Provider<MainPagePresenter> getMainPagePresenter();
	
	AsyncProvider<ContactPresenter> getContactPresenter();	
	
	// Thuan
	LoggedInGatekeeper getLoggedInGatekeeper();
	AdminGateKeeper getAdminGateKeeper();

	AsyncProvider<UserManagementPresenter> getUserManagementPresenter();
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
