goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__4835__auto__ = [];
var len__4829__auto___42173 = arguments.length;
var i__4830__auto___42174 = (0);
while(true){
if((i__4830__auto___42174 < len__4829__auto___42173)){
args__4835__auto__.push((arguments[i__4830__auto___42174]));

var G__42175 = (i__4830__auto___42174 + (1));
i__4830__auto___42174 = G__42175;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__42072_42176 = keyvals;
var vec__42073_42177 = G__42072_42176;
var seq__42074_42178 = cljs.core.seq(vec__42073_42177);
var first__42075_42179 = cljs.core.first(seq__42074_42178);
var seq__42074_42180__$1 = cljs.core.next(seq__42074_42178);
var k_42181 = first__42075_42179;
var first__42075_42182__$1 = cljs.core.first(seq__42074_42180__$1);
var seq__42074_42183__$2 = cljs.core.next(seq__42074_42180__$1);
var v_42184 = first__42075_42182__$1;
var keyvals_42185__$1 = seq__42074_42183__$2;
var G__42072_42186__$1 = G__42072_42176;
while(true){
var vec__42076_42187 = G__42072_42186__$1;
var seq__42077_42188 = cljs.core.seq(vec__42076_42187);
var first__42078_42189 = cljs.core.first(seq__42077_42188);
var seq__42077_42190__$1 = cljs.core.next(seq__42077_42188);
var k_42191__$1 = first__42078_42189;
var first__42078_42192__$1 = cljs.core.first(seq__42077_42190__$1);
var seq__42077_42193__$2 = cljs.core.next(seq__42077_42190__$1);
var v_42194__$1 = first__42078_42192__$1;
var keyvals_42195__$2 = seq__42077_42193__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_42191__$1)] = v_42194__$1);

if(keyvals_42195__$2){
var G__42196 = keyvals_42195__$2;
G__42072_42186__$1 = G__42196;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq42067){
var G__42068 = cljs.core.first(seq42067);
var seq42067__$1 = cljs.core.next(seq42067);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42068,seq42067__$1);
}));

applied_science.js_interop.unchecked_get = (function applied_science$js_interop$unchecked_get(obj,k){
return (obj[applied_science.js_interop.impl.wrap_key(k)]);
});
/**
 * Returns the value mapped to key, not-found or nil if key not present.
 * 
 *   ```
 *   (j/get o :k)
 *   (j/get o .-k)
 *   ```
 */
applied_science.js_interop.get = (function applied_science$js_interop$get(var_args){
var G__42080 = arguments.length;
switch (G__42080) {
case 2:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj42081 = obj;
var k42082 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj42083 = obj42081;
return (((!((obj42083 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42082,obj42083)));
})()){
return (obj42081[k42082]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var obj42084 = obj;
var k42085 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj42086 = obj42084;
return (((!((obj42086 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42085,obj42086)));
})()){
return (obj42084[k42085]);
} else {
return not_found;
}
}));

(applied_science.js_interop.get.cljs$lang$maxFixedArity = 3);

/**
 * Returns the value in a nested object structure, where ks is
 * a sequence of keys. Returns nil if the key is not present,
 * or the not-found value if supplied.
 * 
 * ```
 * (j/get-in o [:x :y] :fallback-value)
 * (j/get-in o [.-x .-y] :fallback-value)
 * ```
 */
