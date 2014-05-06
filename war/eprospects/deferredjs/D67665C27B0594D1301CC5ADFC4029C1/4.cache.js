function ApplicationStep1CompletedEvent_0(){
  $clinit_ApplicationStep1CompletedEvent();
}

defineSeed(756, 235, {}, ApplicationStep1CompletedEvent_0);
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

defineSeed(1117, 699, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ApplicationStep1Presenter, Q$ApplicationStep1UiHandlers]), ApplicationStep1Presenter_0);
_.onBind = function onBind_32(){
}
;
_.onReset = function onReset_31(){
}
;
function ApplicationStep1View_0(){
  $initWidget_0(this, $build_main_2(new ApplicationStep1View_BinderImpl$Widgets_0(this)));
}

defineSeed(1120, 704, makeCastMap([Q$IsWidget, Q$ApplicationStep1Presenter$MyView]), ApplicationStep1View_0);
_.setInSlot = function setInSlot_4(slot, content_0){
  slot === ($clinit_ApplicationStep1Presenter() , SLOT_ApplicationStep1)?this.main.setWidget(!content_0?null:!content_0.view?null:content_0.view.asWidget()):undefined;
}
;
_.main = null;
function ApplicationStep1View_BinderImpl_0(){
}

defineSeed(1121, 1, {}, ApplicationStep1View_BinderImpl_0);
function $build_main_2(this$static){
  var main, f_VerticalPanel1, f_Label2, f_Label3, f_FlowPanel4, f_Label5, f_Grid6, f_HorizontalPanel17, f_Grid20, f_Label29, f_Grid30, f_HorizontalPanel35, f_Grid38, f_Label55, f_Grid56, f_VerticalPanel67, f_Label7, f_Label9, f_TextBox10, f_Label11, f_TextBox12, f_Label13, f_TextBox14, f_Label15, f_TextBox16, f_Label18, f_TextBox19, f_Label21, f_TextBox22, f_Label23, f_TextBox24, f_Label25, f_TextBox26, f_Label27, f_TextBox28, f_Label31, f_TextBox32, f_Label33, f_TextBox34, f_Label36, f_TextBox37, f_Label39, f_TextBox40, f_Label41, f_TextBox42, f_Label43, f_TextBox44, f_Label45, f_TextBox46, f_Label47, f_TextBox48, f_Label49, f_TextBox50, f_Label51, f_TextBox52, f_Label53, f_TextBox54, f_Label57, f_TextBox58, f_Label59, f_TextBox60, f_Label61, f_TextBox62, f_Label63, f_TextBox64, f_Label65, f_TextBox66, f_HorizontalPanel68, f_Button69, sb, cmdNextStep, sb_0;
  main = new SimplePanel_0;
  $add_4(main, (f_VerticalPanel1 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel1, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $add_11(f_VerticalPanel1, (f_Label2 = new Label_0 , f_Label2.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label2.directionalTextHelper, 'INFORMATIONS GENERALES', false) , $updateHorizontalAlignment(f_Label2) , f_Label2)) , $add_11(f_VerticalPanel1, (f_Label3 = new Label_0 , $setTextOrHtml(f_Label3.directionalTextHelper, 'Step 1 of 5', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_11(f_VerticalPanel1, (f_FlowPanel4 = new FlowPanel_0 , $add_7(f_FlowPanel4, (f_Label5 = new Label_0 , f_Label5.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label5.directionalTextHelper, 'Etudiant(e)', false) , $updateHorizontalAlignment(f_Label5) , f_Label5)) , $add_7(f_FlowPanel4, (f_Grid6 = new Grid_0 , $resizeColumns(f_Grid6, 4) , $resizeRows(f_Grid6, 3) , $setWidget_1(f_Grid6, 0, 0, (f_Label7 = new Label_0 , f_Label7.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label7.directionalTextHelper, 'Veuillez s\xE9lectionner', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $setWidget_1(f_Grid6, 0, 1, new ListBox_0) , $setWidget_1(f_Grid6, 1, 0, (f_Label9 = new Label_0 , f_Label9.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label9.directionalTextHelper, 'Nom de famille', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $setWidget_1(f_Grid6, 1, 1, (f_TextBox10 = new TextBox_0 , f_TextBox10.element['className'] = 'sis_textbox' , f_TextBox10)) , $setWidget_1(f_Grid6, 1, 2, (f_Label11 = new Label_0 , f_Label11.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label11.directionalTextHelper, 'Pr\xE9nom', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , $setWidget_1(f_Grid6, 1, 3, (f_TextBox12 = new TextBox_0 , f_TextBox12.element['className'] = 'sis_textbox' , f_TextBox12)) , $setWidget_1(f_Grid6, 2, 0, (f_Label13 = new Label_0 , f_Label13.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label13.directionalTextHelper, 'Date de naissance', false) , $updateHorizontalAlignment(f_Label13) , f_Label13)) , $setWidget_1(f_Grid6, 2, 1, (f_TextBox14 = new TextBox_0 , f_TextBox14.element['className'] = 'sis_textbox' , f_TextBox14)) , $setWidget_1(f_Grid6, 2, 2, (f_Label15 = new Label_0 , f_Label15.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label15.directionalTextHelper, 'Nationalit\xE9', false) , $updateHorizontalAlignment(f_Label15) , f_Label15)) , $setWidget_1(f_Grid6, 2, 3, (f_TextBox16 = new TextBox_0 , f_TextBox16.element['className'] = 'sis_textbox' , f_TextBox16)) , f_Grid6.element.style['width'] = '100%' , f_Grid6)) , $add_7(f_FlowPanel4, (f_HorizontalPanel17 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel17, (f_Label18 = new Label_0 , f_Label18.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label18.directionalTextHelper, 'Adresse (Rue, No.)', false) , $updateHorizontalAlignment(f_Label18) , f_Label18)) , $add_9(f_HorizontalPanel17, (f_TextBox19 = new TextBox_0 , f_TextBox19.element['className'] = 'sis-textbox-long' , f_TextBox19)) , f_HorizontalPanel17.element.style['width'] = '720px' , f_HorizontalPanel17.table['cellSpacing'] = 4 , f_HorizontalPanel17)) , $add_7(f_FlowPanel4, (f_Grid20 = new Grid_0 , $resizeColumns(f_Grid20, 4) , $resizeRows(f_Grid20, 2) , $setWidget_1(f_Grid20, 0, 0, (f_Label21 = new Label_0 , f_Label21.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label21.directionalTextHelper, 'Code postale / Ville', false) , $updateHorizontalAlignment(f_Label21) , f_Label21)) , $setWidget_1(f_Grid20, 0, 1, (f_TextBox22 = new TextBox_0 , f_TextBox22.element['className'] = 'sis_textbox' , f_TextBox22)) , $setWidget_1(f_Grid20, 0, 2, (f_Label23 = new Label_0 , f_Label23.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label23.directionalTextHelper, 'Pays', false) , $updateHorizontalAlignment(f_Label23) , f_Label23)) , $setWidget_1(f_Grid20, 0, 3, (f_TextBox24 = new TextBox_0 , f_TextBox24.element['className'] = 'sis_textbox' , f_TextBox24)) , $setWidget_1(f_Grid20, 1, 0, (f_Label25 = new Label_0 , f_Label25.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label25.directionalTextHelper, 'Email', false) , $updateHorizontalAlignment(f_Label25) , f_Label25)) , $setWidget_1(f_Grid20, 1, 1, (f_TextBox26 = new TextBox_0 , f_TextBox26.element['className'] = 'sis_textbox' , f_TextBox26)) , $setWidget_1(f_Grid20, 1, 2, (f_Label27 = new Label_0 , f_Label27.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label27.directionalTextHelper, 'Mobile (pour les activit\xE9s)', false) , $updateHorizontalAlignment(f_Label27) , f_Label27)) , $setWidget_1(f_Grid20, 1, 3, (f_TextBox28 = new TextBox_0 , f_TextBox28.element['className'] = 'sis_textbox' , f_TextBox28)) , f_Grid20.element.style['width'] = '100%' , f_Grid20)) , $add_7(f_FlowPanel4, (f_Label29 = new Label_0 , f_Label29.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label29.directionalTextHelper, 'Parents / tuteurs', false) , $updateHorizontalAlignment(f_Label29) , f_Label29)) , $add_7(f_FlowPanel4, (f_Grid30 = new Grid_0 , $resizeColumns(f_Grid30, 4) , $resizeRows(f_Grid30, 1) , $setWidget_1(f_Grid30, 0, 0, (f_Label31 = new Label_0 , f_Label31.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label31.directionalTextHelper, 'Nom de famille', false) , $updateHorizontalAlignment(f_Label31) , f_Label31)) , $setWidget_1(f_Grid30, 0, 1, (f_TextBox32 = new TextBox_0 , f_TextBox32.element['className'] = 'sis_textbox' , f_TextBox32)) , $setWidget_1(f_Grid30, 0, 2, (f_Label33 = new Label_0 , f_Label33.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label33.directionalTextHelper, 'Pr\xE9nom', false) , $updateHorizontalAlignment(f_Label33) , f_Label33)) , $setWidget_1(f_Grid30, 0, 3, (f_TextBox34 = new TextBox_0 , f_TextBox34.element['className'] = 'sis_textbox' , f_TextBox34)) , f_Grid30.element.style['width'] = '100%' , f_Grid30)) , $add_7(f_FlowPanel4, (f_HorizontalPanel35 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel35, (f_Label36 = new Label_0 , f_Label36.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label36.directionalTextHelper, 'Adresse (Rue, No.)', false) , $updateHorizontalAlignment(f_Label36) , f_Label36)) , $add_9(f_HorizontalPanel35, (f_TextBox37 = new TextBox_0 , f_TextBox37.element['className'] = 'sis-textbox-long' , f_TextBox37)) , f_HorizontalPanel35.element.style['width'] = '720px' , f_HorizontalPanel35.table['cellSpacing'] = 4 , f_HorizontalPanel35)) , $add_7(f_FlowPanel4, (f_Grid38 = new Grid_0 , $resizeColumns(f_Grid38, 4) , $resizeRows(f_Grid38, 4) , $setWidget_1(f_Grid38, 0, 0, (f_Label39 = new Label_0 , f_Label39.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label39.directionalTextHelper, 'Code postale / Ville', false) , $updateHorizontalAlignment(f_Label39) , f_Label39)) , $setWidget_1(f_Grid38, 0, 1, (f_TextBox40 = new TextBox_0 , f_TextBox40.element['className'] = 'sis_textbox' , f_TextBox40)) , $setWidget_1(f_Grid38, 0, 2, (f_Label41 = new Label_0 , f_Label41.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label41.directionalTextHelper, 'Pays', false) , $updateHorizontalAlignment(f_Label41) , f_Label41)) , $setWidget_1(f_Grid38, 0, 3, (f_TextBox42 = new TextBox_0 , f_TextBox42.element['className'] = 'sis_textbox' , f_TextBox42)) , $setWidget_1(f_Grid38, 1, 0, (f_Label43 = new Label_0 , f_Label43.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label43.directionalTextHelper, 'Mobile (m\xE8re)', false) , $updateHorizontalAlignment(f_Label43) , f_Label43)) , $setWidget_1(f_Grid38, 1, 1, (f_TextBox44 = new TextBox_0 , f_TextBox44.element['className'] = 'sis_textbox' , f_TextBox44)) , $setWidget_1(f_Grid38, 1, 2, (f_Label45 = new Label_0 , f_Label45.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label45.directionalTextHelper, 'Mobile (p\xE8re)', false) , $updateHorizontalAlignment(f_Label45) , f_Label45)) , $setWidget_1(f_Grid38, 1, 3, (f_TextBox46 = new TextBox_0 , f_TextBox46.element['className'] = 'sis_textbox' , f_TextBox46)) , $setWidget_1(f_Grid38, 2, 0, (f_Label47 = new Label_0 , f_Label47.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label47.directionalTextHelper, 'T\xE9l\xE9phone (domicile)', false) , $updateHorizontalAlignment(f_Label47) , f_Label47)) , $setWidget_1(f_Grid38, 2, 1, (f_TextBox48 = new TextBox_0 , f_TextBox48.element['className'] = 'sis_textbox' , f_TextBox48)) , $setWidget_1(f_Grid38, 2, 2, (f_Label49 = new Label_0 , f_Label49.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label49.directionalTextHelper, 'T\xE9l\xE9phone professionnel', false) , $updateHorizontalAlignment(f_Label49) , f_Label49)) , $setWidget_1(f_Grid38, 2, 3, (f_TextBox50 = new TextBox_0 , f_TextBox50.element['className'] = 'sis_textbox' , f_TextBox50)) , $setWidget_1(f_Grid38, 3, 0, (f_Label51 = new Label_0 , f_Label51.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label51.directionalTextHelper, 'Fax', false) , $updateHorizontalAlignment(f_Label51) , f_Label51)) , $setWidget_1(f_Grid38, 3, 1, (f_TextBox52 = new TextBox_0 , f_TextBox52.element['className'] = 'sis_textbox' , f_TextBox52)) , $setWidget_1(f_Grid38, 3, 2, (f_Label53 = new Label_0 , f_Label53.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label53.directionalTextHelper, 'E-mail', false) , $updateHorizontalAlignment(f_Label53) , f_Label53)) , $setWidget_1(f_Grid38, 3, 3, (f_TextBox54 = new TextBox_0 , f_TextBox54.element['className'] = 'sis_textbox' , f_TextBox54)) , f_Grid38.element.style['width'] = '100%' , f_Grid38)) , $add_7(f_FlowPanel4, (f_Label55 = new Label_0 , f_Label55.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label55.directionalTextHelper, "Adresse pour l'envoie de la facture et de la lettre de confirmation (si diff\xE9rente de l'adresse des parents)", false) , $updateHorizontalAlignment(f_Label55) , f_Label55)) , $add_7(f_FlowPanel4, (f_Grid56 = new Grid_0 , $resizeColumns(f_Grid56, 2) , $resizeRows(f_Grid56, 5) , $setWidget_1(f_Grid56, 0, 0, (f_Label57 = new Label_0 , f_Label57.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label57.directionalTextHelper, "Nom de l'entreprise", false) , $updateHorizontalAlignment(f_Label57) , f_Label57)) , $setWidget_1(f_Grid56, 0, 1, (f_TextBox58 = new TextBox_0 , f_TextBox58.element['className'] = 'sis-textbox-long' , f_TextBox58)) , $setWidget_1(f_Grid56, 1, 0, (f_Label59 = new Label_0 , f_Label59.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label59.directionalTextHelper, 'Nom / Pr\xE9nom de la personne responsable', false) , $updateHorizontalAlignment(f_Label59) , f_Label59)) , $setWidget_1(f_Grid56, 1, 1, (f_TextBox60 = new TextBox_0 , f_TextBox60.element['className'] = 'sis-textbox-long' , f_TextBox60)) , $setWidget_1(f_Grid56, 2, 0, (f_Label61 = new Label_0 , f_Label61.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label61.directionalTextHelper, 'Adresse (Rue, No.)', false) , $updateHorizontalAlignment(f_Label61) , f_Label61)) , $setWidget_1(f_Grid56, 2, 1, (f_TextBox62 = new TextBox_0 , f_TextBox62.element['className'] = 'sis-textbox-long' , f_TextBox62)) , $setWidget_1(f_Grid56, 3, 0, (f_Label63 = new Label_0 , f_Label63.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label63.directionalTextHelper, 'Code postale / Ville', false) , $updateHorizontalAlignment(f_Label63) , f_Label63)) , $setWidget_1(f_Grid56, 3, 1, (f_TextBox64 = new TextBox_0 , f_TextBox64.element['className'] = 'sis-textbox-long' , f_TextBox64)) , $setWidget_1(f_Grid56, 4, 0, (f_Label65 = new Label_0 , f_Label65.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label65.directionalTextHelper, 'Pays', false) , $updateHorizontalAlignment(f_Label65) , f_Label65)) , $setWidget_1(f_Grid56, 4, 1, (f_TextBox66 = new TextBox_0 , f_TextBox66.element['className'] = 'sis-textbox-long' , f_TextBox66)) , f_Grid56.element.style['width'] = '100%' , f_Grid56)) , $add_7(f_FlowPanel4, (f_VerticalPanel67 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel67, ALIGN_RIGHT) , $add_11(f_VerticalPanel67, (f_HorizontalPanel68 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel68, ALIGN_RIGHT) , $add_9(f_HorizontalPanel68, (f_Button69 = new Button_0 , $setHTML(f_Button69, (sb = new StringBuilder_0 , $append_1(sb.data, 'Pr\xE9c\xE9dant') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data))).html) , f_Button69)) , $add_9(f_HorizontalPanel68, (cmdNextStep = new Button_0 , $setHTML(cmdNextStep, (sb_0 = new StringBuilder_0 , $append_1(sb_0.data, 'Next Step') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb_0.data))).html) , $setInnerText(cmdNextStep.element, 'Suivant') , $addDomHandler(cmdNextStep, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdNextStep)) , f_HorizontalPanel68.element.style['width'] = '20%' , f_HorizontalPanel68.table['cellSpacing'] = 10 , f_HorizontalPanel68)) , f_VerticalPanel67.element.style['width'] = '100%' , f_VerticalPanel67)) , f_FlowPanel4.element.style['width'] = '900px' , f_FlowPanel4)) , f_VerticalPanel1.element.style['height'] = '' , f_VerticalPanel1.element.style['width'] = '100%' , f_VerticalPanel1));
  this$static.owner.main = main;
  return main;
}

