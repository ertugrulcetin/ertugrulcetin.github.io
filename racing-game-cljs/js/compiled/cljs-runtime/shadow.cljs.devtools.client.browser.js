goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___37878 = arguments.length;
var i__4830__auto___37879 = (0);
while(true){
if((i__4830__auto___37879 < len__4829__auto___37878)){
args__4835__auto__.push((arguments[i__4830__auto___37879]));

var G__37880 = (i__4830__auto___37879 + (1));
i__4830__auto___37879 = G__37880;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37636){
var G__37637 = cljs.core.first(seq37636);
var seq37636__$1 = cljs.core.next(seq37636);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37637,seq37636__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37639 = cljs.core.seq(sources);
var chunk__37640 = null;
var count__37641 = (0);
var i__37642 = (0);
while(true){
if((i__37642 < count__37641)){
var map__37653 = chunk__37640.cljs$core$IIndexed$_nth$arity$2(null,i__37642);
var map__37653__$1 = cljs.core.__destructure_map(map__37653);
var src = map__37653__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37653__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37653__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37653__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37653__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37654){var e_37886 = e37654;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37886);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37886.message)].join('')));
}

var G__37888 = seq__37639;
var G__37889 = chunk__37640;
var G__37890 = count__37641;
var G__37891 = (i__37642 + (1));
seq__37639 = G__37888;
chunk__37640 = G__37889;
count__37641 = G__37890;
i__37642 = G__37891;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37639);
if(temp__5753__auto__){
var seq__37639__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37639__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__37639__$1);
var G__37892 = cljs.core.chunk_rest(seq__37639__$1);
var G__37893 = c__4649__auto__;
var G__37894 = cljs.core.count(c__4649__auto__);
var G__37895 = (0);
seq__37639 = G__37892;
chunk__37640 = G__37893;
count__37641 = G__37894;
i__37642 = G__37895;
continue;
} else {
var map__37655 = cljs.core.first(seq__37639__$1);
var map__37655__$1 = cljs.core.__destructure_map(map__37655);
var src = map__37655__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37655__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37655__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37655__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37655__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37658){var e_37898 = e37658;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37898);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37898.message)].join('')));
}

var G__37901 = cljs.core.next(seq__37639__$1);
var G__37902 = null;
var G__37903 = (0);
var G__37904 = (0);
seq__37639 = G__37901;
chunk__37640 = G__37902;
count__37641 = G__37903;
i__37642 = G__37904;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37659 = cljs.core.seq(js_requires);
var chunk__37660 = null;
var count__37661 = (0);
var i__37662 = (0);
while(true){
if((i__37662 < count__37661)){
var js_ns = chunk__37660.cljs$core$IIndexed$_nth$arity$2(null,i__37662);
var require_str_37906 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37906);


var G__37907 = seq__37659;
var G__37908 = chunk__37660;
var G__37909 = count__37661;
var G__37910 = (i__37662 + (1));
seq__37659 = G__37907;
chunk__37660 = G__37908;
count__37661 = G__37909;
i__37662 = G__37910;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37659);
if(temp__5753__auto__){
var seq__37659__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37659__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__37659__$1);
var G__37913 = cljs.core.chunk_rest(seq__37659__$1);
var G__37914 = c__4649__auto__;
var G__37915 = cljs.core.count(c__4649__auto__);
var G__37916 = (0);
seq__37659 = G__37913;
chunk__37660 = G__37914;
count__37661 = G__37915;
i__37662 = G__37916;
continue;
} else {
var js_ns = cljs.core.first(seq__37659__$1);
var require_str_37917 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37917);


