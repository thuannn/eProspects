function ApplicationPaymentEvent_0(){
  $clinit_ApplicationPaymentEvent();
}

defineSeed(775, 235, {}, ApplicationPaymentEvent_0);
_.dispatch_0 = function dispatch_37(handler){
  dynamicCast(handler, Q$ApplicationPaymentEvent$ApplicationPaymentHandler).onApplicationPayment(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_38(){
  return TYPE_38;
}
;
function $nextStep(this$static, optPaypal, optPayDirect, optBankTransfer, optDirectCash, optDirectCard){
  var rc, rf;
  rf = new ApplicationFormRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ApplicationFormRequestFactory_ApplicationFormRequestContextImpl_0(rf);
  $fire($savePaymentStep(rc, this$static.curUser.userEmail, this$static.curUser.applicationId, optPaypal, optPayDirect, optBankTransfer, optDirectCash, optDirectCard), new ApplicationPaymentPresenter$2_0(this$static));
}

function ApplicationPaymentPresenter_0(eventBus, view, proxy, placeManager){
  $clinit_ApplicationPaymentPresenter();
  Presenter_0.call(this, eventBus, view, proxy, ($clinit_MainPagePresenter() , TYPE_SetMainContent));
  this.placeManager = placeManager;
  dynamicCast(this.view, Q$ApplicationPaymentPresenter$MyView).setUiHandlers(this);
}

defineSeed(1125, 715, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ApplicationItemSavedEvent$ApplicationItemSavedHandler, Q$ApplicationItemSelectedEvent$ApplicationItemSelectedHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$ApplicationPaymentPresenter, Q$ApplicationPaymentUiHandlers]), ApplicationPaymentPresenter_0);
_.onApplicationItemSaved = function onApplicationItemSaved(event_0){
  $onApplicationItemSaved(this);
}
;
_.onApplicationItemSelected = function onApplicationItemSelected(event_0){
  $onApplicationItemSelected(this, event_0);
}
;
_.onBind = function onBind_30(){
  dynamicCast(this.view, Q$ApplicationPaymentPresenter$MyView);
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_55(event_0){
  this.curUser = event_0.currentUser;
}
;
_.onReset = function onReset_29(){
  var rf, rc;
  rf = new ApplicationFormRequestFactoryImpl_0;
  $initialize_0(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new ApplicationFormRequestFactory_ApplicationFormRequestContextImpl_0(rf);
  $fire($loadAndReturn(rc, this.curUser.userEmail, this.curUser.applicationId), new ApplicationPaymentPresenter$1_0(this));
  $setOnLeaveConfirmation(this.placeManager, ($clinit_NotificationTypes() , 'UNSAVED MODIFICATIONS - Click on the button Save & Continue before leaving this page.'));
}
;
_.curUser = null;
_.placeManager = null;
function $onSuccess_132(this$static, app){
  $showApplicationDetails(dynamicCast(this$static.this$0.view, Q$ApplicationPaymentPresenter$MyView), app);
}

function ApplicationPaymentPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1126, 655, makeCastMap([Q$Receiver]), ApplicationPaymentPresenter$1_0);
_.onFailure_0 = function onFailure_142(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_142(app){
  $onSuccess_132(this, dynamicCast(app, Q$ApplicationFormProxy));
}
;
_.this$0 = null;
function $onSuccess_133(this$static){
  $setOnLeaveConfirmation(this$static.this$0.placeManager, null);
  $doFire(this$static.this$0.eventBus, new ApplicationPaymentEvent_0, null);
}

function ApplicationPaymentPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1127, 655, makeCastMap([Q$Receiver]), ApplicationPaymentPresenter$2_0);
_.onFailure_0 = function onFailure_143(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_143(saved){
  $onSuccess_133(this, dynamicCast(saved, Q$Boolean));
}
;
_.this$0 = null;
function $onCmdNextStepClick(this$static){
  $nextStep(dynamicCast(this$static.uiHandlers, Q$ApplicationPaymentUiHandlers), $getValue_0(this$static.optPaypal).value_0, $getValue_0(this$static.optPayDirect).value_0, $getValue_0(this$static.optBankTransfer).value_0, $getValue_0(this$static.optDirectCash).value_0, $getValue_0(this$static.optDirectCard).value_0);
}

function $onOptBankTransferClick(this$static){
  $setVisible_0(this$static.cmdNextStep, false);
  $setVisible_0(this$static.pnlOptionDirect, false);
  $setVisible_0(this$static.cmdNextStep, true);
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this$static.uiHandlers, Q$ApplicationPaymentUiHandlers), Q$ApplicationPaymentPresenter).placeManager, ($clinit_NotificationTypes() , 'UNSAVED MODIFICATIONS - Click on the button Save & Continue before leaving this page.'));
}

