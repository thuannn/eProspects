function ApplicationStep1CompletedEvent_0(){
  $clinit_ApplicationStep1CompletedEvent();
}

defineSeed(763, 234, {}, ApplicationStep1CompletedEvent_0);
_.dispatch_0 = function dispatch_36(handler){
  dynamicCast(handler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler).onApplicationStep1Completed(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_37(){
  return TYPE_37;
}
;
function ApplicationStep1Presenter_0(eventBus, view, proxy){
  $clinit_ApplicationStep1Presenter();
  Presenter_0.call(this, eventBus, view, proxy, ($clinit_MainPagePresenter() , TYPE_SetMainContent));
  dynamicCast(this.view, Q$ApplicationStep1Presenter$MyView).setUiHandlers(this);
}

defineSeed(1126, 706, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ApplicationStep1Presenter, Q$ApplicationStep1UiHandlers]), ApplicationStep1Presenter_0);
_.onBind = function onBind_32(){
  $initializeUi(dynamicCast(this.view, Q$ApplicationStep1Presenter$MyView));
}
;
_.onReset = function onReset_31(){
}
;
function $initializeUi(this$static){
  $insertItem(this$static.lstGender, 'Veuillez choisir', '', -1);
  $insertItem(this$static.lstGender, 'Gar\xE7on', 'MALE', -1);
  $insertItem(this$static.lstGender, 'Fille', 'FEMALE', -1);
}

function ApplicationStep1View_0(){
  $initWidget_0(this, $build_main_2(new ApplicationStep1View_BinderImpl$Widgets_0(this)));
}

defineSeed(1129, 711, makeCastMap([Q$IsWidget, Q$ApplicationStep1Presenter$MyView]), ApplicationStep1View_0);
_.setInSlot = function setInSlot_4(slot, content_0){
  slot === ($clinit_ApplicationStep1Presenter() , SLOT_ApplicationStep1)?this.main.setWidget(!content_0?null:!content_0.view?null:content_0.view.asWidget()):undefined;
}
;
_.lstGender = null;
_.main = null;
function ApplicationStep1View_BinderImpl_0(){
}

