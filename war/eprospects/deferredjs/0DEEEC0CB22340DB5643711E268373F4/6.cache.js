function ApplicationStep3CompletedEvent_0(){
  $clinit_ApplicationStep3CompletedEvent();
}

defineSeed(775, 235, {}, ApplicationStep3CompletedEvent_0);
_.dispatch_0 = function dispatch_41(handler){
  dynamicCast(handler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler).onApplicationStep3Completed(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_42(){
  return TYPE_42;
}
;
function $editItemPrice_0(this$static, itemCode, selected){
  var price;
  price = 0;
  selected && (price = getItemPrice(itemCode).value_0);
  $doFire(this$static.eventBus, new ApplicationItemSelectedEvent_0(new ApplicationItem_0(itemCode, getItemDescription(itemCode), ($clinit_Double() , new Double_0(price)))), null);
}

function $editItemPrice_1(this$static, itemCode, selected, quantity){
  var price;
  price = 0;
  selected && (price = getItemPrice(itemCode).value_0 * quantity);
  $doFire(this$static.eventBus, new ApplicationItemSelectedEvent_0(new ApplicationItem_0(itemCode, getItemDescription(itemCode), ($clinit_Double() , new Double_0(price)))), null);
}

function $nextStep_2(this$static, lstAirportDirection, optPrivateCourse, txtPrivateCoursePeriod, chkGeneveOneway, chkZurichOneway, chkGeneveRoundtrip, chkZurichRoundtrip, txtAirlineName, txtArriveVol, txtArriveTime, txtDepartVol, txtDepartTime, chkVisaLetterRequest, optMoneyDepositYes, optMoneyDepositNo, txtMoneyDepositAmount, chkMealPackage, chkActivitiesPackage){
  var rc, rf;
  rf = new ApplicationFormRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ApplicationFormRequestFactory_ApplicationFormRequestContextImpl_0(rf);
  $fire($saveStep3(rc, this$static.curUser.userEmail, this$static.curUser.applicationId, lstAirportDirection, optPrivateCourse, txtPrivateCoursePeriod, chkGeneveOneway, chkZurichOneway, chkGeneveRoundtrip, chkZurichRoundtrip, txtAirlineName, txtArriveVol, txtArriveTime, txtDepartVol, txtDepartTime, chkVisaLetterRequest, optMoneyDepositYes, optMoneyDepositNo, txtMoneyDepositAmount, chkMealPackage, chkActivitiesPackage), new ApplicationStep3Presenter$2_0(this$static));
}

function ApplicationStep3Presenter_0(eventBus, view, proxy, placeManager){
  $clinit_ApplicationStep3Presenter();
  Presenter_0.call(this, eventBus, view, proxy, ($clinit_MainPagePresenter() , TYPE_SetMainContent));
  this.placeManager = placeManager;
  dynamicCast(this.view, Q$ApplicationStep3Presenter$MyView).setUiHandlers(this);
}

defineSeed(1221, 711, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ApplicationItemSavedEvent$ApplicationItemSavedHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$ApplicationStep3Presenter, Q$ApplicationStep3UiHandlers]), ApplicationStep3Presenter_0);
_.onApplicationItemSaved = function onApplicationItemSaved_3(event_0){
  $onApplicationItemSaved_1(this);
}
;
_.onBind = function onBind_33(){
  $initializeUi_0(dynamicCast(this.view, Q$ApplicationStep3Presenter$MyView));
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_61(event_0){
  this.curUser = event_0.currentUser;
}
;
_.onReset = function onReset_32(){
  var rf, rc;
  rf = new ApplicationFormRequestFactoryImpl_0;
  $initialize(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new ApplicationFormRequestFactory_ApplicationFormRequestContextImpl_0(rf);
  $fire($loadAndReturn(rc, this.curUser.userEmail, this.curUser.applicationId), new ApplicationStep3Presenter$1_0(this));
}
;
_.curUser = null;
_.placeManager = null;
function $onSuccess_141(this$static, app){
  $showApplicationDetails_2(dynamicCast(this$static.this$0.view, Q$ApplicationStep3Presenter$MyView), app);
  $doFire(this$static.this$0.eventBus, new ApplicationItemSavedEvent_0, null);
}

function ApplicationStep3Presenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1222, 651, makeCastMap([Q$Receiver]), ApplicationStep3Presenter$1_0);
_.onFailure_0 = function onFailure_154(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_154(app){
  $onSuccess_141(this, dynamicCast(app, Q$ApplicationFormProxy));
}
;
_.this$0 = null;
function $onSuccess_142(this$static){
  $setOnLeaveConfirmation(this$static.this$0.placeManager, null);
  $doFire(this$static.this$0.eventBus, new ApplicationStep3CompletedEvent_0, null);
}

function ApplicationStep3Presenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1223, 651, makeCastMap([Q$Receiver]), ApplicationStep3Presenter$2_0);
_.onFailure_0 = function onFailure_155(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_155(saved){
  $onSuccess_142(this, dynamicCast(saved, Q$Boolean));
}
;
_.this$0 = null;
function $initializeUi_0(this$static){
  $insertItem(this$static.lstAirportDirection, 'Veuillez choisir', '', -1);
  $insertItem(this$static.lstAirportDirection, ($clinit_SummerCampSettingValues() , 'From'), 'FROM', -1);
  $insertItem(this$static.lstAirportDirection, 'To', 'TO', -1);
}

function $onChkActivitiesPackageClick(this$static){
  $editItemPrice_1(dynamicCast(this$static.uiHandlers, Q$ApplicationStep3UiHandlers), ($clinit_SummerCampSettingValues() , 'CD013'), $getValue_0(this$static.chkActivitiesPackage).value_0, ($clinit_Double() , __parseAndValidateDouble($getTextOrHtml(this$static.lblDuration.directionalTextHelper))));
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this$static.uiHandlers, Q$ApplicationStep3UiHandlers), Q$ApplicationStep3Presenter).placeManager, ($clinit_NotificationTypes() , 'UNSAVED MODIFICATIONS - Click on the button Save & Continue before leaving this page.'));
}

function $onChkGeneveOnewayClick(this$static){
  $editItemPrice_0(dynamicCast(this$static.uiHandlers, Q$ApplicationStep3UiHandlers), ($clinit_SummerCampSettingValues() , 'CD006'), $getValue_0(this$static.chkGeneveOneway).value_0);
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this$static.uiHandlers, Q$ApplicationStep3UiHandlers), Q$ApplicationStep3Presenter).placeManager, ($clinit_NotificationTypes() , 'UNSAVED MODIFICATIONS - Click on the button Save & Continue before leaving this page.'));
}

function $onChkGeneveRoundtripClick(this$static){
  $editItemPrice_0(dynamicCast(this$static.uiHandlers, Q$ApplicationStep3UiHandlers), ($clinit_SummerCampSettingValues() , 'CD008'), $getValue_0(this$static.chkGeneveRoundtrip).value_0);
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this$static.uiHandlers, Q$ApplicationStep3UiHandlers), Q$ApplicationStep3Presenter).placeManager, ($clinit_NotificationTypes() , 'UNSAVED MODIFICATIONS - Click on the button Save & Continue before leaving this page.'));
}

function $onChkMealPackageClick(this$static){
  $editItemPrice_1(dynamicCast(this$static.uiHandlers, Q$ApplicationStep3UiHandlers), ($clinit_SummerCampSettingValues() , 'CD012'), $getValue_0(this$static.chkMealPackage).value_0, ($clinit_Double() , __parseAndValidateDouble($getTextOrHtml(this$static.lblDuration.directionalTextHelper))));
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this$static.uiHandlers, Q$ApplicationStep3UiHandlers), Q$ApplicationStep3Presenter).placeManager, ($clinit_NotificationTypes() , 'UNSAVED MODIFICATIONS - Click on the button Save & Continue before leaving this page.'));
}

