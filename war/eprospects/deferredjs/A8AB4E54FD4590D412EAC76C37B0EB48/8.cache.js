function Frame_1(){
  $setElement(this, $doc.createElement('iframe'));
  this.element['className'] = 'gwt-Frame';
}

defineSeed(468, 359, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), Frame_1);
function ApplicationStep5CompletedEvent_0(){
  $clinit_ApplicationStep5CompletedEvent();
}

defineSeed(783, 236, {}, ApplicationStep5CompletedEvent_0);
_.dispatch_0 = function dispatch_43(handler){
  dynamicCast(handler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler).onApplicationStep5Completed(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_44(){
  return TYPE_44;
}
;
function $formCompleted_1(chkConditionAgreement, txtDatePlace, txtFullName){
  if (!chkConditionAgreement) {
    alert_0(($clinit_NotificationTypes() , 'Missing input : ') + " Merci d'accepter les conditions financi\xE8res et g\xE9n\xE9rale.");
    return false;
  }
  if ($equals_5(txtDatePlace, '') || $equals_5(txtFullName, '')) {
    alert_0(($clinit_NotificationTypes() , 'Missing input : ') + ' Merci de remplir tous les champs.');
    return false;
  }
  return true;
}

function $nextStep_4(this$static, chkConditionAgreement, txtDatePlace, txtFullName){
  var rc, rf;
  if (!$formCompleted_1(chkConditionAgreement, txtDatePlace, txtFullName))
    return;
  rf = new ApplicationFormRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ApplicationFormRequestFactory_ApplicationFormRequestContextImpl_0(rf);
  $fire($saveStep5(rc, this$static.curUser.userEmail, this$static.curUser.applicationId, chkConditionAgreement, txtDatePlace, txtFullName), new ApplicationStep5Presenter$2_0(this$static));
}

function ApplicationStep5Presenter_0(eventBus, view, proxy, placeManager){
  $clinit_ApplicationStep5Presenter();
  Presenter_0.call(this, eventBus, view, proxy, ($clinit_MainPagePresenter() , TYPE_SetMainContent));
  this.placeManager = placeManager;
  dynamicCast(this.view, Q$ApplicationStep5Presenter$MyView).setUiHandlers(this);
}

defineSeed(1293, 717, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ApplicationItemSavedEvent$ApplicationItemSavedHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$ApplicationStep5Presenter, Q$ApplicationStep5UiHandlers]), ApplicationStep5Presenter_0);
_.onApplicationItemSaved = function onApplicationItemSaved_7(event_0){
  $onApplicationItemSaved_3(this);
}
;
_.onBind = function onBind_35(){
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_65(event_0){
  this.curUser = event_0.currentUser;
}
;
_.onReset = function onReset_34(){
  var rf, rc;
  rf = new ApplicationFormRequestFactoryImpl_0;
  $initialize_0(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new ApplicationFormRequestFactory_ApplicationFormRequestContextImpl_0(rf);
  $fire($loadAndReturn(rc, this.curUser.userEmail, this.curUser.applicationId), new ApplicationStep5Presenter$1_0(this));
}
;
_.curUser = null;
_.placeManager = null;
function $onSuccess_147(this$static, app){
  $showApplicationDetails_4(dynamicCast(this$static.this$0.view, Q$ApplicationStep5Presenter$MyView), app);
  $doFire(this$static.this$0.eventBus, new ApplicationItemSavedEvent_0, null);
}

function ApplicationStep5Presenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1294, 657, makeCastMap([Q$Receiver]), ApplicationStep5Presenter$1_0);
_.onFailure_0 = function onFailure_162(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_162(app){
  $onSuccess_147(this, dynamicCast(app, Q$ApplicationFormProxy));
}
;
_.this$0 = null;
function $onSuccess_148(this$static){
  $setOnLeaveConfirmation(this$static.this$0.placeManager, null);
  $doFire(this$static.this$0.eventBus, new ApplicationStep5CompletedEvent_0, null);
}

function ApplicationStep5Presenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1295, 657, makeCastMap([Q$Receiver]), ApplicationStep5Presenter$2_0);
_.onFailure_0 = function onFailure_163(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_163(saved){
  $onSuccess_148(this, dynamicCast(saved, Q$Boolean));
}
;
_.this$0 = null;
function $onCmdNextStepClick_4(this$static){
  $nextStep_4(dynamicCast(this$static.uiHandlers, Q$ApplicationStep5UiHandlers), $getValue_0(this$static.chkConditionAgreement).value_0, $getPropertyString(this$static.txtDatePlace.element, 'value'), $getPropertyString(this$static.txtFullName.element, 'value'));
}

function $showApplicationDetails_4(this$static, app){
  $setText_1(this$static.lblApplicationInfo, app.getEmailAddress() + ' - ' + app.getApplicationID());
  $setValue_1(this$static.chkConditionAgreement, ($clinit_Boolean() , app.isChkConditionAgreement()?TRUE_1:FALSE_1));
  $setText(this$static.txtDatePlace, app.getTxtDatePlace());
  $setText(this$static.txtFullName, app.getTxtFullName());
  $setText_1(this$static.lblStartDate, app.getStartDate());
  $setText_1(this$static.lblDuration, app.getWeekNumber());
}

function ApplicationStep5View_0(){
  $initWidget_0(this, $build_main_6(new ApplicationStep5View_BinderImpl$Widgets_0(this)));
}

defineSeed(1303, 722, makeCastMap([Q$IsWidget, Q$ApplicationStep5Presenter$MyView]), ApplicationStep5View_0);
_.setInSlot = function setInSlot_8(slot, content_0){
  slot === ($clinit_ApplicationStep5Presenter() , SLOT_ApplicationStep5)?this.main.setWidget(!content_0?null:!content_0.view?null:content_0.view.asWidget()):undefined;
}
;
_.chkConditionAgreement = null;
_.lblApplicationInfo = null;
_.lblDuration = null;
_.lblStartDate = null;
_.lblTotalAmount = null;
_.main = null;
_.tblItems = null;
_.txtDatePlace = null;
_.txtFullName = null;
function ApplicationStep5View_BinderImpl_0(){
}

defineSeed(1304, 1, {}, ApplicationStep5View_BinderImpl_0);
function $build_main_6(this$static){
  var main, f_VerticalPanel1, f_Label2, f_HorizontalPanel3, lblApplicationInfo, f_Label4, f_VerticalPanel5, f_VerticalPanel6, f_VerticalPanel7, f_Label8, f_Grid9, f_Label10, lblStartDate, f_Label11, lblDuration, tblItems, f_HorizontalPanel12, f_Label13, lblTotalAmount, f_Label14, chkConditionAgreement, f_Label15, f_Grid16, f_Label17, txtDatePlace, f_Label18, txtFullName, f_FlowPanel19, f_VerticalPanel20, f_HorizontalPanel21, cmdPreviousStep, sb, cmdNextStep, sb_0, f_Label22, f_Frame23;
  main = new SimplePanel_0;
  $add_4(main, (f_VerticalPanel1 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel1, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $add_11(f_VerticalPanel1, (f_Label2 = new Label_0 , f_Label2.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label2.directionalTextHelper, 'CONFIRMATION', false) , $updateHorizontalAlignment(f_Label2) , f_Label2)) , $add_11(f_VerticalPanel1, (f_HorizontalPanel3 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel3, (lblApplicationInfo = new Label_0 , $setTextOrHtml(lblApplicationInfo.directionalTextHelper, 'Application ID', false) , $updateHorizontalAlignment(lblApplicationInfo) , this$static.owner.lblApplicationInfo = lblApplicationInfo , lblApplicationInfo)) , $add_9(f_HorizontalPanel3, (f_Label4 = new Label_0 , $setAutoHorizontalAlignment(f_Label4, ALIGN_RIGHT) , $setTextOrHtml(f_Label4.directionalTextHelper, 'Step 5 of 5', false) , $updateHorizontalAlignment(f_Label4) , f_Label4)) , f_HorizontalPanel3.element.style['width'] = '100%' , f_HorizontalPanel3.table['cellSpacing'] = 5 , f_HorizontalPanel3)) , $add_11(f_VerticalPanel1, (f_VerticalPanel5 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel5, ALIGN_CENTER) , $add_11(f_VerticalPanel5, (f_VerticalPanel6 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel6, ALIGN_CENTER) , $add_11(f_VerticalPanel6, (f_VerticalPanel7 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel7, ALIGN_LEFT) , $add_11(f_VerticalPanel7, (f_Label8 = new Label_0 , f_Label8.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label8.directionalTextHelper, 'SELECTED ITEMS', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $add_11(f_VerticalPanel7, (f_Grid9 = new Grid_0 , $resizeColumns(f_Grid9, 2) , $resizeRows(f_Grid9, 2) , $setWidget_1(f_Grid9, 0, 0, (f_Label10 = new Label_0 , $setTextOrHtml(f_Label10.directionalTextHelper, 'Start date:', false) , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $setWidget_1(f_Grid9, 0, 1, (lblStartDate = new Label_0 , $setTextOrHtml(lblStartDate.directionalTextHelper, '.', false) , $updateHorizontalAlignment(lblStartDate) , this$static.owner.lblStartDate = lblStartDate , lblStartDate)) , $setWidget_1(f_Grid9, 1, 0, (f_Label11 = new Label_0 , $setTextOrHtml(f_Label11.directionalTextHelper, 'Duration (week):', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , $setWidget_1(f_Grid9, 1, 1, (lblDuration = new Label_0 , $setTextOrHtml(lblDuration.directionalTextHelper, '.', false) , $updateHorizontalAlignment(lblDuration) , this$static.owner.lblDuration = lblDuration , lblDuration)) , f_Grid9.element.style['width'] = '100%' , f_Grid9)) , $add_11(f_VerticalPanel7, (tblItems = new FlexTable_0 , tblItems.element.style['width'] = '100%' , this$static.owner.tblItems = tblItems , tblItems)) , $add_11(f_VerticalPanel7, (f_HorizontalPanel12 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel12, (f_Label13 = new Label_0 , f_Label13.element['className'] = 'lablel_TotalAmount' , $setTextOrHtml(f_Label13.directionalTextHelper, 'Total (CHF)', false) , $updateHorizontalAlignment(f_Label13) , f_Label13)) , $add_9(f_HorizontalPanel12, (lblTotalAmount = new Label_0 , lblTotalAmount.element['className'] = 'lablel_TotalAmount' , $setAutoHorizontalAlignment(lblTotalAmount, ALIGN_RIGHT) , $setTextOrHtml(lblTotalAmount.directionalTextHelper, '.', false) , $updateHorizontalAlignment(lblTotalAmount) , this$static.owner.lblTotalAmount = lblTotalAmount , lblTotalAmount)) , f_HorizontalPanel12.element.style['width'] = '100%' , f_HorizontalPanel12)) , f_VerticalPanel7.element.style['width'] = '80%' , f_VerticalPanel7.table['cellSpacing'] = 10 , f_VerticalPanel7)) , f_VerticalPanel6.element.style['width'] = '100%' , f_VerticalPanel6)) , $add_11(f_VerticalPanel5, (f_Label14 = new Label_0 , f_Label14.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label14.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label14) , f_Label14)) , $add_11(f_VerticalPanel5, (chkConditionAgreement = new CheckBox_0 , $setTextOrHtml(chkConditionAgreement.directionalTextHelper, 'I have read and understood the General and Financial Conditions, the Cancellation Policy and/or premature departure policy.', false) , chkConditionAgreement.element.style['width'] = '' , $addValueChangeHandler_0(chkConditionAgreement, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3) , this$static.owner.chkConditionAgreement = chkConditionAgreement , chkConditionAgreement)) , $add_11(f_VerticalPanel5, (f_Label15 = new Label_0 , f_Label15.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label15.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label15) , f_Label15)) , $add_11(f_VerticalPanel5, (f_Grid16 = new Grid_0 , $resizeColumns(f_Grid16, 4) , $resizeRows(f_Grid16, 1) , $setWidget_1(f_Grid16, 0, 0, (f_Label17 = new Label_0 , f_Label17.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label17.directionalTextHelper, 'Place / Date', false) , $updateHorizontalAlignment(f_Label17) , f_Label17)) , $setWidget_1(f_Grid16, 0, 1, (txtDatePlace = new TextBox_0 , txtDatePlace.element['className'] = 'sis_textbox' , $addValueChangeHandler_1(txtDatePlace, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5) , this$static.owner.txtDatePlace = txtDatePlace , txtDatePlace)) , $setWidget_1(f_Grid16, 0, 2, (f_Label18 = new Label_0 , f_Label18.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label18.directionalTextHelper, 'Surname / First name', false) , $updateHorizontalAlignment(f_Label18) , f_Label18)) , $setWidget_1(f_Grid16, 0, 3, (txtFullName = new TextBox_0 , txtFullName.element['className'] = 'sis_textbox' , $addValueChangeHandler_1(txtFullName, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4) , this$static.owner.txtFullName = txtFullName , txtFullName)) , f_Grid16.element.style['width'] = '80%' , f_Grid16)) , $add_11(f_VerticalPanel5, (f_FlowPanel19 = new FlowPanel_0 , $add_7(f_FlowPanel19, (f_VerticalPanel20 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel20, ALIGN_RIGHT) , $add_11(f_VerticalPanel20, (f_HorizontalPanel21 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel21, ALIGN_RIGHT) , $add_9(f_HorizontalPanel21, (cmdPreviousStep = new Button_0 , $setHTML(cmdPreviousStep, (sb = new StringBuilder_0 , $append_1(sb.data, 'Pr\xE9c\xE9dant') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data))).html) , $setInnerText(cmdPreviousStep.element, 'Previous') , $addDomHandler(cmdPreviousStep, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdPreviousStep)) , $add_9(f_HorizontalPanel21, (cmdNextStep = new Button_0 , $setHTML(cmdNextStep, (sb_0 = new StringBuilder_0 , $append_1(sb_0.data, 'Next Step') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb_0.data))).html) , $setInnerText(cmdNextStep.element, 'Save & Continue') , $addDomHandler(cmdNextStep, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, TYPE_0) , cmdNextStep)) , f_HorizontalPanel21.element.style['width'] = '35%' , f_HorizontalPanel21.table['cellSpacing'] = 10 , f_HorizontalPanel21)) , f_VerticalPanel20.element.style['width'] = '100%' , f_VerticalPanel20)) , f_FlowPanel19.element.style['width'] = '900px' , f_FlowPanel19)) , $add_11(f_VerticalPanel5, (f_Label22 = new Label_0 , f_Label22.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label22.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label22) , f_Label22)) , $add_11(f_VerticalPanel5, (f_Frame23 = new Frame_1 , f_Frame23.element.style['height'] = '300px' , f_Frame23.element.style['width'] = '98%' , f_Frame23.element.src = 'http://www.lemaniasummerschool.com/en/general-conditions' , f_Frame23)) , f_VerticalPanel5.element['className'] = 'subSection' , f_VerticalPanel5.element.style['width'] = '900px' , f_VerticalPanel5.table['cellSpacing'] = 5 , f_VerticalPanel5)) , f_VerticalPanel1.element.style['height'] = '' , f_VerticalPanel1.element.style['width'] = '100%' , f_VerticalPanel1));
  this$static.owner.main = main;
  return main;
}

