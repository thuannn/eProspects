package com.lemania.eprospects.client.event;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.EventHandler;
import com.google.gwt.event.shared.HasHandlers;
import com.google.gwt.event.shared.HandlerRegistration;

public class ApplicationStep2CompletedEvent
		extends
		GwtEvent<ApplicationStep2CompletedEvent.ApplicationStep2CompletedHandler> {

	public static Type<ApplicationStep2CompletedHandler> TYPE = new Type<ApplicationStep2CompletedHandler>();

	public interface ApplicationStep2CompletedHandler extends EventHandler {
		void onApplicationStep2Completed(ApplicationStep2CompletedEvent event);
	}

	public interface ApplicationStep2CompletedHasHandlers extends HasHandlers {
		HandlerRegistration addApplicationStep2CompletedHandler(
				ApplicationStep2CompletedHandler handler);
	}

	public ApplicationStep2CompletedEvent() {
	}

	@Override
	protected void dispatch(ApplicationStep2CompletedHandler handler) {
		handler.onApplicationStep2Completed(this);
	}

	@Override
	public Type<ApplicationStep2CompletedHandler> getAssociatedType() {
		return TYPE;
	}

	public static Type<ApplicationStep2CompletedHandler> getType() {
		return TYPE;
	}

	public static void fire(HasHandlers source) {
		source.fireEvent(new ApplicationStep2CompletedEvent());
	}
}
