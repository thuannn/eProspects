package com.lemania.eprospects.client.presenter.applicationfinal;

import javax.inject.Inject;

import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.IsWidget;
import com.google.gwt.user.client.ui.SimplePanel;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewImpl;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;

public class ApplicationFinalView extends
		ViewWithUiHandlers<ApplicationFinalUiHandlers> implements
		ApplicationFinalPresenter.MyView {
	interface Binder extends UiBinder<Widget, ApplicationFinalView> {
	}

	@UiField
	SimplePanel main;

	@Inject
	ApplicationFinalView(Binder uiBinder) {
		initWidget(uiBinder.createAndBindUi(this));
	}

	@Override
	public void setInSlot(Object slot, IsWidget content) {
		if (slot == ApplicationFinalPresenter.SLOT_ApplicationFinal) {
			main.setWidget(content);
		} else {
			super.setInSlot(slot, content);
		}
	}
}
