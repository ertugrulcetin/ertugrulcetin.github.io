goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__40426 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__40427 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__40427);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___40570 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___40570)){
var new_db_40571 = temp__5753__auto___40570;
var fexpr__40434_40572 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__40434_40572.cljs$core$IFn$_invoke$arity$1 ? fexpr__40434_40572.cljs$core$IFn$_invoke$arity$1(new_db_40571) : fexpr__40434_40572.call(null,new_db_40571));
} else {
}

var seq__40435 = cljs.core.seq(effects_without_db);
var chunk__40436 = null;
var count__40437 = (0);
var i__40438 = (0);
while(true){
if((i__40438 < count__40437)){
var vec__40452 = chunk__40436.cljs$core$IIndexed$_nth$arity$2(null,i__40438);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40452,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40452,(1),null);
var temp__5751__auto___40575 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___40575)){
var effect_fn_40576 = temp__5751__auto___40575;
(effect_fn_40576.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40576.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40576.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__40577 = seq__40435;
var G__40578 = chunk__40436;
var G__40579 = count__40437;
var G__40580 = (i__40438 + (1));
seq__40435 = G__40577;
chunk__40436 = G__40578;
count__40437 = G__40579;
i__40438 = G__40580;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__40435);
if(temp__5753__auto__){
var seq__40435__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40435__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__40435__$1);
var G__40581 = cljs.core.chunk_rest(seq__40435__$1);
var G__40582 = c__4649__auto__;
var G__40583 = cljs.core.count(c__4649__auto__);
var G__40584 = (0);
seq__40435 = G__40581;
chunk__40436 = G__40582;
count__40437 = G__40583;
i__40438 = G__40584;
continue;
} else {
var vec__40456 = cljs.core.first(seq__40435__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40456,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40456,(1),null);
var temp__5751__auto___40586 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___40586)){
var effect_fn_40587 = temp__5751__auto___40586;
(effect_fn_40587.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40587.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40587.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__40588 = cljs.core.next(seq__40435__$1);
var G__40589 = null;
var G__40590 = (0);
var G__40591 = (0);
seq__40435 = G__40588;
chunk__40436 = G__40589;
count__40437 = G__40590;
i__40438 = G__40591;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__39949__auto___40592 = re_frame.interop.now();
var duration__39950__auto___40593 = (end__39949__auto___40592 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__39950__auto___40593,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__39949__auto___40592);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__40426);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___40597 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___40597)){
var new_db_40598 = temp__5753__auto___40597;
var fexpr__40459_40599 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__40459_40599.cljs$core$IFn$_invoke$arity$1 ? fexpr__40459_40599.cljs$core$IFn$_invoke$arity$1(new_db_40598) : fexpr__40459_40599.call(null,new_db_40598));
} else {
}

