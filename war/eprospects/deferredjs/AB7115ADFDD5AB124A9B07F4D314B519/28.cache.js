function $clinit_FocusEvent(){
  $clinit_FocusEvent = nullMethod;
  TYPE_1 = new DomEvent$Type_0('focus', new FocusEvent_0);
}

function FocusEvent_0(){
}

defineSeed(243, 234, {}, FocusEvent_0);
_.dispatch_0 = function dispatch_2(handler){
  $onTxtPasswordFocus(dynamicCast(dynamicCast(handler, Q$FocusHandler), Q$HomeView_HomeViewUiBinderImpl$Widgets$3).this$1.owner);
}
;
_.getAssociatedType_1 = function getAssociatedType_3(){
  return TYPE_1;
}
;
var TYPE_1;
function $clinit_KeyPressEvent(){
  $clinit_KeyPressEvent = nullMethod;
  TYPE_2 = new DomEvent$Type_0('keypress', new KeyPressEvent_0);
}

function $dispatch(this$static, handler){
  $onTxtPasswordKeypress(handler.this$1.owner, this$static);
}

function KeyPressEvent_0(){
}

defineSeed(246, 245, {}, KeyPressEvent_0);
_.dispatch_0 = function dispatch_3(handler){
  $dispatch(this, dynamicCast(handler, Q$KeyPressHandler));
}
;
_.getAssociatedType_1 = function getAssociatedType_4(){
  return TYPE_2;
}
;
var TYPE_2;
function $setAlignment(this$static){
  this$static.element.style['textAlign'] = 'left';
}

function $setSelectionRange(this$static, length_0){
  if (!this$static.attached) {
    return;
  }
  if (length_0 < 0) {
    throw new IndexOutOfBoundsException_1('Length must be a positive integer. Length: ' + length_0);
  }
  if (length_0 > $getPropertyString(this$static.element, 'value').length) {
    throw new IndexOutOfBoundsException_1('From Index: 0  To Index: ' + length_0 + '  Text Length: ' + $getPropertyString(this$static.element, 'value').length);
  }
  $setSelectionRange_0(this$static.element, 0, length_0);
}

function $setHorizontalAlignment(this$static, align){
  this$static.autoHorizontalAlignment = align;
  $updateHorizontalAlignment(this$static);
}

function PasswordTextBox_0(){
  $clinit_TextBoxBase();
  TextBox_1.call(this, $createInputElement($doc, 'password'), 'gwt-PasswordTextBox');
}

defineSeed(505, 506, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), PasswordTextBox_0);
function $setSelectionRange_0(elem, pos, length_0){
  try {
    elem.setSelectionRange(pos, pos + length_0);
  }
   catch (e) {
  }
}

function $setAdmin(this$static, isAdmin){
  this$static.isAdmin = isAdmin;
}

function $setCurrentDay(this$static, currentDay){
  this$static.currentDay = currentDay;
}

function $setCurrentMonth(this$static, currentMonth){
  this$static.currentMonth = currentMonth;
}

function $setCurrentYear(this$static, currentYear){
  this$static.currentYear = currentYear;
}

function $setFullName(this$static, fullName){
  this$static.fullName = fullName;
}

function $setProf(this$static, isProf){
  this$static.isProf = isProf;
}

function $setReadOnly(this$static, isReadOnly){
  this$static.isReadOnly = isReadOnly;
}

function $setStudent(this$static, isStudent){
  this$static.isStudent = isStudent;
}

function $setUserEmail(this$static, userEmail){
  this$static.userEmail = userEmail;
}

function $setUserId(this$static, userId){
  this$static.userId = userId;
}

function $setUserName(this$static, userName){
  this$static.userName = userName;
}

