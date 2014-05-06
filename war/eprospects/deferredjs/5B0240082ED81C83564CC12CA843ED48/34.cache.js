function StudentAfterStatusChangeEvent_0(studentId, studentEmail, status_0){
  $clinit_StudentAfterStatusChangeEvent();
  this.studentId = studentId;
  this.studentEmail = studentEmail;
  this.status_0 = status_0;
}

defineSeed(781, 235, {}, StudentAfterStatusChangeEvent_0);
_.dispatch_0 = function dispatch_54(handler){
  dynamicCast(handler, Q$StudentAfterStatusChangeEvent$StudentAfterStatusChangeHandler).onStudentAfterDesactivate(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_55(){
  return TYPE_55;
}
;
_.status_0 = null;
_.studentEmail = '';
_.studentId = '';
function $onStudentAfterDesactivate(this$static, event_0){
  var rc, rf;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rf = new BulletinRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new BulletinRequestFactory_BulletinRequestContextImpl_0(rf);
  $fire($updateBulletinStatus(rc, event_0.studentId, event_0.status_0), new FrmBulletinManagementPresenter$15_0);
}

defineSeed(858, 706, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$StudentAfterStatusChangeEvent$StudentAfterStatusChangeHandler, Q$FrmBulletinManagementPresenter, Q$FrmBulletinManagementUiHandler]));
_.onStudentAfterDesactivate = function onStudentAfterDesactivate(event_0){
  $onStudentAfterDesactivate(this, event_0);
}
;
function FrmBulletinManagementPresenter$15_0(){
}

defineSeed(865, 645, makeCastMap([Q$Receiver]), FrmBulletinManagementPresenter$15_0);
_.onFailure_0 = function onFailure_30(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_30(response){
  throwClassCastExceptionUnlessNull(response);
}
;
defineSeed(875, 737, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$HasHandlerContainer, Q$Place, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$StudentAfterStatusChangeEvent$StudentAfterStatusChangeHandler]));
_.onStudentAfterDesactivate = function onStudentAfterDesactivate_0(event_0){
  $getPresenter_0(this, new FrmBulletinManagementPresenterMyProxyImpl$1_0(this.eventBus, event_0));
}
;
function $success_11(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new FrmBulletinManagementPresenterMyProxyImpl$1$1_0(presenter, this$static.val$event));
}

function FrmBulletinManagementPresenterMyProxyImpl$1_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(876, 719, {}, FrmBulletinManagementPresenterMyProxyImpl$1_0);
_.success = function success_13(presenter){
  $success_11(this, dynamicCast(presenter, Q$FrmBulletinManagementPresenter));
}
;
_.val$event = null;
function FrmBulletinManagementPresenterMyProxyImpl$1$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(877, 1, {}, FrmBulletinManagementPresenterMyProxyImpl$1$1_0);
_.execute_0 = function execute_41(){
  $onStudentAfterDesactivate(this.val$presenter, this.val$event);
}
;
_.val$event = null;
_.val$presenter = null;
function $getStudentRequestContext(this$static){
  var rf;
  rf = new StudentRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  return new StudentRequestFactory_StudentRequestContextImpl_0(rf);
}

function $updateStudentEmail(this$static, student, email){
  var rc, studentForUpdate;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  if ($equals_5(student.getEmail(), email))
    return;
  if (isValidEmailAddress(email)) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Email');
    return;
  }
  rc = $getStudentRequestContext(this$static);
  studentForUpdate = dynamicCast($editProxy(rc, student), Q$StudentProxy);
  studentForUpdate.setEmail(email);
  $fire($saveAndReturn_2(rc, studentForUpdate), new StudentPresenter$5_0(this$static));
}

function $updateStudentFirstName(this$static, student, firstName){
  var rc, studentForUpdate;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  if ($equals_5(student.getFirstName(), firstName))
    return;
  if ($equals_5(firstName, '')) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Pr\xE9nom');
    return;
  }
  rc = $getStudentRequestContext(this$static);
  studentForUpdate = dynamicCast($editProxy(rc, student), Q$StudentProxy);
  studentForUpdate.setFirstName(firstName);
  $fire($saveAndReturn_2(rc, studentForUpdate), new StudentPresenter$3_0(this$static));
}

