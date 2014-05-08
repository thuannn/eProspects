function ApplicationStep4CompletedEvent_0(){
  $clinit_ApplicationStep4CompletedEvent();
}

defineSeed(775, 235, {}, ApplicationStep4CompletedEvent_0);
_.dispatch_0 = function dispatch_39(handler){
  dynamicCast(handler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler).onApplicationStep4Completed(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_40(){
  return TYPE_40;
}
;
function ApplicationStep4Presenter_0(eventBus, view, proxy){
  $clinit_ApplicationStep4Presenter();
  Presenter_0.call(this, eventBus, view, proxy, ($clinit_MainPagePresenter() , TYPE_SetMainContent));
  dynamicCast(this.view, Q$ApplicationStep4Presenter$MyView).setUiHandlers(this);
}

defineSeed(1173, 715, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ApplicationStep4Presenter, Q$ApplicationStep4UiHandlers]), ApplicationStep4Presenter_0);
_.onBind = function onBind_35(){
}
;
_.onReset = function onReset_34(){
}
;
function ApplicationStep4View_0(){
  $initWidget_0(this, $build_main_5(new ApplicationStep4View_BinderImpl$Widgets_0(this)));
}

defineSeed(1176, 720, makeCastMap([Q$IsWidget, Q$ApplicationStep4Presenter$MyView]), ApplicationStep4View_0);
_.setInSlot = function setInSlot_7(slot, content_0){
  slot === ($clinit_ApplicationStep4Presenter() , SLOT_ApplicationStep4)?this.main.setWidget(!content_0?null:!content_0.view?null:content_0.view.asWidget()):undefined;
}
;
_.main = null;
function ApplicationStep4View_BinderImpl_0(){
}