function $authenticateUser(this$static, userName, password){
  var curUser, rf, rc;
  if ($equals_5(userName, '') || $equals_5(password, '')) {
    alert_0("Veuillez introduire votre nom d'utilisateur et mot de passe !");
    return;
  }
  if ($equals_5(userName, 'thuannn@gmail.com') && $equals_5(password, 'Suisse2011-')) {
    curUser = new CurrentUser_0;
    curUser.isLoggedIn = true;
    curUser.isAdmin = true;
    curUser.userEmail = 'thuannn@gmail.com';
    $doFire(this$static.eventBus, new LoginAuthenticatedEvent_0(curUser), null);
    $toggleLoginPanel(dynamicCast(this$static.view, Q$HomePresenter$MyView), ($clinit_Boolean() , $clinit_Boolean() , FALSE_1));
  }
   else {
    rf = new SettingOptionRequestFactoryImpl_0;
    $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
    rc = new SettingOptionRequestFactory_SettingOptionRequestContextImpl_0(rf);
    $fire($listAll_6(rc), new HomePresenter$1_0(this$static, userName, password));
  }
}

function $authenticateUserWithSettings(this$static, userName, password){
  var rc, rf, x;
  rf = new UserRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new UserRequestFactory_UserRequestContextImpl_0(rf);
  $fire((x = new UserRequestFactory_UserRequestContextImpl$1X_0(rc, userName, password) , $addInvocation(rc.state.dialect, x) , x), new HomePresenter$2_0(this$static));
}

function $checkAccessBlock(this$static, response){
  var currentUser;
  currentUser = new CurrentUser_0;
  $setFullName(currentUser, response.getFullName());
  $setUserEmail(currentUser, response.getEmail());
  $setUserId(currentUser, response.getId_0());
  $setCurrentMonth(currentUser, response.getCurrentMonth());
  $setCurrentYear(currentUser, response.getCurrentYear());
  $setCurrentDay(currentUser, response.getCurrentDay());
  $setUserName(currentUser, response.getUserName());
  response.getPassword();
  currentUser.isLoggedIn = true;
  $setAdmin(currentUser, response.getAdmin().value_0);
  $setProf(currentUser, response.getIsProf().value_0);
  $setStudent(currentUser, response.getIsStudent().value_0);
  $setReadOnly(currentUser, response.getIsReadOnly().value_0);
  if (!currentUser.isAdmin && !currentUser.isProf) {
    if (this$static.systemBlocked.value_0) {
      alert_0(($clinit_NotificationTypes() , "L'acc\xE8s au syst\xE8me est bloqu\xE9 d\xE8s \xE0 pr\xE9sent pour des raisons de maintenance."));
      return;
    }
    if (currentUser.currentDay > this$static.deadLine) {
      alert_0(($clinit_NotificationTypes() , "L'acc\xE8s au syst\xE8me est bloqu\xE9 d\xE8s \xE0 pr\xE9sent pour des raisons de maintenance."));
      return;
    }
  }
  $doFire(this$static.eventBus, new LoginAuthenticatedEvent_0(currentUser), null);
  $toggleLoginPanel(dynamicCast(this$static.view, Q$HomePresenter$MyView), ($clinit_Boolean() , $clinit_Boolean() , FALSE_1));
}

function HomePresenter_0(eventBus, view, proxy){
  Presenter_1.call(this, eventBus, view, proxy, null);
  this.systemBlocked = ($clinit_Boolean() , $clinit_Boolean() , FALSE_1);
  $doFire(this.eventBus, new DrawSchoolInterfaceEvent_0, null);
}