function ApplicationStep5View_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ApplicationStep5View_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new ApplicationStep5View_BinderImpl$Widgets$2_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new ApplicationStep5View_BinderImpl$Widgets$3_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new ApplicationStep5View_BinderImpl$Widgets$4_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5 = new ApplicationStep5View_BinderImpl$Widgets$5_0(this);
  this.owner = owner;
}

defineSeed(1305, 1, {}, ApplicationStep5View_BinderImpl$Widgets_0);
_.owner = null;
function ApplicationStep5View_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1306, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep5View_BinderImpl$Widgets$1_0);
_.onClick = function onClick_35(event_0){
  $onCmdNextStepClick_4(this.this$1.owner);
}
;
_.this$1 = null;
function ApplicationStep5View_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1307, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep5View_BinderImpl$Widgets$2_0);
_.onClick = function onClick_36(event_0){
  $doFire(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep5UiHandlers), Q$ApplicationStep5Presenter).eventBus, new GotoPreviousPageEvent_0(($clinit_History() , impl_2?token_1 == null?'':token_1:'')), null);
}
;
_.this$1 = null;
function ApplicationStep5View_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1308, 1, makeCastMap([Q$ValueChangeHandler, Q$EventHandler]), ApplicationStep5View_BinderImpl$Widgets$3_0);
_.onValueChange = function onValueChange_43(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep5UiHandlers), Q$ApplicationStep5Presenter).placeManager, ($clinit_NotificationTypes() , 'UNSAVED MODIFICATIONS - Click on the button Save & Continue before leaving this page.'));
}
;
_.this$1 = null;
function ApplicationStep5View_BinderImpl$Widgets$4_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1309, 1, makeCastMap([Q$ValueChangeHandler, Q$EventHandler]), ApplicationStep5View_BinderImpl$Widgets$4_0);
_.onValueChange = function onValueChange_44(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep5UiHandlers), Q$ApplicationStep5Presenter).placeManager, ($clinit_NotificationTypes() , 'UNSAVED MODIFICATIONS - Click on the button Save & Continue before leaving this page.'));
}
;
_.this$1 = null;
function ApplicationStep5View_BinderImpl$Widgets$5_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1310, 1, makeCastMap([Q$ValueChangeHandler, Q$EventHandler]), ApplicationStep5View_BinderImpl$Widgets$5_0);
_.onValueChange = function onValueChange_45(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep5UiHandlers), Q$ApplicationStep5Presenter).placeManager, ($clinit_NotificationTypes() , 'UNSAVED MODIFICATIONS - Click on the button Save & Continue before leaving this page.'));
}
;
_.this$1 = null;
function $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep5$ApplicationStep5Presenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep5$ApplicationStep5Presenter$_annotation$$none$$) {
    result = new ApplicationStep5Presenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep5$ApplicationStep5View$_annotation$$none$$(this$static), $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep5$ApplicationStep5Presenter$MyProxy$_annotation$$none$$(this$static), $get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this$static.injector)));
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