var G__37919 = cljs.core.next(seq__37659__$1);
var G__37920 = null;
var G__37921 = (0);
var G__37922 = (0);
seq__37659 = G__37919;
chunk__37660 = G__37920;
count__37661 = G__37921;
i__37662 = G__37922;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37664){
var map__37665 = p__37664;
var map__37665__$1 = cljs.core.__destructure_map(map__37665);
var msg = map__37665__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37665__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37665__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37666(s__37667){
return (new cljs.core.LazySeq(null,(function (){
var s__37667__$1 = s__37667;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__37667__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__37672 = cljs.core.first(xs__6308__auto__);
var map__37672__$1 = cljs.core.__destructure_map(map__37672);
var src = map__37672__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37672__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37672__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4618__auto__ = ((function (s__37667__$1,map__37672,map__37672__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37665,map__37665__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37666_$_iter__37668(s__37669){
return (new cljs.core.LazySeq(null,((function (s__37667__$1,map__37672,map__37672__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37665,map__37665__$1,msg,info,reload_info){
return (function (){
var s__37669__$1 = s__37669;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__37669__$1);
if(temp__5753__auto____$1){
var s__37669__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37669__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__37669__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__37671 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__37670 = (0);
while(true){
if((i__37670 < size__4621__auto__)){
var warning = cljs.core._nth(c__4620__auto__,i__37670);
cljs.core.chunk_append(b__37671,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37929 = (i__37670 + (1));
i__37670 = G__37929;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37671),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37666_$_iter__37668(cljs.core.chunk_rest(s__37669__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37671),null);
}
} else {
var warning = cljs.core.first(s__37669__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37666_$_iter__37668(cljs.core.rest(s__37669__$2)));
}
} else {
return null;
}
break;
}
});})(s__37667__$1,map__37672,map__37672__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37665,map__37665__$1,msg,info,reload_info))
,null,null));
});})(s__37667__$1,map__37672,map__37672__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37665,map__37665__$1,msg,info,reload_info))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(warnings));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37666(cljs.core.rest(s__37667__$1)));
} else {
var G__37930 = cljs.core.rest(s__37667__$1);
s__37667__$1 = G__37930;
continue;
}
} else {
var G__37931 = cljs.core.rest(s__37667__$1);
s__37667__$1 = G__37931;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37681_37932 = cljs.core.seq(warnings);
var chunk__37682_37933 = null;
var count__37683_37934 = (0);
var i__37684_37935 = (0);
while(true){
if((i__37684_37935 < count__37683_37934)){
var map__37690_37937 = chunk__37682_37933.cljs$core$IIndexed$_nth$arity$2(null,i__37684_37935);
var map__37690_37938__$1 = cljs.core.__destructure_map(map__37690_37937);
var w_37939 = map__37690_37938__$1;
var msg_37940__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37690_37938__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37941 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37690_37938__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37942 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37690_37938__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37943 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37690_37938__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37943)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37941),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37942),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37940__$1)].join(''));


var G__37944 = seq__37681_37932;
var G__37945 = chunk__37682_37933;
var G__37946 = count__37683_37934;
var G__37947 = (i__37684_37935 + (1));
seq__37681_37932 = G__37944;
chunk__37682_37933 = G__37945;
count__37683_37934 = G__37946;
i__37684_37935 = G__37947;
continue;
} else {
var temp__5753__auto___37949 = cljs.core.seq(seq__37681_37932);
if(temp__5753__auto___37949){
var seq__37681_37951__$1 = temp__5753__auto___37949;
if(cljs.core.chunked_seq_QMARK_(seq__37681_37951__$1)){
var c__4649__auto___37952 = cljs.core.chunk_first(seq__37681_37951__$1);
var G__37953 = cljs.core.chunk_rest(seq__37681_37951__$1);
var G__37954 = c__4649__auto___37952;
var G__37955 = cljs.core.count(c__4649__auto___37952);
var G__37956 = (0);
seq__37681_37932 = G__37953;
chunk__37682_37933 = G__37954;
count__37683_37934 = G__37955;
i__37684_37935 = G__37956;
continue;
} else {
var map__37691_37957 = cljs.core.first(seq__37681_37951__$1);
var map__37691_37958__$1 = cljs.core.__destructure_map(map__37691_37957);
var w_37959 = map__37691_37958__$1;
var msg_37960__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37691_37958__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37961 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37691_37958__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37962 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37691_37958__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37691_37958__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37963)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37961),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37962),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37960__$1)].join(''));


