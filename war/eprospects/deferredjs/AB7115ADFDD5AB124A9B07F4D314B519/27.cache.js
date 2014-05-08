function $addNewSubject(this$static, subjectName, defaultCoef, isActive){
  var ep, rc, rf, x;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  if (!subjectName.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Nom de la mati\xE8re.');
    return;
  }
  if ($matches(defaultCoef, '-?\\d+(\\.\\d+)?')) {
    if (($clinit_Double() , __parseAndValidateDouble(defaultCoef)) < 0) {
      alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Coefficient');
      return;
    }
  }
   else {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Coefficient');
    return;
  }
  rf = new SubjectRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new SubjectRequestFactory_SubjectRequestContextImpl_0(rf);
  ep = dynamicCast($create_1(rc, Lcom_lemania_eprospects_shared_SubjectProxy_2_classLit), Q$SubjectProxy);
  ep.setSubjectName(subjectName);
  ep.setDefaultCoef(($clinit_Double() , new Double_0(__parseAndValidateDouble(defaultCoef))));
  ep.setIsActive(isActive);
  $fire((x = new SubjectRequestFactory_SubjectRequestContextImpl$6X_0(rc, ep) , $addInvocation(rc.state.dialect, x) , x), new FrmSubjectAddPresenter$1_0(this$static));
}

function FrmSubjectAddPresenter_0(eventBus, view, proxy){
  Presenter_1.call(this, eventBus, view, proxy, null);
}

