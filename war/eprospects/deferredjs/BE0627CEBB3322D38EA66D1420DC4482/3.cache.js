function ApplicationPaymentEvent_0(){
  $clinit_ApplicationPaymentEvent();
}

defineSeed(761, 234, {}, ApplicationPaymentEvent_0);
_.dispatch_0 = function dispatch_34(handler){
  dynamicCast(handler, Q$ApplicationPaymentEvent$ApplicationPaymentHandler).onApplicationPayment(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_35(){
  return TYPE_35;
}
;
function ApplicationPaymentPresenter_0(eventBus, view, proxy){
  $clinit_ApplicationPaymentPresenter();
  Presenter_0.call(this, eventBus, view, proxy, ($clinit_MainPagePresenter() , TYPE_SetMainContent));
  dynamicCast(this.view, Q$ApplicationPaymentPresenter$MyView).setUiHandlers(this);
}

defineSeed(1111, 706, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ApplicationPaymentPresenter, Q$ApplicationPaymentUiHandlers]), ApplicationPaymentPresenter_0);
_.onBind = function onBind_31(){
  $setHTML_0(dynamicCast(dynamicCast(this.view, Q$ApplicationPaymentPresenter$MyView), Q$ApplicationPaymentView).htmlPaypalButton, "<form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_top'><input type='hidden' name='cmd' value='_xclick'><input type='hidden' name='item_name' value='Lemania Summer Camp & Courses'><input type='hidden' name='amount' value='0.1'><input type='hidden' name='business' value='J2A4WFF2URAN2'><input type='hidden' name='lc' value='CH'><input type='hidden' name='button_subtype' value='services'><input type='hidden' name='no_note' value='1'><input type='hidden' name='no_shipping' value='1'><input type='hidden' name='rm' value='1'><input type='hidden' name='return' value='http://lemania-eprospects-dev.appspot.com/#applicationfinal'><input type='hidden' name='currency_code' value='CHF'><input type='hidden' name='bn' value='PP-BuyNowBF:btn_paynowCC_LG.gif:NonHosted'><input type='image' src='https://www.paypalobjects.com/fr_FR/CH/i/btn/btn_paynowCC_LG.gif' border='0' name='submit' alt='PayPal - la solution de paiement en ligne la plus simple et la plus s\xE9curis\xE9e !'><img alt='' border='0' src='https://www.paypalobjects.com/fr_FR/i/scr/pixel.gif' width='1' height='1'><\/form>");
}
;
_.onReset = function onReset_30(){
}
;
function ApplicationPaymentView_0(){
  $initWidget_0(this, $build_main_1(new ApplicationPaymentView_BinderImpl$Widgets_0(this)));
}

defineSeed(1114, 711, makeCastMap([Q$IsWidget, Q$ApplicationPaymentPresenter$MyView, Q$ApplicationPaymentView]), ApplicationPaymentView_0);
_.setInSlot = function setInSlot_3(slot, content_0){
  slot === ($clinit_ApplicationPaymentPresenter() , SLOT_ApplicationPayment)?this.main.setWidget(!content_0?null:!content_0.view?null:content_0.view.asWidget()):undefined;
}
;
_.cmdNextStep = null;
_.htmlPaypalButton = null;
_.main = null;
function ApplicationPaymentView_BinderImpl_0(){
}