var G__37966 = cljs.core.next(seq__37681_37951__$1);
var G__37967 = null;
var G__37968 = (0);
var G__37969 = (0);
seq__37681_37932 = G__37966;
chunk__37682_37933 = G__37967;
count__37683_37934 = G__37968;
i__37684_37935 = G__37969;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37663_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37663_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4221__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4221__auto__){
var and__4221__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4221__auto____$1){
return new$;
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37695){
var map__37696 = p__37695;
var map__37696__$1 = cljs.core.__destructure_map(map__37696);
var msg = map__37696__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37696__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37698 = cljs.core.seq(updates);
var chunk__37700 = null;
var count__37701 = (0);
var i__37702 = (0);
while(true){
if((i__37702 < count__37701)){
var path = chunk__37700.cljs$core$IIndexed$_nth$arity$2(null,i__37702);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37740_37973 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37744_37974 = null;
var count__37745_37975 = (0);
var i__37746_37976 = (0);
while(true){
if((i__37746_37976 < count__37745_37975)){
var node_37978 = chunk__37744_37974.cljs$core$IIndexed$_nth$arity$2(null,i__37746_37976);
if(cljs.core.not(node_37978.shadow$old)){
var path_match_37979 = shadow.cljs.devtools.client.browser.match_paths(node_37978.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37979)){
var new_link_37981 = (function (){var G__37754 = node_37978.cloneNode(true);
G__37754.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37979),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37754;
})();
(node_37978.shadow$old = true);

(new_link_37981.onload = ((function (seq__37740_37973,chunk__37744_37974,count__37745_37975,i__37746_37976,seq__37698,chunk__37700,count__37701,i__37702,new_link_37981,path_match_37979,node_37978,path,map__37696,map__37696__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37978);
});})(seq__37740_37973,chunk__37744_37974,count__37745_37975,i__37746_37976,seq__37698,chunk__37700,count__37701,i__37702,new_link_37981,path_match_37979,node_37978,path,map__37696,map__37696__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37979], 0));

goog.dom.insertSiblingAfter(new_link_37981,node_37978);


var G__37983 = seq__37740_37973;
var G__37984 = chunk__37744_37974;
var G__37985 = count__37745_37975;
var G__37986 = (i__37746_37976 + (1));
seq__37740_37973 = G__37983;
chunk__37744_37974 = G__37984;
count__37745_37975 = G__37985;
i__37746_37976 = G__37986;
continue;
} else {
var G__37987 = seq__37740_37973;
var G__37988 = chunk__37744_37974;
var G__37989 = count__37745_37975;
var G__37990 = (i__37746_37976 + (1));
seq__37740_37973 = G__37987;
chunk__37744_37974 = G__37988;
count__37745_37975 = G__37989;
i__37746_37976 = G__37990;
continue;
}
} else {
var G__37991 = seq__37740_37973;
var G__37992 = chunk__37744_37974;
var G__37993 = count__37745_37975;
var G__37994 = (i__37746_37976 + (1));
seq__37740_37973 = G__37991;
chunk__37744_37974 = G__37992;
count__37745_37975 = G__37993;
i__37746_37976 = G__37994;
continue;
}
} else {
var temp__5753__auto___37995 = cljs.core.seq(seq__37740_37973);
if(temp__5753__auto___37995){
var seq__37740_37996__$1 = temp__5753__auto___37995;
if(cljs.core.chunked_seq_QMARK_(seq__37740_37996__$1)){
var c__4649__auto___37997 = cljs.core.chunk_first(seq__37740_37996__$1);
var G__37998 = cljs.core.chunk_rest(seq__37740_37996__$1);
var G__37999 = c__4649__auto___37997;
var G__38000 = cljs.core.count(c__4649__auto___37997);
var G__38001 = (0);
seq__37740_37973 = G__37998;
chunk__37744_37974 = G__37999;
count__37745_37975 = G__38000;
i__37746_37976 = G__38001;
continue;
} else {
var node_38002 = cljs.core.first(seq__37740_37996__$1);
if(cljs.core.not(node_38002.shadow$old)){
var path_match_38003 = shadow.cljs.devtools.client.browser.match_paths(node_38002.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38003)){
var new_link_38004 = (function (){var G__37756 = node_38002.cloneNode(true);
G__37756.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38003),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37756;
})();
(node_38002.shadow$old = true);

(new_link_38004.onload = ((function (seq__37740_37973,chunk__37744_37974,count__37745_37975,i__37746_37976,seq__37698,chunk__37700,count__37701,i__37702,new_link_38004,path_match_38003,node_38002,seq__37740_37996__$1,temp__5753__auto___37995,path,map__37696,map__37696__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_38002);
});})(seq__37740_37973,chunk__37744_37974,count__37745_37975,i__37746_37976,seq__37698,chunk__37700,count__37701,i__37702,new_link_38004,path_match_38003,node_38002,seq__37740_37996__$1,temp__5753__auto___37995,path,map__37696,map__37696__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38003], 0));

goog.dom.insertSiblingAfter(new_link_38004,node_38002);


var G__38006 = cljs.core.next(seq__37740_37996__$1);
var G__38007 = null;
var G__38008 = (0);
var G__38009 = (0);
seq__37740_37973 = G__38006;
chunk__37744_37974 = G__38007;
count__37745_37975 = G__38008;
i__37746_37976 = G__38009;
continue;
} else {
var G__38012 = cljs.core.next(seq__37740_37996__$1);
var G__38013 = null;
var G__38014 = (0);
var G__38015 = (0);
seq__37740_37973 = G__38012;
chunk__37744_37974 = G__38013;
count__37745_37975 = G__38014;
i__37746_37976 = G__38015;
continue;
}
} else {
var G__38016 = cljs.core.next(seq__37740_37996__$1);
var G__38017 = null;
var G__38018 = (0);
var G__38019 = (0);
seq__37740_37973 = G__38016;
chunk__37744_37974 = G__38017;
count__37745_37975 = G__38018;
i__37746_37976 = G__38019;
continue;
}
}
} else {
}
}
break;
}


