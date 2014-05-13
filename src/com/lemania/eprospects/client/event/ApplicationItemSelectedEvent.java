package com.lemania.eprospects.client.event;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.EventHandler;
import com.google.gwt.event.shared.HasHandlers;
import com.google.gwt.event.shared.HandlerRegistration;
import com.lemania.eprospects.client.ApplicationItem;

/*
 * This event is implemented in ApplicationPaymentPresenter to save the application items
 * 
 * */

public class ApplicationItemSelectedEvent extends
		GwtEvent<ApplicationItemSelectedEvent.ApplicationItemSelectedHandler> {
	
	//
	private ApplicationItem ai;

	public static Type<ApplicationItemSelectedHandler> TYPE = new Type<ApplicationItemSelectedHandler>();

	public interface ApplicationItemSelectedHandler extends EventHandler {
		void onApplicationItemSelected(ApplicationItemSelectedEvent event);
	}

	public interface ApplicationItemSelectedHasHandlers extends HasHandlers {
		HandlerRegistration addApplicationItemSelectedHandler(
				ApplicationItemSelectedHandler handler);
	}

	public ApplicationItemSelectedEvent() {
	}
	
	public ApplicationItemSelectedEvent(ApplicationItem ai) {
		this.ai = ai;
	}

	@Override
	protected void dispatch(ApplicationItemSelectedHandler handler) {
		handler.onApplicationItemSelected(this);
	}

	@Override
	public Type<ApplicationItemSelectedHandler> getAssociatedType() {
		return TYPE;
	}

	public static Type<ApplicationItemSelectedHandler> getType() {
		return TYPE;
	}

	public static void fire(HasHandlers source) {
		source.fireEvent(new ApplicationItemSelectedEvent());
	}

	public ApplicationItem getAi() {
		return ai;
	}

	public void setAi(ApplicationItem ai) {
		this.ai = ai;
	}
}
