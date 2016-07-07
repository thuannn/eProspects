package com.lemania.eprospects.client.presenter.applicationstep2;

import java.util.List;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.shared.GwtEvent.Type;
import com.google.gwt.user.client.History;
import com.google.gwt.user.client.Window;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.google.web.bindery.requestfactory.shared.Receiver;
import com.google.web.bindery.requestfactory.shared.ServerFailure;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ContentSlot;
import com.gwtplatform.mvp.client.annotations.ProxyEvent;
import com.gwtplatform.mvp.client.annotations.UseGatekeeper;
import com.gwtplatform.mvp.client.proxy.PlaceManager;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.gwtplatform.mvp.client.proxy.RevealContentHandler;
import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.lemania.eprospects.client.ApplicationItem;
import com.lemania.eprospects.client.CurrentUser;
import com.lemania.eprospects.client.LoggedInGatekeeper;
import com.lemania.eprospects.client.NotificationTypes;
import com.lemania.eprospects.client.SummerCampSettingValues;
import com.lemania.eprospects.client.event.ApplicationItemSavedEvent;
import com.lemania.eprospects.client.event.ApplicationItemSavedEvent.ApplicationItemSavedHandler;
import com.lemania.eprospects.client.event.ApplicationItemSelectedEvent;
import com.lemania.eprospects.client.event.ApplicationStep2CompletedEvent;
import com.lemania.eprospects.client.event.GotoPreviousPageEvent;
import com.lemania.eprospects.client.event.LoginAuthenticatedEvent;
import com.lemania.eprospects.client.event.LoginAuthenticatedEvent.LoginAuthenticatedHandler;
import com.lemania.eprospects.client.presenter.mainpage.MainPagePresenter;
import com.lemania.eprospects.client.place.NameTokens;
import com.lemania.eprospects.shared.applicationform.ApplicationFormProxy;
import com.lemania.eprospects.shared.applicationform.ApplicationFormRequestFactory;
import com.lemania.eprospects.shared.applicationform.ApplicationFormRequestFactory.ApplicationFormRequestContext;
import com.lemania.eprospects.shared.applicationitem.ApplicationItemProxy;
import com.lemania.eprospects.shared.applicationitem.ApplicationItemRequestFactory;
import com.lemania.eprospects.shared.applicationitem.ApplicationItemRequestFactory.ApplicationItemRequestContext;
import com.lemania.eprospects.shared.service.EventSourceRequestTransport;

