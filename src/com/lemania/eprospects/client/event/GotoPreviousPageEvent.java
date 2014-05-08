package com.lemania.eprospects.client.event;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.EventHandler;
import com.google.gwt.event.shared.HasHandlers;
import com.google.gwt.event.shared.HandlerRegistration;

public class GotoPreviousPageEvent extends
		GwtEvent<GotoPreviousPageEvent.GotoPreviousPageHandler> {

	public static Type<GotoPreviousPageHandler> TYPE = new Type<GotoPreviousPageHandler>();
	
	private String currentPage = "";

	public interface GotoPreviousPageHandler extends EventHandler {
		void onGotoPreviousPage(GotoPreviousPageEvent event);
	}

	public interface GotoPreviousPageHasHandlers extends HasHandlers {
		HandlerRegistration addGotoPreviousPageHandler(
				GotoPreviousPageHandler handler);
	}

	public GotoPreviousPageEvent() {
	}
	
	public GotoPreviousPageEvent(String currentPage) {
		this.setCurrentPage(currentPage);
	}

	@Override
	protected void dispatch(GotoPreviousPageHandler handler) {
		handler.onGotoPreviousPage(this);
	}

	@Override
	public Type<GotoPreviousPageHandler> getAssociatedType() {
		return TYPE;
	}

	public static Type<GotoPreviousPageHandler> getType() {
		return TYPE;
	}

	public static void fire(HasHandlers source) {
		source.fireEvent(new GotoPreviousPageEvent());
	}

	public String getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(String currentPage) {
		this.currentPage = currentPage;
	}
}
