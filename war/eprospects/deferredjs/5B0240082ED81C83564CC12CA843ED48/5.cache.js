function ApplicationStep2CompletedEvent_0(){
  $clinit_ApplicationStep2CompletedEvent();
}

defineSeed(764, 235, {}, ApplicationStep2CompletedEvent_0);
_.dispatch_0 = function dispatch_37(handler){
  dynamicCast(handler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler).onApplicationStep2Completed(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_38(){
  return TYPE_38;
}
;
function ApplicationStep2Presenter_0(eventBus, view, proxy){
  $clinit_ApplicationStep2Presenter();
  Presenter_0.call(this, eventBus, view, proxy, ($clinit_MainPagePresenter() , TYPE_SetMainContent));
  dynamicCast(this.view, Q$ApplicationStep2Presenter$MyView).setUiHandlers(this);
}

defineSeed(1135, 706, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ApplicationStep2Presenter, Q$ApplicationStep2UiHandlers]), ApplicationStep2Presenter_0);
_.onBind = function onBind_33(){
}
;
_.onReset = function onReset_32(){
}
;
function ApplicationStep2View_0(){
  $initWidget_0(this, $build_main_3(new ApplicationStep2View_BinderImpl$Widgets_0(this)));
}

defineSeed(1138, 711, makeCastMap([Q$IsWidget, Q$ApplicationStep2Presenter$MyView]), ApplicationStep2View_0);
_.setInSlot = function setInSlot_5(slot, content_0){
  slot === ($clinit_ApplicationStep2Presenter() , SLOT_ApplicationStep2)?this.main.setWidget(!content_0?null:!content_0.view?null:content_0.view.asWidget()):undefined;
}
;
_.main = null;
function ApplicationStep2View_BinderImpl_0(){
}