function ApplicationStep1View_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ApplicationStep1View_BinderImpl$Widgets$1_0(this);
  this.owner = owner;
}

defineSeed(1122, 1, {}, ApplicationStep1View_BinderImpl$Widgets_0);
_.owner = null;
function ApplicationStep1View_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1123, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep1View_BinderImpl$Widgets$1_0);
_.onClick = function onClick_3(event_0){
  $doFire(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep1UiHandlers), Q$ApplicationStep1Presenter).eventBus, new ApplicationStep1CompletedEvent_0, null);
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

defineSeed(1127, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_141(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep1$ApplicationStep1Presenter$_annotation$$none$$(this.this$1.this$0));
}
;
defineSeed(1229, 699, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationPaymentEvent$ApplicationPaymentHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler, Q$MainPagePresenter, Q$MainPageUiHandler]));
_.onApplicationStep1Completed = function onApplicationStep1Completed(event_0){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationstep2', true);
}
;
defineSeed(1231, 723, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationPaymentEvent$ApplicationPaymentHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler]));
_.onApplicationStep1Completed = function onApplicationStep1Completed_0(event_0){
  $getPresenter(this, new MainPagePresenterMyProxyImpl$7_0(this.eventBus));
}
;
function $success_51(){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new MainPagePresenterMyProxyImpl$7$1_0);
}