function $onChkVisaLetterRequestClick(this$static){
  $editItemPrice_0(dynamicCast(this$static.uiHandlers, Q$ApplicationStep3UiHandlers), ($clinit_SummerCampSettingValues() , 'CD010'), $getValue_0(this$static.chkVisaLetterRequest).value_0);
}

function $onChkZurichOnewayClick(this$static){
  $editItemPrice_0(dynamicCast(this$static.uiHandlers, Q$ApplicationStep3UiHandlers), ($clinit_SummerCampSettingValues() , 'CD007'), $getValue_0(this$static.chkZurichOneway).value_0);
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this$static.uiHandlers, Q$ApplicationStep3UiHandlers), Q$ApplicationStep3Presenter).placeManager, ($clinit_NotificationTypes() , 'UNSAVED MODIFICATIONS - Click on the button Save & Continue before leaving this page.'));
}

function $onChkZurichRoundtripClick(this$static){
  $editItemPrice_0(dynamicCast(this$static.uiHandlers, Q$ApplicationStep3UiHandlers), ($clinit_SummerCampSettingValues() , 'CD009'), $getValue_0(this$static.chkZurichRoundtrip).value_0);
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this$static.uiHandlers, Q$ApplicationStep3UiHandlers), Q$ApplicationStep3Presenter).placeManager, ($clinit_NotificationTypes() , 'UNSAVED MODIFICATIONS - Click on the button Save & Continue before leaving this page.'));
}

function $onCmdNextStepClick_2(this$static){
  $nextStep_2(dynamicCast(this$static.uiHandlers, Q$ApplicationStep3UiHandlers), $getValue_2(this$static.lstAirportDirection, this$static.lstAirportDirection.element.selectedIndex), $getValue_0(this$static.optPrivateCourse).value_0, $getPropertyString(this$static.txtPrivateCoursePeriod.element, 'value'), $getValue_0(this$static.chkGeneveOneway).value_0, $getValue_0(this$static.chkZurichOneway).value_0, $getValue_0(this$static.chkGeneveRoundtrip).value_0, $getValue_0(this$static.chkZurichRoundtrip).value_0, $getPropertyString(this$static.txtAirlineName.element, 'value'), $getPropertyString(this$static.txtArriveVol.element, 'value'), $getPropertyString(this$static.txtArriveTime.element, 'value'), $getPropertyString(this$static.txtDepartVol.element, 'value'), $getPropertyString(this$static.txtDepartTime.element, 'value'), $getValue_0(this$static.chkVisaLetterRequest).value_0, $getValue_0(this$static.optMoneyDepositYes).value_0, $getValue_0(this$static.optMoneyDepositNo).value_0, $getPropertyString(this$static.txtMoneyDepositAmount.element, 'value'), $getValue_0(this$static.chkMealPackage).value_0, $getValue_0(this$static.chkActivitiesPackage).value_0);
}

function $onOptMoneyDepositNoClick(this$static){
  $setText(this$static.txtMoneyDepositAmount, '0');
  if (!$equals_5($getPropertyString(this$static.txtMoneyDepositAmount.element, 'value'), '') && $matches($getPropertyString(this$static.txtMoneyDepositAmount.element, 'value'), '-?\\d+(\\.\\d+)?')) {
    $editItemPrice_1(dynamicCast(this$static.uiHandlers, Q$ApplicationStep3UiHandlers), ($clinit_SummerCampSettingValues() , 'CD011'), $getValue_0(this$static.optMoneyDepositYes).value_0, ($clinit_Double() , __parseAndValidateDouble($getPropertyString(this$static.txtMoneyDepositAmount.element, 'value'))));
    $setOnLeaveConfirmation(dynamicCast(dynamicCast(this$static.uiHandlers, Q$ApplicationStep3UiHandlers), Q$ApplicationStep3Presenter).placeManager, ($clinit_NotificationTypes() , 'UNSAVED MODIFICATIONS - Click on the button Save & Continue before leaving this page.'));
  }
}

function $onOptMoneyDepositYesClick(this$static){
  if (!$equals_5($getPropertyString(this$static.txtMoneyDepositAmount.element, 'value'), '') && $matches($getPropertyString(this$static.txtMoneyDepositAmount.element, 'value'), '-?\\d+(\\.\\d+)?')) {
    $editItemPrice_1(dynamicCast(this$static.uiHandlers, Q$ApplicationStep3UiHandlers), ($clinit_SummerCampSettingValues() , 'CD011'), $getValue_0(this$static.optMoneyDepositYes).value_0, ($clinit_Double() , __parseAndValidateDouble($getPropertyString(this$static.txtMoneyDepositAmount.element, 'value'))));
    $setOnLeaveConfirmation(dynamicCast(dynamicCast(this$static.uiHandlers, Q$ApplicationStep3UiHandlers), Q$ApplicationStep3Presenter).placeManager, ($clinit_NotificationTypes() , 'UNSAVED MODIFICATIONS - Click on the button Save & Continue before leaving this page.'));
  }
}

function $onOptPrivateCourseClick(this$static){
  $onTxtPrivateCoursePeriodValueChange(this$static);
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this$static.uiHandlers, Q$ApplicationStep3UiHandlers), Q$ApplicationStep3Presenter).placeManager, ($clinit_NotificationTypes() , 'UNSAVED MODIFICATIONS - Click on the button Save & Continue before leaving this page.'));
}

function $onTxtMoneyDepositAmountValueChange(this$static){
  if (!$equals_5($getPropertyString(this$static.txtMoneyDepositAmount.element, 'value'), '') && $matches($getPropertyString(this$static.txtMoneyDepositAmount.element, 'value'), '-?\\d+(\\.\\d+)?')) {
    $editItemPrice_1(dynamicCast(this$static.uiHandlers, Q$ApplicationStep3UiHandlers), ($clinit_SummerCampSettingValues() , 'CD011'), $getValue_0(this$static.optMoneyDepositYes).value_0, ($clinit_Double() , __parseAndValidateDouble($getPropertyString(this$static.txtMoneyDepositAmount.element, 'value'))));
    $setOnLeaveConfirmation(dynamicCast(dynamicCast(this$static.uiHandlers, Q$ApplicationStep3UiHandlers), Q$ApplicationStep3Presenter).placeManager, ($clinit_NotificationTypes() , 'UNSAVED MODIFICATIONS - Click on the button Save & Continue before leaving this page.'));
  }
   else {
    alert_0(($clinit_NotificationTypes() , 'Missing input : ') + ' Please type in the amount in NUMBER ONLY.');
    $setText(this$static.txtMoneyDepositAmount, '');
  }
}

function $onTxtPrivateCoursePeriodValueChange(this$static){
  if (!$equals_5($getPropertyString(this$static.txtPrivateCoursePeriod.element, 'value'), '') && $matches($getPropertyString(this$static.txtPrivateCoursePeriod.element, 'value'), '-?\\d+(\\.\\d+)?')) {
    $editItemPrice_1(dynamicCast(this$static.uiHandlers, Q$ApplicationStep3UiHandlers), ($clinit_SummerCampSettingValues() , 'CD005'), $getValue_0(this$static.optPrivateCourse).value_0, ($clinit_Double() , __parseAndValidateDouble($getPropertyString(this$static.txtPrivateCoursePeriod.element, 'value'))) * __parseAndValidateDouble($getTextOrHtml(this$static.lblDuration.directionalTextHelper)));
    $setOnLeaveConfirmation(dynamicCast(dynamicCast(this$static.uiHandlers, Q$ApplicationStep3UiHandlers), Q$ApplicationStep3Presenter).placeManager, ($clinit_NotificationTypes() , 'UNSAVED MODIFICATIONS - Click on the button Save & Continue before leaving this page.'));
  }
}

