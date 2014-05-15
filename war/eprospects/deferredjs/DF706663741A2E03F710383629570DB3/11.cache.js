function $populateCoursList(this$static, ecoleId){
  var rc, rf;
  if (!ecoleId.length) {
    return;
  }
  rf = new CoursRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new CoursRequestFactory_CoursRequestContextImpl_0(rf);
  $fire($listAll_4(rc, ecoleId), new CoursPresenter$3_0(this$static));
}

function $updateCoursName(this$static, cours, name_0){
  var coursForUpdate, rc, rf;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  if ($equals_5(name_0, ''))
    return;
  rf = new CoursRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new CoursRequestFactory_CoursRequestContextImpl_0(rf);
  coursForUpdate = dynamicCast($editProxy(rc, cours), Q$CoursProxy);
  coursForUpdate.setCoursNom(name_0);
  $fire($saveAndReturn_2(rc, coursForUpdate), new CoursPresenter$4_0(this$static));
}

function $updateCoursStatus(this$static, cours, value){
  var coursForUpdate, rc, rf;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rf = new CoursRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new CoursRequestFactory_CoursRequestContextImpl_0(rf);
  coursForUpdate = dynamicCast($editProxy(rc, cours), Q$CoursProxy);
  coursForUpdate.setCoursActif(value);
  $fire($saveAndReturn_2(rc, coursForUpdate), new CoursPresenter$2_0(this$static));
}

function CoursPresenter_0(eventBus, view, proxy){
  Presenter_1.call(this, eventBus, view, proxy, null);
}