defineSeed(1139, 1, {}, ApplicationStep2View_BinderImpl_0);
function $build_main_3(this$static){
  var main, f_VerticalPanel1, f_Label2, f_Label3, f_FlowPanel4, f_HorizontalPanel5, f_VerticalPanel60, f_VerticalPanel6, f_Label7, f_CheckBox8, f_CheckBox9, f_Label10, f_Grid11, f_Label12, f_Label13, f_Label14, f_Label15, f_Label16, f_Label17, f_Label18, f_CheckBox19, f_CheckBox20, f_Label21, f_CheckBox22, f_CheckBox23, f_Label24, f_CheckBox25, f_CheckBox26, f_Label27, f_CheckBox28, f_CheckBox29, f_Label30, f_CheckBox31, f_CheckBox32, f_Label33, f_CheckBox34, f_CheckBox35, f_Label36, f_Label37, f_Grid38, f_Label39, f_CheckBox40, f_CheckBox41, f_CheckBox42, f_Label43, f_CheckBox44, f_CheckBox45, f_CheckBox46, f_Label47, f_Label48, f_Label49, f_Label50, f_Grid51, f_Label52, f_CheckBox53, f_CheckBox54, f_CheckBox55, f_VerticalPanel56, f_Label57, f_FlexTable58, f_Label59, f_HorizontalPanel61, f_Button62, sb, cmdNextStep, sb_0;
  main = new SimplePanel_0;
  $add_4(main, (f_VerticalPanel1 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel1, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $add_11(f_VerticalPanel1, (f_Label2 = new Label_0 , f_Label2.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label2.directionalTextHelper, 'CHOIX DU PROGRAMME', false) , $updateHorizontalAlignment(f_Label2) , f_Label2)) , $add_11(f_VerticalPanel1, (f_Label3 = new Label_0 , $setTextOrHtml(f_Label3.directionalTextHelper, 'Step 2 of 5', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_11(f_VerticalPanel1, (f_FlowPanel4 = new FlowPanel_0 , $add_7(f_FlowPanel4, (f_HorizontalPanel5 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel5, (f_VerticalPanel6 = new VerticalPanel_0 , $add_11(f_VerticalPanel6, (f_Label7 = new Label_0 , f_Label7.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label7.directionalTextHelper, 'PROGRAMMES', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $add_11(f_VerticalPanel6, (f_CheckBox8 = new CheckBox_0 , $setTextOrHtml(f_CheckBox8.directionalTextHelper, "Frais d'inscription, CHF 100.-", false) , f_CheckBox8)) , $add_11(f_VerticalPanel6, (f_CheckBox9 = new CheckBox_0 , $setTextOrHtml(f_CheckBox9.directionalTextHelper, 'Pack Assurance sant\xE9 CHF 190.- (obligatoire pour les internes)', false) , f_CheckBox9)) , $add_11(f_VerticalPanel6, (f_Label10 = new Label_0 , f_Label10.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label10.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $add_11(f_VerticalPanel6, (f_Grid11 = new Grid_0 , $resizeColumns(f_Grid11, 3) , $resizeRows(f_Grid11, 8) , $setWidget_1(f_Grid11, 0, 0, (f_Label12 = new Label_0 , $setTextOrHtml(f_Label12.directionalTextHelper, 'Date choisies', false) , $updateHorizontalAlignment(f_Label12) , f_Label12)) , $setWidget_1(f_Grid11, 0, 1, (f_Label13 = new Label_0 , $setTextOrHtml(f_Label13.directionalTextHelper, 'Du', false) , $updateHorizontalAlignment(f_Label13) , f_Label13)) , $setWidget_1(f_Grid11, 0, 2, (f_Label14 = new Label_0 , $setTextOrHtml(f_Label14.directionalTextHelper, "Jusqu'au", false) , $updateHorizontalAlignment(f_Label14) , f_Label14)) , $setWidget_1(f_Grid11, 1, 0, (f_Label15 = new Label_0 , $setTextOrHtml(f_Label15.directionalTextHelper, '(combinaison possible Juillet & Ao\xFBt)', false) , $updateHorizontalAlignment(f_Label15) , f_Label15)) , $setWidget_1(f_Grid11, 1, 1, (f_Label16 = new Label_0 , $setTextOrHtml(f_Label16.directionalTextHelper, 'Juillet', false) , $updateHorizontalAlignment(f_Label16) , f_Label16)) , $setWidget_1(f_Grid11, 1, 2, (f_Label17 = new Label_0 , $setTextOrHtml(f_Label17.directionalTextHelper, 'Ao\xFBt', false) , $updateHorizontalAlignment(f_Label17) , f_Label17)) , $setWidget_1(f_Grid11, 2, 0, (f_Label18 = new Label_0 , $setTextOrHtml(f_Label18.directionalTextHelper, 'Fran\xE7ais', false) , $updateHorizontalAlignment(f_Label18) , f_Label18)) , $setWidget_1(f_Grid11, 2, 1, (f_CheckBox19 = new CheckBox_0 , $setTextOrHtml(f_CheckBox19.directionalTextHelper, '20 p\xE9riodes', false) , f_CheckBox19)) , $setWidget_1(f_Grid11, 2, 2, (f_CheckBox20 = new CheckBox_0 , $setTextOrHtml(f_CheckBox20.directionalTextHelper, '25 p\xE9riodes', false) , f_CheckBox20)) , $setWidget_1(f_Grid11, 3, 0, (f_Label21 = new Label_0 , $setTextOrHtml(f_Label21.directionalTextHelper, 'Fran\xE7ais', false) , $updateHorizontalAlignment(f_Label21) , f_Label21)) , $setWidget_1(f_Grid11, 3, 1, (f_CheckBox22 = new CheckBox_0 , $setTextOrHtml(f_CheckBox22.directionalTextHelper, '20 p\xE9riodes + 5 conversations', false) , f_CheckBox22)) , $setWidget_1(f_Grid11, 3, 2, (f_CheckBox23 = new CheckBox_0 , $setTextOrHtml(f_CheckBox23.directionalTextHelper, '25 p\xE9riodes + 10 conversations', false) , f_CheckBox23)) , $setWidget_1(f_Grid11, 4, 0, (f_Label24 = new Label_0 , $setTextOrHtml(f_Label24.directionalTextHelper, 'Anglais', false) , $updateHorizontalAlignment(f_Label24) , f_Label24)) , $setWidget_1(f_Grid11, 4, 1, (f_CheckBox25 = new CheckBox_0 , $setTextOrHtml(f_CheckBox25.directionalTextHelper, '20 p\xE9riodes', false) , f_CheckBox25)) , $setWidget_1(f_Grid11, 4, 2, (f_CheckBox26 = new CheckBox_0 , $setTextOrHtml(f_CheckBox26.directionalTextHelper, '25 p\xE9riodes', false) , f_CheckBox26)) , $setWidget_1(f_Grid11, 5, 0, (f_Label27 = new Label_0 , $setTextOrHtml(f_Label27.directionalTextHelper, 'Anglais', false) , $updateHorizontalAlignment(f_Label27) , f_Label27)) , $setWidget_1(f_Grid11, 5, 1, (f_CheckBox28 = new CheckBox_0 , $setTextOrHtml(f_CheckBox28.directionalTextHelper, '20 p\xE9riodes + 5 conversations', false) , f_CheckBox28)) , $setWidget_1(f_Grid11, 5, 2, (f_CheckBox29 = new CheckBox_0 , $setTextOrHtml(f_CheckBox29.directionalTextHelper, '25 p\xE9riodes + 10 conversations', false) , f_CheckBox29)) , $setWidget_1(f_Grid11, 6, 0, (f_Label30 = new Label_0 , $setTextOrHtml(f_Label30.directionalTextHelper, 'Fran\xE7ais matin & Anglais apr\xE8s-midi', false) , $updateHorizontalAlignment(f_Label30) , f_Label30)) , $setWidget_1(f_Grid11, 6, 1, (f_CheckBox31 = new CheckBox_0 , $setTextOrHtml(f_CheckBox31.directionalTextHelper, '20 p\xE9riodes', false) , f_CheckBox31)) , $setWidget_1(f_Grid11, 6, 2, (f_CheckBox32 = new CheckBox_0 , $setTextOrHtml(f_CheckBox32.directionalTextHelper, '25 p\xE9riodes', false) , f_CheckBox32)) , $setWidget_1(f_Grid11, 7, 0, (f_Label33 = new Label_0 , $setTextOrHtml(f_Label33.directionalTextHelper, 'Anglais matin & Fran\xE7ais apr\xE8s-midi', false) , $updateHorizontalAlignment(f_Label33) , f_Label33)) , $setWidget_1(f_Grid11, 7, 1, (f_CheckBox34 = new CheckBox_0 , $setTextOrHtml(f_CheckBox34.directionalTextHelper, '20 p\xE9riodes + 5 conversations', false) , f_CheckBox34)) , $setWidget_1(f_Grid11, 7, 2, (f_CheckBox35 = new CheckBox_0 , $setTextOrHtml(f_CheckBox35.directionalTextHelper, '25 p\xE9riodes + 10 conversations', false) , f_CheckBox35)) , f_Grid11.element.style['width'] = '100%' , f_Grid11.tableElem['cellSpacing'] = 2 , f_Grid11.tableElem['cellPadding'] = 2 , f_Grid11)) , $add_11(f_VerticalPanel6, (f_Label36 = new Label_0 , f_Label36.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label36.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label36) , f_Label36)) , $add_11(f_VerticalPanel6, (f_Label37 = new Label_0 , f_Label37.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label37.directionalTextHelper, 'Logement - Internat', false) , $updateHorizontalAlignment(f_Label37) , f_Label37)) , $add_11(f_VerticalPanel6, (f_Grid38 = new Grid_0 , $resizeColumns(f_Grid38, 4) , $resizeRows(f_Grid38, 2) , $setWidget_1(f_Grid38, 0, 0, (f_Label39 = new Label_0 , $setTextOrHtml(f_Label39.directionalTextHelper, 'Chambre simple', false) , $updateHorizontalAlignment(f_Label39) , f_Label39)) , $setWidget_1(f_Grid38, 0, 1, (f_CheckBox40 = new CheckBox_0 , $setTextOrHtml(f_CheckBox40.directionalTextHelper, 'Confort plus', false) , f_CheckBox40)) , $setWidget_1(f_Grid38, 0, 2, (f_CheckBox41 = new CheckBox_0 , $setTextOrHtml(f_CheckBox41.directionalTextHelper, 'Confort', false) , f_CheckBox41)) , $setWidget_1(f_Grid38, 0, 3, (f_CheckBox42 = new CheckBox_0 , $setTextOrHtml(f_CheckBox42.directionalTextHelper, 'Standard', false) , f_CheckBox42)) , $setWidget_1(f_Grid38, 1, 0, (f_Label43 = new Label_0 , $setTextOrHtml(f_Label43.directionalTextHelper, 'Chambre \xE0 partager (Deux lits jumeaux)', false) , $updateHorizontalAlignment(f_Label43) , f_Label43)) , $setWidget_1(f_Grid38, 1, 1, (f_CheckBox44 = new CheckBox_0 , $setTextOrHtml(f_CheckBox44.directionalTextHelper, 'Confort plus', false) , f_CheckBox44)) , $setWidget_1(f_Grid38, 1, 2, (f_CheckBox45 = new CheckBox_0 , $setTextOrHtml(f_CheckBox45.directionalTextHelper, 'Confort', false) , f_CheckBox45)) , $setWidget_1(f_Grid38, 1, 3, (f_CheckBox46 = new CheckBox_0 , $setTextOrHtml(f_CheckBox46.directionalTextHelper, 'Standard', false) , f_CheckBox46)) , f_Grid38.element.style['width'] = '100%' , f_Grid38)) , $add_11(f_VerticalPanel6, (f_Label47 = new Label_0 , $setTextOrHtml(f_Label47.directionalTextHelper, "Le nombre de places \xE0 l'internat \xE9tant limit\xE9, une r\xE9servation en avance est recommand\xE9e.\nLes \xE9tudiants doivent arriver le dimanche apr\xE8s-midi et partir le samedi matin.", false) , $updateHorizontalAlignment(f_Label47) , f_Label47)) , $add_11(f_VerticalPanel6, (f_Label48 = new Label_0 , f_Label48.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label48.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label48) , f_Label48)) , $add_11(f_VerticalPanel6, (f_Label49 = new Label_0 , f_Label49.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label49.directionalTextHelper, 'D\xE9p\xF4t pour la cl\xE9', false) , $updateHorizontalAlignment(f_Label49) , f_Label49)) , $add_11(f_VerticalPanel6, (f_Label50 = new Label_0 , $setTextOrHtml(f_Label50.directionalTextHelper, 'Afin de recevoir la cl\xE9 de la chambre, les \xE9tudiants doivent effectuer un d\xE9p\xF4t \xE0 leur arriv\xE9e.\nCe montant leur sera restitu\xE9 \xE0 leur d\xE9part avec le retour de la cl\xE9. Il sera conserv\xE9 en cas de perte de la cl\xE9.', false) , $updateHorizontalAlignment(f_Label50) , f_Label50)) , $add_11(f_VerticalPanel6, (f_Grid51 = new Grid_0 , $resizeColumns(f_Grid51, 4) , $resizeRows(f_Grid51, 1) , $setWidget_1(f_Grid51, 0, 0, (f_Label52 = new Label_0 , $setTextOrHtml(f_Label52.directionalTextHelper, 'Choix de la monnaie du d\xE9p\xF4t', false) , $updateHorizontalAlignment(f_Label52) , f_Label52)) , $setWidget_1(f_Grid51, 0, 1, (f_CheckBox53 = new CheckBox_0 , $setTextOrHtml(f_CheckBox53.directionalTextHelper, 'CHF 100.-', false) , f_CheckBox53)) , $setWidget_1(f_Grid51, 0, 2, (f_CheckBox54 = new CheckBox_0 , $setTextOrHtml(f_CheckBox54.directionalTextHelper, '\u20AC 100.-', false) , f_CheckBox54)) , $setWidget_1(f_Grid51, 0, 3, (f_CheckBox55 = new CheckBox_0 , $setTextOrHtml(f_CheckBox55.directionalTextHelper, 'US$ 100.-', false) , f_CheckBox55)) , f_Grid51.element.style['width'] = '100%' , f_Grid51)) , f_VerticalPanel6.element.style['width'] = '100%' , f_VerticalPanel6)) , $add_9(f_HorizontalPanel5, (f_VerticalPanel56 = new VerticalPanel_0 , $add_11(f_VerticalPanel56, (f_Label57 = new Label_0 , f_Label57.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label57.directionalTextHelper, 'ELEMENTS CHOISIS', false) , $updateHorizontalAlignment(f_Label57) , f_Label57)) , $add_11(f_VerticalPanel56, (f_FlexTable58 = new FlexTable_0 , f_FlexTable58.element.style['width'] = '100%' , f_FlexTable58)) , $add_11(f_VerticalPanel56, (f_Label59 = new Label_0 , $setTextOrHtml(f_Label59.directionalTextHelper, 'Total', false) , $updateHorizontalAlignment(f_Label59) , f_Label59)) , f_VerticalPanel56.element['className'] = 'subSection' , f_VerticalPanel56.element.style['width'] = '250px' , f_VerticalPanel56)) , f_HorizontalPanel5.element.style['width'] = '100%' , f_HorizontalPanel5.table['cellSpacing'] = 10 , f_HorizontalPanel5)) , $add_7(f_FlowPanel4, (f_VerticalPanel60 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel60, ALIGN_RIGHT) , $add_11(f_VerticalPanel60, (f_HorizontalPanel61 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel61, ALIGN_RIGHT) , $add_9(f_HorizontalPanel61, (f_Button62 = new Button_0 , $setHTML(f_Button62, (sb = new StringBuilder_0 , $append_1(sb.data, 'Pr\xE9c\xE9dant') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data))).html) , f_Button62)) , $add_9(f_HorizontalPanel61, (cmdNextStep = new Button_0 , $setHTML(cmdNextStep, (sb_0 = new StringBuilder_0 , $append_1(sb_0.data, 'Next Step') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb_0.data))).html) , $setInnerText(cmdNextStep.element, 'Suivant') , $addDomHandler(cmdNextStep, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdNextStep)) , f_HorizontalPanel61.element.style['width'] = '20%' , f_HorizontalPanel61.table['cellSpacing'] = 10 , f_HorizontalPanel61)) , f_VerticalPanel60.element.style['width'] = '100%' , f_VerticalPanel60)) , f_FlowPanel4.element.style['width'] = '900px' , f_FlowPanel4)) , f_VerticalPanel1.element.style['height'] = '' , f_VerticalPanel1.element.style['width'] = '100%' , f_VerticalPanel1));
  this$static.owner.main = main;
  return main;
}