function $showApplicationDetails_2(this$static, app){
  $setText_1(this$static.lblApplicationInfo, app.getEmailAddress() + ' - ' + app.getApplicationID());
  selectItemFromList(this$static.lstAirportDirection, app.getLstAirportDirection());
  $setValue_0(this$static.optPrivateCourse, ($clinit_Boolean() , app.getOptPrivateCourse()?TRUE_1:FALSE_1));
  $setText(this$static.txtPrivateCoursePeriod, app.getTxtPrivateCoursePeriod());
  $setValue_0(this$static.chkGeneveOneway, app.getChkGeneveOneway()?TRUE_1:FALSE_1);
  $setValue_0(this$static.chkZurichOneway, app.getChkZurichOneway()?TRUE_1:FALSE_1);
  $setValue_0(this$static.chkGeneveRoundtrip, app.getChkGeneveRoundtrip()?TRUE_1:FALSE_1);
  $setValue_0(this$static.chkZurichRoundtrip, app.getChkZurichRoundtrip()?TRUE_1:FALSE_1);
  $setText(this$static.txtAirlineName, app.getTxtAirlineName());
  $setText(this$static.txtArriveVol, app.getTxtArriveVol());
  $setText(this$static.txtArriveTime, app.getTxtArriveTime());
  $setText(this$static.txtDepartVol, app.getTxtDepartVol());
  $setText(this$static.txtDepartTime, app.getTxtDepartTime());
  $setValue_0(this$static.chkVisaLetterRequest, app.getChkVisaLetterRequest()?TRUE_1:FALSE_1);
  $setValue_0(this$static.optMoneyDepositYes, app.getOptMoneyDepositYes()?TRUE_1:FALSE_1);
  $setValue_0(this$static.optMoneyDepositNo, app.getOptMoneyDepositNo()?TRUE_1:FALSE_1);
  $setText(this$static.txtMoneyDepositAmount, app.getTxtMoneyDepositAmount());
  $setValue_0(this$static.chkMealPackage, app.getChkMealPackage()?TRUE_1:FALSE_1);
  $setValue_0(this$static.chkActivitiesPackage, app.getChkActivitiesPackage()?TRUE_1:FALSE_1);
  $setText_1(this$static.lblStartDate, app.getStartDate());
  $setText_1(this$static.lblDuration, app.getWeekNumber());
}

function ApplicationStep3View_0(){
  $initWidget_0(this, $build_main_4(new ApplicationStep3View_BinderImpl$Widgets_0(this)));
}

defineSeed(1231, 716, makeCastMap([Q$IsWidget, Q$ApplicationStep3Presenter$MyView]), ApplicationStep3View_0);
_.setInSlot = function setInSlot_6(slot, content_0){
  slot === ($clinit_ApplicationStep3Presenter() , SLOT_ApplicationStep3)?this.main.setWidget(!content_0?null:!content_0.view?null:content_0.view.asWidget()):undefined;
}
;
_.chkActivitiesPackage = null;
_.chkGeneveOneway = null;
_.chkGeneveRoundtrip = null;
_.chkMealPackage = null;
_.chkVisaLetterRequest = null;
_.chkZurichOneway = null;
_.chkZurichRoundtrip = null;
_.lblApplicationInfo = null;
_.lblDuration = null;
_.lblStartDate = null;
_.lblTotalAmount = null;
_.lstAirportDirection = null;
_.main = null;
_.optMoneyDepositNo = null;
_.optMoneyDepositYes = null;
_.optPrivateCourse = null;
_.tblItems = null;
_.txtAirlineName = null;
_.txtArriveTime = null;
_.txtArriveVol = null;
_.txtDepartTime = null;
_.txtDepartVol = null;
_.txtMoneyDepositAmount = null;
_.txtPrivateCoursePeriod = null;
function ApplicationStep3View_BinderImpl_0(){
}

