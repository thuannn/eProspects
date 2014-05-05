package com.lemania.eprospects.client.presenter.applicationfinal;

import com.gwtplatform.mvp.client.gin.AbstractPresenterModule;

public class ApplicationFinalModule extends AbstractPresenterModule {
	@Override
	protected void configure() {
		bindPresenter(ApplicationFinalPresenter.class,
				ApplicationFinalPresenter.MyView.class,
				ApplicationFinalView.class,
				ApplicationFinalPresenter.MyProxy.class);
	}
}
