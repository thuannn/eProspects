function ApplicationStep4CompletedEvent_0(){
  $clinit_ApplicationStep4CompletedEvent();
}

defineSeed(758, 235, {}, ApplicationStep4CompletedEvent_0);
_.dispatch_0 = function dispatch_38(handler){
  dynamicCast(handler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler).onApplicationStep4Completed(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_39(){
  return TYPE_40;
}
;
function ApplicationStep4Presenter_0(eventBus, view, proxy){
  $clinit_ApplicationStep4Presenter();
  Presenter_0.call(this, eventBus, view, proxy, ($clinit_MainPagePresenter() , TYPE_SetMainContent));
  dynamicCast(this.view, Q$ApplicationStep4Presenter$MyView).setUiHandlers(this);
}

defineSeed(1145, 698, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ApplicationStep4Presenter, Q$ApplicationStep4UiHandlers]), ApplicationStep4Presenter_0);
_.onBind = function onBind_35(){
}
;
_.onReset = function onReset_34(){
}
;
function ApplicationStep4View_0(){
  $initWidget_0(this, $build_main_5(new ApplicationStep4View_BinderImpl$Widgets_0(this)));
}

defineSeed(1148, 703, makeCastMap([Q$IsWidget, Q$ApplicationStep4Presenter$MyView]), ApplicationStep4View_0);
_.setInSlot = function setInSlot_7(slot, content_0){
  slot === ($clinit_ApplicationStep4Presenter() , SLOT_ApplicationStep4)?this.main.setWidget(!content_0?null:!content_0.view?null:content_0.view.asWidget()):undefined;
}
;
_.main = null;
function ApplicationStep4View_BinderImpl_0(){
}

defineSeed(1149, 1, {}, ApplicationStep4View_BinderImpl_0);
function $build_main_5(this$static){
  var main, f_VerticalPanel1, f_Label2, cmdNextStep, sb;
  main = new SimplePanel_0;
  $add_4(main, (f_VerticalPanel1 = new VerticalPanel_0 , $add_11(f_VerticalPanel1, (f_Label2 = new Label_0 , $setTextOrHtml(f_Label2.directionalTextHelper, 'Step 4', false) , $updateHorizontalAlignment(f_Label2) , f_Label2)) , $add_11(f_VerticalPanel1, (cmdNextStep = new Button_0 , $setHTML(cmdNextStep, (sb = new StringBuilder_0 , $append_1(sb.data, 'Next Step') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data))).html) , $addDomHandler(cmdNextStep, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdNextStep)) , f_VerticalPanel1.element.style['height'] = '100%' , f_VerticalPanel1.element.style['width'] = '100%' , f_VerticalPanel1));
  this$static.owner.main = main;
  return main;
}

function ApplicationStep4View_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ApplicationStep4View_BinderImpl$Widgets$1_0(this);
  this.owner = owner;
}

defineSeed(1150, 1, {}, ApplicationStep4View_BinderImpl$Widgets_0);
_.owner = null;
function ApplicationStep4View_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1151, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep4View_BinderImpl$Widgets$1_0);
_.onClick = function onClick_3(event_0){
  $doFire(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep4UiHandlers), Q$ApplicationStep4Presenter).eventBus, new ApplicationStep4CompletedEvent_0, null);
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

defineSeed(1155, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_144(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep4$ApplicationStep4Presenter$_annotation$$none$$(this.this$1.this$0));
}
;
defineSeed(1224, 698, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler, Q$MainPagePresenter, Q$MainPageUiHandler]));
_.onApplicationStep4Completed = function onApplicationStep4Completed(event_0){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationstep5', true);
}
;
defineSeed(1226, 722, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler]));
_.onApplicationStep4Completed = function onApplicationStep4Completed_0(event_0){
  $getPresenter(this, new MainPagePresenterMyProxyImpl$12_0(this.eventBus));
}
;
function $success_43(){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new MainPagePresenterMyProxyImpl$12$1_0);
}

function MainPagePresenterMyProxyImpl$12_0($anonymous0){
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(1231, 711, {}, MainPagePresenterMyProxyImpl$12_0);
_.success = function success_45(presenter){
  $success_43(dynamicCast(presenter, Q$MainPagePresenter));
}
;
function MainPagePresenterMyProxyImpl$12$1_0(){
}

defineSeed(1232, 1, {}, MainPagePresenterMyProxyImpl$12$1_0);
_.execute_0 = function execute_71(){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationstep5', true);
}
;
var Lcom_lemania_eprospects_client_presenter_applicationstep4_ApplicationStep4Presenter_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep4.', 'ApplicationStep4Presenter', 1145), Lcom_lemania_eprospects_client_event_ApplicationStep4CompletedEvent_2_classLit = createForClass('com.lemania.eprospects.client.event.', 'ApplicationStep4CompletedEvent', 758), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$12_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$12', 1231), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$12$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$12$1', 1232), Lcom_lemania_eprospects_client_presenter_applicationstep4_ApplicationStep4View_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep4.', 'ApplicationStep4View', 1148), Lcom_lemania_eprospects_client_presenter_applicationstep4_ApplicationStep4View_1BinderImpl_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep4.', 'ApplicationStep4View_BinderImpl', 1149), Lcom_lemania_eprospects_client_presenter_applicationstep4_ApplicationStep4View_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep4.', 'ApplicationStep4View_BinderImpl$Widgets', 1150), Lcom_lemania_eprospects_client_presenter_applicationstep4_ApplicationStep4View_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep4.', 'ApplicationStep4View_BinderImpl$Widgets$1', 1151);
$entry(onLoad)(7);
