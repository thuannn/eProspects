function ApplicationStep5CompletedEvent_0(){
  $clinit_ApplicationStep5CompletedEvent();
}

defineSeed(766, 235, {}, ApplicationStep5CompletedEvent_0);
_.dispatch_0 = function dispatch_39(handler){
  dynamicCast(handler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler).onApplicationStep5Completed(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_40(){
  return TYPE_41;
}
;
function ApplicationStep5Presenter_0(eventBus, view, proxy){
  $clinit_ApplicationStep5Presenter();
  Presenter_0.call(this, eventBus, view, proxy, ($clinit_MainPagePresenter() , TYPE_SetMainContent));
  dynamicCast(this.view, Q$ApplicationStep5Presenter$MyView).setUiHandlers(this);
}

defineSeed(1163, 705, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ApplicationStep5Presenter, Q$ApplicationStep5UiHandlers]), ApplicationStep5Presenter_0);
_.onBind = function onBind_36(){
}
;
_.onReset = function onReset_35(){
}
;
function ApplicationStep5View_0(){
  $initWidget_0(this, $build_main_6(new ApplicationStep5View_BinderImpl$Widgets_0(this)));
}

defineSeed(1166, 710, makeCastMap([Q$IsWidget, Q$ApplicationStep5Presenter$MyView]), ApplicationStep5View_0);
_.setInSlot = function setInSlot_8(slot, content_0){
  slot === ($clinit_ApplicationStep5Presenter() , SLOT_ApplicationStep5)?this.main.setWidget(!content_0?null:!content_0.view?null:content_0.view.asWidget()):undefined;
}
;
_.main = null;
function ApplicationStep5View_BinderImpl_0(){
}

defineSeed(1167, 1, {}, ApplicationStep5View_BinderImpl_0);
function $build_main_6(this$static){
  var main, f_VerticalPanel1, f_Label2, cmdNextStep, sb;
  main = new SimplePanel_0;
  $add_4(main, (f_VerticalPanel1 = new VerticalPanel_0 , $add_11(f_VerticalPanel1, (f_Label2 = new Label_0 , $setTextOrHtml(f_Label2.directionalTextHelper, 'Step 5', false) , $updateHorizontalAlignment(f_Label2) , f_Label2)) , $add_11(f_VerticalPanel1, (cmdNextStep = new Button_0 , $setHTML(cmdNextStep, (sb = new StringBuilder_0 , $append_1(sb.data, 'Next Step') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data))).html) , $addDomHandler(cmdNextStep, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdNextStep)) , f_VerticalPanel1.element.style['height'] = '100%' , f_VerticalPanel1.element.style['width'] = '100%' , f_VerticalPanel1));
  this$static.owner.main = main;
  return main;
}

function ApplicationStep5View_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ApplicationStep5View_BinderImpl$Widgets$1_0(this);
  this.owner = owner;
}

defineSeed(1168, 1, {}, ApplicationStep5View_BinderImpl$Widgets_0);
_.owner = null;
function ApplicationStep5View_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1169, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep5View_BinderImpl$Widgets$1_0);
_.onClick = function onClick_4(event_0){
  $doFire(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep5UiHandlers), Q$ApplicationStep5Presenter).eventBus, new ApplicationStep5CompletedEvent_0, null);
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

defineSeed(1173, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_145(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep5$ApplicationStep5Presenter$_annotation$$none$$(this.this$1.this$0));
}
;
defineSeed(1231, 705, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler, Q$MainPagePresenter, Q$MainPageUiHandler]));
_.onApplicationStep5Completed = function onApplicationStep5Completed(event_0){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationpayment', true);
}
;
defineSeed(1233, 729, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler]));
_.onApplicationStep5Completed = function onApplicationStep5Completed_0(event_0){
  $getPresenter(this, new MainPagePresenterMyProxyImpl$11_0(this.eventBus));
}
;
function $success_42(){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new MainPagePresenterMyProxyImpl$11$1_0);
}

function MainPagePresenterMyProxyImpl$11_0($anonymous0){
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(1236, 718, {}, MainPagePresenterMyProxyImpl$11_0);
_.success = function success_44(presenter){
  $success_42(dynamicCast(presenter, Q$MainPagePresenter));
}
;
function MainPagePresenterMyProxyImpl$11$1_0(){
}

defineSeed(1237, 1, {}, MainPagePresenterMyProxyImpl$11$1_0);
_.execute_0 = function execute_72(){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationpayment', true);
}
;
var Lcom_lemania_eprospects_client_presenter_applicationstep5_ApplicationStep5Presenter_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep5.', 'ApplicationStep5Presenter', 1163), Lcom_lemania_eprospects_client_event_ApplicationStep5CompletedEvent_2_classLit = createForClass('com.lemania.eprospects.client.event.', 'ApplicationStep5CompletedEvent', 766), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$11_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$11', 1236), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$11$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$11$1', 1237), Lcom_lemania_eprospects_client_presenter_applicationstep5_ApplicationStep5View_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep5.', 'ApplicationStep5View', 1166), Lcom_lemania_eprospects_client_presenter_applicationstep5_ApplicationStep5View_1BinderImpl_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep5.', 'ApplicationStep5View_BinderImpl', 1167), Lcom_lemania_eprospects_client_presenter_applicationstep5_ApplicationStep5View_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep5.', 'ApplicationStep5View_BinderImpl$Widgets', 1168), Lcom_lemania_eprospects_client_presenter_applicationstep5_ApplicationStep5View_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep5.', 'ApplicationStep5View_BinderImpl$Widgets$1', 1169);
$entry(onLoad)(8);
