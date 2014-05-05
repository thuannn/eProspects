package com.lemania.eprospects.client.event;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.EventHandler;
import com.google.gwt.event.shared.HasHandlers;
import com.google.gwt.event.shared.HandlerRegistration;

public class ApplicationStartEvent extends
		GwtEvent<ApplicationStartEvent.ApplicationStartHandler> {

	public static Type<ApplicationStartHandler> TYPE = new Type<ApplicationStartHandler>();

	public interface ApplicationStartHandler extends EventHandler {
		void onApplicationStart(ApplicationStartEvent event);
	}

	public interface ApplicationStartHasHandlers extends HasHandlers {
		HandlerRegistration addApplicationStartHandler(
				ApplicationStartHandler handler);
	}

	public ApplicationStartEvent() {
	}

	@Override
	protected void dispatch(ApplicationStartHandler handler) {
		handler.onApplicationStart(this);
	}

	@Override
	public Type<ApplicationStartHandler> getAssociatedType() {
		return TYPE;
	}

	public static Type<ApplicationStartHandler> getType() {
		return TYPE;
	}

	public static void fire(HasHandlers source) {
		source.fireEvent(new ApplicationStartEvent());
	}
}
