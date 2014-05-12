function isEmptyString(text, fieldDescription){
  if ($equals_5(text, '') || $equals_5(text, null)) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e invalide : ') + fieldDescription);
    return true;
  }
  return false;
}

function ApplicationStep1CompletedEvent_0(){
  $clinit_ApplicationStep1CompletedEvent();
}

defineSeed(772, 235, {}, ApplicationStep1CompletedEvent_0);
_.dispatch_0 = function dispatch_36(handler){
  dynamicCast(handler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler).onApplicationStep1Completed(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_37(){
  return TYPE_37;
}
;
function $formCompleted(genderCode, lastName_Student, firstName_Student, DOB_Student, nationality_Student, address_Student, city_Student, country_Student, email_Student, mobilePhone_Student, lastName_Parents, firstName_Parents, address_Parents, city_Parents, country_Parents, mobilePhone_Mother, mobilePhone_Father, homePhone_Parents, workPhone_Parents, fax_Parents, email_Parents){
  if (isEmptyString(genderCode, 'Sexe - Etudiant'))
    return false;
  if (isEmptyString(lastName_Student, 'Nome - Etudiant'))
    return false;
  if (isEmptyString(firstName_Student, 'Pr\xE9nom - Etudiant'))
    return false;
  if (isEmptyString(DOB_Student, 'Date de naissance - Etudiant'))
    return false;
  if (isEmptyString(nationality_Student, 'Nationalit\xE9 - Etudiant'))
    return false;
  if (isEmptyString(address_Student, 'Adresse (Rue, Num\xE9ro) -Etudiant'))
    return false;
  if (isEmptyString(city_Student, 'Code Postale/ Ville - Etudiant'))
    return false;
  if (isEmptyString(country_Student, 'Pays - Etudiant'))
    return false;
  if (isEmptyString(email_Student, 'Email - Etudiant'))
    return false;
  if (isEmptyString(mobilePhone_Student, 'Mobile - Etudiant'))
    return false;
  if (isEmptyString(lastName_Parents, 'Nom - Parents'))
    return false;
  if (isEmptyString(firstName_Parents, 'Pr\xE9nom - Parents'))
    return false;
  if (isEmptyString(address_Parents, 'Adresse - Parent'))
    return false;
  if (isEmptyString(city_Parents, 'Code postale/ Ville - Parent'))
    return false;
  if (isEmptyString(country_Parents, 'Pays - Parents'))
    return false;
  if (isEmptyString(mobilePhone_Mother, 'Mobile - M\xE8re'))
    return false;
  if (isEmptyString(mobilePhone_Father, 'Mobile - P\xE8re'))
    return false;
  if (isEmptyString(homePhone_Parents, 'T\xE9l\xE9phone (domicile) - Parents'))
    return false;
  if (isEmptyString(workPhone_Parents, 'T\xE9l\xE9phone (professionnel) - Parents'))
    return false;
  if (isEmptyString(fax_Parents, 'Fax - Parents'))
    return false;
  if (isEmptyString(email_Parents, 'Email - Parents'))
    return false;
  return true;
}

function $nextStep(this$static, genderCode, lastName_Student, firstName_Student, DOB_Student, nationality_Student, address_Student, city_Student, country_Student, email_Student, mobilePhone_Student, lastName_Parents, firstName_Parents, address_Parents, city_Parents, country_Parents, mobilePhone_Mother, mobilePhone_Father, homePhone_Parents, workPhone_Parents, fax_Parents, email_Parents, companyName_Invoice, fullName_Invoice, address_Invoice, city_Invoice, country_Invoice){
  var rc, rf;
  if (!$formCompleted(genderCode, lastName_Student, firstName_Student, DOB_Student, nationality_Student, address_Student, city_Student, country_Student, email_Student, mobilePhone_Student, lastName_Parents, firstName_Parents, address_Parents, city_Parents, country_Parents, mobilePhone_Mother, mobilePhone_Father, homePhone_Parents, workPhone_Parents, fax_Parents, email_Parents))
    return;
  rf = new ApplicationFormRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ApplicationFormRequestFactory_ApplicationFormRequestContextImpl_0(rf);
  $fire($saveStep1(rc, this$static.curUser.userEmail, this$static.curUser.applicationId, genderCode, lastName_Student, firstName_Student, DOB_Student, nationality_Student, address_Student, city_Student, country_Student, email_Student, mobilePhone_Student, lastName_Parents, firstName_Parents, address_Parents, city_Parents, country_Parents, mobilePhone_Mother, mobilePhone_Father, homePhone_Parents, workPhone_Parents, fax_Parents, email_Parents, companyName_Invoice, fullName_Invoice, address_Invoice, city_Invoice, country_Invoice), new ApplicationStep1Presenter$2_0(this$static));
}

function ApplicationStep1Presenter_0(eventBus, view, proxy){
  $clinit_ApplicationStep1Presenter();
  Presenter_0.call(this, eventBus, view, proxy, ($clinit_MainPagePresenter() , TYPE_SetMainContent));
  dynamicCast(this.view, Q$ApplicationStep1Presenter$MyView).setUiHandlers(this);
}

defineSeed(1138, 715, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$ApplicationStep1Presenter, Q$ApplicationStep1UiHandlers]), ApplicationStep1Presenter_0);
_.onBind = function onBind_32(){
  $initializeUi(dynamicCast(this.view, Q$ApplicationStep1Presenter$MyView));
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_57(event_0){
  this.curUser = event_0.currentUser;
  $showApplicationInfo(dynamicCast(this.view, Q$ApplicationStep1Presenter$MyView), this.curUser.userEmail, this.curUser.applicationId);
}
;
_.onReset = function onReset_31(){
  var rf, rc;
  rf = new ApplicationFormRequestFactoryImpl_0;
  $initialize_0(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new ApplicationFormRequestFactory_ApplicationFormRequestContextImpl_0(rf);
  $fire($loadAndReturn(rc, this.curUser.userEmail, this.curUser.applicationId), new ApplicationStep1Presenter$1_0(this));
}
;
_.curUser = null;
function $onSuccess_133(this$static, app){
  $showApplicationDetails(dynamicCast(this$static.this$0.view, Q$ApplicationStep1Presenter$MyView), app);
}

function ApplicationStep1Presenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1139, 655, makeCastMap([Q$Receiver]), ApplicationStep1Presenter$1_0);
_.onFailure_0 = function onFailure_144(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_144(app){
  $onSuccess_133(this, dynamicCast(app, Q$ApplicationFormProxy));
}
;
_.this$0 = null;
function $onSuccess_134(this$static){
  $doFire(this$static.this$0.eventBus, new ApplicationStep1CompletedEvent_0, null);
}

function ApplicationStep1Presenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1140, 655, makeCastMap([Q$Receiver]), ApplicationStep1Presenter$2_0);
_.onFailure_0 = function onFailure_145(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_145(saved){
  $onSuccess_134(this, dynamicCast(saved, Q$Boolean));
}
;
_.this$0 = null;
function $initializeUi(this$static){
  $insertItem(this$static.lstGender, 'Veuillez choisir', '', -1);
  $insertItem(this$static.lstGender, 'Gar\xE7on', 'MALE', -1);
  $insertItem(this$static.lstGender, 'Fille', 'FEMALE', -1);
}

function $onCmdNextStepClick(this$static){
  $nextStep(dynamicCast(this$static.uiHandlers, Q$ApplicationStep1UiHandlers), $getValue_1(this$static.lstGender, this$static.lstGender.element.selectedIndex), $getPropertyString(this$static.txtLastName_Student.element, 'value'), $getPropertyString(this$static.txtFirstName_Student.element, 'value'), $getPropertyString(this$static.txtDOB_Student.element, 'value'), $getPropertyString(this$static.txtNationality_Student.element, 'value'), $getPropertyString(this$static.txtAddress_Student.element, 'value'), $getPropertyString(this$static.txtCity_Student.element, 'value'), $getPropertyString(this$static.txtCountry_Student.element, 'value'), $getPropertyString(this$static.txtEmail_Student.element, 'value'), $getPropertyString(this$static.txtMobilePhone_Student.element, 'value'), $getPropertyString(this$static.txtLastName_Parents.element, 'value'), $getPropertyString(this$static.txtFirstName_Parents.element, 'value'), $getPropertyString(this$static.txtAddress_Parents.element, 'value'), $getPropertyString(this$static.txtCity_Parents.element, 'value'), $getPropertyString(this$static.txtCountry_Parents.element, 'value'), $getPropertyString(this$static.txt_MobilePhone_Mother.element, 'value'), $getPropertyString(this$static.txtMobilePhone_Father.element, 'value'), $getPropertyString(this$static.txtHomePhone_Parents.element, 'value'), $getPropertyString(this$static.txtWorkPhone_Parents.element, 'value'), $getPropertyString(this$static.txtFax_Parents.element, 'value'), $getPropertyString(this$static.txtEmail_Parents.element, 'value'), $getPropertyString(this$static.txtCompanyName_Invoice.element, 'value'), $getPropertyString(this$static.txtFullName_Invoice.element, 'value'), $getPropertyString(this$static.txtAddress_Invoice.element, 'value'), $getPropertyString(this$static.txtCity_Invoice.element, 'value'), $getPropertyString(this$static.txtCountry_Invoice.element, 'value'));
}

function $showApplicationDetails(this$static, app){
  selectItemFromList(this$static.lstGender, app.getGenderCode());
  $setText(this$static.txtLastName_Student, app.getLastName_Student());
  $setText(this$static.txtFirstName_Student, app.getFirstName_Student());
  $setText(this$static.txtDOB_Student, app.getDOB_Student());
  $setText(this$static.txtNationality_Student, app.getNationality_Student());
  $setText(this$static.txtAddress_Student, app.getAddress_Student());
  $setText(this$static.txtCity_Student, app.getCity_Student());
  $setText(this$static.txtCountry_Student, app.getCountry_Student());
  $setText(this$static.txtEmail_Student, app.getEmail_Student());
  $setText(this$static.txtMobilePhone_Student, app.getMobilePhone_Student());
  $setText(this$static.txtLastName_Parents, app.getLastName_Parents());
  $setText(this$static.txtFirstName_Parents, app.getFirstName_Parents());
  $setText(this$static.txtAddress_Parents, app.getAddress_Parents());
  $setText(this$static.txtCity_Parents, app.getCity_Parents());
  $setText(this$static.txtCountry_Parents, app.getCountry_Parents());
  $setText(this$static.txt_MobilePhone_Mother, app.getMobilePhone_Mother());
  $setText(this$static.txtMobilePhone_Father, app.getMobilePhone_Father());
  $setText(this$static.txtHomePhone_Parents, app.getHomePhone_Parents());
  $setText(this$static.txtWorkPhone_Parents, app.getWorkPhone_Parents());
  $setText(this$static.txtFax_Parents, app.getFax_Parents());
  $setText(this$static.txtEmail_Parents, app.getEmail_Parents());
  $setText(this$static.txtCompanyName_Invoice, app.getCompanyName_Invoice());
  $setText(this$static.txtFullName_Invoice, app.getFullName_Invoice());
  $setText(this$static.txtAddress_Invoice, app.getAddress_Invoice());
  $setText(this$static.txtCity_Invoice, app.getCity_Invoice());
  $setText(this$static.txtCountry_Invoice, app.getCountry_Invoice());
}

function $showApplicationInfo(this$static, email, appId){
  $setText_1(this$static.lblApplicationInfo, email + ' - ' + appId);
}

function ApplicationStep1View_0(){
  $initWidget_0(this, $build_main_2(new ApplicationStep1View_BinderImpl$Widgets_0(this)));
}

defineSeed(1145, 720, makeCastMap([Q$IsWidget, Q$ApplicationStep1Presenter$MyView]), ApplicationStep1View_0);
_.setInSlot = function setInSlot_4(slot, content_0){
  slot === ($clinit_ApplicationStep1Presenter() , SLOT_ApplicationStep1)?this.main.setWidget(!content_0?null:!content_0.view?null:content_0.view.asWidget()):undefined;
}
;
_.lblApplicationInfo = null;
_.lstGender = null;
_.main = null;
_.txtAddress_Invoice = null;
_.txtAddress_Parents = null;
_.txtAddress_Student = null;
_.txtCity_Invoice = null;
_.txtCity_Parents = null;
_.txtCity_Student = null;
_.txtCompanyName_Invoice = null;
_.txtCountry_Invoice = null;
_.txtCountry_Parents = null;
_.txtCountry_Student = null;
_.txtDOB_Student = null;
_.txtEmail_Parents = null;
_.txtEmail_Student = null;
_.txtFax_Parents = null;
_.txtFirstName_Parents = null;
_.txtFirstName_Student = null;
_.txtFullName_Invoice = null;
_.txtHomePhone_Parents = null;
_.txtLastName_Parents = null;
_.txtLastName_Student = null;
_.txtMobilePhone_Father = null;
_.txtMobilePhone_Student = null;
_.txtNationality_Student = null;
_.txtWorkPhone_Parents = null;
_.txt_MobilePhone_Mother = null;
function ApplicationStep1View_BinderImpl_0(){
}

defineSeed(1146, 1, {}, ApplicationStep1View_BinderImpl_0);
function $build_main_2(this$static){
  var main, f_VerticalPanel1, f_Label2, f_HorizontalPanel3, lblApplicationInfo, f_Label4, f_FlowPanel5, f_Label6, f_Grid7, f_HorizontalPanel13, f_Grid15, f_Label20, f_Grid21, f_HorizontalPanel24, f_Grid26, f_Label35, f_Grid36, f_VerticalPanel42, f_Label8, lstGender, f_Label9, txtLastName_Student, f_Label10, txtFirstName_Student, f_Label11, txtDOB_Student, f_Label12, txtNationality_Student, f_Label14, txtAddress_Student, f_Label16, txtCity_Student, f_Label17, txtCountry_Student, f_Label18, txtEmail_Student, f_Label19, txtMobilePhone_Student, f_Label22, txtLastName_Parents, f_Label23, txtFirstName_Parents, f_Label25, txtAddress_Parents, f_Label27, txtCity_Parents, f_Label28, txtCountry_Parents, f_Label29, txt_MobilePhone_Mother, f_Label30, txtMobilePhone_Father, f_Label31, txtHomePhone_Parents, f_Label32, txtWorkPhone_Parents, f_Label33, txtFax_Parents, f_Label34, txtEmail_Parents, f_Label37, txtCompanyName_Invoice, f_Label38, txtFullName_Invoice, f_Label39, txtAddress_Invoice, f_Label40, txtCity_Invoice, f_Label41, txtCountry_Invoice, f_HorizontalPanel43, button, sb, cmdNextStep, sb_0;
  main = new SimplePanel_0;
  $add_4(main, (f_VerticalPanel1 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel1, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $add_11(f_VerticalPanel1, (f_Label2 = new Label_0 , f_Label2.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label2.directionalTextHelper, 'INFORMATIONS GENERALES', false) , $updateHorizontalAlignment(f_Label2) , f_Label2)) , $add_11(f_VerticalPanel1, (f_HorizontalPanel3 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel3, (lblApplicationInfo = new Label_0 , $setTextOrHtml(lblApplicationInfo.directionalTextHelper, "L'inscription ID :", false) , $updateHorizontalAlignment(lblApplicationInfo) , this$static.owner.lblApplicationInfo = lblApplicationInfo , lblApplicationInfo)) , $add_9(f_HorizontalPanel3, (f_Label4 = new Label_0 , $setAutoHorizontalAlignment(f_Label4, ALIGN_RIGHT) , $setTextOrHtml(f_Label4.directionalTextHelper, 'Step 1 of 5', false) , $updateHorizontalAlignment(f_Label4) , f_Label4)) , f_HorizontalPanel3.element.style['width'] = '100%' , f_HorizontalPanel3.table['cellSpacing'] = 5 , f_HorizontalPanel3)) , $add_11(f_VerticalPanel1, (f_FlowPanel5 = new FlowPanel_0 , $add_7(f_FlowPanel5, (f_Label6 = new Label_0 , f_Label6.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label6.directionalTextHelper, 'Etudiant(e)', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $add_7(f_FlowPanel5, (f_Grid7 = new Grid_0 , $resizeColumns(f_Grid7, 4) , $resizeRows(f_Grid7, 3) , $setWidget_1(f_Grid7, 0, 0, (f_Label8 = new Label_0 , f_Label8.element['className'] = 'requiredField' , $setTextOrHtml(f_Label8.directionalTextHelper, 'Veuillez s\xE9lectionner', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $setWidget_1(f_Grid7, 0, 1, (lstGender = new ListBox_0 , this$static.owner.lstGender = lstGender , lstGender)) , $setWidget_1(f_Grid7, 1, 0, (f_Label9 = new Label_0 , f_Label9.element['className'] = 'requiredField' , $setTextOrHtml(f_Label9.directionalTextHelper, 'Nom de famille', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $setWidget_1(f_Grid7, 1, 1, (txtLastName_Student = new TextBox_0 , txtLastName_Student.element['className'] = 'sis_textbox' , this$static.owner.txtLastName_Student = txtLastName_Student , txtLastName_Student)) , $setWidget_1(f_Grid7, 1, 2, (f_Label10 = new Label_0 , f_Label10.element['className'] = 'requiredField' , $setTextOrHtml(f_Label10.directionalTextHelper, 'Pr\xE9nom', false) , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $setWidget_1(f_Grid7, 1, 3, (txtFirstName_Student = new TextBox_0 , txtFirstName_Student.element['className'] = 'sis_textbox' , this$static.owner.txtFirstName_Student = txtFirstName_Student , txtFirstName_Student)) , $setWidget_1(f_Grid7, 2, 0, (f_Label11 = new Label_0 , f_Label11.element['className'] = 'requiredField' , $setTextOrHtml(f_Label11.directionalTextHelper, 'Date de naissance', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , $setWidget_1(f_Grid7, 2, 1, (txtDOB_Student = new TextBox_0 , txtDOB_Student.element['className'] = 'sis_textbox' , this$static.owner.txtDOB_Student = txtDOB_Student , txtDOB_Student)) , $setWidget_1(f_Grid7, 2, 2, (f_Label12 = new Label_0 , f_Label12.element['className'] = 'requiredField' , $setTextOrHtml(f_Label12.directionalTextHelper, 'Nationalit\xE9', false) , $updateHorizontalAlignment(f_Label12) , f_Label12)) , $setWidget_1(f_Grid7, 2, 3, (txtNationality_Student = new TextBox_0 , txtNationality_Student.element['className'] = 'sis_textbox' , this$static.owner.txtNationality_Student = txtNationality_Student , txtNationality_Student)) , f_Grid7.element.style['width'] = '100%' , f_Grid7)) , $add_7(f_FlowPanel5, (f_HorizontalPanel13 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel13, ALIGN_LEFT) , $add_9(f_HorizontalPanel13, (f_Label14 = new Label_0 , f_Label14.element['className'] = 'requiredField' , $setTextOrHtml(f_Label14.directionalTextHelper, 'Adresse (Rue, No.)', false) , $updateHorizontalAlignment(f_Label14) , f_Label14)) , $add_9(f_HorizontalPanel13, (txtAddress_Student = new TextBox_0 , txtAddress_Student.element['className'] = 'sis-textbox-long' , this$static.owner.txtAddress_Student = txtAddress_Student , txtAddress_Student)) , f_HorizontalPanel13.element.style['width'] = '100%' , f_HorizontalPanel13.table['cellSpacing'] = 4 , f_HorizontalPanel13)) , $add_7(f_FlowPanel5, (f_Grid15 = new Grid_0 , $resizeColumns(f_Grid15, 4) , $resizeRows(f_Grid15, 2) , $setWidget_1(f_Grid15, 0, 0, (f_Label16 = new Label_0 , f_Label16.element['className'] = 'requiredField' , $setTextOrHtml(f_Label16.directionalTextHelper, 'Code postale / Ville', false) , $updateHorizontalAlignment(f_Label16) , f_Label16)) , $setWidget_1(f_Grid15, 0, 1, (txtCity_Student = new TextBox_0 , txtCity_Student.element['className'] = 'sis_textbox' , this$static.owner.txtCity_Student = txtCity_Student , txtCity_Student)) , $setWidget_1(f_Grid15, 0, 2, (f_Label17 = new Label_0 , f_Label17.element['className'] = 'requiredField' , $setTextOrHtml(f_Label17.directionalTextHelper, 'Pays', false) , $updateHorizontalAlignment(f_Label17) , f_Label17)) , $setWidget_1(f_Grid15, 0, 3, (txtCountry_Student = new TextBox_0 , txtCountry_Student.element['className'] = 'sis_textbox' , this$static.owner.txtCountry_Student = txtCountry_Student , txtCountry_Student)) , $setWidget_1(f_Grid15, 1, 0, (f_Label18 = new Label_0 , f_Label18.element['className'] = 'requiredField' , $setTextOrHtml(f_Label18.directionalTextHelper, 'Email', false) , $updateHorizontalAlignment(f_Label18) , f_Label18)) , $setWidget_1(f_Grid15, 1, 1, (txtEmail_Student = new TextBox_0 , txtEmail_Student.element['className'] = 'sis_textbox' , this$static.owner.txtEmail_Student = txtEmail_Student , txtEmail_Student)) , $setWidget_1(f_Grid15, 1, 2, (f_Label19 = new Label_0 , f_Label19.element['className'] = 'requiredField' , $setTextOrHtml(f_Label19.directionalTextHelper, 'Mobile (pour les activit\xE9s)', false) , $updateHorizontalAlignment(f_Label19) , f_Label19)) , $setWidget_1(f_Grid15, 1, 3, (txtMobilePhone_Student = new TextBox_0 , txtMobilePhone_Student.element['className'] = 'sis_textbox' , this$static.owner.txtMobilePhone_Student = txtMobilePhone_Student , txtMobilePhone_Student)) , f_Grid15.element.style['width'] = '100%' , f_Grid15)) , $add_7(f_FlowPanel5, (f_Label20 = new Label_0 , f_Label20.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label20.directionalTextHelper, 'Parents / tuteurs', false) , $updateHorizontalAlignment(f_Label20) , f_Label20)) , $add_7(f_FlowPanel5, (f_Grid21 = new Grid_0 , $resizeColumns(f_Grid21, 4) , $resizeRows(f_Grid21, 1) , $setWidget_1(f_Grid21, 0, 0, (f_Label22 = new Label_0 , f_Label22.element['className'] = 'requiredField' , $setTextOrHtml(f_Label22.directionalTextHelper, 'Nom de famille', false) , $updateHorizontalAlignment(f_Label22) , f_Label22)) , $setWidget_1(f_Grid21, 0, 1, (txtLastName_Parents = new TextBox_0 , txtLastName_Parents.element['className'] = 'sis_textbox' , this$static.owner.txtLastName_Parents = txtLastName_Parents , txtLastName_Parents)) , $setWidget_1(f_Grid21, 0, 2, (f_Label23 = new Label_0 , f_Label23.element['className'] = 'requiredField' , $setTextOrHtml(f_Label23.directionalTextHelper, 'Pr\xE9nom', false) , $updateHorizontalAlignment(f_Label23) , f_Label23)) , $setWidget_1(f_Grid21, 0, 3, (txtFirstName_Parents = new TextBox_0 , txtFirstName_Parents.element['className'] = 'sis_textbox' , this$static.owner.txtFirstName_Parents = txtFirstName_Parents , txtFirstName_Parents)) , f_Grid21.element.style['width'] = '100%' , f_Grid21)) , $add_7(f_FlowPanel5, (f_HorizontalPanel24 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel24, (f_Label25 = new Label_0 , f_Label25.element['className'] = 'requiredField' , $setTextOrHtml(f_Label25.directionalTextHelper, 'Adresse (Rue, No.)', false) , $updateHorizontalAlignment(f_Label25) , f_Label25)) , $add_9(f_HorizontalPanel24, (txtAddress_Parents = new TextBox_0 , txtAddress_Parents.element['className'] = 'sis-textbox-long' , this$static.owner.txtAddress_Parents = txtAddress_Parents , txtAddress_Parents)) , f_HorizontalPanel24.element.style['width'] = '100%' , f_HorizontalPanel24.table['cellSpacing'] = 4 , f_HorizontalPanel24)) , $add_7(f_FlowPanel5, (f_Grid26 = new Grid_0 , $resizeColumns(f_Grid26, 4) , $resizeRows(f_Grid26, 4) , $setWidget_1(f_Grid26, 0, 0, (f_Label27 = new Label_0 , f_Label27.element['className'] = 'requiredField' , $setTextOrHtml(f_Label27.directionalTextHelper, 'Code postale / Ville', false) , $updateHorizontalAlignment(f_Label27) , f_Label27)) , $setWidget_1(f_Grid26, 0, 1, (txtCity_Parents = new TextBox_0 , txtCity_Parents.element['className'] = 'sis_textbox' , this$static.owner.txtCity_Parents = txtCity_Parents , txtCity_Parents)) , $setWidget_1(f_Grid26, 0, 2, (f_Label28 = new Label_0 , f_Label28.element['className'] = 'requiredField' , $setTextOrHtml(f_Label28.directionalTextHelper, 'Pays', false) , $updateHorizontalAlignment(f_Label28) , f_Label28)) , $setWidget_1(f_Grid26, 0, 3, (txtCountry_Parents = new TextBox_0 , txtCountry_Parents.element['className'] = 'sis_textbox' , this$static.owner.txtCountry_Parents = txtCountry_Parents , txtCountry_Parents)) , $setWidget_1(f_Grid26, 1, 0, (f_Label29 = new Label_0 , f_Label29.element['className'] = 'requiredField' , $setTextOrHtml(f_Label29.directionalTextHelper, 'Mobile (m\xE8re)', false) , $updateHorizontalAlignment(f_Label29) , f_Label29)) , $setWidget_1(f_Grid26, 1, 1, (txt_MobilePhone_Mother = new TextBox_0 , txt_MobilePhone_Mother.element['className'] = 'sis_textbox' , this$static.owner.txt_MobilePhone_Mother = txt_MobilePhone_Mother , txt_MobilePhone_Mother)) , $setWidget_1(f_Grid26, 1, 2, (f_Label30 = new Label_0 , f_Label30.element['className'] = 'requiredField' , $setTextOrHtml(f_Label30.directionalTextHelper, 'Mobile (p\xE8re)', false) , $updateHorizontalAlignment(f_Label30) , f_Label30)) , $setWidget_1(f_Grid26, 1, 3, (txtMobilePhone_Father = new TextBox_0 , txtMobilePhone_Father.element['className'] = 'sis_textbox' , this$static.owner.txtMobilePhone_Father = txtMobilePhone_Father , txtMobilePhone_Father)) , $setWidget_1(f_Grid26, 2, 0, (f_Label31 = new Label_0 , f_Label31.element['className'] = 'requiredField' , $setTextOrHtml(f_Label31.directionalTextHelper, 'T\xE9l\xE9phone (domicile)', false) , $updateHorizontalAlignment(f_Label31) , f_Label31)) , $setWidget_1(f_Grid26, 2, 1, (txtHomePhone_Parents = new TextBox_0 , txtHomePhone_Parents.element['className'] = 'sis_textbox' , this$static.owner.txtHomePhone_Parents = txtHomePhone_Parents , txtHomePhone_Parents)) , $setWidget_1(f_Grid26, 2, 2, (f_Label32 = new Label_0 , f_Label32.element['className'] = 'requiredField' , $setTextOrHtml(f_Label32.directionalTextHelper, 'T\xE9l\xE9phone professionnel', false) , $updateHorizontalAlignment(f_Label32) , f_Label32)) , $setWidget_1(f_Grid26, 2, 3, (txtWorkPhone_Parents = new TextBox_0 , txtWorkPhone_Parents.element['className'] = 'sis_textbox' , this$static.owner.txtWorkPhone_Parents = txtWorkPhone_Parents , txtWorkPhone_Parents)) , $setWidget_1(f_Grid26, 3, 0, (f_Label33 = new Label_0 , f_Label33.element['className'] = 'requiredField' , $setTextOrHtml(f_Label33.directionalTextHelper, 'Fax', false) , $updateHorizontalAlignment(f_Label33) , f_Label33)) , $setWidget_1(f_Grid26, 3, 1, (txtFax_Parents = new TextBox_0 , txtFax_Parents.element['className'] = 'sis_textbox' , this$static.owner.txtFax_Parents = txtFax_Parents , txtFax_Parents)) , $setWidget_1(f_Grid26, 3, 2, (f_Label34 = new Label_0 , f_Label34.element['className'] = 'requiredField' , $setTextOrHtml(f_Label34.directionalTextHelper, 'E-mail', false) , $updateHorizontalAlignment(f_Label34) , f_Label34)) , $setWidget_1(f_Grid26, 3, 3, (txtEmail_Parents = new TextBox_0 , txtEmail_Parents.element['className'] = 'sis_textbox' , this$static.owner.txtEmail_Parents = txtEmail_Parents , txtEmail_Parents)) , f_Grid26.element.style['width'] = '100%' , f_Grid26)) , $add_7(f_FlowPanel5, (f_Label35 = new Label_0 , f_Label35.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label35.directionalTextHelper, "Adresse pour l'envoie de la facture et de la lettre de confirmation (si diff\xE9rente de l'adresse des parents)", false) , $updateHorizontalAlignment(f_Label35) , f_Label35)) , $add_7(f_FlowPanel5, (f_Grid36 = new Grid_0 , $resizeColumns(f_Grid36, 2) , $resizeRows(f_Grid36, 5) , $setWidget_1(f_Grid36, 0, 0, (f_Label37 = new Label_0 , f_Label37.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label37.directionalTextHelper, "Nom de l'entreprise", false) , $updateHorizontalAlignment(f_Label37) , f_Label37)) , $setWidget_1(f_Grid36, 0, 1, (txtCompanyName_Invoice = new TextBox_0 , txtCompanyName_Invoice.element['className'] = 'sis-textbox-long' , this$static.owner.txtCompanyName_Invoice = txtCompanyName_Invoice , txtCompanyName_Invoice)) , $setWidget_1(f_Grid36, 1, 0, (f_Label38 = new Label_0 , f_Label38.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label38.directionalTextHelper, 'Nom / Pr\xE9nom de la personne responsable', false) , $updateHorizontalAlignment(f_Label38) , f_Label38)) , $setWidget_1(f_Grid36, 1, 1, (txtFullName_Invoice = new TextBox_0 , txtFullName_Invoice.element['className'] = 'sis-textbox-long' , this$static.owner.txtFullName_Invoice = txtFullName_Invoice , txtFullName_Invoice)) , $setWidget_1(f_Grid36, 2, 0, (f_Label39 = new Label_0 , f_Label39.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label39.directionalTextHelper, 'Adresse (Rue, No.)', false) , $updateHorizontalAlignment(f_Label39) , f_Label39)) , $setWidget_1(f_Grid36, 2, 1, (txtAddress_Invoice = new TextBox_0 , txtAddress_Invoice.element['className'] = 'sis-textbox-long' , this$static.owner.txtAddress_Invoice = txtAddress_Invoice , txtAddress_Invoice)) , $setWidget_1(f_Grid36, 3, 0, (f_Label40 = new Label_0 , f_Label40.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label40.directionalTextHelper, 'Code postale / Ville', false) , $updateHorizontalAlignment(f_Label40) , f_Label40)) , $setWidget_1(f_Grid36, 3, 1, (txtCity_Invoice = new TextBox_0 , txtCity_Invoice.element['className'] = 'sis-textbox-long' , this$static.owner.txtCity_Invoice = txtCity_Invoice , txtCity_Invoice)) , $setWidget_1(f_Grid36, 4, 0, (f_Label41 = new Label_0 , f_Label41.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label41.directionalTextHelper, 'Pays', false) , $updateHorizontalAlignment(f_Label41) , f_Label41)) , $setWidget_1(f_Grid36, 4, 1, (txtCountry_Invoice = new TextBox_0 , txtCountry_Invoice.element['className'] = 'sis-textbox-long' , this$static.owner.txtCountry_Invoice = txtCountry_Invoice , txtCountry_Invoice)) , f_Grid36.element.style['width'] = '100%' , f_Grid36)) , $add_7(f_FlowPanel5, (f_VerticalPanel42 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel42, ALIGN_RIGHT) , $add_11(f_VerticalPanel42, (f_HorizontalPanel43 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel43, ALIGN_RIGHT) , $add_9(f_HorizontalPanel43, (button = new Button_0 , $setHTML(button, (sb = new StringBuilder_0 , $append_1(sb.data, 'Pr\xE9c\xE9dant') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data))).html) , setVisible(button.element, false) , $addDomHandler(button, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , button)) , $add_9(f_HorizontalPanel43, (cmdNextStep = new Button_0 , $setHTML(cmdNextStep, (sb_0 = new StringBuilder_0 , $append_1(sb_0.data, 'Next Step') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb_0.data))).html) , $setInnerText(cmdNextStep.element, 'Enregister & Suivant >>') , $addDomHandler(cmdNextStep, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, TYPE_0) , cmdNextStep)) , f_HorizontalPanel43.element.style['width'] = '30%' , f_HorizontalPanel43.table['cellSpacing'] = 10 , f_HorizontalPanel43)) , f_VerticalPanel42.element.style['width'] = '100%' , f_VerticalPanel42)) , f_FlowPanel5.element.style['width'] = '900px' , f_FlowPanel5)) , f_VerticalPanel1.element.style['height'] = '' , f_VerticalPanel1.element.style['width'] = '100%' , f_VerticalPanel1));
  this$static.owner.main = main;
  return main;
}

