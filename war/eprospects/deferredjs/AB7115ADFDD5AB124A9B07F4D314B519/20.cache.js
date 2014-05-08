function $addNewClasse(this$static, className, coursId, isActif){
  var classe, rc, rf, x;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  if (!className.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Nom de la classe');
    return;
  }
  if (!coursId.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Merci de choisir un programme');
    return;
  }
  rf = new ClasseRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ClasseRequestFactory_ClasseRequestContextImpl_0(rf);
  classe = dynamicCast($create_1(rc, Lcom_lemania_eprospects_shared_ClasseProxy_2_classLit), Q$ClasseProxy);
  classe.setClassName(className);
  classe.setIsActive(isActif);
  $fire((x = new ClasseRequestFactory_ClasseRequestContextImpl$8X_0(rc, classe, coursId) , $addInvocation(rc.state.dialect, x) , x), new FrmClasseAddPresenter$2_0(this$static));
}

function $onEcoleSelected_1(this$static, ecoleId){
  var rc, rf;
  if (!ecoleId.length) {
    return;
  }
  rf = new CoursRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new CoursRequestFactory_CoursRequestContextImpl_0(rf);
  $fire($listAll_3(rc, ecoleId), new FrmClasseAddPresenter$3_0(this$static));
}

function FrmClasseAddPresenter_0(eventBus, view, proxy){
  Presenter_1.call(this, eventBus, view, proxy, null);
}

