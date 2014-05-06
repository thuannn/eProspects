function ApplicationStartEvent_0(){
  $clinit_ApplicationStartEvent();
}

defineSeed(753, 238, {}, ApplicationStartEvent_0);
_.dispatch_0 = function dispatch_35(handler){
  dynamicCast(handler, Q$ApplicationStartEvent$ApplicationStartHandler).onApplicationStart(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_36(){
  return TYPE_36;
}
;
function $startApplication(this$static){
  $doFire(this$static.eventBus, new ApplicationStartEvent_0, null);
}

function ApplicationHomePresenter_0(eventBus, view, proxy){
  $clinit_ApplicationHomePresenter();
  Presenter_0.call(this, eventBus, view, proxy, ($clinit_MainPagePresenter() , TYPE_SetMainContent));
  dynamicCast(this.view, Q$ApplicationHomePresenter$MyView).setUiHandlers(this);
}

defineSeed(1092, 697, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ApplicationHomeUiHandlers]), ApplicationHomePresenter_0);
_.onBind = function onBind_30(){
  $doFire(this.eventBus, new DrawSchoolInterfaceEvent_0, null);
}
;
_.onReset = function onReset_29(){
  $insertItem(dynamicCast(dynamicCast(this.view, Q$ApplicationHomePresenter$MyView), Q$ApplicationHomeView).lstProgrammes, 'Summer Courses', 'SUMMER', -1);
}
;
function $onCmdStartApplicationClick(this$static){
  $startApplication(dynamicCast(this$static.uiHandlers, Q$ApplicationHomeUiHandlers), $getPropertyString(this$static.txtEmail.element, 'value'));
}

function ApplicationHomeView_0(){
  $initWidget_0(this, $build_main_0(new ApplicationHomeView_BinderImpl$Widgets_0(this)));
}

defineSeed(1095, 702, makeCastMap([Q$IsWidget, Q$ApplicationHomePresenter$MyView, Q$ApplicationHomeView]), ApplicationHomeView_0);
_.setInSlot = function setInSlot_2(slot, content_0){
  slot === ($clinit_ApplicationHomePresenter() , SLOT_ApplicationHome)?this.main.setWidget(!content_0?null:!content_0.view?null:content_0.view.asWidget()):undefined;
}
;
_.lstProgrammes = null;
_.main = null;
_.txtEmail = null;
function ApplicationHomeView_BinderImpl_0(){
}

