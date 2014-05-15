package com.lemania.eprospects.client.event;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.EventHandler;
import com.google.gwt.event.shared.HasHandlers;
import com.google.gwt.event.shared.HandlerRegistration;
import com.lemania.eprospects.shared.applicationform.ApplicationFormProxy;

public class NewApplicationNotificationEvent
		extends
		GwtEvent<NewApplicationNotificationEvent.NewApplicationNotificationHandler> {
	
	//
	private ApplicationFormProxy app;

	public static Type<NewApplicationNotificationHandler> TYPE = new Type<NewApplicationNotificationHandler>();

	public interface NewApplicationNotificationHandler extends EventHandler {
		void onNewApplicationNotification(NewApplicationNotificationEvent event);
	}

	public interface NewApplicationNotificationHasHandlers extends HasHandlers {
		HandlerRegistration addNewApplicationNotificationHandler(
				NewApplicationNotificationHandler handler);
	}

	public NewApplicationNotificationEvent() {
	}
	
	public NewApplicationNotificationEvent(ApplicationFormProxy app) {
		this.setApp(app);
	}

	@Override
	protected void dispatch(NewApplicationNotificationHandler handler) {
		handler.onNewApplicationNotification(this);
	}

	@Override
	public Type<NewApplicationNotificationHandler> getAssociatedType() {
		return TYPE;
	}

	public static Type<NewApplicationNotificationHandler> getType() {
		return TYPE;
	}

	public static void fire(HasHandlers source) {
		source.fireEvent(new NewApplicationNotificationEvent());
	}

	public ApplicationFormProxy getApp() {
		return app;
	}

	public void setApp(ApplicationFormProxy app) {
		this.app = app;
	}
}