defineSeed(1130, 1, {}, ApplicationStep1View_BinderImpl_0);
function $build_main_2(this$static){
  var main, f_VerticalPanel1, f_Label2, f_Label3, f_FlowPanel4, f_Label5, f_Grid6, f_HorizontalPanel16, f_Grid19, f_Label28, f_Grid29, f_HorizontalPanel34, f_Grid37, f_Label54, f_Grid55, f_VerticalPanel66, f_Label7, lstGender, f_Label8, f_TextBox9, f_Label10, f_TextBox11, f_Label12, f_TextBox13, f_Label14, f_TextBox15, f_Label17, f_TextBox18, f_Label20, f_TextBox21, f_Label22, f_TextBox23, f_Label24, f_TextBox25, f_Label26, f_TextBox27, f_Label30, f_TextBox31, f_Label32, f_TextBox33, f_Label35, f_TextBox36, f_Label38, f_TextBox39, f_Label40, f_TextBox41, f_Label42, f_TextBox43, f_Label44, f_TextBox45, f_Label46, f_TextBox47, f_Label48, f_TextBox49, f_Label50, f_TextBox51, f_Label52, f_TextBox53, f_Label56, f_TextBox57, f_Label58, f_TextBox59, f_Label60, f_TextBox61, f_Label62, f_TextBox63, f_Label64, f_TextBox65, f_HorizontalPanel67, button, sb, cmdNextStep, sb_0;
  main = new SimplePanel_0;
  $add_4(main, (f_VerticalPanel1 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel1, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $add_11(f_VerticalPanel1, (f_Label2 = new Label_0 , f_Label2.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label2.directionalTextHelper, 'INFORMATIONS GENERALES', false) , $updateHorizontalAlignment(f_Label2) , f_Label2)) , $add_11(f_VerticalPanel1, (f_Label3 = new Label_0 , $setTextOrHtml(f_Label3.directionalTextHelper, 'Step 1 of 5', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_11(f_VerticalPanel1, (f_FlowPanel4 = new FlowPanel_0 , $add_7(f_FlowPanel4, (f_Label5 = new Label_0 , f_Label5.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label5.directionalTextHelper, 'Etudiant(e)', false) , $updateHorizontalAlignment(f_Label5) , f_Label5)) , $add_7(f_FlowPanel4, (f_Grid6 = new Grid_0 , $resizeColumns(f_Grid6, 4) , $resizeRows(f_Grid6, 3) , $setWidget_1(f_Grid6, 0, 0, (f_Label7 = new Label_0 , f_Label7.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label7.directionalTextHelper, 'Veuillez s\xE9lectionner', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $setWidget_1(f_Grid6, 0, 1, (lstGender = new ListBox_0 , this$static.owner.lstGender = lstGender , lstGender)) , $setWidget_1(f_Grid6, 1, 0, (f_Label8 = new Label_0 , f_Label8.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label8.directionalTextHelper, 'Nom de famille', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $setWidget_1(f_Grid6, 1, 1, (f_TextBox9 = new TextBox_0 , f_TextBox9.element['className'] = 'sis_textbox' , f_TextBox9)) , $setWidget_1(f_Grid6, 1, 2, (f_Label10 = new Label_0 , f_Label10.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label10.directionalTextHelper, 'Pr\xE9nom', false) , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $setWidget_1(f_Grid6, 1, 3, (f_TextBox11 = new TextBox_0 , f_TextBox11.element['className'] = 'sis_textbox' , f_TextBox11)) , $setWidget_1(f_Grid6, 2, 0, (f_Label12 = new Label_0 , f_Label12.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label12.directionalTextHelper, 'Date de naissance', false) , $updateHorizontalAlignment(f_Label12) , f_Label12)) , $setWidget_1(f_Grid6, 2, 1, (f_TextBox13 = new TextBox_0 , f_TextBox13.element['className'] = 'sis_textbox' , f_TextBox13)) , $setWidget_1(f_Grid6, 2, 2, (f_Label14 = new Label_0 , f_Label14.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label14.directionalTextHelper, 'Nationalit\xE9', false) , $updateHorizontalAlignment(f_Label14) , f_Label14)) , $setWidget_1(f_Grid6, 2, 3, (f_TextBox15 = new TextBox_0 , f_TextBox15.element['className'] = 'sis_textbox' , f_TextBox15)) , f_Grid6.element.style['width'] = '100%' , f_Grid6)) , $add_7(f_FlowPanel4, (f_HorizontalPanel16 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel16, ALIGN_LEFT) , $add_9(f_HorizontalPanel16, (f_Label17 = new Label_0 , f_Label17.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label17.directionalTextHelper, 'Adresse (Rue, No.)', false) , $updateHorizontalAlignment(f_Label17) , f_Label17)) , $add_9(f_HorizontalPanel16, (f_TextBox18 = new TextBox_0 , f_TextBox18.element['className'] = 'sis-textbox-long' , f_TextBox18)) , f_HorizontalPanel16.element.style['width'] = '100%' , f_HorizontalPanel16.table['cellSpacing'] = 4 , f_HorizontalPanel16)) , $add_7(f_FlowPanel4, (f_Grid19 = new Grid_0 , $resizeColumns(f_Grid19, 4) , $resizeRows(f_Grid19, 2) , $setWidget_1(f_Grid19, 0, 0, (f_Label20 = new Label_0 , f_Label20.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label20.directionalTextHelper, 'Code postale / Ville', false) , $updateHorizontalAlignment(f_Label20) , f_Label20)) , $setWidget_1(f_Grid19, 0, 1, (f_TextBox21 = new TextBox_0 , f_TextBox21.element['className'] = 'sis_textbox' , f_TextBox21)) , $setWidget_1(f_Grid19, 0, 2, (f_Label22 = new Label_0 , f_Label22.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label22.directionalTextHelper, 'Pays', false) , $updateHorizontalAlignment(f_Label22) , f_Label22)) , $setWidget_1(f_Grid19, 0, 3, (f_TextBox23 = new TextBox_0 , f_TextBox23.element['className'] = 'sis_textbox' , f_TextBox23)) , $setWidget_1(f_Grid19, 1, 0, (f_Label24 = new Label_0 , f_Label24.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label24.directionalTextHelper, 'Email', false) , $updateHorizontalAlignment(f_Label24) , f_Label24)) , $setWidget_1(f_Grid19, 1, 1, (f_TextBox25 = new TextBox_0 , f_TextBox25.element['className'] = 'sis_textbox' , f_TextBox25)) , $setWidget_1(f_Grid19, 1, 2, (f_Label26 = new Label_0 , f_Label26.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label26.directionalTextHelper, 'Mobile (pour les activit\xE9s)', false) , $updateHorizontalAlignment(f_Label26) , f_Label26)) , $setWidget_1(f_Grid19, 1, 3, (f_TextBox27 = new TextBox_0 , f_TextBox27.element['className'] = 'sis_textbox' , f_TextBox27)) , f_Grid19.element.style['width'] = '100%' , f_Grid19)) , $add_7(f_FlowPanel4, (f_Label28 = new Label_0 , f_Label28.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label28.directionalTextHelper, 'Parents / tuteurs', false) , $updateHorizontalAlignment(f_Label28) , f_Label28)) , $add_7(f_FlowPanel4, (f_Grid29 = new Grid_0 , $resizeColumns(f_Grid29, 4) , $resizeRows(f_Grid29, 1) , $setWidget_1(f_Grid29, 0, 0, (f_Label30 = new Label_0 , f_Label30.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label30.directionalTextHelper, 'Nom de famille', false) , $updateHorizontalAlignment(f_Label30) , f_Label30)) , $setWidget_1(f_Grid29, 0, 1, (f_TextBox31 = new TextBox_0 , f_TextBox31.element['className'] = 'sis_textbox' , f_TextBox31)) , $setWidget_1(f_Grid29, 0, 2, (f_Label32 = new Label_0 , f_Label32.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label32.directionalTextHelper, 'Pr\xE9nom', false) , $updateHorizontalAlignment(f_Label32) , f_Label32)) , $setWidget_1(f_Grid29, 0, 3, (f_TextBox33 = new TextBox_0 , f_TextBox33.element['className'] = 'sis_textbox' , f_TextBox33)) , f_Grid29.element.style['width'] = '100%' , f_Grid29)) , $add_7(f_FlowPanel4, (f_HorizontalPanel34 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel34, (f_Label35 = new Label_0 , f_Label35.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label35.directionalTextHelper, 'Adresse (Rue, No.)', false) , $updateHorizontalAlignment(f_Label35) , f_Label35)) , $add_9(f_HorizontalPanel34, (f_TextBox36 = new TextBox_0 , f_TextBox36.element['className'] = 'sis-textbox-long' , f_TextBox36)) , f_HorizontalPanel34.element.style['width'] = '100%' , f_HorizontalPanel34.table['cellSpacing'] = 4 , f_HorizontalPanel34)) , $add_7(f_FlowPanel4, (f_Grid37 = new Grid_0 , $resizeColumns(f_Grid37, 4) , $resizeRows(f_Grid37, 4) , $setWidget_1(f_Grid37, 0, 0, (f_Label38 = new Label_0 , f_Label38.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label38.directionalTextHelper, 'Code postale / Ville', false) , $updateHorizontalAlignment(f_Label38) , f_Label38)) , $setWidget_1(f_Grid37, 0, 1, (f_TextBox39 = new TextBox_0 , f_TextBox39.element['className'] = 'sis_textbox' , f_TextBox39)) , $setWidget_1(f_Grid37, 0, 2, (f_Label40 = new Label_0 , f_Label40.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label40.directionalTextHelper, 'Pays', false) , $updateHorizontalAlignment(f_Label40) , f_Label40)) , $setWidget_1(f_Grid37, 0, 3, (f_TextBox41 = new TextBox_0 , f_TextBox41.element['className'] = 'sis_textbox' , f_TextBox41)) , $setWidget_1(f_Grid37, 1, 0, (f_Label42 = new Label_0 , f_Label42.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label42.directionalTextHelper, 'Mobile (m\xE8re)', false) , $updateHorizontalAlignment(f_Label42) , f_Label42)) , $setWidget_1(f_Grid37, 1, 1, (f_TextBox43 = new TextBox_0 , f_TextBox43.element['className'] = 'sis_textbox' , f_TextBox43)) , $setWidget_1(f_Grid37, 1, 2, (f_Label44 = new Label_0 , f_Label44.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label44.directionalTextHelper, 'Mobile (p\xE8re)', false) , $updateHorizontalAlignment(f_Label44) , f_Label44)) , $setWidget_1(f_Grid37, 1, 3, (f_TextBox45 = new TextBox_0 , f_TextBox45.element['className'] = 'sis_textbox' , f_TextBox45)) , $setWidget_1(f_Grid37, 2, 0, (f_Label46 = new Label_0 , f_Label46.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label46.directionalTextHelper, 'T\xE9l\xE9phone (domicile)', false) , $updateHorizontalAlignment(f_Label46) , f_Label46)) , $setWidget_1(f_Grid37, 2, 1, (f_TextBox47 = new TextBox_0 , f_TextBox47.element['className'] = 'sis_textbox' , f_TextBox47)) , $setWidget_1(f_Grid37, 2, 2, (f_Label48 = new Label_0 , f_Label48.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label48.directionalTextHelper, 'T\xE9l\xE9phone professionnel', false) , $updateHorizontalAlignment(f_Label48) , f_Label48)) , $setWidget_1(f_Grid37, 2, 3, (f_TextBox49 = new TextBox_0 , f_TextBox49.element['className'] = 'sis_textbox' , f_TextBox49)) , $setWidget_1(f_Grid37, 3, 0, (f_Label50 = new Label_0 , f_Label50.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label50.directionalTextHelper, 'Fax', false) , $updateHorizontalAlignment(f_Label50) , f_Label50)) , $setWidget_1(f_Grid37, 3, 1, (f_TextBox51 = new TextBox_0 , f_TextBox51.element['className'] = 'sis_textbox' , f_TextBox51)) , $setWidget_1(f_Grid37, 3, 2, (f_Label52 = new Label_0 , f_Label52.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label52.directionalTextHelper, 'E-mail', false) , $updateHorizontalAlignment(f_Label52) , f_Label52)) , $setWidget_1(f_Grid37, 3, 3, (f_TextBox53 = new TextBox_0 , f_TextBox53.element['className'] = 'sis_textbox' , f_TextBox53)) , f_Grid37.element.style['width'] = '100%' , f_Grid37)) , $add_7(f_FlowPanel4, (f_Label54 = new Label_0 , f_Label54.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label54.directionalTextHelper, "Adresse pour l'envoie de la facture et de la lettre de confirmation (si diff\xE9rente de l'adresse des parents)", false) , $updateHorizontalAlignment(f_Label54) , f_Label54)) , $add_7(f_FlowPanel4, (f_Grid55 = new Grid_0 , $resizeColumns(f_Grid55, 2) , $resizeRows(f_Grid55, 5) , $setWidget_1(f_Grid55, 0, 0, (f_Label56 = new Label_0 , f_Label56.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label56.directionalTextHelper, "Nom de l'entreprise", false) , $updateHorizontalAlignment(f_Label56) , f_Label56)) , $setWidget_1(f_Grid55, 0, 1, (f_TextBox57 = new TextBox_0 , f_TextBox57.element['className'] = 'sis-textbox-long' , f_TextBox57)) , $setWidget_1(f_Grid55, 1, 0, (f_Label58 = new Label_0 , f_Label58.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label58.directionalTextHelper, 'Nom / Pr\xE9nom de la personne responsable', false) , $updateHorizontalAlignment(f_Label58) , f_Label58)) , $setWidget_1(f_Grid55, 1, 1, (f_TextBox59 = new TextBox_0 , f_TextBox59.element['className'] = 'sis-textbox-long' , f_TextBox59)) , $setWidget_1(f_Grid55, 2, 0, (f_Label60 = new Label_0 , f_Label60.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label60.directionalTextHelper, 'Adresse (Rue, No.)', false) , $updateHorizontalAlignment(f_Label60) , f_Label60)) , $setWidget_1(f_Grid55, 2, 1, (f_TextBox61 = new TextBox_0 , f_TextBox61.element['className'] = 'sis-textbox-long' , f_TextBox61)) , $setWidget_1(f_Grid55, 3, 0, (f_Label62 = new Label_0 , f_Label62.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label62.directionalTextHelper, 'Code postale / Ville', false) , $updateHorizontalAlignment(f_Label62) , f_Label62)) , $setWidget_1(f_Grid55, 3, 1, (f_TextBox63 = new TextBox_0 , f_TextBox63.element['className'] = 'sis-textbox-long' , f_TextBox63)) , $setWidget_1(f_Grid55, 4, 0, (f_Label64 = new Label_0 , f_Label64.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label64.directionalTextHelper, 'Pays', false) , $updateHorizontalAlignment(f_Label64) , f_Label64)) , $setWidget_1(f_Grid55, 4, 1, (f_TextBox65 = new TextBox_0 , f_TextBox65.element['className'] = 'sis-textbox-long' , f_TextBox65)) , f_Grid55.element.style['width'] = '100%' , f_Grid55)) , $add_7(f_FlowPanel4, (f_VerticalPanel66 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel66, ALIGN_RIGHT) , $add_11(f_VerticalPanel66, (f_HorizontalPanel67 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel67, ALIGN_RIGHT) , $add_9(f_HorizontalPanel67, (button = new Button_0 , $setHTML(button, (sb = new StringBuilder_0 , $append_1(sb.data, 'Pr\xE9c\xE9dant') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data))).html) , setVisible(button.element, false) , $addDomHandler(button, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , button)) , $add_9(f_HorizontalPanel67, (cmdNextStep = new Button_0 , $setHTML(cmdNextStep, (sb_0 = new StringBuilder_0 , $append_1(sb_0.data, 'Next Step') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb_0.data))).html) , $setInnerText(cmdNextStep.element, 'Suivant') , $addDomHandler(cmdNextStep, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, TYPE_0) , cmdNextStep)) , f_HorizontalPanel67.element.style['width'] = '20%' , f_HorizontalPanel67.table['cellSpacing'] = 10 , f_HorizontalPanel67)) , f_VerticalPanel66.element.style['width'] = '100%' , f_VerticalPanel66)) , f_FlowPanel4.element.style['width'] = '900px' , f_FlowPanel4)) , f_VerticalPanel1.element.style['height'] = '' , f_VerticalPanel1.element.style['width'] = '100%' , f_VerticalPanel1));
  this$static.owner.main = main;
  return main;
}

