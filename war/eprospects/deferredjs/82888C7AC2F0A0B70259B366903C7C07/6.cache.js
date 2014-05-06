function ApplicationStep3CompletedEvent_0(){
  $clinit_ApplicationStep3CompletedEvent();
}

defineSeed(756, 238, {}, ApplicationStep3CompletedEvent_0);
_.dispatch_0 = function dispatch_38(handler){
  dynamicCast(handler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler).onApplicationStep3Completed(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_39(){
  return TYPE_39;
}
;
function ApplicationStep3Presenter_0(eventBus, view, proxy){
  $clinit_ApplicationStep3Presenter();
  Presenter_0.call(this, eventBus, view, proxy, ($clinit_MainPagePresenter() , TYPE_SetMainContent));
  dynamicCast(this.view, Q$ApplicationStep3Presenter$MyView).setUiHandlers(this);
}

defineSeed(1137, 697, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ApplicationStep3Presenter, Q$ApplicationStep3UiHandlers]), ApplicationStep3Presenter_0);
_.onBind = function onBind_34(){
}
;
_.onReset = function onReset_33(){
}
;
function ApplicationStep3View_0(){
  $initWidget_0(this, $build_main_4(new ApplicationStep3View_BinderImpl$Widgets_0(this)));
}

defineSeed(1140, 702, makeCastMap([Q$IsWidget, Q$ApplicationStep3Presenter$MyView]), ApplicationStep3View_0);
_.setInSlot = function setInSlot_6(slot, content_0){
  slot === ($clinit_ApplicationStep3Presenter() , SLOT_ApplicationStep3)?this.main.setWidget(!content_0?null:!content_0.view?null:content_0.view.asWidget()):undefined;
}
;
_.main = null;
function ApplicationStep3View_BinderImpl_0(){
}

