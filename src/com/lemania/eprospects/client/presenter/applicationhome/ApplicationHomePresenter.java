package com.lemania.eprospects.client.presenter.applicationhome;

import com.google.gwt.event.shared.GwtEvent.Type;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ContentSlot;
import com.gwtplatform.mvp.client.annotations.ProxyStandard;
import com.gwtplatform.mvp.client.proxy.Proxy;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.gwtplatform.mvp.client.proxy.RevealContentHandler;
import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.proxy.PlaceRequest;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.lemania.eprospects.client.event.ApplicationStartEvent;
import com.lemania.eprospects.client.event.DrawSchoolInterfaceEvent;
import com.lemania.eprospects.client.presenter.mainpage.MainPagePresenter;
import com.lemania.eprospects.client.place.NameTokens;

public class ApplicationHomePresenter
		extends
		Presenter<ApplicationHomePresenter.MyView, ApplicationHomePresenter.MyProxy>
		implements ApplicationHomeUiHandlers {
	interface MyView extends View, HasUiHandlers<ApplicationHomeUiHandlers> {
		//
		void initializeUI();
	}

	@ContentSlot
	public static final Type<RevealContentHandler<?>> SLOT_ApplicationHome = new Type<RevealContentHandler<?>>();

	@NameToken(NameTokens.applicationhome)
	@ProxyCodeSplit
	public interface MyProxy extends ProxyPlace<ApplicationHomePresenter> {
	}

	@Inject
	public ApplicationHomePresenter(EventBus eventBus, MyView view,
			MyProxy proxy) {
		super(eventBus, view, proxy, MainPagePresenter.TYPE_SetMainContent);

		getView().setUiHandlers(this);
	}

	protected void onBind() {
		//
		super.onBind();
		//
		getEventBus().fireEvent( new DrawSchoolInterfaceEvent() );
	}

	protected void onReset() {
		//
		super.onReset();
		//
		getView().initializeUI();
	}

	@Override
	public void startApplication(String emailAddress) {
		//
		getEventBus().fireEvent( new ApplicationStartEvent() );
	}

}