defineSeed(1177, 1, {}, ApplicationStep4View_BinderImpl_0);
function $build_main_5(this$static){
  var main, f_VerticalPanel1, f_Label2, f_Label3, f_FlowPanel4, f_HorizontalPanel5, f_VerticalPanel38, f_VerticalPanel6, f_Label7, f_Label8, f_HorizontalPanel9, f_RadioButton10, f_RadioButton11, f_Label12, f_TextArea13, f_Label14, f_Label15, f_HorizontalPanel16, f_RadioButton17, f_RadioButton18, f_Label19, f_TextArea20, f_Label21, f_Label22, f_HorizontalPanel23, f_RadioButton24, f_RadioButton25, f_Label26, f_TextArea27, f_Label28, f_Label29, f_HorizontalPanel30, f_TextArea31, f_VerticalPanel32, f_Label33, f_FlexTable34, f_HorizontalPanel35, f_Label36, f_Label37, f_HorizontalPanel39, cmdPreviousStep, sb, cmdNextStep, sb_0;
  main = new SimplePanel_0;
  $add_4(main, (f_VerticalPanel1 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel1, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $add_11(f_VerticalPanel1, (f_Label2 = new Label_0 , f_Label2.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label2.directionalTextHelper, 'MEDICAL ET REGIME ALIMENTAIRE', false) , $updateHorizontalAlignment(f_Label2) , f_Label2)) , $add_11(f_VerticalPanel1, (f_Label3 = new Label_0 , $setTextOrHtml(f_Label3.directionalTextHelper, 'Step 4 of 5', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_11(f_VerticalPanel1, (f_FlowPanel4 = new FlowPanel_0 , $add_7(f_FlowPanel4, (f_HorizontalPanel5 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel5, (f_VerticalPanel6 = new VerticalPanel_0 , $add_11(f_VerticalPanel6, (f_Label7 = new Label_0 , $setTextOrHtml(f_Label7.directionalTextHelper, "L'\xE9l\xE8ve a-t-il/elle un probl\xE8me de sant\xE9, n\xE9cessite-t-il un traitement ou un r\xE9gime sp\xE9cifique ou a-t-il handicap sp\xE9cifique dont nous devrons avoir connaissance ?", false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $add_11(f_VerticalPanel6, (f_Label8 = new Label_0 , f_Label8.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label8.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $add_11(f_VerticalPanel6, (f_HorizontalPanel9 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel9, (f_RadioButton10 = new RadioButton_0 , $setTextOrHtml(f_RadioButton10.directionalTextHelper, 'Oui', false) , f_RadioButton10)) , $add_9(f_HorizontalPanel9, (f_RadioButton11 = new RadioButton_0 , $setTextOrHtml(f_RadioButton11.directionalTextHelper, 'Non', false) , f_RadioButton11)) , $add_9(f_HorizontalPanel9, (f_Label12 = new Label_0 , f_Label12.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label12.directionalTextHelper, 'Si oui, veuillez pr\xE9ciser', false) , $updateHorizontalAlignment(f_Label12) , f_Label12)) , $add_9(f_HorizontalPanel9, (f_TextArea13 = new TextArea_1 , f_TextArea13.element['className'] = 'sis-TextArea' , f_TextArea13)) , f_HorizontalPanel9.element.style['width'] = '100%' , f_HorizontalPanel9)) , $add_11(f_VerticalPanel6, (f_Label14 = new Label_0 , f_Label14.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label14.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label14) , f_Label14)) , $add_11(f_VerticalPanel6, (f_Label15 = new Label_0 , $setTextOrHtml(f_Label15.directionalTextHelper, "L'\xE9l\xE8ve est-il sujet \xE0 des allergies ?", false) , $updateHorizontalAlignment(f_Label15) , f_Label15)) , $add_11(f_VerticalPanel6, (f_HorizontalPanel16 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel16, (f_RadioButton17 = new RadioButton_0 , $setTextOrHtml(f_RadioButton17.directionalTextHelper, 'Oui', false) , f_RadioButton17)) , $add_9(f_HorizontalPanel16, (f_RadioButton18 = new RadioButton_0 , $setTextOrHtml(f_RadioButton18.directionalTextHelper, 'Non', false) , f_RadioButton18)) , $add_9(f_HorizontalPanel16, (f_Label19 = new Label_0 , f_Label19.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label19.directionalTextHelper, 'Si oui, lesquelles', false) , $updateHorizontalAlignment(f_Label19) , f_Label19)) , $add_9(f_HorizontalPanel16, (f_TextArea20 = new TextArea_1 , f_TextArea20.element['className'] = 'sis-TextArea' , f_TextArea20)) , f_HorizontalPanel16.element.style['width'] = '100%' , f_HorizontalPanel16)) , $add_11(f_VerticalPanel6, (f_Label21 = new Label_0 , f_Label21.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label21.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label21) , f_Label21)) , $add_11(f_VerticalPanel6, (f_Label22 = new Label_0 , $setTextOrHtml(f_Label22.directionalTextHelper, "L'\xE9l\xE8ve doit-il prendre un traitement/m\xE9dicament particulier ?", false) , $updateHorizontalAlignment(f_Label22) , f_Label22)) , $add_11(f_VerticalPanel6, (f_HorizontalPanel23 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel23, (f_RadioButton24 = new RadioButton_0 , $setTextOrHtml(f_RadioButton24.directionalTextHelper, 'Oui', false) , f_RadioButton24)) , $add_9(f_HorizontalPanel23, (f_RadioButton25 = new RadioButton_0 , $setTextOrHtml(f_RadioButton25.directionalTextHelper, 'Non', false) , f_RadioButton25)) , $add_9(f_HorizontalPanel23, (f_Label26 = new Label_0 , f_Label26.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label26.directionalTextHelper, 'Si oui, lequel (posologie)', false) , $updateHorizontalAlignment(f_Label26) , f_Label26)) , $add_9(f_HorizontalPanel23, (f_TextArea27 = new TextArea_1 , f_TextArea27.element['className'] = 'sis-TextArea' , f_TextArea27)) , f_HorizontalPanel23.element.style['width'] = '100%' , f_HorizontalPanel23)) , $add_11(f_VerticalPanel6, (f_Label28 = new Label_0 , f_Label28.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label28.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label28) , f_Label28)) , $add_11(f_VerticalPanel6, (f_Label29 = new Label_0 , $setTextOrHtml(f_Label29.directionalTextHelper, 'Autres', false) , $updateHorizontalAlignment(f_Label29) , f_Label29)) , $add_11(f_VerticalPanel6, (f_HorizontalPanel30 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel30, (f_TextArea31 = new TextArea_1 , f_TextArea31.element['className'] = 'sis-TextArea' , f_TextArea31)) , f_HorizontalPanel30.element.style['width'] = '100%' , f_HorizontalPanel30)) , f_VerticalPanel6.element.style['width'] = '100%' , f_VerticalPanel6)) , $add_9(f_HorizontalPanel5, (f_VerticalPanel32 = new VerticalPanel_0 , $add_11(f_VerticalPanel32, (f_Label33 = new Label_0 , f_Label33.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label33.directionalTextHelper, 'ELEMENTS CHOISIS', false) , $updateHorizontalAlignment(f_Label33) , f_Label33)) , $add_11(f_VerticalPanel32, (f_FlexTable34 = new FlexTable_0 , f_FlexTable34.element.style['width'] = '100%' , f_FlexTable34)) , $add_11(f_VerticalPanel32, (f_HorizontalPanel35 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel35, (f_Label36 = new Label_0 , f_Label36.element['className'] = 'lablel_TotalAmount' , $setTextOrHtml(f_Label36.directionalTextHelper, 'Total  CHF', false) , $updateHorizontalAlignment(f_Label36) , f_Label36)) , $add_9(f_HorizontalPanel35, (f_Label37 = new Label_0 , f_Label37.element['className'] = 'lablel_TotalAmount' , $setTextOrHtml(f_Label37.directionalTextHelper, 'Amount', false) , $updateHorizontalAlignment(f_Label37) , f_Label37)) , f_HorizontalPanel35.element.style['width'] = '100%' , f_HorizontalPanel35)) , f_VerticalPanel32.element['className'] = 'subSection' , f_VerticalPanel32.element.style['width'] = '250px' , f_VerticalPanel32)) , f_HorizontalPanel5.element.style['width'] = '100%' , f_HorizontalPanel5.table['cellSpacing'] = 10 , f_HorizontalPanel5)) , $add_7(f_FlowPanel4, (f_VerticalPanel38 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel38, ALIGN_RIGHT) , $add_11(f_VerticalPanel38, (f_HorizontalPanel39 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel39, ALIGN_RIGHT) , $add_9(f_HorizontalPanel39, (cmdPreviousStep = new Button_0 , $setHTML(cmdPreviousStep, (sb = new StringBuilder_0 , $append_1(sb.data, 'Pr\xE9c\xE9dant') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data))).html) , $addDomHandler(cmdPreviousStep, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdPreviousStep)) , $add_9(f_HorizontalPanel39, (cmdNextStep = new Button_0 , $setHTML(cmdNextStep, (sb_0 = new StringBuilder_0 , $append_1(sb_0.data, 'Next Step') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb_0.data))).html) , $setInnerText(cmdNextStep.element, 'Suivant') , $addDomHandler(cmdNextStep, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, TYPE_0) , cmdNextStep)) , f_HorizontalPanel39.element.style['width'] = '20%' , f_HorizontalPanel39.table['cellSpacing'] = 10 , f_HorizontalPanel39)) , f_VerticalPanel38.element.style['width'] = '100%' , f_VerticalPanel38)) , f_FlowPanel4.element.style['width'] = '900px' , f_FlowPanel4)) , f_VerticalPanel1.element.style['height'] = '' , f_VerticalPanel1.element.style['width'] = '100%' , f_VerticalPanel1));
  this$static.owner.main = main;
  return main;
}

