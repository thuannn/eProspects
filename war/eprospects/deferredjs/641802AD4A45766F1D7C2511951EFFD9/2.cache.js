function $setApplicationId(this$static, applicationId){
  this$static.applicationId = applicationId;
}

function ApplicationStartEvent_0(){
  $clinit_ApplicationStartEvent();
}

defineSeed(764, 235, {}, ApplicationStartEvent_0);
_.dispatch_0 = function dispatch_35(handler){
  dynamicCast(handler, Q$ApplicationStartEvent$ApplicationStartHandler).onApplicationStart(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_36(){
  return TYPE_36;
}
;
function $createNewApplication(this$static, emailAddress){
  var rc, rf, x;
  rf = new ApplicationFormRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ApplicationFormRequestFactory_ApplicationFormRequestContextImpl_0(rf);
  $fire((x = new ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$7X_0(rc, emailAddress) , $addInvocation(rc.state.dialect, x) , x), new ApplicationHomePresenter$3_0(this$static));
}

function $startApplication(this$static, emailAddress, createNew, editOne, appId){
  var rc, rf, rf_0, rc_0, x;
  if (!isValidEmailAddress(emailAddress)) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e invalide : ') + 'Email');
    return;
  }
  if (editOne && $equals_5(appId, '')) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e invalide : ') + ' Application ID');
    return;
  }
  if (editOne && !$equals_5(appId, '')) {
    rf_0 = new ApplicationFormRequestFactoryImpl_0;
    $initialize_0(rf_0, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
    rc_0 = new ApplicationFormRequestFactory_ApplicationFormRequestContextImpl_0(rf_0);
    $fire($loadAndReturn(rc_0, emailAddress, appId), new ApplicationHomePresenter$2_0(this$static));
    return;
  }
  rf = new ApplicationFormRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ApplicationFormRequestFactory_ApplicationFormRequestContextImpl_0(rf);
  $fire((x = new ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$1X_0(rc, emailAddress) , $addInvocation(rc.state.dialect, x) , x), new ApplicationHomePresenter$1_0(this$static, createNew, emailAddress));
}

function ApplicationHomePresenter_0(eventBus, view, proxy){
  $clinit_ApplicationHomePresenter();
  Presenter_0.call(this, eventBus, view, proxy, ($clinit_MainPagePresenter() , TYPE_SetMainContent));
  dynamicCast(this.view, Q$ApplicationHomePresenter$MyView).setUiHandlers(this);
}

defineSeed(1104, 708, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ApplicationHomeUiHandlers]), ApplicationHomePresenter_0);
_.onBind = function onBind_30(){
  $doFire(this.eventBus, new DrawSchoolInterfaceEvent_0, null);
}
;
_.onReset = function onReset_29(){
  $insertItem(dynamicCast(dynamicCast(this.view, Q$ApplicationHomePresenter$MyView), Q$ApplicationHomeView).lstProgrammes, "L\xE9mania Camp & Cours d'\xE9t\xE9", 'APPSUMMER', -1);
}
;
function $onSuccess_130(this$static, existed){
  existed.value_0?this$static.val$createNew?$createNewApplication(this$static.this$0, this$static.val$emailAddress):$setVisible_0(dynamicCast(dynamicCast(this$static.this$0.view, Q$ApplicationHomePresenter$MyView), Q$ApplicationHomeView).pnlApplicationIdRequest, true):$createNewApplication(this$static.this$0, this$static.val$emailAddress);
}

function ApplicationHomePresenter$1_0(this$0, val$createNew, val$emailAddress){
  this.this$0 = this$0;
  this.val$createNew = val$createNew;
  this.val$emailAddress = val$emailAddress;
}

