goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__32992,res){
var map__32993 = p__32992;
var map__32993__$1 = cljs.core.__destructure_map(map__32993);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32993__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32993__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__32994 = res;
var G__32994__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32994,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__32994);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32994__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__32994__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__33006 = arguments.length;
switch (G__33006) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__33008,msg,handlers,timeout_after_ms){
var map__33009 = p__33008;
var map__33009__$1 = cljs.core.__destructure_map(map__33009);
var runtime = map__33009__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33009__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___33275 = arguments.length;
var i__4830__auto___33276 = (0);
while(true){
if((i__4830__auto___33276 < len__4829__auto___33275)){
args__4835__auto__.push((arguments[i__4830__auto___33276]));

var G__33277 = (i__4830__auto___33276 + (1));
i__4830__auto___33276 = G__33277;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__33013,ev,args){
var map__33014 = p__33013;
var map__33014__$1 = cljs.core.__destructure_map(map__33014);
var runtime = map__33014__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33014__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__33015 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33018 = null;
var count__33019 = (0);
var i__33020 = (0);
while(true){
if((i__33020 < count__33019)){
var ext = chunk__33018.cljs$core$IIndexed$_nth$arity$2(null,i__33020);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33279 = seq__33015;
var G__33280 = chunk__33018;
var G__33281 = count__33019;
var G__33282 = (i__33020 + (1));
seq__33015 = G__33279;
chunk__33018 = G__33280;
count__33019 = G__33281;
i__33020 = G__33282;
continue;
} else {
var G__33283 = seq__33015;
var G__33284 = chunk__33018;
var G__33285 = count__33019;
var G__33286 = (i__33020 + (1));
seq__33015 = G__33283;
chunk__33018 = G__33284;
count__33019 = G__33285;
i__33020 = G__33286;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33015);
if(temp__5753__auto__){
var seq__33015__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33015__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__33015__$1);
var G__33290 = cljs.core.chunk_rest(seq__33015__$1);
var G__33291 = c__4649__auto__;
var G__33292 = cljs.core.count(c__4649__auto__);
var G__33293 = (0);
seq__33015 = G__33290;
chunk__33018 = G__33291;
count__33019 = G__33292;
i__33020 = G__33293;
continue;
} else {
var ext = cljs.core.first(seq__33015__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33296 = cljs.core.next(seq__33015__$1);
var G__33297 = null;
var G__33298 = (0);
var G__33299 = (0);
seq__33015 = G__33296;
chunk__33018 = G__33297;
count__33019 = G__33298;
i__33020 = G__33299;
continue;
} else {
var G__33303 = cljs.core.next(seq__33015__$1);
var G__33304 = null;
var G__33305 = (0);
var G__33306 = (0);
seq__33015 = G__33303;
chunk__33018 = G__33304;
count__33019 = G__33305;
i__33020 = G__33306;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq33010){
var G__33011 = cljs.core.first(seq33010);
var seq33010__$1 = cljs.core.next(seq33010);
var G__33012 = cljs.core.first(seq33010__$1);
var seq33010__$2 = cljs.core.next(seq33010__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33011,G__33012,seq33010__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__33071,p__33072){
var map__33074 = p__33071;
var map__33074__$1 = cljs.core.__destructure_map(map__33074);
var runtime = map__33074__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33074__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33075 = p__33072;
var map__33075__$1 = cljs.core.__destructure_map(map__33075);
var msg = map__33075__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33075__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__33077 = cljs.core.deref(state_ref);
var map__33077__$1 = cljs.core.__destructure_map(map__33077);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33077__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33077__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__33104){
var map__33105 = p__33104;
var map__33105__$1 = cljs.core.__destructure_map(map__33105);
var runtime = map__33105__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33105__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4223__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__33114,msg){
var map__33119 = p__33114;
var map__33119__$1 = cljs.core.__destructure_map(map__33119);
var runtime = map__33119__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33119__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__33193,key,p__33194){
var map__33195 = p__33193;
var map__33195__$1 = cljs.core.__destructure_map(map__33195);
var state = map__33195__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33195__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__33196 = p__33194;
var map__33196__$1 = cljs.core.__destructure_map(map__33196);
var spec = map__33196__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33196__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__33204,key,spec){
var map__33205 = p__33204;
var map__33205__$1 = cljs.core.__destructure_map(map__33205);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33205__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__33206_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__33206_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__33207_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__33207_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__33208_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__33208_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__33209_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__33209_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__33210_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__33210_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__33225,key){
var map__33227 = p__33225;
var map__33227__$1 = cljs.core.__destructure_map(map__33227);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33227__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__33234,msg){
var map__33235 = p__33234;
var map__33235__$1 = cljs.core.__destructure_map(map__33235);
var runtime = map__33235__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33235__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__33242,p__33243){
var map__33245 = p__33242;
var map__33245__$1 = cljs.core.__destructure_map(map__33245);
var runtime = map__33245__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33245__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33246 = p__33243;
var map__33246__$1 = cljs.core.__destructure_map(map__33246);
var msg = map__33246__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33246__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33246__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__33253 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33255 = null;
var count__33256 = (0);
var i__33257 = (0);
while(true){
if((i__33257 < count__33256)){
var map__33264 = chunk__33255.cljs$core$IIndexed$_nth$arity$2(null,i__33257);
var map__33264__$1 = cljs.core.__destructure_map(map__33264);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33264__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33347 = seq__33253;
var G__33348 = chunk__33255;
var G__33349 = count__33256;
var G__33350 = (i__33257 + (1));
seq__33253 = G__33347;
chunk__33255 = G__33348;
count__33256 = G__33349;
i__33257 = G__33350;
continue;
} else {
var G__33351 = seq__33253;
var G__33352 = chunk__33255;
var G__33353 = count__33256;
var G__33354 = (i__33257 + (1));
seq__33253 = G__33351;
chunk__33255 = G__33352;
count__33256 = G__33353;
i__33257 = G__33354;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33253);
if(temp__5753__auto__){
var seq__33253__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33253__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__33253__$1);
var G__33357 = cljs.core.chunk_rest(seq__33253__$1);
var G__33358 = c__4649__auto__;
var G__33359 = cljs.core.count(c__4649__auto__);
var G__33360 = (0);
seq__33253 = G__33357;
chunk__33255 = G__33358;
count__33256 = G__33359;
i__33257 = G__33360;
continue;
} else {
var map__33265 = cljs.core.first(seq__33253__$1);
var map__33265__$1 = cljs.core.__destructure_map(map__33265);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33265__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33361 = cljs.core.next(seq__33253__$1);
var G__33362 = null;
var G__33363 = (0);
var G__33364 = (0);
seq__33253 = G__33361;
chunk__33255 = G__33362;
count__33256 = G__33363;
i__33257 = G__33364;
continue;
} else {
var G__33365 = cljs.core.next(seq__33253__$1);
var G__33366 = null;
var G__33367 = (0);
var G__33368 = (0);
seq__33253 = G__33365;
chunk__33255 = G__33366;
count__33256 = G__33367;
i__33257 = G__33368;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
