package com.lemania.eprospects.client.presenter.contact;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.TextArea;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.event.dom.client.ClickEvent;

public class ContactView extends ViewWithUiHandlers<ContactUiHandler> implements ContactPresenter.MyView {

	private final Widget widget;

	public interface Binder extends UiBinder<Widget, ContactView> {
	}

	@Inject
	public ContactView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	
	@UiField TextBox txtLastName;
	@UiField TextBox txtFirstName;
	@UiField TextArea txtMessage;
	@UiField Button cmdSend;
	@UiField TextBox txtEmail;
	
	@UiHandler("cmdSend")
	void onCmdSendClick(ClickEvent event) {
		if (getUiHandlers() != null)
			getUiHandlers().sendMessage( "thuannn@gmail.com", 
					"Contact - Lemania Summer School", txtLastName.getText() + "\n\n" + txtFirstName.getText() + "\n\n" + txtEmail.getText() + "\n\n" + txtMessage.getText());
	}

	@Override
	public void resetForm() {
		//
		txtLastName.setText("");
		txtFirstName.setText("");
		txtMessage.setText("");
		txtEmail.setText("");
	}
}