defineSeed(799, 704, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$CoursAddedEvent$CoursAddedHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$CoursPresenter, Q$CoursListUiHandler]), CoursPresenter_0);
_.onBind = function onBind_2(){
  dynamicCast(this.view, Q$CoursPresenter$MyView).setUiHandlers(this);
  $initializeTable(dynamicCast(this.view, Q$CoursPresenter$MyView));
}
;
_.onCoursAdded = function onCoursAdded(event_0){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, '!cours', true);
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_3(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_1(){
  var rf, rc;
  rf = new EcoleRequestFactoryImpl_0;
  $initialize(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new EcoleRequestFactory_EcoleRequestContextImpl_0(rf);
  $fire($listAll_5(rc), new CoursPresenter$1_0(this));
  $doFire(this.eventBus, new PageAfterSelectEvent_0('!cours'), null);
}
;
_.revealInParent = function revealInParent_1(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.currentUser = null;
function $onSuccess_3(this$static, response){
  $populateEcoleList_0(dynamicCast(this$static.this$0.view, Q$CoursPresenter$MyView), response);
}

function CoursPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(800, 644, makeCastMap([Q$Receiver]), CoursPresenter$1_0);
_.onFailure_0 = function onFailure_3(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_3(response){
  $onSuccess_3(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_4(this$static, response){
  $refreshTable(dynamicCast(this$static.this$0.view, Q$CoursPresenter$MyView), response);
}

function CoursPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(801, 644, makeCastMap([Q$Receiver]), CoursPresenter$2_0);
_.onFailure_0 = function onFailure_4(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_4(response){
  $onSuccess_4(this, dynamicCast(response, Q$CoursProxy));
}
;
_.this$0 = null;
function $onSuccess_5(this$static, response){
  $setData_0(dynamicCast(this$static.this$0.view, Q$CoursPresenter$MyView), response);
}

function CoursPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(802, 644, makeCastMap([Q$Receiver]), CoursPresenter$3_0);
_.onFailure_0 = function onFailure_5(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_5(response){
  $onSuccess_5(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_6(this$static, response){
  $refreshTable(dynamicCast(this$static.this$0.view, Q$CoursPresenter$MyView), response);
}

function CoursPresenter$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(803, 644, makeCastMap([Q$Receiver]), CoursPresenter$4_0);
_.onFailure_0 = function onFailure_6(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_6(response){
  $onSuccess_6(this, dynamicCast(response, Q$CoursProxy));
}
;
_.this$0 = null;
function $get_Key$type$com$lemania$eprospects$client$presenter$CoursPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$CoursPresenter$_annotation$$none$$) {
    result = new CoursPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$eprospects$client$view$CoursView$_annotation$$none$$($getFragment_com_lemania_eprospects_client_view(this$static.injector)), $get_Key$type$com$lemania$eprospects$client$presenter$CoursPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$CoursPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$CoursPresenter$_annotation$$none$$;
}

defineSeed(1326, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_177(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$eprospects$client$presenter$CoursPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $initializeTable(this$static){
  var cellActive, cellName, colActive, colName;
  cellName = new EditTextCell_0;
  colName = new CoursView$1_0(cellName);
  $addColumn(this$static.tblCours, colName, 'Nom');
  $setFieldUpdater(colName, new CoursView$2_0(this$static));
  cellActive = new CheckboxCell_0;
  colActive = new CoursView$3_0(cellActive);
  $addColumn(this$static.tblCours, colActive, 'Actif');
  $setFieldUpdater(colActive, new CoursView$4_0(this$static));
}

function $onLstEcolesSelected(this$static){
  !!this$static.uiHandlers && $populateCoursList(dynamicCast(this$static.uiHandlers, Q$CoursListUiHandler), $getValue_2(this$static.lstEcoles, this$static.lstEcoles.element.selectedIndex));
}

function $populateEcoleList_0(this$static, ecoles){
  var i;
  $selectClear(this$static.lstEcoles.element);
  $insertItem(this$static.lstEcoles, '-', '', -1);
  for (i = 0; i < ecoles.size_1(); ++i)
    $insertItem(this$static.lstEcoles, dynamicCast(ecoles.get_0(i), Q$EcoleProxy).getSchoolName(), '' + toString_7(dynamicCast(ecoles.get_0(i), Q$EcoleProxy).getId_0().value_0), -1);
}

function $refreshTable(this$static, updatedCours){
  var listCours;
  listCours = new ArrayList_0;
  setCheck(listCours.array, listCours.size_0++, updatedCours);
  $setRowData(this$static.tblCours, this$static.selectedCours, listCours);
  $ensurePendingState(this$static.tblCours.presenter).redrawRequired = true;
}

function $setData_0(this$static, listCours){
  $setRowData_0(this$static.tblCours, listCours);
  $ensurePendingState(this$static.tblCours.presenter).redrawRequired = true;
}

function CoursView_0(){
  this.tblCours = new DataGrid_0;
  this.widget = $build_f_HTMLPanel1_1(new CoursView_BinderImpl$Widgets_0(this));
}

defineSeed(1420, 709, makeCastMap([Q$IsWidget, Q$CoursPresenter$MyView]), CoursView_0);
_.asWidget = function asWidget_6(){
  return this.widget;
}
;
_.lstEcoles = null;
_.selectedCours = 0;
_.widget = null;
function CoursView$1_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1421, 371, makeCastMap([Q$HasCell, Q$Column]), CoursView$1_0);
_.getValue = function getValue_1(object){
  return dynamicCast(object, Q$CoursProxy).getCoursNom();
}
;
function $update_0(this$static, index, cours, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedCours = index;
    $updateCoursName(dynamicCast(this$static.this$0.uiHandlers, Q$CoursListUiHandler), cours, value);
  }
}

function CoursView$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1422, 1, {}, CoursView$2_0);
_.update = function update_1(index, cours, value){
  $update_0(this, index, dynamicCast(cours, Q$CoursProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function CoursView$3_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1423, 371, makeCastMap([Q$HasCell, Q$Column]), CoursView$3_0);
_.getValue = function getValue_2(cours){
  return dynamicCast(cours, Q$CoursProxy).getCoursActif();
}
;
function $update_1(this$static, index, cours, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedCours = index;
    $updateCoursStatus(dynamicCast(this$static.this$0.uiHandlers, Q$CoursListUiHandler), cours, value);
  }
}

function CoursView$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1424, 1, {}, CoursView$4_0);
_.update = function update_2(index, cours, value){
  $update_1(this, index, dynamicCast(cours, Q$CoursProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function CoursView_BinderImpl_0(){
}

defineSeed(1425, 1, {}, CoursView_BinderImpl_0);
function $build_f_HTMLPanel1_1(this$static){
  var attachRecord2, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_HorizontalPanel4, f_Label5, lstEcoles, tblCours;
  f_HTMLPanel1 = new HTMLPanel_0($html1_1(this$static.domId0).html);
  attachRecord2 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord2.origParent?$insertBefore(attachRecord2.origParent, attachRecord2.element, attachRecord2.origSibling):orphan(attachRecord2.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_11(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'LISTE DES PROGRAMMES', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_11(f_VerticalPanel2, (f_HorizontalPanel4 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel4, ALIGN_CENTER) , $setVerticalAlignment(f_HorizontalPanel4, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE)) , $add_9(f_HorizontalPanel4, (f_Label5 = new Label_0 , $setTextOrHtml(f_Label5.directionalTextHelper, "Choisir le nom de l'\xE9cole :", false) , $updateHorizontalAlignment(f_Label5) , f_Label5.element.style['width'] = '' , f_Label5)) , $add_9(f_HorizontalPanel4, (lstEcoles = new ListBox_0 , $addDomHandler(lstEcoles, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstEcoles = lstEcoles , lstEcoles)) , f_HorizontalPanel4.element.style['height'] = '40px' , f_HorizontalPanel4.element.style['width'] = '50%' , f_HorizontalPanel4)) , $add_11(f_VerticalPanel2, (tblCours = this$static.owner.tblCours , tblCours.element.style['height'] = '500px' , tblCours.element.style['width'] = '100%' , tblCours)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function CoursView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new CoursView_BinderImpl$Widgets$1_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1426, 1, {}, CoursView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function CoursView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1427, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), CoursView_BinderImpl$Widgets$1_0);
_.onChange = function onChange_5(event_0){
  $onLstEcolesSelected(this.this$1.owner);
}
;
_.this$1 = null;
function $html1_1(arg0){
  var sb;
  sb = new StringBuilder_0;
  sb.impl.string += "<span id='";
  $append_12(sb, htmlEscape(arg0));
  sb.impl.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function $get_Key$type$com$lemania$eprospects$client$view$CoursView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$view$CoursView$_annotation$$none$$) {
    result = new CoursView_0(new CoursView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$eprospects$client$view$CoursView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$eprospects$client$view$CoursView$_annotation$$none$$;
}

function $saveAndReturn_2(this$static, newCours){
  var x;
  x = new CoursRequestFactory_CoursRequestContextImpl$8X_0(this$static, newCours);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function CoursRequestFactory_CoursRequestContextImpl$8X_0(this$0, val$newCours){
  this.val$newCours = val$newCours;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1885, 648, makeCastMap([Q$AbstractRequest]), CoursRequestFactory_CoursRequestContextImpl$8X_0);
_.makeRequestData = function makeRequestData_48(){
  return new RequestData_0('bbyxKfSsQb4wP_lRu8BU9FYghpQ=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$newCours]), this.propertyRefs, Lcom_lemania_eprospects_shared_CoursProxy_2_classLit, null);
}
;
_.val$newCours = null;
var Lcom_lemania_eprospects_client_presenter_CoursPresenter_2_classLit = createForClass('com.lemania.eprospects.client.presenter.', 'CoursPresenter', 799), Lcom_lemania_eprospects_client_presenter_CoursPresenter$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.', 'CoursPresenter$1', 800), Lcom_lemania_eprospects_client_presenter_CoursPresenter$2_2_classLit = createForClass('com.lemania.eprospects.client.presenter.', 'CoursPresenter$2', 801), Lcom_lemania_eprospects_client_presenter_CoursPresenter$3_2_classLit = createForClass('com.lemania.eprospects.client.presenter.', 'CoursPresenter$3', 802), Lcom_lemania_eprospects_client_presenter_CoursPresenter$4_2_classLit = createForClass('com.lemania.eprospects.client.presenter.', 'CoursPresenter$4', 803), Lcom_lemania_eprospects_client_view_CoursView_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'CoursView', 1420), Lcom_lemania_eprospects_client_view_CoursView$1_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'CoursView$1', 1421), Lcom_lemania_eprospects_client_view_CoursView$2_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'CoursView$2', 1422), Lcom_lemania_eprospects_client_view_CoursView$3_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'CoursView$3', 1423), Lcom_lemania_eprospects_client_view_CoursView$4_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'CoursView$4', 1424), Lcom_lemania_eprospects_client_view_CoursView_1BinderImpl_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'CoursView_BinderImpl', 1425), Lcom_lemania_eprospects_client_view_CoursView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'CoursView_BinderImpl$Widgets', 1426), Lcom_lemania_eprospects_client_view_CoursView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'CoursView_BinderImpl$Widgets$1', 1427), Lcom_lemania_eprospects_shared_service_CoursRequestFactory_1CoursRequestContextImpl$8X_2_classLit = createForClass('com.lemania.eprospects.shared.service.', 'CoursRequestFactory_CoursRequestContextImpl$8X', 1885);
$entry(onLoad)(11);