function ApplicationStep1View_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ApplicationStep1View_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new ApplicationStep1View_BinderImpl$Widgets$2_0(this);
  this.owner = owner;
}

defineSeed(1131, 1, {}, ApplicationStep1View_BinderImpl$Widgets_0);
_.owner = null;
function ApplicationStep1View_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1132, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep1View_BinderImpl$Widgets$1_0);
_.onClick = function onClick_4(event_0){
  $doFire(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep1UiHandlers), Q$ApplicationStep1Presenter).eventBus, new ApplicationStep1CompletedEvent_0, null);
}
;
_.this$1 = null;
function ApplicationStep1View_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1133, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep1View_BinderImpl$Widgets$2_0);
_.onClick = function onClick_5(event_0){
  $doFire(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep1UiHandlers), Q$ApplicationStep1Presenter).eventBus, new GotoPreviousPageEvent_0(($clinit_History() , impl_2?token_1 == null?'':token_1:'')), null);
}
;
_.this$1 = null;
function $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep1$ApplicationStep1Presenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep1$ApplicationStep1Presenter$_annotation$$none$$) {
    result = new ApplicationStep1Presenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep1$ApplicationStep1View$_annotation$$none$$(this$static), $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep1$ApplicationStep1Presenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep1$ApplicationStep1Presenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep1$ApplicationStep1Presenter$_annotation$$none$$;
}

