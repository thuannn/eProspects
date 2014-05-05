package com.lemania.eprospects.client.presenter.applicationpayment;

import javax.inject.Inject;

import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.IsWidget;
import com.google.gwt.user.client.ui.SimplePanel;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewImpl;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;

public class ApplicationPaymentView extends
		ViewWithUiHandlers<ApplicationPaymentUiHandlers> implements
		ApplicationPaymentPresenter.MyView {
	interface Binder extends UiBinder<Widget, ApplicationPaymentView> {
	}

	@UiField
	SimplePanel main;

	@Inject
	ApplicationPaymentView(Binder uiBinder) {
		initWidget(uiBinder.createAndBindUi(this));
	}

	@Override
	public void setInSlot(Object slot, IsWidget content) {
		if (slot == ApplicationPaymentPresenter.SLOT_ApplicationPayment) {
			main.setWidget(content);
		} else {
			super.setInSlot(slot, content);
		}
	}
}
