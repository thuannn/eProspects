package com.lemania.eprospects.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;
import com.lemania.eprospects.shared.BrancheProxy;

public interface FrmBrancheListUiHandler extends UiHandlers {
	//
	public void updateBranche(BrancheProxy branche, String brancheName, String brancheCoef, Boolean isActive);
}