applied_science.js_interop.get_in = (function applied_science$js_interop$get_in(var_args){
var G__42088 = arguments.length;
switch (G__42088) {
case 2:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2 = (function (obj,ks){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3 = (function (obj,ks,not_found){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$3(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),not_found);
}));

(applied_science.js_interop.get_in.cljs$lang$maxFixedArity = 3);

/**
 * Returns true if `obj` contains `k`.
 * 
 *   ```
 *   (j/contains? o :k)
 *   (j/contains? o .-k)
 *   ```
 */
applied_science.js_interop.contains_QMARK_ = (function applied_science$js_interop$contains_QMARK_(obj,k){
return applied_science.js_interop.impl.contains_QMARK__STAR_(obj,applied_science.js_interop.impl.wrap_key(k));
});
/**
 * Returns an object containing only those entries in `o` whose key is in `ks`.
 * 
 *   ```
 *   (j/select-keys o [:a :b :c])
 *   (j/select-keys o [.-a .-b .-c])
 *   ```
 */
applied_science.js_interop.select_keys = (function applied_science$js_interop$select_keys(obj,ks){
return applied_science.js_interop.impl.select_keys_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
});

/**
* @constructor
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.ILookup}
*/
applied_science.js_interop.JSLookup = (function (obj){
this.obj = obj;
this.cljs$lang$protocol_mask$partition0$ = 33024;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var obj42089 = self__.obj;
var k42090 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj42091 = obj42089;
return (((!((obj42091 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42090,obj42091)));
})()){
return (obj42089[k42090]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var obj42092 = self__.obj;
var k42093 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj42094 = obj42092;
return (((!((obj42094 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42093,obj42094)));
})()){
return (obj42092[k42093]);
} else {
return not_found;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.obj;
}));

(applied_science.js_interop.JSLookup.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(applied_science.js_interop.JSLookup.cljs$lang$type = true);

(applied_science.js_interop.JSLookup.cljs$lang$ctorStr = "applied-science.js-interop/JSLookup");

(applied_science.js_interop.JSLookup.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"applied-science.js-interop/JSLookup");
}));

/**
 * Positional factory function for applied-science.js-interop/JSLookup.
 */
applied_science.js_interop.__GT_JSLookup = (function applied_science$js_interop$__GT_JSLookup(obj){
return (new applied_science.js_interop.JSLookup(obj));
});

/**
 * Wraps `obj` with an ILookup implementation, to support reading/destructuring. Does not support renamable keys.
 * 
 *   ```
 *   (let [{:keys [a b c]} (j/lookup o)]
 * ...)
 *   ```
 */
applied_science.js_interop.lookup = (function applied_science$js_interop$lookup(obj){
if(cljs.core.truth_(obj)){
return (new applied_science.js_interop.JSLookup(obj));
} else {
return null;
}
});
/**
 * Sets key-value pairs on `obj`, returns `obj`.
 * 
 *   ```
 *   (j/assoc! o :x 10)
 *   (j/assoc! o .-x 10)
 *   ```
 */
applied_science.js_interop.assoc_BANG_ = (function applied_science$js_interop$assoc_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___42199 = arguments.length;
var i__4830__auto___42200 = (0);
while(true){
if((i__4830__auto___42200 < len__4829__auto___42199)){
args__4835__auto__.push((arguments[i__4830__auto___42200]));

var G__42201 = (i__4830__auto___42200 + (1));
i__4830__auto___42200 = G__42201;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var obj__$1 = (((!((obj == null))))?obj:({}));
var G__42100 = keyvals;
var vec__42101 = G__42100;
var seq__42102 = cljs.core.seq(vec__42101);
var first__42103 = cljs.core.first(seq__42102);
var seq__42102__$1 = cljs.core.next(seq__42102);
var k = first__42103;
var first__42103__$1 = cljs.core.first(seq__42102__$1);
var seq__42102__$2 = cljs.core.next(seq__42102__$1);
var v = first__42103__$1;
var kvs = seq__42102__$2;
var G__42100__$1 = G__42100;
while(true){
var vec__42104 = G__42100__$1;
var seq__42105 = cljs.core.seq(vec__42104);
var first__42106 = cljs.core.first(seq__42105);
var seq__42105__$1 = cljs.core.next(seq__42105);
var k__$1 = first__42106;
var first__42106__$1 = cljs.core.first(seq__42105__$1);
var seq__42105__$2 = cljs.core.next(seq__42105__$1);
var v__$1 = first__42106__$1;
var kvs__$1 = seq__42105__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__42202 = kvs__$1;
G__42100__$1 = G__42202;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq42095){
var G__42096 = cljs.core.first(seq42095);
var seq42095__$1 = cljs.core.next(seq42095);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42096,seq42095__$1);
}));

/**
 * Mutates the value in a nested object structure, where ks is a
 *   sequence of keys and v is the new value. If any levels do not
 *   exist, objects will be created.
 * 
 *   ```
 *   (j/assoc-in! o [:x :y] 10)
 *   (j/assoc-in! o [.-x .-y] 10)
 *   ```
 */
applied_science.js_interop.assoc_in_BANG_ = (function applied_science$js_interop$assoc_in_BANG_(obj,ks,v){
return applied_science.js_interop.impl.assoc_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),v);
});
/**
 * 'Updates' a value in a JavaScript object, where k is a key and
 *   f is a function that will take the old value and any supplied
 *   args and return the new value, which replaces the old value.
 *   If the key does not exist, nil is passed as the old value.
 * 
 *   ```
 *   (j/update! o :a + 10)
 *   (j/update! o .-a + 10)
 *   ```
 */