defineSeed(1232, 1, {}, ApplicationStep3View_BinderImpl_0);
function $build_main_4(this$static){
  var main, f_VerticalPanel1, f_Label2, f_HorizontalPanel3, lblApplicationInfo, f_Label4, f_FlowPanel5, f_HorizontalPanel6, f_VerticalPanel50, f_VerticalPanel7, f_Label8, optPrivateCourse, f_HorizontalPanel9, f_Label10, txtPrivateCoursePeriod, f_Label11, f_Label12, f_HorizontalPanel13, f_Label14, lstAirportDirection, chkGeneveOneway, chkZurichOneway, f_HorizontalPanel15, f_Label16, chkGeneveRoundtrip, chkZurichRoundtrip, f_Label17, f_Label18, f_HorizontalPanel19, f_Label20, txtAirlineName, f_Grid21, f_Label22, f_Label23, txtArriveVol, f_Label24, txtArriveTime, f_Label25, f_Label26, txtDepartVol, f_Label27, txtDepartTime, f_Label28, f_Label29, f_Label30, chkVisaLetterRequest, f_Label31, f_Label32, f_Label33, f_Label34, f_Label35, f_HorizontalPanel36, optMoneyDepositYes, optMoneyDepositNo, f_Label37, txtMoneyDepositAmount, f_Label38, f_Label39, f_Label40, f_Label41, chkMealPackage, chkActivitiesPackage, f_Label42, f_VerticalPanel43, f_Label44, f_Grid45, f_Label46, lblStartDate, f_Label47, lblDuration, tblItems, f_HorizontalPanel48, f_Label49, lblTotalAmount, f_HorizontalPanel51, cmdPreviousStep, sb, cmdNextStep, sb_0;
  main = new SimplePanel_0;
  $add_4(main, (f_VerticalPanel1 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel1, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $add_11(f_VerticalPanel1, (f_Label2 = new Label_0 , f_Label2.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label2.directionalTextHelper, 'OPTIONAL SERVICES', false) , $updateHorizontalAlignment(f_Label2) , f_Label2)) , $add_11(f_VerticalPanel1, (f_HorizontalPanel3 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel3, (lblApplicationInfo = new Label_0 , $setTextOrHtml(lblApplicationInfo.directionalTextHelper, 'Application ID', false) , $updateHorizontalAlignment(lblApplicationInfo) , this$static.owner.lblApplicationInfo = lblApplicationInfo , lblApplicationInfo)) , $add_9(f_HorizontalPanel3, (f_Label4 = new Label_0 , $setAutoHorizontalAlignment(f_Label4, ALIGN_RIGHT) , $setTextOrHtml(f_Label4.directionalTextHelper, 'Step 3 of 5', false) , $updateHorizontalAlignment(f_Label4) , f_Label4)) , f_HorizontalPanel3.element.style['width'] = '100%' , f_HorizontalPanel3.table['cellSpacing'] = 5 , f_HorizontalPanel3)) , $add_11(f_VerticalPanel1, (f_FlowPanel5 = new FlowPanel_0 , $add_7(f_FlowPanel5, (f_HorizontalPanel6 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel6, (f_VerticalPanel7 = new VerticalPanel_0 , $add_11(f_VerticalPanel7, (f_Label8 = new Label_0 , f_Label8.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label8.directionalTextHelper, 'Private course', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $add_11(f_VerticalPanel7, (optPrivateCourse = new CheckBox_0 , optPrivateCourse.element['className'] = 'fieldTitle' , $setTextOrHtml(optPrivateCourse.directionalTextHelper, 'Private language tuition: 90 CHF per lesson', false) , $addDomHandler(optPrivateCourse, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames11, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , this$static.owner.optPrivateCourse = optPrivateCourse , optPrivateCourse)) , $add_11(f_VerticalPanel7, (f_HorizontalPanel9 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel9, (f_Label10 = new Label_0 , $setTextOrHtml(f_Label10.directionalTextHelper, 'If you would like private tuition, please specify the number of lessons desired per week:', false) , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $add_9(f_HorizontalPanel9, (txtPrivateCoursePeriod = new TextBox_0 , $addValueChangeHandler_1(txtPrivateCoursePeriod, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames10) , this$static.owner.txtPrivateCoursePeriod = txtPrivateCoursePeriod , txtPrivateCoursePeriod)) , f_HorizontalPanel9.element.style['width'] = '100%' , f_HorizontalPanel9)) , $add_11(f_VerticalPanel7, (f_Label11 = new Label_0 , f_Label11.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label11.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , $add_11(f_VerticalPanel7, (f_Label12 = new Label_0 , f_Label12.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label12.directionalTextHelper, 'Limousine shuttle service', false) , $updateHorizontalAlignment(f_Label12) , f_Label12)) , $add_11(f_VerticalPanel7, (f_HorizontalPanel13 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel13, (f_Label14 = new Label_0 , $setTextOrHtml(f_Label14.directionalTextHelper, 'One-way', false) , $updateHorizontalAlignment(f_Label14) , f_Label14)) , $add_9(f_HorizontalPanel13, (lstAirportDirection = new ListBox_0 , $addDomHandler(lstAirportDirection, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames15, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstAirportDirection = lstAirportDirection , lstAirportDirection)) , $add_9(f_HorizontalPanel13, (chkGeneveOneway = new CheckBox_0 , $setTextOrHtml(chkGeneveOneway.directionalTextHelper, 'Geneva airport, CHF 260.- / trajet', false) , $addDomHandler(chkGeneveOneway, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, TYPE_0) , this$static.owner.chkGeneveOneway = chkGeneveOneway , chkGeneveOneway)) , $add_9(f_HorizontalPanel13, (chkZurichOneway = new CheckBox_0 , $setTextOrHtml(chkZurichOneway.directionalTextHelper, 'Zurich airport, CHF 960.- / trajet', false) , $addDomHandler(chkZurichOneway, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, TYPE_0) , this$static.owner.chkZurichOneway = chkZurichOneway , chkZurichOneway)) , f_HorizontalPanel13.element.style['width'] = '100%' , f_HorizontalPanel13)) , $add_11(f_VerticalPanel7, (f_HorizontalPanel15 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel15, (f_Label16 = new Label_0 , $setTextOrHtml(f_Label16.directionalTextHelper, 'Round trip', false) , $updateHorizontalAlignment(f_Label16) , f_Label16)) , $add_9(f_HorizontalPanel15, (chkGeneveRoundtrip = new CheckBox_0 , $setTextOrHtml(chkGeneveRoundtrip.directionalTextHelper, 'Geneva airport, CHF 520.-', false) , $addDomHandler(chkGeneveRoundtrip, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5, TYPE_0) , this$static.owner.chkGeneveRoundtrip = chkGeneveRoundtrip , chkGeneveRoundtrip)) , $add_9(f_HorizontalPanel15, (chkZurichRoundtrip = new CheckBox_0 , $setTextOrHtml(chkZurichRoundtrip.directionalTextHelper, "Zurich airport, CHF 1'920.-", false) , $addDomHandler(chkZurichRoundtrip, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6, TYPE_0) , this$static.owner.chkZurichRoundtrip = chkZurichRoundtrip , chkZurichRoundtrip)) , f_HorizontalPanel15.element.style['width'] = '100%' , f_HorizontalPanel15)) , $add_11(f_VerticalPanel7, (f_Label17 = new Label_0 , f_Label17.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label17.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label17) , f_Label17)) , $add_11(f_VerticalPanel7, (f_Label18 = new Label_0 , $setTextOrHtml(f_Label18.directionalTextHelper, 'Flight information, if already known, for the airport shuttle service', false) , $updateHorizontalAlignment(f_Label18) , f_Label18)) , $add_11(f_VerticalPanel7, (f_HorizontalPanel19 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel19, (f_Label20 = new Label_0 , f_Label20.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label20.directionalTextHelper, 'Name of airline', false) , $updateHorizontalAlignment(f_Label20) , f_Label20)) , $add_9(f_HorizontalPanel19, (txtAirlineName = new TextBox_0 , txtAirlineName.element['className'] = 'sis_textbox' , $addValueChangeHandler_1(txtAirlineName, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames16) , this$static.owner.txtAirlineName = txtAirlineName , txtAirlineName)) , f_HorizontalPanel19.element.style['width'] = '100%' , f_HorizontalPanel19)) , $add_11(f_VerticalPanel7, (f_Grid21 = new Grid_0 , $resizeColumns(f_Grid21, 5) , $resizeRows(f_Grid21, 2) , $setWidget_1(f_Grid21, 0, 0, (f_Label22 = new Label_0 , $setTextOrHtml(f_Label22.directionalTextHelper, 'Arrival date', false) , $updateHorizontalAlignment(f_Label22) , f_Label22)) , $setWidget_1(f_Grid21, 0, 1, (f_Label23 = new Label_0 , $setTextOrHtml(f_Label23.directionalTextHelper, 'Flight number', false) , $updateHorizontalAlignment(f_Label23) , f_Label23)) , $setWidget_1(f_Grid21, 0, 2, (txtArriveVol = new TextBox_0 , $addValueChangeHandler_1(txtArriveVol, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames18) , this$static.owner.txtArriveVol = txtArriveVol , txtArriveVol)) , $setWidget_1(f_Grid21, 0, 3, (f_Label24 = new Label_0 , $setTextOrHtml(f_Label24.directionalTextHelper, 'Arrival time', false) , $updateHorizontalAlignment(f_Label24) , f_Label24)) , $setWidget_1(f_Grid21, 0, 4, (txtArriveTime = new TextBox_0 , $addValueChangeHandler_1(txtArriveTime, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames19) , this$static.owner.txtArriveTime = txtArriveTime , txtArriveTime)) , $setWidget_1(f_Grid21, 1, 0, (f_Label25 = new Label_0 , $setTextOrHtml(f_Label25.directionalTextHelper, 'Departure date', false) , $updateHorizontalAlignment(f_Label25) , f_Label25)) , $setWidget_1(f_Grid21, 1, 1, (f_Label26 = new Label_0 , $setTextOrHtml(f_Label26.directionalTextHelper, 'Flight number', false) , $updateHorizontalAlignment(f_Label26) , f_Label26)) , $setWidget_1(f_Grid21, 1, 2, (txtDepartVol = new TextBox_0 , $addValueChangeHandler_1(txtDepartVol, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames20) , this$static.owner.txtDepartVol = txtDepartVol , txtDepartVol)) , $setWidget_1(f_Grid21, 1, 3, (f_Label27 = new Label_0 , $setTextOrHtml(f_Label27.directionalTextHelper, 'Departure time', false) , $updateHorizontalAlignment(f_Label27) , f_Label27)) , $setWidget_1(f_Grid21, 1, 4, (txtDepartTime = new TextBox_0 , $addValueChangeHandler_1(txtDepartTime, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames17) , this$static.owner.txtDepartTime = txtDepartTime , txtDepartTime)) , f_Grid21.element.style['width'] = '100%' , f_Grid21)) , $add_11(f_VerticalPanel7, (f_Label28 = new Label_0 , f_Label28.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label28.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label28) , f_Label28)) , $add_11(f_VerticalPanel7, (f_Label29 = new Label_0 , f_Label29.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label29.directionalTextHelper, 'Letter for visa application', false) , $updateHorizontalAlignment(f_Label29) , f_Label29)) , $add_11(f_VerticalPanel7, (f_Label30 = new Label_0 , f_Label30.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label30.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label30) , f_Label30)) , $add_11(f_VerticalPanel7, (chkVisaLetterRequest = new CheckBox_0 , $setTextOrHtml(chkVisaLetterRequest.directionalTextHelper, 'Visa, invoice or confirmation letter sent by express mail: CHF 80.-', false) , $addDomHandler(chkVisaLetterRequest, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames7, TYPE_0) , this$static.owner.chkVisaLetterRequest = chkVisaLetterRequest , chkVisaLetterRequest)) , $add_11(f_VerticalPanel7, (f_Label31 = new Label_0 , f_Label31.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label31.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label31) , f_Label31)) , $add_11(f_VerticalPanel7, (f_Label32 = new Label_0 , $setTextOrHtml(f_Label32.directionalTextHelper, 'N.B. : A visa is required for foreign (non-EU) students. It takes at least 5-7 working days to send this visa from Switzerland to foreign countries by normal mail (free of charge). Please take account of the time required to obtain the visa. If possible, we must receive your enrolement application and payment at least 4 weeks before your arrival date for summer courses.', false) , $updateHorizontalAlignment(f_Label32) , f_Label32)) , $add_11(f_VerticalPanel7, (f_Label33 = new Label_0 , f_Label33.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label33.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label33) , f_Label33)) , $add_11(f_VerticalPanel7, (f_Label34 = new Label_0 , f_Label34.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label34.directionalTextHelper, 'For boarding student only: Pocket money held in safe-keeping', false) , $updateHorizontalAlignment(f_Label34) , f_Label34)) , $add_11(f_VerticalPanel7, (f_Label35 = new Label_0 , $setTextOrHtml(f_Label35.directionalTextHelper, 'Would you like to send additional pocket money for your child?', false) , $updateHorizontalAlignment(f_Label35) , f_Label35)) , $add_11(f_VerticalPanel7, (f_HorizontalPanel36 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel36, (optMoneyDepositYes = new RadioButton_0('new name') , $setTextOrHtml(optMoneyDepositYes.directionalTextHelper, 'Yes', false) , $addDomHandler(optMoneyDepositYes, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames13, TYPE_0) , this$static.owner.optMoneyDepositYes = optMoneyDepositYes , optMoneyDepositYes)) , $add_9(f_HorizontalPanel36, (optMoneyDepositNo = new RadioButton_0('new name') , $setTextOrHtml(optMoneyDepositNo.directionalTextHelper, 'No', false) , $addDomHandler(optMoneyDepositNo, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames14, TYPE_0) , this$static.owner.optMoneyDepositNo = optMoneyDepositNo , optMoneyDepositNo)) , $add_9(f_HorizontalPanel36, (f_Label37 = new Label_0 , $setTextOrHtml(f_Label37.directionalTextHelper, 'If yes, amount if CHF', false) , $updateHorizontalAlignment(f_Label37) , f_Label37)) , $add_9(f_HorizontalPanel36, (txtMoneyDepositAmount = new TextBox_0 , $addValueChangeHandler_1(txtMoneyDepositAmount, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames12) , this$static.owner.txtMoneyDepositAmount = txtMoneyDepositAmount , txtMoneyDepositAmount)) , f_HorizontalPanel36.element.style['width'] = '100%' , f_HorizontalPanel36)) , $add_11(f_VerticalPanel7, (f_Label38 = new Label_0 , $setTextOrHtml(f_Label38.directionalTextHelper, 'The school shall keep this money in a safe and give the required amount to the child if necessary.', false) , $updateHorizontalAlignment(f_Label38) , f_Label38)) , $add_11(f_VerticalPanel7, (f_Label39 = new Label_0 , f_Label39.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label39.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label39) , f_Label39)) , $add_11(f_VerticalPanel7, (f_Label40 = new Label_0 , f_Label40.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label40.directionalTextHelper, 'For external students only', false) , $updateHorizontalAlignment(f_Label40) , f_Label40)) , $add_11(f_VerticalPanel7, (f_Label41 = new Label_0 , f_Label41.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label41.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label41) , f_Label41)) , $add_11(f_VerticalPanel7, (chkMealPackage = new CheckBox_0 , $setTextOrHtml(chkMealPackage.directionalTextHelper, '5 lunches per week for external students: CHF 80.- per week', false) , $addDomHandler(chkMealPackage, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames8, TYPE_0) , this$static.owner.chkMealPackage = chkMealPackage , chkMealPackage)) , $add_11(f_VerticalPanel7, (chkActivitiesPackage = new CheckBox_0 , $setTextOrHtml(chkActivitiesPackage.directionalTextHelper, 'Activity pack for external students: 5-6 activities from Monday to Friday and/or Saturday afternoons: CHF 230.-', false) , chkActivitiesPackage.element.style['width'] = '' , $addDomHandler(chkActivitiesPackage, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames9, TYPE_0) , this$static.owner.chkActivitiesPackage = chkActivitiesPackage , chkActivitiesPackage)) , $add_11(f_VerticalPanel7, (f_Label42 = new Label_0 , $setTextOrHtml(f_Label42.directionalTextHelper, 'N.B. : All activities and meals are included for boarders.', false) , $updateHorizontalAlignment(f_Label42) , f_Label42)) , f_VerticalPanel7.element.style['width'] = '100%' , f_VerticalPanel7)) , $add_9(f_HorizontalPanel6, (f_VerticalPanel43 = new VerticalPanel_0 , $add_11(f_VerticalPanel43, (f_Label44 = new Label_0 , f_Label44.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label44.directionalTextHelper, 'Selected items', false) , $updateHorizontalAlignment(f_Label44) , f_Label44)) , $add_11(f_VerticalPanel43, (f_Grid45 = new Grid_0 , $resizeColumns(f_Grid45, 2) , $resizeRows(f_Grid45, 2) , $setWidget_1(f_Grid45, 0, 0, (f_Label46 = new Label_0 , $setTextOrHtml(f_Label46.directionalTextHelper, 'Start date:', false) , $updateHorizontalAlignment(f_Label46) , f_Label46)) , $setWidget_1(f_Grid45, 0, 1, (lblStartDate = new Label_0 , $setTextOrHtml(lblStartDate.directionalTextHelper, '.', false) , $updateHorizontalAlignment(lblStartDate) , this$static.owner.lblStartDate = lblStartDate , lblStartDate)) , $setWidget_1(f_Grid45, 1, 0, (f_Label47 = new Label_0 , $setTextOrHtml(f_Label47.directionalTextHelper, 'Duration (week):', false) , $updateHorizontalAlignment(f_Label47) , f_Label47)) , $setWidget_1(f_Grid45, 1, 1, (lblDuration = new Label_0 , $setTextOrHtml(lblDuration.directionalTextHelper, '.', false) , $updateHorizontalAlignment(lblDuration) , this$static.owner.lblDuration = lblDuration , lblDuration)) , f_Grid45.element.style['width'] = '100%' , f_Grid45)) , $add_11(f_VerticalPanel43, (tblItems = new FlexTable_0 , tblItems.element.style['width'] = '100%' , this$static.owner.tblItems = tblItems , tblItems)) , $add_11(f_VerticalPanel43, (f_HorizontalPanel48 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel48, (f_Label49 = new Label_0 , f_Label49.element['className'] = 'lablel_TotalAmount' , $setTextOrHtml(f_Label49.directionalTextHelper, 'Total (CHF)', false) , $updateHorizontalAlignment(f_Label49) , f_Label49)) , $add_9(f_HorizontalPanel48, (lblTotalAmount = new Label_0 , lblTotalAmount.element['className'] = 'lablel_TotalAmount' , $setAutoHorizontalAlignment(lblTotalAmount, ALIGN_RIGHT) , $setTextOrHtml(lblTotalAmount.directionalTextHelper, '.', false) , $updateHorizontalAlignment(lblTotalAmount) , this$static.owner.lblTotalAmount = lblTotalAmount , lblTotalAmount)) , f_HorizontalPanel48.element.style['width'] = '100%' , f_HorizontalPanel48)) , f_VerticalPanel43.element['className'] = 'subSection' , f_VerticalPanel43.element.style['width'] = '250px' , f_VerticalPanel43)) , f_HorizontalPanel6.element.style['width'] = '100%' , f_HorizontalPanel6.table['cellSpacing'] = 10 , f_HorizontalPanel6)) , $add_7(f_FlowPanel5, (f_VerticalPanel50 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel50, ALIGN_RIGHT) , $add_11(f_VerticalPanel50, (f_HorizontalPanel51 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel51, ALIGN_RIGHT) , $add_9(f_HorizontalPanel51, (cmdPreviousStep = new Button_0 , $setHTML(cmdPreviousStep, (sb = new StringBuilder_0 , sb.impl.string += 'Pr\xE9c\xE9dant' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string)).html) , $setInnerText(cmdPreviousStep.element, 'Previous') , $addDomHandler(cmdPreviousStep, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE_0) , cmdPreviousStep)) , $add_9(f_HorizontalPanel51, (cmdNextStep = new Button_0 , $setHTML(cmdNextStep, (sb_0 = new StringBuilder_0 , sb_0.impl.string += 'Next Step' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb_0.impl.string)).html) , $setInnerText(cmdNextStep.element, 'Save & Continue') , $addDomHandler(cmdNextStep, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, TYPE_0) , cmdNextStep)) , f_HorizontalPanel51.element.style['width'] = '35%' , f_HorizontalPanel51.table['cellSpacing'] = 10 , f_HorizontalPanel51)) , f_VerticalPanel50.element.style['width'] = '100%' , f_VerticalPanel50)) , f_FlowPanel5.element.style['width'] = '900px' , f_FlowPanel5)) , f_VerticalPanel1.element.style['height'] = '' , f_VerticalPanel1.element.style['width'] = '100%' , f_VerticalPanel1));
  this$static.owner.main = main;
  return main;
}