function MainPagePresenterMyProxyImpl$7_0($anonymous0){
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(1252, 712, {}, MainPagePresenterMyProxyImpl$7_0);
_.success = function success_53(presenter){
  $success_51(dynamicCast(presenter, Q$MainPagePresenter));
}
;
function MainPagePresenterMyProxyImpl$7$1_0(){
}

defineSeed(1253, 1, {}, MainPagePresenterMyProxyImpl$7$1_0);
_.execute_0 = function execute_79(){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationstep2', true);
}
;
var Lcom_lemania_eprospects_client_presenter_applicationstep1_ApplicationStep1Presenter_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep1.', 'ApplicationStep1Presenter', 1117), Lcom_lemania_eprospects_client_event_ApplicationStep1CompletedEvent_2_classLit = createForClass('com.lemania.eprospects.client.event.', 'ApplicationStep1CompletedEvent', 756), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$7_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$7', 1252), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$7$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$7$1', 1253), Lcom_lemania_eprospects_client_presenter_applicationstep1_ApplicationStep1View_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep1.', 'ApplicationStep1View', 1120), Lcom_lemania_eprospects_client_presenter_applicationstep1_ApplicationStep1View_1BinderImpl_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep1.', 'ApplicationStep1View_BinderImpl', 1121), Lcom_lemania_eprospects_client_presenter_applicationstep1_ApplicationStep1View_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep1.', 'ApplicationStep1View_BinderImpl$Widgets', 1122), Lcom_lemania_eprospects_client_presenter_applicationstep1_ApplicationStep1View_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep1.', 'ApplicationStep1View_BinderImpl$Widgets$1', 1123);
$entry(onLoad)(4);