defineSeed(998, 708, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$AfterUserLogOutEvent$AfterUserLogOutHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$HomePresenter, Q$HomeUiHandler]), HomePresenter_0);
_.onAfterUserLogOut = function onAfterUserLogOut(event_0){
  $toggleLoginPanel(dynamicCast(this.view, Q$HomePresenter$MyView), ($clinit_Boolean() , $clinit_Boolean() , TRUE_1));
}
;
_.onBind = function onBind_21(){
  dynamicCast(this.view, Q$HomePresenter$MyView).setUiHandlers(this);
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_41(event_0){
}
;
_.onReset = function onReset_20(){
  $doFire(this.eventBus, new PageAfterSelectEvent_0('!homepage'), null);
  dynamicCast(this.view, Q$HomePresenter$MyView).setUiHandlers(this);
}
;
_.revealInParent = function revealInParent_20(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.deadLine = 32;
function $onSuccess_88(this$static, response){
  var setting, setting$iterator;
  for (setting$iterator = response.iterator(); setting$iterator.hasNext();) {
    setting = dynamicCast(setting$iterator.next_0(), Q$SettingOptionProxy);
    $equals_5(setting.getOptionName(), 'DEADLINE') && (this$static.this$0.deadLine = __parseAndValidateInt(setting.getOptionValue()));
    $equals_5(setting.getOptionName(), 'BLOCK') && (this$static.this$0.systemBlocked = ($clinit_Boolean() , $clinit_Boolean() , $equalsIgnoreCase('true', setting.getOptionValue())?TRUE_1:FALSE_1));
  }
  $authenticateUserWithSettings(this$static.this$0, this$static.val$userName, this$static.val$password);
}

function HomePresenter$1_0(this$0, val$userName, val$password){
  this.this$0 = this$0;
  this.val$userName = val$userName;
  this.val$password = val$password;
}

defineSeed(999, 648, makeCastMap([Q$Receiver]), HomePresenter$1_0);
_.onFailure_0 = function onFailure_92(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_92(response){
  $onSuccess_88(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
_.val$password = null;
_.val$userName = null;
function $onSuccess_89(this$static, response){
  response?$checkAccessBlock(this$static.this$0, response):alert_0("La combination de nom d'utilisateur et mot de passe n'est pas valable.");
}

function HomePresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1000, 648, makeCastMap([Q$Receiver]), HomePresenter$2_0);
_.onFailure_0 = function onFailure_93(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_93(response){
  $onSuccess_89(this, dynamicCast(response, Q$UserProxy));
}
;
_.this$0 = null;
function $get_Key$type$com$lemania$eprospects$client$presenter$HomePresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$HomePresenter$_annotation$$none$$) {
    result = new HomePresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$eprospects$client$view$HomeView$_annotation$$none$$($getFragment_com_lemania_eprospects_client_view(this$static.injector)), $get_Key$type$com$lemania$eprospects$client$presenter$HomePresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$HomePresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$HomePresenter$_annotation$$none$$;
}

defineSeed(1208, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_158(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$eprospects$client$presenter$HomePresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $authenticateUser_0(this$static){
  if (!isValidUserName($getPropertyString(this$static.txtUserName.element, 'value'))) {
    alert_0("Le nom d'utilisateur n'est pas valable.");
    return;
  }
  if (!isValidUserName($getPropertyString(this$static.txtPassword.element, 'value'))) {
    alert_0("Le mot de passe n'est pas valable.");
    return;
  }
  !!this$static.uiHandlers && $authenticateUser(dynamicCast(this$static.uiHandlers, Q$HomeUiHandler), $getPropertyString(this$static.txtUserName.element, 'value'), $getPropertyString(this$static.txtPassword.element, 'value'));
}

function $onTxtPasswordFocus(this$static){
  $setSelectionRange(this$static.txtPassword, $getPropertyString(this$static.txtPassword.element, 'value').length);
}

function $onTxtPasswordKeypress(this$static, event_0){
  ((event_0.nativeEvent.charCode || 0) & 65535) == 13 && $authenticateUser_0(this$static);
}

function $toggleLoginPanel(this$static, visible){
  $setVisible_0(this$static.panelLogin, visible.value_0);
}

function HomeView_0(){
  this.widget = $build_f_HTMLPanel1_19(new HomeView_HomeViewUiBinderImpl$Widgets_0(this));
}

defineSeed(1502, 713, makeCastMap([Q$IsWidget, Q$HomePresenter$MyView]), HomeView_0);
_.asWidget = function asWidget_24(){
  return this.widget;
}
;
_.panelLogin = null;
_.txtPassword = null;
_.txtUserName = null;
_.widget = null;
function HomeView_BinderImpl_0(){
}

defineSeed(1503, 1, {}, HomeView_BinderImpl_0);
function $build_f_HTMLPanel1_19(this$static){
  var attachRecord28, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_Label4, panelLogin, f_Label5, txtUserName, f_Label6, txtPassword, cmdLogin, f_Image8;
  f_HTMLPanel1 = new HTMLPanel_0($html1_14(this$static.domId0).html);
  f_HTMLPanel1.element.style['height'] = '100%';
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord28 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord28.origParent?$insertBefore(attachRecord28.origParent, attachRecord28.element, attachRecord28.origSibling):orphan(attachRecord28.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel2, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $add_11(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label3.directionalTextHelper, 'Lemania eProfil', false) , $updateHorizontalAlignment(f_Label3) , f_Label3.element.style['width'] = '' , f_Label3)) , $add_11(f_VerticalPanel2, (f_Label4 = new Label_0 , f_Label4.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label4.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label4) , f_Label4)) , $add_11(f_VerticalPanel2, (panelLogin = new Grid_0 , $resizeColumns(panelLogin, 2) , $resizeRows(panelLogin, 3) , $setWidget_1(panelLogin, 0, 0, (f_Label5 = new Label_0 , $setHorizontalAlignment(f_Label5, ALIGN_LEFT) , $setTextOrHtml(f_Label5.directionalTextHelper, "Nom d'utilisateur :", false) , $updateHorizontalAlignment(f_Label5) , f_Label5)) , $setWidget_1(panelLogin, 0, 1, (txtUserName = new TextBox_0 , $setAlignment(txtUserName, $clinit_ValueBoxBase$TextAlignment()) , txtUserName.element.style['width'] = '200px' , this$static.owner.txtUserName = txtUserName , txtUserName)) , $setWidget_1(panelLogin, 1, 0, (f_Label6 = new Label_0 , $setHorizontalAlignment(f_Label6, ALIGN_LEFT) , $setTextOrHtml(f_Label6.directionalTextHelper, 'Mot de passe :', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $setWidget_1(panelLogin, 1, 1, (txtPassword = new PasswordTextBox_0 , $setAlignment(txtPassword, $clinit_ValueBoxBase$TextAlignment()) , txtPassword.element.style['width'] = '200px' , $addDomHandler(txtPassword, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_KeyPressEvent() , $clinit_KeyPressEvent() , TYPE_2)) , $addDomHandler(txtPassword, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, ($clinit_FocusEvent() , $clinit_FocusEvent() , TYPE_1)) , this$static.owner.txtPassword = txtPassword , txtPassword)) , $setWidget_1(panelLogin, 2, 0, new Label_0) , $setWidget_1(panelLogin, 2, 1, (cmdLogin = new Button_0 , $setInnerText(cmdLogin.element, 'Se connecter') , $addDomHandler(cmdLogin, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdLogin)) , panelLogin.element['className'] = 'subSection' , panelLogin.element.style['width'] = '' , panelLogin.tableElem['cellSpacing'] = 5 , panelLogin.tableElem['cellPadding'] = 5 , this$static.owner.panelLogin = panelLogin , panelLogin)) , $add_11(f_VerticalPanel2, (f_Image8 = new Image_1 , f_Image8.element.style['height'] = '336px' , f_Image8.element.style['width'] = '339px' , $setUrl(f_Image8, ($clinit_UriUtils() , new SafeUriString_0('images/Capture.PNG'))) , f_Image8)) , f_VerticalPanel2.element.style['height'] = '600px' , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function HomeView_HomeViewUiBinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new HomeView_HomeViewUiBinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new HomeView_HomeViewUiBinderImpl$Widgets$2_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new HomeView_HomeViewUiBinderImpl$Widgets$3_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1504, 1, {}, HomeView_HomeViewUiBinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function HomeView_HomeViewUiBinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1505, 1, makeCastMap([Q$KeyPressHandler, Q$EventHandler]), HomeView_HomeViewUiBinderImpl$Widgets$1_0);
_.this$1 = null;
function HomeView_HomeViewUiBinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1506, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), HomeView_HomeViewUiBinderImpl$Widgets$2_0);
_.onClick = function onClick_29(event_0){
  $authenticateUser_0(this.this$1.owner);
}
;
_.this$1 = null;
function HomeView_HomeViewUiBinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1507, 1, makeCastMap([Q$FocusHandler, Q$EventHandler, Q$HomeView_HomeViewUiBinderImpl$Widgets$3]), HomeView_HomeViewUiBinderImpl$Widgets$3_0);
_.this$1 = null;
function $html1_14(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_1(sb.data, "<span id='");
  $append_11(sb, htmlEscape(arg0));
  $append_1(sb.data, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data));
}

function $get_Key$type$com$lemania$eprospects$client$view$HomeView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$view$HomeView$_annotation$$none$$) {
    result = (new HomeView_BinderImpl_0 , new HomeView_0);
    this$static.singleton_Key$type$com$lemania$eprospects$client$view$HomeView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$eprospects$client$view$HomeView$_annotation$$none$$;
}

function UserRequestFactory_UserRequestContextImpl$1X_0(this$0, val$userName, val$password){
  this.val$userName = val$userName;
  this.val$password = val$password;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1805, 652, makeCastMap([Q$AbstractRequest]), UserRequestFactory_UserRequestContextImpl$1X_0);
_.makeRequestData = function makeRequestData_78(){
  return new RequestData_0('RLqYTODedbnbom4pHUluw4eEfsI=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$userName, this.val$password]), this.propertyRefs, Lcom_lemania_eprospects_shared_UserProxy_2_classLit, null);
}
;
_.val$password = null;
_.val$userName = null;
var Lcom_lemania_eprospects_client_presenter_HomePresenter_2_classLit = createForClass('com.lemania.eprospects.client.presenter.', 'HomePresenter', 998), Lcom_lemania_eprospects_client_presenter_HomePresenter$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.', 'HomePresenter$1', 999), Lcom_lemania_eprospects_client_presenter_HomePresenter$2_2_classLit = createForClass('com.lemania.eprospects.client.presenter.', 'HomePresenter$2', 1000), Lcom_lemania_eprospects_client_view_HomeView_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'HomeView', 1502), Lcom_lemania_eprospects_client_view_HomeView_1BinderImpl_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'HomeView_BinderImpl', 1503), Lcom_lemania_eprospects_client_view_HomeView_1HomeViewUiBinderImpl$Widgets_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'HomeView_HomeViewUiBinderImpl$Widgets', 1504), Lcom_lemania_eprospects_client_view_HomeView_1HomeViewUiBinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'HomeView_HomeViewUiBinderImpl$Widgets$1', 1505), Lcom_lemania_eprospects_client_view_HomeView_1HomeViewUiBinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'HomeView_HomeViewUiBinderImpl$Widgets$2', 1506), Lcom_lemania_eprospects_client_view_HomeView_1HomeViewUiBinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'HomeView_HomeViewUiBinderImpl$Widgets$3', 1507), Lcom_google_gwt_user_client_ui_PasswordTextBox_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PasswordTextBox', 505), Lcom_google_gwt_event_dom_client_KeyPressEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'KeyPressEvent', 246), Lcom_google_gwt_event_dom_client_FocusEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'FocusEvent', 243), Lcom_lemania_eprospects_shared_service_UserRequestFactory_1UserRequestContextImpl$1X_2_classLit = createForClass('com.lemania.eprospects.shared.service.', 'UserRequestFactory_UserRequestContextImpl$1X', 1805);
$entry(onLoad)(28);
