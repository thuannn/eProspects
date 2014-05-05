function ApplicationStep3CompletedEvent_0(){
  $clinit_ApplicationStep3CompletedEvent();
}

defineSeed(764, 235, {}, ApplicationStep3CompletedEvent_0);
_.dispatch_0 = function dispatch_37(handler){
  dynamicCast(handler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler).onApplicationStep3Completed(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_38(){
  return TYPE_39;
}
;
function ApplicationStep3Presenter_0(eventBus, view, proxy){
  $clinit_ApplicationStep3Presenter();
  Presenter_0.call(this, eventBus, view, proxy, ($clinit_MainPagePresenter() , TYPE_SetMainContent));
  dynamicCast(this.view, Q$ApplicationStep3Presenter$MyView).setUiHandlers(this);
}

defineSeed(1141, 705, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ApplicationStep3Presenter, Q$ApplicationStep3UiHandlers]), ApplicationStep3Presenter_0);
_.onBind = function onBind_34(){
}
;
_.onReset = function onReset_33(){
}
;
function ApplicationStep3View_0(){
  $initWidget_0(this, $build_main_4(new ApplicationStep3View_BinderImpl$Widgets_0(this)));
}

defineSeed(1144, 710, makeCastMap([Q$IsWidget, Q$ApplicationStep3Presenter$MyView]), ApplicationStep3View_0);
_.setInSlot = function setInSlot_6(slot, content_0){
  slot === ($clinit_ApplicationStep3Presenter() , SLOT_ApplicationStep3)?this.main.setWidget(!content_0?null:!content_0.view?null:content_0.view.asWidget()):undefined;
}
;
_.main = null;
function ApplicationStep3View_BinderImpl_0(){
}

defineSeed(1145, 1, {}, ApplicationStep3View_BinderImpl_0);
function $build_main_4(this$static){
  var main, f_VerticalPanel1, f_Label2, cmdNextStep, sb;
  main = new SimplePanel_0;
  $add_4(main, (f_VerticalPanel1 = new VerticalPanel_0 , $add_11(f_VerticalPanel1, (f_Label2 = new Label_0 , $setTextOrHtml(f_Label2.directionalTextHelper, 'Step 3', false) , $updateHorizontalAlignment(f_Label2) , f_Label2)) , $add_11(f_VerticalPanel1, (cmdNextStep = new Button_0 , $setHTML(cmdNextStep, (sb = new StringBuilder_0 , $append_1(sb.data, 'Next Step') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data))).html) , $addDomHandler(cmdNextStep, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdNextStep)) , f_VerticalPanel1.element.style['height'] = '100%' , f_VerticalPanel1.element.style['width'] = '100%' , f_VerticalPanel1));
  this$static.owner.main = main;
  return main;
}

function ApplicationStep3View_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ApplicationStep3View_BinderImpl$Widgets$1_0(this);
  this.owner = owner;
}

defineSeed(1146, 1, {}, ApplicationStep3View_BinderImpl$Widgets_0);
_.owner = null;
function ApplicationStep3View_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1147, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep3View_BinderImpl$Widgets$1_0);
_.onClick = function onClick_2(event_0){
  $doFire(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep3UiHandlers), Q$ApplicationStep3Presenter).eventBus, new ApplicationStep3CompletedEvent_0, null);
}
;
_.this$1 = null;
function $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep3$ApplicationStep3Presenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep3$ApplicationStep3Presenter$_annotation$$none$$) {
    result = new ApplicationStep3Presenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep3$ApplicationStep3View$_annotation$$none$$(this$static), $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep3$ApplicationStep3Presenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep3$ApplicationStep3Presenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep3$ApplicationStep3Presenter$_annotation$$none$$;
}

function $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep3$ApplicationStep3View$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep3$ApplicationStep3View$_annotation$$none$$) {
    result = new ApplicationStep3View_0(new ApplicationStep3View_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep3$ApplicationStep3View$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep3$ApplicationStep3View$_annotation$$none$$;
}

defineSeed(1151, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_143(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep3$ApplicationStep3Presenter$_annotation$$none$$(this.this$1.this$0));
}
;
defineSeed(1231, 705, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler, Q$MainPagePresenter, Q$MainPageUiHandler]));
_.onApplicationStep3Completed = function onApplicationStep3Completed(event_0){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationstep4', true);
}
;
defineSeed(1233, 729, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler]));
_.onApplicationStep3Completed = function onApplicationStep3Completed_0(event_0){
  $getPresenter(this, new MainPagePresenterMyProxyImpl$13_0(this.eventBus));
}
;
function $success_44(){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new MainPagePresenterMyProxyImpl$13$1_0);
}

function MainPagePresenterMyProxyImpl$13_0($anonymous0){
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(1240, 718, {}, MainPagePresenterMyProxyImpl$13_0);
_.success = function success_46(presenter){
  $success_44(dynamicCast(presenter, Q$MainPagePresenter));
}
;
function MainPagePresenterMyProxyImpl$13$1_0(){
}

defineSeed(1241, 1, {}, MainPagePresenterMyProxyImpl$13$1_0);
_.execute_0 = function execute_74(){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationstep4', true);
}
;
var Lcom_lemania_eprospects_client_presenter_applicationstep3_ApplicationStep3Presenter_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep3.', 'ApplicationStep3Presenter', 1141), Lcom_lemania_eprospects_client_event_ApplicationStep3CompletedEvent_2_classLit = createForClass('com.lemania.eprospects.client.event.', 'ApplicationStep3CompletedEvent', 764), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$13_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$13', 1240), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$13$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$13$1', 1241), Lcom_lemania_eprospects_client_presenter_applicationstep3_ApplicationStep3View_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep3.', 'ApplicationStep3View', 1144), Lcom_lemania_eprospects_client_presenter_applicationstep3_ApplicationStep3View_1BinderImpl_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep3.', 'ApplicationStep3View_BinderImpl', 1145), Lcom_lemania_eprospects_client_presenter_applicationstep3_ApplicationStep3View_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep3.', 'ApplicationStep3View_BinderImpl$Widgets', 1146), Lcom_lemania_eprospects_client_presenter_applicationstep3_ApplicationStep3View_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep3.', 'ApplicationStep3View_BinderImpl$Widgets$1', 1147);
$entry(onLoad)(6);