function ApplicationStep3View_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ApplicationStep3View_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new ApplicationStep3View_BinderImpl$Widgets$2_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new ApplicationStep3View_BinderImpl$Widgets$3_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new ApplicationStep3View_BinderImpl$Widgets$4_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5 = new ApplicationStep3View_BinderImpl$Widgets$5_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6 = new ApplicationStep3View_BinderImpl$Widgets$6_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames7 = new ApplicationStep3View_BinderImpl$Widgets$7_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames8 = new ApplicationStep3View_BinderImpl$Widgets$8_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames9 = new ApplicationStep3View_BinderImpl$Widgets$9_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames10 = new ApplicationStep3View_BinderImpl$Widgets$10_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames11 = new ApplicationStep3View_BinderImpl$Widgets$11_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames12 = new ApplicationStep3View_BinderImpl$Widgets$12_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames13 = new ApplicationStep3View_BinderImpl$Widgets$13_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames14 = new ApplicationStep3View_BinderImpl$Widgets$14_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames15 = new ApplicationStep3View_BinderImpl$Widgets$15_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames16 = new ApplicationStep3View_BinderImpl$Widgets$16_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames17 = new ApplicationStep3View_BinderImpl$Widgets$17_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames18 = new ApplicationStep3View_BinderImpl$Widgets$18_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames19 = new ApplicationStep3View_BinderImpl$Widgets$19_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames20 = new ApplicationStep3View_BinderImpl$Widgets$20_0(this);
  this.owner = owner;
}

