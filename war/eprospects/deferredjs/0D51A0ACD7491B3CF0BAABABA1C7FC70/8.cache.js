function ApplicationStep5CompletedEvent_0(){
  $clinit_ApplicationStep5CompletedEvent();
}

defineSeed(769, 235, {}, ApplicationStep5CompletedEvent_0);
_.dispatch_0 = function dispatch_40(handler){
  dynamicCast(handler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler).onApplicationStep5Completed(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_41(){
  return TYPE_41;
}
;
function ApplicationStep5Presenter_0(eventBus, view, proxy){
  $clinit_ApplicationStep5Presenter();
  Presenter_0.call(this, eventBus, view, proxy, ($clinit_MainPagePresenter() , TYPE_SetMainContent));
  dynamicCast(this.view, Q$ApplicationStep5Presenter$MyView).setUiHandlers(this);
}

defineSeed(1178, 708, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ApplicationStep5Presenter, Q$ApplicationStep5UiHandlers]), ApplicationStep5Presenter_0);
_.onBind = function onBind_36(){
}
;
_.onReset = function onReset_35(){
}
;
function ApplicationStep5View_0(){
  $initWidget_0(this, $build_main_6(new ApplicationStep5View_BinderImpl$Widgets_0(this)));
}

defineSeed(1181, 713, makeCastMap([Q$IsWidget, Q$ApplicationStep5Presenter$MyView]), ApplicationStep5View_0);
_.setInSlot = function setInSlot_8(slot, content_0){
  slot === ($clinit_ApplicationStep5Presenter() , SLOT_ApplicationStep5)?this.main.setWidget(!content_0?null:!content_0.view?null:content_0.view.asWidget()):undefined;
}
;
_.main = null;
function ApplicationStep5View_BinderImpl_0(){
}

