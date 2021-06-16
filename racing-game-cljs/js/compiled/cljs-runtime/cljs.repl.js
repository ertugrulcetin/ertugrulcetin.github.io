goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35930){
var map__35932 = p__35930;
var map__35932__$1 = cljs.core.__destructure_map(map__35932);
var m = map__35932__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35932__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35932__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4223__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35935_36300 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35936_36301 = null;
var count__35937_36302 = (0);
var i__35938_36303 = (0);
while(true){
if((i__35938_36303 < count__35937_36302)){
var f_36304 = chunk__35936_36301.cljs$core$IIndexed$_nth$arity$2(null,i__35938_36303);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36304], 0));


var G__36305 = seq__35935_36300;
var G__36306 = chunk__35936_36301;
var G__36307 = count__35937_36302;
var G__36308 = (i__35938_36303 + (1));
seq__35935_36300 = G__36305;
chunk__35936_36301 = G__36306;
count__35937_36302 = G__36307;
i__35938_36303 = G__36308;
continue;
} else {
var temp__5753__auto___36309 = cljs.core.seq(seq__35935_36300);
if(temp__5753__auto___36309){
var seq__35935_36310__$1 = temp__5753__auto___36309;
if(cljs.core.chunked_seq_QMARK_(seq__35935_36310__$1)){
var c__4649__auto___36311 = cljs.core.chunk_first(seq__35935_36310__$1);
var G__36312 = cljs.core.chunk_rest(seq__35935_36310__$1);
var G__36313 = c__4649__auto___36311;
var G__36314 = cljs.core.count(c__4649__auto___36311);
var G__36315 = (0);
seq__35935_36300 = G__36312;
chunk__35936_36301 = G__36313;
count__35937_36302 = G__36314;
i__35938_36303 = G__36315;
continue;
} else {
var f_36316 = cljs.core.first(seq__35935_36310__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36316], 0));


var G__36317 = cljs.core.next(seq__35935_36310__$1);
var G__36318 = null;
var G__36319 = (0);
var G__36320 = (0);
seq__35935_36300 = G__36317;
chunk__35936_36301 = G__36318;
count__35937_36302 = G__36319;
i__35938_36303 = G__36320;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36321 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36321], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36321)))?cljs.core.second(arglists_36321):arglists_36321)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35947_36336 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35948_36337 = null;
var count__35949_36338 = (0);
var i__35950_36339 = (0);
while(true){
if((i__35950_36339 < count__35949_36338)){
var vec__35962_36340 = chunk__35948_36337.cljs$core$IIndexed$_nth$arity$2(null,i__35950_36339);
var name_36341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35962_36340,(0),null);
var map__35965_36342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35962_36340,(1),null);
var map__35965_36343__$1 = cljs.core.__destructure_map(map__35965_36342);
var doc_36344 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35965_36343__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36345 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35965_36343__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36341], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36345], 0));

if(cljs.core.truth_(doc_36344)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36344], 0));
} else {
}


var G__36346 = seq__35947_36336;
var G__36347 = chunk__35948_36337;
var G__36348 = count__35949_36338;
var G__36349 = (i__35950_36339 + (1));
seq__35947_36336 = G__36346;
chunk__35948_36337 = G__36347;
count__35949_36338 = G__36348;
i__35950_36339 = G__36349;
continue;
} else {
var temp__5753__auto___36350 = cljs.core.seq(seq__35947_36336);
if(temp__5753__auto___36350){
var seq__35947_36352__$1 = temp__5753__auto___36350;
if(cljs.core.chunked_seq_QMARK_(seq__35947_36352__$1)){
var c__4649__auto___36353 = cljs.core.chunk_first(seq__35947_36352__$1);
var G__36354 = cljs.core.chunk_rest(seq__35947_36352__$1);
var G__36355 = c__4649__auto___36353;
var G__36356 = cljs.core.count(c__4649__auto___36353);
var G__36357 = (0);
seq__35947_36336 = G__36354;
chunk__35948_36337 = G__36355;
count__35949_36338 = G__36356;
i__35950_36339 = G__36357;
continue;
} else {
var vec__35970_36359 = cljs.core.first(seq__35947_36352__$1);
var name_36360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35970_36359,(0),null);
var map__35973_36361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35970_36359,(1),null);
var map__35973_36362__$1 = cljs.core.__destructure_map(map__35973_36361);
var doc_36363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35973_36362__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35973_36362__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36360], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36364], 0));

if(cljs.core.truth_(doc_36363)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36363], 0));
} else {
}


var G__36365 = cljs.core.next(seq__35947_36352__$1);
var G__36366 = null;
var G__36367 = (0);
var G__36368 = (0);
seq__35947_36336 = G__36365;
chunk__35948_36337 = G__36366;
count__35949_36338 = G__36367;
i__35950_36339 = G__36368;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__35974 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35975 = null;
var count__35976 = (0);
var i__35977 = (0);
while(true){
if((i__35977 < count__35976)){
var role = chunk__35975.cljs$core$IIndexed$_nth$arity$2(null,i__35977);
var temp__5753__auto___36383__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___36383__$1)){
var spec_36386 = temp__5753__auto___36383__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36386)], 0));
} else {
}


var G__36392 = seq__35974;
var G__36393 = chunk__35975;
var G__36394 = count__35976;
var G__36395 = (i__35977 + (1));
seq__35974 = G__36392;
chunk__35975 = G__36393;
count__35976 = G__36394;
i__35977 = G__36395;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__35974);
if(temp__5753__auto____$1){
var seq__35974__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35974__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35974__$1);
var G__36401 = cljs.core.chunk_rest(seq__35974__$1);
var G__36402 = c__4649__auto__;
var G__36403 = cljs.core.count(c__4649__auto__);
var G__36404 = (0);
seq__35974 = G__36401;
chunk__35975 = G__36402;
count__35976 = G__36403;
i__35977 = G__36404;
continue;
} else {
var role = cljs.core.first(seq__35974__$1);
var temp__5753__auto___36405__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___36405__$2)){
var spec_36406 = temp__5753__auto___36405__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36406)], 0));
} else {
}


