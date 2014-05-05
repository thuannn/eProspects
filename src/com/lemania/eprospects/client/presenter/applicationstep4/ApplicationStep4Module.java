package com.lemania.eprospects.client.presenter.applicationstep4;

import com.gwtplatform.mvp.client.gin.AbstractPresenterModule;

public class ApplicationStep4Module extends AbstractPresenterModule {
	@Override
	protected void configure() {
		bindPresenter(ApplicationStep4Presenter.class,
				ApplicationStep4Presenter.MyView.class,
				ApplicationStep4View.class,
				ApplicationStep4Presenter.MyProxy.class);
	}
}
