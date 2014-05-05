package com.lemania.eprospects.client.event;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.EventHandler;
import com.google.gwt.event.shared.HasHandlers;
import com.google.gwt.event.shared.HandlerRegistration;

public class ApplicationStep5CompletedEvent
		extends
		GwtEvent<ApplicationStep5CompletedEvent.ApplicationStep5CompletedHandler> {

	public static Type<ApplicationStep5CompletedHandler> TYPE = new Type<ApplicationStep5CompletedHandler>();

	public interface ApplicationStep5CompletedHandler extends EventHandler {
		void onApplicationStep5Completed(ApplicationStep5CompletedEvent event);
	}

	public interface ApplicationStep5CompletedHasHandlers extends HasHandlers {
		HandlerRegistration addApplicationStep5CompletedHandler(
				ApplicationStep5CompletedHandler handler);
	}

	public ApplicationStep5CompletedEvent() {
	}

	@Override
	protected void dispatch(ApplicationStep5CompletedHandler handler) {
		handler.onApplicationStep5Completed(this);
	}

	@Override
	public Type<ApplicationStep5CompletedHandler> getAssociatedType() {
		return TYPE;
	}

	public static Type<ApplicationStep5CompletedHandler> getType() {
		return TYPE;
	}

	public static void fire(HasHandlers source) {
		source.fireEvent(new ApplicationStep5CompletedEvent());
	}
}
