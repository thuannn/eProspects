package com.lemania.eprospects.client.event;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.EventHandler;
import com.google.gwt.event.shared.HasHandlers;
import com.google.gwt.event.shared.HandlerRegistration;

public class ApplicationPaymentEvent extends
		GwtEvent<ApplicationPaymentEvent.ApplicationPaymentHandler> {

	public static Type<ApplicationPaymentHandler> TYPE = new Type<ApplicationPaymentHandler>();

	public interface ApplicationPaymentHandler extends EventHandler {
		void onApplicationPayment(ApplicationPaymentEvent event);
	}

	public interface ApplicationPaymentHasHandlers extends HasHandlers {
		HandlerRegistration addApplicationPaymentHandler(
				ApplicationPaymentHandler handler);
	}

	public ApplicationPaymentEvent() {
	}

	@Override
	protected void dispatch(ApplicationPaymentHandler handler) {
		handler.onApplicationPayment(this);
	}

	@Override
	public Type<ApplicationPaymentHandler> getAssociatedType() {
		return TYPE;
	}

	public static Type<ApplicationPaymentHandler> getType() {
		return TYPE;
	}

	public static void fire(HasHandlers source) {
		source.fireEvent(new ApplicationPaymentEvent());
	}
}