function ApplicationStep2View_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ApplicationStep2View_BinderImpl$Widgets$1_0(this);
  this.owner = owner;
}

defineSeed(1140, 1, {}, ApplicationStep2View_BinderImpl$Widgets_0);
_.owner = null;
function ApplicationStep2View_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1141, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep2View_BinderImpl$Widgets$1_0);
_.onClick = function onClick_4(event_0){
  $doFire(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep2UiHandlers), Q$ApplicationStep2Presenter).eventBus, new ApplicationStep2CompletedEvent_0, null);
}
;
_.this$1 = null;
function $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep2$ApplicationStep2Presenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep2$ApplicationStep2Presenter$_annotation$$none$$) {
    result = new ApplicationStep2Presenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep2$ApplicationStep2View$_annotation$$none$$(this$static), $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep2$ApplicationStep2Presenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep2$ApplicationStep2Presenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep2$ApplicationStep2Presenter$_annotation$$none$$;
}

function $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep2$ApplicationStep2View$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep2$ApplicationStep2View$_annotation$$none$$) {
    result = new ApplicationStep2View_0(new ApplicationStep2View_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep2$ApplicationStep2View$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep2$ApplicationStep2View$_annotation$$none$$;
}

defineSeed(1145, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_142(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep2$ApplicationStep2Presenter$_annotation$$none$$(this.this$1.this$0));
}
;
defineSeed(1236, 706, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationPaymentEvent$ApplicationPaymentHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler, Q$MainPagePresenter, Q$MainPageUiHandler]));
_.onApplicationStep2Completed = function onApplicationStep2Completed(event_0){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationstep3', true);
}
;
defineSeed(1238, 730, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationPaymentEvent$ApplicationPaymentHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler]));
_.onApplicationStep2Completed = function onApplicationStep2Completed_0(event_0){
  $getPresenter(this, new MainPagePresenterMyProxyImpl$8_0(this.eventBus));
}
;
function $success_52(){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new MainPagePresenterMyProxyImpl$8$1_0);
}

function MainPagePresenterMyProxyImpl$8_0($anonymous0){
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(1261, 719, {}, MainPagePresenterMyProxyImpl$8_0);
_.success = function success_54(presenter){
  $success_52(dynamicCast(presenter, Q$MainPagePresenter));
}
;
function MainPagePresenterMyProxyImpl$8$1_0(){
}

defineSeed(1262, 1, {}, MainPagePresenterMyProxyImpl$8$1_0);
_.execute_0 = function execute_82(){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationstep3', true);
}
;
var Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2Presenter_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2Presenter', 1135), Lcom_lemania_eprospects_client_event_ApplicationStep2CompletedEvent_2_classLit = createForClass('com.lemania.eprospects.client.event.', 'ApplicationStep2CompletedEvent', 764), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$8_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$8', 1261), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$8$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$8$1', 1262), Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2View_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2View', 1138), Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2View_1BinderImpl_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2View_BinderImpl', 1139), Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2View_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2View_BinderImpl$Widgets', 1140), Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2View_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2View_BinderImpl$Widgets$1', 1141);
$entry(onLoad)(5);
