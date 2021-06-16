goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__36824,p__36825){
var map__36826 = p__36824;
var map__36826__$1 = cljs.core.__destructure_map(map__36826);
var svc = map__36826__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36826__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36826__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36826__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36827 = p__36825;
var map__36827__$1 = cljs.core.__destructure_map(map__36827);
var msg = map__36827__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36827__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36827__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36827__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36827__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__36834,p__36835){
var map__36838 = p__36834;
var map__36838__$1 = cljs.core.__destructure_map(map__36838);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36838__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__36839 = p__36835;
var map__36839__$1 = cljs.core.__destructure_map(map__36839);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36839__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__36843,p__36844){
var map__36845 = p__36843;
var map__36845__$1 = cljs.core.__destructure_map(map__36845);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36845__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36845__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36846 = p__36844;
var map__36846__$1 = cljs.core.__destructure_map(map__36846);
var msg = map__36846__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36846__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__36851,tid){
var map__36852 = p__36851;
var map__36852__$1 = cljs.core.__destructure_map(map__36852);
var svc = map__36852__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36852__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__36863 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__36864 = null;
var count__36865 = (0);
var i__36866 = (0);
while(true){
if((i__36866 < count__36865)){
var vec__36878 = chunk__36864.cljs$core$IIndexed$_nth$arity$2(null,i__36866);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36878,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36878,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36898 = seq__36863;
var G__36899 = chunk__36864;
var G__36900 = count__36865;
var G__36901 = (i__36866 + (1));
seq__36863 = G__36898;
chunk__36864 = G__36899;
count__36865 = G__36900;
i__36866 = G__36901;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36863);
if(temp__5753__auto__){
var seq__36863__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36863__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__36863__$1);
var G__36902 = cljs.core.chunk_rest(seq__36863__$1);
var G__36903 = c__4649__auto__;
var G__36904 = cljs.core.count(c__4649__auto__);
var G__36905 = (0);
seq__36863 = G__36902;
chunk__36864 = G__36903;
count__36865 = G__36904;
i__36866 = G__36905;
continue;
} else {
var vec__36881 = cljs.core.first(seq__36863__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36881,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36881,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36906 = cljs.core.next(seq__36863__$1);
var G__36907 = null;
var G__36908 = (0);
var G__36909 = (0);
seq__36863 = G__36906;
chunk__36864 = G__36907;
count__36865 = G__36908;
i__36866 = G__36909;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__36854_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__36854_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__36855_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__36855_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__36856_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__36856_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__36857_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__36857_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__36888){
var map__36889 = p__36888;
var map__36889__$1 = cljs.core.__destructure_map(map__36889);
var svc = map__36889__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36889__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36889__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