defineSeed(1182, 1, {}, ApplicationStep5View_BinderImpl_0);
function $build_main_6(this$static){
  var main, f_VerticalPanel1, f_Label2, f_Label3, f_VerticalPanel4, f_FlowPanel19, f_VerticalPanel20, f_VerticalPanel5, f_VerticalPanel6, f_Label7, f_FlexTable8, f_HorizontalPanel9, f_Label10, f_Label11, f_Label12, f_CheckBox13, f_Grid14, f_Label15, f_TextBox16, f_Label17, f_TextBox18, f_HorizontalPanel21, cmdPreviousStep, sb, cmdNextStep, sb_0;
  main = new SimplePanel_0;
  $add_4(main, (f_VerticalPanel1 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel1, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $add_11(f_VerticalPanel1, (f_Label2 = new Label_0 , f_Label2.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label2.directionalTextHelper, 'MEDICAL ET REGIME ALIMENTAIRE', false) , $updateHorizontalAlignment(f_Label2) , f_Label2)) , $add_11(f_VerticalPanel1, (f_Label3 = new Label_0 , $setTextOrHtml(f_Label3.directionalTextHelper, 'Step 5 of 5', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_11(f_VerticalPanel1, (f_VerticalPanel4 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel4, ALIGN_CENTER) , $add_11(f_VerticalPanel4, (f_VerticalPanel5 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel5, ALIGN_CENTER) , $add_11(f_VerticalPanel5, (f_VerticalPanel6 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel6, ALIGN_LEFT) , $add_11(f_VerticalPanel6, (f_Label7 = new Label_0 , f_Label7.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label7.directionalTextHelper, 'ELEMENTS CHOISIS', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $add_11(f_VerticalPanel6, (f_FlexTable8 = new FlexTable_0 , f_FlexTable8.element.style['width'] = '100%' , f_FlexTable8)) , $add_11(f_VerticalPanel6, (f_HorizontalPanel9 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel9, (f_Label10 = new Label_0 , f_Label10.element['className'] = 'lablel_TotalAmount' , $setTextOrHtml(f_Label10.directionalTextHelper, 'Total', false) , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $add_9(f_HorizontalPanel9, (f_Label11 = new Label_0 , f_Label11.element['className'] = 'lablel_TotalAmount' , $setTextOrHtml(f_Label11.directionalTextHelper, 'Amount', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , f_HorizontalPanel9.element.style['width'] = '100%' , f_HorizontalPanel9)) , f_VerticalPanel6.element.style['width'] = '80%' , f_VerticalPanel6.table['cellSpacing'] = 10 , f_VerticalPanel6)) , f_VerticalPanel5.element.style['width'] = '100%' , f_VerticalPanel5)) , $add_11(f_VerticalPanel4, (f_Label12 = new Label_0 , f_Label12.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label12.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label12) , f_Label12)) , $add_11(f_VerticalPanel4, (f_CheckBox13 = new CheckBox_0 , $setTextOrHtml(f_CheckBox13.directionalTextHelper, "J'ai lu, compris et sign\xE9 les conditions financi\xE8res et g\xE9n\xE9rale, la politique d'annulaltion et/ou les politiques de d\xE9part anticip\xE9.", false) , f_CheckBox13.element.style['width'] = '' , f_CheckBox13)) , $add_11(f_VerticalPanel4, (f_Grid14 = new Grid_0 , $resizeColumns(f_Grid14, 4) , $resizeRows(f_Grid14, 1) , $setWidget_1(f_Grid14, 0, 0, (f_Label15 = new Label_0 , f_Label15.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label15.directionalTextHelper, 'Lieu / Date', false) , $updateHorizontalAlignment(f_Label15) , f_Label15)) , $setWidget_1(f_Grid14, 0, 1, (f_TextBox16 = new TextBox_0 , f_TextBox16.element['className'] = 'sis_textbox' , f_TextBox16)) , $setWidget_1(f_Grid14, 0, 2, (f_Label17 = new Label_0 , f_Label17.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label17.directionalTextHelper, 'Nom / Pr\xE9nom', false) , $updateHorizontalAlignment(f_Label17) , f_Label17)) , $setWidget_1(f_Grid14, 0, 3, (f_TextBox18 = new TextBox_0 , f_TextBox18.element['className'] = 'sis_textbox' , f_TextBox18)) , f_Grid14.element.style['width'] = '80%' , f_Grid14)) , f_VerticalPanel4.element['className'] = 'subSection' , f_VerticalPanel4.element.style['width'] = '900px' , f_VerticalPanel4)) , $add_11(f_VerticalPanel1, (f_FlowPanel19 = new FlowPanel_0 , $add_7(f_FlowPanel19, (f_VerticalPanel20 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel20, ALIGN_RIGHT) , $add_11(f_VerticalPanel20, (f_HorizontalPanel21 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel21, ALIGN_RIGHT) , $add_9(f_HorizontalPanel21, (cmdPreviousStep = new Button_0 , $setHTML(cmdPreviousStep, (sb = new StringBuilder_0 , $append_1(sb.data, 'Pr\xE9c\xE9dant') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data))).html) , $addDomHandler(cmdPreviousStep, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdPreviousStep)) , $add_9(f_HorizontalPanel21, (cmdNextStep = new Button_0 , $setHTML(cmdNextStep, (sb_0 = new StringBuilder_0 , $append_1(sb_0.data, 'Next Step') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb_0.data))).html) , $setInnerText(cmdNextStep.element, 'Suivant') , $addDomHandler(cmdNextStep, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, TYPE_0) , cmdNextStep)) , f_HorizontalPanel21.element.style['width'] = '20%' , f_HorizontalPanel21.table['cellSpacing'] = 10 , f_HorizontalPanel21)) , f_VerticalPanel20.element.style['width'] = '100%' , f_VerticalPanel20)) , f_FlowPanel19.element.style['width'] = '900px' , f_FlowPanel19)) , f_VerticalPanel1.element.style['height'] = '' , f_VerticalPanel1.element.style['width'] = '100%' , f_VerticalPanel1));
  this$static.owner.main = main;
  return main;
}

function ApplicationStep5View_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ApplicationStep5View_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new ApplicationStep5View_BinderImpl$Widgets$2_0(this);
  this.owner = owner;
}

