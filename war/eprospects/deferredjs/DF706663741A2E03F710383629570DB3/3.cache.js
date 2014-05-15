function ApplicationPaymentEvent_0(){
  $clinit_ApplicationPaymentEvent();
}

defineSeed(764, 233, {}, ApplicationPaymentEvent_0);
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
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ApplicationFormRequestFactory_ApplicationFormRequestContextImpl_0(rf);
  $fire($savePaymentStep(rc, this$static.curUser.userEmail, this$static.curUser.applicationId, optPaypal, optPayDirect, optBankTransfer, optDirectCash, optDirectCard), new ApplicationPaymentPresenter$2_0(this$static));
}

function ApplicationPaymentPresenter_0(eventBus, view, proxy, placeManager){
  $clinit_ApplicationPaymentPresenter();
  Presenter_0.call(this, eventBus, view, proxy, ($clinit_MainPagePresenter() , TYPE_SetMainContent));
  this.placeManager = placeManager;
  dynamicCast(this.view, Q$ApplicationPaymentPresenter$MyView).setUiHandlers(this);
}

defineSeed(1114, 704, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ApplicationItemSavedEvent$ApplicationItemSavedHandler, Q$ApplicationItemSelectedEvent$ApplicationItemSelectedHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$ApplicationPaymentPresenter, Q$ApplicationPaymentUiHandlers]), ApplicationPaymentPresenter_0);
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
  $initialize(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new ApplicationFormRequestFactory_ApplicationFormRequestContextImpl_0(rf);
  $fire($loadAndReturn(rc, this.curUser.userEmail, this.curUser.applicationId), new ApplicationPaymentPresenter$1_0(this));
  $setOnLeaveConfirmation(this.placeManager, ($clinit_NotificationTypes() , 'Merci de cliquer sur Enregistrer pour sauvegarder les informations modifi\xE9es.'));
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

defineSeed(1115, 644, makeCastMap([Q$Receiver]), ApplicationPaymentPresenter$1_0);
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

defineSeed(1116, 644, makeCastMap([Q$Receiver]), ApplicationPaymentPresenter$2_0);
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
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this$static.uiHandlers, Q$ApplicationPaymentUiHandlers), Q$ApplicationPaymentPresenter).placeManager, ($clinit_NotificationTypes() , 'Merci de cliquer sur Enregistrer pour sauvegarder les informations modifi\xE9es.'));
}

function $onOptPayDirectClick(this$static){
  $setVisible_0(this$static.cmdNextStep, true);
  $setVisible_0(this$static.pnlOptionDirect, true);
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this$static.uiHandlers, Q$ApplicationPaymentUiHandlers), Q$ApplicationPaymentPresenter).placeManager, ($clinit_NotificationTypes() , 'Merci de cliquer sur Enregistrer pour sauvegarder les informations modifi\xE9es.'));
}

function $onOptPaypalClick(this$static){
  $setVisible_0(this$static.cmdNextStep, false);
  $setVisible_0(this$static.pnlOptionDirect, false);
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this$static.uiHandlers, Q$ApplicationPaymentUiHandlers), Q$ApplicationPaymentPresenter).placeManager, null);
}

function $showApplicationDetails(this$static, app){
  $setText_1(this$static.lblApplicationInfo, app.getEmailAddress() + ' - ' + app.getApplicationID());
  $setValue_0(this$static.optPaypal, ($clinit_Boolean() , app.isOptPaypal()?TRUE_1:FALSE_1));
  $setValue_0(this$static.optPayDirect, app.isOptPayDirect()?TRUE_1:FALSE_1);
  $setValue_0(this$static.optBankTransfer, app.isOptBankTransfer()?TRUE_1:FALSE_1);
  $setValue_0(this$static.optDirectCash, app.isOptDirectCash()?TRUE_1:FALSE_1);
  $setValue_0(this$static.optDirectCard, app.isOptDirectCard()?TRUE_1:FALSE_1);
}

function ApplicationPaymentView_0(){
  $initWidget_0(this, $build_main_1(new ApplicationPaymentView_BinderImpl$Widgets_0(this)));
}

defineSeed(1127, 709, makeCastMap([Q$IsWidget, Q$ApplicationPaymentPresenter$MyView]), ApplicationPaymentView_0);
_.setInSlot = function setInSlot_3(slot, content_0){
  slot === ($clinit_ApplicationPaymentPresenter() , SLOT_ApplicationPayment)?this.main.setWidget(!content_0?null:!content_0.view?null:content_0.view.asWidget()):undefined;
}
;
_.cmdNextStep = null;
_.htmlPaypalButton = null;
_.lblApplicationInfo = null;
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

