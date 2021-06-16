goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_36091 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_36091(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_36095 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_36095(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__35032 = coll;
var G__35033 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__35032,G__35033) : shadow.dom.lazy_native_coll_seq.call(null,G__35032,G__35033));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4223__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__35075 = arguments.length;
switch (G__35075) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__35095 = arguments.length;
switch (G__35095) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__35106 = arguments.length;
switch (G__35106) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__35130 = arguments.length;
switch (G__35130) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__35143 = arguments.length;
switch (G__35143) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__35156 = arguments.length;
switch (G__35156) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e35162){if((e35162 instanceof Object)){
var e = e35162;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35162;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__35167 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35168 = null;
var count__35169 = (0);
var i__35170 = (0);
while(true){
if((i__35170 < count__35169)){
var el = chunk__35168.cljs$core$IIndexed$_nth$arity$2(null,i__35170);
var handler_36120__$1 = ((function (seq__35167,chunk__35168,count__35169,i__35170,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35167,chunk__35168,count__35169,i__35170,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36120__$1);


var G__36122 = seq__35167;
var G__36123 = chunk__35168;
var G__36124 = count__35169;
var G__36125 = (i__35170 + (1));
seq__35167 = G__36122;
chunk__35168 = G__36123;
count__35169 = G__36124;
i__35170 = G__36125;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35167);
if(temp__5753__auto__){
var seq__35167__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35167__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35167__$1);
var G__36126 = cljs.core.chunk_rest(seq__35167__$1);
var G__36127 = c__4649__auto__;
var G__36128 = cljs.core.count(c__4649__auto__);
var G__36129 = (0);
seq__35167 = G__36126;
chunk__35168 = G__36127;
count__35169 = G__36128;
i__35170 = G__36129;
continue;
} else {
var el = cljs.core.first(seq__35167__$1);
var handler_36131__$1 = ((function (seq__35167,chunk__35168,count__35169,i__35170,el,seq__35167__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35167,chunk__35168,count__35169,i__35170,el,seq__35167__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36131__$1);


var G__36132 = cljs.core.next(seq__35167__$1);
var G__36133 = null;
var G__36134 = (0);
var G__36135 = (0);
seq__35167 = G__36132;
chunk__35168 = G__36133;
count__35169 = G__36134;
i__35170 = G__36135;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__35201 = arguments.length;
switch (G__35201) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__35213 = cljs.core.seq(events);
var chunk__35214 = null;
var count__35215 = (0);
var i__35216 = (0);
while(true){
if((i__35216 < count__35215)){
var vec__35226 = chunk__35214.cljs$core$IIndexed$_nth$arity$2(null,i__35216);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35226,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35226,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36137 = seq__35213;
var G__36138 = chunk__35214;
var G__36139 = count__35215;
var G__36140 = (i__35216 + (1));
seq__35213 = G__36137;
chunk__35214 = G__36138;
count__35215 = G__36139;
i__35216 = G__36140;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35213);
if(temp__5753__auto__){
var seq__35213__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35213__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35213__$1);
var G__36143 = cljs.core.chunk_rest(seq__35213__$1);
var G__36144 = c__4649__auto__;
var G__36145 = cljs.core.count(c__4649__auto__);
var G__36146 = (0);
seq__35213 = G__36143;
chunk__35214 = G__36144;
count__35215 = G__36145;
i__35216 = G__36146;
continue;
} else {
var vec__35233 = cljs.core.first(seq__35213__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35233,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35233,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36150 = cljs.core.next(seq__35213__$1);
var G__36151 = null;
var G__36152 = (0);
var G__36153 = (0);
seq__35213 = G__36150;
chunk__35214 = G__36151;
count__35215 = G__36152;
i__35216 = G__36153;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__35238 = cljs.core.seq(styles);
var chunk__35239 = null;
var count__35240 = (0);
var i__35241 = (0);
while(true){
if((i__35241 < count__35240)){
var vec__35261 = chunk__35239.cljs$core$IIndexed$_nth$arity$2(null,i__35241);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35261,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35261,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36157 = seq__35238;
var G__36158 = chunk__35239;
var G__36159 = count__35240;
var G__36160 = (i__35241 + (1));
seq__35238 = G__36157;
chunk__35239 = G__36158;
count__35240 = G__36159;
i__35241 = G__36160;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35238);
if(temp__5753__auto__){
var seq__35238__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35238__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35238__$1);
var G__36163 = cljs.core.chunk_rest(seq__35238__$1);
var G__36164 = c__4649__auto__;
var G__36165 = cljs.core.count(c__4649__auto__);
var G__36166 = (0);
seq__35238 = G__36163;
chunk__35239 = G__36164;
count__35240 = G__36165;
i__35241 = G__36166;
continue;
} else {
var vec__35269 = cljs.core.first(seq__35238__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35269,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35269,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36169 = cljs.core.next(seq__35238__$1);
var G__36170 = null;
var G__36171 = (0);
var G__36172 = (0);
seq__35238 = G__36169;
chunk__35239 = G__36170;
count__35240 = G__36171;
i__35241 = G__36172;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__35274_36173 = key;
var G__35274_36174__$1 = (((G__35274_36173 instanceof cljs.core.Keyword))?G__35274_36173.fqn:null);
switch (G__35274_36174__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_36176 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4223__auto__ = goog.string.startsWith(ks_36176,"data-");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return goog.string.startsWith(ks_36176,"aria-");
}
})())){
el.setAttribute(ks_36176,value);
} else {
(el[ks_36176] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35295){
var map__35296 = p__35295;
var map__35296__$1 = cljs.core.__destructure_map(map__35296);
var props = map__35296__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35296__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35298 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35298,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35298,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35298,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35304 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35304,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35304;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35309 = arguments.length;
switch (G__35309) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35321){
var vec__35325 = p__35321;
var seq__35326 = cljs.core.seq(vec__35325);
var first__35327 = cljs.core.first(seq__35326);
var seq__35326__$1 = cljs.core.next(seq__35326);
var nn = first__35327;
var first__35327__$1 = cljs.core.first(seq__35326__$1);
var seq__35326__$2 = cljs.core.next(seq__35326__$1);
var np = first__35327__$1;
var nc = seq__35326__$2;
var node = vec__35325;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35329 = nn;
var G__35330 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35329,G__35330) : create_fn.call(null,G__35329,G__35330));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35332 = nn;
var G__35333 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35332,G__35333) : create_fn.call(null,G__35332,G__35333));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35339 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35339,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35339,(1),null);
var seq__35343_36211 = cljs.core.seq(node_children);
var chunk__35344_36212 = null;
var count__35345_36213 = (0);
var i__35346_36214 = (0);
while(true){
if((i__35346_36214 < count__35345_36213)){
var child_struct_36215 = chunk__35344_36212.cljs$core$IIndexed$_nth$arity$2(null,i__35346_36214);
var children_36221 = shadow.dom.dom_node(child_struct_36215);
if(cljs.core.seq_QMARK_(children_36221)){
var seq__35422_36222 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36221));
var chunk__35424_36223 = null;
var count__35425_36224 = (0);
var i__35426_36225 = (0);
while(true){
if((i__35426_36225 < count__35425_36224)){
var child_36226 = chunk__35424_36223.cljs$core$IIndexed$_nth$arity$2(null,i__35426_36225);
if(cljs.core.truth_(child_36226)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36226);


var G__36227 = seq__35422_36222;
var G__36228 = chunk__35424_36223;
var G__36229 = count__35425_36224;
var G__36230 = (i__35426_36225 + (1));
seq__35422_36222 = G__36227;
chunk__35424_36223 = G__36228;
count__35425_36224 = G__36229;
i__35426_36225 = G__36230;
continue;
} else {
var G__36231 = seq__35422_36222;
var G__36232 = chunk__35424_36223;
var G__36233 = count__35425_36224;
var G__36234 = (i__35426_36225 + (1));
seq__35422_36222 = G__36231;
chunk__35424_36223 = G__36232;
count__35425_36224 = G__36233;
i__35426_36225 = G__36234;
continue;
}
} else {
var temp__5753__auto___36235 = cljs.core.seq(seq__35422_36222);
if(temp__5753__auto___36235){
var seq__35422_36236__$1 = temp__5753__auto___36235;
if(cljs.core.chunked_seq_QMARK_(seq__35422_36236__$1)){
var c__4649__auto___36237 = cljs.core.chunk_first(seq__35422_36236__$1);
var G__36238 = cljs.core.chunk_rest(seq__35422_36236__$1);
var G__36239 = c__4649__auto___36237;
var G__36240 = cljs.core.count(c__4649__auto___36237);
var G__36241 = (0);
seq__35422_36222 = G__36238;
chunk__35424_36223 = G__36239;
count__35425_36224 = G__36240;
i__35426_36225 = G__36241;
continue;
} else {
var child_36242 = cljs.core.first(seq__35422_36236__$1);
if(cljs.core.truth_(child_36242)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36242);


var G__36243 = cljs.core.next(seq__35422_36236__$1);
var G__36244 = null;
var G__36245 = (0);
var G__36246 = (0);
seq__35422_36222 = G__36243;
chunk__35424_36223 = G__36244;
count__35425_36224 = G__36245;
i__35426_36225 = G__36246;
continue;
} else {
var G__36247 = cljs.core.next(seq__35422_36236__$1);
var G__36248 = null;
var G__36249 = (0);
var G__36250 = (0);
seq__35422_36222 = G__36247;
chunk__35424_36223 = G__36248;
count__35425_36224 = G__36249;
i__35426_36225 = G__36250;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36221);
}


var G__36251 = seq__35343_36211;
var G__36252 = chunk__35344_36212;
var G__36253 = count__35345_36213;
var G__36254 = (i__35346_36214 + (1));
seq__35343_36211 = G__36251;
chunk__35344_36212 = G__36252;
count__35345_36213 = G__36253;
i__35346_36214 = G__36254;
continue;
} else {
var temp__5753__auto___36255 = cljs.core.seq(seq__35343_36211);
if(temp__5753__auto___36255){
var seq__35343_36256__$1 = temp__5753__auto___36255;
if(cljs.core.chunked_seq_QMARK_(seq__35343_36256__$1)){
var c__4649__auto___36257 = cljs.core.chunk_first(seq__35343_36256__$1);
var G__36258 = cljs.core.chunk_rest(seq__35343_36256__$1);
var G__36259 = c__4649__auto___36257;
var G__36260 = cljs.core.count(c__4649__auto___36257);
var G__36261 = (0);
seq__35343_36211 = G__36258;
chunk__35344_36212 = G__36259;
count__35345_36213 = G__36260;
i__35346_36214 = G__36261;
continue;
} else {
var child_struct_36262 = cljs.core.first(seq__35343_36256__$1);
var children_36263 = shadow.dom.dom_node(child_struct_36262);
if(cljs.core.seq_QMARK_(children_36263)){
var seq__35439_36265 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36263));
var chunk__35441_36266 = null;
var count__35442_36267 = (0);
var i__35443_36268 = (0);
while(true){
if((i__35443_36268 < count__35442_36267)){
var child_36269 = chunk__35441_36266.cljs$core$IIndexed$_nth$arity$2(null,i__35443_36268);
if(cljs.core.truth_(child_36269)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36269);


var G__36271 = seq__35439_36265;
var G__36272 = chunk__35441_36266;
var G__36273 = count__35442_36267;
var G__36274 = (i__35443_36268 + (1));
seq__35439_36265 = G__36271;
chunk__35441_36266 = G__36272;
count__35442_36267 = G__36273;
i__35443_36268 = G__36274;
continue;
} else {
var G__36275 = seq__35439_36265;
var G__36276 = chunk__35441_36266;
var G__36277 = count__35442_36267;
var G__36278 = (i__35443_36268 + (1));
seq__35439_36265 = G__36275;
chunk__35441_36266 = G__36276;
count__35442_36267 = G__36277;
i__35443_36268 = G__36278;
continue;
}
} else {
var temp__5753__auto___36279__$1 = cljs.core.seq(seq__35439_36265);
if(temp__5753__auto___36279__$1){
var seq__35439_36280__$1 = temp__5753__auto___36279__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35439_36280__$1)){
var c__4649__auto___36281 = cljs.core.chunk_first(seq__35439_36280__$1);
var G__36282 = cljs.core.chunk_rest(seq__35439_36280__$1);
var G__36283 = c__4649__auto___36281;
var G__36284 = cljs.core.count(c__4649__auto___36281);
var G__36285 = (0);
seq__35439_36265 = G__36282;
chunk__35441_36266 = G__36283;
count__35442_36267 = G__36284;
i__35443_36268 = G__36285;
continue;
} else {
var child_36286 = cljs.core.first(seq__35439_36280__$1);
if(cljs.core.truth_(child_36286)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36286);


var G__36287 = cljs.core.next(seq__35439_36280__$1);
var G__36288 = null;
var G__36289 = (0);
var G__36290 = (0);
seq__35439_36265 = G__36287;
chunk__35441_36266 = G__36288;
count__35442_36267 = G__36289;
i__35443_36268 = G__36290;
continue;
} else {
var G__36291 = cljs.core.next(seq__35439_36280__$1);
var G__36292 = null;
var G__36293 = (0);
var G__36294 = (0);
seq__35439_36265 = G__36291;
chunk__35441_36266 = G__36292;
count__35442_36267 = G__36293;
i__35443_36268 = G__36294;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36263);
}


var G__36295 = cljs.core.next(seq__35343_36256__$1);
var G__36296 = null;
var G__36297 = (0);
var G__36298 = (0);
seq__35343_36211 = G__36295;
chunk__35344_36212 = G__36296;
count__35345_36213 = G__36297;
i__35346_36214 = G__36298;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35469 = cljs.core.seq(node);
var chunk__35470 = null;
var count__35471 = (0);
var i__35472 = (0);
while(true){
if((i__35472 < count__35471)){
var n = chunk__35470.cljs$core$IIndexed$_nth$arity$2(null,i__35472);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36322 = seq__35469;
var G__36323 = chunk__35470;
var G__36324 = count__35471;
var G__36325 = (i__35472 + (1));
seq__35469 = G__36322;
chunk__35470 = G__36323;
count__35471 = G__36324;
i__35472 = G__36325;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35469);
if(temp__5753__auto__){
var seq__35469__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35469__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35469__$1);
var G__36326 = cljs.core.chunk_rest(seq__35469__$1);
var G__36327 = c__4649__auto__;
var G__36328 = cljs.core.count(c__4649__auto__);
var G__36329 = (0);
seq__35469 = G__36326;
chunk__35470 = G__36327;
count__35471 = G__36328;
i__35472 = G__36329;
continue;
} else {
var n = cljs.core.first(seq__35469__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36330 = cljs.core.next(seq__35469__$1);
var G__36331 = null;
var G__36332 = (0);
var G__36333 = (0);
seq__35469 = G__36330;
chunk__35470 = G__36331;
count__35471 = G__36332;
i__35472 = G__36333;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35496 = arguments.length;
switch (G__35496) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__35515 = arguments.length;
switch (G__35515) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__35537 = arguments.length;
switch (G__35537) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4223__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36369 = arguments.length;
var i__4830__auto___36370 = (0);
while(true){
if((i__4830__auto___36370 < len__4829__auto___36369)){
args__4835__auto__.push((arguments[i__4830__auto___36370]));

var G__36371 = (i__4830__auto___36370 + (1));
i__4830__auto___36370 = G__36371;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35566_36373 = cljs.core.seq(nodes);
var chunk__35567_36374 = null;
var count__35568_36375 = (0);
var i__35569_36376 = (0);
while(true){
if((i__35569_36376 < count__35568_36375)){
var node_36377 = chunk__35567_36374.cljs$core$IIndexed$_nth$arity$2(null,i__35569_36376);
fragment.appendChild(shadow.dom._to_dom(node_36377));


var G__36378 = seq__35566_36373;
var G__36379 = chunk__35567_36374;
var G__36380 = count__35568_36375;
var G__36381 = (i__35569_36376 + (1));
seq__35566_36373 = G__36378;
chunk__35567_36374 = G__36379;
count__35568_36375 = G__36380;
i__35569_36376 = G__36381;
continue;
} else {
var temp__5753__auto___36382 = cljs.core.seq(seq__35566_36373);
if(temp__5753__auto___36382){
var seq__35566_36384__$1 = temp__5753__auto___36382;
if(cljs.core.chunked_seq_QMARK_(seq__35566_36384__$1)){
var c__4649__auto___36387 = cljs.core.chunk_first(seq__35566_36384__$1);
var G__36388 = cljs.core.chunk_rest(seq__35566_36384__$1);
var G__36389 = c__4649__auto___36387;
var G__36390 = cljs.core.count(c__4649__auto___36387);
var G__36391 = (0);
seq__35566_36373 = G__36388;
chunk__35567_36374 = G__36389;
count__35568_36375 = G__36390;
i__35569_36376 = G__36391;
continue;
} else {
var node_36396 = cljs.core.first(seq__35566_36384__$1);
fragment.appendChild(shadow.dom._to_dom(node_36396));


var G__36397 = cljs.core.next(seq__35566_36384__$1);
var G__36398 = null;
var G__36399 = (0);
var G__36400 = (0);
seq__35566_36373 = G__36397;
chunk__35567_36374 = G__36398;
count__35568_36375 = G__36399;
i__35569_36376 = G__36400;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35561){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35561));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35588_36407 = cljs.core.seq(scripts);
var chunk__35589_36408 = null;
var count__35590_36409 = (0);
var i__35591_36410 = (0);
while(true){
if((i__35591_36410 < count__35590_36409)){
var vec__35602_36415 = chunk__35589_36408.cljs$core$IIndexed$_nth$arity$2(null,i__35591_36410);
var script_tag_36416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35602_36415,(0),null);
var script_body_36417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35602_36415,(1),null);
eval(script_body_36417);


var G__36418 = seq__35588_36407;
var G__36419 = chunk__35589_36408;
var G__36420 = count__35590_36409;
var G__36421 = (i__35591_36410 + (1));
seq__35588_36407 = G__36418;
chunk__35589_36408 = G__36419;
count__35590_36409 = G__36420;
i__35591_36410 = G__36421;
continue;
} else {
var temp__5753__auto___36422 = cljs.core.seq(seq__35588_36407);
if(temp__5753__auto___36422){
var seq__35588_36423__$1 = temp__5753__auto___36422;
if(cljs.core.chunked_seq_QMARK_(seq__35588_36423__$1)){
var c__4649__auto___36424 = cljs.core.chunk_first(seq__35588_36423__$1);
var G__36425 = cljs.core.chunk_rest(seq__35588_36423__$1);
var G__36426 = c__4649__auto___36424;
var G__36427 = cljs.core.count(c__4649__auto___36424);
var G__36428 = (0);
seq__35588_36407 = G__36425;
chunk__35589_36408 = G__36426;
count__35590_36409 = G__36427;
i__35591_36410 = G__36428;
continue;
} else {
var vec__35611_36430 = cljs.core.first(seq__35588_36423__$1);
var script_tag_36431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35611_36430,(0),null);
var script_body_36432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35611_36430,(1),null);
eval(script_body_36432);


var G__36433 = cljs.core.next(seq__35588_36423__$1);
var G__36434 = null;
var G__36435 = (0);
var G__36436 = (0);
seq__35588_36407 = G__36433;
chunk__35589_36408 = G__36434;
count__35590_36409 = G__36435;
i__35591_36410 = G__36436;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35615){
var vec__35616 = p__35615;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35616,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35616,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35640 = arguments.length;
switch (G__35640) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__35662 = cljs.core.seq(style_keys);
var chunk__35663 = null;
var count__35664 = (0);
var i__35665 = (0);
while(true){
if((i__35665 < count__35664)){
var it = chunk__35663.cljs$core$IIndexed$_nth$arity$2(null,i__35665);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36448 = seq__35662;
var G__36449 = chunk__35663;
var G__36450 = count__35664;
var G__36451 = (i__35665 + (1));
seq__35662 = G__36448;
chunk__35663 = G__36449;
count__35664 = G__36450;
i__35665 = G__36451;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35662);
if(temp__5753__auto__){
var seq__35662__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35662__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35662__$1);
var G__36453 = cljs.core.chunk_rest(seq__35662__$1);
var G__36454 = c__4649__auto__;
var G__36455 = cljs.core.count(c__4649__auto__);
var G__36456 = (0);
seq__35662 = G__36453;
chunk__35663 = G__36454;
count__35664 = G__36455;
i__35665 = G__36456;
continue;
} else {
var it = cljs.core.first(seq__35662__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36457 = cljs.core.next(seq__35662__$1);
var G__36458 = null;
var G__36459 = (0);
var G__36460 = (0);
seq__35662 = G__36457;
chunk__35663 = G__36458;
count__35664 = G__36459;
i__35665 = G__36460;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k35675,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__35686 = k35675;
var G__35686__$1 = (((G__35686 instanceof cljs.core.Keyword))?G__35686.fqn:null);
switch (G__35686__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35675,else__4475__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__35694){
var vec__35695 = p__35694;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35695,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35695,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35674){
var self__ = this;
var G__35674__$1 = this;
return (new cljs.core.RecordIter((0),G__35674__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35676,other35677){
var self__ = this;
var this35676__$1 = this;
return (((!((other35677 == null)))) && ((((this35676__$1.constructor === other35677.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35676__$1.x,other35677.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35676__$1.y,other35677.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35676__$1.__extmap,other35677.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k35675){
var self__ = this;
var this__4479__auto____$1 = this;
var G__35716 = k35675;
var G__35716__$1 = (((G__35716 instanceof cljs.core.Keyword))?G__35716.fqn:null);
switch (G__35716__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35675);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__35674){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__35717 = cljs.core.keyword_identical_QMARK_;
var expr__35718 = k__4481__auto__;
if(cljs.core.truth_((pred__35717.cljs$core$IFn$_invoke$arity$2 ? pred__35717.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35718) : pred__35717.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__35718)))){
return (new shadow.dom.Coordinate(G__35674,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35717.cljs$core$IFn$_invoke$arity$2 ? pred__35717.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35718) : pred__35717.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35718)))){
return (new shadow.dom.Coordinate(self__.x,G__35674,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__35674),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__35674){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35674,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35679){
var extmap__4512__auto__ = (function (){var G__35721 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35679,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35679)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35721);
} else {
return G__35721;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35679),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35679),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k35743,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__35751 = k35743;
var G__35751__$1 = (((G__35751 instanceof cljs.core.Keyword))?G__35751.fqn:null);
switch (G__35751__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35743,else__4475__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__35757){
var vec__35760 = p__35757;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35760,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35760,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Size{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35742){
var self__ = this;
var G__35742__$1 = this;
return (new cljs.core.RecordIter((0),G__35742__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35744,other35745){
var self__ = this;
var this35744__$1 = this;
return (((!((other35745 == null)))) && ((((this35744__$1.constructor === other35745.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35744__$1.w,other35745.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35744__$1.h,other35745.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35744__$1.__extmap,other35745.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k35743){
var self__ = this;
var this__4479__auto____$1 = this;
var G__35789 = k35743;
var G__35789__$1 = (((G__35789 instanceof cljs.core.Keyword))?G__35789.fqn:null);
switch (G__35789__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35743);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__35742){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__35794 = cljs.core.keyword_identical_QMARK_;
var expr__35795 = k__4481__auto__;
if(cljs.core.truth_((pred__35794.cljs$core$IFn$_invoke$arity$2 ? pred__35794.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35795) : pred__35794.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35795)))){
return (new shadow.dom.Size(G__35742,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35794.cljs$core$IFn$_invoke$arity$2 ? pred__35794.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35795) : pred__35794.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35795)))){
return (new shadow.dom.Size(self__.w,G__35742,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__35742),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__35742){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35742,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35747){
var extmap__4512__auto__ = (function (){var G__35805 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35747,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35747)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35805);
} else {
return G__35805;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35747),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35747),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4703__auto__ = opts;
var l__4704__auto__ = a__4703__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4704__auto__)){
var G__36502 = (i + (1));
var G__36503 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36502;
ret = G__36503;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35840){
var vec__35841 = p__35840;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35841,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35841,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35848 = arguments.length;
switch (G__35848) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__36508 = ps;
var G__36509 = (i + (1));
el__$1 = G__36508;
i = G__36509;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35873 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35873,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35873,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35873,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35876_36519 = cljs.core.seq(props);
var chunk__35877_36520 = null;
var count__35878_36521 = (0);
var i__35879_36522 = (0);
while(true){
if((i__35879_36522 < count__35878_36521)){
var vec__35886_36523 = chunk__35877_36520.cljs$core$IIndexed$_nth$arity$2(null,i__35879_36522);
var k_36524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35886_36523,(0),null);
var v_36525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35886_36523,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_36524);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36524),v_36525);


var G__36528 = seq__35876_36519;
var G__36529 = chunk__35877_36520;
var G__36530 = count__35878_36521;
var G__36531 = (i__35879_36522 + (1));
seq__35876_36519 = G__36528;
chunk__35877_36520 = G__36529;
count__35878_36521 = G__36530;
i__35879_36522 = G__36531;
continue;
} else {
var temp__5753__auto___36532 = cljs.core.seq(seq__35876_36519);
if(temp__5753__auto___36532){
var seq__35876_36533__$1 = temp__5753__auto___36532;
if(cljs.core.chunked_seq_QMARK_(seq__35876_36533__$1)){
var c__4649__auto___36534 = cljs.core.chunk_first(seq__35876_36533__$1);
var G__36535 = cljs.core.chunk_rest(seq__35876_36533__$1);
var G__36536 = c__4649__auto___36534;
var G__36537 = cljs.core.count(c__4649__auto___36534);
var G__36538 = (0);
seq__35876_36519 = G__36535;
chunk__35877_36520 = G__36536;
count__35878_36521 = G__36537;
i__35879_36522 = G__36538;
continue;
} else {
var vec__35893_36539 = cljs.core.first(seq__35876_36533__$1);
var k_36540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35893_36539,(0),null);
var v_36541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35893_36539,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_36540);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36540),v_36541);


var G__36542 = cljs.core.next(seq__35876_36533__$1);
var G__36543 = null;
var G__36544 = (0);
var G__36545 = (0);
seq__35876_36519 = G__36542;
chunk__35877_36520 = G__36543;
count__35878_36521 = G__36544;
i__35879_36522 = G__36545;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__35901 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35901,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35901,(1),null);
var seq__35904_36549 = cljs.core.seq(node_children);
var chunk__35906_36550 = null;
var count__35907_36551 = (0);
var i__35908_36552 = (0);
while(true){
if((i__35908_36552 < count__35907_36551)){
var child_struct_36553 = chunk__35906_36550.cljs$core$IIndexed$_nth$arity$2(null,i__35908_36552);
if((!((child_struct_36553 == null)))){
if(typeof child_struct_36553 === 'string'){
var text_36554 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36554),child_struct_36553].join(''));
} else {
var children_36555 = shadow.dom.svg_node(child_struct_36553);
if(cljs.core.seq_QMARK_(children_36555)){
var seq__35924_36556 = cljs.core.seq(children_36555);
var chunk__35926_36557 = null;
var count__35927_36558 = (0);
var i__35928_36559 = (0);
while(true){
if((i__35928_36559 < count__35927_36558)){
var child_36560 = chunk__35926_36557.cljs$core$IIndexed$_nth$arity$2(null,i__35928_36559);
if(cljs.core.truth_(child_36560)){
node.appendChild(child_36560);


var G__36561 = seq__35924_36556;
var G__36562 = chunk__35926_36557;
var G__36563 = count__35927_36558;
var G__36564 = (i__35928_36559 + (1));
seq__35924_36556 = G__36561;
chunk__35926_36557 = G__36562;
count__35927_36558 = G__36563;
i__35928_36559 = G__36564;
continue;
} else {
var G__36565 = seq__35924_36556;
var G__36566 = chunk__35926_36557;
var G__36567 = count__35927_36558;
var G__36568 = (i__35928_36559 + (1));
seq__35924_36556 = G__36565;
chunk__35926_36557 = G__36566;
count__35927_36558 = G__36567;
i__35928_36559 = G__36568;
continue;
}
} else {
var temp__5753__auto___36569 = cljs.core.seq(seq__35924_36556);
if(temp__5753__auto___36569){
var seq__35924_36570__$1 = temp__5753__auto___36569;
if(cljs.core.chunked_seq_QMARK_(seq__35924_36570__$1)){
var c__4649__auto___36571 = cljs.core.chunk_first(seq__35924_36570__$1);
var G__36572 = cljs.core.chunk_rest(seq__35924_36570__$1);
var G__36573 = c__4649__auto___36571;
var G__36574 = cljs.core.count(c__4649__auto___36571);
var G__36575 = (0);
seq__35924_36556 = G__36572;
chunk__35926_36557 = G__36573;
count__35927_36558 = G__36574;
i__35928_36559 = G__36575;
continue;
} else {
var child_36576 = cljs.core.first(seq__35924_36570__$1);
if(cljs.core.truth_(child_36576)){
node.appendChild(child_36576);


var G__36577 = cljs.core.next(seq__35924_36570__$1);
var G__36578 = null;
var G__36579 = (0);
var G__36580 = (0);
seq__35924_36556 = G__36577;
chunk__35926_36557 = G__36578;
count__35927_36558 = G__36579;
i__35928_36559 = G__36580;
continue;
} else {
var G__36581 = cljs.core.next(seq__35924_36570__$1);
var G__36582 = null;
var G__36583 = (0);
var G__36584 = (0);
seq__35924_36556 = G__36581;
chunk__35926_36557 = G__36582;
count__35927_36558 = G__36583;
i__35928_36559 = G__36584;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36555);
}
}


var G__36585 = seq__35904_36549;
var G__36586 = chunk__35906_36550;
var G__36587 = count__35907_36551;
var G__36588 = (i__35908_36552 + (1));
seq__35904_36549 = G__36585;
chunk__35906_36550 = G__36586;
count__35907_36551 = G__36587;
i__35908_36552 = G__36588;
continue;
} else {
var G__36589 = seq__35904_36549;
var G__36590 = chunk__35906_36550;
var G__36591 = count__35907_36551;
var G__36592 = (i__35908_36552 + (1));
seq__35904_36549 = G__36589;
chunk__35906_36550 = G__36590;
count__35907_36551 = G__36591;
i__35908_36552 = G__36592;
continue;
}
} else {
var temp__5753__auto___36593 = cljs.core.seq(seq__35904_36549);
if(temp__5753__auto___36593){
var seq__35904_36594__$1 = temp__5753__auto___36593;
if(cljs.core.chunked_seq_QMARK_(seq__35904_36594__$1)){
var c__4649__auto___36595 = cljs.core.chunk_first(seq__35904_36594__$1);
var G__36596 = cljs.core.chunk_rest(seq__35904_36594__$1);
var G__36597 = c__4649__auto___36595;
var G__36598 = cljs.core.count(c__4649__auto___36595);
var G__36599 = (0);
seq__35904_36549 = G__36596;
chunk__35906_36550 = G__36597;
count__35907_36551 = G__36598;
i__35908_36552 = G__36599;
continue;
} else {
var child_struct_36600 = cljs.core.first(seq__35904_36594__$1);
if((!((child_struct_36600 == null)))){
if(typeof child_struct_36600 === 'string'){
var text_36601 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36601),child_struct_36600].join(''));
} else {
var children_36602 = shadow.dom.svg_node(child_struct_36600);
if(cljs.core.seq_QMARK_(children_36602)){
var seq__35941_36603 = cljs.core.seq(children_36602);
var chunk__35943_36604 = null;
var count__35944_36605 = (0);
var i__35945_36606 = (0);
while(true){
if((i__35945_36606 < count__35944_36605)){
var child_36608 = chunk__35943_36604.cljs$core$IIndexed$_nth$arity$2(null,i__35945_36606);
if(cljs.core.truth_(child_36608)){
node.appendChild(child_36608);


var G__36611 = seq__35941_36603;
var G__36612 = chunk__35943_36604;
var G__36613 = count__35944_36605;
var G__36614 = (i__35945_36606 + (1));
seq__35941_36603 = G__36611;
chunk__35943_36604 = G__36612;
count__35944_36605 = G__36613;
i__35945_36606 = G__36614;
continue;
} else {
var G__36615 = seq__35941_36603;
var G__36616 = chunk__35943_36604;
var G__36617 = count__35944_36605;
var G__36618 = (i__35945_36606 + (1));
seq__35941_36603 = G__36615;
chunk__35943_36604 = G__36616;
count__35944_36605 = G__36617;
i__35945_36606 = G__36618;
continue;
}
} else {
var temp__5753__auto___36619__$1 = cljs.core.seq(seq__35941_36603);
if(temp__5753__auto___36619__$1){
var seq__35941_36620__$1 = temp__5753__auto___36619__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35941_36620__$1)){
var c__4649__auto___36621 = cljs.core.chunk_first(seq__35941_36620__$1);
var G__36622 = cljs.core.chunk_rest(seq__35941_36620__$1);
var G__36623 = c__4649__auto___36621;
var G__36624 = cljs.core.count(c__4649__auto___36621);
var G__36625 = (0);
seq__35941_36603 = G__36622;
chunk__35943_36604 = G__36623;
count__35944_36605 = G__36624;
i__35945_36606 = G__36625;
continue;
} else {
var child_36626 = cljs.core.first(seq__35941_36620__$1);
if(cljs.core.truth_(child_36626)){
node.appendChild(child_36626);


var G__36627 = cljs.core.next(seq__35941_36620__$1);
var G__36628 = null;
var G__36629 = (0);
var G__36630 = (0);
seq__35941_36603 = G__36627;
chunk__35943_36604 = G__36628;
count__35944_36605 = G__36629;
i__35945_36606 = G__36630;
continue;
} else {
var G__36631 = cljs.core.next(seq__35941_36620__$1);
var G__36632 = null;
var G__36633 = (0);
var G__36634 = (0);
seq__35941_36603 = G__36631;
chunk__35943_36604 = G__36632;
count__35944_36605 = G__36633;
i__35945_36606 = G__36634;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36602);
}
}


var G__36635 = cljs.core.next(seq__35904_36594__$1);
var G__36636 = null;
var G__36637 = (0);
var G__36638 = (0);
seq__35904_36549 = G__36635;
chunk__35906_36550 = G__36636;
count__35907_36551 = G__36637;
i__35908_36552 = G__36638;
continue;
} else {
var G__36639 = cljs.core.next(seq__35904_36594__$1);
var G__36640 = null;
var G__36641 = (0);
var G__36642 = (0);
seq__35904_36549 = G__36639;
chunk__35906_36550 = G__36640;
count__35907_36551 = G__36641;
i__35908_36552 = G__36642;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36646 = arguments.length;
var i__4830__auto___36647 = (0);
while(true){
if((i__4830__auto___36647 < len__4829__auto___36646)){
args__4835__auto__.push((arguments[i__4830__auto___36647]));

var G__36648 = (i__4830__auto___36647 + (1));
i__4830__auto___36647 = G__36648;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq35966){
var G__35967 = cljs.core.first(seq35966);
var seq35966__$1 = cljs.core.next(seq35966);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35967,seq35966__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__35979 = arguments.length;
switch (G__35979) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4221__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4221__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4221__auto__;
}
})())){
var c__32717__auto___36655 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32718__auto__ = (function (){var switch__32514__auto__ = (function (state_36001){
var state_val_36002 = (state_36001[(1)]);
if((state_val_36002 === (1))){
var state_36001__$1 = state_36001;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36001__$1,(2),once_or_cleanup);
} else {
if((state_val_36002 === (2))){
var inst_35998 = (state_36001[(2)]);
var inst_35999 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_36001__$1 = (function (){var statearr_36010 = state_36001;
(statearr_36010[(7)] = inst_35998);

return statearr_36010;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36001__$1,inst_35999);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32515__auto__ = null;
var shadow$dom$state_machine__32515__auto____0 = (function (){
var statearr_36015 = [null,null,null,null,null,null,null,null];
(statearr_36015[(0)] = shadow$dom$state_machine__32515__auto__);

(statearr_36015[(1)] = (1));

return statearr_36015;
});
var shadow$dom$state_machine__32515__auto____1 = (function (state_36001){
while(true){
var ret_value__32516__auto__ = (function (){try{while(true){
var result__32517__auto__ = switch__32514__auto__(state_36001);
if(cljs.core.keyword_identical_QMARK_(result__32517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32517__auto__;
}
break;
}
}catch (e36023){var ex__32518__auto__ = e36023;
var statearr_36027_36658 = state_36001;
(statearr_36027_36658[(2)] = ex__32518__auto__);


if(cljs.core.seq((state_36001[(4)]))){
var statearr_36028_36659 = state_36001;
(statearr_36028_36659[(1)] = cljs.core.first((state_36001[(4)])));

} else {
throw ex__32518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36662 = state_36001;
state_36001 = G__36662;
continue;
} else {
return ret_value__32516__auto__;
}
break;
}
});
shadow$dom$state_machine__32515__auto__ = function(state_36001){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32515__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32515__auto____1.call(this,state_36001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32515__auto____0;
shadow$dom$state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32515__auto____1;
return shadow$dom$state_machine__32515__auto__;
})()
})();
var state__32719__auto__ = (function (){var statearr_36040 = f__32718__auto__();
(statearr_36040[(6)] = c__32717__auto___36655);

return statearr_36040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32719__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
