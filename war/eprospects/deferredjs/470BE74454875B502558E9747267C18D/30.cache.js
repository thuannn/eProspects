function ProfessorAfterAddEvent_0(prof){
  $clinit_ProfessorAfterAddEvent();
  this.prof = prof;
}

defineSeed(794, 235, {}, ProfessorAfterAddEvent_0);
_.dispatch_0 = function dispatch_56(handler){
  dynamicCast(handler, Q$ProfessorAfterAddEvent$ProfessorAfterAddHandler).onProfessorAfterAdd(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_57(){
  return TYPE_57;
}
;
_.prof = null;
function $professorAdd(this$static, profName, profEmail, profStatus){
  var rc, rf;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  if (!profName.length) {
    alert_0('Veuillez saissir le nom du professeur !');
    return;
  }
  if (!isValidEmailAddress(profEmail)) {
    alert_0('Adresse email invalid !');
    return;
  }
  rf = new ProfessorRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfessorRequestFactory_ProfessorRequestContextImpl_0(rf);
  this$static.prof = dynamicCast($create_1(rc, Lcom_lemania_eprospects_shared_ProfessorProxy_2_classLit), Q$ProfessorProxy);
  this$static.prof.setProfName(profName);
  this$static.prof.setProfActive(profStatus);
  this$static.prof.setProfEmail(profEmail);
  $fire($save_1(rc, this$static.prof), new ProfsAddPresenter$1_0(this$static));
}

function $professorAddCancelled(){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, '!profs', true);
}

function ProfsAddPresenter_0(eventBus, view, proxy){
  Presenter_1.call(this, eventBus, view, proxy, null);
  dynamicCast(this.view, Q$ProfsAddPresenter$MyView).setUiHandlers(this);
}

defineSeed(1037, 715, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$ProfsAddPresenter, Q$ProfessorAddUiHandler]), ProfsAddPresenter_0);
_.onBind = function onBind_22(){
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_43(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_21(){
  $initializeUi_3(dynamicCast(this.view, Q$ProfsAddPresenter$MyView));
  $doFire(this.eventBus, new PageAfterSelectEvent_0('!profsadd'), null);
}
;
_.revealInParent = function revealInParent_21(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.currentUser = null;
_.prof = null;
function $onSuccess_104(this$static){
  $doFire(this$static.this$0.eventBus, new ProfessorAfterAddEvent_0(this$static.this$0.prof), null);
  $initializeUi_3(dynamicCast(this$static.this$0.view, Q$ProfsAddPresenter$MyView));
}

function ProfsAddPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1038, 655, makeCastMap([Q$Receiver]), ProfsAddPresenter$1_0);
_.onFailure_0 = function onFailure_108(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_108(response){
  $onSuccess_104(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
function $onProfessorAfterAdd(this$static, event_0){
  var prof, rc, rf, updatedUser;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rf = new UserRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new UserRequestFactory_UserRequestContextImpl_0(rf);
  prof = event_0.prof;
  updatedUser = dynamicCast($create_1(rc, Lcom_lemania_eprospects_shared_UserProxy_2_classLit), Q$UserProxy);
  updatedUser.setFullName(prof.getProfName());
  updatedUser.setActive(prof.getProfActive());
  updatedUser.setAdmin(($clinit_Boolean() , $clinit_Boolean() , FALSE_1));
  updatedUser.setIsProf(TRUE_1);
  updatedUser.setIsStudent(FALSE_1);
  updatedUser.setEmail(prof.getProfEmail());
  updatedUser.setUserName(prof.getProfEmail());
  updatedUser.setPassword($substring(toPowerOfTwoString_0(doubleToLongBits(Math.random())), 8));
  $fire($save_3(rc, updatedUser), new UserManagementPresenter$5_0);
}

function UserManagementPresenter$5_0(){
}

defineSeed(1089, 655, makeCastMap([Q$Receiver]), UserManagementPresenter$5_0);
_.onFailure_0 = function onFailure_134(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_134(response){
  throwClassCastExceptionUnlessNull(response);
  alert_0(($clinit_NotificationTypes() , "Un code d'acc\xE8s a \xE9t\xE9 cr\xE9\xE9 pour le nouveau professeur."));
}
;
defineSeed(1092, 747, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$HasHandlerContainer, Q$Place, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$ProfessorAfterAddEvent$ProfessorAfterAddHandler, Q$StudentAfterAddEvent$StudentAfterAddHandler, Q$StudentAfterStatusChangeEvent$StudentAfterStatusChangeHandler]));
_.onProfessorAfterAdd = function onProfessorAfterAdd_0(event_0){
  $getPresenter_0(this, new UserManagementPresenterMyProxyImpl$2_0(this.eventBus, event_0));
}
;
function $success_37(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new UserManagementPresenterMyProxyImpl$2$1_0(presenter, this$static.val$event));
}

function UserManagementPresenterMyProxyImpl$2_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(1095, 729, {}, UserManagementPresenterMyProxyImpl$2_0);
_.success = function success_39(presenter){
  $success_37(this, dynamicCast(presenter, Q$UserManagementPresenter));
}
;
_.val$event = null;
function UserManagementPresenterMyProxyImpl$2$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(1096, 1, {}, UserManagementPresenterMyProxyImpl$2$1_0);
_.execute_0 = function execute_65(){
  $onProfessorAfterAdd(this.val$presenter, this.val$event);
}
;
_.val$event = null;
_.val$presenter = null;
function $get_Key$type$com$lemania$eprospects$client$presenter$ProfsAddPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$ProfsAddPresenter$_annotation$$none$$) {
    result = new ProfsAddPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$eprospects$client$view$ProfsAddView$_annotation$$none$$($getFragment_com_lemania_eprospects_client_view(this$static.injector)), $get_Key$type$com$lemania$eprospects$client$presenter$ProfsAddPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$ProfsAddPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$ProfsAddPresenter$_annotation$$none$$;
}

defineSeed(1341, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_179(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$eprospects$client$presenter$ProfsAddPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $initializeUi_3(this$static){
  $setText(this$static.txtProfName, '');
  $setText(this$static.txtProfFirstName, '');
  $setText(this$static.txtProfEmail, '');
  $setEnabled(this$static.cmdAdd, true);
}

function $onCmdAddClicked(this$static){
  !!this$static.uiHandlers && $professorAdd(dynamicCast(this$static.uiHandlers, Q$ProfessorAddUiHandler), $trim($getPropertyString(this$static.txtProfName.element, 'value')) + ' ' + $trim($getPropertyString(this$static.txtProfFirstName.element, 'value')), $trim($getPropertyString(this$static.txtProfEmail.element, 'value')), $getValue_0(this$static.chkProfStatus));
}

function $onCmdCancelClicked_0(this$static){
  !!this$static.uiHandlers && $professorAddCancelled(dynamicCast(this$static.uiHandlers, Q$ProfessorAddUiHandler));
}

function $onTxtProfFirstNameKeyUp(this$static){
  $equals_5($getPropertyString(this$static.txtProfFirstName.element, 'value'), '')?$setText(this$static.txtProfEmail, $trim($getPropertyString(this$static.txtProfName.element, 'value')).toLowerCase() + '@eprofil.ch'):$equals_5($getPropertyString(this$static.txtProfName.element, 'value'), '')?$setText(this$static.txtProfEmail, $getPropertyString(this$static.txtProfFirstName.element, 'value').substr(0, 1 - 0).toLowerCase() + '@eprofil.ch'):$setText(this$static.txtProfEmail, $getPropertyString(this$static.txtProfFirstName.element, 'value').substr(0, 1 - 0).toLowerCase() + '.' + $trim($getPropertyString(this$static.txtProfName.element, 'value')).toLowerCase() + '@eprofil.ch');
}

function $onTxtProfNameKeyUp(this$static){
  $equals_5($getPropertyString(this$static.txtProfFirstName.element, 'value'), '')?$setText(this$static.txtProfEmail, $trim($getPropertyString(this$static.txtProfName.element, 'value')).toLowerCase() + '@eprofil.ch'):$equals_5($getPropertyString(this$static.txtProfName.element, 'value'), '')?$setText(this$static.txtProfEmail, $getPropertyString(this$static.txtProfFirstName.element, 'value').substr(0, 1 - 0).toLowerCase() + '@eprofil.ch'):$setText(this$static.txtProfEmail, $getPropertyString(this$static.txtProfFirstName.element, 'value').substr(0, 1 - 0).toLowerCase() + '.' + $trim($getPropertyString(this$static.txtProfName.element, 'value')).toLowerCase() + '@eprofil.ch');
}

function ProfsAddView_0(){
  this.widget = $build_f_HTMLPanel1_21(new ProfsAddView_BinderImpl$Widgets_0(this));
}

defineSeed(1682, 720, makeCastMap([Q$IsWidget, Q$ProfsAddPresenter$MyView]), ProfsAddView_0);
_.asWidget = function asWidget_26(){
  return this.widget;
}
;
_.chkProfStatus = null;
_.cmdAdd = null;
_.txtProfEmail = null;
_.txtProfFirstName = null;
_.txtProfName = null;
_.widget = null;
function ProfsAddView_BinderImpl_0(){
}

defineSeed(1683, 1, {}, ProfsAddView_BinderImpl_0);
function $build_f_HTMLPanel1_21(this$static){
  var attachRecord21, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_HorizontalPanel4, f_Grid5, f_Label6, txtProfName, f_Label7, txtProfFirstName, f_Label8, txtProfEmail, f_Label9, chkProfStatus, f_HorizontalPanel11, cmdCancel, sb, cmdAdd, sb_0;
  f_HTMLPanel1 = new HTMLPanel_0($html3_2(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord21 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord21.origParent?$insertBefore(attachRecord21.origParent, attachRecord21.element, attachRecord21.origSibling):orphan(attachRecord21.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_11(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'AJOUTER UN NOUVEAU PROFESSEUR', false) , $updateHorizontalAlignment(f_Label3) , f_Label3.element.style['width'] = '' , f_Label3)) , $add_11(f_VerticalPanel2, (f_HorizontalPanel4 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel4, (f_Grid5 = new Grid_0 , $resizeColumns(f_Grid5, 2) , $resizeRows(f_Grid5, 5) , $setWidget_1(f_Grid5, 0, 0, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, 'Nom :', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $setWidget_1(f_Grid5, 0, 1, (txtProfName = new TextBox_0 , txtProfName.element['className'] = 'sis_textbox' , txtProfName.element.style['width'] = '' , $addDomHandler(txtProfName, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, ($clinit_KeyUpEvent() , $clinit_KeyUpEvent() , TYPE_3)) , this$static.owner.txtProfName = txtProfName , txtProfName)) , $setWidget_1(f_Grid5, 1, 0, (f_Label7 = new Label_0 , $setTextOrHtml(f_Label7.directionalTextHelper, 'Pr\xE9nom :', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $setWidget_1(f_Grid5, 1, 1, (txtProfFirstName = new TextBox_0 , txtProfFirstName.element['className'] = 'sis_textbox' , $addDomHandler(txtProfFirstName, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, TYPE_3) , this$static.owner.txtProfFirstName = txtProfFirstName , txtProfFirstName)) , $setWidget_1(f_Grid5, 2, 0, (f_Label8 = new Label_0 , $setTextOrHtml(f_Label8.directionalTextHelper, "Email (nom d'utilisateur) :", false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $setWidget_1(f_Grid5, 2, 1, (txtProfEmail = new TextBox_0 , txtProfEmail.element['className'] = 'sis_textbox' , txtProfEmail.element.style['width'] = '300px' , this$static.owner.txtProfEmail = txtProfEmail , txtProfEmail)) , $setWidget_1(f_Grid5, 3, 0, (f_Label9 = new Label_0 , $setTextOrHtml(f_Label9.directionalTextHelper, 'Active :', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $setWidget_1(f_Grid5, 3, 1, (chkProfStatus = new CheckBox_0 , $setValue_1(chkProfStatus, ($clinit_Boolean() , $clinit_Boolean() , TRUE_1)) , this$static.owner.chkProfStatus = chkProfStatus , chkProfStatus)) , $setWidget_1(f_Grid5, 4, 0, new Label_0) , $setWidget_1(f_Grid5, 4, 1, (f_HorizontalPanel11 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel11, ALIGN_LEFT) , $add_9(f_HorizontalPanel11, (cmdCancel = new Button_0 , $setHTML(cmdCancel, (sb = new StringBuilder_0 , $append_1(sb.data, 'Annuler') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data))).html) , $addDomHandler(cmdCancel, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdCancel)) , $add_9(f_HorizontalPanel11, (cmdAdd = new Button_0 , $setHTML(cmdAdd, (sb_0 = new StringBuilder_0 , $append_1(sb_0.data, 'Ajouter') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb_0.data))).html) , $setInnerText(cmdAdd.element, 'Enregistrer') , $addDomHandler(cmdAdd, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE_0) , this$static.owner.cmdAdd = cmdAdd , cmdAdd)) , f_HorizontalPanel11.element.style['width'] = '60%' , f_HorizontalPanel11)) , f_Grid5.element.style['width'] = '80%' , f_Grid5.tableElem['cellSpacing'] = 5 , f_Grid5.tableElem['cellPadding'] = 5 , f_Grid5)) , f_HorizontalPanel4.element.style['width'] = '800px' , f_HorizontalPanel4)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function ProfsAddView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ProfsAddView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new ProfsAddView_BinderImpl$Widgets$2_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new ProfsAddView_BinderImpl$Widgets$3_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new ProfsAddView_BinderImpl$Widgets$4_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1684, 1, {}, ProfsAddView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function ProfsAddView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1685, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ProfsAddView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_63(event_0){
  $onCmdCancelClicked_0(this.this$1.owner);
}
;
_.this$1 = null;
function ProfsAddView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1686, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ProfsAddView_BinderImpl$Widgets$2_0);
_.onClick = function onClick_64(event_0){
  $onCmdAddClicked(this.this$1.owner);
}
;
_.this$1 = null;
function ProfsAddView_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1687, 1, makeCastMap([Q$KeyUpHandler, Q$EventHandler]), ProfsAddView_BinderImpl$Widgets$3_0);
_.onKeyUp = function onKeyUp_0(event_0){
  $onTxtProfNameKeyUp(this.this$1.owner);
}
;
_.this$1 = null;
function ProfsAddView_BinderImpl$Widgets$4_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1688, 1, makeCastMap([Q$KeyUpHandler, Q$EventHandler]), ProfsAddView_BinderImpl$Widgets$4_0);
_.onKeyUp = function onKeyUp_1(event_0){
  $onTxtProfFirstNameKeyUp(this.this$1.owner);
}
;
_.this$1 = null;
function $html3_2(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_1(sb.data, "<span id='");
  $append_11(sb, htmlEscape(arg0));
  $append_1(sb.data, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data));
}

function $get_Key$type$com$lemania$eprospects$client$view$ProfsAddView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$view$ProfsAddView$_annotation$$none$$) {
    result = new ProfsAddView_0(new ProfsAddView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$eprospects$client$view$ProfsAddView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$eprospects$client$view$ProfsAddView$_annotation$$none$$;
}

defineSeed(1789, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$ProfessorProxy]));
_.setProfEmail = function setProfEmail(profEmail){
  dynamicCast($getWrapped(this.this$0), Q$ProfessorProxy).setProfEmail(profEmail);
}
;
_.setProfName = function setProfName(profName){
  dynamicCast($getWrapped(this.this$0), Q$ProfessorProxy).setProfName(profName);
}
;
defineSeed(1790, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$ProfessorProxy]));
_.setProfEmail = function setProfEmail_0(profEmail){
  $setProperty(this.this$0, 'profEmail', profEmail);
}
;
_.setProfName = function setProfName_0(profName){
  $setProperty(this.this$0, 'profName', profName);
}
;
function $save_1(this$static, prof){
  var x;
  x = new ProfessorRequestFactory_ProfessorRequestContextImpl$5X_0(this$static, prof);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function ProfessorRequestFactory_ProfessorRequestContextImpl$5X_0(this$0, val$prof){
  this.val$prof = val$prof;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1929, 659, makeCastMap([Q$AbstractRequest]), ProfessorRequestFactory_ProfessorRequestContextImpl$5X_0);
_.makeRequestData = function makeRequestData_64(){
  return new RequestData_0('drMabOVTvQ5nBBbUzf5g1f21iiM=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$prof]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$prof = null;
var Lcom_lemania_eprospects_client_presenter_ProfsAddPresenter_2_classLit = createForClass('com.lemania.eprospects.client.presenter.', 'ProfsAddPresenter', 1037), Lcom_lemania_eprospects_client_presenter_ProfsAddPresenter$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.', 'ProfsAddPresenter$1', 1038), Lcom_lemania_eprospects_client_presenter_UserManagementPresenter$5_2_classLit = createForClass('com.lemania.eprospects.client.presenter.', 'UserManagementPresenter$5', 1089), Lcom_lemania_eprospects_client_event_ProfessorAfterAddEvent_2_classLit = createForClass('com.lemania.eprospects.client.event.', 'ProfessorAfterAddEvent', 794), Lcom_lemania_eprospects_client_presenter_UserManagementPresenterMyProxyImpl$2_2_classLit = createForClass('com.lemania.eprospects.client.presenter.', 'UserManagementPresenterMyProxyImpl$2', 1095), Lcom_lemania_eprospects_client_presenter_UserManagementPresenterMyProxyImpl$2$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.', 'UserManagementPresenterMyProxyImpl$2$1', 1096), Lcom_lemania_eprospects_client_view_ProfsAddView_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'ProfsAddView', 1682), Lcom_lemania_eprospects_client_view_ProfsAddView_1BinderImpl_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'ProfsAddView_BinderImpl', 1683), Lcom_lemania_eprospects_client_view_ProfsAddView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'ProfsAddView_BinderImpl$Widgets', 1684), Lcom_lemania_eprospects_client_view_ProfsAddView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'ProfsAddView_BinderImpl$Widgets$1', 1685), Lcom_lemania_eprospects_client_view_ProfsAddView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'ProfsAddView_BinderImpl$Widgets$2', 1686), Lcom_lemania_eprospects_client_view_ProfsAddView_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'ProfsAddView_BinderImpl$Widgets$3', 1687), Lcom_lemania_eprospects_client_view_ProfsAddView_1BinderImpl$Widgets$4_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'ProfsAddView_BinderImpl$Widgets$4', 1688), Lcom_lemania_eprospects_shared_service_ProfessorRequestFactory_1ProfessorRequestContextImpl$5X_2_classLit = createForClass('com.lemania.eprospects.shared.service.', 'ProfessorRequestFactory_ProfessorRequestContextImpl$5X', 1929);
$entry(onLoad)(30);