defineSeed(1141, 1, {}, ApplicationStep3View_BinderImpl_0);
function $build_main_4(this$static){
  var main, f_VerticalPanel1, f_Label2, f_Label3, f_FlowPanel4, f_HorizontalPanel5, f_VerticalPanel64, f_VerticalPanel6, f_Label7, f_CheckBox8, f_HorizontalPanel9, f_Label10, f_TextBox11, f_Label12, f_Label13, f_HorizontalPanel14, f_Label15, f_Label17, f_CheckBox18, f_CheckBox19, f_HorizontalPanel20, f_Label21, f_CheckBox22, f_CheckBox23, f_Label24, f_HorizontalPanel25, f_Label26, f_TextBox27, f_Grid28, f_Label29, f_Label30, f_Label32, f_Label34, f_Label35, f_Label37, f_Label39, f_Label40, f_CheckBox41, f_Label42, f_Label43, f_Label44, f_Label45, f_Label46, f_HorizontalPanel47, f_RadioButton48, f_RadioButton49, f_Label50, f_Label52, f_Label53, f_Label54, f_Label55, f_CheckBox56, f_CheckBox57, f_CheckBox58, f_Label59, f_VerticalPanel60, f_Label61, f_FlexTable62, f_Label63, f_HorizontalPanel65, f_Button66, sb, cmdNextStep, sb_0;
  main = new SimplePanel_0;
  $add_4(main, (f_VerticalPanel1 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel1, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $add_11(f_VerticalPanel1, (f_Label2 = new Label_0 , f_Label2.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label2.directionalTextHelper, 'SERVICE FACULTATIFS', false) , $updateHorizontalAlignment(f_Label2) , f_Label2)) , $add_11(f_VerticalPanel1, (f_Label3 = new Label_0 , $setTextOrHtml(f_Label3.directionalTextHelper, 'Step 3 of 5', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_11(f_VerticalPanel1, (f_FlowPanel4 = new FlowPanel_0 , $add_7(f_FlowPanel4, (f_HorizontalPanel5 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel5, (f_VerticalPanel6 = new VerticalPanel_0 , $add_11(f_VerticalPanel6, (f_Label7 = new Label_0 , f_Label7.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label7.directionalTextHelper, 'Cours priv\xE9', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $add_11(f_VerticalPanel6, (f_CheckBox8 = new CheckBox_0 , f_CheckBox8.element['className'] = 'fieldTitle' , $setTextOrHtml(f_CheckBox8.directionalTextHelper, 'Cours priv\xE9 de langue 90 CHF par p\xE9riode', false) , f_CheckBox8)) , $add_11(f_VerticalPanel6, (f_HorizontalPanel9 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel9, (f_Label10 = new Label_0 , $setTextOrHtml(f_Label10.directionalTextHelper, 'Si OUI, veuillez pr\xE9ciser le nombre de pr\xE9riodes souhait\xE9es par semaine :', false) , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $add_9(f_HorizontalPanel9, (f_TextBox11 = new TextBox_0 , f_TextBox11.element['className'] = 'sis_textbox' , f_TextBox11)) , f_HorizontalPanel9.element.style['width'] = '100%' , f_HorizontalPanel9)) , $add_11(f_VerticalPanel6, (f_Label12 = new Label_0 , f_Label12.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label12.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label12) , f_Label12)) , $add_11(f_VerticalPanel6, (f_Label13 = new Label_0 , f_Label13.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label13.directionalTextHelper, 'Service de Limousine', false) , $updateHorizontalAlignment(f_Label13) , f_Label13)) , $add_11(f_VerticalPanel6, (f_HorizontalPanel14 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel14, (f_Label15 = new Label_0 , $setTextOrHtml(f_Label15.directionalTextHelper, 'Service de Limousine', false) , $updateHorizontalAlignment(f_Label15) , f_Label15)) , $add_9(f_HorizontalPanel14, new ListBox_0) , $add_9(f_HorizontalPanel14, (f_Label17 = new Label_0 , $setTextOrHtml(f_Label17.directionalTextHelper, "l'aeroport de", false) , $updateHorizontalAlignment(f_Label17) , f_Label17)) , $add_9(f_HorizontalPanel14, (f_CheckBox18 = new CheckBox_0 , $setTextOrHtml(f_CheckBox18.directionalTextHelper, 'Gen\xE8ve, CHF 260.- / trajet', false) , f_CheckBox18)) , $add_9(f_HorizontalPanel14, (f_CheckBox19 = new CheckBox_0 , $setTextOrHtml(f_CheckBox19.directionalTextHelper, 'Zurich, CHF 960.- / trajet', false) , f_CheckBox19)) , f_HorizontalPanel14.element.style['width'] = '100%' , f_HorizontalPanel14)) , $add_11(f_VerticalPanel6, (f_HorizontalPanel20 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel20, (f_Label21 = new Label_0 , $setTextOrHtml(f_Label21.directionalTextHelper, "Service de Limousine, aller-retour vers l'aeroport de", false) , $updateHorizontalAlignment(f_Label21) , f_Label21)) , $add_9(f_HorizontalPanel20, (f_CheckBox22 = new CheckBox_0 , $setTextOrHtml(f_CheckBox22.directionalTextHelper, 'Gen\xE8ve, CHF 520.-', false) , f_CheckBox22)) , $add_9(f_HorizontalPanel20, (f_CheckBox23 = new CheckBox_0 , $setTextOrHtml(f_CheckBox23.directionalTextHelper, "Zurich, CHF 1'920.-", false) , f_CheckBox23)) , f_HorizontalPanel20.element.style['width'] = '100%' , f_HorizontalPanel20)) , $add_11(f_VerticalPanel6, (f_Label24 = new Label_0 , $setTextOrHtml(f_Label24.directionalTextHelper, 'Information du vol pour le transfert a\xE9roport, si d\xE9j\xE0 connus', false) , $updateHorizontalAlignment(f_Label24) , f_Label24)) , $add_11(f_VerticalPanel6, (f_HorizontalPanel25 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel25, (f_Label26 = new Label_0 , f_Label26.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label26.directionalTextHelper, 'Nom de la compagnie', false) , $updateHorizontalAlignment(f_Label26) , f_Label26)) , $add_9(f_HorizontalPanel25, (f_TextBox27 = new TextBox_0 , f_TextBox27.element['className'] = 'sis_textbox' , f_TextBox27)) , f_HorizontalPanel25.element.style['width'] = '100%' , f_HorizontalPanel25)) , $add_11(f_VerticalPanel6, (f_Grid28 = new Grid_0 , $resizeColumns(f_Grid28, 5) , $resizeRows(f_Grid28, 2) , $setWidget_1(f_Grid28, 0, 0, (f_Label29 = new Label_0 , $setTextOrHtml(f_Label29.directionalTextHelper, 'Date arriv\xE9e', false) , $updateHorizontalAlignment(f_Label29) , f_Label29)) , $setWidget_1(f_Grid28, 0, 1, (f_Label30 = new Label_0 , $setTextOrHtml(f_Label30.directionalTextHelper, 'Num\xE9ro de vol', false) , $updateHorizontalAlignment(f_Label30) , f_Label30)) , $setWidget_1(f_Grid28, 0, 2, new TextBox_0) , $setWidget_1(f_Grid28, 0, 3, (f_Label32 = new Label_0 , $setTextOrHtml(f_Label32.directionalTextHelper, "Heure d'arriv\xE9e", false) , $updateHorizontalAlignment(f_Label32) , f_Label32)) , $setWidget_1(f_Grid28, 0, 4, new TextBox_0) , $setWidget_1(f_Grid28, 1, 0, (f_Label34 = new Label_0 , $setTextOrHtml(f_Label34.directionalTextHelper, 'Date d\xE9part', false) , $updateHorizontalAlignment(f_Label34) , f_Label34)) , $setWidget_1(f_Grid28, 1, 1, (f_Label35 = new Label_0 , $setTextOrHtml(f_Label35.directionalTextHelper, 'Num\xE9ro de vol', false) , $updateHorizontalAlignment(f_Label35) , f_Label35)) , $setWidget_1(f_Grid28, 1, 2, new TextBox_0) , $setWidget_1(f_Grid28, 1, 3, (f_Label37 = new Label_0 , $setTextOrHtml(f_Label37.directionalTextHelper, 'Heure de d\xE9part', false) , $updateHorizontalAlignment(f_Label37) , f_Label37)) , $setWidget_1(f_Grid28, 1, 4, new TextBox_0) , f_Grid28.element.style['width'] = '100%' , f_Grid28)) , $add_11(f_VerticalPanel6, (f_Label39 = new Label_0 , f_Label39.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label39.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label39) , f_Label39)) , $add_11(f_VerticalPanel6, (f_Label40 = new Label_0 , f_Label40.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label40.directionalTextHelper, 'Lettre de Visa', false) , $updateHorizontalAlignment(f_Label40) , f_Label40)) , $add_11(f_VerticalPanel6, (f_CheckBox41 = new CheckBox_0 , $setTextOrHtml(f_CheckBox41.directionalTextHelper, 'Envoi par courrier express de la lettre de Visa, facture ou lettre de confirmation : CHF 80.-', false) , f_CheckBox41)) , $add_11(f_VerticalPanel6, (f_Label42 = new Label_0 , $setTextOrHtml(f_Label42.directionalTextHelper, "Note : La lettre de visa pour les \xE9tudiants \xE9trangers (hors UE) est n\xE9cessaire. Par courrier normal (envoie gratuit), cela prend 5-7 jours minimum ouvr\xE9s pour recevoir la lettre depuis la Suisse vers l'\xE9tranger. Veuillez tenir compte des d\xE9lais d'obtention du visa, votre demande d'inscription et le paiement doivent, si possible, nous parvenir au minimum quatre semaines avant votre date d'arriv\xE9e pour les cours d'\xE9t\xE9.", false) , $updateHorizontalAlignment(f_Label42) , f_Label42)) , $add_11(f_VerticalPanel6, (f_Label43 = new Label_0 , f_Label43.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label43.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label43) , f_Label43)) , $add_11(f_VerticalPanel6, (f_Label44 = new Label_0 , f_Label44.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label44.directionalTextHelper, 'Argent de poche en d\xE9p\xF4t', false) , $updateHorizontalAlignment(f_Label44) , f_Label44)) , $add_11(f_VerticalPanel6, (f_Label45 = new Label_0 , $setTextOrHtml(f_Label45.directionalTextHelper, 'Pour les \xE9tudiants internes seulement : Argent de poche en d\xE9p\xF4t', false) , $updateHorizontalAlignment(f_Label45) , f_Label45)) , $add_11(f_VerticalPanel6, (f_Label46 = new Label_0 , $setTextOrHtml(f_Label46.directionalTextHelper, "Souhaitez-vous verser de l'argent de poche suppl\xE9mentaire au profit de votre enfant ?", false) , $updateHorizontalAlignment(f_Label46) , f_Label46)) , $add_11(f_VerticalPanel6, (f_HorizontalPanel47 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel47, (f_RadioButton48 = new RadioButton_0 , $setTextOrHtml(f_RadioButton48.directionalTextHelper, 'Oui', false) , f_RadioButton48)) , $add_9(f_HorizontalPanel47, (f_RadioButton49 = new RadioButton_0 , $setTextOrHtml(f_RadioButton49.directionalTextHelper, 'Non', false) , f_RadioButton49)) , $add_9(f_HorizontalPanel47, (f_Label50 = new Label_0 , $setTextOrHtml(f_Label50.directionalTextHelper, 'Si oui, montant en CHF', false) , $updateHorizontalAlignment(f_Label50) , f_Label50)) , $add_9(f_HorizontalPanel47, new TextBox_0) , f_HorizontalPanel47.element.style['width'] = '100%' , f_HorizontalPanel47)) , $add_11(f_VerticalPanel6, (f_Label52 = new Label_0 , $setTextOrHtml(f_Label52.directionalTextHelper, "L'\xE9cole conserve cet argent dans un coffre-fort et donne le montant n\xE9cessaire \xE0 l'\xE9l\xE8ve en cas de besoin.", false) , $updateHorizontalAlignment(f_Label52) , f_Label52)) , $add_11(f_VerticalPanel6, (f_Label53 = new Label_0 , f_Label53.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label53.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label53) , f_Label53)) , $add_11(f_VerticalPanel6, (f_Label54 = new Label_0 , f_Label54.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label54.directionalTextHelper, 'Forfait suppl\xE9mentaire', false) , $updateHorizontalAlignment(f_Label54) , f_Label54)) , $add_11(f_VerticalPanel6, (f_Label55 = new Label_0 , $setTextOrHtml(f_Label55.directionalTextHelper, 'Pour les \xE9tudiants externes seulement', false) , $updateHorizontalAlignment(f_Label55) , f_Label55)) , $add_11(f_VerticalPanel6, (f_CheckBox56 = new CheckBox_0 , $setTextOrHtml(f_CheckBox56.directionalTextHelper, 'Forfait 5 repas du midi pour les externes : CHF 80.- par semaine', false) , f_CheckBox56)) , $add_11(f_VerticalPanel6, (f_CheckBox57 = new CheckBox_0 , $setTextOrHtml(f_CheckBox57.directionalTextHelper, "Pack d'activit\xE9s pour les \xE9l\xE8ves externes : 5-6 activit\xE9s, du lundi au vendredi et/ou samedi, les apr\xE8s-midi : CHF 230.-", false) , f_CheckBox57)) , $add_11(f_VerticalPanel6, (f_CheckBox58 = new CheckBox_0 , $setTextOrHtml(f_CheckBox58.directionalTextHelper, 'Assurance sant\xE9 facultative CHF 190.-', false) , f_CheckBox58)) , $add_11(f_VerticalPanel6, (f_Label59 = new Label_0 , $setTextOrHtml(f_Label59.directionalTextHelper, 'Note : Toutes les activit\xE9s et repas sont inclus pour les \xE9l\xE8ves internes.', false) , $updateHorizontalAlignment(f_Label59) , f_Label59)) , f_VerticalPanel6.element.style['width'] = '100%' , f_VerticalPanel6)) , $add_9(f_HorizontalPanel5, (f_VerticalPanel60 = new VerticalPanel_0 , $add_11(f_VerticalPanel60, (f_Label61 = new Label_0 , f_Label61.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label61.directionalTextHelper, 'ELEMENTS CHOISIS', false) , $updateHorizontalAlignment(f_Label61) , f_Label61)) , $add_11(f_VerticalPanel60, (f_FlexTable62 = new FlexTable_0 , f_FlexTable62.element.style['width'] = '100%' , f_FlexTable62)) , $add_11(f_VerticalPanel60, (f_Label63 = new Label_0 , $setTextOrHtml(f_Label63.directionalTextHelper, 'Total', false) , $updateHorizontalAlignment(f_Label63) , f_Label63)) , f_VerticalPanel60.element['className'] = 'subSection' , f_VerticalPanel60.element.style['width'] = '250px' , f_VerticalPanel60)) , f_HorizontalPanel5.element.style['width'] = '100%' , f_HorizontalPanel5.table['cellSpacing'] = 10 , f_HorizontalPanel5)) , $add_7(f_FlowPanel4, (f_VerticalPanel64 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel64, ALIGN_RIGHT) , $add_11(f_VerticalPanel64, (f_HorizontalPanel65 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel65, ALIGN_RIGHT) , $add_9(f_HorizontalPanel65, (f_Button66 = new Button_0 , $setHTML(f_Button66, (sb = new StringBuilder_0 , sb.impl.string += 'Pr\xE9c\xE9dant' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string)).html) , f_Button66)) , $add_9(f_HorizontalPanel65, (cmdNextStep = new Button_0 , $setHTML(cmdNextStep, (sb_0 = new StringBuilder_0 , sb_0.impl.string += 'Next Step' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb_0.impl.string)).html) , $setInnerText(cmdNextStep.element, 'Suivant') , $addDomHandler(cmdNextStep, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdNextStep)) , f_HorizontalPanel65.element.style['width'] = '20%' , f_HorizontalPanel65.table['cellSpacing'] = 10 , f_HorizontalPanel65)) , f_VerticalPanel64.element.style['width'] = '100%' , f_VerticalPanel64)) , f_FlowPanel4.element.style['width'] = '900px' , f_FlowPanel4)) , f_VerticalPanel1.element.style['height'] = '' , f_VerticalPanel1.element.style['width'] = '100%' , f_VerticalPanel1));
  this$static.owner.main = main;
  return main;
}

