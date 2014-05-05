package com.lemania.eprospects.client.event;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.EventHandler;
import com.google.gwt.event.shared.HasHandlers;
import com.google.gwt.event.shared.HandlerRegistration;

public class ApplicationStep3CompletedEvent
		extends
		GwtEvent<ApplicationStep3CompletedEvent.ApplicationStep3CompletedHandler> {

	public static Type<ApplicationStep3CompletedHandler> TYPE = new Type<ApplicationStep3CompletedHandler>();

	public interface ApplicationStep3CompletedHandler extends EventHandler {
		void onApplicationStep3Completed(ApplicationStep3CompletedEvent event);
	}

	public interface ApplicationStep3CompletedHasHandlers extends HasHandlers {
		HandlerRegistration addApplicationStep3CompletedHandler(
				ApplicationStep3CompletedHandler handler);
	}

	public ApplicationStep3CompletedEvent() {
	}

	@Override
	protected void dispatch(ApplicationStep3CompletedHandler handler) {
		handler.onApplicationStep3Completed(this);
	}

	@Override
	public Type<ApplicationStep3CompletedHandler> getAssociatedType() {
		return TYPE;
	}

	public static Type<ApplicationStep3CompletedHandler> getType() {
		return TYPE;
	}

	public static void fire(HasHandlers source) {
		source.fireEvent(new ApplicationStep3CompletedEvent());
	}
}