var G__38020 = seq__37698;
var G__38021 = chunk__37700;
var G__38022 = count__37701;
var G__38023 = (i__37702 + (1));
seq__37698 = G__38020;
chunk__37700 = G__38021;
count__37701 = G__38022;
i__37702 = G__38023;
continue;
} else {
var G__38025 = seq__37698;
var G__38026 = chunk__37700;
var G__38027 = count__37701;
var G__38028 = (i__37702 + (1));
seq__37698 = G__38025;
chunk__37700 = G__38026;
count__37701 = G__38027;
i__37702 = G__38028;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37698);
if(temp__5753__auto__){
var seq__37698__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37698__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__37698__$1);
var G__38031 = cljs.core.chunk_rest(seq__37698__$1);
var G__38032 = c__4649__auto__;
var G__38033 = cljs.core.count(c__4649__auto__);
var G__38034 = (0);
seq__37698 = G__38031;
chunk__37700 = G__38032;
count__37701 = G__38033;
i__37702 = G__38034;
continue;
} else {
var path = cljs.core.first(seq__37698__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37759_38037 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37763_38038 = null;
var count__37764_38039 = (0);
var i__37765_38040 = (0);
while(true){
if((i__37765_38040 < count__37764_38039)){
var node_38044 = chunk__37763_38038.cljs$core$IIndexed$_nth$arity$2(null,i__37765_38040);
if(cljs.core.not(node_38044.shadow$old)){
var path_match_38045 = shadow.cljs.devtools.client.browser.match_paths(node_38044.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38045)){
var new_link_38046 = (function (){var G__37784 = node_38044.cloneNode(true);
G__37784.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38045),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37784;
})();
(node_38044.shadow$old = true);

(new_link_38046.onload = ((function (seq__37759_38037,chunk__37763_38038,count__37764_38039,i__37765_38040,seq__37698,chunk__37700,count__37701,i__37702,new_link_38046,path_match_38045,node_38044,path,seq__37698__$1,temp__5753__auto__,map__37696,map__37696__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_38044);
});})(seq__37759_38037,chunk__37763_38038,count__37764_38039,i__37765_38040,seq__37698,chunk__37700,count__37701,i__37702,new_link_38046,path_match_38045,node_38044,path,seq__37698__$1,temp__5753__auto__,map__37696,map__37696__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38045], 0));

goog.dom.insertSiblingAfter(new_link_38046,node_38044);


var G__38049 = seq__37759_38037;
var G__38050 = chunk__37763_38038;
var G__38051 = count__37764_38039;
var G__38052 = (i__37765_38040 + (1));
seq__37759_38037 = G__38049;
chunk__37763_38038 = G__38050;
count__37764_38039 = G__38051;
i__37765_38040 = G__38052;
continue;
} else {
var G__38055 = seq__37759_38037;
var G__38057 = chunk__37763_38038;
var G__38058 = count__37764_38039;
var G__38059 = (i__37765_38040 + (1));
seq__37759_38037 = G__38055;
chunk__37763_38038 = G__38057;
count__37764_38039 = G__38058;
i__37765_38040 = G__38059;
continue;
}
} else {
var G__38060 = seq__37759_38037;
var G__38061 = chunk__37763_38038;
var G__38062 = count__37764_38039;
var G__38063 = (i__37765_38040 + (1));
seq__37759_38037 = G__38060;
chunk__37763_38038 = G__38061;
count__37764_38039 = G__38062;
i__37765_38040 = G__38063;
continue;
}
} else {
var temp__5753__auto___38064__$1 = cljs.core.seq(seq__37759_38037);
if(temp__5753__auto___38064__$1){
var seq__37759_38065__$1 = temp__5753__auto___38064__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37759_38065__$1)){
var c__4649__auto___38067 = cljs.core.chunk_first(seq__37759_38065__$1);
var G__38068 = cljs.core.chunk_rest(seq__37759_38065__$1);
var G__38069 = c__4649__auto___38067;
var G__38070 = cljs.core.count(c__4649__auto___38067);
var G__38071 = (0);
seq__37759_38037 = G__38068;
chunk__37763_38038 = G__38069;
count__37764_38039 = G__38070;
i__37765_38040 = G__38071;
continue;
} else {
var node_38072 = cljs.core.first(seq__37759_38065__$1);
if(cljs.core.not(node_38072.shadow$old)){
var path_match_38073 = shadow.cljs.devtools.client.browser.match_paths(node_38072.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38073)){
var new_link_38074 = (function (){var G__37791 = node_38072.cloneNode(true);
G__37791.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38073),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37791;
})();
(node_38072.shadow$old = true);

(new_link_38074.onload = ((function (seq__37759_38037,chunk__37763_38038,count__37764_38039,i__37765_38040,seq__37698,chunk__37700,count__37701,i__37702,new_link_38074,path_match_38073,node_38072,seq__37759_38065__$1,temp__5753__auto___38064__$1,path,seq__37698__$1,temp__5753__auto__,map__37696,map__37696__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_38072);
});})(seq__37759_38037,chunk__37763_38038,count__37764_38039,i__37765_38040,seq__37698,chunk__37700,count__37701,i__37702,new_link_38074,path_match_38073,node_38072,seq__37759_38065__$1,temp__5753__auto___38064__$1,path,seq__37698__$1,temp__5753__auto__,map__37696,map__37696__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38073], 0));

