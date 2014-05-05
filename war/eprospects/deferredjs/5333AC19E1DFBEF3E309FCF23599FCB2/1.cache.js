function ApplicationFinalPresenter_0(eventBus, view, proxy){
  $clinit_ApplicationFinalPresenter();
  Presenter_0.call(this, eventBus, view, proxy, ($clinit_MainPagePresenter() , TYPE_SetMainContent));
  dynamicCast(this.view, Q$ApplicationFinalPresenter$MyView).setUiHandlers(this);
}

defineSeed(1084, 698, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget]), ApplicationFinalPresenter_0);
_.onBind = function onBind_29(){
}
;
_.onReset = function onReset_28(){
}
;
function ApplicationFinalView_0(){
  $initWidget_0(this, $build_main(new ApplicationFinalView_BinderImpl$Widgets_0(this)));
}

defineSeed(1087, 703, makeCastMap([Q$IsWidget, Q$ApplicationFinalPresenter$MyView]), ApplicationFinalView_0);
_.setInSlot = function setInSlot_1(slot, content_0){
  slot === ($clinit_ApplicationFinalPresenter() , SLOT_ApplicationFinal)?this.main.setWidget(!content_0?null:!content_0.view?null:content_0.view.asWidget()):undefined;
}
;
_.main = null;
function ApplicationFinalView_BinderImpl_0(){
}

defineSeed(1088, 1, {}, ApplicationFinalView_BinderImpl_0);
function $build_main(this$static){
  var main;
  main = new SimplePanel_0;
  this$static.owner.main = main;
  return main;
}

function ApplicationFinalView_BinderImpl$Widgets_0(owner){
  this.owner = owner;
}

defineSeed(1089, 1, {}, ApplicationFinalView_BinderImpl$Widgets_0);
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

defineSeed(1092, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_138(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$eprospects$client$presenter$applicationfinal$ApplicationFinalPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
var Lcom_lemania_eprospects_client_presenter_applicationfinal_ApplicationFinalPresenter_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationfinal.', 'ApplicationFinalPresenter', 1084), Lcom_lemania_eprospects_client_presenter_applicationfinal_ApplicationFinalView_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationfinal.', 'ApplicationFinalView', 1087), Lcom_lemania_eprospects_client_presenter_applicationfinal_ApplicationFinalView_1BinderImpl_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationfinal.', 'ApplicationFinalView_BinderImpl', 1088), Lcom_lemania_eprospects_client_presenter_applicationfinal_ApplicationFinalView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationfinal.', 'ApplicationFinalView_BinderImpl$Widgets', 1089);
$entry(onLoad)(1);