defineSeed(1115, 1, {}, ApplicationPaymentView_BinderImpl_0);
function $build_main_1(this$static){
  var main, f_VerticalPanel1, f_Label2, f_Label3, f_FlowPanel4, f_HorizontalPanel5, f_VerticalPanel18, f_VerticalPanel6, f_Label7, f_FlexTable8, f_HorizontalPanel9, f_Label10, f_Label11, f_VerticalPanel12, optionPaypal, htmlPaypalButton, optionDirect, f_Label13, f_HorizontalPanel14, f_Label15, f_RadioButton16, f_RadioButton17, f_HorizontalPanel19, f_Button20, sb, cmdNextStep;
  main = new SimplePanel_0;
  $add_4(main, (f_VerticalPanel1 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel1, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $add_11(f_VerticalPanel1, (f_Label2 = new Label_0 , f_Label2.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label2.directionalTextHelper, 'POSSIBILITES DE PAIEMENT', false) , $updateHorizontalAlignment(f_Label2) , f_Label2)) , $add_11(f_VerticalPanel1, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label3.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_11(f_VerticalPanel1, (f_FlowPanel4 = new FlowPanel_0 , $add_7(f_FlowPanel4, (f_HorizontalPanel5 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel5, (f_VerticalPanel6 = new VerticalPanel_0 , $add_11(f_VerticalPanel6, (f_Label7 = new Label_0 , f_Label7.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label7.directionalTextHelper, 'ELEMENTS CHOISIS', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $add_11(f_VerticalPanel6, (f_FlexTable8 = new FlexTable_0 , f_FlexTable8.element.style['width'] = '100%' , f_FlexTable8)) , $add_11(f_VerticalPanel6, (f_HorizontalPanel9 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel9, (f_Label10 = new Label_0 , f_Label10.element['className'] = 'lablel_TotalAmount' , $setTextOrHtml(f_Label10.directionalTextHelper, 'Total', false) , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $add_9(f_HorizontalPanel9, (f_Label11 = new Label_0 , f_Label11.element['className'] = 'lablel_TotalAmount' , $setTextOrHtml(f_Label11.directionalTextHelper, 'Amount', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , f_HorizontalPanel9.element.style['width'] = '100%' , f_HorizontalPanel9)) , f_VerticalPanel6.element['className'] = 'subSection' , f_VerticalPanel6.element.style['width'] = '400px' , f_VerticalPanel6.table['cellSpacing'] = 10 , f_VerticalPanel6)) , $add_9(f_HorizontalPanel5, (f_VerticalPanel12 = new VerticalPanel_0 , $add_11(f_VerticalPanel12, (optionPaypal = new RadioButton_0 , $setTextOrHtml(optionPaypal.directionalTextHelper, 'PAYPAL', false) , $setValue_1(optionPaypal, ($clinit_Boolean() , $clinit_Boolean() , TRUE_1)) , $addDomHandler(optionPaypal, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , optionPaypal)) , $add_11(f_VerticalPanel12, (htmlPaypalButton = new HTML_0 , htmlPaypalButton.element.style['whiteSpace'] = ($clinit_Style$WhiteSpace() , 'normal') , this$static.owner.htmlPaypalButton = htmlPaypalButton , htmlPaypalButton)) , $add_11(f_VerticalPanel12, (optionDirect = new RadioButton_0 , $setTextOrHtml(optionDirect.directionalTextHelper, 'PAIEMENT DIRECT', false) , $addDomHandler(optionDirect, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE_0) , optionDirect)) , $add_11(f_VerticalPanel12, (f_Label13 = new Label_0 , $setTextOrHtml(f_Label13.directionalTextHelper, "Je suis r\xE9sident suisse et je souhaite effectuer le paiement, au plus tard quatre semaines avant le d\xE9but du cours d'\xE9t\xE9, directement au secr\xE9tariat de l'Ecole L\xE9mania, Chemin de Pr\xE9ville 3, \xE0 Lausanne.", false) , $updateHorizontalAlignment(f_Label13) , f_Label13)) , $add_11(f_VerticalPanel12, (f_HorizontalPanel14 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel14, (f_Label15 = new Label_0 , $setTextOrHtml(f_Label15.directionalTextHelper, 'Je paierai', false) , $updateHorizontalAlignment(f_Label15) , f_Label15)) , $add_9(f_HorizontalPanel14, (f_RadioButton16 = new RadioButton_0 , $setTextOrHtml(f_RadioButton16.directionalTextHelper, 'En esp\xE8ce', false) , f_RadioButton16)) , $add_9(f_HorizontalPanel14, (f_RadioButton17 = new RadioButton_0 , $setTextOrHtml(f_RadioButton17.directionalTextHelper, 'Par carte de cr\xE9dit', false) , f_RadioButton17)) , f_HorizontalPanel14.element.style['width'] = '100%' , f_HorizontalPanel14)) , f_VerticalPanel12.element.style['width'] = '100%' , f_VerticalPanel12.table['cellSpacing'] = 10 , f_VerticalPanel12)) , f_HorizontalPanel5.element.style['width'] = '100%' , f_HorizontalPanel5.table['cellSpacing'] = 10 , f_HorizontalPanel5)) , $add_7(f_FlowPanel4, (f_VerticalPanel18 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel18, ALIGN_RIGHT) , $add_11(f_VerticalPanel18, (f_HorizontalPanel19 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel19, ALIGN_RIGHT) , $add_9(f_HorizontalPanel19, (f_Button20 = new Button_0 , $setHTML(f_Button20, (sb = new StringBuilder_0 , $append_1(sb.data, 'Pr\xE9c\xE9dant') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data))).html) , f_Button20)) , $add_9(f_HorizontalPanel19, (cmdNextStep = new Button_0 , $setInnerText(cmdNextStep.element, 'Terminer') , setVisible(cmdNextStep.element, false) , $addDomHandler(cmdNextStep, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, TYPE_0) , this$static.owner.cmdNextStep = cmdNextStep , cmdNextStep)) , f_HorizontalPanel19.element.style['width'] = '20%' , f_HorizontalPanel19.table['cellSpacing'] = 10 , f_HorizontalPanel19)) , f_VerticalPanel18.element.style['width'] = '100%' , f_VerticalPanel18)) , f_FlowPanel4.element.style['width'] = '900px' , f_FlowPanel4)) , f_VerticalPanel1.element.style['height'] = '' , f_VerticalPanel1.element.style['width'] = '100%' , f_VerticalPanel1));
  this$static.owner.main = main;
  return main;
}

function ApplicationPaymentView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ApplicationPaymentView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new ApplicationPaymentView_BinderImpl$Widgets$2_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new ApplicationPaymentView_BinderImpl$Widgets$3_0(this);
  this.owner = owner;
}

