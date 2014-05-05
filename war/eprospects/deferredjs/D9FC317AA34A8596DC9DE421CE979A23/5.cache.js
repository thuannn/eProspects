function ApplicationStep2CompletedEvent_0(){
  $clinit_ApplicationStep2CompletedEvent();
}

defineSeed(750, 234, {}, ApplicationStep2CompletedEvent_0);
_.dispatch_0 = function dispatch_36(handler){
  dynamicCast(handler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler).onApplicationStep2Completed(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_37(){
  return TYPE_38;
}
;
function ApplicationStep2Presenter_0(eventBus, view, proxy){
  $clinit_ApplicationStep2Presenter();
  Presenter_0.call(this, eventBus, view, proxy, ($clinit_MainPagePresenter() , TYPE_SetMainContent));
  dynamicCast(this.view, Q$ApplicationStep2Presenter$MyView).setUiHandlers(this);
}

defineSeed(1117, 692, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ApplicationStep2Presenter, Q$ApplicationStep2UiHandlers]), ApplicationStep2Presenter_0);
_.onBind = function onBind_33(){
}
;
_.onReset = function onReset_32(){
}
;
function ApplicationStep2View_0(){
  $initWidget_0(this, $build_main_3(new ApplicationStep2View_BinderImpl$Widgets_0(this)));
}

defineSeed(1120, 697, makeCastMap([Q$IsWidget, Q$ApplicationStep2Presenter$MyView]), ApplicationStep2View_0);
_.setInSlot = function setInSlot_5(slot, content_0){
  slot === ($clinit_ApplicationStep2Presenter() , SLOT_ApplicationStep2)?this.main.setWidget(!content_0?null:!content_0.view?null:content_0.view.asWidget()):undefined;
}
;
_.main = null;
function ApplicationStep2View_BinderImpl_0(){
}

defineSeed(1121, 1, {}, ApplicationStep2View_BinderImpl_0);
function $build_main_3(this$static){
  var main, f_VerticalPanel1, f_Label2, cmdNextStep, sb;
  main = new SimplePanel_0;
  $add_4(main, (f_VerticalPanel1 = new VerticalPanel_0 , $add_11(f_VerticalPanel1, (f_Label2 = new Label_0 , $setTextOrHtml(f_Label2.directionalTextHelper, 'Step 2', false) , $updateHorizontalAlignment(f_Label2) , f_Label2)) , $add_11(f_VerticalPanel1, (cmdNextStep = new Button_0 , $setHTML(cmdNextStep, (sb = new StringBuilder_0 , sb.impl.string += 'Next Step' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string)).html) , $addDomHandler(cmdNextStep, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdNextStep)) , f_VerticalPanel1.element.style['height'] = '100%' , f_VerticalPanel1.element.style['width'] = '100%' , f_VerticalPanel1));
  this$static.owner.main = main;
  return main;
}

function ApplicationStep2View_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ApplicationStep2View_BinderImpl$Widgets$1_0(this);
  this.owner = owner;
}

defineSeed(1122, 1, {}, ApplicationStep2View_BinderImpl$Widgets_0);
_.owner = null;
function ApplicationStep2View_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1123, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep2View_BinderImpl$Widgets$1_0);
_.onClick = function onClick_1(event_0){
  $doFire(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep2UiHandlers), Q$ApplicationStep2Presenter).eventBus, new ApplicationStep2CompletedEvent_0, null);
}
;
_.this$1 = null;
function $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep2$ApplicationStep2Presenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep2$ApplicationStep2Presenter$_annotation$$none$$) {
    result = new ApplicationStep2Presenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep2$ApplicationStep2View$_annotation$$none$$(this$static), $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep2$ApplicationStep2Presenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep2$ApplicationStep2Presenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep2$ApplicationStep2Presenter$_annotation$$none$$;
}

function $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep2$ApplicationStep2View$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep2$ApplicationStep2View$_annotation$$none$$) {
    result = new ApplicationStep2View_0(new ApplicationStep2View_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep2$ApplicationStep2View$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep2$ApplicationStep2View$_annotation$$none$$;
}

defineSeed(1127, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_142(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep2$ApplicationStep2Presenter$_annotation$$none$$(this.this$1.this$0));
}
;
defineSeed(1218, 692, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler, Q$MainPagePresenter, Q$MainPageUiHandler]));
_.onApplicationStep2Completed = function onApplicationStep2Completed(event_0){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationstep3', true);
}
;
defineSeed(1220, 716, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler]));
_.onApplicationStep2Completed = function onApplicationStep2Completed_0(event_0){
  $getPresenter(this, new MainPagePresenterMyProxyImpl$8_0(this.eventBus));
}
;
function $success_51(){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new MainPagePresenterMyProxyImpl$8$1_0);
}

function MainPagePresenterMyProxyImpl$8_0($anonymous0){
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(1241, 705, {}, MainPagePresenterMyProxyImpl$8_0);
_.success = function success_53(presenter){
  $success_51(dynamicCast(presenter, Q$MainPagePresenter));
}
;
function MainPagePresenterMyProxyImpl$8$1_0(){
}

defineSeed(1242, 1, {}, MainPagePresenterMyProxyImpl$8$1_0);
_.execute_1 = function execute_80(){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationstep3', true);
}
;
var Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2Presenter_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2Presenter', 1117), Lcom_lemania_eprospects_client_event_ApplicationStep2CompletedEvent_2_classLit = createForClass('com.lemania.eprospects.client.event.', 'ApplicationStep2CompletedEvent', 750), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$8_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$8', 1241), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$8$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$8$1', 1242), Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2View_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2View', 1120), Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2View_1BinderImpl_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2View_BinderImpl', 1121), Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2View_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2View_BinderImpl$Widgets', 1122), Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2View_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2View_BinderImpl$Widgets$1', 1123);
$entry(onLoad)(5);