defineSeed(1105, 648, makeCastMap([Q$Receiver]), ApplicationHomePresenter$1_0);
_.onFailure_0 = function onFailure_139(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_139(existed){
  $onSuccess_130(this, dynamicCast(existed, Q$Boolean));
}
;
_.this$0 = null;
_.val$createNew = false;
_.val$emailAddress = null;
function $onSuccess_131(this$static, app){
  var curUser;
  curUser = new CurrentUser_0;
  $setUserEmail(curUser, app.getEmailAddress());
  $setApplicationId(curUser, app.getApplicationID());
  $doFire(this$static.this$0.eventBus, new LoginAuthenticatedEvent_0(curUser), null);
  $doFire(this$static.this$0.eventBus, new ApplicationStartEvent_0, null);
}

function ApplicationHomePresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1106, 648, makeCastMap([Q$Receiver]), ApplicationHomePresenter$2_0);
_.onFailure_0 = function onFailure_140(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_140(app){
  $onSuccess_131(this, dynamicCast(app, Q$ApplicationFormProxy));
}
;
_.this$0 = null;
function $onSuccess_132(this$static, app){
  var curUser;
  curUser = new CurrentUser_0;
  $setUserEmail(curUser, app.getEmailAddress());
  $setApplicationId(curUser, app.getApplicationID());
  $doFire(this$static.this$0.eventBus, new LoginAuthenticatedEvent_0(curUser), null);
  $doFire(this$static.this$0.eventBus, new ApplicationStartEvent_0, null);
}

function ApplicationHomePresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1107, 648, makeCastMap([Q$Receiver]), ApplicationHomePresenter$3_0);
_.onFailure_0 = function onFailure_141(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_141(app){
  $onSuccess_132(this, dynamicCast(app, Q$ApplicationFormProxy));
}
;
_.this$0 = null;
function $onCmdStartApplicationClick(this$static){
  $setText(this$static.txtEmail, $getPropertyString(this$static.txtEmail.element, 'value').toLowerCase());
  $startApplication(dynamicCast(this$static.uiHandlers, Q$ApplicationHomeUiHandlers), $getPropertyString(this$static.txtEmail.element, 'value'), $getValue_0(this$static.optNew).value_0, $getValue_0(this$static.optModify).value_0, $getPropertyString(this$static.txtApplicationId.element, 'value'));
}

function ApplicationHomeView_0(){
  $initWidget_0(this, $build_main_0(new ApplicationHomeView_BinderImpl$Widgets_0(this)));
}

defineSeed(1110, 713, makeCastMap([Q$IsWidget, Q$ApplicationHomePresenter$MyView, Q$ApplicationHomeView]), ApplicationHomeView_0);
_.setInSlot = function setInSlot_2(slot, content_0){
  slot === ($clinit_ApplicationHomePresenter() , SLOT_ApplicationHome)?this.main.setWidget(!content_0?null:!content_0.view?null:content_0.view.asWidget()):undefined;
}
;
_.lstProgrammes = null;
_.main = null;
_.optModify = null;
_.optNew = null;
_.pnlApplicationIdRequest = null;
_.txtApplicationId = null;
_.txtEmail = null;
function ApplicationHomeView_BinderImpl_0(){
}

defineSeed(1111, 1, {}, ApplicationHomeView_BinderImpl_0);
function $build_main_0(this$static){
  var main, f_VerticalPanel1, f_Label2, f_Image3, f_Label4, f_Label5, lstProgrammes, f_Label6, f_Label7, f_HorizontalPanel8, txtEmail, pnlApplicationIdRequest, cmdStartApplication, f_Label11, f_Label9, f_HorizontalPanel10, optNew, optModify, txtApplicationId;
  main = new SimplePanel_0;
  $add_4(main, (f_VerticalPanel1 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel1, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $add_11(f_VerticalPanel1, (f_Label2 = new Label_0 , f_Label2.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label2.directionalTextHelper, 'Ecole L\xE9mania - Inscription en ligne', false) , $updateHorizontalAlignment(f_Label2) , f_Label2)) , $add_11(f_VerticalPanel1, (f_Image3 = new Image_1 , $setUrl(f_Image3, ($clinit_UriUtils() , new SafeUriString_0('images/inscription-title.png'))) , f_Image3)) , $add_11(f_VerticalPanel1, (f_Label4 = new Label_0 , f_Label4.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label4.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label4) , f_Label4)) , $add_11(f_VerticalPanel1, (f_Label5 = new Label_0 , $setTextOrHtml(f_Label5.directionalTextHelper, "Selectionnez un programme \xE0 s'inscrire :", false) , $updateHorizontalAlignment(f_Label5) , f_Label5)) , $add_11(f_VerticalPanel1, (lstProgrammes = new ListBox_0 , this$static.owner.lstProgrammes = lstProgrammes , lstProgrammes)) , $add_11(f_VerticalPanel1, (f_Label6 = new Label_0 , f_Label6.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label6.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $add_11(f_VerticalPanel1, (f_Label7 = new Label_0 , $setTextOrHtml(f_Label7.directionalTextHelper, "Merci de saisir votre adresse email pour commencer l'inscription :", false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $add_11(f_VerticalPanel1, (f_HorizontalPanel8 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel8, (txtEmail = new TextBox_0 , this$static.owner.txtEmail = txtEmail , txtEmail)) , f_HorizontalPanel8)) , $add_11(f_VerticalPanel1, (pnlApplicationIdRequest = new VerticalPanel_0 , $setHorizontalAlignment_1(pnlApplicationIdRequest, ALIGN_CENTER) , $add_11(pnlApplicationIdRequest, (f_Label9 = new Label_0 , $setTextOrHtml(f_Label9.directionalTextHelper, 'Votre adresse email se trouve dans notre base de donn\xE9, merci de choisir une option ci-dessous :', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $add_11(pnlApplicationIdRequest, (f_HorizontalPanel10 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel10, (optNew = new RadioButton_0('new name') , $setTextOrHtml(optNew.directionalTextHelper, 'Nouvelle inscription', false) , this$static.owner.optNew = optNew , optNew)) , $add_9(f_HorizontalPanel10, (optModify = new RadioButton_0('new name') , $setTextOrHtml(optModify.directionalTextHelper, "Modifier votre inscription, veuillez saisir l'ID de votre inscription :", false) , this$static.owner.optModify = optModify , optModify)) , $add_9(f_HorizontalPanel10, (txtApplicationId = new TextBox_0 , this$static.owner.txtApplicationId = txtApplicationId , txtApplicationId)) , f_HorizontalPanel10.table['cellSpacing'] = 5 , f_HorizontalPanel10)) , setVisible(pnlApplicationIdRequest.element, false) , this$static.owner.pnlApplicationIdRequest = pnlApplicationIdRequest , pnlApplicationIdRequest)) , $add_11(f_VerticalPanel1, (cmdStartApplication = new Button_0 , $setInnerText(cmdStartApplication.element, 'Commencer') , $addDomHandler(cmdStartApplication, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdStartApplication)) , $add_11(f_VerticalPanel1, (f_Label11 = new Label_0 , f_Label11.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label11.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , f_VerticalPanel1.element.style['height'] = '' , f_VerticalPanel1.element.style['width'] = '100%' , f_VerticalPanel1));
  main.getStyleElement()['className'] = 'body';
  main.setWidth_0('');
  this$static.owner.main = main;
  return main;
}

function ApplicationHomeView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ApplicationHomeView_BinderImpl$Widgets$1_0(this);
  this.owner = owner;
}

defineSeed(1112, 1, {}, ApplicationHomeView_BinderImpl$Widgets_0);
_.owner = null;
function ApplicationHomeView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1113, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationHomeView_BinderImpl$Widgets$1_0);
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

defineSeed(1116, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_142(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$eprospects$client$presenter$applicationhome$ApplicationHomePresenter$_annotation$$none$$(this.this$1.this$0));
}
;
defineSeed(1258, 708, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationPaymentEvent$ApplicationPaymentHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$GotoPreviousPageEvent$GotoPreviousPageHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler, Q$MainPagePresenter, Q$MainPageUiHandler]));
_.onApplicationStart = function onApplicationStart(event_0){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationstep1', true);
}
;
defineSeed(1260, 732, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationPaymentEvent$ApplicationPaymentHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$GotoPreviousPageEvent$GotoPreviousPageHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler]));
_.onApplicationStart = function onApplicationStart_0(event_0){
  $getPresenter(this, new MainPagePresenterMyProxyImpl$6_0(this.eventBus));
}
;
function $success_53(){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new MainPagePresenterMyProxyImpl$6$1_0);
}

function MainPagePresenterMyProxyImpl$6_0($anonymous0){
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(1281, 721, {}, MainPagePresenterMyProxyImpl$6_0);
_.success = function success_55(presenter){
  $success_53(dynamicCast(presenter, Q$MainPagePresenter));
}
;
function MainPagePresenterMyProxyImpl$6$1_0(){
}

defineSeed(1282, 1, {}, MainPagePresenterMyProxyImpl$6$1_0);
_.execute_0 = function execute_81(){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationstep1', true);
}
;
function ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$1X_0(this$0, val$emailAddress){
  this.val$emailAddress = val$emailAddress;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1691, 652, makeCastMap([Q$AbstractRequest]), ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$1X_0);
_.makeRequestData = function makeRequestData(){
  return new RequestData_0('7d$hiXxjQJDKsBKMAln$Gr3u1lU=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$emailAddress]), this.propertyRefs, Ljava_lang_Boolean_2_classLit, null);
}
;
_.val$emailAddress = null;
function ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$7X_0(this$0, val$emailAddress){
  this.val$emailAddress = val$emailAddress;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1693, 652, makeCastMap([Q$AbstractRequest]), ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$7X_0);
_.makeRequestData = function makeRequestData_1(){
  return new RequestData_0('bSXf3nynxldBpX87iGw2L0R4KBc=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$emailAddress]), this.propertyRefs, Lcom_lemania_eprospects_shared_ApplicationFormProxy_2_classLit, null);
}
;
_.val$emailAddress = null;
var Lcom_lemania_eprospects_client_presenter_applicationhome_ApplicationHomePresenter_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationhome.', 'ApplicationHomePresenter', 1104), Lcom_lemania_eprospects_client_presenter_applicationhome_ApplicationHomePresenter$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationhome.', 'ApplicationHomePresenter$1', 1105), Lcom_lemania_eprospects_client_presenter_applicationhome_ApplicationHomePresenter$2_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationhome.', 'ApplicationHomePresenter$2', 1106), Lcom_lemania_eprospects_client_presenter_applicationhome_ApplicationHomePresenter$3_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationhome.', 'ApplicationHomePresenter$3', 1107), Lcom_lemania_eprospects_client_event_ApplicationStartEvent_2_classLit = createForClass('com.lemania.eprospects.client.event.', 'ApplicationStartEvent', 764), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$6_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$6', 1281), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$6$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$6$1', 1282), Lcom_lemania_eprospects_client_presenter_applicationhome_ApplicationHomeView_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationhome.', 'ApplicationHomeView', 1110), Lcom_lemania_eprospects_client_presenter_applicationhome_ApplicationHomeView_1BinderImpl_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationhome.', 'ApplicationHomeView_BinderImpl', 1111), Lcom_lemania_eprospects_client_presenter_applicationhome_ApplicationHomeView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationhome.', 'ApplicationHomeView_BinderImpl$Widgets', 1112), Lcom_lemania_eprospects_client_presenter_applicationhome_ApplicationHomeView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationhome.', 'ApplicationHomeView_BinderImpl$Widgets$1', 1113), Lcom_lemania_eprospects_shared_service_ApplicationFormRequestFactory_1ApplicationFormRequestContextImpl$1X_2_classLit = createForClass('com.lemania.eprospects.shared.service.', 'ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$1X', 1691), Lcom_lemania_eprospects_shared_service_ApplicationFormRequestFactory_1ApplicationFormRequestContextImpl$7X_2_classLit = createForClass('com.lemania.eprospects.shared.service.', 'ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$7X', 1693);
$entry(onLoad)(2);