defineSeed(1314, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_165(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep5$ApplicationStep5Presenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $getApplicationItems(this$static, applicationBody, app){
  var rc, rf;
  rf = new ApplicationItemRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ApplicationItemRequestFactory_ApplicationItemRequestContextImpl_0(rf);
  $fire($listAll(rc, this$static.currentUser.userEmail, this$static.currentUser.applicationId), new ContactPresenter$4_0(this$static, applicationBody, app));
}

function $onApplicationStep5Completed(this$static){
  var rc, rf;
  rf = new ApplicationFormRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ApplicationFormRequestFactory_ApplicationFormRequestContextImpl_0(rf);
  $fire($loadAndReturn(rc, this$static.currentUser.userEmail, this$static.currentUser.applicationId), new ContactPresenter$3_0(this$static));
}

function $onSuccess_152(this$static, app){
  $getApplicationItems(this$static.this$0, (app.getLastName_Student() , app.getFirstName_Student() , this$static.this$0.currentUser , message = 'LEMANIA SUMMER SCHOOL - APPLICATION COMPLETED\n\n' , message = message + 'Application ID:     ' + app.getApplicationID() + '\n' , message = message + 'Email:              ' + app.getEmailAddress() + '\n' , message = message + 'Start date:         ' + app.getStartDate() + '\n' , message = message + 'Duration:           ' + app.getWeekNumber() + '\n' , message = message + '\n------ Students ------\n' , message = message + 'Sex:             ' + app.getGenderCode() + '\n' , message = message + 'Last name:       ' + app.getLastName_Student() + '\n' , message = message + 'First name:      ' + app.getFirstName_Student() + '\n' , message = message + 'DOB:             ' + app.getDOB_Student() + '\n' , message = message + 'Nationality:     ' + app.getNationality_Student() + '\n' , message = message + 'Address:         ' + app.getAddress_Student() + '\n' , message = message + 'City:            ' + app.getCity_Student() + '\n' , message = message + 'Country:         ' + app.getCountry_Student() + '\n' , message = message + 'Email:           ' + app.getEmail_Student() + '\n' , message = message + 'Mobile:          ' + app.getMobilePhone_Student() + '\n' , message = message + '\n------ Parents ------\n' , message = message + 'Last name:       ' + app.getLastName_Parents() + '\n' , message = message + 'First name:      ' + app.getFirstName_Parents() + '\n' , message = message + 'Address:         ' + app.getAddress_Parents() + '\n' , message = message + 'City:            ' + app.getCity_Parents() + '\n' , message = message + 'Country:         ' + app.getCountry_Parents() + '\n' , message = message + 'Mobile - Mother: ' + app.getMobilePhone_Mother() + '\n' , message = message + 'Mobile - Father: ' + app.getMobilePhone_Father() + '\n' , message = message + 'Home phone:      ' + app.getHomePhone_Parents() + '\n' , message = message + 'Work phone:      ' + app.getWorkPhone_Parents() + '\n' , message = message + 'Fax:             ' + app.getFax_Parents() + '\n' , message = message + 'Email:           ' + app.getEmail_Parents() + '\n' , message = message + '\n------ Invoice details ------\n' , message = message + 'Company name:    ' + app.getCompanyName_Invoice() + '\n' , message = message + 'Full name:       ' + app.getFullName_Invoice() + '\n' , message = message + 'Address:         ' + app.getAddress_Invoice() + '\n' , message = message + 'City:            ' + app.getCity_Invoice() + '\n' , message = message + 'Country:         ' + app.getCountry_Invoice() + '\n' , message = message + '\n------ Pogramme details ------\n' , message = message + 'Language choice:        \t' + getItemDescription(app.getLanguageOption()) + '\n' , message = message + 'Continue afterward:        ' + app.isChkContinueAfter() + '\n' , message = message + 'Key deposit: 100 CHF:    ' + app.isOptKeyDepositCHF() + ' - 100 USD: ' + app.isOptKeyDepositUSD() + ' - 100 EUR: ' + app.isOptKeyDepositEuro() + '\n' , message = message + 'Limousine shuttle service: ' + app.getLstAirportDirection() + '\n' , message = message + 'Arrival information:       ' + app.getTxtAirlineName() + ' - ' + app.getTxtArriveVol() + ' - ' + app.getTxtArriveTime() + '\n' , message = message + 'Departure information:     ' + app.getTxtAirlineName() + ' - ' + app.getTxtDepartVol() + ' - ' + app.getTxtDepartTime() + '\n' , message = message + 'Diet:         \t\t\t\t' + app.getTxtHealthProblem() + '\n' , message = message + 'Allergy:         \t\t\t' + app.getTxtAllergy() + '\n' , message = message + 'Medical treatment:         ' + app.getTxtMedical() + '\n' , message + 'Other comment:        \t\t' + app.getTxtOther() + '\n'), app);
}

function ContactPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1373, 657, makeCastMap([Q$Receiver]), ContactPresenter$3_0);
_.onFailure_0 = function onFailure_195(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_195(app){
  $onSuccess_152(this, dynamicCast(app, Q$ApplicationFormProxy));
}
;
_.this$0 = null;
function $onSuccess_153(this$static, ais){
  var aip, aip$iterator, message, subject, total;
  message = this$static.val$applicationBody;
  total = 0;
  message = message + '\n------ Programme details ------\n\n';
  for (aip$iterator = ais.iterator(); aip$iterator.hasNext();) {
    aip = dynamicCast(aip$iterator.next_0(), Q$ApplicationItemProxy);
    message = message + aip.getItemDescription() + ' : ' + aip.getItemAmount() + ' CHF\n';
    total = total + aip.getItemAmount().value_0;
  }
  message = message + '\nTOTAL AMOUNT: ' + ($clinit_Double() , '' + total) + ' CHF\n';
  subject = this$static.val$app.getApplicationID() + ' - LEMANIA SUMMMER SCHOOL - APPLICATION COMPLETED - ' + this$static.val$app.getFirstName_Student() + ' ' + this$static.val$app.getLastName_Student();
  $sendMessageSummerTeam(this$static.this$0, message, subject);
  $sendMessage(this$static.this$0, this$static.val$app.getEmailAddress(), 'Dear Madam, Dear Sir,\n\nEcole L\xE9mania thanks you warmly for this enrollment.\n\nWe will send you by e-mail the invoice and confirmation letter.\n\nThe registration will be confirmed after receipt of payment.\n\nBank wire transfer:\n\nUBS SA, Lausanne \nAccount : 243 \u2013 285.400.01J \nSwift code: UBSWCHZH80A  \nClearing code and account number: 243 \u2013 285.400.01J \nIBAN: CH20 0024 3243 285 40001 J\n\n\n\nWe wish you a great L\xE9mania Summer Programme in the beautiful Swiss city of Lausanne.\n\nBest Regards\nEcole Lemania\nTel: +41 21 320 15 01\nE-mail: summercamp@lemania.ch\n\nNote: \nIf the desired room is no longer available, we will inform you of other availabilities by e-mail, and you will be reimbursed for the total amount if necessary.\n\nYou can always review and make modifications to your application by visiting our online application form at http://www.lemaniasummerschool.com/apply. Please type in your email address and click the Start button, you will be asked to fill in your application ID.\n\n\n' + message, subject);
}

function ContactPresenter$4_0(this$0, val$applicationBody, val$app){
  this.this$0 = this$0;
  this.val$applicationBody = val$applicationBody;
  this.val$app = val$app;
}

defineSeed(1374, 657, makeCastMap([Q$Receiver]), ContactPresenter$4_0);
_.onFailure_0 = function onFailure_196(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_196(ais){
  $onSuccess_153(this, dynamicCast(ais, Q$List));
}
;
_.this$0 = null;
_.val$app = null;
_.val$applicationBody = null;
defineSeed(1375, 749, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$HasHandlerContainer, Q$Place, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$NewApplicationNotificationEvent$NewApplicationNotificationHandler]));
_.onApplicationStep5Completed = function onApplicationStep5Completed_0(event_0){
  $getPresenter_0(this, new ContactPresenterMyProxyImpl$2_0(this.eventBus, event_0));
}
;
function $success_53(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new ContactPresenterMyProxyImpl$2$1_0(presenter, this$static.val$event));
}