applied_science.js_interop.update_BANG_ = (function applied_science$js_interop$update_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___42203 = arguments.length;
var i__4830__auto___42204 = (0);
while(true){
if((i__4830__auto___42204 < len__4829__auto___42203)){
args__4835__auto__.push((arguments[i__4830__auto___42204]));

var G__42205 = (i__4830__auto___42204 + (1));
i__4830__auto___42204 = G__42205;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,f,args){
var obj__$1 = (((!((obj == null))))?obj:({}));
var k_STAR_ = applied_science.js_interop.impl.wrap_key(k);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,(obj__$1[k_STAR_]),args);
(obj__$1[k_STAR_] = v);

return obj__$1;
}));

(applied_science.js_interop.update_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq42107){
var G__42108 = cljs.core.first(seq42107);
var seq42107__$1 = cljs.core.next(seq42107);
var G__42109 = cljs.core.first(seq42107__$1);
var seq42107__$2 = cljs.core.next(seq42107__$1);
var G__42110 = cljs.core.first(seq42107__$2);
var seq42107__$3 = cljs.core.next(seq42107__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42108,G__42109,G__42110,seq42107__$3);
}));

/**
 * 'Updates' a value in a nested object structure, where ks is a
 *   sequence of keys and f is a function that will take the old value
 *   and any supplied args and return the new value, mutating the
 *   nested structure.  If any levels do not exist, objects will be
 *   created.
 * 
 *   ```
 *   (j/update-in! o [:x :y] + 10)
 *   (j/update-in! o [.-x .-y] + 10)
 *   ```
 */
applied_science.js_interop.update_in_BANG_ = (function applied_science$js_interop$update_in_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___42206 = arguments.length;
var i__4830__auto___42207 = (0);
while(true){
if((i__4830__auto___42207 < len__4829__auto___42206)){
args__4835__auto__.push((arguments[i__4830__auto___42207]));

var G__42208 = (i__4830__auto___42207 + (1));
i__4830__auto___42207 = G__42208;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,f,args){
return applied_science.js_interop.impl.update_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),f,args);
}));

(applied_science.js_interop.update_in_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq42111){
var G__42112 = cljs.core.first(seq42111);
var seq42111__$1 = cljs.core.next(seq42111);
var G__42113 = cljs.core.first(seq42111__$1);
var seq42111__$2 = cljs.core.next(seq42111__$1);
var G__42114 = cljs.core.first(seq42111__$2);
var seq42111__$3 = cljs.core.next(seq42111__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42112,G__42113,G__42114,seq42111__$3);
}));

/**
 * Extends `obj` with the properties of one or more objects, overwriting
 * existing properties, moving left to right. Returns `obj`.
 * An empty starting object is provided if `obj` is nil.
 *   ```
 *   (j/extend o other)
 *   (j/extend o other #js{:x 1})
 *   ```
 *   Not IE6-friendly
 */