function $onOptPayDirectClick(this$static){
  $setVisible_0(this$static.cmdNextStep, true);
  $setVisible_0(this$static.pnlOptionDirect, true);
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this$static.uiHandlers, Q$ApplicationPaymentUiHandlers), Q$ApplicationPaymentPresenter).placeManager, ($clinit_NotificationTypes() , 'UNSAVED MODIFICATIONS - Click on the button Save & Continue before leaving this page.'));
}

function $onOptPaypalClick(this$static){
  $setVisible_0(this$static.cmdNextStep, false);
  $setVisible_0(this$static.pnlOptionDirect, false);
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this$static.uiHandlers, Q$ApplicationPaymentUiHandlers), Q$ApplicationPaymentPresenter).placeManager, null);
}

function $showApplicationDetails(this$static, app){
  $setText_1(this$static.lblApplicationInfo, app.getEmailAddress() + ' - ' + app.getApplicationID());
  $setValue_1(this$static.optPaypal, ($clinit_Boolean() , app.isOptPaypal()?TRUE_1:FALSE_1));
  $setValue_1(this$static.optPayDirect, app.isOptPayDirect()?TRUE_1:FALSE_1);
  $setValue_1(this$static.optBankTransfer, app.isOptBankTransfer()?TRUE_1:FALSE_1);
  $setValue_1(this$static.optDirectCash, app.isOptDirectCash()?TRUE_1:FALSE_1);
  $setValue_1(this$static.optDirectCard, app.isOptDirectCard()?TRUE_1:FALSE_1);
  $setText_1(this$static.lblStartDate, app.getStartDate());
  $setText_1(this$static.lblDuration, app.getWeekNumber());
}

function ApplicationPaymentView_0(){
  $initWidget_0(this, $build_main_1(new ApplicationPaymentView_BinderImpl$Widgets_0(this)));
}

defineSeed(1138, 720, makeCastMap([Q$IsWidget, Q$ApplicationPaymentPresenter$MyView]), ApplicationPaymentView_0);
_.setInSlot = function setInSlot_3(slot, content_0){
  slot === ($clinit_ApplicationPaymentPresenter() , SLOT_ApplicationPayment)?this.main.setWidget(!content_0?null:!content_0.view?null:content_0.view.asWidget()):undefined;
}
;
_.cmdNextStep = null;
_.htmlPaypalButton = null;
_.lblApplicationInfo = null;
_.lblDuration = null;
_.lblStartDate = null;
_.lblTotalAmount = null;
_.main = null;
_.optBankTransfer = null;
_.optDirectCard = null;
_.optDirectCash = null;
_.optPayDirect = null;
_.optPaypal = null;
_.pnlOptionDirect = null;
_.tblItems = null;
function ApplicationPaymentView_BinderImpl_0(){
}