defineSeed(1233, 1, {}, ApplicationStep3View_BinderImpl$Widgets_0);
_.owner = null;
function ApplicationStep3View_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1234, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep3View_BinderImpl$Widgets$1_0);
_.onClick = function onClick_21(event_0){
  $onCmdNextStepClick_2(this.this$1.owner);
}
;
_.this$1 = null;
function ApplicationStep3View_BinderImpl$Widgets$10_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1235, 1, makeCastMap([Q$ValueChangeHandler, Q$EventHandler]), ApplicationStep3View_BinderImpl$Widgets$10_0);
_.onValueChange = function onValueChange_26(event_0){
  $onTxtPrivateCoursePeriodValueChange(this.this$1.owner);
}
;
_.this$1 = null;
function ApplicationStep3View_BinderImpl$Widgets$11_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1236, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep3View_BinderImpl$Widgets$11_0);
_.onClick = function onClick_22(event_0){
  $onOptPrivateCourseClick(this.this$1.owner);
}
;
_.this$1 = null;
function ApplicationStep3View_BinderImpl$Widgets$12_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1237, 1, makeCastMap([Q$ValueChangeHandler, Q$EventHandler]), ApplicationStep3View_BinderImpl$Widgets$12_0);
_.onValueChange = function onValueChange_27(event_0){
  $onTxtMoneyDepositAmountValueChange(this.this$1.owner);
}
;
_.this$1 = null;
function ApplicationStep3View_BinderImpl$Widgets$13_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1238, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep3View_BinderImpl$Widgets$13_0);
_.onClick = function onClick_23(event_0){
  $onOptMoneyDepositYesClick(this.this$1.owner);
}
;
_.this$1 = null;
function ApplicationStep3View_BinderImpl$Widgets$14_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1239, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep3View_BinderImpl$Widgets$14_0);
_.onClick = function onClick_24(event_0){
  $onOptMoneyDepositNoClick(this.this$1.owner);
}
;
_.this$1 = null;
function ApplicationStep3View_BinderImpl$Widgets$15_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1240, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), ApplicationStep3View_BinderImpl$Widgets$15_0);
_.onChange = function onChange_4(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep3UiHandlers), Q$ApplicationStep3Presenter).placeManager, ($clinit_NotificationTypes() , 'UNSAVED MODIFICATIONS - Click on the button Save & Continue before leaving this page.'));
}
;
_.this$1 = null;
function ApplicationStep3View_BinderImpl$Widgets$16_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1241, 1, makeCastMap([Q$ValueChangeHandler, Q$EventHandler]), ApplicationStep3View_BinderImpl$Widgets$16_0);
_.onValueChange = function onValueChange_28(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep3UiHandlers), Q$ApplicationStep3Presenter).placeManager, ($clinit_NotificationTypes() , 'UNSAVED MODIFICATIONS - Click on the button Save & Continue before leaving this page.'));
}
;
_.this$1 = null;
function ApplicationStep3View_BinderImpl$Widgets$17_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1242, 1, makeCastMap([Q$ValueChangeHandler, Q$EventHandler]), ApplicationStep3View_BinderImpl$Widgets$17_0);
_.onValueChange = function onValueChange_29(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep3UiHandlers), Q$ApplicationStep3Presenter).placeManager, ($clinit_NotificationTypes() , 'UNSAVED MODIFICATIONS - Click on the button Save & Continue before leaving this page.'));
}
;
_.this$1 = null;
function ApplicationStep3View_BinderImpl$Widgets$18_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1243, 1, makeCastMap([Q$ValueChangeHandler, Q$EventHandler]), ApplicationStep3View_BinderImpl$Widgets$18_0);
_.onValueChange = function onValueChange_30(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep3UiHandlers), Q$ApplicationStep3Presenter).placeManager, ($clinit_NotificationTypes() , 'UNSAVED MODIFICATIONS - Click on the button Save & Continue before leaving this page.'));
}
;
_.this$1 = null;
function ApplicationStep3View_BinderImpl$Widgets$19_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1244, 1, makeCastMap([Q$ValueChangeHandler, Q$EventHandler]), ApplicationStep3View_BinderImpl$Widgets$19_0);
_.onValueChange = function onValueChange_31(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep3UiHandlers), Q$ApplicationStep3Presenter).placeManager, ($clinit_NotificationTypes() , 'UNSAVED MODIFICATIONS - Click on the button Save & Continue before leaving this page.'));
}
;
_.this$1 = null;
function ApplicationStep3View_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1245, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep3View_BinderImpl$Widgets$2_0);
_.onClick = function onClick_25(event_0){
  $doFire(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep3UiHandlers), Q$ApplicationStep3Presenter).eventBus, new GotoPreviousPageEvent_0(($clinit_History() , impl_2?token_1 == null?'':token_1:'')), null);
}
;
_.this$1 = null;
function ApplicationStep3View_BinderImpl$Widgets$20_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1246, 1, makeCastMap([Q$ValueChangeHandler, Q$EventHandler]), ApplicationStep3View_BinderImpl$Widgets$20_0);
_.onValueChange = function onValueChange_32(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep3UiHandlers), Q$ApplicationStep3Presenter).placeManager, ($clinit_NotificationTypes() , 'UNSAVED MODIFICATIONS - Click on the button Save & Continue before leaving this page.'));
}
;
_.this$1 = null;
function ApplicationStep3View_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1247, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep3View_BinderImpl$Widgets$3_0);
_.onClick = function onClick_26(event_0){
  $onChkGeneveOnewayClick(this.this$1.owner);
}
;
_.this$1 = null;
function ApplicationStep3View_BinderImpl$Widgets$4_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1248, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep3View_BinderImpl$Widgets$4_0);
_.onClick = function onClick_27(event_0){
  $onChkZurichOnewayClick(this.this$1.owner);
}
;
_.this$1 = null;
function ApplicationStep3View_BinderImpl$Widgets$5_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1249, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep3View_BinderImpl$Widgets$5_0);
_.onClick = function onClick_28(event_0){
  $onChkGeneveRoundtripClick(this.this$1.owner);
}
;
_.this$1 = null;
function ApplicationStep3View_BinderImpl$Widgets$6_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1250, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep3View_BinderImpl$Widgets$6_0);
_.onClick = function onClick_29(event_0){
  $onChkZurichRoundtripClick(this.this$1.owner);
}
;
_.this$1 = null;
function ApplicationStep3View_BinderImpl$Widgets$7_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1251, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep3View_BinderImpl$Widgets$7_0);
_.onClick = function onClick_30(event_0){
  $onChkVisaLetterRequestClick(this.this$1.owner);
}
;
_.this$1 = null;
function ApplicationStep3View_BinderImpl$Widgets$8_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1252, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep3View_BinderImpl$Widgets$8_0);
_.onClick = function onClick_31(event_0){
  $onChkMealPackageClick(this.this$1.owner);
}
;
_.this$1 = null;
function ApplicationStep3View_BinderImpl$Widgets$9_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1253, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep3View_BinderImpl$Widgets$9_0);
_.onClick = function onClick_32(event_0){
  $onChkActivitiesPackageClick(this.this$1.owner);
}
;
_.this$1 = null;
function $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep3$ApplicationStep3Presenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep3$ApplicationStep3Presenter$_annotation$$none$$) {
    result = new ApplicationStep3Presenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep3$ApplicationStep3View$_annotation$$none$$(this$static), $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep3$ApplicationStep3Presenter$MyProxy$_annotation$$none$$(this$static), $get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this$static.injector)));
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

