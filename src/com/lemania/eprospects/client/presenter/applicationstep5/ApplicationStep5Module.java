package com.lemania.eprospects.client.presenter.applicationstep5;

import com.gwtplatform.mvp.client.gin.AbstractPresenterModule;

public class ApplicationStep5Module extends AbstractPresenterModule {
	@Override
	protected void configure() {
		bindPresenter(ApplicationStep5Presenter.class,
				ApplicationStep5Presenter.MyView.class,
				ApplicationStep5View.class,
				ApplicationStep5Presenter.MyProxy.class);
	}
}