function ApplicationStep3View_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ApplicationStep3View_BinderImpl$Widgets$1_0(this);
  this.owner = owner;
}

defineSeed(1142, 1, {}, ApplicationStep3View_BinderImpl$Widgets_0);
_.owner = null;
function ApplicationStep3View_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1143, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep3View_BinderImpl$Widgets$1_0);
_.onClick = function onClick_5(event_0){
  $doFire(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep3UiHandlers), Q$ApplicationStep3Presenter).eventBus, new ApplicationStep3CompletedEvent_0, null);
}
;
_.this$1 = null;
function $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep3$ApplicationStep3Presenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep3$ApplicationStep3Presenter$_annotation$$none$$) {
    result = new ApplicationStep3Presenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep3$ApplicationStep3View$_annotation$$none$$(this$static), $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep3$ApplicationStep3Presenter$MyProxy$_annotation$$none$$(this$static));
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

defineSeed(1147, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_143(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep3$ApplicationStep3Presenter$_annotation$$none$$(this.this$1.this$0));
}
;
defineSeed(1227, 697, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationPaymentEvent$ApplicationPaymentHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler, Q$MainPagePresenter, Q$MainPageUiHandler]));
_.onApplicationStep3Completed = function onApplicationStep3Completed(event_0){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationstep4', true);
}
;
defineSeed(1229, 721, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationPaymentEvent$ApplicationPaymentHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler]));
_.onApplicationStep3Completed = function onApplicationStep3Completed_0(event_0){
  $getPresenter(this, new MainPagePresenterMyProxyImpl$13_0(this.eventBus));
}
;
function $success_45(){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new MainPagePresenterMyProxyImpl$13$1_0);
}

