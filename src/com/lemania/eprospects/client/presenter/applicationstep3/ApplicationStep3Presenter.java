package com.lemania.eprospects.client.presenter.applicationstep3;

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
import com.lemania.eprospects.client.event.ApplicationStep3CompletedEvent;
import com.lemania.eprospects.client.presenter.mainpage.MainPagePresenter;
import com.lemania.eprospects.client.place.NameTokens;

public class ApplicationStep3Presenter
		extends
		Presenter<ApplicationStep3Presenter.MyView, ApplicationStep3Presenter.MyProxy>
		implements ApplicationStep3UiHandlers {
	interface MyView extends View, HasUiHandlers<ApplicationStep3UiHandlers> {
	}

	@ContentSlot
	public static final Type<RevealContentHandler<?>> SLOT_ApplicationStep3 = new Type<RevealContentHandler<?>>();

	@NameToken(NameTokens.applicationstep3)
	@ProxyCodeSplit
	public interface MyProxy extends ProxyPlace<ApplicationStep3Presenter> {
	}

	@Inject
	public ApplicationStep3Presenter(EventBus eventBus, MyView view,
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
		getEventBus().fireEvent( new ApplicationStep3CompletedEvent() );
	}

}