function ContactPresenterMyProxyImpl$2_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(1378, 731, {}, ContactPresenterMyProxyImpl$2_0);
_.success = function success_55(presenter){
  $success_53(this, dynamicCast(presenter, Q$ContactPresenter));
}
;
_.val$event = null;
function ContactPresenterMyProxyImpl$2$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(1379, 1, {}, ContactPresenterMyProxyImpl$2$1_0);
_.execute_0 = function execute_81(){
  $onApplicationStep5Completed(this.val$presenter);
}
;
_.val$event = null;
_.val$presenter = null;
defineSeed(1391, 717, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationPaymentEvent$ApplicationPaymentHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$GotoPreviousPageEvent$GotoPreviousPageHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler, Q$MainPagePresenter, Q$MainPageUiHandler]));
_.onApplicationStep5Completed = function onApplicationStep5Completed_1(event_0){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationpayment', true);
}
;
defineSeed(1393, 742, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationPaymentEvent$ApplicationPaymentHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$GotoPreviousPageEvent$GotoPreviousPageHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler]));
_.onApplicationStep5Completed = function onApplicationStep5Completed_2(event_0){
  $getPresenter(this, new MainPagePresenterMyProxyImpl$11_0(this.eventBus));
}
;
function $success_57(){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new MainPagePresenterMyProxyImpl$11$1_0);
}

