package com.lemania.eprospects.client.view;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.eprospects.client.presenter.ProfsAddPresenter;
import com.lemania.eprospects.client.uihandler.ProfessorAddUiHandler;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.CheckBox;
import com.google.gwt.event.dom.client.KeyUpEvent;

public class ProfsAddView extends ViewWithUiHandlers<ProfessorAddUiHandler> implements ProfsAddPresenter.MyView {

	private final Widget widget;

	public interface Binder extends UiBinder<Widget, ProfsAddView> {
	}

	@Inject
	public ProfsAddView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	
	@UiField Button cmdCancel;
	@UiField Button cmdAdd;
	@UiField TextBox txtProfName;
	@UiField CheckBox chkProfStatus;
	@UiField TextBox txtProfEmail; 
	@UiField TextBox txtProfFirstName;
	
	/*
	 * */
	@UiHandler("cmdCancel")
	public void onCmdCancelClicked(ClickEvent event){
		if (getUiHandlers() != null)
			getUiHandlers().professorAddCancelled();
	}
	
	/*
	 * */
	@UiHandler("cmdAdd")
	public void onCmdAddClicked(ClickEvent event){
		if (getUiHandlers() != null)
			getUiHandlers().professorAdd(
					txtProfName.getText().trim() + " " + txtProfFirstName.getText().trim(), 
					txtProfEmail.getText().trim(), 
					chkProfStatus.getValue());
	}

	/*
	 * */
	@Override
	public void disableUiAfterAdd() {
		cmdAdd.setEnabled(false);
	}

	/*
	 * */
	@Override
	public void initializeUi() {
		// TODO Clear prof name and enable Add button
		txtProfName.setText("");
		txtProfFirstName.setText("");
		txtProfEmail.setText("");
		cmdAdd.setEnabled(true);
	}	

	/*
	 * */
	private void updateEmail() {
		//
		if (txtProfFirstName.getText().equals(""))
			txtProfEmail.setText( txtProfName.getText().trim().toLowerCase() + "@eprofil.ch");
		else
			if (txtProfName.getText().equals(""))
				txtProfEmail.setText( txtProfFirstName.getText().substring(0, 1).toLowerCase() + "@eprofil.ch");
			else
				txtProfEmail.setText( txtProfFirstName.getText().substring(0, 1).toLowerCase() + "." + txtProfName.getText().trim().toLowerCase() + "@eprofil.ch");
	}
	
	@UiHandler("txtProfName")
	void onTxtProfNameKeyUp(KeyUpEvent event) {		
			updateEmail();
	}
	
	@UiHandler("txtProfFirstName")
	void onTxtProfFirstNameKeyUp(KeyUpEvent event) {		
			updateEmail();
	}
}
