package com.lemania.eprospects.client.presenter.applicationstep5;

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
import com.lemania.eprospects.client.event.ApplicationStep5CompletedEvent;
import com.lemania.eprospects.client.event.GotoPreviousPageEvent;
import com.lemania.eprospects.client.presenter.mainpage.MainPagePresenter;
import com.lemania.eprospects.client.place.NameTokens;

public class ApplicationStep5Presenter
		extends
		Presenter<ApplicationStep5Presenter.MyView, ApplicationStep5Presenter.MyProxy>
		implements ApplicationStep5UiHandlers {
	interface MyView extends View, HasUiHandlers<ApplicationStep5UiHandlers> {
	}

	@ContentSlot
	public static final Type<RevealContentHandler<?>> SLOT_ApplicationStep5 = new Type<RevealContentHandler<?>>();

	@NameToken(NameTokens.applicationstep5)
	@ProxyCodeSplit
	public interface MyProxy extends ProxyPlace<ApplicationStep5Presenter> {
	}

	@Inject
	public ApplicationStep5Presenter(EventBus eventBus, MyView view,
			MyProxy proxy) {
		super(eventBus, view, proxy, MainPagePresenter.TYPE_SetMainContent);

		getView().setUiHandlers(this);
	}

	protected void onBind() {
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
		getEventBus().fireEvent( new ApplicationStep5CompletedEvent() );
	}

	/*
	 * */
	@Override
	public void previousStep() {
		//
		getEventBus().fireEvent( new GotoPreviousPageEvent(History.getToken()) );
	}

}