defineSeed(1139, 1, {}, ApplicationPaymentView_BinderImpl_0);
function $build_main_1(this$static){
  var main, f_VerticalPanel1, f_Label2, f_HorizontalPanel3, lblApplicationInfo, f_Label4, f_Label5, f_FlowPanel6, f_HorizontalPanel7, f_VerticalPanel22, f_VerticalPanel8, f_Label9, f_Grid10, f_Label11, lblStartDate, f_Label12, lblDuration, tblItems, f_HorizontalPanel13, f_Label14, lblTotalAmount, f_VerticalPanel15, optPaypal, f_Label16, htmlPaypalButton, f_Label17, optBankTransfer, f_Image18, f_Label19, optPayDirect, f_Label20, pnlOptionDirect, f_Label21, optDirectCash, optDirectCard, f_HorizontalPanel23, cmdPreviousStep, sb, cmdNextStep;
  main = new SimplePanel_0;
  $add_4(main, (f_VerticalPanel1 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel1, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $add_11(f_VerticalPanel1, (f_Label2 = new Label_0 , f_Label2.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label2.directionalTextHelper, 'PAYMENT OPTIONS', false) , $updateHorizontalAlignment(f_Label2) , f_Label2)) , $add_11(f_VerticalPanel1, (f_HorizontalPanel3 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel3, (lblApplicationInfo = new Label_0 , $setTextOrHtml(lblApplicationInfo.directionalTextHelper, 'Application ID', false) , $updateHorizontalAlignment(lblApplicationInfo) , this$static.owner.lblApplicationInfo = lblApplicationInfo , lblApplicationInfo)) , $add_9(f_HorizontalPanel3, (f_Label4 = new Label_0 , $setAutoHorizontalAlignment(f_Label4, ALIGN_RIGHT) , $setTextOrHtml(f_Label4.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label4) , f_Label4)) , f_HorizontalPanel3.element.style['width'] = '100%' , f_HorizontalPanel3.table['cellSpacing'] = 5 , f_HorizontalPanel3)) , $add_11(f_VerticalPanel1, (f_Label5 = new Label_0 , f_Label5.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label5.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label5) , f_Label5)) , $add_11(f_VerticalPanel1, (f_FlowPanel6 = new FlowPanel_0 , $add_7(f_FlowPanel6, (f_HorizontalPanel7 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel7, (f_VerticalPanel8 = new VerticalPanel_0 , $add_11(f_VerticalPanel8, (f_Label9 = new Label_0 , f_Label9.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label9.directionalTextHelper, 'SELECTED ITEMS', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $add_11(f_VerticalPanel8, (f_Grid10 = new Grid_0 , $resizeColumns(f_Grid10, 2) , $resizeRows(f_Grid10, 2) , $setWidget_1(f_Grid10, 0, 0, (f_Label11 = new Label_0 , $setTextOrHtml(f_Label11.directionalTextHelper, 'Start date:', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , $setWidget_1(f_Grid10, 0, 1, (lblStartDate = new Label_0 , $setTextOrHtml(lblStartDate.directionalTextHelper, '.', false) , $updateHorizontalAlignment(lblStartDate) , this$static.owner.lblStartDate = lblStartDate , lblStartDate)) , $setWidget_1(f_Grid10, 1, 0, (f_Label12 = new Label_0 , $setTextOrHtml(f_Label12.directionalTextHelper, 'Duration (week):', false) , $updateHorizontalAlignment(f_Label12) , f_Label12)) , $setWidget_1(f_Grid10, 1, 1, (lblDuration = new Label_0 , $setTextOrHtml(lblDuration.directionalTextHelper, '.', false) , $updateHorizontalAlignment(lblDuration) , this$static.owner.lblDuration = lblDuration , lblDuration)) , f_Grid10.element.style['width'] = '100%' , f_Grid10)) , $add_11(f_VerticalPanel8, (tblItems = new FlexTable_0 , tblItems.element.style['width'] = '100%' , this$static.owner.tblItems = tblItems , tblItems)) , $add_11(f_VerticalPanel8, (f_HorizontalPanel13 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel13, (f_Label14 = new Label_0 , f_Label14.element['className'] = 'lablel_TotalAmount' , $setTextOrHtml(f_Label14.directionalTextHelper, 'Total', false) , $updateHorizontalAlignment(f_Label14) , f_Label14)) , $add_9(f_HorizontalPanel13, (lblTotalAmount = new Label_0 , lblTotalAmount.element['className'] = 'lablel_TotalAmount' , $setAutoHorizontalAlignment(lblTotalAmount, ALIGN_RIGHT) , $setTextOrHtml(lblTotalAmount.directionalTextHelper, '.', false) , $updateHorizontalAlignment(lblTotalAmount) , this$static.owner.lblTotalAmount = lblTotalAmount , lblTotalAmount)) , f_HorizontalPanel13.element.style['width'] = '100%' , f_HorizontalPanel13)) , f_VerticalPanel8.element['className'] = 'subSection' , f_VerticalPanel8.element.style['width'] = '400px' , f_VerticalPanel8.table['cellSpacing'] = 10 , f_VerticalPanel8)) , $add_9(f_HorizontalPanel7, (f_VerticalPanel15 = new VerticalPanel_0 , $add_11(f_VerticalPanel15, (optPaypal = new RadioButton_0('payment') , $setTextOrHtml(optPaypal.directionalTextHelper, 'PAYPAL', false) , $setValue_1(optPaypal, ($clinit_Boolean() , $clinit_Boolean() , TRUE_1)) , $addDomHandler(optPaypal, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , this$static.owner.optPaypal = optPaypal , optPaypal)) , $add_11(f_VerticalPanel15, (f_Label16 = new Label_0 , $setTextOrHtml(f_Label16.directionalTextHelper, 'We reccommend using Paypal for a secure and fast online payment.', false) , $updateHorizontalAlignment(f_Label16) , f_Label16)) , $add_11(f_VerticalPanel15, (htmlPaypalButton = new HTML_0 , htmlPaypalButton.element.style['whiteSpace'] = ($clinit_Style$WhiteSpace() , 'normal') , this$static.owner.htmlPaypalButton = htmlPaypalButton , htmlPaypalButton)) , $add_11(f_VerticalPanel15, (f_Label17 = new Label_0 , f_Label17.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label17.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label17) , f_Label17)) , $add_11(f_VerticalPanel15, (optBankTransfer = new RadioButton_0('payment') , $setTextOrHtml(optBankTransfer.directionalTextHelper, 'Bank wire transfer', false) , $addDomHandler(optBankTransfer, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5, TYPE_0) , this$static.owner.optBankTransfer = optBankTransfer , optBankTransfer)) , $add_11(f_VerticalPanel15, (f_Image18 = new Image_1 , $setUrl(f_Image18, ($clinit_UriUtils() , new SafeUriString_0('images/virement_bancaire.png'))) , f_Image18)) , $add_11(f_VerticalPanel15, (f_Label19 = new Label_0 , f_Label19.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label19.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label19) , f_Label19)) , $add_11(f_VerticalPanel15, (optPayDirect = new RadioButton_0('payment') , $setTextOrHtml(optPayDirect.directionalTextHelper, 'Direct payment', false) , $addDomHandler(optPayDirect, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE_0) , this$static.owner.optPayDirect = optPayDirect , optPayDirect)) , $add_11(f_VerticalPanel15, (f_Label20 = new Label_0 , $setTextOrHtml(f_Label20.directionalTextHelper, 'I am a Swiss resident and would like to pay directly at the secretarial department of Lemania School, no later than four weeks before the start of the Summer Programme.', false) , $updateHorizontalAlignment(f_Label20) , f_Label20)) , $add_11(f_VerticalPanel15, (pnlOptionDirect = new HorizontalPanel_0 , $add_9(pnlOptionDirect, (f_Label21 = new Label_0 , $setTextOrHtml(f_Label21.directionalTextHelper, 'I shall pay', false) , $updateHorizontalAlignment(f_Label21) , f_Label21)) , $add_9(pnlOptionDirect, (optDirectCash = new RadioButton_0('direct') , $setTextOrHtml(optDirectCash.directionalTextHelper, 'In cash', false) , this$static.owner.optDirectCash = optDirectCash , optDirectCash)) , $add_9(pnlOptionDirect, (optDirectCard = new RadioButton_0('direct') , $setTextOrHtml(optDirectCard.directionalTextHelper, 'By credit card', false) , this$static.owner.optDirectCard = optDirectCard , optDirectCard)) , setVisible(pnlOptionDirect.element, false) , pnlOptionDirect.element.style['width'] = '100%' , this$static.owner.pnlOptionDirect = pnlOptionDirect , pnlOptionDirect)) , f_VerticalPanel15.element.style['width'] = '100%' , f_VerticalPanel15.table['cellSpacing'] = 10 , f_VerticalPanel15)) , f_HorizontalPanel7.element.style['width'] = '100%' , f_HorizontalPanel7.table['cellSpacing'] = 10 , f_HorizontalPanel7)) , $add_7(f_FlowPanel6, (f_VerticalPanel22 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel22, ALIGN_RIGHT) , $add_11(f_VerticalPanel22, (f_HorizontalPanel23 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel23, ALIGN_RIGHT) , $add_9(f_HorizontalPanel23, (cmdPreviousStep = new Button_0 , $setHTML(cmdPreviousStep, (sb = new StringBuilder_0 , $append_1(sb.data, 'Pr\xE9c\xE9dant') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data))).html) , $setInnerText(cmdPreviousStep.element, 'Previous') , $addDomHandler(cmdPreviousStep, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, TYPE_0) , cmdPreviousStep)) , $add_9(f_HorizontalPanel23, (cmdNextStep = new Button_0 , $setInnerText(cmdNextStep.element, 'Finish') , setVisible(cmdNextStep.element, false) , $addDomHandler(cmdNextStep, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, TYPE_0) , this$static.owner.cmdNextStep = cmdNextStep , cmdNextStep)) , f_HorizontalPanel23.element.style['width'] = '20%' , f_HorizontalPanel23.table['cellSpacing'] = 10 , f_HorizontalPanel23)) , f_VerticalPanel22.element.style['width'] = '100%' , f_VerticalPanel22)) , f_FlowPanel6.element.style['width'] = '900px' , f_FlowPanel6)) , f_VerticalPanel1.element.style['height'] = '' , f_VerticalPanel1.element.style['width'] = '100%' , f_VerticalPanel1));
  this$static.owner.main = main;
  return main;
}