function $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep1$ApplicationStep1View$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep1$ApplicationStep1View$_annotation$$none$$) {
    result = new ApplicationStep1View_0(new ApplicationStep1View_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep1$ApplicationStep1View$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep1$ApplicationStep1View$_annotation$$none$$;
}

defineSeed(1137, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_141(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep1$ApplicationStep1Presenter$_annotation$$none$$(this.this$1.this$0));
}
;
defineSeed(1245, 706, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationPaymentEvent$ApplicationPaymentHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$GotoPreviousPageEvent$GotoPreviousPageHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler, Q$MainPagePresenter, Q$MainPageUiHandler]));
_.onApplicationStep1Completed = function onApplicationStep1Completed(event_0){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationstep2', true);
}
;
defineSeed(1247, 730, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationPaymentEvent$ApplicationPaymentHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$GotoPreviousPageEvent$GotoPreviousPageHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler]));
_.onApplicationStep1Completed = function onApplicationStep1Completed_0(event_0){
  $getPresenter(this, new MainPagePresenterMyProxyImpl$7_0(this.eventBus));
}
;
function $success_52(){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new MainPagePresenterMyProxyImpl$7$1_0);
}

function MainPagePresenterMyProxyImpl$7_0($anonymous0){
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(1270, 719, {}, MainPagePresenterMyProxyImpl$7_0);
_.success = function success_54(presenter){
  $success_52(dynamicCast(presenter, Q$MainPagePresenter));
}
;
function MainPagePresenterMyProxyImpl$7$1_0(){
}

defineSeed(1271, 1, {}, MainPagePresenterMyProxyImpl$7$1_0);
_.execute_0 = function execute_81(){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationstep2', true);
}
;
var Lcom_lemania_eprospects_client_presenter_applicationstep1_ApplicationStep1Presenter_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep1.', 'ApplicationStep1Presenter', 1126), Lcom_lemania_eprospects_client_event_ApplicationStep1CompletedEvent_2_classLit = createForClass('com.lemania.eprospects.client.event.', 'ApplicationStep1CompletedEvent', 763), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$7_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$7', 1270), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$7$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$7$1', 1271), Lcom_lemania_eprospects_client_presenter_applicationstep1_ApplicationStep1View_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep1.', 'ApplicationStep1View', 1129), Lcom_lemania_eprospects_client_presenter_applicationstep1_ApplicationStep1View_1BinderImpl_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep1.', 'ApplicationStep1View_BinderImpl', 1130), Lcom_lemania_eprospects_client_presenter_applicationstep1_ApplicationStep1View_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep1.', 'ApplicationStep1View_BinderImpl$Widgets', 1131), Lcom_lemania_eprospects_client_presenter_applicationstep1_ApplicationStep1View_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep1.', 'ApplicationStep1View_BinderImpl$Widgets$1', 1132), Lcom_lemania_eprospects_client_presenter_applicationstep1_ApplicationStep1View_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep1.', 'ApplicationStep1View_BinderImpl$Widgets$2', 1133);
$entry(onLoad)(4);
