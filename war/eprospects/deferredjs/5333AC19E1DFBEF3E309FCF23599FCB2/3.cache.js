function ApplicationPaymentPresenter_0(eventBus, view, proxy){
  $clinit_ApplicationPaymentPresenter();
  Presenter_0.call(this, eventBus, view, proxy, ($clinit_MainPagePresenter() , TYPE_SetMainContent));
  dynamicCast(this.view, Q$ApplicationPaymentPresenter$MyView).setUiHandlers(this);
}

defineSeed(1103, 698, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget]), ApplicationPaymentPresenter_0);
_.onBind = function onBind_31(){
}
;
_.onReset = function onReset_30(){
}
;
function ApplicationPaymentView_0(){
  $initWidget_0(this, $build_main_1(new ApplicationPaymentView_BinderImpl$Widgets_0(this)));
}

defineSeed(1106, 703, makeCastMap([Q$IsWidget, Q$ApplicationPaymentPresenter$MyView]), ApplicationPaymentView_0);
_.setInSlot = function setInSlot_3(slot, content_0){
  slot === ($clinit_ApplicationPaymentPresenter() , SLOT_ApplicationPayment)?this.main.setWidget(!content_0?null:!content_0.view?null:content_0.view.asWidget()):undefined;
}
;
_.main = null;
function ApplicationPaymentView_BinderImpl_0(){
}

defineSeed(1107, 1, {}, ApplicationPaymentView_BinderImpl_0);
function $build_main_1(this$static){
  var main, f_VerticalPanel1, f_Label2;
  main = new SimplePanel_0;
  $add_4(main, (f_VerticalPanel1 = new VerticalPanel_0 , $add_11(f_VerticalPanel1, (f_Label2 = new Label_0 , $setTextOrHtml(f_Label2.directionalTextHelper, 'Payment', false) , $updateHorizontalAlignment(f_Label2) , f_Label2)) , f_VerticalPanel1.element.style['height'] = '100%' , f_VerticalPanel1.element.style['width'] = '100%' , f_VerticalPanel1));
  this$static.owner.main = main;
  return main;
}

function ApplicationPaymentView_BinderImpl$Widgets_0(owner){
  this.owner = owner;
}

defineSeed(1108, 1, {}, ApplicationPaymentView_BinderImpl$Widgets_0);
_.owner = null;
function $get_Key$type$com$lemania$eprospects$client$presenter$applicationpayment$ApplicationPaymentPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationpayment$ApplicationPaymentPresenter$_annotation$$none$$) {
    result = new ApplicationPaymentPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$eprospects$client$presenter$applicationpayment$ApplicationPaymentView$_annotation$$none$$(this$static), $get_Key$type$com$lemania$eprospects$client$presenter$applicationpayment$ApplicationPaymentPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationpayment$ApplicationPaymentPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationpayment$ApplicationPaymentPresenter$_annotation$$none$$;
}

function $get_Key$type$com$lemania$eprospects$client$presenter$applicationpayment$ApplicationPaymentView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationpayment$ApplicationPaymentView$_annotation$$none$$) {
    result = new ApplicationPaymentView_0(new ApplicationPaymentView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationpayment$ApplicationPaymentView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationpayment$ApplicationPaymentView$_annotation$$none$$;
}

defineSeed(1111, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_140(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$eprospects$client$presenter$applicationpayment$ApplicationPaymentPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
var Lcom_lemania_eprospects_client_presenter_applicationpayment_ApplicationPaymentPresenter_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationpayment.', 'ApplicationPaymentPresenter', 1103), Lcom_lemania_eprospects_client_presenter_applicationpayment_ApplicationPaymentView_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationpayment.', 'ApplicationPaymentView', 1106), Lcom_lemania_eprospects_client_presenter_applicationpayment_ApplicationPaymentView_1BinderImpl_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationpayment.', 'ApplicationPaymentView_BinderImpl', 1107), Lcom_lemania_eprospects_client_presenter_applicationpayment_ApplicationPaymentView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationpayment.', 'ApplicationPaymentView_BinderImpl$Widgets', 1108);
$entry(onLoad)(3);