defineSeed(1257, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_157(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep3$ApplicationStep3Presenter$_annotation$$none$$(this.this$1.this$0));
}
;
defineSeed(1385, 711, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationPaymentEvent$ApplicationPaymentHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$GotoPreviousPageEvent$GotoPreviousPageHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler, Q$MainPagePresenter, Q$MainPageUiHandler]));
_.onApplicationStep3Completed = function onApplicationStep3Completed(event_0){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationstep4', true);
}
;
defineSeed(1387, 736, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationPaymentEvent$ApplicationPaymentHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$GotoPreviousPageEvent$GotoPreviousPageHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler]));
_.onApplicationStep3Completed = function onApplicationStep3Completed_0(event_0){
  $getPresenter(this, new MainPagePresenterMyProxyImpl$13_0(this.eventBus));
}
;
function $success_59(){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new MainPagePresenterMyProxyImpl$13$1_0);
}

function MainPagePresenterMyProxyImpl$13_0($anonymous0){
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(1396, 725, {}, MainPagePresenterMyProxyImpl$13_0);
_.success = function success_61(presenter){
  $success_59(dynamicCast(presenter, Q$MainPagePresenter));
}
;
function MainPagePresenterMyProxyImpl$13$1_0(){
}

defineSeed(1397, 1, {}, MainPagePresenterMyProxyImpl$13$1_0);
_.execute_1 = function execute_88(){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationstep4', true);
}
;
function $saveStep3(this$static, emailAddress, appId, lstAirportDirection, optPrivateCourse, txtPrivateCoursePeriod, chkGeneveOneway, chkZurichOneway, chkGeneveRoundtrip, chkZurichRoundtrip, txtAirlineName, txtArriveVol, txtArriveTime, txtDepartVol, txtDepartTime, chkVisaLetterRequest, optMoneyDepositYes, optMoneyDepositNo, txtMoneyDepositAmount, chkMealPackage, chkActivitiesPackage){
  var x;
  x = new ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$11X_0(this$static, emailAddress, appId, lstAirportDirection, optPrivateCourse, txtPrivateCoursePeriod, chkGeneveOneway, chkZurichOneway, chkGeneveRoundtrip, chkZurichRoundtrip, txtAirlineName, txtArriveVol, txtArriveTime, txtDepartVol, txtDepartTime, chkVisaLetterRequest, optMoneyDepositYes, optMoneyDepositNo, txtMoneyDepositAmount, chkMealPackage, chkActivitiesPackage);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$11X_0(this$0, val$emailAddress, val$appId, val$lstAirportDirection, val$optPrivateCourse, val$txtPrivateCoursePeriod, val$chkGeneveOneway, val$chkZurichOneway, val$chkGeneveRoundtrip, val$chkZurichRoundtrip, val$txtAirlineName, val$txtArriveVol, val$txtArriveTime, val$txtDepartVol, val$txtDepartTime, val$chkVisaLetterRequest, val$optMoneyDepositYes, val$optMoneyDepositNo, val$txtMoneyDepositAmount, val$chkMealPackage, val$chkActivitiesPackage){
  this.val$emailAddress = val$emailAddress;
  this.val$appId = val$appId;
  this.val$lstAirportDirection = val$lstAirportDirection;
  this.val$optPrivateCourse = val$optPrivateCourse;
  this.val$txtPrivateCoursePeriod = val$txtPrivateCoursePeriod;
  this.val$chkGeneveOneway = val$chkGeneveOneway;
  this.val$chkZurichOneway = val$chkZurichOneway;
  this.val$chkGeneveRoundtrip = val$chkGeneveRoundtrip;
  this.val$chkZurichRoundtrip = val$chkZurichRoundtrip;
  this.val$txtAirlineName = val$txtAirlineName;
  this.val$txtArriveVol = val$txtArriveVol;
  this.val$txtArriveTime = val$txtArriveTime;
  this.val$txtDepartVol = val$txtDepartVol;
  this.val$txtDepartTime = val$txtDepartTime;
  this.val$chkVisaLetterRequest = val$chkVisaLetterRequest;
  this.val$optMoneyDepositYes = val$optMoneyDepositYes;
  this.val$optMoneyDepositNo = val$optMoneyDepositNo;
  this.val$txtMoneyDepositAmount = val$txtMoneyDepositAmount;
  this.val$chkMealPackage = val$chkMealPackage;
  this.val$chkActivitiesPackage = val$chkActivitiesPackage;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1814, 655, makeCastMap([Q$AbstractRequest]), ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$11X_0);
_.makeRequestData = function makeRequestData_0(){
  return new RequestData_0('G5H_M69fAO4HRkGvaW6FJO6iEUw=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$emailAddress, this.val$appId, this.val$lstAirportDirection, ($clinit_Boolean() , this.val$optPrivateCourse?TRUE_1:FALSE_1), this.val$txtPrivateCoursePeriod, this.val$chkGeneveOneway?TRUE_1:FALSE_1, this.val$chkZurichOneway?TRUE_1:FALSE_1, this.val$chkGeneveRoundtrip?TRUE_1:FALSE_1, this.val$chkZurichRoundtrip?TRUE_1:FALSE_1, this.val$txtAirlineName, this.val$txtArriveVol, this.val$txtArriveTime, this.val$txtDepartVol, this.val$txtDepartTime, this.val$chkVisaLetterRequest?TRUE_1:FALSE_1, this.val$optMoneyDepositYes?TRUE_1:FALSE_1, this.val$optMoneyDepositNo?TRUE_1:FALSE_1, this.val$txtMoneyDepositAmount, this.val$chkMealPackage?TRUE_1:FALSE_1, this.val$chkActivitiesPackage?TRUE_1:FALSE_1]), this.propertyRefs, Ljava_lang_Boolean_2_classLit, null);
}
;
_.val$appId = null;
_.val$chkActivitiesPackage = false;
_.val$chkGeneveOneway = false;
_.val$chkGeneveRoundtrip = false;
_.val$chkMealPackage = false;
_.val$chkVisaLetterRequest = false;
_.val$chkZurichOneway = false;
_.val$chkZurichRoundtrip = false;
_.val$emailAddress = null;
_.val$lstAirportDirection = null;
_.val$optMoneyDepositNo = false;
_.val$optMoneyDepositYes = false;
_.val$optPrivateCourse = false;
_.val$txtAirlineName = null;
_.val$txtArriveTime = null;
_.val$txtArriveVol = null;
_.val$txtDepartTime = null;
_.val$txtDepartVol = null;
_.val$txtMoneyDepositAmount = null;
_.val$txtPrivateCoursePeriod = null;
var Lcom_lemania_eprospects_client_presenter_applicationstep3_ApplicationStep3Presenter_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep3.', 'ApplicationStep3Presenter', 1221), Lcom_lemania_eprospects_client_presenter_applicationstep3_ApplicationStep3Presenter$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep3.', 'ApplicationStep3Presenter$1', 1222), Lcom_lemania_eprospects_client_presenter_applicationstep3_ApplicationStep3Presenter$2_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep3.', 'ApplicationStep3Presenter$2', 1223), Lcom_lemania_eprospects_client_event_ApplicationStep3CompletedEvent_2_classLit = createForClass('com.lemania.eprospects.client.event.', 'ApplicationStep3CompletedEvent', 775), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$13_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$13', 1396), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$13$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$13$1', 1397), Lcom_lemania_eprospects_client_presenter_applicationstep3_ApplicationStep3View_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep3.', 'ApplicationStep3View', 1231), Lcom_lemania_eprospects_client_presenter_applicationstep3_ApplicationStep3View_1BinderImpl_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep3.', 'ApplicationStep3View_BinderImpl', 1232), Lcom_lemania_eprospects_client_presenter_applicationstep3_ApplicationStep3View_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep3.', 'ApplicationStep3View_BinderImpl$Widgets', 1233), Lcom_lemania_eprospects_client_presenter_applicationstep3_ApplicationStep3View_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep3.', 'ApplicationStep3View_BinderImpl$Widgets$1', 1234), Lcom_lemania_eprospects_client_presenter_applicationstep3_ApplicationStep3View_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep3.', 'ApplicationStep3View_BinderImpl$Widgets$2', 1245), Lcom_lemania_eprospects_client_presenter_applicationstep3_ApplicationStep3View_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep3.', 'ApplicationStep3View_BinderImpl$Widgets$3', 1247), Lcom_lemania_eprospects_client_presenter_applicationstep3_ApplicationStep3View_1BinderImpl$Widgets$4_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep3.', 'ApplicationStep3View_BinderImpl$Widgets$4', 1248), Lcom_lemania_eprospects_client_presenter_applicationstep3_ApplicationStep3View_1BinderImpl$Widgets$5_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep3.', 'ApplicationStep3View_BinderImpl$Widgets$5', 1249), Lcom_lemania_eprospects_client_presenter_applicationstep3_ApplicationStep3View_1BinderImpl$Widgets$6_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep3.', 'ApplicationStep3View_BinderImpl$Widgets$6', 1250), Lcom_lemania_eprospects_client_presenter_applicationstep3_ApplicationStep3View_1BinderImpl$Widgets$7_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep3.', 'ApplicationStep3View_BinderImpl$Widgets$7', 1251), Lcom_lemania_eprospects_client_presenter_applicationstep3_ApplicationStep3View_1BinderImpl$Widgets$8_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep3.', 'ApplicationStep3View_BinderImpl$Widgets$8', 1252), Lcom_lemania_eprospects_client_presenter_applicationstep3_ApplicationStep3View_1BinderImpl$Widgets$9_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep3.', 'ApplicationStep3View_BinderImpl$Widgets$9', 1253), Lcom_lemania_eprospects_client_presenter_applicationstep3_ApplicationStep3View_1BinderImpl$Widgets$10_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep3.', 'ApplicationStep3View_BinderImpl$Widgets$10', 1235), Lcom_lemania_eprospects_client_presenter_applicationstep3_ApplicationStep3View_1BinderImpl$Widgets$11_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep3.', 'ApplicationStep3View_BinderImpl$Widgets$11', 1236), Lcom_lemania_eprospects_client_presenter_applicationstep3_ApplicationStep3View_1BinderImpl$Widgets$12_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep3.', 'ApplicationStep3View_BinderImpl$Widgets$12', 1237), Lcom_lemania_eprospects_client_presenter_applicationstep3_ApplicationStep3View_1BinderImpl$Widgets$13_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep3.', 'ApplicationStep3View_BinderImpl$Widgets$13', 1238), Lcom_lemania_eprospects_client_presenter_applicationstep3_ApplicationStep3View_1BinderImpl$Widgets$14_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep3.', 'ApplicationStep3View_BinderImpl$Widgets$14', 1239), Lcom_lemania_eprospects_client_presenter_applicationstep3_ApplicationStep3View_1BinderImpl$Widgets$15_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep3.', 'ApplicationStep3View_BinderImpl$Widgets$15', 1240), Lcom_lemania_eprospects_client_presenter_applicationstep3_ApplicationStep3View_1BinderImpl$Widgets$16_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep3.', 'ApplicationStep3View_BinderImpl$Widgets$16', 1241), Lcom_lemania_eprospects_client_presenter_applicationstep3_ApplicationStep3View_1BinderImpl$Widgets$17_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep3.', 'ApplicationStep3View_BinderImpl$Widgets$17', 1242), Lcom_lemania_eprospects_client_presenter_applicationstep3_ApplicationStep3View_1BinderImpl$Widgets$18_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep3.', 'ApplicationStep3View_BinderImpl$Widgets$18', 1243), Lcom_lemania_eprospects_client_presenter_applicationstep3_ApplicationStep3View_1BinderImpl$Widgets$19_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep3.', 'ApplicationStep3View_BinderImpl$Widgets$19', 1244), Lcom_lemania_eprospects_client_presenter_applicationstep3_ApplicationStep3View_1BinderImpl$Widgets$20_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep3.', 'ApplicationStep3View_BinderImpl$Widgets$20', 1246), Lcom_lemania_eprospects_shared_applicationform_ApplicationFormRequestFactory_1ApplicationFormRequestContextImpl$11X_2_classLit = createForClass('com.lemania.eprospects.shared.applicationform.', 'ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$11X', 1814);
$entry(onLoad)(6);