function $updateStudentLastName(this$static, student, lastName){
  var rc, studentForUpdate;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  if ($equals_5(student.getLastName(), lastName))
    return;
  if ($equals_5(lastName, '')) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Nom');
    return;
  }
  rc = $getStudentRequestContext(this$static);
  studentForUpdate = dynamicCast($editProxy(rc, student), Q$StudentProxy);
  studentForUpdate.setLastName(lastName);
  $fire($saveAndReturn_2(rc, studentForUpdate), new StudentPresenter$4_0(this$static));
}

function $updateStudentStatus(this$static, student, value){
  var rc, studentForUpdate;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rc = $getStudentRequestContext(this$static);
  studentForUpdate = dynamicCast($editProxy(rc, student), Q$StudentProxy);
  studentForUpdate.setIsActive(value);
  $fire($saveAndReturn_2(rc, studentForUpdate), new StudentPresenter$2_0(this$static, student, value));
}

function StudentPresenter_0(eventBus, view, proxy){
  Presenter_1.call(this, eventBus, view, proxy, null);
  dynamicCast(this.view, Q$StudentPresenter$MyView).setUiHandlers(this);
}

defineSeed(1064, 706, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$StudentPresenter, Q$StudentListUiHandler]), StudentPresenter_0);
_.onBind = function onBind_27(){
  $initializeTable_3(dynamicCast(this.view, Q$StudentPresenter$MyView));
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_53(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_26(){
  var rc, x;
  rc = $getStudentRequestContext(this);
  $fire((x = new StudentRequestFactory_StudentRequestContextImpl$1X_0(rc) , $addInvocation(rc.state.dialect, x) , x), new StudentPresenter$1_0(this));
  $doFire(this.eventBus, new PageAfterSelectEvent_0('students'), null);
}
;
_.revealInParent = function revealInParent_26(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.currentUser = null;
function $onSuccess_121(this$static, response){
  $setTableData(dynamicCast(this$static.this$0.view, Q$StudentPresenter$MyView), response);
}

function StudentPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1065, 645, makeCastMap([Q$Receiver]), StudentPresenter$1_0);
_.onFailure_0 = function onFailure_126(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_126(response){
  $onSuccess_121(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_122(this$static, response){
  $updateEditedStudent(dynamicCast(this$static.this$0.view, Q$StudentPresenter$MyView), response);
  $doFire(this$static.this$0.eventBus, new StudentAfterStatusChangeEvent_0('' + toString_6(this$static.val$student.getId_0().value_0), this$static.val$student.getEmail(), this$static.val$value), null);
}

function StudentPresenter$2_0(this$0, val$student, val$value){
  this.this$0 = this$0;
  this.val$student = val$student;
  this.val$value = val$value;
}

defineSeed(1066, 645, makeCastMap([Q$Receiver]), StudentPresenter$2_0);
_.onFailure_0 = function onFailure_127(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_127(response){
  $onSuccess_122(this, dynamicCast(response, Q$StudentProxy));
}
;
_.this$0 = null;
_.val$student = null;
_.val$value = null;
function $onSuccess_123(this$static, response){
  $updateEditedStudent(dynamicCast(this$static.this$0.view, Q$StudentPresenter$MyView), response);
}

function StudentPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1067, 645, makeCastMap([Q$Receiver]), StudentPresenter$3_0);
_.onFailure_0 = function onFailure_128(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_128(response){
  $onSuccess_123(this, dynamicCast(response, Q$StudentProxy));
}
;
_.this$0 = null;
function $onSuccess_124(this$static, response){
  $updateEditedStudent(dynamicCast(this$static.this$0.view, Q$StudentPresenter$MyView), response);
}

function StudentPresenter$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1068, 645, makeCastMap([Q$Receiver]), StudentPresenter$4_0);
_.onFailure_0 = function onFailure_129(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_129(response){
  $onSuccess_124(this, dynamicCast(response, Q$StudentProxy));
}
;
_.this$0 = null;
function $onSuccess_125(this$static, response){
  $updateEditedStudent(dynamicCast(this$static.this$0.view, Q$StudentPresenter$MyView), response);
}

function StudentPresenter$5_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1069, 645, makeCastMap([Q$Receiver]), StudentPresenter$5_0);
_.onFailure_0 = function onFailure_130(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_130(response){
  $onSuccess_125(this, dynamicCast(response, Q$StudentProxy));
}
;
_.this$0 = null;
function $onStudentAfterDesactivate_0(this$static, event_0){
  var rc, rf;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rf = new UserRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new UserRequestFactory_UserRequestContextImpl_0(rf);
  $fire($updateUserActiveStatus(rc, event_0.studentEmail, event_0.status_0), new UserManagementPresenter$7_0);
}

function UserManagementPresenter$7_0(){
}

defineSeed(1081, 645, makeCastMap([Q$Receiver]), UserManagementPresenter$7_0);
_.onFailure_0 = function onFailure_137(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_137(response){
  throwClassCastExceptionUnlessNull(response);
}
;
defineSeed(1082, 737, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$HasHandlerContainer, Q$Place, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$ProfessorAfterAddEvent$ProfessorAfterAddHandler, Q$StudentAfterAddEvent$StudentAfterAddHandler, Q$StudentAfterStatusChangeEvent$StudentAfterStatusChangeHandler]));
_.onStudentAfterDesactivate = function onStudentAfterDesactivate_2(event_0){
  $getPresenter_0(this, new UserManagementPresenterMyProxyImpl$3_0(this.eventBus, event_0));
}
;
function $success_39(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new UserManagementPresenterMyProxyImpl$3$1_0(presenter, this$static.val$event));
}

function UserManagementPresenterMyProxyImpl$3_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(1087, 719, {}, UserManagementPresenterMyProxyImpl$3_0);
_.success = function success_41(presenter){
  $success_39(this, dynamicCast(presenter, Q$UserManagementPresenter));
}
;
_.val$event = null;
function UserManagementPresenterMyProxyImpl$3$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(1088, 1, {}, UserManagementPresenterMyProxyImpl$3$1_0);
_.execute_0 = function execute_69(){
  $onStudentAfterDesactivate_0(this.val$presenter, this.val$event);
}
;
_.val$event = null;
_.val$presenter = null;
function $get_Key$type$com$lemania$eprospects$client$presenter$StudentPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$StudentPresenter$_annotation$$none$$) {
    result = new StudentPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$eprospects$client$view$StudentView$_annotation$$none$$($getFragment_com_lemania_eprospects_client_view(this$static.injector)), $get_Key$type$com$lemania$eprospects$client$presenter$StudentPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$StudentPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$StudentPresenter$_annotation$$none$$;
}

defineSeed(1217, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_164(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$eprospects$client$presenter$StudentPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $initializeTable_3(this$static){
  var cellActive, colActive, colEmail, colFirstName, colLastName;
  colFirstName = new StudentView$1_0(new EditTextCell_0);
  $addColumn(this$static.tblStudents, colFirstName, 'Nom');
  $setFieldUpdater(colFirstName, new StudentView$2_0(this$static));
  colLastName = new StudentView$3_0(new EditTextCell_0);
  $addColumn(this$static.tblStudents, colLastName, 'Pr\xE9nom');
  $setFieldUpdater(colLastName, new StudentView$4_0(this$static));
  colEmail = new StudentView$5_0(new EditTextCell_0);
  $addColumn(this$static.tblStudents, colEmail, 'Email');
  $setFieldUpdater(colEmail, new StudentView$6_0(this$static));
  cellActive = new CheckboxCell_0;
  colActive = new StudentView$7_0(cellActive);
  $addColumn(this$static.tblStudents, colActive, 'Active');
  $setFieldUpdater(colActive, new StudentView$8_0(this$static));
  $addDataDisplay(this$static.dataProvider, this$static.tblStudents);
  $setPageSize(this$static.tblStudents, 1000);
}

function $setTableData(this$static, studentList){
  $setList(this$static.dataProvider, studentList);
  $setHeight(this$static.tblStudents, '' + (studentList.size_1() * ($clinit_NotificationTypes() , lineHeight).value_0 + headerHeight.value_0) + 'px');
}

function $updateEditedStudent(this$static, student){
  $remove_12(this$static.dataProvider.listWrapper, this$static.selectedStudent);
  $add_13(this$static.dataProvider.listWrapper, this$static.selectedStudent, student);
  $refresh(this$static.dataProvider);
}

function StudentView_0(){
  this.dataProvider = new ListDataProvider_0;
  this.tblStudents = new DataGrid_0;
  this.widget = $build_f_HTMLPanel1_25(new StudentView_BinderImpl$Widgets_0(this));
}

defineSeed(1573, 711, makeCastMap([Q$IsWidget, Q$StudentPresenter$MyView]), StudentView_0);
_.asWidget = function asWidget_30(){
  return this.widget;
}
;
_.selectedStudent = -1;
_.widget = null;
function StudentView$1_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1574, 366, makeCastMap([Q$HasCell, Q$Column]), StudentView$1_0);
_.getValue = function getValue_79(object){
  return dynamicCast(object, Q$StudentProxy).getLastName();
}
;
function $update_31(this$static, index, student, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedStudent = index;
    $updateStudentLastName(dynamicCast(this$static.this$0.uiHandlers, Q$StudentListUiHandler), student, value);
  }
}

function StudentView$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1575, 1, {}, StudentView$2_0);
_.update = function update_32(index, student, value){
  $update_31(this, index, dynamicCast(student, Q$StudentProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function StudentView$3_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1576, 366, makeCastMap([Q$HasCell, Q$Column]), StudentView$3_0);
_.getValue = function getValue_80(object){
  return dynamicCast(object, Q$StudentProxy).getFirstName();
}
;
function $update_32(this$static, index, student, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedStudent = index;
    $updateStudentFirstName(dynamicCast(this$static.this$0.uiHandlers, Q$StudentListUiHandler), student, value);
  }
}

function StudentView$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1577, 1, {}, StudentView$4_0);
_.update = function update_33(index, student, value){
  $update_32(this, index, dynamicCast(student, Q$StudentProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function StudentView$5_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1578, 366, makeCastMap([Q$HasCell, Q$Column]), StudentView$5_0);
_.getValue = function getValue_81(object){
  return dynamicCast(object, Q$StudentProxy).getEmail();
}
;
function $update_33(this$static, index, student, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedStudent = index;
    $updateStudentEmail(dynamicCast(this$static.this$0.uiHandlers, Q$StudentListUiHandler), student, value);
  }
}

function StudentView$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1579, 1, {}, StudentView$6_0);
_.update = function update_34(index, student, value){
  $update_33(this, index, dynamicCast(student, Q$StudentProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function StudentView$7_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1580, 366, makeCastMap([Q$HasCell, Q$Column]), StudentView$7_0);
_.getValue = function getValue_82(student){
  return dynamicCast(student, Q$StudentProxy).getIsActive();
}
;
function $update_34(this$static, index, student, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedStudent = index;
    $updateStudentStatus(dynamicCast(this$static.this$0.uiHandlers, Q$StudentListUiHandler), student, value);
  }
}

function StudentView$8_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1581, 1, {}, StudentView$8_0);
_.update = function update_35(index, student, value){
  $update_34(this, index, dynamicCast(student, Q$StudentProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function StudentView_BinderImpl_0(){
}

defineSeed(1582, 1, {}, StudentView_BinderImpl_0);
function $build_f_HTMLPanel1_25(this$static){
  var attachRecord25, f_HTMLPanel1, f_VerticalPanel2, f_Label3, tblStudents;
  f_HTMLPanel1 = new HTMLPanel_0($html1_18(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord25 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord25.origParent?$insertBefore(attachRecord25.origParent, attachRecord25.element, attachRecord25.origSibling):orphan(attachRecord25.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_11(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'LISTE DES ELEVES', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_11(f_VerticalPanel2, (tblStudents = this$static.owner.tblStudents , tblStudents.element.style['height'] = '500px' , tblStudents.element.style['width'] = '100%' , tblStudents)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function StudentView_BinderImpl$Widgets_0(owner){
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1583, 1, {}, StudentView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function $html1_18(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_1(sb.data, "<span id='");
  $append_10(sb, htmlEscape(arg0));
  $append_1(sb.data, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data));
}

function $get_Key$type$com$lemania$eprospects$client$view$StudentView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$view$StudentView$_annotation$$none$$) {
    result = new StudentView_0(new StudentView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$eprospects$client$view$StudentView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$eprospects$client$view$StudentView$_annotation$$none$$;
}

defineSeed(1654, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$StudentProxy]));
_.setEmail = function setEmail(email){
  dynamicCast($getWrapped(this.this$0), Q$StudentProxy).setEmail(email);
}
;
_.setFirstName = function setFirstName(firstName){
  dynamicCast($getWrapped(this.this$0), Q$StudentProxy).setFirstName(firstName);
}
;
_.setIsActive = function setIsActive_5(isActive){
  dynamicCast($getWrapped(this.this$0), Q$StudentProxy).setIsActive(isActive);
}
;
_.setLastName = function setLastName(lastName){
  dynamicCast($getWrapped(this.this$0), Q$StudentProxy).setLastName(lastName);
}
;
defineSeed(1655, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$StudentProxy]));
_.setEmail = function setEmail_0(email){
  $setProperty(this.this$0, 'email', email);
}
;
_.setFirstName = function setFirstName_0(firstName){
  $setProperty(this.this$0, 'firstName', firstName);
}
;
_.setIsActive = function setIsActive_6(isActive){
  $setProperty(this.this$0, 'isActive', isActive);
}
;
_.setLastName = function setLastName_0(lastName){
  $setProperty(this.this$0, 'lastName', lastName);
}
;
function $updateBulletinStatus(this$static, studentId, status_0){
  var x;
  x = new BulletinRequestFactory_BulletinRequestContextImpl$13X_0(this$static, studentId, status_0);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function BulletinRequestFactory_BulletinRequestContextImpl$13X_0(this$0, val$studentId, val$status){
  this.val$studentId = val$studentId;
  this.val$status = val$status;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1689, 649, makeCastMap([Q$AbstractRequest]), BulletinRequestFactory_BulletinRequestContextImpl$13X_0);
_.makeRequestData = function makeRequestData_15(){
  return new RequestData_0('PsbDe9_Xmu6x6CT_jdBG5XSWr7w=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$studentId, this.val$status]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$status = null;
_.val$studentId = null;
function $saveAndReturn_2(this$static, newStudent){
  var x;
  x = new StudentRequestFactory_StudentRequestContextImpl$7X_0(this$static, newStudent);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function StudentRequestFactory_StudentRequestContextImpl$1X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1785, 649, makeCastMap([Q$AbstractRequest]), StudentRequestFactory_StudentRequestContextImpl$1X_0);
_.makeRequestData = function makeRequestData_67(){
  return new RequestData_0('niZPAHVhPWbhvPwYvmErIwDEYOY=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_eprospects_shared_StudentProxy_2_classLit);
}
;
function StudentRequestFactory_StudentRequestContextImpl$7X_0(this$0, val$newStudent){
  this.val$newStudent = val$newStudent;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1787, 649, makeCastMap([Q$AbstractRequest]), StudentRequestFactory_StudentRequestContextImpl$7X_0);
_.makeRequestData = function makeRequestData_69(){
  return new RequestData_0('TyLlw5XxmpOiQJKyRVzXDAC8f3U=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$newStudent]), this.propertyRefs, Lcom_lemania_eprospects_shared_StudentProxy_2_classLit, null);
}
;
_.val$newStudent = null;
function $updateUserActiveStatus(this$static, userEmail, userStatus){
  var x;
  x = new UserRequestFactory_UserRequestContextImpl$12X_0(this$static, userEmail, userStatus);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function UserRequestFactory_UserRequestContextImpl$12X_0(this$0, val$userEmail, val$userStatus){
  this.val$userEmail = val$userEmail;
  this.val$userStatus = val$userStatus;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1801, 649, makeCastMap([Q$AbstractRequest]), UserRequestFactory_UserRequestContextImpl$12X_0);
_.makeRequestData = function makeRequestData_77(){
  return new RequestData_0('LSgW7B5MnEFUq3MKhAk_53vLLXI=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$userEmail, this.val$userStatus]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$userEmail = null;
_.val$userStatus = null;
var Lcom_lemania_eprospects_client_presenter_FrmBulletinManagementPresenter$15_2_classLit = createForClass('com.lemania.eprospects.client.presenter.', 'FrmBulletinManagementPresenter$15', 865), Lcom_lemania_eprospects_client_event_StudentAfterStatusChangeEvent_2_classLit = createForClass('com.lemania.eprospects.client.event.', 'StudentAfterStatusChangeEvent', 781), Lcom_lemania_eprospects_client_presenter_StudentPresenter_2_classLit = createForClass('com.lemania.eprospects.client.presenter.', 'StudentPresenter', 1064), Lcom_lemania_eprospects_client_presenter_StudentPresenter$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.', 'StudentPresenter$1', 1065), Lcom_lemania_eprospects_client_presenter_StudentPresenter$2_2_classLit = createForClass('com.lemania.eprospects.client.presenter.', 'StudentPresenter$2', 1066), Lcom_lemania_eprospects_client_presenter_StudentPresenter$3_2_classLit = createForClass('com.lemania.eprospects.client.presenter.', 'StudentPresenter$3', 1067), Lcom_lemania_eprospects_client_presenter_StudentPresenter$4_2_classLit = createForClass('com.lemania.eprospects.client.presenter.', 'StudentPresenter$4', 1068), Lcom_lemania_eprospects_client_presenter_StudentPresenter$5_2_classLit = createForClass('com.lemania.eprospects.client.presenter.', 'StudentPresenter$5', 1069), Lcom_lemania_eprospects_client_presenter_UserManagementPresenter$7_2_classLit = createForClass('com.lemania.eprospects.client.presenter.', 'UserManagementPresenter$7', 1081), Lcom_lemania_eprospects_client_presenter_FrmBulletinManagementPresenterMyProxyImpl$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.', 'FrmBulletinManagementPresenterMyProxyImpl$1', 876), Lcom_lemania_eprospects_client_presenter_FrmBulletinManagementPresenterMyProxyImpl$1$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.', 'FrmBulletinManagementPresenterMyProxyImpl$1$1', 877), Lcom_lemania_eprospects_client_presenter_UserManagementPresenterMyProxyImpl$3_2_classLit = createForClass('com.lemania.eprospects.client.presenter.', 'UserManagementPresenterMyProxyImpl$3', 1087), Lcom_lemania_eprospects_client_presenter_UserManagementPresenterMyProxyImpl$3$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.', 'UserManagementPresenterMyProxyImpl$3$1', 1088), Lcom_lemania_eprospects_client_view_StudentView_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'StudentView', 1573), Lcom_lemania_eprospects_client_view_StudentView$1_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'StudentView$1', 1574), Lcom_lemania_eprospects_client_view_StudentView$2_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'StudentView$2', 1575), Lcom_lemania_eprospects_client_view_StudentView$3_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'StudentView$3', 1576), Lcom_lemania_eprospects_client_view_StudentView$4_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'StudentView$4', 1577), Lcom_lemania_eprospects_client_view_StudentView$5_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'StudentView$5', 1578), Lcom_lemania_eprospects_client_view_StudentView$6_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'StudentView$6', 1579), Lcom_lemania_eprospects_client_view_StudentView$7_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'StudentView$7', 1580), Lcom_lemania_eprospects_client_view_StudentView$8_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'StudentView$8', 1581), Lcom_lemania_eprospects_client_view_StudentView_1BinderImpl_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'StudentView_BinderImpl', 1582), Lcom_lemania_eprospects_client_view_StudentView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.eprospects.client.view.', 'StudentView_BinderImpl$Widgets', 1583), Lcom_lemania_eprospects_shared_service_BulletinRequestFactory_1BulletinRequestContextImpl$13X_2_classLit = createForClass('com.lemania.eprospects.shared.service.', 'BulletinRequestFactory_BulletinRequestContextImpl$13X', 1689), Lcom_lemania_eprospects_shared_service_StudentRequestFactory_1StudentRequestContextImpl$1X_2_classLit = createForClass('com.lemania.eprospects.shared.service.', 'StudentRequestFactory_StudentRequestContextImpl$1X', 1785), Lcom_lemania_eprospects_shared_service_StudentRequestFactory_1StudentRequestContextImpl$7X_2_classLit = createForClass('com.lemania.eprospects.shared.service.', 'StudentRequestFactory_StudentRequestContextImpl$7X', 1787), Lcom_lemania_eprospects_shared_service_UserRequestFactory_1UserRequestContextImpl$12X_2_classLit = createForClass('com.lemania.eprospects.shared.service.', 'UserRequestFactory_UserRequestContextImpl$12X', 1801);
$entry(onLoad)(34);
