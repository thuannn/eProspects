package com.lemania.eprospects.client.presenter.contact;

import com.gwtplatform.mvp.client.UiHandlers;

public interface ContactUiHandler extends UiHandlers {
	//
	void sendMessage( String email, String message, String subject);
	//
	void sendMessageSummerTeam( String message, String subject);
}