applied_science.js_interop.extend_BANG_ = (function applied_science$js_interop$extend_BANG_(var_args){
var G__42119 = arguments.length;
switch (G__42119) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4850__auto__ = [];
var len__4829__auto___42210 = arguments.length;
var i__4830__auto___42211 = (0);
while(true){
if((i__4830__auto___42211 < len__4829__auto___42210)){
args_arr__4850__auto__.push((arguments[i__4830__auto___42211]));

var G__42212 = (i__4830__auto___42211 + (1));
i__4830__auto___42211 = G__42212;
continue;
} else {
}
break;
}

var argseq__4851__auto__ = (new cljs.core.IndexedSeq(args_arr__4850__auto__.slice((2)),(0),null));
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4851__auto__);

}
});

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return obj;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (obj,x){
var obj__$1 = (((!((obj == null))))?obj:({}));
if((!((x == null)))){
var seq__42120_42213 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__42121_42214 = null;
var count__42122_42215 = (0);
var i__42123_42216 = (0);
while(true){
if((i__42123_42216 < count__42122_42215)){
var k_42217 = chunk__42121_42214.cljs$core$IIndexed$_nth$arity$2(null,i__42123_42216);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_42217,applied_science.js_interop.unchecked_get(x,k_42217)], 0));


var G__42218 = seq__42120_42213;
var G__42219 = chunk__42121_42214;
var G__42220 = count__42122_42215;
var G__42221 = (i__42123_42216 + (1));
seq__42120_42213 = G__42218;
chunk__42121_42214 = G__42219;
count__42122_42215 = G__42220;
i__42123_42216 = G__42221;
continue;
} else {
var temp__5753__auto___42222 = cljs.core.seq(seq__42120_42213);
if(temp__5753__auto___42222){
var seq__42120_42223__$1 = temp__5753__auto___42222;
if(cljs.core.chunked_seq_QMARK_(seq__42120_42223__$1)){
var c__4649__auto___42224 = cljs.core.chunk_first(seq__42120_42223__$1);
var G__42225 = cljs.core.chunk_rest(seq__42120_42223__$1);
var G__42226 = c__4649__auto___42224;
var G__42227 = cljs.core.count(c__4649__auto___42224);
var G__42228 = (0);
seq__42120_42213 = G__42225;
chunk__42121_42214 = G__42226;
count__42122_42215 = G__42227;
i__42123_42216 = G__42228;
continue;
} else {
var k_42229 = cljs.core.first(seq__42120_42223__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_42229,applied_science.js_interop.unchecked_get(x,k_42229)], 0));


var G__42230 = cljs.core.next(seq__42120_42223__$1);
var G__42231 = null;
var G__42232 = (0);
var G__42233 = (0);
seq__42120_42213 = G__42230;
chunk__42121_42214 = G__42231;
count__42122_42215 = G__42232;
i__42123_42216 = G__42233;
continue;
}
} else {
}
}
break;
}
} else {
}

return obj__$1;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(applied_science.js_interop.extend_BANG_,applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(obj,x),more);
}));

/** @this {Function} */
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq42116){
var G__42117 = cljs.core.first(seq42116);
var seq42116__$1 = cljs.core.next(seq42116);
var G__42118 = cljs.core.first(seq42116__$1);
var seq42116__$2 = cljs.core.next(seq42116__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42117,G__42118,seq42116__$2);
}));

