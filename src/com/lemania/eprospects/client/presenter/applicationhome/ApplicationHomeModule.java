package com.lemania.eprospects.client.presenter.applicationhome;

import com.gwtplatform.mvp.client.gin.AbstractPresenterModule;
import com.lemania.eprospects.client.presenter.applicationstep1.ApplicationStep1Module;
import com.lemania.eprospects.client.presenter.applicationstep2.ApplicationStep2Module;
import com.lemania.eprospects.client.presenter.applicationstep3.ApplicationStep3Module;
import com.lemania.eprospects.client.presenter.applicationstep4.ApplicationStep4Module;
import com.lemania.eprospects.client.presenter.applicationstep5.ApplicationStep5Module;
import com.lemania.eprospects.client.presenter.applicationpayment.ApplicationPaymentModule;
import com.lemania.eprospects.client.presenter.applicationfinal.ApplicationFinalModule;

public class ApplicationHomeModule extends AbstractPresenterModule {
	@Override
	protected void configure() {
		install(new ApplicationFinalModule());
		install(new ApplicationPaymentModule());
		install(new ApplicationStep5Module());
		install(new ApplicationStep4Module());
		install(new ApplicationStep3Module());
		install(new ApplicationStep2Module());
		install(new ApplicationStep1Module());
		bindPresenter(ApplicationHomePresenter.class,
				ApplicationHomePresenter.MyView.class,
				ApplicationHomeView.class,
				ApplicationHomePresenter.MyProxy.class);
	}
}
