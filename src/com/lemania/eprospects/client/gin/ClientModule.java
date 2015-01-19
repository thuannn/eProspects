package com.lemania.eprospects.client.gin;

import com.gwtplatform.mvp.client.gin.AbstractPresenterModule;
import com.gwtplatform.mvp.client.gin.DefaultModule;
import com.lemania.eprospects.client.place.DefaultPlace;
import com.lemania.eprospects.client.place.NameTokens;
import com.lemania.eprospects.client.place.SISPlaceManager;
import com.lemania.eprospects.client.presenter.UserManagementPresenter;
import com.lemania.eprospects.client.view.UserManagementView;
import com.lemania.eprospects.client.presenter.applicationhome.ApplicationHomeModule;
import com.lemania.eprospects.client.presenter.contact.ContactPresenter;
import com.lemania.eprospects.client.presenter.contact.ContactView;
import com.lemania.eprospects.client.presenter.mainpage.MainPagePresenter;
import com.lemania.eprospects.client.presenter.mainpage.MainPageView;

public class ClientModule extends AbstractPresenterModule {

	@Override
	protected void configure() {
		//
		install(new ApplicationHomeModule());
		
		// Singletons
		install(new DefaultModule(SISPlaceManager.class));
		
		// Set default page
		bindConstant().annotatedWith(DefaultPlace.class).to (
				NameTokens.applicationhome);
		
		//
		bindPresenter(MainPagePresenter.class, MainPagePresenter.MyView.class,
				MainPageView.class, MainPagePresenter.MyProxy.class);

		

		bindPresenter(ContactPresenter.class, ContactPresenter.MyView.class,
				ContactView.class, ContactPresenter.MyProxy.class);

		bindPresenter(UserManagementPresenter.class,
				UserManagementPresenter.MyView.class, UserManagementView.class,
				UserManagementPresenter.MyProxy.class);

	}
}