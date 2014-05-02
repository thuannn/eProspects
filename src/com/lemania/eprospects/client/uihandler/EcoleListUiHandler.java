package com.lemania.eprospects.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;
import com.lemania.eprospects.shared.EcoleProxy;

public interface EcoleListUiHandler extends UiHandlers {
	void updateEcoleStatus(EcoleProxy ecole, Boolean value);
}