function ApplicationPaymentView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ApplicationPaymentView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new ApplicationPaymentView_BinderImpl$Widgets$2_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new ApplicationPaymentView_BinderImpl$Widgets$3_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new ApplicationPaymentView_BinderImpl$Widgets$4_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5 = new ApplicationPaymentView_BinderImpl$Widgets$5_0(this);
  this.owner = owner;
}

defineSeed(1140, 1, {}, ApplicationPaymentView_BinderImpl$Widgets_0);
_.owner = null;
function ApplicationPaymentView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1141, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationPaymentView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_1(event_0){
  $onCmdNextStepClick(this.this$1.owner);
}
;
_.this$1 = null;
function ApplicationPaymentView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1142, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationPaymentView_BinderImpl$Widgets$2_0);
_.onClick = function onClick_2(event_0){
  $onOptPayDirectClick(this.this$1.owner);
}
;
_.this$1 = null;
function ApplicationPaymentView_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1143, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationPaymentView_BinderImpl$Widgets$3_0);
_.onClick = function onClick_3(event_0){
  $onOptPaypalClick(this.this$1.owner);
}
;
_.this$1 = null;
function ApplicationPaymentView_BinderImpl$Widgets$4_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1144, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationPaymentView_BinderImpl$Widgets$4_0);
_.onClick = function onClick_4(event_0){
  $doFire(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationPaymentUiHandlers), Q$ApplicationPaymentPresenter).eventBus, new GotoPreviousPageEvent_0(($clinit_History() , impl_2?token_1 == null?'':token_1:'')), null);
}
;
_.this$1 = null;
function ApplicationPaymentView_BinderImpl$Widgets$5_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1145, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationPaymentView_BinderImpl$Widgets$5_0);
_.onClick = function onClick_5(event_0){
  $onOptBankTransferClick(this.this$1.owner);
}
;
_.this$1 = null;
function $get_Key$type$com$lemania$eprospects$client$presenter$applicationpayment$ApplicationPaymentPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationpayment$ApplicationPaymentPresenter$_annotation$$none$$) {
    result = new ApplicationPaymentPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$eprospects$client$presenter$applicationpayment$ApplicationPaymentView$_annotation$$none$$(this$static), $get_Key$type$com$lemania$eprospects$client$presenter$applicationpayment$ApplicationPaymentPresenter$MyProxy$_annotation$$none$$(this$static), $get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this$static.injector)));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationpayment$ApplicationPaymentPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationpayment$ApplicationPaymentPresenter$_annotation$$none$$;
}

