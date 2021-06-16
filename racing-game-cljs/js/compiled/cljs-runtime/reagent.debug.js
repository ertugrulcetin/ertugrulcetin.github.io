goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__38029__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__38029 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38030__i = 0, G__38030__a = new Array(arguments.length -  0);
while (G__38030__i < G__38030__a.length) {G__38030__a[G__38030__i] = arguments[G__38030__i + 0]; ++G__38030__i;}
  args = new cljs.core.IndexedSeq(G__38030__a,0,null);
} 
return G__38029__delegate.call(this,args);};
G__38029.cljs$lang$maxFixedArity = 0;
G__38029.cljs$lang$applyTo = (function (arglist__38035){
var args = cljs.core.seq(arglist__38035);
return G__38029__delegate(args);
});
G__38029.cljs$core$IFn$_invoke$arity$variadic = G__38029__delegate;
return G__38029;
})()
);

(o.error = (function() { 
var G__38036__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__38036 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38041__i = 0, G__38041__a = new Array(arguments.length -  0);
while (G__38041__i < G__38041__a.length) {G__38041__a[G__38041__i] = arguments[G__38041__i + 0]; ++G__38041__i;}
  args = new cljs.core.IndexedSeq(G__38041__a,0,null);
} 
return G__38036__delegate.call(this,args);};
G__38036.cljs$lang$maxFixedArity = 0;
G__38036.cljs$lang$applyTo = (function (arglist__38043){
var args = cljs.core.seq(arglist__38043);
return G__38036__delegate(args);
});
G__38036.cljs$core$IFn$_invoke$arity$variadic = G__38036__delegate;
return G__38036;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
