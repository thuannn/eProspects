package com.lemania.eprospects.client.presenter.applicationstep3;

import com.gwtplatform.mvp.client.gin.AbstractPresenterModule;

public class ApplicationStep3Module extends AbstractPresenterModule {
	@Override
	protected void configure() {
		bindPresenter(ApplicationStep3Presenter.class,
				ApplicationStep3Presenter.MyView.class,
				ApplicationStep3View.class,
				ApplicationStep3Presenter.MyProxy.class);
	}
}