function $get_Key$type$com$lemania$eprospects$client$presenter$applicationpayment$ApplicationPaymentView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationpayment$ApplicationPaymentView$_annotation$$none$$) {
    result = new ApplicationPaymentView_0(new ApplicationPaymentView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationpayment$ApplicationPaymentView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationpayment$ApplicationPaymentView$_annotation$$none$$;
}

defineSeed(1149, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_146(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$eprospects$client$presenter$applicationpayment$ApplicationPaymentPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
defineSeed(1389, 715, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationPaymentEvent$ApplicationPaymentHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$GotoPreviousPageEvent$GotoPreviousPageHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler, Q$MainPagePresenter, Q$MainPageUiHandler]));
_.onApplicationPayment = function onApplicationPayment(event_0){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationfinal', true);
}
;
defineSeed(1391, 740, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationPaymentEvent$ApplicationPaymentHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$GotoPreviousPageEvent$GotoPreviousPageHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler]));
_.onApplicationPayment = function onApplicationPayment_0(event_0){
  $getPresenter(this, new MainPagePresenterMyProxyImpl$10_0(this.eventBus));
}
;
function $success_56(){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new MainPagePresenterMyProxyImpl$10$1_0);
}

function MainPagePresenterMyProxyImpl$10_0($anonymous0){
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(1394, 729, {}, MainPagePresenterMyProxyImpl$10_0);
_.success = function success_58(presenter){
  $success_56(dynamicCast(presenter, Q$MainPagePresenter));
}
;
function MainPagePresenterMyProxyImpl$10$1_0(){
}

defineSeed(1395, 1, {}, MainPagePresenterMyProxyImpl$10$1_0);
_.execute_0 = function execute_85(){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationfinal', true);
}
;
function $savePaymentStep(this$static, emailAddress, appId, optPaypal, optPayDirect, optBankTransfer, optDirectCash, optDirectCard){
  var x;
  x = new ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$8X_0(this$static, emailAddress, appId, optPaypal, optPayDirect, optBankTransfer, optDirectCash, optDirectCard);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$8X_0(this$0, val$emailAddress, val$appId, val$optPaypal, val$optPayDirect, val$optBankTransfer, val$optDirectCash, val$optDirectCard){
  this.val$emailAddress = val$emailAddress;
  this.val$appId = val$appId;
  this.val$optPaypal = val$optPaypal;
  this.val$optPayDirect = val$optPayDirect;
  this.val$optBankTransfer = val$optBankTransfer;
  this.val$optDirectCash = val$optDirectCash;
  this.val$optDirectCard = val$optDirectCard;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1824, 659, makeCastMap([Q$AbstractRequest]), ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$8X_0);
_.makeRequestData = function makeRequestData_6(){
  return new RequestData_0('YIO$BJMIIkHHxY03q2yldk$yJfA=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$emailAddress, this.val$appId, ($clinit_Boolean() , this.val$optPaypal?TRUE_1:FALSE_1), this.val$optPayDirect?TRUE_1:FALSE_1, this.val$optBankTransfer?TRUE_1:FALSE_1, this.val$optDirectCash?TRUE_1:FALSE_1, this.val$optDirectCard?TRUE_1:FALSE_1]), this.propertyRefs, Ljava_lang_Boolean_2_classLit, null);
}
;
_.val$appId = null;
_.val$emailAddress = null;
_.val$optBankTransfer = false;
_.val$optDirectCard = false;
_.val$optDirectCash = false;
_.val$optPayDirect = false;
_.val$optPaypal = false;
var Lcom_lemania_eprospects_client_presenter_applicationpayment_ApplicationPaymentPresenter_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationpayment.', 'ApplicationPaymentPresenter', 1125), Lcom_lemania_eprospects_client_presenter_applicationpayment_ApplicationPaymentPresenter$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationpayment.', 'ApplicationPaymentPresenter$1', 1126), Lcom_lemania_eprospects_client_presenter_applicationpayment_ApplicationPaymentPresenter$2_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationpayment.', 'ApplicationPaymentPresenter$2', 1127), Lcom_lemania_eprospects_client_event_ApplicationPaymentEvent_2_classLit = createForClass('com.lemania.eprospects.client.event.', 'ApplicationPaymentEvent', 775), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$10_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$10', 1394), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$10$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$10$1', 1395), Lcom_lemania_eprospects_client_presenter_applicationpayment_ApplicationPaymentView_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationpayment.', 'ApplicationPaymentView', 1138), Lcom_lemania_eprospects_client_presenter_applicationpayment_ApplicationPaymentView_1BinderImpl_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationpayment.', 'ApplicationPaymentView_BinderImpl', 1139), Lcom_lemania_eprospects_client_presenter_applicationpayment_ApplicationPaymentView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationpayment.', 'ApplicationPaymentView_BinderImpl$Widgets', 1140), Lcom_lemania_eprospects_client_presenter_applicationpayment_ApplicationPaymentView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationpayment.', 'ApplicationPaymentView_BinderImpl$Widgets$1', 1141), Lcom_lemania_eprospects_client_presenter_applicationpayment_ApplicationPaymentView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationpayment.', 'ApplicationPaymentView_BinderImpl$Widgets$2', 1142), Lcom_lemania_eprospects_client_presenter_applicationpayment_ApplicationPaymentView_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationpayment.', 'ApplicationPaymentView_BinderImpl$Widgets$3', 1143), Lcom_lemania_eprospects_client_presenter_applicationpayment_ApplicationPaymentView_1BinderImpl$Widgets$4_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationpayment.', 'ApplicationPaymentView_BinderImpl$Widgets$4', 1144), Lcom_lemania_eprospects_client_presenter_applicationpayment_ApplicationPaymentView_1BinderImpl$Widgets$5_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationpayment.', 'ApplicationPaymentView_BinderImpl$Widgets$5', 1145), Lcom_lemania_eprospects_shared_applicationform_ApplicationFormRequestFactory_1ApplicationFormRequestContextImpl$8X_2_classLit = createForClass('com.lemania.eprospects.shared.applicationform.', 'ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$8X', 1824);
$entry(onLoad)(3);
