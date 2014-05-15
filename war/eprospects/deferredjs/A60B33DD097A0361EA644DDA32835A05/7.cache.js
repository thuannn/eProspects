function ApplicationStep4CompletedEvent_0(){
  $clinit_ApplicationStep4CompletedEvent();
}

defineSeed(778, 234, {}, ApplicationStep4CompletedEvent_0);
_.dispatch_0 = function dispatch_42(handler){
  dynamicCast(handler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler).onApplicationStep4Completed(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_43(){
  return TYPE_43;
}
;
function $nextStep_3(this$static, optHealthProblemYes, optHealProblemNo, txtHealthProblem, optAllergyYes, optAllergyNo, txtAllergy, optMedicalYes, optMedicalNo, txtMedical, txtOther){
  var rc, rf;
  rf = new ApplicationFormRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ApplicationFormRequestFactory_ApplicationFormRequestContextImpl_0(rf);
  $fire($saveStep4(rc, this$static.curUser.userEmail, this$static.curUser.applicationId, optHealthProblemYes, optHealProblemNo, txtHealthProblem, optAllergyYes, optAllergyNo, txtAllergy, optMedicalYes, optMedicalNo, txtMedical, txtOther), new ApplicationStep4Presenter$2_0(this$static));
}

function ApplicationStep4Presenter_0(eventBus, view, proxy, placeManager){
  $clinit_ApplicationStep4Presenter();
  Presenter_0.call(this, eventBus, view, proxy, ($clinit_MainPagePresenter() , TYPE_SetMainContent));
  this.placeManager = placeManager;
  dynamicCast(this.view, Q$ApplicationStep4Presenter$MyView).setUiHandlers(this);
}

defineSeed(1260, 713, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ApplicationItemSavedEvent$ApplicationItemSavedHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$ApplicationStep4Presenter, Q$ApplicationStep4UiHandlers]), ApplicationStep4Presenter_0);
_.onApplicationItemSaved = function onApplicationItemSaved_5(event_0){
  $onApplicationItemSaved_2(this);
}
;
_.onBind = function onBind_34(){
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_63(event_0){
  this.curUser = event_0.currentUser;
}
;
_.onReset = function onReset_33(){
  var rf, rc;
  rf = new ApplicationFormRequestFactoryImpl_0;
  $initialize_0(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new ApplicationFormRequestFactory_ApplicationFormRequestContextImpl_0(rf);
  $fire($loadAndReturn(rc, this.curUser.userEmail, this.curUser.applicationId), new ApplicationStep4Presenter$1_0(this));
}
;
_.curUser = null;
_.placeManager = null;
function $onSuccess_144(this$static, app){
  $showApplicationDetails_3(dynamicCast(this$static.this$0.view, Q$ApplicationStep4Presenter$MyView), app);
  $doFire(this$static.this$0.eventBus, new ApplicationItemSavedEvent_0, null);
}

function ApplicationStep4Presenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1261, 653, makeCastMap([Q$Receiver]), ApplicationStep4Presenter$1_0);
_.onFailure_0 = function onFailure_158(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_158(app){
  $onSuccess_144(this, dynamicCast(app, Q$ApplicationFormProxy));
}
;
_.this$0 = null;
function $onSuccess_145(this$static){
  $setOnLeaveConfirmation(this$static.this$0.placeManager, null);
  $doFire(this$static.this$0.eventBus, new ApplicationStep4CompletedEvent_0, null);
}

function ApplicationStep4Presenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1262, 653, makeCastMap([Q$Receiver]), ApplicationStep4Presenter$2_0);
_.onFailure_0 = function onFailure_159(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_159(saved){
  $onSuccess_145(this, dynamicCast(saved, Q$Boolean));
}
;
_.this$0 = null;
function $onCmdNextStepClick_3(this$static){
  $nextStep_3(dynamicCast(this$static.uiHandlers, Q$ApplicationStep4UiHandlers), $getValue_0(this$static.optHealthProblemYes).value_0, $getValue_0(this$static.optHealProblemNo).value_0, $getPropertyString(this$static.txtHealthProblem.element, 'value'), $getValue_0(this$static.optAllergyYes).value_0, $getValue_0(this$static.optAllergyNo).value_0, $getPropertyString(this$static.txtAllergy.element, 'value'), $getValue_0(this$static.optMedicalYes).value_0, $getValue_0(this$static.optMedicalNo).value_0, $getPropertyString(this$static.txtMedical.element, 'value'), $getPropertyString(this$static.txtOther.element, 'value'));
}

function $showApplicationDetails_3(this$static, app){
  $setText_1(this$static.lblApplicationInfo, app.getEmailAddress() + ' - ' + app.getApplicationID());
  $setValue_1(this$static.optHealthProblemYes, ($clinit_Boolean() , app.isOptHealthProblemYes()?TRUE_1:FALSE_1));
  $setValue_1(this$static.optHealProblemNo, app.isOptHealProblemNo()?TRUE_1:FALSE_1);
  $setText(this$static.txtHealthProblem, app.getTxtHealthProblem());
  $setValue_1(this$static.optAllergyYes, app.isOptAllergyYes()?TRUE_1:FALSE_1);
  $setValue_1(this$static.optAllergyNo, app.isOptAllergyNo()?TRUE_1:FALSE_1);
  $setText(this$static.txtAllergy, app.getTxtAllergy());
  $setValue_1(this$static.optMedicalYes, app.isOptMedicalYes()?TRUE_1:FALSE_1);
  $setValue_1(this$static.optMedicalNo, app.isOptMedicalNo()?TRUE_1:FALSE_1);
  $setText(this$static.txtMedical, app.getTxtMedical());
  $setText(this$static.txtOther, app.getTxtOther());
}

function ApplicationStep4View_0(){
  $initWidget_0(this, $build_main_5(new ApplicationStep4View_BinderImpl$Widgets_0(this)));
}

defineSeed(1270, 718, makeCastMap([Q$IsWidget, Q$ApplicationStep4Presenter$MyView]), ApplicationStep4View_0);
_.setInSlot = function setInSlot_7(slot, content_0){
  slot === ($clinit_ApplicationStep4Presenter() , SLOT_ApplicationStep4)?this.main.setWidget(!content_0?null:!content_0.view?null:content_0.view.asWidget()):undefined;
}
;
_.lblApplicationInfo = null;
_.lblTotalAmount = null;
_.main = null;
_.optAllergyNo = null;
_.optAllergyYes = null;
_.optHealProblemNo = null;
_.optHealthProblemYes = null;
_.optMedicalNo = null;
_.optMedicalYes = null;
_.tblItems = null;
_.txtAllergy = null;
_.txtHealthProblem = null;
_.txtMedical = null;
_.txtOther = null;
function ApplicationStep4View_BinderImpl_0(){
}

defineSeed(1271, 1, {}, ApplicationStep4View_BinderImpl_0);
function $build_main_5(this$static){
  var main, f_VerticalPanel1, f_Label2, f_HorizontalPanel3, lblApplicationInfo, f_Label4, f_FlowPanel5, f_HorizontalPanel6, f_VerticalPanel27, f_VerticalPanel7, f_Label8, f_Label9, f_HorizontalPanel10, optHealthProblemYes, optHealProblemNo, f_Label11, txtHealthProblem, f_Label12, f_Label13, f_HorizontalPanel14, optAllergyYes, optAllergyNo, f_Label15, txtAllergy, f_Label16, f_Label17, f_HorizontalPanel18, optMedicalYes, optMedicalNo, f_Label19, txtMedical, f_Label20, f_Label21, f_HorizontalPanel22, txtOther, f_VerticalPanel23, f_Label24, tblItems, f_HorizontalPanel25, f_Label26, lblTotalAmount, f_HorizontalPanel28, cmdPreviousStep, sb, cmdNextStep, sb_0;
  main = new SimplePanel_0;
  $add_4(main, (f_VerticalPanel1 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel1, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $add_11(f_VerticalPanel1, (f_Label2 = new Label_0 , f_Label2.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label2.directionalTextHelper, 'MEDICAL ET REGIME ALIMENTAIRE', false) , $updateHorizontalAlignment(f_Label2) , f_Label2)) , $add_11(f_VerticalPanel1, (f_HorizontalPanel3 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel3, (lblApplicationInfo = new Label_0 , $setTextOrHtml(lblApplicationInfo.directionalTextHelper, "L'inscription ID :", false) , $updateHorizontalAlignment(lblApplicationInfo) , this$static.owner.lblApplicationInfo = lblApplicationInfo , lblApplicationInfo)) , $add_9(f_HorizontalPanel3, (f_Label4 = new Label_0 , $setAutoHorizontalAlignment(f_Label4, ALIGN_RIGHT) , $setTextOrHtml(f_Label4.directionalTextHelper, 'Step 4 of 5', false) , $updateHorizontalAlignment(f_Label4) , f_Label4)) , f_HorizontalPanel3.element.style['width'] = '100%' , f_HorizontalPanel3.table['cellSpacing'] = 5 , f_HorizontalPanel3)) , $add_11(f_VerticalPanel1, (f_FlowPanel5 = new FlowPanel_0 , $add_7(f_FlowPanel5, (f_HorizontalPanel6 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel6, (f_VerticalPanel7 = new VerticalPanel_0 , $add_11(f_VerticalPanel7, (f_Label8 = new Label_0 , $setTextOrHtml(f_Label8.directionalTextHelper, "L'\xE9l\xE8ve a-t-il/elle un probl\xE8me de sant\xE9, n\xE9cessite-t-il un traitement ou un r\xE9gime sp\xE9cifique ou a-t-il handicap sp\xE9cifique dont nous devrons avoir connaissance ?", false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $add_11(f_VerticalPanel7, (f_Label9 = new Label_0 , f_Label9.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label9.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $add_11(f_VerticalPanel7, (f_HorizontalPanel10 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel10, (optHealthProblemYes = new RadioButton_0('HealthProblem') , $setTextOrHtml(optHealthProblemYes.directionalTextHelper, 'Oui', false) , $addValueChangeHandler_0(optHealthProblemYes, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames12) , this$static.owner.optHealthProblemYes = optHealthProblemYes , optHealthProblemYes)) , $add_9(f_HorizontalPanel10, (optHealProblemNo = new RadioButton_0('HealthProblem') , $setTextOrHtml(optHealProblemNo.directionalTextHelper, 'Non', false) , $addValueChangeHandler_0(optHealProblemNo, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames9) , this$static.owner.optHealProblemNo = optHealProblemNo , optHealProblemNo)) , $add_9(f_HorizontalPanel10, (f_Label11 = new Label_0 , f_Label11.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label11.directionalTextHelper, 'Si oui, veuillez pr\xE9ciser', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , $add_9(f_HorizontalPanel10, (txtHealthProblem = new TextArea_1 , txtHealthProblem.element['className'] = 'sis-TextArea' , $addValueChangeHandler_1(txtHealthProblem, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5) , this$static.owner.txtHealthProblem = txtHealthProblem , txtHealthProblem)) , f_HorizontalPanel10.element.style['width'] = '100%' , f_HorizontalPanel10)) , $add_11(f_VerticalPanel7, (f_Label12 = new Label_0 , f_Label12.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label12.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label12) , f_Label12)) , $add_11(f_VerticalPanel7, (f_Label13 = new Label_0 , $setTextOrHtml(f_Label13.directionalTextHelper, "L'\xE9l\xE8ve est-il sujet \xE0 des allergies ?", false) , $updateHorizontalAlignment(f_Label13) , f_Label13)) , $add_11(f_VerticalPanel7, (f_HorizontalPanel14 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel14, (optAllergyYes = new RadioButton_0('Allergy') , $setTextOrHtml(optAllergyYes.directionalTextHelper, 'Oui', false) , $addValueChangeHandler_0(optAllergyYes, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames11) , this$static.owner.optAllergyYes = optAllergyYes , optAllergyYes)) , $add_9(f_HorizontalPanel14, (optAllergyNo = new RadioButton_0('Allergy') , $setTextOrHtml(optAllergyNo.directionalTextHelper, 'Non', false) , $addValueChangeHandler_0(optAllergyNo, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames10) , this$static.owner.optAllergyNo = optAllergyNo , optAllergyNo)) , $add_9(f_HorizontalPanel14, (f_Label15 = new Label_0 , f_Label15.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label15.directionalTextHelper, 'Si oui, lesquelles', false) , $updateHorizontalAlignment(f_Label15) , f_Label15)) , $add_9(f_HorizontalPanel14, (txtAllergy = new TextArea_1 , txtAllergy.element['className'] = 'sis-TextArea' , $addValueChangeHandler_1(txtAllergy, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3) , this$static.owner.txtAllergy = txtAllergy , txtAllergy)) , f_HorizontalPanel14.element.style['width'] = '100%' , f_HorizontalPanel14)) , $add_11(f_VerticalPanel7, (f_Label16 = new Label_0 , f_Label16.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label16.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label16) , f_Label16)) , $add_11(f_VerticalPanel7, (f_Label17 = new Label_0 , $setTextOrHtml(f_Label17.directionalTextHelper, "L'\xE9l\xE8ve doit-il prendre un traitement/m\xE9dicament particulier ?", false) , $updateHorizontalAlignment(f_Label17) , f_Label17)) , $add_11(f_VerticalPanel7, (f_HorizontalPanel18 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel18, (optMedicalYes = new RadioButton_0('Medical') , $setTextOrHtml(optMedicalYes.directionalTextHelper, 'Oui', false) , $addValueChangeHandler_0(optMedicalYes, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames8) , this$static.owner.optMedicalYes = optMedicalYes , optMedicalYes)) , $add_9(f_HorizontalPanel18, (optMedicalNo = new RadioButton_0('Medical') , $setTextOrHtml(optMedicalNo.directionalTextHelper, 'Non', false) , $addValueChangeHandler_0(optMedicalNo, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames7) , this$static.owner.optMedicalNo = optMedicalNo , optMedicalNo)) , $add_9(f_HorizontalPanel18, (f_Label19 = new Label_0 , f_Label19.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label19.directionalTextHelper, 'Si oui, lequel (posologie)', false) , $updateHorizontalAlignment(f_Label19) , f_Label19)) , $add_9(f_HorizontalPanel18, (txtMedical = new TextArea_1 , txtMedical.element['className'] = 'sis-TextArea' , $addValueChangeHandler_1(txtMedical, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4) , this$static.owner.txtMedical = txtMedical , txtMedical)) , f_HorizontalPanel18.element.style['width'] = '100%' , f_HorizontalPanel18)) , $add_11(f_VerticalPanel7, (f_Label20 = new Label_0 , f_Label20.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label20.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label20) , f_Label20)) , $add_11(f_VerticalPanel7, (f_Label21 = new Label_0 , $setTextOrHtml(f_Label21.directionalTextHelper, 'Autres', false) , $updateHorizontalAlignment(f_Label21) , f_Label21)) , $add_11(f_VerticalPanel7, (f_HorizontalPanel22 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel22, (txtOther = new TextArea_1 , txtOther.element['className'] = 'sis-TextArea' , txtOther.element.style['height'] = '200px' , txtOther.element.style['width'] = '600px' , $addValueChangeHandler_1(txtOther, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6) , this$static.owner.txtOther = txtOther , txtOther)) , f_HorizontalPanel22.element.style['width'] = '100%' , f_HorizontalPanel22)) , f_VerticalPanel7.element.style['width'] = '100%' , f_VerticalPanel7)) , $add_9(f_HorizontalPanel6, (f_VerticalPanel23 = new VerticalPanel_0 , $add_11(f_VerticalPanel23, (f_Label24 = new Label_0 , f_Label24.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label24.directionalTextHelper, 'ELEMENTS CHOISIS', false) , $updateHorizontalAlignment(f_Label24) , f_Label24)) , $add_11(f_VerticalPanel23, (tblItems = new FlexTable_0 , tblItems.element.style['width'] = '100%' , this$static.owner.tblItems = tblItems , tblItems)) , $add_11(f_VerticalPanel23, (f_HorizontalPanel25 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel25, (f_Label26 = new Label_0 , f_Label26.element['className'] = 'lablel_TotalAmount' , $setTextOrHtml(f_Label26.directionalTextHelper, 'Total (CHF)', false) , $updateHorizontalAlignment(f_Label26) , f_Label26)) , $add_9(f_HorizontalPanel25, (lblTotalAmount = new Label_0 , lblTotalAmount.element['className'] = 'lablel_TotalAmount' , $setAutoHorizontalAlignment(lblTotalAmount, ALIGN_RIGHT) , $setTextOrHtml(lblTotalAmount.directionalTextHelper, '.', false) , $updateHorizontalAlignment(lblTotalAmount) , this$static.owner.lblTotalAmount = lblTotalAmount , lblTotalAmount)) , f_HorizontalPanel25.element.style['width'] = '100%' , f_HorizontalPanel25)) , f_VerticalPanel23.element['className'] = 'subSection' , f_VerticalPanel23.element.style['width'] = '250px' , f_VerticalPanel23)) , f_HorizontalPanel6.element.style['width'] = '100%' , f_HorizontalPanel6.table['cellSpacing'] = 10 , f_HorizontalPanel6)) , $add_7(f_FlowPanel5, (f_VerticalPanel27 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel27, ALIGN_RIGHT) , $add_11(f_VerticalPanel27, (f_HorizontalPanel28 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel28, ALIGN_RIGHT) , $add_9(f_HorizontalPanel28, (cmdPreviousStep = new Button_0 , $setHTML(cmdPreviousStep, (sb = new StringBuilder_0 , $append_1(sb.data, 'Pr\xE9c\xE9dant') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data))).html) , $addDomHandler(cmdPreviousStep, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdPreviousStep)) , $add_9(f_HorizontalPanel28, (cmdNextStep = new Button_0 , $setHTML(cmdNextStep, (sb_0 = new StringBuilder_0 , $append_1(sb_0.data, 'Next Step') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb_0.data))).html) , $setInnerText(cmdNextStep.element, 'Enregistrer & Suivant >>') , $addDomHandler(cmdNextStep, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, TYPE_0) , cmdNextStep)) , f_HorizontalPanel28.element.style['width'] = '35%' , f_HorizontalPanel28.table['cellSpacing'] = 10 , f_HorizontalPanel28)) , f_VerticalPanel27.element.style['width'] = '100%' , f_VerticalPanel27)) , f_FlowPanel5.element.style['width'] = '900px' , f_FlowPanel5)) , f_VerticalPanel1.element.style['height'] = '' , f_VerticalPanel1.element.style['width'] = '100%' , f_VerticalPanel1));
  this$static.owner.main = main;
  return main;
}

