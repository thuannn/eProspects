package com.lemania.eprospects.client.presenter.applicationpayment;

import com.gwtplatform.mvp.client.gin.AbstractPresenterModule;

public class ApplicationPaymentModule extends AbstractPresenterModule {
	@Override
	protected void configure() {
		bindPresenter(ApplicationPaymentPresenter.class,
				ApplicationPaymentPresenter.MyView.class,
				ApplicationPaymentView.class,
				ApplicationPaymentPresenter.MyProxy.class);
	}
}
