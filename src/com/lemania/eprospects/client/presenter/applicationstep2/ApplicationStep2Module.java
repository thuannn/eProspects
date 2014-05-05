package com.lemania.eprospects.client.presenter.applicationstep2;

import com.gwtplatform.mvp.client.gin.AbstractPresenterModule;

public class ApplicationStep2Module extends AbstractPresenterModule {
	@Override
	protected void configure() {
		bindPresenter(ApplicationStep2Presenter.class,
				ApplicationStep2Presenter.MyView.class,
				ApplicationStep2View.class,
				ApplicationStep2Presenter.MyProxy.class);
	}
}