function ApplicationStep1View_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ApplicationStep1View_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new ApplicationStep1View_BinderImpl$Widgets$2_0(this);
  this.owner = owner;
}

defineSeed(1147, 1, {}, ApplicationStep1View_BinderImpl$Widgets_0);
_.owner = null;
function ApplicationStep1View_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1148, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep1View_BinderImpl$Widgets$1_0);
_.onClick = function onClick_4(event_0){
  $onCmdNextStepClick(this.this$1.owner);
}
;
_.this$1 = null;
function ApplicationStep1View_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1149, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep1View_BinderImpl$Widgets$2_0);
_.onClick = function onClick_5(event_0){
  $doFire(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep1UiHandlers), Q$ApplicationStep1Presenter).eventBus, new GotoPreviousPageEvent_0(($clinit_History() , impl_2?token_0 == null?'':token_0:'')), null);
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

defineSeed(1153, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_146(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep1$ApplicationStep1Presenter$_annotation$$none$$(this.this$1.this$0));
}
;
defineSeed(1265, 715, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationPaymentEvent$ApplicationPaymentHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$GotoPreviousPageEvent$GotoPreviousPageHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler, Q$MainPagePresenter, Q$MainPageUiHandler]));
_.onApplicationStep1Completed = function onApplicationStep1Completed(event_0){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationstep2', true);
}
;
defineSeed(1267, 739, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationPaymentEvent$ApplicationPaymentHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$GotoPreviousPageEvent$GotoPreviousPageHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler]));
_.onApplicationStep1Completed = function onApplicationStep1Completed_0(event_0){
  $getPresenter(this, new MainPagePresenterMyProxyImpl$7_0(this.eventBus));
}
;
function $success_54(){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new MainPagePresenterMyProxyImpl$7$1_0);
}