defineSeed(1128, 1, {}, ApplicationPaymentView_BinderImpl_0);
function $build_main_1(this$static){
  var main, f_VerticalPanel1, f_Label2, f_Label3, f_HorizontalPanel4, lblApplicationInfo, f_Label5, f_FlowPanel6, f_HorizontalPanel7, f_VerticalPanel16, f_VerticalPanel8, f_Label9, tblItems, f_HorizontalPanel10, f_Label11, lblTotalAmount, f_VerticalPanel12, optPaypal, htmlPaypalButton, optBankTransfer, f_Image13, optPayDirect, f_Label14, pnlOptionDirect, f_Label15, optDirectCash, optDirectCard, f_HorizontalPanel17, cmdPreviousStep, sb, cmdNextStep;
  main = new SimplePanel_0;
  $add_4(main, (f_VerticalPanel1 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel1, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $add_11(f_VerticalPanel1, (f_Label2 = new Label_0 , f_Label2.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label2.directionalTextHelper, 'POSSIBILITES DE PAIEMENT', false) , $updateHorizontalAlignment(f_Label2) , f_Label2)) , $add_11(f_VerticalPanel1, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label3.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_11(f_VerticalPanel1, (f_HorizontalPanel4 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel4, (lblApplicationInfo = new Label_0 , $setTextOrHtml(lblApplicationInfo.directionalTextHelper, "L'inscription ID :", false) , $updateHorizontalAlignment(lblApplicationInfo) , this$static.owner.lblApplicationInfo = lblApplicationInfo , lblApplicationInfo)) , $add_9(f_HorizontalPanel4, (f_Label5 = new Label_0 , $setAutoHorizontalAlignment(f_Label5, ALIGN_RIGHT) , $setTextOrHtml(f_Label5.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label5) , f_Label5)) , f_HorizontalPanel4.element.style['width'] = '100%' , f_HorizontalPanel4.table['cellSpacing'] = 5 , f_HorizontalPanel4)) , $add_11(f_VerticalPanel1, (f_FlowPanel6 = new FlowPanel_0 , $add_7(f_FlowPanel6, (f_HorizontalPanel7 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel7, (f_VerticalPanel8 = new VerticalPanel_0 , $add_11(f_VerticalPanel8, (f_Label9 = new Label_0 , f_Label9.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label9.directionalTextHelper, 'ELEMENTS CHOISIS', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $add_11(f_VerticalPanel8, (tblItems = new FlexTable_0 , tblItems.element.style['width'] = '100%' , this$static.owner.tblItems = tblItems , tblItems)) , $add_11(f_VerticalPanel8, (f_HorizontalPanel10 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel10, (f_Label11 = new Label_0 , f_Label11.element['className'] = 'lablel_TotalAmount' , $setTextOrHtml(f_Label11.directionalTextHelper, 'Total', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , $add_9(f_HorizontalPanel10, (lblTotalAmount = new Label_0 , lblTotalAmount.element['className'] = 'lablel_TotalAmount' , $setAutoHorizontalAlignment(lblTotalAmount, ALIGN_RIGHT) , $setTextOrHtml(lblTotalAmount.directionalTextHelper, '.', false) , $updateHorizontalAlignment(lblTotalAmount) , this$static.owner.lblTotalAmount = lblTotalAmount , lblTotalAmount)) , f_HorizontalPanel10.element.style['width'] = '100%' , f_HorizontalPanel10)) , f_VerticalPanel8.element['className'] = 'subSection' , f_VerticalPanel8.element.style['width'] = '400px' , f_VerticalPanel8.table['cellSpacing'] = 10 , f_VerticalPanel8)) , $add_9(f_HorizontalPanel7, (f_VerticalPanel12 = new VerticalPanel_0 , $add_11(f_VerticalPanel12, (optPaypal = new RadioButton_0('payment') , $setTextOrHtml(optPaypal.directionalTextHelper, 'PAYPAL', false) , $setValue_0(optPaypal, ($clinit_Boolean() , $clinit_Boolean() , TRUE_1)) , $addDomHandler(optPaypal, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , this$static.owner.optPaypal = optPaypal , optPaypal)) , $add_11(f_VerticalPanel12, (htmlPaypalButton = new HTML_0 , htmlPaypalButton.element.style['whiteSpace'] = ($clinit_Style$WhiteSpace() , 'normal') , this$static.owner.htmlPaypalButton = htmlPaypalButton , htmlPaypalButton)) , $add_11(f_VerticalPanel12, (optBankTransfer = new RadioButton_0('payment') , $setTextOrHtml(optBankTransfer.directionalTextHelper, 'VIREMENT BANCAIRE', false) , $addDomHandler(optBankTransfer, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5, TYPE_0) , this$static.owner.optBankTransfer = optBankTransfer , optBankTransfer)) , $add_11(f_VerticalPanel12, (f_Image13 = new Image_1 , $setUrl(f_Image13, ($clinit_UriUtils() , new SafeUriString_0('images/virement_bancaire.png'))) , f_Image13)) , $add_11(f_VerticalPanel12, (optPayDirect = new RadioButton_0('payment') , $setTextOrHtml(optPayDirect.directionalTextHelper, 'PAIEMENT DIRECT', false) , $addDomHandler(optPayDirect, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE_0) , this$static.owner.optPayDirect = optPayDirect , optPayDirect)) , $add_11(f_VerticalPanel12, (f_Label14 = new Label_0 , $setTextOrHtml(f_Label14.directionalTextHelper, "Je suis r\xE9sident suisse et je souhaite effectuer le paiement, au plus tard quatre semaines avant le d\xE9but du cours d'\xE9t\xE9, directement au secr\xE9tariat de l'Ecole L\xE9mania, Chemin de Pr\xE9ville 3, \xE0 Lausanne.", false) , $updateHorizontalAlignment(f_Label14) , f_Label14)) , $add_11(f_VerticalPanel12, (pnlOptionDirect = new HorizontalPanel_0 , $add_9(pnlOptionDirect, (f_Label15 = new Label_0 , $setTextOrHtml(f_Label15.directionalTextHelper, 'Je paierai', false) , $updateHorizontalAlignment(f_Label15) , f_Label15)) , $add_9(pnlOptionDirect, (optDirectCash = new RadioButton_0('direct') , $setTextOrHtml(optDirectCash.directionalTextHelper, 'En esp\xE8ce', false) , this$static.owner.optDirectCash = optDirectCash , optDirectCash)) , $add_9(pnlOptionDirect, (optDirectCard = new RadioButton_0('direct') , $setTextOrHtml(optDirectCard.directionalTextHelper, 'Par carte de cr\xE9dit', false) , this$static.owner.optDirectCard = optDirectCard , optDirectCard)) , setVisible(pnlOptionDirect.element, false) , pnlOptionDirect.element.style['width'] = '100%' , this$static.owner.pnlOptionDirect = pnlOptionDirect , pnlOptionDirect)) , f_VerticalPanel12.element.style['width'] = '100%' , f_VerticalPanel12.table['cellSpacing'] = 10 , f_VerticalPanel12)) , f_HorizontalPanel7.element.style['width'] = '100%' , f_HorizontalPanel7.table['cellSpacing'] = 10 , f_HorizontalPanel7)) , $add_7(f_FlowPanel6, (f_VerticalPanel16 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel16, ALIGN_RIGHT) , $add_11(f_VerticalPanel16, (f_HorizontalPanel17 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel17, ALIGN_RIGHT) , $add_9(f_HorizontalPanel17, (cmdPreviousStep = new Button_0 , $setHTML(cmdPreviousStep, (sb = new StringBuilder_0 , sb.impl.string += 'Pr\xE9c\xE9dant' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string)).html) , $addDomHandler(cmdPreviousStep, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, TYPE_0) , cmdPreviousStep)) , $add_9(f_HorizontalPanel17, (cmdNextStep = new Button_0 , $setInnerText(cmdNextStep.element, 'Terminer') , setVisible(cmdNextStep.element, false) , $addDomHandler(cmdNextStep, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, TYPE_0) , this$static.owner.cmdNextStep = cmdNextStep , cmdNextStep)) , f_HorizontalPanel17.element.style['width'] = '20%' , f_HorizontalPanel17.table['cellSpacing'] = 10 , f_HorizontalPanel17)) , f_VerticalPanel16.element.style['width'] = '100%' , f_VerticalPanel16)) , f_FlowPanel6.element.style['width'] = '900px' , f_FlowPanel6)) , f_VerticalPanel1.element.style['height'] = '' , f_VerticalPanel1.element.style['width'] = '100%' , f_VerticalPanel1));
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

defineSeed(1129, 1, {}, ApplicationPaymentView_BinderImpl$Widgets_0);
_.owner = null;
function ApplicationPaymentView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1130, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationPaymentView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_1(event_0){
  $onCmdNextStepClick(this.this$1.owner);
}
;
_.this$1 = null;
function ApplicationPaymentView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1131, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationPaymentView_BinderImpl$Widgets$2_0);
_.onClick = function onClick_2(event_0){
  $onOptPayDirectClick(this.this$1.owner);
}
;
_.this$1 = null;
function ApplicationPaymentView_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1132, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationPaymentView_BinderImpl$Widgets$3_0);
_.onClick = function onClick_3(event_0){
  $onOptPaypalClick(this.this$1.owner);
}
;
_.this$1 = null;
function ApplicationPaymentView_BinderImpl$Widgets$4_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1133, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationPaymentView_BinderImpl$Widgets$4_0);
_.onClick = function onClick_4(event_0){
  $doFire(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationPaymentUiHandlers), Q$ApplicationPaymentPresenter).eventBus, new GotoPreviousPageEvent_0(($clinit_History() , impl_2?token_1 == null?'':token_1:'')), null);
}
;
_.this$1 = null;
function ApplicationPaymentView_BinderImpl$Widgets$5_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1134, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationPaymentView_BinderImpl$Widgets$5_0);
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