defineSeed(1096, 1, {}, ApplicationHomeView_BinderImpl_0);
function $build_main_0(this$static){
  var main, f_VerticalPanel1, f_Label2, f_Image3, f_Label4, f_Label5, lstProgrammes, f_Label6, f_Label7, f_HorizontalPanel8, txtEmail, cmdStartApplication, f_Label9;
  main = new SimplePanel_0;
  $add_4(main, (f_VerticalPanel1 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel1, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $add_11(f_VerticalPanel1, (f_Label2 = new Label_0 , f_Label2.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label2.directionalTextHelper, 'Ecole L\xE9mania - Inscription en ligne', false) , $updateHorizontalAlignment(f_Label2) , f_Label2)) , $add_11(f_VerticalPanel1, (f_Image3 = new Image_1 , $setUrl(f_Image3, ($clinit_UriUtils() , new SafeUriString_0('images/inscription-title.png'))) , f_Image3)) , $add_11(f_VerticalPanel1, (f_Label4 = new Label_0 , f_Label4.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label4.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label4) , f_Label4)) , $add_11(f_VerticalPanel1, (f_Label5 = new Label_0 , $setTextOrHtml(f_Label5.directionalTextHelper, "Selectionnez un programme \xE0 s'inscrire :", false) , $updateHorizontalAlignment(f_Label5) , f_Label5)) , $add_11(f_VerticalPanel1, (lstProgrammes = new ListBox_0 , this$static.owner.lstProgrammes = lstProgrammes , lstProgrammes)) , $add_11(f_VerticalPanel1, (f_Label6 = new Label_0 , f_Label6.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label6.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $add_11(f_VerticalPanel1, (f_Label7 = new Label_0 , $setTextOrHtml(f_Label7.directionalTextHelper, "Merci de saisir votre adresse email pour commencer l'inscription :", false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $add_11(f_VerticalPanel1, (f_HorizontalPanel8 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel8, (txtEmail = new TextBox_0 , this$static.owner.txtEmail = txtEmail , txtEmail)) , $add_9(f_HorizontalPanel8, (cmdStartApplication = new Button_0 , $setInnerText(cmdStartApplication.element, 'Commencer') , $addDomHandler(cmdStartApplication, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdStartApplication)) , f_HorizontalPanel8)) , $add_11(f_VerticalPanel1, (f_Label9 = new Label_0 , f_Label9.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label9.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , f_VerticalPanel1.element.style['height'] = '' , f_VerticalPanel1.element.style['width'] = '100%' , f_VerticalPanel1));
  main.getStyleElement()['className'] = 'body';
  main.setWidth_0('');
  this$static.owner.main = main;
  return main;
}

function ApplicationHomeView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ApplicationHomeView_BinderImpl$Widgets$1_0(this);
  this.owner = owner;
}

defineSeed(1097, 1, {}, ApplicationHomeView_BinderImpl$Widgets_0);
_.owner = null;
function ApplicationHomeView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1098, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationHomeView_BinderImpl$Widgets$1_0);
_.onClick = function onClick(event_0){
  $onCmdStartApplicationClick(this.this$1.owner);
}
;
_.this$1 = null;
function $get_Key$type$com$lemania$eprospects$client$presenter$applicationhome$ApplicationHomePresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationhome$ApplicationHomePresenter$_annotation$$none$$) {
    result = new ApplicationHomePresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$eprospects$client$presenter$applicationhome$ApplicationHomeView$_annotation$$none$$(this$static), $get_Key$type$com$lemania$eprospects$client$presenter$applicationhome$ApplicationHomePresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationhome$ApplicationHomePresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationhome$ApplicationHomePresenter$_annotation$$none$$;
}

function $get_Key$type$com$lemania$eprospects$client$presenter$applicationhome$ApplicationHomeView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationhome$ApplicationHomeView$_annotation$$none$$) {
    result = new ApplicationHomeView_0(new ApplicationHomeView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationhome$ApplicationHomeView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationhome$ApplicationHomeView$_annotation$$none$$;
}

defineSeed(1101, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_139(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$eprospects$client$presenter$applicationhome$ApplicationHomePresenter$_annotation$$none$$(this.this$1.this$0));
}
;
defineSeed(1227, 697, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationPaymentEvent$ApplicationPaymentHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler, Q$MainPagePresenter, Q$MainPageUiHandler]));
_.onApplicationStart = function onApplicationStart(event_0){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationstep1', true);
}
;
defineSeed(1229, 721, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationPaymentEvent$ApplicationPaymentHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler]));
_.onApplicationStart = function onApplicationStart_0(event_0){
  $getPresenter(this, new MainPagePresenterMyProxyImpl$6_0(this.eventBus));
}
;
function $success_50(){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new MainPagePresenterMyProxyImpl$6$1_0);
}

function MainPagePresenterMyProxyImpl$6_0($anonymous0){
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(1248, 710, {}, MainPagePresenterMyProxyImpl$6_0);
_.success = function success_52(presenter){
  $success_50(dynamicCast(presenter, Q$MainPagePresenter));
}
;
function MainPagePresenterMyProxyImpl$6$1_0(){
}

defineSeed(1249, 1, {}, MainPagePresenterMyProxyImpl$6$1_0);
_.execute_1 = function execute_78(){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationstep1', true);
}
;
var Lcom_lemania_eprospects_client_presenter_applicationhome_ApplicationHomePresenter_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationhome.', 'ApplicationHomePresenter', 1092), Lcom_lemania_eprospects_client_event_ApplicationStartEvent_2_classLit = createForClass('com.lemania.eprospects.client.event.', 'ApplicationStartEvent', 753), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$6_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$6', 1248), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$6$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$6$1', 1249), Lcom_lemania_eprospects_client_presenter_applicationhome_ApplicationHomeView_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationhome.', 'ApplicationHomeView', 1095), Lcom_lemania_eprospects_client_presenter_applicationhome_ApplicationHomeView_1BinderImpl_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationhome.', 'ApplicationHomeView_BinderImpl', 1096), Lcom_lemania_eprospects_client_presenter_applicationhome_ApplicationHomeView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationhome.', 'ApplicationHomeView_BinderImpl$Widgets', 1097), Lcom_lemania_eprospects_client_presenter_applicationhome_ApplicationHomeView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationhome.', 'ApplicationHomeView_BinderImpl$Widgets$1', 1098);
$entry(onLoad)(2);
