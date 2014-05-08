package com.lemania.eprospects.client.presenter.applicationstep1;

import com.google.gwt.event.shared.GwtEvent.Type;
import com.google.gwt.user.client.History;
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
import com.lemania.eprospects.client.event.ApplicationStep1CompletedEvent;
import com.lemania.eprospects.client.event.DrawSchoolInterfaceEvent;
import com.lemania.eprospects.client.event.GotoPreviousPageEvent;
import com.lemania.eprospects.client.presenter.mainpage.MainPagePresenter;
import com.lemania.eprospects.client.place.NameTokens;

public class ApplicationStep1Presenter
		extends
		Presenter<ApplicationStep1Presenter.MyView, ApplicationStep1Presenter.MyProxy>
		implements ApplicationStep1UiHandlers {
	interface MyView extends View, HasUiHandlers<ApplicationStep1UiHandlers> {
	}

	@ContentSlot
	public static final Type<RevealContentHandler<?>> SLOT_ApplicationStep1 = new Type<RevealContentHandler<?>>();

	@NameToken(NameTokens.applicationstep1)
	@ProxyCodeSplit
	public interface MyProxy extends ProxyPlace<ApplicationStep1Presenter> {
	}

	@Inject
	public ApplicationStep1Presenter(EventBus eventBus, MyView view,
			MyProxy proxy) {
		super(eventBus, view, proxy, MainPagePresenter.TYPE_SetMainContent);

		getView().setUiHandlers(this);
	}

	/*
	 * Call the DrawSchoolInterfaceEvent to show the appropriate logo
	 * */
	protected void onBind() {
		//
		super.onBind();
	}

	protected void onReset() {
		super.onReset();
	}

	/*
	 * */
	@Override
	public void nextStep() {
		//
		getEventBus().fireEvent( new ApplicationStep1CompletedEvent() );
	}

	/*
	 * */
	@Override
	public void previousStep() {
		//
		getEventBus().fireEvent( new GotoPreviousPageEvent(History.getToken()) );
	}

}
