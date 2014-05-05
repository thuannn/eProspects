package com.lemania.eprospects.client.event;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.EventHandler;
import com.google.gwt.event.shared.HasHandlers;
import com.google.gwt.event.shared.HandlerRegistration;

public class ApplicationStep4CompletedEvent
		extends
		GwtEvent<ApplicationStep4CompletedEvent.ApplicationStep4CompletedHandler> {

	public static Type<ApplicationStep4CompletedHandler> TYPE = new Type<ApplicationStep4CompletedHandler>();

	public interface ApplicationStep4CompletedHandler extends EventHandler {
		void onApplicationStep4Completed(ApplicationStep4CompletedEvent event);
	}

	public interface ApplicationStep4CompletedHasHandlers extends HasHandlers {
		HandlerRegistration addApplicationStep4CompletedHandler(
				ApplicationStep4CompletedHandler handler);
	}

	public ApplicationStep4CompletedEvent() {
	}

	@Override
	protected void dispatch(ApplicationStep4CompletedHandler handler) {
		handler.onApplicationStep4Completed(this);
	}

	@Override
	public Type<ApplicationStep4CompletedHandler> getAssociatedType() {
		return TYPE;
	}

	public static Type<ApplicationStep4CompletedHandler> getType() {
		return TYPE;
	}

	public static void fire(HasHandlers source) {
		source.fireEvent(new ApplicationStep4CompletedEvent());
	}
}
