function ApplicationFinalPresenter_0(eventBus, view, proxy){
  $clinit_ApplicationFinalPresenter();
  Presenter_0.call(this, eventBus, view, proxy, ($clinit_MainPagePresenter() , TYPE_SetMainContent));
  dynamicCast(this.view, Q$ApplicationFinalPresenter$MyView).setUiHandlers(this);
}

defineSeed(1083, 697, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget]), ApplicationFinalPresenter_0);
_.onBind = function onBind_29(){
  $doFire(this.eventBus, new DrawSchoolInterfaceEvent_0, null);
}
;
_.onReset = function onReset_28(){
}
;
function ApplicationFinalView_0(){
  $initWidget_0(this, $build_main(new ApplicationFinalView_BinderImpl$Widgets_0(this)));
}

defineSeed(1086, 702, makeCastMap([Q$IsWidget, Q$ApplicationFinalPresenter$MyView]), ApplicationFinalView_0);
_.setInSlot = function setInSlot_1(slot, content_0){
  slot === ($clinit_ApplicationFinalPresenter() , SLOT_ApplicationFinal)?this.main.setWidget(!content_0?null:!content_0.view?null:content_0.view.asWidget()):undefined;
}
;
_.main = null;
function ApplicationFinalView_BinderImpl_0(){
}

defineSeed(1087, 1, {}, ApplicationFinalView_BinderImpl_0);
function $build_main(this$static){
  var main, f_VerticalPanel1, f_Label2, f_Label3, f_FlowPanel4, f_HorizontalPanel5, f_VerticalPanel6, f_Label7;
  main = new SimplePanel_0;
  $add_4(main, (f_VerticalPanel1 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel1, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $add_11(f_VerticalPanel1, (f_Label2 = new Label_0 , f_Label2.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label2.directionalTextHelper, 'MERCI', false) , $updateHorizontalAlignment(f_Label2) , f_Label2)) , $add_11(f_VerticalPanel1, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label3.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_11(f_VerticalPanel1, (f_FlowPanel4 = new FlowPanel_0 , $add_7(f_FlowPanel4, (f_HorizontalPanel5 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel5, (f_VerticalPanel6 = new VerticalPanel_0 , $add_11(f_VerticalPanel6, (f_Label7 = new Label_0 , $setTextOrHtml(f_Label7.directionalTextHelper, 'MERCI', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , f_VerticalPanel6.element.style['width'] = '100%' , f_VerticalPanel6.table['cellSpacing'] = 10 , f_VerticalPanel6)) , f_HorizontalPanel5.element.style['width'] = '100%' , f_HorizontalPanel5.table['cellSpacing'] = 10 , f_HorizontalPanel5)) , f_FlowPanel4.element.style['width'] = '900px' , f_FlowPanel4)) , f_VerticalPanel1.element.style['height'] = '' , f_VerticalPanel1.element.style['width'] = '100%' , f_VerticalPanel1));
  this$static.owner.main = main;
  return main;
}

function ApplicationFinalView_BinderImpl$Widgets_0(owner){
  this.owner = owner;
}

defineSeed(1088, 1, {}, ApplicationFinalView_BinderImpl$Widgets_0);
_.owner = null;
function $get_Key$type$com$lemania$eprospects$client$presenter$applicationfinal$ApplicationFinalPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationfinal$ApplicationFinalPresenter$_annotation$$none$$) {
    result = new ApplicationFinalPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$eprospects$client$presenter$applicationfinal$ApplicationFinalView$_annotation$$none$$(this$static), $get_Key$type$com$lemania$eprospects$client$presenter$applicationfinal$ApplicationFinalPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationfinal$ApplicationFinalPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationfinal$ApplicationFinalPresenter$_annotation$$none$$;
}

function $get_Key$type$com$lemania$eprospects$client$presenter$applicationfinal$ApplicationFinalView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationfinal$ApplicationFinalView$_annotation$$none$$) {
    result = new ApplicationFinalView_0(new ApplicationFinalView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationfinal$ApplicationFinalView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationfinal$ApplicationFinalView$_annotation$$none$$;
}

defineSeed(1091, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_138(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$eprospects$client$presenter$applicationfinal$ApplicationFinalPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
var Lcom_lemania_eprospects_client_presenter_applicationfinal_ApplicationFinalPresenter_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationfinal.', 'ApplicationFinalPresenter', 1083), Lcom_lemania_eprospects_client_presenter_applicationfinal_ApplicationFinalView_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationfinal.', 'ApplicationFinalView', 1086), Lcom_lemania_eprospects_client_presenter_applicationfinal_ApplicationFinalView_1BinderImpl_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationfinal.', 'ApplicationFinalView_BinderImpl', 1087), Lcom_lemania_eprospects_client_presenter_applicationfinal_ApplicationFinalView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationfinal.', 'ApplicationFinalView_BinderImpl$Widgets', 1088);
$entry(onLoad)(1);