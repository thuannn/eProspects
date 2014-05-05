package com.lemania.eprospects.client.event;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.EventHandler;
import com.google.gwt.event.shared.HasHandlers;
import com.google.gwt.event.shared.HandlerRegistration;

public class ApplicationFinalEvent extends
		GwtEvent<ApplicationFinalEvent.ApplicationFinalHandler> {

	public static Type<ApplicationFinalHandler> TYPE = new Type<ApplicationFinalHandler>();

	public interface ApplicationFinalHandler extends EventHandler {
		void onApplicationFinal(ApplicationFinalEvent event);
	}

	public interface ApplicationFinalHasHandlers extends HasHandlers {
		HandlerRegistration addApplicationFinalHandler(
				ApplicationFinalHandler handler);
	}

	public ApplicationFinalEvent() {
	}

	@Override
	protected void dispatch(ApplicationFinalHandler handler) {
		handler.onApplicationFinal(this);
	}

	@Override
	public Type<ApplicationFinalHandler> getAssociatedType() {
		return TYPE;
	}

	public static Type<ApplicationFinalHandler> getType() {
		return TYPE;
	}

	public static void fire(HasHandlers source) {
		source.fireEvent(new ApplicationFinalEvent());
	}
}