function MainPagePresenterMyProxyImpl$11_0($anonymous0){
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(1398, 731, {}, MainPagePresenterMyProxyImpl$11_0);
_.success = function success_59(presenter){
  $success_57(dynamicCast(presenter, Q$MainPagePresenter));
}
;
function MainPagePresenterMyProxyImpl$11$1_0(){
}

defineSeed(1399, 1, {}, MainPagePresenterMyProxyImpl$11$1_0);
_.execute_0 = function execute_85(){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationpayment', true);
}
;
function $saveStep5(this$static, emailAddress, appId, chkConditionAgreement, txtDatePlace, txtFullName){
  var x;
  x = new ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$13X_0(this$static, emailAddress, appId, chkConditionAgreement, txtDatePlace, txtFullName);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$13X_0(this$0, val$emailAddress, val$appId, val$chkConditionAgreement, val$txtDatePlace, val$txtFullName){
  this.val$emailAddress = val$emailAddress;
  this.val$appId = val$appId;
  this.val$chkConditionAgreement = val$chkConditionAgreement;
  this.val$txtDatePlace = val$txtDatePlace;
  this.val$txtFullName = val$txtFullName;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1822, 661, makeCastMap([Q$AbstractRequest]), ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$13X_0);
_.makeRequestData = function makeRequestData_2(){
  return new RequestData_0('2PgW6z70I3easZ1ZYesj5TeVoYA=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$emailAddress, this.val$appId, ($clinit_Boolean() , this.val$chkConditionAgreement?TRUE_1:FALSE_1), this.val$txtDatePlace, this.val$txtFullName]), this.propertyRefs, Ljava_lang_Boolean_2_classLit, null);
}
;
_.val$appId = null;
_.val$chkConditionAgreement = false;
_.val$emailAddress = null;
_.val$txtDatePlace = null;
_.val$txtFullName = null;
var Lcom_lemania_eprospects_client_presenter_applicationstep5_ApplicationStep5Presenter_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep5.', 'ApplicationStep5Presenter', 1293), Lcom_lemania_eprospects_client_presenter_applicationstep5_ApplicationStep5Presenter$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep5.', 'ApplicationStep5Presenter$1', 1294), Lcom_lemania_eprospects_client_presenter_applicationstep5_ApplicationStep5Presenter$2_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep5.', 'ApplicationStep5Presenter$2', 1295), Lcom_lemania_eprospects_client_presenter_contact_ContactPresenter$3_2_classLit = createForClass('com.lemania.eprospects.client.presenter.contact.', 'ContactPresenter$3', 1373), Lcom_lemania_eprospects_client_presenter_contact_ContactPresenter$4_2_classLit = createForClass('com.lemania.eprospects.client.presenter.contact.', 'ContactPresenter$4', 1374), Lcom_lemania_eprospects_client_event_ApplicationStep5CompletedEvent_2_classLit = createForClass('com.lemania.eprospects.client.event.', 'ApplicationStep5CompletedEvent', 783), Lcom_lemania_eprospects_client_presenter_contact_ContactPresenterMyProxyImpl$2_2_classLit = createForClass('com.lemania.eprospects.client.presenter.contact.', 'ContactPresenterMyProxyImpl$2', 1378), Lcom_lemania_eprospects_client_presenter_contact_ContactPresenterMyProxyImpl$2$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.contact.', 'ContactPresenterMyProxyImpl$2$1', 1379), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$11_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$11', 1398), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$11$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$11$1', 1399), Lcom_lemania_eprospects_client_presenter_applicationstep5_ApplicationStep5View_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep5.', 'ApplicationStep5View', 1303), Lcom_lemania_eprospects_client_presenter_applicationstep5_ApplicationStep5View_1BinderImpl_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep5.', 'ApplicationStep5View_BinderImpl', 1304), Lcom_lemania_eprospects_client_presenter_applicationstep5_ApplicationStep5View_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep5.', 'ApplicationStep5View_BinderImpl$Widgets', 1305), Lcom_lemania_eprospects_client_presenter_applicationstep5_ApplicationStep5View_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep5.', 'ApplicationStep5View_BinderImpl$Widgets$1', 1306), Lcom_lemania_eprospects_client_presenter_applicationstep5_ApplicationStep5View_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep5.', 'ApplicationStep5View_BinderImpl$Widgets$2', 1307), Lcom_lemania_eprospects_client_presenter_applicationstep5_ApplicationStep5View_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep5.', 'ApplicationStep5View_BinderImpl$Widgets$3', 1308), Lcom_lemania_eprospects_client_presenter_applicationstep5_ApplicationStep5View_1BinderImpl$Widgets$4_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep5.', 'ApplicationStep5View_BinderImpl$Widgets$4', 1309), Lcom_lemania_eprospects_client_presenter_applicationstep5_ApplicationStep5View_1BinderImpl$Widgets$5_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep5.', 'ApplicationStep5View_BinderImpl$Widgets$5', 1310), Lcom_google_gwt_user_client_ui_Frame_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Frame', 468), Lcom_lemania_eprospects_shared_applicationform_ApplicationFormRequestFactory_1ApplicationFormRequestContextImpl$13X_2_classLit = createForClass('com.lemania.eprospects.shared.applicationform.', 'ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$13X', 1822);
$entry(onLoad)(8);