public class ApplicationStep2Presenter
		extends
		Presenter<ApplicationStep2Presenter.MyView, ApplicationStep2Presenter.MyProxy>
		implements 
			ApplicationStep2UiHandlers,
			LoginAuthenticatedHandler,
			ApplicationItemSavedHandler {
	
	//
	CurrentUser curUser;
	//
	private final PlaceManager placeManager;
	
	/*
	 * 
	 * */
	interface MyView extends View, HasUiHandlers<ApplicationStep2UiHandlers> {
		//
		void initializeUI();
		//
		void showApplicationDetails( ApplicationFormProxy app );
		//
		void showSelectedItems( List<ApplicationItemProxy> ais);
		//
		void toggleAssurance( boolean useInternat );
	}

	@ContentSlot
	public static final Type<RevealContentHandler<?>> SLOT_ApplicationStep2 = new Type<RevealContentHandler<?>>();

	@NameToken(NameTokens.applicationstep2)
	@ProxyCodeSplit
	@UseGatekeeper(LoggedInGatekeeper.class)
	public interface MyProxy extends ProxyPlace<ApplicationStep2Presenter> {
	}

	@Inject
	public ApplicationStep2Presenter(EventBus eventBus, MyView view,
			MyProxy proxy, PlaceManager placeManager ) {
		super(eventBus, view, proxy, MainPagePresenter.TYPE_SetMainContent);
		
		this.placeManager = placeManager;

		getView().setUiHandlers(this);
	}

	
	/*
	 * */
	protected void onBind() {
		super.onBind();
		//
		getView().initializeUI();
	}

	
	/*
	 * */
	protected void onReset() {
		super.onReset();
		//
		loadCurrentApplication();
		//
		addApplicationFee();
	}
	
	
	
	/*
	 * Add the application fee as application item, the code is executed in ApplicationPaymentPresenter 
	 * */
	private void addApplicationFee() {
		//
		getEventBus().fireEvent( 
				new ApplicationItemSelectedEvent( 
						new ApplicationItem( 
								SummerCampSettingValues.item_applicationfee_code,
								SummerCampSettingValues.item_applicationfee,
								SummerCampSettingValues.item_applicationfee_amount )));
	}
	

	/*
	 * */
	private void loadCurrentApplication() {
		//
		ApplicationFormRequestFactory rf = GWT.create(ApplicationFormRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ApplicationFormRequestContext rc = rf.applicationFormRequest();
		
		rc.loadAndReturn( curUser.getUserEmail(), curUser.getApplicationId()).fire( new Receiver<ApplicationFormProxy>() {
			@Override
			public void onSuccess(ApplicationFormProxy app){
				// show result
				getView().showApplicationDetails(app);
			}
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
		});
	}
	

	/*
	 * */
	@Override
	public void nextStep(
			boolean chkApplicaitonFee,
			boolean chkPackAssurance,
			String programmesCode,
			String courseCode,
			String startDate,
			String weekNumber,
			String txtJulyWeek,
			String txtAugustWeek,
			boolean chkContinueAfter,
			boolean optConfortPlusPrivate,
			boolean optConfortPrivate,
			boolean optStandardPrivate,
			boolean optConfortPlusShare,
			boolean optConfortShare,
			boolean optStandardShare,
			boolean optKeyDepositCHF,
			boolean optKeyDepositEuro,
			boolean optKeyDepositUSD,
			String languageOption ) {
		//validate data
		if ( !formCompleted(
				 chkApplicaitonFee,
				 chkPackAssurance,
				 programmesCode,
				 courseCode,
				 startDate,
				 weekNumber,
				 txtJulyWeek,
				 txtAugustWeek,
				 chkContinueAfter,
				 optConfortPlusPrivate,
				 optConfortPrivate,
				 optStandardPrivate,
				 optConfortPlusShare,
				 optConfortShare,
				 optStandardShare,
				 optKeyDepositCHF,
				 optKeyDepositEuro,
				 optKeyDepositUSD, 
				 languageOption ) )
			return;
		// save data
		ApplicationFormRequestFactory rf = GWT.create(ApplicationFormRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ApplicationFormRequestContext rc = rf.applicationFormRequest();
		
		rc.saveStep2( curUser.getUserEmail(), curUser.getApplicationId(), 
				 chkApplicaitonFee,
				 chkPackAssurance,
				 programmesCode,
				 courseCode,
				 startDate,
				 weekNumber,
				 txtJulyWeek,
				 txtAugustWeek,
				 chkContinueAfter,
				 optConfortPlusPrivate,
				 optConfortPrivate,
				 optStandardPrivate,
				 optConfortPlusShare,
				 optConfortShare,
				 optStandardShare,
				 optKeyDepositCHF,
				 optKeyDepositEuro,
				 optKeyDepositUSD,
				 languageOption )
		.fire( new Receiver<Boolean>() {
			@Override
			public void onSuccess(Boolean saved){
				//
				placeManager.setOnLeaveConfirmation(null);
				// Go to the next page
				getEventBus().fireEvent( new ApplicationStep2CompletedEvent() );
			}
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
		});
		//
	}

	
	/*
	 * */
	private boolean formCompleted(boolean chkApplicaitonFee,
			boolean chkPackAssurance, String programmesCode, String courseCode,
			String startDate, String weekNumber, String txtJulyWeek,
			String txtAugustWeek, boolean chkContinueAfter, boolean optConfortPlusPrivate,
			boolean optConfortPrivate, boolean optStandardPrivate,
			boolean optConfortPlusShare, boolean optConfortShare,
			boolean optStandardShare, boolean optKeyDepositCHF,
			boolean optKeyDepositEuro, boolean optKeyDepositUSD,
			String languageOption ) {
		//
		if (programmesCode.equals("")) {
			Window.alert( NotificationTypes.invalid_input + " Programme");
			return false;
		}
		//
		if (courseCode.equals("")){
			Window.alert( NotificationTypes.invalid_input + " With or without conversation");
			return false;
		}
		//
		if (languageOption.equals("")){
			Window.alert( NotificationTypes.invalid_input + " Please choose a language option");
			return false;
		}
		//
		if (startDate.equals("")){
			Window.alert( NotificationTypes.invalid_input + " Start date");
			return false;
		}
		//
		if (programmesCode.equals( SummerCampSettingValues.programme_code_summercamp)){
			if (!optConfortPlusPrivate && !optConfortPrivate && !optStandardPrivate
				&& !optConfortPlusShare && !optConfortShare && !optStandardShare ) {
				Window.alert( NotificationTypes.invalid_input + " Please choose a type of room");
				return false;
			}	
			//
			if (!optKeyDepositCHF && !optKeyDepositEuro && !optKeyDepositUSD ){
				Window.alert( NotificationTypes.invalid_input + " Please choose the currency of deposit money");
				return false;
			}
		}
		return true;
	}

	/*
	 * */
	@Override
	public void previousStep() {
		//
		this.getEventBus().fireEvent( new GotoPreviousPageEvent( History.getToken()) );
	}

	
	/*
	 * */
	@ProxyEvent
	@Override
	public void onLoginAuthenticated(LoginAuthenticatedEvent event) {
		//
		this.curUser = event.getCurrentUser();
	}

	
	/*
	 * */
	@ProxyEvent
	@Override
	public void onApplicationItemSaved(ApplicationItemSavedEvent event) {
		//
		ApplicationItemRequestFactory rf = GWT.create(ApplicationItemRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ApplicationItemRequestContext rc = rf.applicationItemRequest();
		rc.listAll( curUser.getUserEmail(), curUser.getApplicationId() ).fire( new Receiver<List<ApplicationItemProxy>>() {
			@Override
			public void onSuccess(List<ApplicationItemProxy> ais){
				// show selected items
				getView().showSelectedItems(ais);
			}
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
		});
	}

	
	/*
	 * 20150119 : no more different prices for Aug
	 * */
	@Override
	public void calculatePrice(String programmesCode, String courseCode,
			String startDate, String weekNumber, String txtJulyWeek,
			String txtAugustWeek, boolean optConfortPlusPrivate,
			boolean optConfortPrivate,
			boolean optStandardPrivate,
			boolean optConfortPlusShare,
			boolean optConfortShare,
			boolean optStandardShare ) {
		// for summer COURSES
		if ( programmesCode.equals( SummerCampSettingValues.programme_code_summercourse ))
		{
			// without conversation
			if (courseCode.equals( SummerCampSettingValues.course_code_noconversation )) {
				getEventBus().fireEvent( 
						new ApplicationItemSelectedEvent( 
								new ApplicationItem( 
										SummerCampSettingValues.item_summercourse20_code,
										SummerCampSettingValues.item_summercourse20_text,
										SummerCampSettingValues.item_summercourse20_amount * (Integer.parseInt(txtJulyWeek) + Integer.parseInt(txtAugustWeek)) )));
//				getEventBus().fireEvent( 
//						new ApplicationItemSelectedEvent( 
//								new ApplicationItem( 
//										SummerCampSettingValues.item_summercourse20_code,
//										SummerCampSettingValues.item_summercourse20_text,
//										SummerCampSettingValues.item_summercourse20_amount * Integer.parseInt(txtAugustWeek) )));
			}
			// with conversation
			if (courseCode.equals( SummerCampSettingValues.course_code_withconversation )) {
				getEventBus().fireEvent( 
						new ApplicationItemSelectedEvent( 
								new ApplicationItem( 
										SummerCampSettingValues.item_summercourse205_code,
										SummerCampSettingValues.item_summercourse205_text,
										SummerCampSettingValues.item_summercourse205_amount * (Integer.parseInt(txtJulyWeek) + Integer.parseInt(txtAugustWeek)) )));
//				if (!txtAugustWeek.equals("")){
//					getEventBus().fireEvent( 
//							new ApplicationItemSelectedEvent( 
//									new ApplicationItem( 
//											SummerCampSettingValues.item_summercourse205_code,
//											SummerCampSettingValues.item_summercourse205_text,
//											SummerCampSettingValues.item_summercourse205_amount * Integer.parseInt(txtAugustWeek) )));
			}
			//
			getView().toggleAssurance( false );
		}
		// for summer CAMP
		if ( programmesCode.equals( SummerCampSettingValues.programme_code_summercamp )) {
			//
			if (programmesCode.equals( SummerCampSettingValues.programme_code_summercamp)){
				if (!optConfortPlusPrivate && !optConfortPrivate && !optStandardPrivate
					&& !optConfortPlusShare && !optConfortShare && !optStandardShare ) {
					return;
				}	
			}
			// without conversation
			if (courseCode.equals( SummerCampSettingValues.course_code_noconversation )) {
				//
				if (optConfortPlusPrivate) {
					getEventBus().fireEvent( 
							new ApplicationItemSelectedEvent( 
									new ApplicationItem( 
											SummerCampSettingValues.item_summercourse20_confortplus_private_code,
											SummerCampSettingValues.item_summercourse20_confortplus_private_text,
											SummerCampSettingValues.item_summercourse20_confortplus_private_amount * (Integer.parseInt(txtJulyWeek) + Integer.parseInt(txtAugustWeek)) )));
//					getEventBus().fireEvent( 
//							new ApplicationItemSelectedEvent( 
//									new ApplicationItem( 
//											SummerCampSettingValues.item_summercourse20_confortplus_private_code,
//											SummerCampSettingValues.item_summercourse20_confortplus_private_text,
//											SummerCampSettingValues.item_summercourse20_confortplus_private_amount * Integer.parseInt(txtAugustWeek) )));
				}
				//
				if (optConfortPrivate) {
					getEventBus().fireEvent( 
							new ApplicationItemSelectedEvent( 
									new ApplicationItem( 
											SummerCampSettingValues.item_summercourse20_confort_private_code,
											SummerCampSettingValues.item_summercourse20_confort_private_text,
											SummerCampSettingValues.item_summercourse20_confort_private_amount * (Integer.parseInt(txtJulyWeek) + Integer.parseInt(txtAugustWeek)) )));
//					getEventBus().fireEvent( 
//							new ApplicationItemSelectedEvent( 
//									new ApplicationItem( 
//											SummerCampSettingValues.item_summercourse20_confort_private_code,
//											SummerCampSettingValues.item_summercourse20_confort_private_text,
//											SummerCampSettingValues.item_summercourse20_confort_private_amount * Integer.parseInt(txtAugustWeek) )));
				}
				//
				if (optStandardPrivate) {
					getEventBus().fireEvent( 
							new ApplicationItemSelectedEvent( 
									new ApplicationItem( 
											SummerCampSettingValues.item_summercourse20_standard_private_code,
											SummerCampSettingValues.item_summercourse20_standard_private_text,
											SummerCampSettingValues.item_summercourse20_standard_private_amount * (Integer.parseInt(txtJulyWeek) + Integer.parseInt(txtAugustWeek)) )));
//					getEventBus().fireEvent( 
//							new ApplicationItemSelectedEvent( 
//									new ApplicationItem( 
//											SummerCampSettingValues.item_summercourse20_standard_private_code,
//											SummerCampSettingValues.item_summercourse20_standard_private_text,
//											SummerCampSettingValues.item_summercourse20_standard_private_amount * Integer.parseInt(txtAugustWeek) )));
				}
				//
				if (optConfortPlusShare) {
					getEventBus().fireEvent( 
							new ApplicationItemSelectedEvent( 
									new ApplicationItem( 
											SummerCampSettingValues.item_summercourse20_confortplus_share_code,
											SummerCampSettingValues.item_summercourse20_confortplus_share_text,
											SummerCampSettingValues.item_summercourse20_confortplus_share_amount * (Integer.parseInt(txtJulyWeek) + Integer.parseInt(txtAugustWeek)) )));
//					getEventBus().fireEvent( 
//							new ApplicationItemSelectedEvent( 
//									new ApplicationItem( 
//											SummerCampSettingValues.item_summercourse20_confortplus_share_code,
//											SummerCampSettingValues.item_summercourse20_confortplus_share_text,
//											SummerCampSettingValues.item_summercourse20_confortplus_share_amount * Integer.parseInt(txtAugustWeek) )));
				}
				//
				if (optConfortShare) {
					getEventBus().fireEvent( 
							new ApplicationItemSelectedEvent( 
									new ApplicationItem( 
											SummerCampSettingValues.item_summercourse20_confort_share_code,
											SummerCampSettingValues.item_summercourse20_confort_share_text,
											SummerCampSettingValues.item_summercourse20_confort_share_amount * (Integer.parseInt(txtJulyWeek) + Integer.parseInt(txtAugustWeek)) )));
//					getEventBus().fireEvent( 
//							new ApplicationItemSelectedEvent( 
//									new ApplicationItem( 
//											SummerCampSettingValues.item_summercourse20_confort_share_code,
//											SummerCampSettingValues.item_summercourse20_confort_share_text,
//											SummerCampSettingValues.item_summercourse20_confort_share_amount * Integer.parseInt(txtAugustWeek) )));
				}
				//
				if (optStandardShare) {
					getEventBus().fireEvent( 
							new ApplicationItemSelectedEvent( 
									new ApplicationItem( 
											SummerCampSettingValues.item_summercourse20_standard_share_code,
											SummerCampSettingValues.item_summercourse20_standard_share_text,
											SummerCampSettingValues.item_summercourse20_standard_share_amount * (Integer.parseInt(txtJulyWeek) + Integer.parseInt(txtAugustWeek)) )));
//					getEventBus().fireEvent( 
//							new ApplicationItemSelectedEvent( 
//									new ApplicationItem( 
//											SummerCampSettingValues.item_summercourse20_standard_share_code,
//											SummerCampSettingValues.item_summercourse20_standard_share_text,
//											SummerCampSettingValues.item_summercourse20_standard_share_amount * Integer.parseInt(txtAugustWeek) )));
				}
				//
				getView().toggleAssurance( true );
			}
			// with conversation
			if (courseCode.equals( SummerCampSettingValues.course_code_withconversation )) {
				//
				if (optConfortPlusPrivate) {
					getEventBus().fireEvent( 
							new ApplicationItemSelectedEvent( 
									new ApplicationItem( 
											SummerCampSettingValues.item_summercourse205_confortplus_private_code,
											SummerCampSettingValues.item_summercourse205_confortplus_private_text,
											SummerCampSettingValues.item_summercourse205_confortplus_private_amount * (Integer.parseInt(txtJulyWeek) + Integer.parseInt(txtAugustWeek)) )));
//					getEventBus().fireEvent( 
//							new ApplicationItemSelectedEvent( 
//									new ApplicationItem( 
//											SummerCampSettingValues.item_summercourse205_confortplus_private_code,
//											SummerCampSettingValues.item_summercourse205_confortplus_private_text,
//											SummerCampSettingValues.item_summercourse205_confortplus_private_amount * Integer.parseInt(txtAugustWeek) )));
				}
				//
				if (optConfortPrivate) {
					getEventBus().fireEvent( 
							new ApplicationItemSelectedEvent( 
									new ApplicationItem( 
											SummerCampSettingValues.item_summercourse205_confort_private_code,
											SummerCampSettingValues.item_summercourse205_confort_private_text,
											SummerCampSettingValues.item_summercourse205_confort_private_amount * (Integer.parseInt(txtJulyWeek) + Integer.parseInt(txtAugustWeek)) )));
//					getEventBus().fireEvent( 
//							new ApplicationItemSelectedEvent( 
//									new ApplicationItem( 
//											SummerCampSettingValues.item_summercourse205_confort_private_code,
//											SummerCampSettingValues.item_summercourse205_confort_private_text,
//											SummerCampSettingValues.item_summercourse205_confort_private_amount * Integer.parseInt(txtAugustWeek) )));
				}
				//
				if (optStandardPrivate) {
					getEventBus().fireEvent( 
							new ApplicationItemSelectedEvent( 
									new ApplicationItem( 
											SummerCampSettingValues.item_summercourse205_standard_private_code,
											SummerCampSettingValues.item_summercourse205_standard_private_text,
											SummerCampSettingValues.item_summercourse205_standard_private_amount * (Integer.parseInt(txtJulyWeek) + Integer.parseInt(txtAugustWeek)) )));
//					getEventBus().fireEvent( 
//							new ApplicationItemSelectedEvent( 
//									new ApplicationItem( 
//											SummerCampSettingValues.item_summercourse205_standard_private_code,
//											SummerCampSettingValues.item_summercourse205_standard_private_text,
//											SummerCampSettingValues.item_summercourse205_standard_private_amount * Integer.parseInt(txtAugustWeek) )));
				}
				//
				if (optConfortPlusShare) {
					getEventBus().fireEvent( 
							new ApplicationItemSelectedEvent( 
									new ApplicationItem( 
											SummerCampSettingValues.item_summercourse205_confortplus_share_code,
											SummerCampSettingValues.item_summercourse205_confortplus_share_text,
											SummerCampSettingValues.item_summercourse205_confortplus_share_amount * (Integer.parseInt(txtJulyWeek) + Integer.parseInt(txtAugustWeek)) )));
//					getEventBus().fireEvent( 
//							new ApplicationItemSelectedEvent( 
//									new ApplicationItem( 
//											SummerCampSettingValues.item_summercourse205_confortplus_share_code,
//											SummerCampSettingValues.item_summercourse205_confortplus_share_text,
//											SummerCampSettingValues.item_summercourse205_confortplus_share_amount * Integer.parseInt(txtAugustWeek) )));
				}
				//
				if (optConfortShare) {
					getEventBus().fireEvent( 
							new ApplicationItemSelectedEvent( 
									new ApplicationItem( 
											SummerCampSettingValues.item_summercourse205_confort_share_code,
											SummerCampSettingValues.item_summercourse205_confort_share_text,
											SummerCampSettingValues.item_summercourse205_confort_share_amount * (Integer.parseInt(txtJulyWeek) + Integer.parseInt(txtAugustWeek)) )));
//					getEventBus().fireEvent( 
//							new ApplicationItemSelectedEvent( 
//									new ApplicationItem( 
//											SummerCampSettingValues.item_summercourse205_confort_share_code,
//											SummerCampSettingValues.item_summercourse205_confort_share_text,
//											SummerCampSettingValues.item_summercourse205_confort_share_amount * Integer.parseInt(txtAugustWeek) )));
				}
				//
				if (optStandardShare) {
					getEventBus().fireEvent( 
							new ApplicationItemSelectedEvent( 
									new ApplicationItem( 
											SummerCampSettingValues.item_summercourse205_standard_share_code,
											SummerCampSettingValues.item_summercourse205_standard_share_text,
											SummerCampSettingValues.item_summercourse205_standard_share_amount * (Integer.parseInt(txtJulyWeek) + Integer.parseInt(txtAugustWeek)) )));
//					getEventBus().fireEvent( 
//							new ApplicationItemSelectedEvent( 
//									new ApplicationItem( 
//											SummerCampSettingValues.item_summercourse205_standard_share_code,
//											SummerCampSettingValues.item_summercourse205_standard_share_text,
//											SummerCampSettingValues.item_summercourse205_standard_share_amount * Integer.parseInt(txtAugustWeek) )));
				}
			}
		}
	}

	
	
	/*
	 * */
	@Override
	public void editItemPrice(String itemCode, boolean selected) {
		//
		double price = 0.0;
		if(selected)
			price = SummerCampSettingValues.getItemPrice(itemCode);
		//
		getEventBus().fireEvent( 
				new ApplicationItemSelectedEvent( 
						new ApplicationItem( 
								itemCode,
								SummerCampSettingValues.getItemDescription(itemCode),
								price )));
	}
	
	
	/*
	 * */
	@Override
	public void toggleLeaveNotice() {
		//
		placeManager.setOnLeaveConfirmation( NotificationTypes.system_unsaveddata );
	}
}