defineSeed(985, 708, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$FrmSubjectAddPresenter, Q$FrmSubjectAddUiHandler]), FrmSubjectAddPresenter_0);
_.onBind = function onBind_19(){
  dynamicCast(this.view, Q$FrmSubjectAddPresenter$MyView).setUiHandlers(this);
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_37(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_18(){
  $doFire(this.eventBus, new PageAfterSelectEvent_0('subjectadd'), null);
  $resetForm_11(dynamicCast(this.view, Q$FrmSubjectAddPresenter$MyView));
}
;
_.revealInParent = function revealInParent_18(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.currentUser = null;
function $onSuccess_85(this$static){
  $showStatus_1(dynamicCast(this$static.this$0.view, Q$FrmSubjectAddPresenter$MyView), ($clinit_NotificationTypes() , 'La nouvelle mati\xE8re a \xE9t\xE9 cr\xE9\xE9e avec succ\xE8s.'));
  $resetForm_11(dynamicCast(this$static.this$0.view, Q$FrmSubjectAddPresenter$MyView));
}

function FrmSubjectAddPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(986, 648, makeCastMap([Q$Receiver]), FrmSubjectAddPresenter$1_0);
_.onFailure_0 = function onFailure_89(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_89(response){
  $onSuccess_85(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
function $get_Key$type$com$lemania$eprospects$client$presenter$FrmSubjectAddPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$FrmSubjectAddPresenter$_annotation$$none$$) {
    result = new FrmSubjectAddPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$eprospects$client$view$FrmSubjectAddView$_annotation$$none$$($getFragment_com_lemania_eprospects_client_view(this$static.injector)), $get_Key$type$com$lemania$eprospects$client$presenter$FrmSubjectAddPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$FrmSubjectAddPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$FrmSubjectAddPresenter$_annotation$$none$$;
}

defineSeed(1204, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_156(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$eprospects$client$presenter$FrmSubjectAddPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $onCmdSaveClick_5(this$static){
  !!this$static.uiHandlers && $addNewSubject(dynamicCast(this$static.uiHandlers, Q$FrmSubjectAddUiHandler), $getPropertyString(this$static.txtSubjectName.element, 'value'), $getPropertyString(this$static.txtDefaultCoef.element, 'value'), $getValue_0(this$static.chkActive));
}

function $resetForm_11(this$static){
  $setText(this$static.txtSubjectName, '');
  $setText(this$static.txtDefaultCoef, '');
  $setValue_1(this$static.chkActive, ($clinit_Boolean() , $clinit_Boolean() , TRUE_1));
}

function $showStatus_1(this$static, msg){
  var t;
  $setText_1(this$static.lblStatus, msg);
  t = new FrmSubjectAddView$1_0(this$static);
  $schedule(t, 3000);
}

function FrmSubjectAddView_0(){
  this.widget = $build_f_HTMLPanel1_17(new FrmSubjectAddView_BinderImpl$Widgets_0(this));
}

defineSeed(1486, 713, makeCastMap([Q$IsWidget, Q$FrmSubjectAddPresenter$MyView]), FrmSubjectAddView_0);
_.asWidget = function asWidget_22(){
  return this.widget;
}
;
_.chkActive = null;
_.lblStatus = null;
_.txtDefaultCoef = null;
_.txtSubjectName = null;
_.widget = null;
function FrmSubjectAddView$1_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

defineSeed(1487, 10, makeCastMap([Q$Timer]), FrmSubjectAddView$1_0);
_.run = function run_4(){
  $setText_1(this.this$0.lblStatus, '');
}
;
_.this$0 = null;
function FrmSubjectAddView_BinderImpl_0(){
}

defineSeed(1488, 1, {}, FrmSubjectAddView_BinderImpl_0);
function $build_f_HTMLPanel1_17(this$static){
  var attachRecord18, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_Grid4, f_Label5, txtSubjectName, f_Label6, txtDefaultCoef, f_Label7, chkActive, f_Label8, cmdSave, sb, f_Label9, lblStatus;
  f_HTMLPanel1 = new HTMLPanel_0($html2_1(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord18 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord18.origParent?$insertBefore(attachRecord18.origParent, attachRecord18.element, attachRecord18.origSibling):orphan(attachRecord18.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_11(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'AJOUTER UNE NOUVELLE MATIERE', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_11(f_VerticalPanel2, (f_Grid4 = new Grid_0 , $resizeColumns(f_Grid4, 2) , $resizeRows(f_Grid4, 5) , $setWidget_1(f_Grid4, 0, 0, (f_Label5 = new Label_0 , $setTextOrHtml(f_Label5.directionalTextHelper, 'Nom de la mati\xE8re :', false) , $updateHorizontalAlignment(f_Label5) , f_Label5)) , $setWidget_1(f_Grid4, 0, 1, (txtSubjectName = new TextBox_0 , txtSubjectName.element['className'] = 'sis_textbox' , this$static.owner.txtSubjectName = txtSubjectName , txtSubjectName)) , $setWidget_1(f_Grid4, 1, 0, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, 'Coefficient par d\xE9faut :', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $setWidget_1(f_Grid4, 1, 1, (txtDefaultCoef = new TextBox_0 , this$static.owner.txtDefaultCoef = txtDefaultCoef , txtDefaultCoef)) , $setWidget_1(f_Grid4, 2, 0, (f_Label7 = new Label_0 , f_Label7.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label7.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $setWidget_1(f_Grid4, 2, 1, (chkActive = new CheckBox_0 , $setTextOrHtml(chkActive.directionalTextHelper, 'Active', false) , $setValue_1(chkActive, ($clinit_Boolean() , $clinit_Boolean() , TRUE_1)) , this$static.owner.chkActive = chkActive , chkActive)) , $setWidget_1(f_Grid4, 3, 0, (f_Label8 = new Label_0 , f_Label8.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label8.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $setWidget_1(f_Grid4, 3, 1, (cmdSave = new Button_0 , $setHTML(cmdSave, (sb = new StringBuilder_0 , $append_1(sb.data, 'Enregistrer') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data))).html) , $addDomHandler(cmdSave, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdSave)) , $setWidget_1(f_Grid4, 4, 0, (f_Label9 = new Label_0 , f_Label9.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label9.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $setWidget_1(f_Grid4, 4, 1, (lblStatus = new Label_0 , this$static.owner.lblStatus = lblStatus , lblStatus)) , f_Grid4.element.style['width'] = '80%' , f_Grid4.tableElem['cellSpacing'] = 5 , f_Grid4.tableElem['cellPadding'] = 5 , f_Grid4)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function FrmSubjectAddView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new FrmSubjectAddView_BinderImpl$Widgets$1_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1489, 1, {}, FrmSubjectAddView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function FrmSubjectAddView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1490, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), FrmSubjectAddView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_28(event_0){
  $onCmdSaveClick_5(this.this$1.owner);
}
;
_.this$1 = null;
function $html2_1(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_1(sb.data, "<span id='");
  $append_11(sb, htmlEscape(arg0));
  $append_1(sb.data, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data));
}

function $get_Key$type$com$lemania$eprospects$client$view$FrmSubjectAddView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$view$FrmSubjectAddView$_annotation$$none$$) {
    result = new FrmSubjectAddView_0(new FrmSubjectAddView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$eprospects$client$view$FrmSubjectAddView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$eprospects$client$view$FrmSubjectAddView$_annotation$$none$$;
}

function SubjectRequestFactory_SubjectRequestContextImpl$6X_0(this$0, val$subject){
  this.val$subject = val$subject;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1798, 652, makeCastMap([Q$AbstractRequest]), SubjectRequestFactory_SubjectRequestContextImpl$6X_0);
_.makeRequestData = function makeRequestData_74(){
  return new RequestData_0('BvDKgcO5o_KfKh$e3ZF148Mb4g8=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$subject]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$subject = null;
var Lcom_lemania_eprospects_client_presenter_FrmSubjectAddPresenter_2_classLit = createForClass('com.lemania.eprospects.client.presenter.', 'FrmSubjectAddPresenter', 985), Lcom_lemania_eprospects_client_presenter_FrmSubjectAddPresenter$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.', 'FrmSubjectAddPresenter$1', 986), Lcom_lemania_eprospects_client_view_FrmSubjectAddView_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'FrmSubjectAddView', 1486), Lcom_lemania_eprospects_client_view_FrmSubjectAddView$1_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'FrmSubjectAddView$1', 1487), Lcom_lemania_eprospects_client_view_FrmSubjectAddView_1BinderImpl_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'FrmSubjectAddView_BinderImpl', 1488), Lcom_lemania_eprospects_client_view_FrmSubjectAddView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'FrmSubjectAddView_BinderImpl$Widgets', 1489), Lcom_lemania_eprospects_client_view_FrmSubjectAddView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'FrmSubjectAddView_BinderImpl$Widgets$1', 1490), Lcom_lemania_eprospects_shared_service_SubjectRequestFactory_1SubjectRequestContextImpl$6X_2_classLit = createForClass('com.lemania.eprospects.shared.service.', 'SubjectRequestFactory_SubjectRequestContextImpl$6X', 1798);
$entry(onLoad)(27);
