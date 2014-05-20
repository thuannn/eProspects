function ContactPresenter_0(eventBus, view, proxy){
  Presenter_1.call(this, eventBus, view, proxy, null);
}

defineSeed(1370, 717, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$NewApplicationNotificationEvent$NewApplicationNotificationHandler, Q$ContactPresenter, Q$ContactUiHandler]), ContactPresenter_0);
_.onApplicationStep5Completed = function onApplicationStep5Completed(event_0){
  $onApplicationStep5Completed(this);
}
;
_.onBind = function onBind_36(){
  dynamicCast(this.view, Q$ContactPresenter$MyView).setUiHandlers(this);
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_67(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onNewApplicationNotification = function onNewApplicationNotification(event_0){
  $onNewApplicationNotification(this, event_0);
}
;
_.onReset = function onReset_35(){
  $doFire(this.eventBus, new PageAfterSelectEvent_0('!contact'), null);
}
;
_.revealInParent = function revealInParent_27(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.currentUser = null;
function $onCmdSendClick(this$static){
  !!this$static.uiHandlers && $sendMessage(dynamicCast(this$static.uiHandlers, Q$ContactUiHandler), 'thuannn@gmail.com', 'Contact - Lemania Summer School', $getPropertyString(this$static.txtLastName.element, 'value') + '\n\n' + $getPropertyString(this$static.txtFirstName.element, 'value') + '\n\n' + $getPropertyString(this$static.txtEmail.element, 'value') + '\n\n' + $getPropertyString(this$static.txtMessage.element, 'value'));
}

function ContactView_0(){
  this.widget = $build_f_HTMLPanel1(new ContactView_BinderImpl$Widgets_0(this));
}

defineSeed(1383, 722, makeCastMap([Q$IsWidget, Q$ContactPresenter$MyView]), ContactView_0);
_.asWidget = function asWidget_3(){
  return this.widget;
}
;
_.txtEmail = null;
_.txtFirstName = null;
_.txtLastName = null;
_.txtMessage = null;
_.widget = null;
function ContactView_BinderImpl_0(){
}

defineSeed(1384, 1, {}, ContactView_BinderImpl_0);
function $build_f_HTMLPanel1(this$static){
  var attachRecord0, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_VerticalPanel4, f_Label5, f_Grid6, f_Label7, txtLastName, f_Label8, txtFirstName, f_Label9, txtEmail, f_Label10, txtMessage, f_Label11, cmdSend, sb;
  f_HTMLPanel1 = new HTMLPanel_0($html2(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord0 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord0.origParent?$insertBefore(attachRecord0.origParent, attachRecord0.element, attachRecord0.origSibling):orphan(attachRecord0.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_11(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'CONTACT', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_11(f_VerticalPanel2, (f_VerticalPanel4 = new VerticalPanel_0 , $add_11(f_VerticalPanel4, (f_Label5 = new Label_0 , $setTextOrHtml(f_Label5.directionalTextHelper, 'Nous sommes \xE0 votre disposition pour toutes vos questions ou conseils. Merci de nous contacter en utilisant le formulaire ci-dessous.', false) , $updateHorizontalAlignment(f_Label5) , f_Label5)) , $add_11(f_VerticalPanel4, (f_Grid6 = new Grid_0 , $resizeColumns(f_Grid6, 2) , $resizeRows(f_Grid6, 5) , $setWidget_1(f_Grid6, 0, 0, (f_Label7 = new Label_0 , $setTextOrHtml(f_Label7.directionalTextHelper, 'Nom :', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $setWidget_1(f_Grid6, 0, 1, (txtLastName = new TextBox_0 , txtLastName.element['className'] = 'sis_textbox' , this$static.owner.txtLastName = txtLastName , txtLastName)) , $setWidget_1(f_Grid6, 1, 0, (f_Label8 = new Label_0 , $setTextOrHtml(f_Label8.directionalTextHelper, 'Pr\xE9nom :', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $setWidget_1(f_Grid6, 1, 1, (txtFirstName = new TextBox_0 , txtFirstName.element['className'] = 'sis_textbox' , this$static.owner.txtFirstName = txtFirstName , txtFirstName)) , $setWidget_1(f_Grid6, 2, 0, (f_Label9 = new Label_0 , $setTextOrHtml(f_Label9.directionalTextHelper, 'Email :', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $setWidget_1(f_Grid6, 2, 1, (txtEmail = new TextBox_0 , txtEmail.element['className'] = 'sis_textbox' , this$static.owner.txtEmail = txtEmail , txtEmail)) , $setWidget_1(f_Grid6, 3, 0, (f_Label10 = new Label_0 , $setTextOrHtml(f_Label10.directionalTextHelper, 'Message :', false) , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $setWidget_1(f_Grid6, 3, 1, (txtMessage = new TextArea_1 , txtMessage.element.style['height'] = '300px' , txtMessage.element.style['width'] = '478px' , this$static.owner.txtMessage = txtMessage , txtMessage)) , $setWidget_1(f_Grid6, 4, 0, (f_Label11 = new Label_0 , f_Label11.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label11.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , $setWidget_1(f_Grid6, 4, 1, (cmdSend = new Button_0 , $setHTML(cmdSend, (sb = new StringBuilder_0 , $append_1(sb.data, 'Envoyer') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data))).html) , cmdSend.element.style['width'] = '100px' , $addDomHandler(cmdSend, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdSend)) , f_Grid6.element['className'] = 'subSection' , f_Grid6.element.style['width'] = '600px' , f_Grid6.tableElem['cellPadding'] = 5 , f_Grid6)) , f_VerticalPanel4.element.style['width'] = '100%' , f_VerticalPanel4.table['cellSpacing'] = 20 , f_VerticalPanel4)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function ContactView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ContactView_BinderImpl$Widgets$1_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1385, 1, {}, ContactView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function ContactView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1386, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ContactView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_37(event_0){
  $onCmdSendClick(this.this$1.owner);
}
;
_.this$1 = null;
function $html2(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_1(sb.data, "<span id='");
  $append_11(sb, htmlEscape(arg0));
  $append_1(sb.data, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data));
}

function $get_Key$type$com$lemania$eprospects$client$presenter$contact$ContactPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$contact$ContactPresenter$_annotation$$none$$) {
    result = new ContactPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$eprospects$client$presenter$contact$ContactView$_annotation$$none$$(this$static), $get_Key$type$com$lemania$eprospects$client$presenter$contact$ContactPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$contact$ContactPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$contact$ContactPresenter$_annotation$$none$$;
}

function $get_Key$type$com$lemania$eprospects$client$presenter$contact$ContactView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$contact$ContactView$_annotation$$none$$) {
    result = new ContactView_0(new ContactView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$contact$ContactView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$contact$ContactView$_annotation$$none$$;
}

defineSeed(1390, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_197(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$eprospects$client$presenter$contact$ContactPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
var Lcom_lemania_eprospects_client_presenter_contact_ContactPresenter_2_classLit = createForClass('com.lemania.eprospects.client.presenter.contact.', 'ContactPresenter', 1370), Lcom_lemania_eprospects_client_presenter_contact_ContactView_2_classLit = createForClass('com.lemania.eprospects.client.presenter.contact.', 'ContactView', 1383), Lcom_lemania_eprospects_client_presenter_contact_ContactView_1BinderImpl_2_classLit = createForClass('com.lemania.eprospects.client.presenter.contact.', 'ContactView_BinderImpl', 1384), Lcom_lemania_eprospects_client_presenter_contact_ContactView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.eprospects.client.presenter.contact.', 'ContactView_BinderImpl$Widgets', 1385), Lcom_lemania_eprospects_client_presenter_contact_ContactView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.contact.', 'ContactView_BinderImpl$Widgets$1', 1386);
$entry(onLoad)(9);