(applied_science.js_interop.extend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Appends `v` to `array` and returns the mutated array.
 * 
 *   ```
 *   (j/push! arr 10)
 *   ```
 */
applied_science.js_interop.push_BANG_ = (function applied_science$js_interop$push_BANG_(array,x){
var G__42124 = array;
G__42124.push(x);

return G__42124;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__42125 = array;
G__42125.unshift(x);

return G__42125;
});
/**
 * Call function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/call o :someFunction arg1 arg2)
 *   (j/call o .-someFunction arg1 arg2)
 *   ```
 */
applied_science.js_interop.call = (function applied_science$js_interop$call(var_args){
var args__4835__auto__ = [];
var len__4829__auto___42234 = arguments.length;
var i__4830__auto___42235 = (0);
while(true){
if((i__4830__auto___42235 < len__4829__auto___42234)){
args__4835__auto__.push((arguments[i__4830__auto___42235]));

var G__42236 = (i__4830__auto___42235 + (1));
i__4830__auto___42235 = G__42236;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj42129 = obj;
var k42130 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj42131 = obj42129;
return (((!((obj42131 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42130,obj42131)));
})()){
return (obj42129[k42130]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq42126){
var G__42127 = cljs.core.first(seq42126);
var seq42126__$1 = cljs.core.next(seq42126);
var G__42128 = cljs.core.first(seq42126__$1);
var seq42126__$2 = cljs.core.next(seq42126__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42127,G__42128,seq42126__$2);
}));

/**
 * Apply function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/apply o :someFunction #js [arg1 arg2])
 *   (j/apply o .-someFunction #js [arg1 arg2])
 *   ```
 */
applied_science.js_interop.apply = (function applied_science$js_interop$apply(obj,k,arg_array){
return (function (){var obj42132 = obj;
var k42133 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj42134 = obj42132;
return (((!((obj42134 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42133,obj42134)));
})()){
return (obj42132[k42133]);
} else {
return undefined;
}
})().apply(obj,arg_array);
});
/**
 * Call function nested at `path` with `args`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/call-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.call_in = (function applied_science$js_interop$call_in(var_args){
var args__4835__auto__ = [];
var len__4829__auto___42237 = arguments.length;
var i__4830__auto___42238 = (0);
while(true){
if((i__4830__auto___42238 < len__4829__auto___42237)){
args__4835__auto__.push((arguments[i__4830__auto___42238]));

var G__42239 = (i__4830__auto___42238 + (1));
i__4830__auto___42238 = G__42239;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,args){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),cljs.core.to_array(args));
}));

(applied_science.js_interop.call_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq42135){
var G__42136 = cljs.core.first(seq42135);
var seq42135__$1 = cljs.core.next(seq42135);
var G__42137 = cljs.core.first(seq42135__$1);
var seq42135__$2 = cljs.core.next(seq42135__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42136,G__42137,seq42135__$2);
}));

/**
 * Apply function nested at `path` with `arg-array`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/apply-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.apply_in = (function applied_science$js_interop$apply_in(obj,ks,arg_array){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),arg_array);
});
/**
 * Create JavaScript object from an even number arguments representing
 * interleaved keys and values.
 * 
 * ```
 * (obj :a 1 :b 2 .-c 3 .-d 4)
 * ```
 */
applied_science.js_interop.obj = (function applied_science$js_interop$obj(var_args){
var args__4835__auto__ = [];
var len__4829__auto___42240 = arguments.length;
var i__4830__auto___42241 = (0);
while(true){
if((i__4830__auto___42241 < len__4829__auto___42240)){
args__4835__auto__.push((arguments[i__4830__auto___42241]));

var G__42242 = (i__4830__auto___42241 + (1));
i__4830__auto___42241 = G__42242;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var obj = ({});
var seq__42141_42243 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__42142_42244 = null;
var count__42143_42245 = (0);
var i__42144_42246 = (0);
while(true){
if((i__42144_42246 < count__42143_42245)){
var vec__42159_42247 = chunk__42142_42244.cljs$core$IIndexed$_nth$arity$2(null,i__42144_42246);
var k_42248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42159_42247,(0),null);
var v_42249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42159_42247,(1),null);
var obj42162_42250 = obj;
var obj42163_42251 = (((!((obj42162_42250 == null))))?obj42162_42250:({}));
(obj42163_42251[applied_science.js_interop.impl.wrap_key(k_42248)] = v_42249);



var G__42252 = seq__42141_42243;
var G__42253 = chunk__42142_42244;
var G__42254 = count__42143_42245;
var G__42255 = (i__42144_42246 + (1));
seq__42141_42243 = G__42252;
chunk__42142_42244 = G__42253;
count__42143_42245 = G__42254;
i__42144_42246 = G__42255;
continue;
} else {
var temp__5753__auto___42256 = cljs.core.seq(seq__42141_42243);
if(temp__5753__auto___42256){
var seq__42141_42257__$1 = temp__5753__auto___42256;
if(cljs.core.chunked_seq_QMARK_(seq__42141_42257__$1)){
var c__4649__auto___42258 = cljs.core.chunk_first(seq__42141_42257__$1);
var G__42259 = cljs.core.chunk_rest(seq__42141_42257__$1);
var G__42260 = c__4649__auto___42258;
var G__42261 = cljs.core.count(c__4649__auto___42258);
var G__42262 = (0);
seq__42141_42243 = G__42259;
chunk__42142_42244 = G__42260;
count__42143_42245 = G__42261;
i__42144_42246 = G__42262;
continue;
} else {
var vec__42166_42263 = cljs.core.first(seq__42141_42257__$1);
var k_42264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42166_42263,(0),null);
var v_42265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42166_42263,(1),null);
var obj42169_42266 = obj;
var obj42170_42267 = (((!((obj42169_42266 == null))))?obj42169_42266:({}));
(obj42170_42267[applied_science.js_interop.impl.wrap_key(k_42264)] = v_42265);



var G__42268 = cljs.core.next(seq__42141_42257__$1);
var G__42269 = null;
var G__42270 = (0);
var G__42271 = (0);
seq__42141_42243 = G__42268;
chunk__42142_42244 = G__42269;
count__42143_42245 = G__42270;
i__42144_42246 = G__42271;
continue;
}
} else {
}
}
break;
}

return obj;
}));

(applied_science.js_interop.obj.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq42138){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42138));
}));


//# sourceMappingURL=applied_science.js_interop.js.map
