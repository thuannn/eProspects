function EcoleAddedEvent_0(){
  $clinit_EcoleAddedEvent();
}

defineSeed(783, 235, {}, EcoleAddedEvent_0);
_.dispatch_0 = function dispatch_49(handler){
  dynamicCast(handler, Q$EcoleAddedEvent$EcoleAddedHandler).onEcoleAdded(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_50(){
  return TYPE_50;
}
;
function $ecoleAdd(this$static, ecoleNom, ecoleAdresse, ecoleActive){
  var rc, rf;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  if (!ecoleNom.length || !ecoleAdresse.length) {
    alert_0("Veuillez saissir le nom et l'addresse de l'\uFFFDcole !");
    return;
  }
  rf = new EcoleRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new EcoleRequestFactory_EcoleRequestContextImpl_0(rf);
  this$static.ep = dynamicCast($create_1(rc, Lcom_lemania_eprospects_shared_EcoleProxy_2_classLit), Q$EcoleProxy);
  this$static.ep.setSchoolName(ecoleNom);
  this$static.ep.setSchoolAddress(ecoleAdresse);
  this$static.ep.setSchoolStatus(ecoleActive);
  $fire($save_0(rc, this$static.ep), new EcoleAddPresenter$1_0(this$static));
}

function EcoleAddPresenter_0(eventBus, view, proxy){
  Presenter_1.call(this, eventBus, view, proxy, null);
  dynamicCast(this.view, Q$EcoleAddPresenter$MyView).setUiHandlers(this);
}

defineSeed(817, 711, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$EcoleAddPresenter, Q$EcoleAddUiHandler]), EcoleAddPresenter_0);
_.onBind = function onBind_3(){
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_5(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_2(){
  $doFire(this.eventBus, new PageAfterSelectEvent_0('!addecole'), null);
}
;
_.revealInParent = function revealInParent_2(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.currentUser = null;
_.ep = null;
function $onSuccess_7(this$static){
  $doFire(this$static.this$0.eventBus, new EcoleAddedEvent_0, null);
}

function EcoleAddPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(818, 651, makeCastMap([Q$Receiver]), EcoleAddPresenter$1_0);
_.onFailure_0 = function onFailure_7(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_7(response){
  $onSuccess_7(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
defineSeed(826, 743, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$HasHandlerContainer, Q$Place, Q$EcoleAddedEvent$EcoleAddedHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler]));
_.onEcoleAdded = function onEcoleAdded_0(event_0){
  $getPresenter_0(this, new EcolePresenterMyProxyImpl$1_0(this.eventBus));
}
;
function $success_3(){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new EcolePresenterMyProxyImpl$1$1_0);
}

function EcolePresenterMyProxyImpl$1_0($anonymous0){
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(827, 725, {}, EcolePresenterMyProxyImpl$1_0);
_.success = function success_5(presenter){
  $success_3(dynamicCast(presenter, Q$EcolePresenter));
}
;
function EcolePresenterMyProxyImpl$1$1_0(){
}

defineSeed(828, 1, {}, EcolePresenterMyProxyImpl$1$1_0);
_.execute_1 = function execute_32(){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, '!ecolepage', true);
}
;
function $get_Key$type$com$lemania$eprospects$client$presenter$EcoleAddPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$EcoleAddPresenter$_annotation$$none$$) {
    result = new EcoleAddPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$eprospects$client$view$EcoleAddView$_annotation$$none$$($getFragment_com_lemania_eprospects_client_view(this$static.injector)), $get_Key$type$com$lemania$eprospects$client$presenter$EcoleAddPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$EcoleAddPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$EcoleAddPresenter$_annotation$$none$$;
}

defineSeed(1351, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_186(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$eprospects$client$presenter$EcoleAddPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $onCmdAddEcoleClicked(this$static){
  !!this$static.uiHandlers && $ecoleAdd(dynamicCast(this$static.uiHandlers, Q$EcoleAddUiHandler), $getPropertyString(this$static.txtNom.element, 'value'), $getPropertyString(this$static.txtAdresse.element, 'value'), $getValue_4(this$static.chkActive));
}

function $onCmdCancelClicked(this$static){
  !!this$static.uiHandlers && (dynamicCast(this$static.uiHandlers, Q$EcoleAddUiHandler) , $clinit_History() , !!impl_2 && $newItem(impl_2, '!ecolepage', true));
}

function EcoleAddView_0(){
  this.widget = $build_f_HTMLPanel1_2(new EcoleAddView_BinderImpl$Widgets_0(this));
}

defineSeed(1436, 716, makeCastMap([Q$IsWidget, Q$EcoleAddPresenter$MyView]), EcoleAddView_0);
_.asWidget = function asWidget_7(){
  return this.widget;
}
;
_.chkActive = null;
_.txtAdresse = null;
_.txtNom = null;
_.widget = null;
function EcoleAddView_BinderImpl_0(){
}

defineSeed(1437, 1, {}, EcoleAddView_BinderImpl_0);
function $build_f_HTMLPanel1_2(this$static){
  var attachRecord3, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_Grid4, f_Label5, txtNom, f_Label6, txtAdresse, f_Label7, chkActive, f_HorizontalPanel9, f_HorizontalPanel10, cmdCancel, cmdAddEcole;
  f_HTMLPanel1 = new HTMLPanel_0($html1_2(this$static.domId0).html);
  f_HTMLPanel1.element.style['height'] = '100%';
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord3 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord3.origParent?$insertBefore(attachRecord3.origParent, attachRecord3.element, attachRecord3.origSibling):orphan(attachRecord3.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_11(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'AJOUTER UNE ECOLE', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_11(f_VerticalPanel2, (f_Grid4 = new Grid_0 , $resizeColumns(f_Grid4, 2) , $resizeRows(f_Grid4, 4) , $setWidget_1(f_Grid4, 0, 0, (f_Label5 = new Label_0 , $setTextOrHtml(f_Label5.directionalTextHelper, 'Nom :', false) , $updateHorizontalAlignment(f_Label5) , f_Label5)) , $setWidget_1(f_Grid4, 0, 1, (txtNom = new TextBox_0 , txtNom.element.style['width'] = '250px' , this$static.owner.txtNom = txtNom , txtNom)) , $setWidget_1(f_Grid4, 1, 0, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, 'Adresse :', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $setWidget_1(f_Grid4, 1, 1, (txtAdresse = new TextBox_0 , txtAdresse.element.style['width'] = '250px' , this$static.owner.txtAdresse = txtAdresse , txtAdresse)) , $setWidget_1(f_Grid4, 2, 0, (f_Label7 = new Label_0 , $setTextOrHtml(f_Label7.directionalTextHelper, 'Active :', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $setWidget_1(f_Grid4, 2, 1, (chkActive = new SimpleCheckBox_0 , $setValue_1(chkActive, ($clinit_Boolean() , $clinit_Boolean() , TRUE_1)) , this$static.owner.chkActive = chkActive , chkActive)) , $setWidget_1(f_Grid4, 3, 0, new Label_0) , $setWidget_1(f_Grid4, 3, 1, (f_HorizontalPanel9 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel9, ALIGN_LEFT) , $add_9(f_HorizontalPanel9, (f_HorizontalPanel10 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel10, (cmdCancel = new Button_0 , $setInnerText(cmdCancel.element, 'Annuler') , $addDomHandler(cmdCancel, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdCancel)) , $add_9(f_HorizontalPanel10, (cmdAddEcole = new Button_0 , $setInnerText(cmdAddEcole.element, 'Enregistrer') , $addDomHandler(cmdAddEcole, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE_0) , cmdAddEcole)) , f_HorizontalPanel10.element.style['width'] = '80%' , f_HorizontalPanel10)) , f_HorizontalPanel9.element.style['width'] = '100%' , f_HorizontalPanel9)) , f_Grid4.element.style['width'] = '80%' , f_Grid4.tableElem['cellSpacing'] = 5 , f_Grid4.tableElem['cellPadding'] = 5 , f_Grid4)) , f_VerticalPanel2.element.style['height'] = '' , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function EcoleAddView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new EcoleAddView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new EcoleAddView_BinderImpl$Widgets$2_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1438, 1, {}, EcoleAddView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function EcoleAddView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1439, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), EcoleAddView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_42(event_0){
  $onCmdCancelClicked(this.this$1.owner);
}
;
_.this$1 = null;
function EcoleAddView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1440, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), EcoleAddView_BinderImpl$Widgets$2_0);
_.onClick = function onClick_43(event_0){
  $onCmdAddEcoleClicked(this.this$1.owner);
}
;
_.this$1 = null;
function $html1_2(arg0){
  var sb;
  sb = new StringBuilder_0;
  sb.impl.string += "<span id='";
  $append_12(sb, htmlEscape(arg0));
  sb.impl.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function $get_Key$type$com$lemania$eprospects$client$view$EcoleAddView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$view$EcoleAddView$_annotation$$none$$) {
    result = new EcoleAddView_0(new EcoleAddView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$eprospects$client$view$EcoleAddView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$eprospects$client$view$EcoleAddView$_annotation$$none$$;
}

defineSeed(1773, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$EcoleProxy]));
_.setSchoolAddress = function setSchoolAddress(name_0){
  dynamicCast($getWrapped(this.this$0), Q$EcoleProxy).setSchoolAddress(name_0);
}
;
_.setSchoolName = function setSchoolName(name_0){
  dynamicCast($getWrapped(this.this$0), Q$EcoleProxy).setSchoolName(name_0);
}
;
defineSeed(1774, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$EcoleProxy]));
_.setSchoolAddress = function setSchoolAddress_0(name_0){
  $setProperty(this.this$0, 'schoolAddress', name_0);
}
;
_.setSchoolName = function setSchoolName_0(name_0){
  $setProperty(this.this$0, 'schoolName', name_0);
}
;
function $save_0(this$static, ecole){
  var x;
  x = new EcoleRequestFactory_EcoleRequestContextImpl$5X_0(this$static, ecole);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function EcoleRequestFactory_EcoleRequestContextImpl$5X_0(this$0, val$ecole){
  this.val$ecole = val$ecole;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1897, 655, makeCastMap([Q$AbstractRequest]), EcoleRequestFactory_EcoleRequestContextImpl$5X_0);
_.makeRequestData = function makeRequestData_50(){
  return new RequestData_0('c5rtzohItdhzg237T0d8AsB$uCs=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$ecole]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$ecole = null;
var Lcom_lemania_eprospects_client_presenter_EcoleAddPresenter_2_classLit = createForClass('com.lemania.eprospects.client.presenter.', 'EcoleAddPresenter', 817), Lcom_lemania_eprospects_client_presenter_EcoleAddPresenter$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.', 'EcoleAddPresenter$1', 818), Lcom_lemania_eprospects_client_event_EcoleAddedEvent_2_classLit = createForClass('com.lemania.eprospects.client.event.', 'EcoleAddedEvent', 783), Lcom_lemania_eprospects_client_presenter_EcolePresenterMyProxyImpl$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.', 'EcolePresenterMyProxyImpl$1', 827), Lcom_lemania_eprospects_client_presenter_EcolePresenterMyProxyImpl$1$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.', 'EcolePresenterMyProxyImpl$1$1', 828), Lcom_lemania_eprospects_client_view_EcoleAddView_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'EcoleAddView', 1436), Lcom_lemania_eprospects_client_view_EcoleAddView_1BinderImpl_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'EcoleAddView_BinderImpl', 1437), Lcom_lemania_eprospects_client_view_EcoleAddView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'EcoleAddView_BinderImpl$Widgets', 1438), Lcom_lemania_eprospects_client_view_EcoleAddView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'EcoleAddView_BinderImpl$Widgets$1', 1439), Lcom_lemania_eprospects_client_view_EcoleAddView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'EcoleAddView_BinderImpl$Widgets$2', 1440), Lcom_lemania_eprospects_shared_service_EcoleRequestFactory_1EcoleRequestContextImpl$5X_2_classLit = createForClass('com.lemania.eprospects.shared.service.', 'EcoleRequestFactory_EcoleRequestContextImpl$5X', 1897);
$entry(onLoad)(12);