function MainPagePresenterMyProxyImpl$13_0($anonymous0){
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(1238, 710, {}, MainPagePresenterMyProxyImpl$13_0);
_.success = function success_47(presenter){
  $success_45(dynamicCast(presenter, Q$MainPagePresenter));
}
;
function MainPagePresenterMyProxyImpl$13$1_0(){
}

defineSeed(1239, 1, {}, MainPagePresenterMyProxyImpl$13$1_0);
_.execute_1 = function execute_73(){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationstep4', true);
}
;
var Lcom_lemania_eprospects_client_presenter_applicationstep3_ApplicationStep3Presenter_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep3.', 'ApplicationStep3Presenter', 1137), Lcom_lemania_eprospects_client_event_ApplicationStep3CompletedEvent_2_classLit = createForClass('com.lemania.eprospects.client.event.', 'ApplicationStep3CompletedEvent', 756), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$13_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$13', 1238), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$13$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$13$1', 1239), Lcom_lemania_eprospects_client_presenter_applicationstep3_ApplicationStep3View_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep3.', 'ApplicationStep3View', 1140), Lcom_lemania_eprospects_client_presenter_applicationstep3_ApplicationStep3View_1BinderImpl_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep3.', 'ApplicationStep3View_BinderImpl', 1141), Lcom_lemania_eprospects_client_presenter_applicationstep3_ApplicationStep3View_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep3.', 'ApplicationStep3View_BinderImpl$Widgets', 1142), Lcom_lemania_eprospects_client_presenter_applicationstep3_ApplicationStep3View_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep3.', 'ApplicationStep3View_BinderImpl$Widgets$1', 1143);
$entry(onLoad)(6);