var G__36411 = cljs.core.next(seq__35974__$1);
var G__36412 = null;
var G__36413 = (0);
var G__36414 = (0);
seq__35974 = G__36411;
chunk__35975 = G__36412;
count__35976 = G__36413;
i__35977 = G__36414;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36437 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36438 = cljs.core.ex_cause(t);
via = G__36437;
t = G__36438;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36089 = datafied_throwable;
var map__36089__$1 = cljs.core.__destructure_map(map__36089);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36089__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36089__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36089__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36090 = cljs.core.last(via);
var map__36090__$1 = cljs.core.__destructure_map(map__36090);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36090__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36090__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36090__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36093 = data;
var map__36093__$1 = cljs.core.__destructure_map(map__36093);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36093__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36093__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36093__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36094 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36094__$1 = cljs.core.__destructure_map(map__36094);
var top_data = map__36094__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36094__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36097 = phase;
var G__36097__$1 = (((G__36097 instanceof cljs.core.Keyword))?G__36097.fqn:null);
switch (G__36097__$1) {
case "read-source":
var map__36098 = data;
var map__36098__$1 = cljs.core.__destructure_map(map__36098);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36098__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36098__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36099 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36099__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36099,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36099);
var G__36099__$2 = (cljs.core.truth_((function (){var fexpr__36100 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36100.cljs$core$IFn$_invoke$arity$1 ? fexpr__36100.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36100.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36099__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36099__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36099__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36099__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36105 = top_data;
var G__36105__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36105,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36105);
var G__36105__$2 = (cljs.core.truth_((function (){var fexpr__36107 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36107.cljs$core$IFn$_invoke$arity$1 ? fexpr__36107.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36107.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36105__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36105__$1);
var G__36105__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36105__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36105__$2);
var G__36105__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36105__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36105__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36105__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36105__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36110 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36110,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36110,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36110,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36110,(3),null);
var G__36114 = top_data;
var G__36114__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36114,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36114);
var G__36114__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36114__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36114__$1);
var G__36114__$3 = (cljs.core.truth_((function (){var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36114__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36114__$2);
var G__36114__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36114__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36114__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36114__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36114__$4;
}

break;
case "execution":
var vec__36117 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36117,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36117,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36117,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36117,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36088_SHARP_){
var or__4223__auto__ = (p1__36088_SHARP_ == null);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var fexpr__36121 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36121.cljs$core$IFn$_invoke$arity$1 ? fexpr__36121.cljs$core$IFn$_invoke$arity$1(p1__36088_SHARP_) : fexpr__36121.call(null,p1__36088_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return line;
}
})();
var G__36130 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36130__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36130,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36130);
var G__36130__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36130__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36130__$1);
var G__36130__$3 = (cljs.core.truth_((function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36130__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36130__$2);
var G__36130__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36130__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36130__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36130__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36130__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36097__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36155){
var map__36156 = p__36155;
var map__36156__$1 = cljs.core.__destructure_map(map__36156);
var triage_data = map__36156__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36156__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36156__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36156__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36156__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36156__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36156__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36156__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36156__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = source;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = line;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4223__auto__ = class$;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36177 = phase;
var G__36177__$1 = (((G__36177 instanceof cljs.core.Keyword))?G__36177.fqn:null);
switch (G__36177__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36178 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36179 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36180 = loc;
var G__36181 = (cljs.core.truth_(spec)?(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36182_36480 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36183_36481 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36184_36482 = true;
var _STAR_print_fn_STAR__temp_val__36185_36483 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36184_36482);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36185_36483);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36147_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36147_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36183_36481);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36182_36480);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36178,G__36179,G__36180,G__36181) : format.call(null,G__36178,G__36179,G__36180,G__36181));

break;
case "macroexpansion":
var G__36186 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36187 = cause_type;
var G__36188 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36189 = loc;
var G__36190 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36186,G__36187,G__36188,G__36189,G__36190) : format.call(null,G__36186,G__36187,G__36188,G__36189,G__36190));

break;
case "compile-syntax-check":
var G__36192 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36193 = cause_type;
var G__36194 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36195 = loc;
var G__36196 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36192,G__36193,G__36194,G__36195,G__36196) : format.call(null,G__36192,G__36193,G__36194,G__36195,G__36196));

break;
case "compilation":
var G__36197 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36198 = cause_type;
var G__36199 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36200 = loc;
var G__36201 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36197,G__36198,G__36199,G__36200,G__36201) : format.call(null,G__36197,G__36198,G__36199,G__36200,G__36201));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36202 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36203 = symbol;
var G__36204 = loc;
var G__36205 = (function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36206_36486 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36207_36487 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36208_36488 = true;
var _STAR_print_fn_STAR__temp_val__36209_36489 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36208_36488);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36209_36489);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36154_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36154_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36207_36487);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36206_36486);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36202,G__36203,G__36204,G__36205) : format.call(null,G__36202,G__36203,G__36204,G__36205));
} else {
var G__36216 = "Execution error%s at %s(%s).\n%s\n";
var G__36217 = cause_type;
var G__36218 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36219 = loc;
var G__36220 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36216,G__36217,G__36218,G__36219,G__36220) : format.call(null,G__36216,G__36217,G__36218,G__36219,G__36220));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36177__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