function MainPagePresenterMyProxyImpl$7_0($anonymous0){
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(1290, 728, {}, MainPagePresenterMyProxyImpl$7_0);
_.success = function success_56(presenter){
  $success_54(dynamicCast(presenter, Q$MainPagePresenter));
}
;
function MainPagePresenterMyProxyImpl$7$1_0(){
}

defineSeed(1291, 1, {}, MainPagePresenterMyProxyImpl$7$1_0);
_.execute_0 = function execute_84(){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationstep2', true);
}
;
function $saveStep1(this$static, emailAddress, appId, genderCode, lastName_Student, firstName_Student, DOB_Student, nationality_Student, address_Student, city_Student, country_Student, email_Student, mobilePhone_Student, lastName_Parents, firstName_Parents, address_Parents, city_Parents, country_Parents, mobilePhone_Mother, mobilePhone_Father, homePhone_Parents, workPhone_Parents, fax_Parents, email_Parents, companyName_Invoice, fullName_Invoice, address_Invoice, city_Invoice, country_Invoice){
  var x;
  x = new ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$8X_0(this$static, emailAddress, appId, genderCode, lastName_Student, firstName_Student, DOB_Student, nationality_Student, address_Student, city_Student, country_Student, email_Student, mobilePhone_Student, lastName_Parents, firstName_Parents, address_Parents, city_Parents, country_Parents, mobilePhone_Mother, mobilePhone_Father, homePhone_Parents, workPhone_Parents, fax_Parents, email_Parents, companyName_Invoice, fullName_Invoice, address_Invoice, city_Invoice, country_Invoice);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$8X_0(this$0, val$emailAddress, val$appId, val$genderCode, val$lastName_Student, val$firstName_Student, val$DOB_Student, val$nationality_Student, val$address_Student, val$city_Student, val$country_Student, val$email_Student, val$mobilePhone_Student, val$lastName_Parents, val$firstName_Parents, val$address_Parents, val$city_Parents, val$country_Parents, val$mobilePhone_Mother, val$mobilePhone_Father, val$homePhone_Parents, val$workPhone_Parents, val$fax_Parents, val$email_Parents, val$companyName_Invoice, val$fullName_Invoice, val$address_Invoice, val$city_Invoice, val$country_Invoice){
  this.val$emailAddress = val$emailAddress;
  this.val$appId = val$appId;
  this.val$genderCode = val$genderCode;
  this.val$lastName_Student = val$lastName_Student;
  this.val$firstName_Student = val$firstName_Student;
  this.val$DOB_Student = val$DOB_Student;
  this.val$nationality_Student = val$nationality_Student;
  this.val$address_Student = val$address_Student;
  this.val$city_Student = val$city_Student;
  this.val$country_Student = val$country_Student;
  this.val$email_Student = val$email_Student;
  this.val$mobilePhone_Student = val$mobilePhone_Student;
  this.val$lastName_Parents = val$lastName_Parents;
  this.val$firstName_Parents = val$firstName_Parents;
  this.val$address_Parents = val$address_Parents;
  this.val$city_Parents = val$city_Parents;
  this.val$country_Parents = val$country_Parents;
  this.val$mobilePhone_Mother = val$mobilePhone_Mother;
  this.val$mobilePhone_Father = val$mobilePhone_Father;
  this.val$homePhone_Parents = val$homePhone_Parents;
  this.val$workPhone_Parents = val$workPhone_Parents;
  this.val$fax_Parents = val$fax_Parents;
  this.val$email_Parents = val$email_Parents;
  this.val$companyName_Invoice = val$companyName_Invoice;
  this.val$fullName_Invoice = val$fullName_Invoice;
  this.val$address_Invoice = val$address_Invoice;
  this.val$city_Invoice = val$city_Invoice;
  this.val$country_Invoice = val$country_Invoice;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1701, 659, makeCastMap([Q$AbstractRequest]), ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$8X_0);
_.makeRequestData = function makeRequestData_2(){
  return new RequestData_0('m$Bu$9qSXJCFYv$tno4yyZloaCc=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$emailAddress, this.val$appId, this.val$genderCode, this.val$lastName_Student, this.val$firstName_Student, this.val$DOB_Student, this.val$nationality_Student, this.val$address_Student, this.val$city_Student, this.val$country_Student, this.val$email_Student, this.val$mobilePhone_Student, this.val$lastName_Parents, this.val$firstName_Parents, this.val$address_Parents, this.val$city_Parents, this.val$country_Parents, this.val$mobilePhone_Mother, this.val$mobilePhone_Father, this.val$homePhone_Parents, this.val$workPhone_Parents, this.val$fax_Parents, this.val$email_Parents, this.val$companyName_Invoice, this.val$fullName_Invoice, this.val$address_Invoice, this.val$city_Invoice, this.val$country_Invoice]), this.propertyRefs, Ljava_lang_Boolean_2_classLit, null);
}
;
_.val$DOB_Student = null;
_.val$address_Invoice = null;
_.val$address_Parents = null;
_.val$address_Student = null;
_.val$appId = null;
_.val$city_Invoice = null;
_.val$city_Parents = null;
_.val$city_Student = null;
_.val$companyName_Invoice = null;
_.val$country_Invoice = null;
_.val$country_Parents = null;
_.val$country_Student = null;
_.val$emailAddress = null;
_.val$email_Parents = null;
_.val$email_Student = null;
_.val$fax_Parents = null;
_.val$firstName_Parents = null;
_.val$firstName_Student = null;
_.val$fullName_Invoice = null;
_.val$genderCode = null;
_.val$homePhone_Parents = null;
_.val$lastName_Parents = null;
_.val$lastName_Student = null;
_.val$mobilePhone_Father = null;
_.val$mobilePhone_Mother = null;
_.val$mobilePhone_Student = null;
_.val$nationality_Student = null;
_.val$workPhone_Parents = null;
var Lcom_lemania_eprospects_client_presenter_applicationstep1_ApplicationStep1Presenter_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep1.', 'ApplicationStep1Presenter', 1138), Lcom_lemania_eprospects_client_presenter_applicationstep1_ApplicationStep1Presenter$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep1.', 'ApplicationStep1Presenter$1', 1139), Lcom_lemania_eprospects_client_presenter_applicationstep1_ApplicationStep1Presenter$2_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep1.', 'ApplicationStep1Presenter$2', 1140), Lcom_lemania_eprospects_client_event_ApplicationStep1CompletedEvent_2_classLit = createForClass('com.lemania.eprospects.client.event.', 'ApplicationStep1CompletedEvent', 772), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$7_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$7', 1290), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$7$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$7$1', 1291), Lcom_lemania_eprospects_client_presenter_applicationstep1_ApplicationStep1View_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep1.', 'ApplicationStep1View', 1145), Lcom_lemania_eprospects_client_presenter_applicationstep1_ApplicationStep1View_1BinderImpl_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep1.', 'ApplicationStep1View_BinderImpl', 1146), Lcom_lemania_eprospects_client_presenter_applicationstep1_ApplicationStep1View_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep1.', 'ApplicationStep1View_BinderImpl$Widgets', 1147), Lcom_lemania_eprospects_client_presenter_applicationstep1_ApplicationStep1View_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep1.', 'ApplicationStep1View_BinderImpl$Widgets$1', 1148), Lcom_lemania_eprospects_client_presenter_applicationstep1_ApplicationStep1View_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep1.', 'ApplicationStep1View_BinderImpl$Widgets$2', 1149), Lcom_lemania_eprospects_shared_service_ApplicationFormRequestFactory_1ApplicationFormRequestContextImpl$8X_2_classLit = createForClass('com.lemania.eprospects.shared.service.', 'ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$8X', 1701);
$entry(onLoad)(4);