goog.dom.insertSiblingAfter(new_link_38074,node_38072);


var G__38076 = cljs.core.next(seq__37759_38065__$1);
var G__38077 = null;
var G__38078 = (0);
var G__38079 = (0);
seq__37759_38037 = G__38076;
chunk__37763_38038 = G__38077;
count__37764_38039 = G__38078;
i__37765_38040 = G__38079;
continue;
} else {
var G__38081 = cljs.core.next(seq__37759_38065__$1);
var G__38082 = null;
var G__38083 = (0);
var G__38084 = (0);
seq__37759_38037 = G__38081;
chunk__37763_38038 = G__38082;
count__37764_38039 = G__38083;
i__37765_38040 = G__38084;
continue;
}
} else {
var G__38086 = cljs.core.next(seq__37759_38065__$1);
var G__38087 = null;
var G__38088 = (0);
var G__38089 = (0);
seq__37759_38037 = G__38086;
chunk__37763_38038 = G__38087;
count__37764_38039 = G__38088;
i__37765_38040 = G__38089;
continue;
}
}
} else {
}
}
break;
}


var G__38090 = cljs.core.next(seq__37698__$1);
var G__38091 = null;
var G__38092 = (0);
var G__38093 = (0);
seq__37698 = G__38090;
chunk__37700 = G__38091;
count__37701 = G__38092;
i__37702 = G__38093;
continue;
} else {
var G__38094 = cljs.core.next(seq__37698__$1);
var G__38095 = null;
var G__38096 = (0);
var G__38097 = (0);
seq__37698 = G__38094;
chunk__37700 = G__38095;
count__37701 = G__38096;
i__37702 = G__38097;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__37802){
var map__37803 = p__37802;
var map__37803__$1 = cljs.core.__destructure_map(map__37803);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37803__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__37821){
var map__37823 = p__37821;
var map__37823__$1 = cljs.core.__destructure_map(map__37823);
var _ = map__37823__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37823__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37827,done,error){
var map__37828 = p__37827;
var map__37828__$1 = cljs.core.__destructure_map(map__37828);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37828__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37833,done,error){
var map__37835 = p__37833;
var map__37835__$1 = cljs.core.__destructure_map(map__37835);
var msg = map__37835__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37835__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37835__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37835__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37838){
var map__37839 = p__37838;
var map__37839__$1 = cljs.core.__destructure_map(map__37839);
var src = map__37839__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37839__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4221__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4221__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37845 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37845) : done.call(null,G__37845));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37847){
var map__37848 = p__37847;
var map__37848__$1 = cljs.core.__destructure_map(map__37848);
var msg__$1 = map__37848__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37848__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37851){var ex = e37851;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37856){
var map__37859 = p__37856;
var map__37859__$1 = cljs.core.__destructure_map(map__37859);
var env = map__37859__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37859__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__37861){
var map__37862 = p__37861;
var map__37862__$1 = cljs.core.__destructure_map(map__37862);
var msg = map__37862__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37862__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37863){
var map__37864 = p__37863;
var map__37864__$1 = cljs.core.__destructure_map(map__37864);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37864__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37864__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__37870){
var map__37871 = p__37870;
var map__37871__$1 = cljs.core.__destructure_map(map__37871);
var svc = map__37871__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37871__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