function ApplicationStep4View_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ApplicationStep4View_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new ApplicationStep4View_BinderImpl$Widgets$2_0(this);
  this.owner = owner;
}

defineSeed(1178, 1, {}, ApplicationStep4View_BinderImpl$Widgets_0);
_.owner = null;
function ApplicationStep4View_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1179, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep4View_BinderImpl$Widgets$1_0);
_.onClick = function onClick_10(event_0){
  $doFire(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep4UiHandlers), Q$ApplicationStep4Presenter).eventBus, new ApplicationStep4CompletedEvent_0, null);
}
;
_.this$1 = null;
function ApplicationStep4View_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1180, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep4View_BinderImpl$Widgets$2_0);
_.onClick = function onClick_11(event_0){
  $doFire(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep4UiHandlers), Q$ApplicationStep4Presenter).eventBus, new GotoPreviousPageEvent_0(($clinit_History() , impl_2?token_0 == null?'':token_0:'')), null);
}
;
_.this$1 = null;
function $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep4$ApplicationStep4Presenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep4$ApplicationStep4Presenter$_annotation$$none$$) {
    result = new ApplicationStep4Presenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep4$ApplicationStep4View$_annotation$$none$$(this$static), $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep4$ApplicationStep4Presenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep4$ApplicationStep4Presenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep4$ApplicationStep4Presenter$_annotation$$none$$;
}

