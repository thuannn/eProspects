package com.lemania.eprospects.client.presenter.applicationstep1;

import com.gwtplatform.mvp.client.gin.AbstractPresenterModule;

public class ApplicationStep1Module extends AbstractPresenterModule {
	@Override
	protected void configure() {
		bindPresenter(ApplicationStep1Presenter.class,
				ApplicationStep1Presenter.MyView.class,
				ApplicationStep1View.class,
				ApplicationStep1Presenter.MyProxy.class);
	}
}