defineSeed(905, 708, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$FrmClasseAddPresenter, Q$FrmClasseAddUiHandler]), FrmClasseAddPresenter_0);
_.onBind = function onBind_12(){
  dynamicCast(this.view, Q$FrmClasseAddPresenter$MyView).setUiHandlers(this);
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_23(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_11(){
  var rf, rc;
  $doFire(this.eventBus, new PageAfterSelectEvent_0('classeadd'), null);
  $resetForm_5(dynamicCast(this.view, Q$FrmClasseAddPresenter$MyView));
  rf = new EcoleRequestFactoryImpl_0;
  $initialize_0(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new EcoleRequestFactory_EcoleRequestContextImpl_0(rf);
  $fire($listAll_4(rc), new FrmClasseAddPresenter$1_0(this));
}
;
_.revealInParent = function revealInParent_11(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.currentUser = null;
function $onSuccess_48(this$static, response){
  $setEcoleList_1(dynamicCast(this$static.this$0.view, Q$FrmClasseAddPresenter$MyView), response);
}

function FrmClasseAddPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(906, 648, makeCastMap([Q$Receiver]), FrmClasseAddPresenter$1_0);
_.onFailure_0 = function onFailure_50(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_50(response){
  $onSuccess_48(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_49(this$static){
  $showStatus_0(dynamicCast(this$static.this$0.view, Q$FrmClasseAddPresenter$MyView), ($clinit_NotificationTypes() , 'La nouvelle classe a \xE9t\xE9 cr\xE9\xE9e avec succ\xE8s.'));
  $resetForm_5(dynamicCast(this$static.this$0.view, Q$FrmClasseAddPresenter$MyView));
}

function FrmClasseAddPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(907, 648, makeCastMap([Q$Receiver]), FrmClasseAddPresenter$2_0);
_.onFailure_0 = function onFailure_51(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_51(response){
  $onSuccess_49(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
function $onSuccess_50(this$static, response){
  $setCoursList_1(dynamicCast(this$static.this$0.view, Q$FrmClasseAddPresenter$MyView), response);
}

function FrmClasseAddPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(908, 648, makeCastMap([Q$Receiver]), FrmClasseAddPresenter$3_0);
_.onFailure_0 = function onFailure_52(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_52(response){
  $onSuccess_50(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $get_Key$type$com$lemania$eprospects$client$presenter$FrmClasseAddPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$FrmClasseAddPresenter$_annotation$$none$$) {
    result = new FrmClasseAddPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$eprospects$client$view$FrmClasseAddView$_annotation$$none$$($getFragment_com_lemania_eprospects_client_view(this$static.injector)), $get_Key$type$com$lemania$eprospects$client$presenter$FrmClasseAddPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$FrmClasseAddPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$FrmClasseAddPresenter$_annotation$$none$$;
}

defineSeed(1190, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_149(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$eprospects$client$presenter$FrmClasseAddPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $onCmdSaveClick_0(this$static){
  !!this$static.uiHandlers && $addNewClasse(dynamicCast(this$static.uiHandlers, Q$FrmClasseAddUiHandler), $getPropertyString(this$static.txtClassName.element, 'value'), $getValue_1(this$static.lstCoursList, this$static.lstCoursList.element.selectedIndex), $getValue_0(this$static.chkActive));
}

function $onLstEcolesChange_1(this$static){
  if (!$getValue_1(this$static.lstEcoles, this$static.lstEcoles.element.selectedIndex).length) {
    $selectClear(this$static.lstCoursList.element);
    return;
  }
  !!this$static.uiHandlers && $onEcoleSelected_1(dynamicCast(this$static.uiHandlers, Q$FrmClasseAddUiHandler), $getValue_1(this$static.lstEcoles, this$static.lstEcoles.element.selectedIndex));
}

function $resetForm_5(this$static){
  $setSelectedIndex_0(this$static.lstEcoles, 0);
  $selectClear(this$static.lstCoursList.element);
  $setText(this$static.txtClassName, '');
  $setValue_1(this$static.chkActive, ($clinit_Boolean() , $clinit_Boolean() , TRUE_1));
}

function $setCoursList_1(this$static, coursList){
  var cours, cours$iterator;
  $selectClear(this$static.lstCoursList.element);
  $insertItem(this$static.lstCoursList, '-', '', -1);
  for (cours$iterator = coursList.iterator(); cours$iterator.hasNext();) {
    cours = dynamicCast(cours$iterator.next_0(), Q$CoursProxy);
    $insertItem(this$static.lstCoursList, cours.getCoursNom(), '' + toString_7(cours.getId_0().value_0), -1);
  }
}

function $setEcoleList_1(this$static, ecoleList){
  var ecole, ecole$iterator;
  $selectClear(this$static.lstEcoles.element);
  $insertItem(this$static.lstEcoles, '-', '', -1);
  for (ecole$iterator = ecoleList.iterator(); ecole$iterator.hasNext();) {
    ecole = dynamicCast(ecole$iterator.next_0(), Q$EcoleProxy);
    $insertItem(this$static.lstEcoles, ecole.getSchoolName(), '' + toString_7(ecole.getId_0().value_0), -1);
  }
}

function $showStatus_0(this$static, msg){
  var t;
  $setText_1(this$static.lblStatus, msg);
  t = new FrmClasseAddView$1_0(this$static);
  $schedule(t, 3000);
}

function FrmClasseAddView_0(){
  this.widget = $build_f_HTMLPanel1_10(new FrmClasseAddView_BinderImpl$Widgets_0(this));
}

defineSeed(1384, 713, makeCastMap([Q$IsWidget, Q$FrmClasseAddPresenter$MyView]), FrmClasseAddView_0);
_.asWidget = function asWidget_15(){
  return this.widget;
}
;
_.chkActive = null;
_.lblStatus = null;
_.lstCoursList = null;
_.lstEcoles = null;
_.txtClassName = null;
_.widget = null;
function FrmClasseAddView$1_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

defineSeed(1385, 10, makeCastMap([Q$Timer]), FrmClasseAddView$1_0);
_.run = function run_3(){
  $setText_1(this.this$0.lblStatus, '');
}
;
_.this$0 = null;
function FrmClasseAddView_BinderImpl_0(){
}

defineSeed(1386, 1, {}, FrmClasseAddView_BinderImpl_0);
function $build_f_HTMLPanel1_10(this$static){
  var attachRecord11, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_Grid4, f_Label5, lstEcoles, f_Label6, lstCoursList, f_Label7, txtClassName, f_Label8, chkActive, f_Label9, cmdSave, sb, f_Label10, lblStatus;
  f_HTMLPanel1 = new HTMLPanel_0($html2_0(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord11 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord11.origParent?$insertBefore(attachRecord11.origParent, attachRecord11.element, attachRecord11.origSibling):orphan(attachRecord11.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_11(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'AJOUTER UNE CLASSE', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_11(f_VerticalPanel2, (f_Grid4 = new Grid_0 , $resizeColumns(f_Grid4, 2) , $resizeRows(f_Grid4, 6) , $setWidget_1(f_Grid4, 0, 0, (f_Label5 = new Label_0 , $setTextOrHtml(f_Label5.directionalTextHelper, 'Ecole', false) , $updateHorizontalAlignment(f_Label5) , f_Label5)) , $setWidget_1(f_Grid4, 0, 1, (lstEcoles = new ListBox_0 , lstEcoles.element['className'] = 'sis_textbox' , $addDomHandler(lstEcoles, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstEcoles = lstEcoles , lstEcoles)) , $setWidget_1(f_Grid4, 1, 0, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, 'Programme', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $setWidget_1(f_Grid4, 1, 1, (lstCoursList = new ListBox_0 , lstCoursList.element['className'] = 'sis_textbox' , this$static.owner.lstCoursList = lstCoursList , lstCoursList)) , $setWidget_1(f_Grid4, 2, 0, (f_Label7 = new Label_0 , $setTextOrHtml(f_Label7.directionalTextHelper, 'Nom de la classe', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $setWidget_1(f_Grid4, 2, 1, (txtClassName = new TextBox_0 , txtClassName.element['className'] = 'sis_textbox' , this$static.owner.txtClassName = txtClassName , txtClassName)) , $setWidget_1(f_Grid4, 3, 0, (f_Label8 = new Label_0 , f_Label8.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label8.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $setWidget_1(f_Grid4, 3, 1, (chkActive = new CheckBox_0 , $setTextOrHtml(chkActive.directionalTextHelper, 'Active', false) , $setValue_1(chkActive, ($clinit_Boolean() , $clinit_Boolean() , TRUE_1)) , this$static.owner.chkActive = chkActive , chkActive)) , $setWidget_1(f_Grid4, 4, 0, (f_Label9 = new Label_0 , f_Label9.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label9.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $setWidget_1(f_Grid4, 4, 1, (cmdSave = new Button_0 , $setHTML(cmdSave, (sb = new StringBuilder_0 , $append_1(sb.data, 'Enregistrer') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data))).html) , $addDomHandler(cmdSave, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdSave)) , $setWidget_1(f_Grid4, 5, 0, (f_Label10 = new Label_0 , f_Label10.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label10.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $setWidget_1(f_Grid4, 5, 1, (lblStatus = new Label_0 , this$static.owner.lblStatus = lblStatus , lblStatus)) , f_Grid4.element.style['width'] = '80%' , f_Grid4.tableElem['cellSpacing'] = 5 , f_Grid4.tableElem['cellPadding'] = 5 , f_Grid4)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function FrmClasseAddView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new FrmClasseAddView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new FrmClasseAddView_BinderImpl$Widgets$2_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1387, 1, {}, FrmClasseAddView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function FrmClasseAddView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1388, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), FrmClasseAddView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_21(event_0){
  $onCmdSaveClick_0(this.this$1.owner);
}
;
_.this$1 = null;
function FrmClasseAddView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1389, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmClasseAddView_BinderImpl$Widgets$2_0);
_.onChange = function onChange_14(event_0){
  $onLstEcolesChange_1(this.this$1.owner);
}
;
_.this$1 = null;
function $html2_0(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_1(sb.data, "<span id='");
  $append_11(sb, htmlEscape(arg0));
  $append_1(sb.data, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data));
}

function $get_Key$type$com$lemania$eprospects$client$view$FrmClasseAddView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$view$FrmClasseAddView$_annotation$$none$$) {
    result = new FrmClasseAddView_0(new FrmClasseAddView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$eprospects$client$view$FrmClasseAddView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$eprospects$client$view$FrmClasseAddView$_annotation$$none$$;
}

function ClasseRequestFactory_ClasseRequestContextImpl$8X_0(this$0, val$cours, val$ecoleId){
  this.val$cours = val$cours;
  this.val$ecoleId = val$ecoleId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1713, 652, makeCastMap([Q$AbstractRequest]), ClasseRequestFactory_ClasseRequestContextImpl$8X_0);
_.makeRequestData = function makeRequestData_30(){
  return new RequestData_0('PyDH4LvedkUmSl9qzKagH23hUnI=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$cours, this.val$ecoleId]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$cours = null;
_.val$ecoleId = null;
var Lcom_lemania_eprospects_client_presenter_FrmClasseAddPresenter_2_classLit = createForClass('com.lemania.eprospects.client.presenter.', 'FrmClasseAddPresenter', 905), Lcom_lemania_eprospects_client_presenter_FrmClasseAddPresenter$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.', 'FrmClasseAddPresenter$1', 906), Lcom_lemania_eprospects_client_presenter_FrmClasseAddPresenter$2_2_classLit = createForClass('com.lemania.eprospects.client.presenter.', 'FrmClasseAddPresenter$2', 907), Lcom_lemania_eprospects_client_presenter_FrmClasseAddPresenter$3_2_classLit = createForClass('com.lemania.eprospects.client.presenter.', 'FrmClasseAddPresenter$3', 908), Lcom_lemania_eprospects_client_view_FrmClasseAddView_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'FrmClasseAddView', 1384), Lcom_lemania_eprospects_client_view_FrmClasseAddView$1_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'FrmClasseAddView$1', 1385), Lcom_lemania_eprospects_client_view_FrmClasseAddView_1BinderImpl_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'FrmClasseAddView_BinderImpl', 1386), Lcom_lemania_eprospects_client_view_FrmClasseAddView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'FrmClasseAddView_BinderImpl$Widgets', 1387), Lcom_lemania_eprospects_client_view_FrmClasseAddView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'FrmClasseAddView_BinderImpl$Widgets$1', 1388), Lcom_lemania_eprospects_client_view_FrmClasseAddView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'FrmClasseAddView_BinderImpl$Widgets$2', 1389), Lcom_lemania_eprospects_shared_service_ClasseRequestFactory_1ClasseRequestContextImpl$8X_2_classLit = createForClass('com.lemania.eprospects.shared.service.', 'ClasseRequestFactory_ClasseRequestContextImpl$8X', 1713);
$entry(onLoad)(20);
