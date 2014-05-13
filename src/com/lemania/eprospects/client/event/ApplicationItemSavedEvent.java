package com.lemania.eprospects.client.event;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.EventHandler;
import com.google.gwt.event.shared.HasHandlers;
import com.google.gwt.event.shared.HandlerRegistration;

public class ApplicationItemSavedEvent extends
		GwtEvent<ApplicationItemSavedEvent.ApplicationItemSavedHandler> {

	public static Type<ApplicationItemSavedHandler> TYPE = new Type<ApplicationItemSavedHandler>();

	public interface ApplicationItemSavedHandler extends EventHandler {
		void onApplicationItemSaved(ApplicationItemSavedEvent event);
	}

	public interface ApplicationItemSavedHasHandlers extends HasHandlers {
		HandlerRegistration addApplicationItemSavedHandler(
				ApplicationItemSavedHandler handler);
	}

	public ApplicationItemSavedEvent() {
	}

	@Override
	protected void dispatch(ApplicationItemSavedHandler handler) {
		handler.onApplicationItemSaved(this);
	}

	@Override
	public Type<ApplicationItemSavedHandler> getAssociatedType() {
		return TYPE;
	}

	public static Type<ApplicationItemSavedHandler> getType() {
		return TYPE;
	}

	public static void fire(HasHandlers source) {
		source.fireEvent(new ApplicationItemSavedEvent());
	}
}
