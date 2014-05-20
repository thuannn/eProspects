function $setApplicationId(this$static, applicationId){
  this$static.applicationId = applicationId;
}

function ApplicationStartEvent_0(){
  $clinit_ApplicationStartEvent();
}

defineSeed(767, 234, {}, ApplicationStartEvent_0);
_.dispatch_0 = function dispatch_38(handler){
  dynamicCast(handler, Q$ApplicationStartEvent$ApplicationStartHandler).onApplicationStart(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_39(){
  return TYPE_39;
}
;
function NewApplicationNotificationEvent_0(app){
  $clinit_NewApplicationNotificationEvent();
  this.app = app;
}

defineSeed(783, 234, {}, NewApplicationNotificationEvent_0);
_.dispatch_0 = function dispatch_54(handler){
  dynamicCast(handler, Q$NewApplicationNotificationEvent$NewApplicationNotificationHandler).onNewApplicationNotification(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_55(){
  return TYPE_55;
}
;
_.app = null;
function $createNewApplication(this$static, emailAddress){
  var rc, rf, x;
  rf = new ApplicationFormRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ApplicationFormRequestFactory_ApplicationFormRequestContextImpl_0(rf);
  $fire((x = new ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$7X_0(rc, emailAddress) , $addInvocation(rc.state.dialect, x) , x), new ApplicationHomePresenter$3_0(this$static));
}

function $startApplication(this$static, emailAddress, createNew, editOne, appId){
  var rc, rf, rf_0, rc_0, x;
  if (!isValidEmailAddress(emailAddress)) {
    alert_0(($clinit_NotificationTypes() , 'Missing input : ') + 'Email');
    return;
  }
  if (editOne && $equals_5(appId, '')) {
    alert_0(($clinit_NotificationTypes() , 'Missing input : ') + ' Application ID');
    return;
  }
  if (editOne && !$equals_5(appId, '')) {
    rf_0 = new ApplicationFormRequestFactoryImpl_0;
    $initialize(rf_0, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
    rc_0 = new ApplicationFormRequestFactory_ApplicationFormRequestContextImpl_0(rf_0);
    $fire($loadAndReturn(rc_0, emailAddress, appId), new ApplicationHomePresenter$2_0(this$static));
    return;
  }
  rf = new ApplicationFormRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ApplicationFormRequestFactory_ApplicationFormRequestContextImpl_0(rf);
  $fire((x = new ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$1X_0(rc, emailAddress) , $addInvocation(rc.state.dialect, x) , x), new ApplicationHomePresenter$1_0(this$static, createNew, emailAddress));
}

function ApplicationHomePresenter_0(eventBus, view, proxy){
  $clinit_ApplicationHomePresenter();
  Presenter_0.call(this, eventBus, view, proxy, ($clinit_MainPagePresenter() , TYPE_SetMainContent));
  dynamicCast(this.view, Q$ApplicationHomePresenter$MyView).setUiHandlers(this);
}

defineSeed(1103, 706, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ApplicationHomeUiHandlers]), ApplicationHomePresenter_0);
_.onBind = function onBind_29(){
  $doFire(this.eventBus, new DrawSchoolInterfaceEvent_0, null);
}
;
_.onReset = function onReset_28(){
  $insertItem(dynamicCast(dynamicCast(this.view, Q$ApplicationHomePresenter$MyView), Q$ApplicationHomeView).lstProgrammes, ($clinit_SummerCampSettingValues() , 'LEMANIA SUMMER CAMP & COURSES'), 'APPSUMMER', -1);
}
;
function $onSuccess_129(this$static, existed){
  existed.value_0?this$static.val$createNew?$createNewApplication(this$static.this$0, this$static.val$emailAddress):$setVisible_0(dynamicCast(dynamicCast(this$static.this$0.view, Q$ApplicationHomePresenter$MyView), Q$ApplicationHomeView).pnlApplicationIdRequest, true):$createNewApplication(this$static.this$0, this$static.val$emailAddress);
}

function ApplicationHomePresenter$1_0(this$0, val$createNew, val$emailAddress){
  this.this$0 = this$0;
  this.val$createNew = val$createNew;
  this.val$emailAddress = val$emailAddress;
}

defineSeed(1104, 646, makeCastMap([Q$Receiver]), ApplicationHomePresenter$1_0);
_.onFailure_0 = function onFailure_138(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_138(existed){
  $onSuccess_129(this, dynamicCast(existed, Q$Boolean));
}
;
_.this$0 = null;
_.val$createNew = false;
_.val$emailAddress = null;
function $onSuccess_130(this$static, app){
  var curUser;
  curUser = new CurrentUser_0;
  $setUserEmail(curUser, app.getEmailAddress());
  $setApplicationId(curUser, app.getApplicationID());
  curUser.isLoggedIn = true;
  $doFire(this$static.this$0.eventBus, new LoginAuthenticatedEvent_0(curUser), null);
  $doFire(this$static.this$0.eventBus, new ApplicationStartEvent_0, null);
}

function ApplicationHomePresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1105, 646, makeCastMap([Q$Receiver]), ApplicationHomePresenter$2_0);
_.onFailure_0 = function onFailure_139(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_139(app){
  $onSuccess_130(this, dynamicCast(app, Q$ApplicationFormProxy));
}
;
_.this$0 = null;
function $onSuccess_131(this$static, app){
  var curUser;
  curUser = new CurrentUser_0;
  $setUserEmail(curUser, app.getEmailAddress());
  $setApplicationId(curUser, app.getApplicationID());
  curUser.isLoggedIn = true;
  $doFire(this$static.this$0.eventBus, new LoginAuthenticatedEvent_0(curUser), null);
  $doFire(this$static.this$0.eventBus, new ApplicationStartEvent_0, null);
  $doFire(this$static.this$0.eventBus, new NewApplicationNotificationEvent_0(app), null);
}

function ApplicationHomePresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1106, 646, makeCastMap([Q$Receiver]), ApplicationHomePresenter$3_0);
_.onFailure_0 = function onFailure_140(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_140(app){
  $onSuccess_131(this, dynamicCast(app, Q$ApplicationFormProxy));
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

defineSeed(1109, 711, makeCastMap([Q$IsWidget, Q$ApplicationHomePresenter$MyView, Q$ApplicationHomeView]), ApplicationHomeView_0);
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

defineSeed(1110, 1, {}, ApplicationHomeView_BinderImpl_0);
function $build_main_0(this$static){
  var main, f_VerticalPanel1, f_Label2, f_Image3, f_Label4, f_Label5, lstProgrammes, f_Label6, f_Label7, f_HorizontalPanel8, txtEmail, pnlApplicationIdRequest, f_Label11, cmdStartApplication, f_Label12, f_Label9, f_HorizontalPanel10, optNew, optModify, txtApplicationId;
  main = new SimplePanel_0;
  $add_4(main, (f_VerticalPanel1 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel1, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $add_11(f_VerticalPanel1, (f_Label2 = new Label_0 , f_Label2.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label2.directionalTextHelper, 'Ecole L\xE9mania - Online application', false) , $updateHorizontalAlignment(f_Label2) , f_Label2)) , $add_11(f_VerticalPanel1, (f_Image3 = new Image_1 , $setUrl(f_Image3, ($clinit_UriUtils() , new SafeUriString_0('images/inscription-title.png'))) , f_Image3)) , $add_11(f_VerticalPanel1, (f_Label4 = new Label_0 , f_Label4.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label4.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label4) , f_Label4)) , $add_11(f_VerticalPanel1, (f_Label5 = new Label_0 , $setTextOrHtml(f_Label5.directionalTextHelper, 'Please choose a programme to apply :', false) , $updateHorizontalAlignment(f_Label5) , f_Label5)) , $add_11(f_VerticalPanel1, (lstProgrammes = new ListBox_0 , this$static.owner.lstProgrammes = lstProgrammes , lstProgrammes)) , $add_11(f_VerticalPanel1, (f_Label6 = new Label_0 , f_Label6.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label6.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $add_11(f_VerticalPanel1, (f_Label7 = new Label_0 , $setTextOrHtml(f_Label7.directionalTextHelper, 'Please type in your email to start the application processes:', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $add_11(f_VerticalPanel1, (f_HorizontalPanel8 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel8, (txtEmail = new TextBox_0 , this$static.owner.txtEmail = txtEmail , txtEmail)) , f_HorizontalPanel8)) , $add_11(f_VerticalPanel1, (pnlApplicationIdRequest = new VerticalPanel_0 , $setHorizontalAlignment_1(pnlApplicationIdRequest, ALIGN_CENTER) , $add_11(pnlApplicationIdRequest, (f_Label9 = new Label_0 , $setTextOrHtml(f_Label9.directionalTextHelper, 'Your email has been found in our database, please choose either creating a new application, or edit an existing one:', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $add_11(pnlApplicationIdRequest, (f_HorizontalPanel10 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel10, (optNew = new RadioButton_0('new name') , $setTextOrHtml(optNew.directionalTextHelper, 'New application', false) , this$static.owner.optNew = optNew , optNew)) , $add_9(f_HorizontalPanel10, (optModify = new RadioButton_0('new name') , $setTextOrHtml(optModify.directionalTextHelper, 'Edit an exising application, please type in the Application ID:', false) , this$static.owner.optModify = optModify , optModify)) , $add_9(f_HorizontalPanel10, (txtApplicationId = new TextBox_0 , this$static.owner.txtApplicationId = txtApplicationId , txtApplicationId)) , f_HorizontalPanel10.table['cellSpacing'] = 5 , f_HorizontalPanel10)) , pnlApplicationIdRequest.element['className'] = 'subSection' , setVisible(pnlApplicationIdRequest.element, false) , this$static.owner.pnlApplicationIdRequest = pnlApplicationIdRequest , pnlApplicationIdRequest)) , $add_11(f_VerticalPanel1, (f_Label11 = new Label_0 , $setTextOrHtml(f_Label11.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , $add_11(f_VerticalPanel1, (cmdStartApplication = new Button_0 , $setInnerText(cmdStartApplication.element, 'Start') , $addDomHandler(cmdStartApplication, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdStartApplication)) , $add_11(f_VerticalPanel1, (f_Label12 = new Label_0 , f_Label12.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label12.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label12) , f_Label12)) , f_VerticalPanel1.element.style['height'] = '' , f_VerticalPanel1.element.style['width'] = '100%' , f_VerticalPanel1));
  main.getStyleElement()['className'] = 'body';
  main.setWidth_0('');
  this$static.owner.main = main;
  return main;
}

function ApplicationHomeView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ApplicationHomeView_BinderImpl$Widgets$1_0(this);
  this.owner = owner;
}

defineSeed(1111, 1, {}, ApplicationHomeView_BinderImpl$Widgets_0);
_.owner = null;
function ApplicationHomeView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1112, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationHomeView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_0(event_0){
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

defineSeed(1115, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_141(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$eprospects$client$presenter$applicationhome$ApplicationHomePresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $notifyApplicant(this$static, app){
  var message, subject;
  subject = app.getApplicationID() + ' - LEMANIA SUMMMER SCHOOL - NEW APPLICATION';
  message = 'LEMANIA SUMMER SCHOOL - NEW APPLICATION\n\n';
  message = message + 'Application ID:     ' + app.getApplicationID() + '\n';
  message = message + 'Email:              ' + app.getEmailAddress() + '\n\n';
  message = message + 'Dear Madam, Dear Sir,\n\nEcole L\xE9mania thanks you warmly for this enrollment.\n\nWe will send you by e-mail the invoice and confirmation letter.\n\nThe registration will be confirmed after receipt of payment.\n\nBank wire transfer:\n\nUBS SA, Lausanne \nAccount : 243 \u2013 285.400.01J \nSwift code: UBSWCHZH80A  \nClearing code and account number: 243 \u2013 285.400.01J \nIBAN: CH20 0024 3243 285 40001 J\n\n\n\nWe wish you a great L\xE9mania Summer Programme in the beautiful Swiss city of Lausanne.\n\nBest Regards\nEcole Lemania\nTel: +41 21 320 15 01\nE-mail: summercamp@lemania.ch\n\nNote: \nIf the desired room is no longer available, we will inform you of other availabilities by e-mail, and you will be reimbursed for the total amount if necessary.\n\nYou can always review and make modifications to your application by visiting our online application form at http://www.lemaniasummerschool.com/apply. Please type in your email address and click the Start button, you will be asked to fill in your application ID.\n';
  $sendMessage(this$static, app.getEmailAddress(), message, subject);
}

function $notifyTeam(this$static, app){
  var message, subject;
  subject = app.getApplicationID() + ' - LEMANIA SUMMMER SCHOOL - NEW APPLICATION';
  message = 'LEMANIA SUMMER SCHOOL - NEW APPLICATION\n\n';
  message = message + 'Application ID:     ' + app.getApplicationID() + '\n';
  message = message + 'Email:              ' + app.getEmailAddress() + '\n';
  $sendMessageSummerTeam(this$static, message, subject);
}

function $onNewApplicationNotification(this$static, event_0){
  $notifyApplicant(this$static, event_0.app);
  $notifyTeam(this$static, event_0.app);
}

defineSeed(1364, 738, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$HasHandlerContainer, Q$Place, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$NewApplicationNotificationEvent$NewApplicationNotificationHandler]));
_.onNewApplicationNotification = function onNewApplicationNotification_0(event_0){
  $getPresenter_0(this, new ContactPresenterMyProxyImpl$3_0(this.eventBus, event_0));
}
;
function $success_54(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new ContactPresenterMyProxyImpl$3$1_0(presenter, this$static.val$event));
}

function ContactPresenterMyProxyImpl$3_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(1369, 720, {}, ContactPresenterMyProxyImpl$3_0);
_.success = function success_56(presenter){
  $success_54(this, dynamicCast(presenter, Q$ContactPresenter));
}
;
_.val$event = null;
function ContactPresenterMyProxyImpl$3$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(1370, 1, {}, ContactPresenterMyProxyImpl$3$1_0);
_.execute_0 = function execute_81(){
  $onNewApplicationNotification(this.val$presenter, this.val$event);
}
;
_.val$event = null;
_.val$presenter = null;
defineSeed(1380, 706, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationPaymentEvent$ApplicationPaymentHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$GotoPreviousPageEvent$GotoPreviousPageHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler, Q$MainPagePresenter, Q$MainPageUiHandler]));
_.onApplicationStart = function onApplicationStart(event_0){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationstep1', true);
}
;
defineSeed(1382, 731, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationPaymentEvent$ApplicationPaymentHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$GotoPreviousPageEvent$GotoPreviousPageHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler]));
_.onApplicationStart = function onApplicationStart_0(event_0){
  $getPresenter(this, new MainPagePresenterMyProxyImpl$6_0(this.eventBus));
}
;
function $success_65(){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new MainPagePresenterMyProxyImpl$6$1_0);
}

function MainPagePresenterMyProxyImpl$6_0($anonymous0){
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(1403, 720, {}, MainPagePresenterMyProxyImpl$6_0);
_.success = function success_67(presenter){
  $success_65(dynamicCast(presenter, Q$MainPagePresenter));
}
;
function MainPagePresenterMyProxyImpl$6$1_0(){
}

defineSeed(1404, 1, {}, MainPagePresenterMyProxyImpl$6$1_0);
_.execute_0 = function execute_92(){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationstep1', true);
}
;
function ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$1X_0(this$0, val$emailAddress){
  this.val$emailAddress = val$emailAddress;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1812, 650, makeCastMap([Q$AbstractRequest]), ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$1X_0);
_.makeRequestData = function makeRequestData_3(){
  return new RequestData_0('UhfL4b2LJyftIPQfXCR3beqe3_o=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$emailAddress]), this.propertyRefs, Ljava_lang_Boolean_2_classLit, null);
}
;
_.val$emailAddress = null;
function ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$7X_0(this$0, val$emailAddress){
  this.val$emailAddress = val$emailAddress;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1814, 650, makeCastMap([Q$AbstractRequest]), ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$7X_0);
_.makeRequestData = function makeRequestData_5(){
  return new RequestData_0('cbNtYrB9k3RRwUguSz3O7gZzbFY=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$emailAddress]), this.propertyRefs, Lcom_lemania_eprospects_shared_applicationform_ApplicationFormProxy_2_classLit, null);
}
;
_.val$emailAddress = null;
var Lcom_lemania_eprospects_client_presenter_applicationhome_ApplicationHomePresenter_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationhome.', 'ApplicationHomePresenter', 1103), Lcom_lemania_eprospects_client_presenter_applicationhome_ApplicationHomePresenter$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationhome.', 'ApplicationHomePresenter$1', 1104), Lcom_lemania_eprospects_client_presenter_applicationhome_ApplicationHomePresenter$2_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationhome.', 'ApplicationHomePresenter$2', 1105), Lcom_lemania_eprospects_client_presenter_applicationhome_ApplicationHomePresenter$3_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationhome.', 'ApplicationHomePresenter$3', 1106), Lcom_lemania_eprospects_client_event_NewApplicationNotificationEvent_2_classLit = createForClass('com.lemania.eprospects.client.event.', 'NewApplicationNotificationEvent', 783), Lcom_lemania_eprospects_client_event_ApplicationStartEvent_2_classLit = createForClass('com.lemania.eprospects.client.event.', 'ApplicationStartEvent', 767), Lcom_lemania_eprospects_client_presenter_contact_ContactPresenterMyProxyImpl$3_2_classLit = createForClass('com.lemania.eprospects.client.presenter.contact.', 'ContactPresenterMyProxyImpl$3', 1369), Lcom_lemania_eprospects_client_presenter_contact_ContactPresenterMyProxyImpl$3$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.contact.', 'ContactPresenterMyProxyImpl$3$1', 1370), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$6_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$6', 1403), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$6$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$6$1', 1404), Lcom_lemania_eprospects_client_presenter_applicationhome_ApplicationHomeView_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationhome.', 'ApplicationHomeView', 1109), Lcom_lemania_eprospects_client_presenter_applicationhome_ApplicationHomeView_1BinderImpl_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationhome.', 'ApplicationHomeView_BinderImpl', 1110), Lcom_lemania_eprospects_client_presenter_applicationhome_ApplicationHomeView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationhome.', 'ApplicationHomeView_BinderImpl$Widgets', 1111), Lcom_lemania_eprospects_client_presenter_applicationhome_ApplicationHomeView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationhome.', 'ApplicationHomeView_BinderImpl$Widgets$1', 1112), Lcom_lemania_eprospects_shared_applicationform_ApplicationFormRequestFactory_1ApplicationFormRequestContextImpl$1X_2_classLit = createForClass('com.lemania.eprospects.shared.applicationform.', 'ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$1X', 1812), Lcom_lemania_eprospects_shared_applicationform_ApplicationFormRequestFactory_1ApplicationFormRequestContextImpl$7X_2_classLit = createForClass('com.lemania.eprospects.shared.applicationform.', 'ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$7X', 1814);
$entry(onLoad)(2);