var seq__40460 = cljs.core.seq(effects_without_db);
var chunk__40461 = null;
var count__40462 = (0);
var i__40463 = (0);
while(true){
if((i__40463 < count__40462)){
var vec__40491 = chunk__40461.cljs$core$IIndexed$_nth$arity$2(null,i__40463);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40491,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40491,(1),null);
var temp__5751__auto___40604 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___40604)){
var effect_fn_40605 = temp__5751__auto___40604;
(effect_fn_40605.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40605.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40605.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__40606 = seq__40460;
var G__40607 = chunk__40461;
var G__40608 = count__40462;
var G__40609 = (i__40463 + (1));
seq__40460 = G__40606;
chunk__40461 = G__40607;
count__40462 = G__40608;
i__40463 = G__40609;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__40460);
if(temp__5753__auto__){
var seq__40460__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40460__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__40460__$1);
var G__40610 = cljs.core.chunk_rest(seq__40460__$1);
var G__40611 = c__4649__auto__;
var G__40612 = cljs.core.count(c__4649__auto__);
var G__40613 = (0);
seq__40460 = G__40610;
chunk__40461 = G__40611;
count__40462 = G__40612;
i__40463 = G__40613;
continue;
} else {
var vec__40494 = cljs.core.first(seq__40460__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40494,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40494,(1),null);
var temp__5751__auto___40614 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___40614)){
var effect_fn_40615 = temp__5751__auto___40614;
(effect_fn_40615.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40615.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40615.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__40617 = cljs.core.next(seq__40460__$1);
var G__40618 = null;
var G__40619 = (0);
var G__40620 = (0);
seq__40460 = G__40617;
chunk__40461 = G__40618;
count__40462 = G__40619;
i__40463 = G__40620;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__40498){
var map__40499 = p__40498;
var map__40499__$1 = cljs.core.__destructure_map(map__40499);
var effect = map__40499__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40499__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40499__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__40501 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__40502 = null;
var count__40503 = (0);
var i__40504 = (0);
while(true){
if((i__40504 < count__40503)){
var effect = chunk__40502.cljs$core$IIndexed$_nth$arity$2(null,i__40504);
re_frame.fx.dispatch_later(effect);


var G__40624 = seq__40501;
var G__40625 = chunk__40502;
var G__40626 = count__40503;
var G__40627 = (i__40504 + (1));
seq__40501 = G__40624;
chunk__40502 = G__40625;
count__40503 = G__40626;
i__40504 = G__40627;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__40501);
if(temp__5753__auto__){
var seq__40501__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40501__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__40501__$1);
var G__40628 = cljs.core.chunk_rest(seq__40501__$1);
var G__40629 = c__4649__auto__;
var G__40630 = cljs.core.count(c__4649__auto__);
var G__40631 = (0);
seq__40501 = G__40628;
chunk__40502 = G__40629;
count__40503 = G__40630;
i__40504 = G__40631;
continue;
} else {
var effect = cljs.core.first(seq__40501__$1);
re_frame.fx.dispatch_later(effect);


var G__40632 = cljs.core.next(seq__40501__$1);
var G__40633 = null;
var G__40634 = (0);
var G__40635 = (0);
seq__40501 = G__40632;
chunk__40502 = G__40633;
count__40503 = G__40634;
i__40504 = G__40635;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__40509 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__40510 = null;
var count__40511 = (0);
var i__40512 = (0);
while(true){
if((i__40512 < count__40511)){
var vec__40533 = chunk__40510.cljs$core$IIndexed$_nth$arity$2(null,i__40512);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40533,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40533,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___40641 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___40641)){
var effect_fn_40643 = temp__5751__auto___40641;
(effect_fn_40643.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40643.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40643.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__40644 = seq__40509;
var G__40645 = chunk__40510;
var G__40646 = count__40511;
var G__40647 = (i__40512 + (1));
seq__40509 = G__40644;
chunk__40510 = G__40645;
count__40511 = G__40646;
i__40512 = G__40647;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__40509);
if(temp__5753__auto__){
var seq__40509__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40509__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__40509__$1);
var G__40649 = cljs.core.chunk_rest(seq__40509__$1);
var G__40650 = c__4649__auto__;
var G__40651 = cljs.core.count(c__4649__auto__);
var G__40652 = (0);
seq__40509 = G__40649;
chunk__40510 = G__40650;
count__40511 = G__40651;
i__40512 = G__40652;
continue;
} else {
var vec__40538 = cljs.core.first(seq__40509__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40538,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40538,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___40653 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___40653)){
var effect_fn_40654 = temp__5751__auto___40653;
(effect_fn_40654.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40654.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40654.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__40656 = cljs.core.next(seq__40509__$1);
var G__40657 = null;
var G__40658 = (0);
var G__40659 = (0);
seq__40509 = G__40656;
chunk__40510 = G__40657;
count__40511 = G__40658;
i__40512 = G__40659;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__40545 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__40546 = null;
var count__40547 = (0);
var i__40548 = (0);
while(true){
if((i__40548 < count__40547)){
var event = chunk__40546.cljs$core$IIndexed$_nth$arity$2(null,i__40548);
re_frame.router.dispatch(event);


var G__40661 = seq__40545;
var G__40662 = chunk__40546;
var G__40663 = count__40547;
var G__40664 = (i__40548 + (1));
seq__40545 = G__40661;
chunk__40546 = G__40662;
count__40547 = G__40663;
i__40548 = G__40664;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__40545);
if(temp__5753__auto__){
var seq__40545__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40545__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__40545__$1);
var G__40667 = cljs.core.chunk_rest(seq__40545__$1);
var G__40668 = c__4649__auto__;
var G__40669 = cljs.core.count(c__4649__auto__);
var G__40670 = (0);
seq__40545 = G__40667;
chunk__40546 = G__40668;
count__40547 = G__40669;
i__40548 = G__40670;
continue;
} else {
var event = cljs.core.first(seq__40545__$1);
re_frame.router.dispatch(event);


var G__40674 = cljs.core.next(seq__40545__$1);
var G__40675 = null;
var G__40676 = (0);
var G__40677 = (0);
seq__40545 = G__40674;
chunk__40546 = G__40675;
count__40547 = G__40676;
i__40548 = G__40677;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__40559 = cljs.core.seq(value);
var chunk__40560 = null;
var count__40561 = (0);
var i__40562 = (0);
while(true){
if((i__40562 < count__40561)){
var event = chunk__40560.cljs$core$IIndexed$_nth$arity$2(null,i__40562);
clear_event(event);


var G__40679 = seq__40559;
var G__40680 = chunk__40560;
var G__40681 = count__40561;
var G__40682 = (i__40562 + (1));
seq__40559 = G__40679;
chunk__40560 = G__40680;
count__40561 = G__40681;
i__40562 = G__40682;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__40559);
if(temp__5753__auto__){
var seq__40559__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40559__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__40559__$1);
var G__40683 = cljs.core.chunk_rest(seq__40559__$1);
var G__40684 = c__4649__auto__;
var G__40685 = cljs.core.count(c__4649__auto__);
var G__40686 = (0);
seq__40559 = G__40683;
chunk__40560 = G__40684;
count__40561 = G__40685;
i__40562 = G__40686;
continue;
} else {
var event = cljs.core.first(seq__40559__$1);
clear_event(event);


var G__40689 = cljs.core.next(seq__40559__$1);
var G__40690 = null;
var G__40691 = (0);
var G__40692 = (0);
seq__40559 = G__40689;
chunk__40560 = G__40690;
count__40561 = G__40691;
i__40562 = G__40692;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