defineSeed(1116, 1, {}, ApplicationPaymentView_BinderImpl$Widgets_0);
_.owner = null;
function ApplicationPaymentView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1117, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationPaymentView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_0(event_0){
  $doFire(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationPaymentUiHandlers), Q$ApplicationPaymentPresenter).eventBus, new ApplicationPaymentEvent_0, null);
}
;
_.this$1 = null;
function ApplicationPaymentView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1118, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationPaymentView_BinderImpl$Widgets$2_0);
_.onClick = function onClick_1(event_0){
  $setVisible_0(this.this$1.owner.cmdNextStep, true);
}
;
_.this$1 = null;
function ApplicationPaymentView_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1119, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationPaymentView_BinderImpl$Widgets$3_0);
_.onClick = function onClick_2(event_0){
  $setVisible_0(this.this$1.owner.cmdNextStep, false);
}
;
_.this$1 = null;
function $get_Key$type$com$lemania$eprospects$client$presenter$applicationpayment$ApplicationPaymentPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationpayment$ApplicationPaymentPresenter$_annotation$$none$$) {
    result = new ApplicationPaymentPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$eprospects$client$presenter$applicationpayment$ApplicationPaymentView$_annotation$$none$$(this$static), $get_Key$type$com$lemania$eprospects$client$presenter$applicationpayment$ApplicationPaymentPresenter$MyProxy$_annotation$$none$$(this$static));
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

defineSeed(1123, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_140(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$eprospects$client$presenter$applicationpayment$ApplicationPaymentPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
defineSeed(1237, 706, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationPaymentEvent$ApplicationPaymentHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler, Q$MainPagePresenter, Q$MainPageUiHandler]));
_.onApplicationPayment = function onApplicationPayment(event_0){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationfinal', true);
}
;
defineSeed(1239, 730, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationPaymentEvent$ApplicationPaymentHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler]));
_.onApplicationPayment = function onApplicationPayment_0(event_0){
  $getPresenter(this, new MainPagePresenterMyProxyImpl$10_0(this.eventBus));
}
;
function $success_42(){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new MainPagePresenterMyProxyImpl$10$1_0);
}

function MainPagePresenterMyProxyImpl$10_0($anonymous0){
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(1242, 719, {}, MainPagePresenterMyProxyImpl$10_0);
_.success = function success_44(presenter){
  $success_42(dynamicCast(presenter, Q$MainPagePresenter));
}
;
function MainPagePresenterMyProxyImpl$10$1_0(){
}

defineSeed(1243, 1, {}, MainPagePresenterMyProxyImpl$10$1_0);
_.execute_0 = function execute_71(){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationfinal', true);
}
;
var Lcom_lemania_eprospects_client_presenter_applicationpayment_ApplicationPaymentPresenter_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationpayment.', 'ApplicationPaymentPresenter', 1111), Lcom_lemania_eprospects_client_event_ApplicationPaymentEvent_2_classLit = createForClass('com.lemania.eprospects.client.event.', 'ApplicationPaymentEvent', 761), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$10_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$10', 1242), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$10$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$10$1', 1243), Lcom_lemania_eprospects_client_presenter_applicationpayment_ApplicationPaymentView_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationpayment.', 'ApplicationPaymentView', 1114), Lcom_lemania_eprospects_client_presenter_applicationpayment_ApplicationPaymentView_1BinderImpl_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationpayment.', 'ApplicationPaymentView_BinderImpl', 1115), Lcom_lemania_eprospects_client_presenter_applicationpayment_ApplicationPaymentView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationpayment.', 'ApplicationPaymentView_BinderImpl$Widgets', 1116), Lcom_lemania_eprospects_client_presenter_applicationpayment_ApplicationPaymentView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationpayment.', 'ApplicationPaymentView_BinderImpl$Widgets$1', 1117), Lcom_lemania_eprospects_client_presenter_applicationpayment_ApplicationPaymentView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationpayment.', 'ApplicationPaymentView_BinderImpl$Widgets$2', 1118), Lcom_lemania_eprospects_client_presenter_applicationpayment_ApplicationPaymentView_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationpayment.', 'ApplicationPaymentView_BinderImpl$Widgets$3', 1119);
$entry(onLoad)(3);