function ApplicationStep4View_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ApplicationStep4View_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new ApplicationStep4View_BinderImpl$Widgets$2_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new ApplicationStep4View_BinderImpl$Widgets$3_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new ApplicationStep4View_BinderImpl$Widgets$4_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5 = new ApplicationStep4View_BinderImpl$Widgets$5_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6 = new ApplicationStep4View_BinderImpl$Widgets$6_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames7 = new ApplicationStep4View_BinderImpl$Widgets$7_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames8 = new ApplicationStep4View_BinderImpl$Widgets$8_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames9 = new ApplicationStep4View_BinderImpl$Widgets$9_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames10 = new ApplicationStep4View_BinderImpl$Widgets$10_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames11 = new ApplicationStep4View_BinderImpl$Widgets$11_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames12 = new ApplicationStep4View_BinderImpl$Widgets$12_0(this);
  this.owner = owner;
}

defineSeed(1272, 1, {}, ApplicationStep4View_BinderImpl$Widgets_0);
_.owner = null;
function ApplicationStep4View_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1273, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep4View_BinderImpl$Widgets$1_0);
_.onClick = function onClick_33(event_0){
  $onCmdNextStepClick_3(this.this$1.owner);
}
;
_.this$1 = null;
function ApplicationStep4View_BinderImpl$Widgets$10_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1274, 1, makeCastMap([Q$ValueChangeHandler, Q$EventHandler]), ApplicationStep4View_BinderImpl$Widgets$10_0);
_.onValueChange = function onValueChange_33(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep4UiHandlers), Q$ApplicationStep4Presenter).placeManager, ($clinit_NotificationTypes() , 'Merci de cliquer sur Enregistrer pour sauvegarder les informations modifi\xE9es.'));
}
;
_.this$1 = null;
function ApplicationStep4View_BinderImpl$Widgets$11_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1275, 1, makeCastMap([Q$ValueChangeHandler, Q$EventHandler]), ApplicationStep4View_BinderImpl$Widgets$11_0);
_.onValueChange = function onValueChange_34(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep4UiHandlers), Q$ApplicationStep4Presenter).placeManager, ($clinit_NotificationTypes() , 'Merci de cliquer sur Enregistrer pour sauvegarder les informations modifi\xE9es.'));
}
;
_.this$1 = null;
function ApplicationStep4View_BinderImpl$Widgets$12_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1276, 1, makeCastMap([Q$ValueChangeHandler, Q$EventHandler]), ApplicationStep4View_BinderImpl$Widgets$12_0);
_.onValueChange = function onValueChange_35(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep4UiHandlers), Q$ApplicationStep4Presenter).placeManager, ($clinit_NotificationTypes() , 'Merci de cliquer sur Enregistrer pour sauvegarder les informations modifi\xE9es.'));
}
;
_.this$1 = null;
function ApplicationStep4View_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1277, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep4View_BinderImpl$Widgets$2_0);
_.onClick = function onClick_34(event_0){
  $doFire(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep4UiHandlers), Q$ApplicationStep4Presenter).eventBus, new GotoPreviousPageEvent_0(($clinit_History() , impl_2?token_1 == null?'':token_1:'')), null);
}
;
_.this$1 = null;
function ApplicationStep4View_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1278, 1, makeCastMap([Q$ValueChangeHandler, Q$EventHandler]), ApplicationStep4View_BinderImpl$Widgets$3_0);
_.onValueChange = function onValueChange_36(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep4UiHandlers), Q$ApplicationStep4Presenter).placeManager, ($clinit_NotificationTypes() , 'Merci de cliquer sur Enregistrer pour sauvegarder les informations modifi\xE9es.'));
}
;
_.this$1 = null;
function ApplicationStep4View_BinderImpl$Widgets$4_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1279, 1, makeCastMap([Q$ValueChangeHandler, Q$EventHandler]), ApplicationStep4View_BinderImpl$Widgets$4_0);
_.onValueChange = function onValueChange_37(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep4UiHandlers), Q$ApplicationStep4Presenter).placeManager, ($clinit_NotificationTypes() , 'Merci de cliquer sur Enregistrer pour sauvegarder les informations modifi\xE9es.'));
}
;
_.this$1 = null;
function ApplicationStep4View_BinderImpl$Widgets$5_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1280, 1, makeCastMap([Q$ValueChangeHandler, Q$EventHandler]), ApplicationStep4View_BinderImpl$Widgets$5_0);
_.onValueChange = function onValueChange_38(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep4UiHandlers), Q$ApplicationStep4Presenter).placeManager, ($clinit_NotificationTypes() , 'Merci de cliquer sur Enregistrer pour sauvegarder les informations modifi\xE9es.'));
}
;
_.this$1 = null;
function ApplicationStep4View_BinderImpl$Widgets$6_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1281, 1, makeCastMap([Q$ValueChangeHandler, Q$EventHandler]), ApplicationStep4View_BinderImpl$Widgets$6_0);
_.onValueChange = function onValueChange_39(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep4UiHandlers), Q$ApplicationStep4Presenter).placeManager, ($clinit_NotificationTypes() , 'Merci de cliquer sur Enregistrer pour sauvegarder les informations modifi\xE9es.'));
}
;
_.this$1 = null;
function ApplicationStep4View_BinderImpl$Widgets$7_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1282, 1, makeCastMap([Q$ValueChangeHandler, Q$EventHandler]), ApplicationStep4View_BinderImpl$Widgets$7_0);
_.onValueChange = function onValueChange_40(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep4UiHandlers), Q$ApplicationStep4Presenter).placeManager, ($clinit_NotificationTypes() , 'Merci de cliquer sur Enregistrer pour sauvegarder les informations modifi\xE9es.'));
}
;
_.this$1 = null;
function ApplicationStep4View_BinderImpl$Widgets$8_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1283, 1, makeCastMap([Q$ValueChangeHandler, Q$EventHandler]), ApplicationStep4View_BinderImpl$Widgets$8_0);
_.onValueChange = function onValueChange_41(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep4UiHandlers), Q$ApplicationStep4Presenter).placeManager, ($clinit_NotificationTypes() , 'Merci de cliquer sur Enregistrer pour sauvegarder les informations modifi\xE9es.'));
}
;
_.this$1 = null;
function ApplicationStep4View_BinderImpl$Widgets$9_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1284, 1, makeCastMap([Q$ValueChangeHandler, Q$EventHandler]), ApplicationStep4View_BinderImpl$Widgets$9_0);
_.onValueChange = function onValueChange_42(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep4UiHandlers), Q$ApplicationStep4Presenter).placeManager, ($clinit_NotificationTypes() , 'Merci de cliquer sur Enregistrer pour sauvegarder les informations modifi\xE9es.'));
}
;
_.this$1 = null;
function $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep4$ApplicationStep4Presenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep4$ApplicationStep4Presenter$_annotation$$none$$) {
    result = new ApplicationStep4Presenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep4$ApplicationStep4View$_annotation$$none$$(this$static), $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep4$ApplicationStep4Presenter$MyProxy$_annotation$$none$$(this$static), $get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this$static.injector)));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep4$ApplicationStep4Presenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep4$ApplicationStep4Presenter$_annotation$$none$$;
}

