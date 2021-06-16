goog.provide('devtools.format');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_27664 = (function (value){
var x__4521__auto__ = (((value == null))?null:value);
var m__4522__auto__ = (devtools.format._header[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4522__auto__.call(null,value));
} else {
var m__4519__auto__ = (devtools.format._header["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4519__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_27664(value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_27665 = (function (value){
var x__4521__auto__ = (((value == null))?null:value);
var m__4522__auto__ = (devtools.format._has_body[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4522__auto__.call(null,value));
} else {
var m__4519__auto__ = (devtools.format._has_body["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4519__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_27665(value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_27667 = (function (value){
var x__4521__auto__ = (((value == null))?null:value);
var m__4522__auto__ = (devtools.format._body[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4522__auto__.call(null,value));
} else {
var m__4519__auto__ = (devtools.format._body["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4519__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_27667(value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o27540 = temp__5751__auto__;
var temp__5751__auto____$1 = (o27540["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o27541 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o27541["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o27542 = temp__5751__auto____$2;
return (o27542["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o27551 = temp__5751__auto__;
var temp__5751__auto____$1 = (o27551["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o27552 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o27552["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o27553 = temp__5751__auto____$2;
return (o27553["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o27560 = temp__5751__auto__;
var temp__5751__auto____$1 = (o27560["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o27561 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o27561["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o27562 = temp__5751__auto____$2;
return (o27562["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o27564 = temp__5751__auto__;
var temp__5751__auto____$1 = (o27564["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o27565 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o27565["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o27566 = temp__5751__auto____$2;
return (o27566["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o27568 = temp__5751__auto__;
var temp__5751__auto____$1 = (o27568["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o27569 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o27569["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o27570 = temp__5751__auto____$2;
return (o27570["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o27572 = temp__5751__auto__;
var temp__5751__auto____$1 = (o27572["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o27573 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o27573["markup"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o27574 = temp__5751__auto____$2;
return (o27574["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o27576 = temp__5751__auto__;
var temp__5751__auto____$1 = (o27576["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o27577 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o27577["markup"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o27578 = temp__5751__auto____$2;
return (o27578["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4835__auto__ = [];
var len__4829__auto___27670 = arguments.length;
var i__4830__auto___27671 = (0);
while(true){
if((i__4830__auto___27671 < len__4829__auto___27670)){
args__4835__auto__.push((arguments[i__4830__auto___27671]));

var G__27672 = (i__4830__auto___27671 + (1));
i__4830__auto___27671 = G__27672;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq27583){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27583));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4835__auto__ = [];
var len__4829__auto___27673 = arguments.length;
var i__4830__auto___27674 = (0);
while(true){
if((i__4830__auto___27674 < len__4829__auto___27673)){
args__4835__auto__.push((arguments[i__4830__auto___27674]));

var G__27675 = (i__4830__auto___27674 + (1));
i__4830__auto___27674 = G__27675;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq27587){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27587));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4835__auto__ = [];
var len__4829__auto___27676 = arguments.length;
var i__4830__auto___27677 = (0);
while(true){
if((i__4830__auto___27677 < len__4829__auto___27676)){
args__4835__auto__.push((arguments[i__4830__auto___27677]));

var G__27678 = (i__4830__auto___27677 + (1));
i__4830__auto___27677 = G__27678;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq27601){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27601));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4835__auto__ = [];
var len__4829__auto___27679 = arguments.length;
var i__4830__auto___27680 = (0);
while(true){
if((i__4830__auto___27680 < len__4829__auto___27679)){
args__4835__auto__.push((arguments[i__4830__auto___27680]));

var G__27681 = (i__4830__auto___27680 + (1));
i__4830__auto___27680 = G__27681;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq27604){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27604));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__4835__auto__ = [];
var len__4829__auto___27682 = arguments.length;
var i__4830__auto___27683 = (0);
while(true){
if((i__4830__auto___27683 < len__4829__auto___27682)){
args__4835__auto__.push((arguments[i__4830__auto___27683]));

var G__27685 = (i__4830__auto___27683 + (1));
i__4830__auto___27683 = G__27685;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq27610){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27610));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__4835__auto__ = [];
var len__4829__auto___27688 = arguments.length;
var i__4830__auto___27689 = (0);
while(true){
if((i__4830__auto___27689 < len__4829__auto___27688)){
args__4835__auto__.push((arguments[i__4830__auto___27689]));

var G__27691 = (i__4830__auto___27689 + (1));
i__4830__auto___27689 = G__27691;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq27619){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27619));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4835__auto__ = [];
var len__4829__auto___27695 = arguments.length;
var i__4830__auto___27696 = (0);
while(true){
if((i__4830__auto___27696 < len__4829__auto___27695)){
args__4835__auto__.push((arguments[i__4830__auto___27696]));

var G__27697 = (i__4830__auto___27696 + (1));
i__4830__auto___27696 = G__27697;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq27624){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27624));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4835__auto__ = [];
var len__4829__auto___27701 = arguments.length;
var i__4830__auto___27702 = (0);
while(true){
if((i__4830__auto___27702 < len__4829__auto___27701)){
args__4835__auto__.push((arguments[i__4830__auto___27702]));

var G__27704 = (i__4830__auto___27702 + (1));
i__4830__auto___27702 = G__27704;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__27633){
var vec__27636 = p__27633;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27636,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__27628_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__27628_SHARP_,state_override], 0));
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq27629){
var G__27630 = cljs.core.first(seq27629);
var seq27629__$1 = cljs.core.next(seq27629);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27630,seq27629__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__27641 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__27642 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__27643 = (function (){var G__27646 = new cljs.core.Keyword(null,"li","li",723558921);
var G__27647 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__27648 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__27646,G__27647,G__27648) : devtools.format.make_template_fn.call(null,G__27646,G__27647,G__27648));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__27641,G__27642,G__27643) : devtools.format.make_template_fn.call(null,G__27641,G__27642,G__27643));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4835__auto__ = [];
var len__4829__auto___27709 = arguments.length;
var i__4830__auto___27710 = (0);
while(true){
if((i__4830__auto___27710 < len__4829__auto___27709)){
args__4835__auto__.push((arguments[i__4830__auto___27710]));

var G__27711 = (i__4830__auto___27710 + (1));
i__4830__auto___27710 = G__27711;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq27653){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27653));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4835__auto__ = [];
var len__4829__auto___27715 = arguments.length;
var i__4830__auto___27717 = (0);
while(true){
if((i__4830__auto___27717 < len__4829__auto___27715)){
args__4835__auto__.push((arguments[i__4830__auto___27717]));

var G__27720 = (i__4830__auto___27717 + (1));
i__4830__auto___27717 = G__27720;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq27656){
var G__27657 = cljs.core.first(seq27656);
var seq27656__$1 = cljs.core.next(seq27656);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27657,seq27656__$1);
}));


//# sourceMappingURL=devtools.format.js.map
