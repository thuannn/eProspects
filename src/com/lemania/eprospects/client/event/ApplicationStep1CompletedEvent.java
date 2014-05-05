package com.lemania.eprospects.client.event;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.EventHandler;
import com.google.gwt.event.shared.HasHandlers;
import com.google.gwt.event.shared.HandlerRegistration;

public class ApplicationStep1CompletedEvent
		extends
		GwtEvent<ApplicationStep1CompletedEvent.ApplicationStep1CompletedHandler> {

	public static Type<ApplicationStep1CompletedHandler> TYPE = new Type<ApplicationStep1CompletedHandler>();

	public interface ApplicationStep1CompletedHandler extends EventHandler {
		void onApplicationStep1Completed(ApplicationStep1CompletedEvent event);
	}

	public interface ApplicationStep1CompletedHasHandlers extends HasHandlers {
		HandlerRegistration addApplicationStep1CompletedHandler(
				ApplicationStep1CompletedHandler handler);
	}

	public ApplicationStep1CompletedEvent() {
	}

	@Override
	protected void dispatch(ApplicationStep1CompletedHandler handler) {
		handler.onApplicationStep1Completed(this);
	}

	@Override
	public Type<ApplicationStep1CompletedHandler> getAssociatedType() {
		return TYPE;
	}

	public static Type<ApplicationStep1CompletedHandler> getType() {
		return TYPE;
	}

	public static void fire(HasHandlers source) {
		source.fireEvent(new ApplicationStep1CompletedEvent());
	}
}