function $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep4$ApplicationStep4View$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep4$ApplicationStep4View$_annotation$$none$$) {
    result = new ApplicationStep4View_0(new ApplicationStep4View_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep4$ApplicationStep4View$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep4$ApplicationStep4View$_annotation$$none$$;
}

defineSeed(1288, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_161(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep4$ApplicationStep4Presenter$_annotation$$none$$(this.this$1.this$0));
}
;
defineSeed(1387, 713, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationPaymentEvent$ApplicationPaymentHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$GotoPreviousPageEvent$GotoPreviousPageHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler, Q$MainPagePresenter, Q$MainPageUiHandler]));
_.onApplicationStep4Completed = function onApplicationStep4Completed(event_0){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationstep5', true);
}
;
defineSeed(1389, 738, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationPaymentEvent$ApplicationPaymentHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$GotoPreviousPageEvent$GotoPreviousPageHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler]));
_.onApplicationStep4Completed = function onApplicationStep4Completed_0(event_0){
  $getPresenter(this, new MainPagePresenterMyProxyImpl$12_0(this.eventBus));
}
;
function $success_58(){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new MainPagePresenterMyProxyImpl$12$1_0);
}

function MainPagePresenterMyProxyImpl$12_0($anonymous0){
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(1396, 727, {}, MainPagePresenterMyProxyImpl$12_0);
_.success = function success_60(presenter){
  $success_58(dynamicCast(presenter, Q$MainPagePresenter));
}
;
function MainPagePresenterMyProxyImpl$12$1_0(){
}

defineSeed(1397, 1, {}, MainPagePresenterMyProxyImpl$12$1_0);
_.execute_0 = function execute_87(){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationstep5', true);
}
;
function $saveStep4(this$static, emailAddress, appId, optHealthProblemYes, optHealProblemNo, txtHealthProblem, optAllergyYes, optAllergyNo, txtAllergy, optMedicalYes, optMedicalNo, txtMedical, txtOther){
  var x;
  x = new ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$12X_0(this$static, emailAddress, appId, optHealthProblemYes, optHealProblemNo, txtHealthProblem, optAllergyYes, optAllergyNo, txtAllergy, optMedicalYes, optMedicalNo, txtMedical, txtOther);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$12X_0(this$0, val$emailAddress, val$appId, val$optHealthProblemYes, val$optHealProblemNo, val$txtHealthProblem, val$optAllergyYes, val$optAllergyNo, val$txtAllergy, val$optMedicalYes, val$optMedicalNo, val$txtMedical, val$txtOther){
  this.val$emailAddress = val$emailAddress;
  this.val$appId = val$appId;
  this.val$optHealthProblemYes = val$optHealthProblemYes;
  this.val$optHealProblemNo = val$optHealProblemNo;
  this.val$txtHealthProblem = val$txtHealthProblem;
  this.val$optAllergyYes = val$optAllergyYes;
  this.val$optAllergyNo = val$optAllergyNo;
  this.val$txtAllergy = val$txtAllergy;
  this.val$optMedicalYes = val$optMedicalYes;
  this.val$optMedicalNo = val$optMedicalNo;
  this.val$txtMedical = val$txtMedical;
  this.val$txtOther = val$txtOther;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1817, 657, makeCastMap([Q$AbstractRequest]), ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$12X_0);
_.makeRequestData = function makeRequestData_1(){
  return new RequestData_0('QI1GnrYxeEGnhxDOxIH91tLrYB8=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$emailAddress, this.val$appId, ($clinit_Boolean() , this.val$optHealthProblemYes?TRUE_1:FALSE_1), this.val$optHealProblemNo?TRUE_1:FALSE_1, this.val$txtHealthProblem, this.val$optAllergyYes?TRUE_1:FALSE_1, this.val$optAllergyNo?TRUE_1:FALSE_1, this.val$txtAllergy, this.val$optMedicalYes?TRUE_1:FALSE_1, this.val$optMedicalNo?TRUE_1:FALSE_1, this.val$txtMedical, this.val$txtOther]), this.propertyRefs, Ljava_lang_Boolean_2_classLit, null);
}
;
_.val$appId = null;
_.val$emailAddress = null;
_.val$optAllergyNo = false;
_.val$optAllergyYes = false;
_.val$optHealProblemNo = false;
_.val$optHealthProblemYes = false;
_.val$optMedicalNo = false;
_.val$optMedicalYes = false;
_.val$txtAllergy = null;
_.val$txtHealthProblem = null;
_.val$txtMedical = null;
_.val$txtOther = null;
var Lcom_lemania_eprospects_client_presenter_applicationstep4_ApplicationStep4Presenter_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep4.', 'ApplicationStep4Presenter', 1260), Lcom_lemania_eprospects_client_presenter_applicationstep4_ApplicationStep4Presenter$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep4.', 'ApplicationStep4Presenter$1', 1261), Lcom_lemania_eprospects_client_presenter_applicationstep4_ApplicationStep4Presenter$2_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep4.', 'ApplicationStep4Presenter$2', 1262), Lcom_lemania_eprospects_client_event_ApplicationStep4CompletedEvent_2_classLit = createForClass('com.lemania.eprospects.client.event.', 'ApplicationStep4CompletedEvent', 778), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$12_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$12', 1396), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$12$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$12$1', 1397), Lcom_lemania_eprospects_client_presenter_applicationstep4_ApplicationStep4View_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep4.', 'ApplicationStep4View', 1270), Lcom_lemania_eprospects_client_presenter_applicationstep4_ApplicationStep4View_1BinderImpl_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep4.', 'ApplicationStep4View_BinderImpl', 1271), Lcom_lemania_eprospects_client_presenter_applicationstep4_ApplicationStep4View_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep4.', 'ApplicationStep4View_BinderImpl$Widgets', 1272), Lcom_lemania_eprospects_client_presenter_applicationstep4_ApplicationStep4View_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep4.', 'ApplicationStep4View_BinderImpl$Widgets$1', 1273), Lcom_lemania_eprospects_client_presenter_applicationstep4_ApplicationStep4View_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep4.', 'ApplicationStep4View_BinderImpl$Widgets$2', 1277), Lcom_lemania_eprospects_client_presenter_applicationstep4_ApplicationStep4View_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep4.', 'ApplicationStep4View_BinderImpl$Widgets$3', 1278), Lcom_lemania_eprospects_client_presenter_applicationstep4_ApplicationStep4View_1BinderImpl$Widgets$4_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep4.', 'ApplicationStep4View_BinderImpl$Widgets$4', 1279), Lcom_lemania_eprospects_client_presenter_applicationstep4_ApplicationStep4View_1BinderImpl$Widgets$5_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep4.', 'ApplicationStep4View_BinderImpl$Widgets$5', 1280), Lcom_lemania_eprospects_client_presenter_applicationstep4_ApplicationStep4View_1BinderImpl$Widgets$6_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep4.', 'ApplicationStep4View_BinderImpl$Widgets$6', 1281), Lcom_lemania_eprospects_client_presenter_applicationstep4_ApplicationStep4View_1BinderImpl$Widgets$7_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep4.', 'ApplicationStep4View_BinderImpl$Widgets$7', 1282), Lcom_lemania_eprospects_client_presenter_applicationstep4_ApplicationStep4View_1BinderImpl$Widgets$8_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep4.', 'ApplicationStep4View_BinderImpl$Widgets$8', 1283), Lcom_lemania_eprospects_client_presenter_applicationstep4_ApplicationStep4View_1BinderImpl$Widgets$9_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep4.', 'ApplicationStep4View_BinderImpl$Widgets$9', 1284), Lcom_lemania_eprospects_client_presenter_applicationstep4_ApplicationStep4View_1BinderImpl$Widgets$10_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep4.', 'ApplicationStep4View_BinderImpl$Widgets$10', 1274), Lcom_lemania_eprospects_client_presenter_applicationstep4_ApplicationStep4View_1BinderImpl$Widgets$11_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep4.', 'ApplicationStep4View_BinderImpl$Widgets$11', 1275), Lcom_lemania_eprospects_client_presenter_applicationstep4_ApplicationStep4View_1BinderImpl$Widgets$12_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep4.', 'ApplicationStep4View_BinderImpl$Widgets$12', 1276), Lcom_lemania_eprospects_shared_applicationform_ApplicationFormRequestFactory_1ApplicationFormRequestContextImpl$12X_2_classLit = createForClass('com.lemania.eprospects.shared.applicationform.', 'ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$12X', 1817);
$entry(onLoad)(7);