defineSeed(1138, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_146(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$eprospects$client$presenter$applicationpayment$ApplicationPaymentPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
defineSeed(1378, 704, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationPaymentEvent$ApplicationPaymentHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$GotoPreviousPageEvent$GotoPreviousPageHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler, Q$MainPagePresenter, Q$MainPageUiHandler]));
_.onApplicationPayment = function onApplicationPayment(event_0){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationfinal', true);
}
;
defineSeed(1380, 729, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationPaymentEvent$ApplicationPaymentHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$GotoPreviousPageEvent$GotoPreviousPageHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler]));
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

defineSeed(1383, 718, {}, MainPagePresenterMyProxyImpl$10_0);
_.success = function success_58(presenter){
  $success_56(dynamicCast(presenter, Q$MainPagePresenter));
}
;
function MainPagePresenterMyProxyImpl$10$1_0(){
}

defineSeed(1384, 1, {}, MainPagePresenterMyProxyImpl$10$1_0);
_.execute_0 = function execute_83(){
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

defineSeed(1813, 648, makeCastMap([Q$AbstractRequest]), ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$8X_0);
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
var Lcom_lemania_eprospects_client_presenter_applicationpayment_ApplicationPaymentPresenter_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationpayment.', 'ApplicationPaymentPresenter', 1114), Lcom_lemania_eprospects_client_presenter_applicationpayment_ApplicationPaymentPresenter$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationpayment.', 'ApplicationPaymentPresenter$1', 1115), Lcom_lemania_eprospects_client_presenter_applicationpayment_ApplicationPaymentPresenter$2_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationpayment.', 'ApplicationPaymentPresenter$2', 1116), Lcom_lemania_eprospects_client_event_ApplicationPaymentEvent_2_classLit = createForClass('com.lemania.eprospects.client.event.', 'ApplicationPaymentEvent', 764), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$10_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$10', 1383), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$10$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$10$1', 1384), Lcom_lemania_eprospects_client_presenter_applicationpayment_ApplicationPaymentView_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationpayment.', 'ApplicationPaymentView', 1127), Lcom_lemania_eprospects_client_presenter_applicationpayment_ApplicationPaymentView_1BinderImpl_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationpayment.', 'ApplicationPaymentView_BinderImpl', 1128), Lcom_lemania_eprospects_client_presenter_applicationpayment_ApplicationPaymentView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationpayment.', 'ApplicationPaymentView_BinderImpl$Widgets', 1129), Lcom_lemania_eprospects_client_presenter_applicationpayment_ApplicationPaymentView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationpayment.', 'ApplicationPaymentView_BinderImpl$Widgets$1', 1130), Lcom_lemania_eprospects_client_presenter_applicationpayment_ApplicationPaymentView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationpayment.', 'ApplicationPaymentView_BinderImpl$Widgets$2', 1131), Lcom_lemania_eprospects_client_presenter_applicationpayment_ApplicationPaymentView_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationpayment.', 'ApplicationPaymentView_BinderImpl$Widgets$3', 1132), Lcom_lemania_eprospects_client_presenter_applicationpayment_ApplicationPaymentView_1BinderImpl$Widgets$4_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationpayment.', 'ApplicationPaymentView_BinderImpl$Widgets$4', 1133), Lcom_lemania_eprospects_client_presenter_applicationpayment_ApplicationPaymentView_1BinderImpl$Widgets$5_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationpayment.', 'ApplicationPaymentView_BinderImpl$Widgets$5', 1134), Lcom_lemania_eprospects_shared_applicationform_ApplicationFormRequestFactory_1ApplicationFormRequestContextImpl$8X_2_classLit = createForClass('com.lemania.eprospects.shared.applicationform.', 'ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$8X', 1813);
$entry(onLoad)(3);
