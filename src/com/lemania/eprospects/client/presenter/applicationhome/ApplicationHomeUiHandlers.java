package com.lemania.eprospects.client.presenter.applicationhome;

import com.gwtplatform.mvp.client.UiHandlers;

public interface ApplicationHomeUiHandlers extends UiHandlers {
	//
	void startApplication( String emailAddress, boolean createNew, boolean editOne, String appId );
}