defineSeed(1183, 1, {}, ApplicationStep5View_BinderImpl$Widgets_0);
_.owner = null;
function ApplicationStep5View_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1184, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep5View_BinderImpl$Widgets$1_0);
_.onClick = function onClick_12(event_0){
  $doFire(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep5UiHandlers), Q$ApplicationStep5Presenter).eventBus, new ApplicationStep5CompletedEvent_0, null);
}
;
_.this$1 = null;
function ApplicationStep5View_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1185, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep5View_BinderImpl$Widgets$2_0);
_.onClick = function onClick_13(event_0){
  $doFire(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep5UiHandlers), Q$ApplicationStep5Presenter).eventBus, new GotoPreviousPageEvent_0(($clinit_History() , impl_2?token_1 == null?'':token_1:'')), null);
}
;
_.this$1 = null;
function $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep5$ApplicationStep5Presenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep5$ApplicationStep5Presenter$_annotation$$none$$) {
    result = new ApplicationStep5Presenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep5$ApplicationStep5View$_annotation$$none$$(this$static), $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep5$ApplicationStep5Presenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep5$ApplicationStep5Presenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep5$ApplicationStep5Presenter$_annotation$$none$$;
}

function $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep5$ApplicationStep5View$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep5$ApplicationStep5View$_annotation$$none$$) {
    result = new ApplicationStep5View_0(new ApplicationStep5View_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep5$ApplicationStep5View$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep5$ApplicationStep5View$_annotation$$none$$;
}

defineSeed(1189, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_145(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep5$ApplicationStep5Presenter$_annotation$$none$$(this.this$1.this$0));
}
;
defineSeed(1247, 708, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationPaymentEvent$ApplicationPaymentHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$GotoPreviousPageEvent$GotoPreviousPageHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler, Q$MainPagePresenter, Q$MainPageUiHandler]));
_.onApplicationStep5Completed = function onApplicationStep5Completed(event_0){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationpayment', true);
}
;
defineSeed(1249, 732, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationPaymentEvent$ApplicationPaymentHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$GotoPreviousPageEvent$GotoPreviousPageHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler]));
_.onApplicationStep5Completed = function onApplicationStep5Completed_0(event_0){
  $getPresenter(this, new MainPagePresenterMyProxyImpl$11_0(this.eventBus));
}
;
function $success_43(){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new MainPagePresenterMyProxyImpl$11$1_0);
}

function MainPagePresenterMyProxyImpl$11_0($anonymous0){
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(1254, 721, {}, MainPagePresenterMyProxyImpl$11_0);
_.success = function success_45(presenter){
  $success_43(dynamicCast(presenter, Q$MainPagePresenter));
}
;
function MainPagePresenterMyProxyImpl$11$1_0(){
}

defineSeed(1255, 1, {}, MainPagePresenterMyProxyImpl$11$1_0);
_.execute_0 = function execute_71(){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationpayment', true);
}
;
var Lcom_lemania_eprospects_client_presenter_applicationstep5_ApplicationStep5Presenter_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep5.', 'ApplicationStep5Presenter', 1178), Lcom_lemania_eprospects_client_event_ApplicationStep5CompletedEvent_2_classLit = createForClass('com.lemania.eprospects.client.event.', 'ApplicationStep5CompletedEvent', 769), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$11_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$11', 1254), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$11$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$11$1', 1255), Lcom_lemania_eprospects_client_presenter_applicationstep5_ApplicationStep5View_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep5.', 'ApplicationStep5View', 1181), Lcom_lemania_eprospects_client_presenter_applicationstep5_ApplicationStep5View_1BinderImpl_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep5.', 'ApplicationStep5View_BinderImpl', 1182), Lcom_lemania_eprospects_client_presenter_applicationstep5_ApplicationStep5View_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep5.', 'ApplicationStep5View_BinderImpl$Widgets', 1183), Lcom_lemania_eprospects_client_presenter_applicationstep5_ApplicationStep5View_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep5.', 'ApplicationStep5View_BinderImpl$Widgets$1', 1184), Lcom_lemania_eprospects_client_presenter_applicationstep5_ApplicationStep5View_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep5.', 'ApplicationStep5View_BinderImpl$Widgets$2', 1185);
$entry(onLoad)(8);