function $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep4$ApplicationStep4View$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep4$ApplicationStep4View$_annotation$$none$$) {
    result = new ApplicationStep4View_0(new ApplicationStep4View_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep4$ApplicationStep4View$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep4$ApplicationStep4View$_annotation$$none$$;
}

defineSeed(1184, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_144(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep4$ApplicationStep4Presenter$_annotation$$none$$(this.this$1.this$0));
}
;
defineSeed(1254, 715, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationPaymentEvent$ApplicationPaymentHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$GotoPreviousPageEvent$GotoPreviousPageHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler, Q$MainPagePresenter, Q$MainPageUiHandler]));
_.onApplicationStep4Completed = function onApplicationStep4Completed(event_0){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationstep5', true);
}
;
defineSeed(1256, 739, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationPaymentEvent$ApplicationPaymentHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$GotoPreviousPageEvent$GotoPreviousPageHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler]));
_.onApplicationStep4Completed = function onApplicationStep4Completed_0(event_0){
  $getPresenter(this, new MainPagePresenterMyProxyImpl$12_0(this.eventBus));
}
;
function $success_44(){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new MainPagePresenterMyProxyImpl$12$1_0);
}

function MainPagePresenterMyProxyImpl$12_0($anonymous0){
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(1263, 728, {}, MainPagePresenterMyProxyImpl$12_0);
_.success = function success_46(presenter){
  $success_44(dynamicCast(presenter, Q$MainPagePresenter));
}
;
function MainPagePresenterMyProxyImpl$12$1_0(){
}

defineSeed(1264, 1, {}, MainPagePresenterMyProxyImpl$12$1_0);
_.execute_0 = function execute_74(){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationstep5', true);
}
;
var Lcom_lemania_eprospects_client_presenter_applicationstep4_ApplicationStep4Presenter_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep4.', 'ApplicationStep4Presenter', 1173), Lcom_lemania_eprospects_client_event_ApplicationStep4CompletedEvent_2_classLit = createForClass('com.lemania.eprospects.client.event.', 'ApplicationStep4CompletedEvent', 775), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$12_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$12', 1263), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$12$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$12$1', 1264), Lcom_lemania_eprospects_client_presenter_applicationstep4_ApplicationStep4View_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep4.', 'ApplicationStep4View', 1176), Lcom_lemania_eprospects_client_presenter_applicationstep4_ApplicationStep4View_1BinderImpl_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep4.', 'ApplicationStep4View_BinderImpl', 1177), Lcom_lemania_eprospects_client_presenter_applicationstep4_ApplicationStep4View_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep4.', 'ApplicationStep4View_BinderImpl$Widgets', 1178), Lcom_lemania_eprospects_client_presenter_applicationstep4_ApplicationStep4View_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep4.', 'ApplicationStep4View_BinderImpl$Widgets$1', 1179), Lcom_lemania_eprospects_client_presenter_applicationstep4_ApplicationStep4View_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep4.', 'ApplicationStep4View_BinderImpl$Widgets$2', 1180);
$entry(onLoad)(7);
