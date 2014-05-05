function ApplicationStep1CompletedEvent_0(){
  $clinit_ApplicationStep1CompletedEvent();
}

defineSeed(753, 234, {}, ApplicationStep1CompletedEvent_0);
_.dispatch_0 = function dispatch_35(handler){
  dynamicCast(handler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler).onApplicationStep1Completed(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_36(){
  return TYPE_37;
}
;
function ApplicationStep1Presenter_0(eventBus, view, proxy){
  $clinit_ApplicationStep1Presenter();
  Presenter_0.call(this, eventBus, view, proxy, ($clinit_MainPagePresenter() , TYPE_SetMainContent));
  dynamicCast(this.view, Q$ApplicationStep1Presenter$MyView).setUiHandlers(this);
}

defineSeed(1110, 696, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ApplicationStep1Presenter, Q$ApplicationStep1UiHandlers]), ApplicationStep1Presenter_0);
_.onBind = function onBind_32(){
}
;
_.onReset = function onReset_31(){
}
;
function ApplicationStep1View_0(){
  $initWidget_0(this, $build_main_2(new ApplicationStep1View_BinderImpl$Widgets_0(this)));
}

defineSeed(1113, 701, makeCastMap([Q$IsWidget, Q$ApplicationStep1Presenter$MyView]), ApplicationStep1View_0);
_.setInSlot = function setInSlot_4(slot, content_0){
  slot === ($clinit_ApplicationStep1Presenter() , SLOT_ApplicationStep1)?this.main.setWidget(!content_0?null:!content_0.view?null:content_0.view.asWidget()):undefined;
}
;
_.main = null;
function ApplicationStep1View_BinderImpl_0(){
}

defineSeed(1114, 1, {}, ApplicationStep1View_BinderImpl_0);
function $build_main_2(this$static){
  var main, f_VerticalPanel1, f_Label2, cmdNextStep, sb;
  main = new SimplePanel_0;
  $add_4(main, (f_VerticalPanel1 = new VerticalPanel_0 , $add_11(f_VerticalPanel1, (f_Label2 = new Label_0 , $setTextOrHtml(f_Label2.directionalTextHelper, 'Step 1', false) , $updateHorizontalAlignment(f_Label2) , f_Label2)) , $add_11(f_VerticalPanel1, (cmdNextStep = new Button_0 , $setHTML(cmdNextStep, (sb = new StringBuilder_0 , $append_1(sb.data, 'Next Step') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data))).html) , $addDomHandler(cmdNextStep, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdNextStep)) , f_VerticalPanel1.element.style['height'] = '100%' , f_VerticalPanel1.element.style['width'] = '100%' , f_VerticalPanel1));
  this$static.owner.main = main;
  return main;
}

function ApplicationStep1View_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ApplicationStep1View_BinderImpl$Widgets$1_0(this);
  this.owner = owner;
}

defineSeed(1115, 1, {}, ApplicationStep1View_BinderImpl$Widgets_0);
_.owner = null;
function ApplicationStep1View_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1116, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep1View_BinderImpl$Widgets$1_0);
_.onClick = function onClick_0(event_0){
  $doFire(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep1UiHandlers), Q$ApplicationStep1Presenter).eventBus, new ApplicationStep1CompletedEvent_0, null);
}
;
_.this$1 = null;
function $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep1$ApplicationStep1Presenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep1$ApplicationStep1Presenter$_annotation$$none$$) {
    result = new ApplicationStep1Presenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep1$ApplicationStep1View$_annotation$$none$$(this$static), $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep1$ApplicationStep1Presenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep1$ApplicationStep1Presenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep1$ApplicationStep1Presenter$_annotation$$none$$;
}

function $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep1$ApplicationStep1View$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep1$ApplicationStep1View$_annotation$$none$$) {
    result = new ApplicationStep1View_0(new ApplicationStep1View_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep1$ApplicationStep1View$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep1$ApplicationStep1View$_annotation$$none$$;
}

defineSeed(1120, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_141(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep1$ApplicationStep1Presenter$_annotation$$none$$(this.this$1.this$0));
}
;
defineSeed(1222, 696, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler, Q$MainPagePresenter, Q$MainPageUiHandler]));
_.onApplicationStep1Completed = function onApplicationStep1Completed(event_0){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationstep2', true);
}
;
defineSeed(1224, 720, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler]));
_.onApplicationStep1Completed = function onApplicationStep1Completed_0(event_0){
  $getPresenter(this, new MainPagePresenterMyProxyImpl$7_0(this.eventBus));
}
;
function $success_50(){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new MainPagePresenterMyProxyImpl$7$1_0);
}

function MainPagePresenterMyProxyImpl$7_0($anonymous0){
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(1243, 709, {}, MainPagePresenterMyProxyImpl$7_0);
_.success = function success_52(presenter){
  $success_50(dynamicCast(presenter, Q$MainPagePresenter));
}
;
function MainPagePresenterMyProxyImpl$7$1_0(){
}

defineSeed(1244, 1, {}, MainPagePresenterMyProxyImpl$7$1_0);
_.execute_0 = function execute_79(){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationstep2', true);
}
;
var Lcom_lemania_eprospects_client_presenter_applicationstep1_ApplicationStep1Presenter_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep1.', 'ApplicationStep1Presenter', 1110), Lcom_lemania_eprospects_client_event_ApplicationStep1CompletedEvent_2_classLit = createForClass('com.lemania.eprospects.client.event.', 'ApplicationStep1CompletedEvent', 753), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$7_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$7', 1243), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$7$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$7$1', 1244), Lcom_lemania_eprospects_client_presenter_applicationstep1_ApplicationStep1View_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep1.', 'ApplicationStep1View', 1113), Lcom_lemania_eprospects_client_presenter_applicationstep1_ApplicationStep1View_1BinderImpl_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep1.', 'ApplicationStep1View_BinderImpl', 1114), Lcom_lemania_eprospects_client_presenter_applicationstep1_ApplicationStep1View_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep1.', 'ApplicationStep1View_BinderImpl$Widgets', 1115), Lcom_lemania_eprospects_client_presenter_applicationstep1_ApplicationStep1View_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep1.', 'ApplicationStep1View_BinderImpl$Widgets$1', 1116);
$entry(onLoad)(4);
