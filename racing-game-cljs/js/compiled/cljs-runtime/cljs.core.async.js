goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32793 = arguments.length;
switch (G__32793) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32794 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32794 = (function (f,blockable,meta32795){
this.f = f;
this.blockable = blockable;
this.meta32795 = meta32795;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32796,meta32795__$1){
var self__ = this;
var _32796__$1 = this;
return (new cljs.core.async.t_cljs$core$async32794(self__.f,self__.blockable,meta32795__$1));
}));

(cljs.core.async.t_cljs$core$async32794.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32796){
var self__ = this;
var _32796__$1 = this;
return self__.meta32795;
}));

(cljs.core.async.t_cljs$core$async32794.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32794.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32794.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32794.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32794.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32795","meta32795",1170017713,null)], null);
}));

(cljs.core.async.t_cljs$core$async32794.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32794.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32794");

(cljs.core.async.t_cljs$core$async32794.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async32794");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32794.
 */
cljs.core.async.__GT_t_cljs$core$async32794 = (function cljs$core$async$__GT_t_cljs$core$async32794(f__$1,blockable__$1,meta32795){
return (new cljs.core.async.t_cljs$core$async32794(f__$1,blockable__$1,meta32795));
});

}

return (new cljs.core.async.t_cljs$core$async32794(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__32803 = arguments.length;
switch (G__32803) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__32805 = arguments.length;
switch (G__32805) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__32807 = arguments.length;
switch (G__32807) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34989 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34989) : fn1.call(null,val_34989));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34989) : fn1.call(null,val_34989));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__32811 = arguments.length;
switch (G__32811) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4706__auto___34995 = n;
var x_34996 = (0);
while(true){
if((x_34996 < n__4706__auto___34995)){
(a[x_34996] = x_34996);

var G__34998 = (x_34996 + (1));
x_34996 = G__34998;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32818 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32818 = (function (flag,meta32819){
this.flag = flag;
this.meta32819 = meta32819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32820,meta32819__$1){
var self__ = this;
var _32820__$1 = this;
return (new cljs.core.async.t_cljs$core$async32818(self__.flag,meta32819__$1));
}));

(cljs.core.async.t_cljs$core$async32818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32820){
var self__ = this;
var _32820__$1 = this;
return self__.meta32819;
}));

(cljs.core.async.t_cljs$core$async32818.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32818.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32818.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32818.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32818.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32819","meta32819",166793853,null)], null);
}));

(cljs.core.async.t_cljs$core$async32818.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32818.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32818");

(cljs.core.async.t_cljs$core$async32818.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async32818");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32818.
 */
cljs.core.async.__GT_t_cljs$core$async32818 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32818(flag__$1,meta32819){
return (new cljs.core.async.t_cljs$core$async32818(flag__$1,meta32819));
});

}

return (new cljs.core.async.t_cljs$core$async32818(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32823 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32823 = (function (flag,cb,meta32824){
this.flag = flag;
this.cb = cb;
this.meta32824 = meta32824;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32823.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32825,meta32824__$1){
var self__ = this;
var _32825__$1 = this;
return (new cljs.core.async.t_cljs$core$async32823(self__.flag,self__.cb,meta32824__$1));
}));

(cljs.core.async.t_cljs$core$async32823.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32825){
var self__ = this;
var _32825__$1 = this;
return self__.meta32824;
}));

(cljs.core.async.t_cljs$core$async32823.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32823.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32823.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32823.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32823.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32824","meta32824",-12910507,null)], null);
}));

(cljs.core.async.t_cljs$core$async32823.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32823.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32823");

(cljs.core.async.t_cljs$core$async32823.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async32823");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32823.
 */
cljs.core.async.__GT_t_cljs$core$async32823 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32823(flag__$1,cb__$1,meta32824){
return (new cljs.core.async.t_cljs$core$async32823(flag__$1,cb__$1,meta32824));
});

}

return (new cljs.core.async.t_cljs$core$async32823(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32830_SHARP_){
var G__32833 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32830_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32833) : fret.call(null,G__32833));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32831_SHARP_){
var G__32834 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32831_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32834) : fret.call(null,G__32834));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4223__auto__ = wport;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35008 = (i + (1));
i = G__35008;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4223__auto__ = ret;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4221__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4221__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___35011 = arguments.length;
var i__4830__auto___35012 = (0);
while(true){
if((i__4830__auto___35012 < len__4829__auto___35011)){
args__4835__auto__.push((arguments[i__4830__auto___35012]));

var G__35013 = (i__4830__auto___35012 + (1));
i__4830__auto___35012 = G__35013;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32842){
var map__32843 = p__32842;
var map__32843__$1 = cljs.core.__destructure_map(map__32843);
var opts = map__32843__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32840){
var G__32841 = cljs.core.first(seq32840);
var seq32840__$1 = cljs.core.next(seq32840);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32841,seq32840__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__32845 = arguments.length;
switch (G__32845) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32717__auto___35017 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32718__auto__ = (function (){var switch__32514__auto__ = (function (state_32873){
var state_val_32874 = (state_32873[(1)]);
if((state_val_32874 === (7))){
var inst_32869 = (state_32873[(2)]);
var state_32873__$1 = state_32873;
var statearr_32875_35019 = state_32873__$1;
(statearr_32875_35019[(2)] = inst_32869);

(statearr_32875_35019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (1))){
var state_32873__$1 = state_32873;
var statearr_32876_35021 = state_32873__$1;
(statearr_32876_35021[(2)] = null);

(statearr_32876_35021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (4))){
var inst_32852 = (state_32873[(7)]);
var inst_32852__$1 = (state_32873[(2)]);
var inst_32853 = (inst_32852__$1 == null);
var state_32873__$1 = (function (){var statearr_32878 = state_32873;
(statearr_32878[(7)] = inst_32852__$1);

return statearr_32878;
})();
if(cljs.core.truth_(inst_32853)){
var statearr_32879_35022 = state_32873__$1;
(statearr_32879_35022[(1)] = (5));

} else {
var statearr_32880_35023 = state_32873__$1;
(statearr_32880_35023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (13))){
var state_32873__$1 = state_32873;
var statearr_32883_35024 = state_32873__$1;
(statearr_32883_35024[(2)] = null);

(statearr_32883_35024[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (6))){
var inst_32852 = (state_32873[(7)]);
var state_32873__$1 = state_32873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32873__$1,(11),to,inst_32852);
} else {
if((state_val_32874 === (3))){
var inst_32871 = (state_32873[(2)]);
var state_32873__$1 = state_32873;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32873__$1,inst_32871);
} else {
if((state_val_32874 === (12))){
var state_32873__$1 = state_32873;
var statearr_32884_35025 = state_32873__$1;
(statearr_32884_35025[(2)] = null);

(statearr_32884_35025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (2))){
var state_32873__$1 = state_32873;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32873__$1,(4),from);
} else {
if((state_val_32874 === (11))){
var inst_32862 = (state_32873[(2)]);
var state_32873__$1 = state_32873;
if(cljs.core.truth_(inst_32862)){
var statearr_32885_35026 = state_32873__$1;
(statearr_32885_35026[(1)] = (12));

} else {
var statearr_32886_35027 = state_32873__$1;
(statearr_32886_35027[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (9))){
var state_32873__$1 = state_32873;
var statearr_32887_35028 = state_32873__$1;
(statearr_32887_35028[(2)] = null);

(statearr_32887_35028[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (5))){
var state_32873__$1 = state_32873;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32888_35029 = state_32873__$1;
(statearr_32888_35029[(1)] = (8));

} else {
var statearr_32889_35030 = state_32873__$1;
(statearr_32889_35030[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (14))){
var inst_32867 = (state_32873[(2)]);
var state_32873__$1 = state_32873;
var statearr_32890_35031 = state_32873__$1;
(statearr_32890_35031[(2)] = inst_32867);

(statearr_32890_35031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (10))){
var inst_32859 = (state_32873[(2)]);
var state_32873__$1 = state_32873;
var statearr_32892_35034 = state_32873__$1;
(statearr_32892_35034[(2)] = inst_32859);

(statearr_32892_35034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (8))){
var inst_32856 = cljs.core.async.close_BANG_(to);
var state_32873__$1 = state_32873;
var statearr_32894_35035 = state_32873__$1;
(statearr_32894_35035[(2)] = inst_32856);

(statearr_32894_35035[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32515__auto__ = null;
var cljs$core$async$state_machine__32515__auto____0 = (function (){
var statearr_32896 = [null,null,null,null,null,null,null,null];
(statearr_32896[(0)] = cljs$core$async$state_machine__32515__auto__);

(statearr_32896[(1)] = (1));

return statearr_32896;
});
var cljs$core$async$state_machine__32515__auto____1 = (function (state_32873){
while(true){
var ret_value__32516__auto__ = (function (){try{while(true){
var result__32517__auto__ = switch__32514__auto__(state_32873);
if(cljs.core.keyword_identical_QMARK_(result__32517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32517__auto__;
}
break;
}
}catch (e32901){var ex__32518__auto__ = e32901;
var statearr_32902_35036 = state_32873;
(statearr_32902_35036[(2)] = ex__32518__auto__);


if(cljs.core.seq((state_32873[(4)]))){
var statearr_32906_35037 = state_32873;
(statearr_32906_35037[(1)] = cljs.core.first((state_32873[(4)])));

} else {
throw ex__32518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35038 = state_32873;
state_32873 = G__35038;
continue;
} else {
return ret_value__32516__auto__;
}
break;
}
});
cljs$core$async$state_machine__32515__auto__ = function(state_32873){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32515__auto____1.call(this,state_32873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32515__auto____0;
cljs$core$async$state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32515__auto____1;
return cljs$core$async$state_machine__32515__auto__;
})()
})();
var state__32719__auto__ = (function (){var statearr_32907 = f__32718__auto__();
(statearr_32907[(6)] = c__32717__auto___35017);

return statearr_32907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32719__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__32917){
var vec__32918 = p__32917;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32918,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32918,(1),null);
var job = vec__32918;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32717__auto___35039 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32718__auto__ = (function (){var switch__32514__auto__ = (function (state_32925){
var state_val_32926 = (state_32925[(1)]);
if((state_val_32926 === (1))){
var state_32925__$1 = state_32925;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32925__$1,(2),res,v);
} else {
if((state_val_32926 === (2))){
var inst_32922 = (state_32925[(2)]);
var inst_32923 = cljs.core.async.close_BANG_(res);
var state_32925__$1 = (function (){var statearr_32927 = state_32925;
(statearr_32927[(7)] = inst_32922);

return statearr_32927;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32925__$1,inst_32923);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32515__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32515__auto____0 = (function (){
var statearr_32929 = [null,null,null,null,null,null,null,null];
(statearr_32929[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32515__auto__);

(statearr_32929[(1)] = (1));

return statearr_32929;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32515__auto____1 = (function (state_32925){
while(true){
var ret_value__32516__auto__ = (function (){try{while(true){
var result__32517__auto__ = switch__32514__auto__(state_32925);
if(cljs.core.keyword_identical_QMARK_(result__32517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32517__auto__;
}
break;
}
}catch (e32931){var ex__32518__auto__ = e32931;
var statearr_32932_35043 = state_32925;
(statearr_32932_35043[(2)] = ex__32518__auto__);


if(cljs.core.seq((state_32925[(4)]))){
var statearr_32933_35044 = state_32925;
(statearr_32933_35044[(1)] = cljs.core.first((state_32925[(4)])));

} else {
throw ex__32518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35045 = state_32925;
state_32925 = G__35045;
continue;
} else {
return ret_value__32516__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32515__auto__ = function(state_32925){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32515__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32515__auto____1.call(this,state_32925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32515__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32515__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32515__auto__;
})()
})();
var state__32719__auto__ = (function (){var statearr_32934 = f__32718__auto__();
(statearr_32934[(6)] = c__32717__auto___35039);

return statearr_32934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32719__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32938){
var vec__32939 = p__32938;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32939,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32939,(1),null);
var job = vec__32939;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4706__auto___35046 = n;
var __35047 = (0);
while(true){
if((__35047 < n__4706__auto___35046)){
var G__32942_35048 = type;
var G__32942_35049__$1 = (((G__32942_35048 instanceof cljs.core.Keyword))?G__32942_35048.fqn:null);
switch (G__32942_35049__$1) {
case "compute":
var c__32717__auto___35051 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35047,c__32717__auto___35051,G__32942_35048,G__32942_35049__$1,n__4706__auto___35046,jobs,results,process,async){
return (function (){
var f__32718__auto__ = (function (){var switch__32514__auto__ = ((function (__35047,c__32717__auto___35051,G__32942_35048,G__32942_35049__$1,n__4706__auto___35046,jobs,results,process,async){
return (function (state_32955){
var state_val_32956 = (state_32955[(1)]);
if((state_val_32956 === (1))){
var state_32955__$1 = state_32955;
var statearr_32957_35052 = state_32955__$1;
(statearr_32957_35052[(2)] = null);

(statearr_32957_35052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32956 === (2))){
var state_32955__$1 = state_32955;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32955__$1,(4),jobs);
} else {
if((state_val_32956 === (3))){
var inst_32953 = (state_32955[(2)]);
var state_32955__$1 = state_32955;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32955__$1,inst_32953);
} else {
if((state_val_32956 === (4))){
var inst_32945 = (state_32955[(2)]);
var inst_32946 = process(inst_32945);
var state_32955__$1 = state_32955;
if(cljs.core.truth_(inst_32946)){
var statearr_32958_35053 = state_32955__$1;
(statearr_32958_35053[(1)] = (5));

} else {
var statearr_32959_35054 = state_32955__$1;
(statearr_32959_35054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32956 === (5))){
var state_32955__$1 = state_32955;
var statearr_32960_35056 = state_32955__$1;
(statearr_32960_35056[(2)] = null);

(statearr_32960_35056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32956 === (6))){
var state_32955__$1 = state_32955;
var statearr_32961_35057 = state_32955__$1;
(statearr_32961_35057[(2)] = null);

(statearr_32961_35057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32956 === (7))){
var inst_32951 = (state_32955[(2)]);
var state_32955__$1 = state_32955;
var statearr_32962_35058 = state_32955__$1;
(statearr_32962_35058[(2)] = inst_32951);

(statearr_32962_35058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35047,c__32717__auto___35051,G__32942_35048,G__32942_35049__$1,n__4706__auto___35046,jobs,results,process,async))
;
return ((function (__35047,switch__32514__auto__,c__32717__auto___35051,G__32942_35048,G__32942_35049__$1,n__4706__auto___35046,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32515__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32515__auto____0 = (function (){
var statearr_32963 = [null,null,null,null,null,null,null];
(statearr_32963[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32515__auto__);

(statearr_32963[(1)] = (1));

return statearr_32963;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32515__auto____1 = (function (state_32955){
while(true){
var ret_value__32516__auto__ = (function (){try{while(true){
var result__32517__auto__ = switch__32514__auto__(state_32955);
if(cljs.core.keyword_identical_QMARK_(result__32517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32517__auto__;
}
break;
}
}catch (e32964){var ex__32518__auto__ = e32964;
var statearr_32965_35062 = state_32955;
(statearr_32965_35062[(2)] = ex__32518__auto__);


if(cljs.core.seq((state_32955[(4)]))){
var statearr_32966_35063 = state_32955;
(statearr_32966_35063[(1)] = cljs.core.first((state_32955[(4)])));

} else {
throw ex__32518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35068 = state_32955;
state_32955 = G__35068;
continue;
} else {
return ret_value__32516__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32515__auto__ = function(state_32955){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32515__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32515__auto____1.call(this,state_32955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32515__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32515__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32515__auto__;
})()
;})(__35047,switch__32514__auto__,c__32717__auto___35051,G__32942_35048,G__32942_35049__$1,n__4706__auto___35046,jobs,results,process,async))
})();
var state__32719__auto__ = (function (){var statearr_32967 = f__32718__auto__();
(statearr_32967[(6)] = c__32717__auto___35051);

return statearr_32967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32719__auto__);
});})(__35047,c__32717__auto___35051,G__32942_35048,G__32942_35049__$1,n__4706__auto___35046,jobs,results,process,async))
);


break;
case "async":
var c__32717__auto___35073 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35047,c__32717__auto___35073,G__32942_35048,G__32942_35049__$1,n__4706__auto___35046,jobs,results,process,async){
return (function (){
var f__32718__auto__ = (function (){var switch__32514__auto__ = ((function (__35047,c__32717__auto___35073,G__32942_35048,G__32942_35049__$1,n__4706__auto___35046,jobs,results,process,async){
return (function (state_32980){
var state_val_32981 = (state_32980[(1)]);
if((state_val_32981 === (1))){
var state_32980__$1 = state_32980;
var statearr_32982_35074 = state_32980__$1;
(statearr_32982_35074[(2)] = null);

(statearr_32982_35074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32981 === (2))){
var state_32980__$1 = state_32980;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32980__$1,(4),jobs);
} else {
if((state_val_32981 === (3))){
var inst_32978 = (state_32980[(2)]);
var state_32980__$1 = state_32980;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32980__$1,inst_32978);
} else {
if((state_val_32981 === (4))){
var inst_32970 = (state_32980[(2)]);
var inst_32971 = async(inst_32970);
var state_32980__$1 = state_32980;
if(cljs.core.truth_(inst_32971)){
var statearr_32983_35079 = state_32980__$1;
(statearr_32983_35079[(1)] = (5));

} else {
var statearr_32984_35080 = state_32980__$1;
(statearr_32984_35080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32981 === (5))){
var state_32980__$1 = state_32980;
var statearr_32985_35081 = state_32980__$1;
(statearr_32985_35081[(2)] = null);

(statearr_32985_35081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32981 === (6))){
var state_32980__$1 = state_32980;
var statearr_32986_35082 = state_32980__$1;
(statearr_32986_35082[(2)] = null);

(statearr_32986_35082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32981 === (7))){
var inst_32976 = (state_32980[(2)]);
var state_32980__$1 = state_32980;
var statearr_32987_35083 = state_32980__$1;
(statearr_32987_35083[(2)] = inst_32976);

(statearr_32987_35083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35047,c__32717__auto___35073,G__32942_35048,G__32942_35049__$1,n__4706__auto___35046,jobs,results,process,async))
;
return ((function (__35047,switch__32514__auto__,c__32717__auto___35073,G__32942_35048,G__32942_35049__$1,n__4706__auto___35046,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32515__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32515__auto____0 = (function (){
var statearr_32988 = [null,null,null,null,null,null,null];
(statearr_32988[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32515__auto__);

(statearr_32988[(1)] = (1));

return statearr_32988;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32515__auto____1 = (function (state_32980){
while(true){
var ret_value__32516__auto__ = (function (){try{while(true){
var result__32517__auto__ = switch__32514__auto__(state_32980);
if(cljs.core.keyword_identical_QMARK_(result__32517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32517__auto__;
}
break;
}
}catch (e32989){var ex__32518__auto__ = e32989;
var statearr_32990_35084 = state_32980;
(statearr_32990_35084[(2)] = ex__32518__auto__);


if(cljs.core.seq((state_32980[(4)]))){
var statearr_32991_35085 = state_32980;
(statearr_32991_35085[(1)] = cljs.core.first((state_32980[(4)])));

} else {
throw ex__32518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35090 = state_32980;
state_32980 = G__35090;
continue;
} else {
return ret_value__32516__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32515__auto__ = function(state_32980){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32515__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32515__auto____1.call(this,state_32980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32515__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32515__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32515__auto__;
})()
;})(__35047,switch__32514__auto__,c__32717__auto___35073,G__32942_35048,G__32942_35049__$1,n__4706__auto___35046,jobs,results,process,async))
})();
var state__32719__auto__ = (function (){var statearr_32995 = f__32718__auto__();
(statearr_32995[(6)] = c__32717__auto___35073);

return statearr_32995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32719__auto__);
});})(__35047,c__32717__auto___35073,G__32942_35048,G__32942_35049__$1,n__4706__auto___35046,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32942_35049__$1)].join('')));

}

var G__35096 = (__35047 + (1));
__35047 = G__35096;
continue;
} else {
}
break;
}

var c__32717__auto___35097 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32718__auto__ = (function (){var switch__32514__auto__ = (function (state_33036){
var state_val_33041 = (state_33036[(1)]);
if((state_val_33041 === (7))){
var inst_33032 = (state_33036[(2)]);
var state_33036__$1 = state_33036;
var statearr_33061_35098 = state_33036__$1;
(statearr_33061_35098[(2)] = inst_33032);

(statearr_33061_35098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33041 === (1))){
var state_33036__$1 = state_33036;
var statearr_33062_35099 = state_33036__$1;
(statearr_33062_35099[(2)] = null);

(statearr_33062_35099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33041 === (4))){
var inst_32999 = (state_33036[(7)]);
var inst_32999__$1 = (state_33036[(2)]);
var inst_33000 = (inst_32999__$1 == null);
var state_33036__$1 = (function (){var statearr_33063 = state_33036;
(statearr_33063[(7)] = inst_32999__$1);

return statearr_33063;
})();
if(cljs.core.truth_(inst_33000)){
var statearr_33064_35103 = state_33036__$1;
(statearr_33064_35103[(1)] = (5));

} else {
var statearr_33065_35104 = state_33036__$1;
(statearr_33065_35104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33041 === (6))){
var inst_33005 = (state_33036[(8)]);
var inst_32999 = (state_33036[(7)]);
var inst_33005__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33023 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33024 = [inst_32999,inst_33005__$1];
var inst_33025 = (new cljs.core.PersistentVector(null,2,(5),inst_33023,inst_33024,null));
var state_33036__$1 = (function (){var statearr_33067 = state_33036;
(statearr_33067[(8)] = inst_33005__$1);

return statearr_33067;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33036__$1,(8),jobs,inst_33025);
} else {
if((state_val_33041 === (3))){
var inst_33034 = (state_33036[(2)]);
var state_33036__$1 = state_33036;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33036__$1,inst_33034);
} else {
if((state_val_33041 === (2))){
var state_33036__$1 = state_33036;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33036__$1,(4),from);
} else {
if((state_val_33041 === (9))){
var inst_33029 = (state_33036[(2)]);
var state_33036__$1 = (function (){var statearr_33070 = state_33036;
(statearr_33070[(9)] = inst_33029);

return statearr_33070;
})();
var statearr_33073_35107 = state_33036__$1;
(statearr_33073_35107[(2)] = null);

(statearr_33073_35107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33041 === (5))){
var inst_33002 = cljs.core.async.close_BANG_(jobs);
var state_33036__$1 = state_33036;
var statearr_33076_35111 = state_33036__$1;
(statearr_33076_35111[(2)] = inst_33002);

(statearr_33076_35111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33041 === (8))){
var inst_33005 = (state_33036[(8)]);
var inst_33027 = (state_33036[(2)]);
var state_33036__$1 = (function (){var statearr_33078 = state_33036;
(statearr_33078[(10)] = inst_33027);

return statearr_33078;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33036__$1,(9),results,inst_33005);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32515__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32515__auto____0 = (function (){
var statearr_33079 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33079[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32515__auto__);

(statearr_33079[(1)] = (1));

return statearr_33079;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32515__auto____1 = (function (state_33036){
while(true){
var ret_value__32516__auto__ = (function (){try{while(true){
var result__32517__auto__ = switch__32514__auto__(state_33036);
if(cljs.core.keyword_identical_QMARK_(result__32517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32517__auto__;
}
break;
}
}catch (e33090){var ex__32518__auto__ = e33090;
var statearr_33092_35122 = state_33036;
(statearr_33092_35122[(2)] = ex__32518__auto__);


if(cljs.core.seq((state_33036[(4)]))){
var statearr_33099_35123 = state_33036;
(statearr_33099_35123[(1)] = cljs.core.first((state_33036[(4)])));

} else {
throw ex__32518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35128 = state_33036;
state_33036 = G__35128;
continue;
} else {
return ret_value__32516__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32515__auto__ = function(state_33036){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32515__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32515__auto____1.call(this,state_33036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32515__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32515__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32515__auto__;
})()
})();
var state__32719__auto__ = (function (){var statearr_33106 = f__32718__auto__();
(statearr_33106[(6)] = c__32717__auto___35097);

return statearr_33106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32719__auto__);
}));


var c__32717__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32718__auto__ = (function (){var switch__32514__auto__ = (function (state_33167){
var state_val_33168 = (state_33167[(1)]);
if((state_val_33168 === (7))){
var inst_33163 = (state_33167[(2)]);
var state_33167__$1 = state_33167;
var statearr_33190_35131 = state_33167__$1;
(statearr_33190_35131[(2)] = inst_33163);

(statearr_33190_35131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (20))){
var state_33167__$1 = state_33167;
var statearr_33191_35132 = state_33167__$1;
(statearr_33191_35132[(2)] = null);

(statearr_33191_35132[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (1))){
var state_33167__$1 = state_33167;
var statearr_33192_35133 = state_33167__$1;
(statearr_33192_35133[(2)] = null);

(statearr_33192_35133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (4))){
var inst_33109 = (state_33167[(7)]);
var inst_33109__$1 = (state_33167[(2)]);
var inst_33115 = (inst_33109__$1 == null);
var state_33167__$1 = (function (){var statearr_33197 = state_33167;
(statearr_33197[(7)] = inst_33109__$1);

return statearr_33197;
})();
if(cljs.core.truth_(inst_33115)){
var statearr_33198_35136 = state_33167__$1;
(statearr_33198_35136[(1)] = (5));

} else {
var statearr_33199_35137 = state_33167__$1;
(statearr_33199_35137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (15))){
var inst_33141 = (state_33167[(8)]);
var state_33167__$1 = state_33167;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33167__$1,(18),to,inst_33141);
} else {
if((state_val_33168 === (21))){
var inst_33158 = (state_33167[(2)]);
var state_33167__$1 = state_33167;
var statearr_33200_35138 = state_33167__$1;
(statearr_33200_35138[(2)] = inst_33158);

(statearr_33200_35138[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (13))){
var inst_33160 = (state_33167[(2)]);
var state_33167__$1 = (function (){var statearr_33202 = state_33167;
(statearr_33202[(9)] = inst_33160);

return statearr_33202;
})();
var statearr_33203_35139 = state_33167__$1;
(statearr_33203_35139[(2)] = null);

(statearr_33203_35139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (6))){
var inst_33109 = (state_33167[(7)]);
var state_33167__$1 = state_33167;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33167__$1,(11),inst_33109);
} else {
if((state_val_33168 === (17))){
var inst_33153 = (state_33167[(2)]);
var state_33167__$1 = state_33167;
if(cljs.core.truth_(inst_33153)){
var statearr_33211_35141 = state_33167__$1;
(statearr_33211_35141[(1)] = (19));

} else {
var statearr_33212_35142 = state_33167__$1;
(statearr_33212_35142[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (3))){
var inst_33165 = (state_33167[(2)]);
var state_33167__$1 = state_33167;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33167__$1,inst_33165);
} else {
if((state_val_33168 === (12))){
var inst_33132 = (state_33167[(10)]);
var state_33167__$1 = state_33167;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33167__$1,(14),inst_33132);
} else {
if((state_val_33168 === (2))){
var state_33167__$1 = state_33167;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33167__$1,(4),results);
} else {
if((state_val_33168 === (19))){
var state_33167__$1 = state_33167;
var statearr_33228_35144 = state_33167__$1;
(statearr_33228_35144[(2)] = null);

(statearr_33228_35144[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (11))){
var inst_33132 = (state_33167[(2)]);
var state_33167__$1 = (function (){var statearr_33229 = state_33167;
(statearr_33229[(10)] = inst_33132);

return statearr_33229;
})();
var statearr_33230_35145 = state_33167__$1;
(statearr_33230_35145[(2)] = null);

(statearr_33230_35145[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (9))){
var state_33167__$1 = state_33167;
var statearr_33231_35146 = state_33167__$1;
(statearr_33231_35146[(2)] = null);

(statearr_33231_35146[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (5))){
var state_33167__$1 = state_33167;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33232_35147 = state_33167__$1;
(statearr_33232_35147[(1)] = (8));

} else {
var statearr_33233_35148 = state_33167__$1;
(statearr_33233_35148[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (14))){
var inst_33141 = (state_33167[(8)]);
var inst_33147 = (state_33167[(11)]);
var inst_33141__$1 = (state_33167[(2)]);
var inst_33146 = (inst_33141__$1 == null);
var inst_33147__$1 = cljs.core.not(inst_33146);
var state_33167__$1 = (function (){var statearr_33236 = state_33167;
(statearr_33236[(8)] = inst_33141__$1);

(statearr_33236[(11)] = inst_33147__$1);

return statearr_33236;
})();
if(inst_33147__$1){
var statearr_33237_35149 = state_33167__$1;
(statearr_33237_35149[(1)] = (15));

} else {
var statearr_33238_35150 = state_33167__$1;
(statearr_33238_35150[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (16))){
var inst_33147 = (state_33167[(11)]);
var state_33167__$1 = state_33167;
var statearr_33240_35151 = state_33167__$1;
(statearr_33240_35151[(2)] = inst_33147);

(statearr_33240_35151[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (10))){
var inst_33127 = (state_33167[(2)]);
var state_33167__$1 = state_33167;
var statearr_33241_35152 = state_33167__$1;
(statearr_33241_35152[(2)] = inst_33127);

(statearr_33241_35152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (18))){
var inst_33150 = (state_33167[(2)]);
var state_33167__$1 = state_33167;
var statearr_33244_35153 = state_33167__$1;
(statearr_33244_35153[(2)] = inst_33150);

(statearr_33244_35153[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (8))){
var inst_33120 = cljs.core.async.close_BANG_(to);
var state_33167__$1 = state_33167;
var statearr_33247_35154 = state_33167__$1;
(statearr_33247_35154[(2)] = inst_33120);

(statearr_33247_35154[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32515__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32515__auto____0 = (function (){
var statearr_33248 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33248[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32515__auto__);

(statearr_33248[(1)] = (1));

return statearr_33248;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32515__auto____1 = (function (state_33167){
while(true){
var ret_value__32516__auto__ = (function (){try{while(true){
var result__32517__auto__ = switch__32514__auto__(state_33167);
if(cljs.core.keyword_identical_QMARK_(result__32517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32517__auto__;
}
break;
}
}catch (e33249){var ex__32518__auto__ = e33249;
var statearr_33250_35157 = state_33167;
(statearr_33250_35157[(2)] = ex__32518__auto__);


if(cljs.core.seq((state_33167[(4)]))){
var statearr_33251_35158 = state_33167;
(statearr_33251_35158[(1)] = cljs.core.first((state_33167[(4)])));

} else {
throw ex__32518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35159 = state_33167;
state_33167 = G__35159;
continue;
} else {
return ret_value__32516__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32515__auto__ = function(state_33167){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32515__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32515__auto____1.call(this,state_33167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32515__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32515__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32515__auto__;
})()
})();
var state__32719__auto__ = (function (){var statearr_33259 = f__32718__auto__();
(statearr_33259[(6)] = c__32717__auto__);

return statearr_33259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32719__auto__);
}));

return c__32717__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33262 = arguments.length;
switch (G__33262) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33267 = arguments.length;
switch (G__33267) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33274 = arguments.length;
switch (G__33274) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__32717__auto___35164 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32718__auto__ = (function (){var switch__32514__auto__ = (function (state_33324){
var state_val_33325 = (state_33324[(1)]);
if((state_val_33325 === (7))){
var inst_33320 = (state_33324[(2)]);
var state_33324__$1 = state_33324;
var statearr_33326_35165 = state_33324__$1;
(statearr_33326_35165[(2)] = inst_33320);

(statearr_33326_35165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (1))){
var state_33324__$1 = state_33324;
var statearr_33327_35166 = state_33324__$1;
(statearr_33327_35166[(2)] = null);

(statearr_33327_35166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (4))){
var inst_33289 = (state_33324[(7)]);
var inst_33289__$1 = (state_33324[(2)]);
var inst_33294 = (inst_33289__$1 == null);
var state_33324__$1 = (function (){var statearr_33329 = state_33324;
(statearr_33329[(7)] = inst_33289__$1);

return statearr_33329;
})();
if(cljs.core.truth_(inst_33294)){
var statearr_33330_35171 = state_33324__$1;
(statearr_33330_35171[(1)] = (5));

} else {
var statearr_33331_35172 = state_33324__$1;
(statearr_33331_35172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (13))){
var state_33324__$1 = state_33324;
var statearr_33332_35173 = state_33324__$1;
(statearr_33332_35173[(2)] = null);

(statearr_33332_35173[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (6))){
var inst_33289 = (state_33324[(7)]);
var inst_33307 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33289) : p.call(null,inst_33289));
var state_33324__$1 = state_33324;
if(cljs.core.truth_(inst_33307)){
var statearr_33333_35175 = state_33324__$1;
(statearr_33333_35175[(1)] = (9));

} else {
var statearr_33334_35176 = state_33324__$1;
(statearr_33334_35176[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (3))){
var inst_33322 = (state_33324[(2)]);
var state_33324__$1 = state_33324;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33324__$1,inst_33322);
} else {
if((state_val_33325 === (12))){
var state_33324__$1 = state_33324;
var statearr_33335_35178 = state_33324__$1;
(statearr_33335_35178[(2)] = null);

(statearr_33335_35178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (2))){
var state_33324__$1 = state_33324;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33324__$1,(4),ch);
} else {
if((state_val_33325 === (11))){
var inst_33289 = (state_33324[(7)]);
var inst_33311 = (state_33324[(2)]);
var state_33324__$1 = state_33324;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33324__$1,(8),inst_33311,inst_33289);
} else {
if((state_val_33325 === (9))){
var state_33324__$1 = state_33324;
var statearr_33337_35179 = state_33324__$1;
(statearr_33337_35179[(2)] = tc);

(statearr_33337_35179[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (5))){
var inst_33300 = cljs.core.async.close_BANG_(tc);
var inst_33301 = cljs.core.async.close_BANG_(fc);
var state_33324__$1 = (function (){var statearr_33338 = state_33324;
(statearr_33338[(8)] = inst_33300);

return statearr_33338;
})();
var statearr_33339_35180 = state_33324__$1;
(statearr_33339_35180[(2)] = inst_33301);

(statearr_33339_35180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (14))){
var inst_33318 = (state_33324[(2)]);
var state_33324__$1 = state_33324;
var statearr_33340_35181 = state_33324__$1;
(statearr_33340_35181[(2)] = inst_33318);

(statearr_33340_35181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (10))){
var state_33324__$1 = state_33324;
var statearr_33341_35182 = state_33324__$1;
(statearr_33341_35182[(2)] = fc);

(statearr_33341_35182[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (8))){
var inst_33313 = (state_33324[(2)]);
var state_33324__$1 = state_33324;
if(cljs.core.truth_(inst_33313)){
var statearr_33342_35184 = state_33324__$1;
(statearr_33342_35184[(1)] = (12));

} else {
var statearr_33343_35185 = state_33324__$1;
(statearr_33343_35185[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32515__auto__ = null;
var cljs$core$async$state_machine__32515__auto____0 = (function (){
var statearr_33345 = [null,null,null,null,null,null,null,null,null];
(statearr_33345[(0)] = cljs$core$async$state_machine__32515__auto__);

(statearr_33345[(1)] = (1));

return statearr_33345;
});
var cljs$core$async$state_machine__32515__auto____1 = (function (state_33324){
while(true){
var ret_value__32516__auto__ = (function (){try{while(true){
var result__32517__auto__ = switch__32514__auto__(state_33324);
if(cljs.core.keyword_identical_QMARK_(result__32517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32517__auto__;
}
break;
}
}catch (e33346){var ex__32518__auto__ = e33346;
var statearr_33355_35196 = state_33324;
(statearr_33355_35196[(2)] = ex__32518__auto__);


if(cljs.core.seq((state_33324[(4)]))){
var statearr_33356_35197 = state_33324;
(statearr_33356_35197[(1)] = cljs.core.first((state_33324[(4)])));

} else {
throw ex__32518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35198 = state_33324;
state_33324 = G__35198;
continue;
} else {
return ret_value__32516__auto__;
}
break;
}
});
cljs$core$async$state_machine__32515__auto__ = function(state_33324){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32515__auto____1.call(this,state_33324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32515__auto____0;
cljs$core$async$state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32515__auto____1;
return cljs$core$async$state_machine__32515__auto__;
})()
})();
var state__32719__auto__ = (function (){var statearr_33369 = f__32718__auto__();
(statearr_33369[(6)] = c__32717__auto___35164);

return statearr_33369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32719__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32717__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32718__auto__ = (function (){var switch__32514__auto__ = (function (state_33392){
var state_val_33393 = (state_33392[(1)]);
if((state_val_33393 === (7))){
var inst_33388 = (state_33392[(2)]);
var state_33392__$1 = state_33392;
var statearr_33394_35200 = state_33392__$1;
(statearr_33394_35200[(2)] = inst_33388);

(statearr_33394_35200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (1))){
var inst_33371 = init;
var inst_33372 = inst_33371;
var state_33392__$1 = (function (){var statearr_33395 = state_33392;
(statearr_33395[(7)] = inst_33372);

return statearr_33395;
})();
var statearr_33396_35202 = state_33392__$1;
(statearr_33396_35202[(2)] = null);

(statearr_33396_35202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (4))){
var inst_33375 = (state_33392[(8)]);
var inst_33375__$1 = (state_33392[(2)]);
var inst_33376 = (inst_33375__$1 == null);
var state_33392__$1 = (function (){var statearr_33398 = state_33392;
(statearr_33398[(8)] = inst_33375__$1);

return statearr_33398;
})();
if(cljs.core.truth_(inst_33376)){
var statearr_33399_35204 = state_33392__$1;
(statearr_33399_35204[(1)] = (5));

} else {
var statearr_33400_35205 = state_33392__$1;
(statearr_33400_35205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (6))){
var inst_33375 = (state_33392[(8)]);
var inst_33372 = (state_33392[(7)]);
var inst_33379 = (state_33392[(9)]);
var inst_33379__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33372,inst_33375) : f.call(null,inst_33372,inst_33375));
var inst_33380 = cljs.core.reduced_QMARK_(inst_33379__$1);
var state_33392__$1 = (function (){var statearr_33401 = state_33392;
(statearr_33401[(9)] = inst_33379__$1);

return statearr_33401;
})();
if(inst_33380){
var statearr_33402_35207 = state_33392__$1;
(statearr_33402_35207[(1)] = (8));

} else {
var statearr_33403_35208 = state_33392__$1;
(statearr_33403_35208[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (3))){
var inst_33390 = (state_33392[(2)]);
var state_33392__$1 = state_33392;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33392__$1,inst_33390);
} else {
if((state_val_33393 === (2))){
var state_33392__$1 = state_33392;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33392__$1,(4),ch);
} else {
if((state_val_33393 === (9))){
var inst_33379 = (state_33392[(9)]);
var inst_33372 = inst_33379;
var state_33392__$1 = (function (){var statearr_33404 = state_33392;
(statearr_33404[(7)] = inst_33372);

return statearr_33404;
})();
var statearr_33405_35209 = state_33392__$1;
(statearr_33405_35209[(2)] = null);

(statearr_33405_35209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (5))){
var inst_33372 = (state_33392[(7)]);
var state_33392__$1 = state_33392;
var statearr_33406_35210 = state_33392__$1;
(statearr_33406_35210[(2)] = inst_33372);

(statearr_33406_35210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (10))){
var inst_33386 = (state_33392[(2)]);
var state_33392__$1 = state_33392;
var statearr_33408_35211 = state_33392__$1;
(statearr_33408_35211[(2)] = inst_33386);

(statearr_33408_35211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (8))){
var inst_33379 = (state_33392[(9)]);
var inst_33382 = cljs.core.deref(inst_33379);
var state_33392__$1 = state_33392;
var statearr_33409_35212 = state_33392__$1;
(statearr_33409_35212[(2)] = inst_33382);

(statearr_33409_35212[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__32515__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32515__auto____0 = (function (){
var statearr_33410 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33410[(0)] = cljs$core$async$reduce_$_state_machine__32515__auto__);

(statearr_33410[(1)] = (1));

return statearr_33410;
});
var cljs$core$async$reduce_$_state_machine__32515__auto____1 = (function (state_33392){
while(true){
var ret_value__32516__auto__ = (function (){try{while(true){
var result__32517__auto__ = switch__32514__auto__(state_33392);
if(cljs.core.keyword_identical_QMARK_(result__32517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32517__auto__;
}
break;
}
}catch (e33411){var ex__32518__auto__ = e33411;
var statearr_33412_35217 = state_33392;
(statearr_33412_35217[(2)] = ex__32518__auto__);


if(cljs.core.seq((state_33392[(4)]))){
var statearr_33413_35221 = state_33392;
(statearr_33413_35221[(1)] = cljs.core.first((state_33392[(4)])));

} else {
throw ex__32518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35222 = state_33392;
state_33392 = G__35222;
continue;
} else {
return ret_value__32516__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32515__auto__ = function(state_33392){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32515__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32515__auto____1.call(this,state_33392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32515__auto____0;
cljs$core$async$reduce_$_state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32515__auto____1;
return cljs$core$async$reduce_$_state_machine__32515__auto__;
})()
})();
var state__32719__auto__ = (function (){var statearr_33414 = f__32718__auto__();
(statearr_33414[(6)] = c__32717__auto__);

return statearr_33414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32719__auto__);
}));

return c__32717__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32717__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32718__auto__ = (function (){var switch__32514__auto__ = (function (state_33421){
var state_val_33422 = (state_33421[(1)]);
if((state_val_33422 === (1))){
var inst_33416 = cljs.core.async.reduce(f__$1,init,ch);
var state_33421__$1 = state_33421;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33421__$1,(2),inst_33416);
} else {
if((state_val_33422 === (2))){
var inst_33418 = (state_33421[(2)]);
var inst_33419 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33418) : f__$1.call(null,inst_33418));
var state_33421__$1 = state_33421;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33421__$1,inst_33419);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32515__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32515__auto____0 = (function (){
var statearr_33423 = [null,null,null,null,null,null,null];
(statearr_33423[(0)] = cljs$core$async$transduce_$_state_machine__32515__auto__);

(statearr_33423[(1)] = (1));

return statearr_33423;
});
var cljs$core$async$transduce_$_state_machine__32515__auto____1 = (function (state_33421){
while(true){
var ret_value__32516__auto__ = (function (){try{while(true){
var result__32517__auto__ = switch__32514__auto__(state_33421);
if(cljs.core.keyword_identical_QMARK_(result__32517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32517__auto__;
}
break;
}
}catch (e33425){var ex__32518__auto__ = e33425;
var statearr_33426_35229 = state_33421;
(statearr_33426_35229[(2)] = ex__32518__auto__);


if(cljs.core.seq((state_33421[(4)]))){
var statearr_33427_35230 = state_33421;
(statearr_33427_35230[(1)] = cljs.core.first((state_33421[(4)])));

} else {
throw ex__32518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35231 = state_33421;
state_33421 = G__35231;
continue;
} else {
return ret_value__32516__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32515__auto__ = function(state_33421){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32515__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32515__auto____1.call(this,state_33421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32515__auto____0;
cljs$core$async$transduce_$_state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32515__auto____1;
return cljs$core$async$transduce_$_state_machine__32515__auto__;
})()
})();
var state__32719__auto__ = (function (){var statearr_33428 = f__32718__auto__();
(statearr_33428[(6)] = c__32717__auto__);

return statearr_33428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32719__auto__);
}));

return c__32717__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__33430 = arguments.length;
switch (G__33430) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32717__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32718__auto__ = (function (){var switch__32514__auto__ = (function (state_33456){
var state_val_33457 = (state_33456[(1)]);
if((state_val_33457 === (7))){
var inst_33438 = (state_33456[(2)]);
var state_33456__$1 = state_33456;
var statearr_33458_35236 = state_33456__$1;
(statearr_33458_35236[(2)] = inst_33438);

(statearr_33458_35236[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (1))){
var inst_33432 = cljs.core.seq(coll);
var inst_33433 = inst_33432;
var state_33456__$1 = (function (){var statearr_33459 = state_33456;
(statearr_33459[(7)] = inst_33433);

return statearr_33459;
})();
var statearr_33461_35237 = state_33456__$1;
(statearr_33461_35237[(2)] = null);

(statearr_33461_35237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (4))){
var inst_33433 = (state_33456[(7)]);
var inst_33436 = cljs.core.first(inst_33433);
var state_33456__$1 = state_33456;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33456__$1,(7),ch,inst_33436);
} else {
if((state_val_33457 === (13))){
var inst_33450 = (state_33456[(2)]);
var state_33456__$1 = state_33456;
var statearr_33462_35245 = state_33456__$1;
(statearr_33462_35245[(2)] = inst_33450);

(statearr_33462_35245[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (6))){
var inst_33441 = (state_33456[(2)]);
var state_33456__$1 = state_33456;
if(cljs.core.truth_(inst_33441)){
var statearr_33463_35246 = state_33456__$1;
(statearr_33463_35246[(1)] = (8));

} else {
var statearr_33464_35248 = state_33456__$1;
(statearr_33464_35248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (3))){
var inst_33454 = (state_33456[(2)]);
var state_33456__$1 = state_33456;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33456__$1,inst_33454);
} else {
if((state_val_33457 === (12))){
var state_33456__$1 = state_33456;
var statearr_33465_35250 = state_33456__$1;
(statearr_33465_35250[(2)] = null);

(statearr_33465_35250[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (2))){
var inst_33433 = (state_33456[(7)]);
var state_33456__$1 = state_33456;
if(cljs.core.truth_(inst_33433)){
var statearr_33466_35251 = state_33456__$1;
(statearr_33466_35251[(1)] = (4));

} else {
var statearr_33467_35255 = state_33456__$1;
(statearr_33467_35255[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (11))){
var inst_33447 = cljs.core.async.close_BANG_(ch);
var state_33456__$1 = state_33456;
var statearr_33469_35256 = state_33456__$1;
(statearr_33469_35256[(2)] = inst_33447);

(statearr_33469_35256[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (9))){
var state_33456__$1 = state_33456;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33470_35257 = state_33456__$1;
(statearr_33470_35257[(1)] = (11));

} else {
var statearr_33471_35258 = state_33456__$1;
(statearr_33471_35258[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (5))){
var inst_33433 = (state_33456[(7)]);
var state_33456__$1 = state_33456;
var statearr_33472_35259 = state_33456__$1;
(statearr_33472_35259[(2)] = inst_33433);

(statearr_33472_35259[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (10))){
var inst_33452 = (state_33456[(2)]);
var state_33456__$1 = state_33456;
var statearr_33473_35260 = state_33456__$1;
(statearr_33473_35260[(2)] = inst_33452);

(statearr_33473_35260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (8))){
var inst_33433 = (state_33456[(7)]);
var inst_33443 = cljs.core.next(inst_33433);
var inst_33433__$1 = inst_33443;
var state_33456__$1 = (function (){var statearr_33474 = state_33456;
(statearr_33474[(7)] = inst_33433__$1);

return statearr_33474;
})();
var statearr_33475_35265 = state_33456__$1;
(statearr_33475_35265[(2)] = null);

(statearr_33475_35265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32515__auto__ = null;
var cljs$core$async$state_machine__32515__auto____0 = (function (){
var statearr_33477 = [null,null,null,null,null,null,null,null];
(statearr_33477[(0)] = cljs$core$async$state_machine__32515__auto__);

(statearr_33477[(1)] = (1));

return statearr_33477;
});
var cljs$core$async$state_machine__32515__auto____1 = (function (state_33456){
while(true){
var ret_value__32516__auto__ = (function (){try{while(true){
var result__32517__auto__ = switch__32514__auto__(state_33456);
if(cljs.core.keyword_identical_QMARK_(result__32517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32517__auto__;
}
break;
}
}catch (e33478){var ex__32518__auto__ = e33478;
var statearr_33479_35266 = state_33456;
(statearr_33479_35266[(2)] = ex__32518__auto__);


if(cljs.core.seq((state_33456[(4)]))){
var statearr_33480_35267 = state_33456;
(statearr_33480_35267[(1)] = cljs.core.first((state_33456[(4)])));

} else {
throw ex__32518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35268 = state_33456;
state_33456 = G__35268;
continue;
} else {
return ret_value__32516__auto__;
}
break;
}
});
cljs$core$async$state_machine__32515__auto__ = function(state_33456){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32515__auto____1.call(this,state_33456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32515__auto____0;
cljs$core$async$state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32515__auto____1;
return cljs$core$async$state_machine__32515__auto__;
})()
})();
var state__32719__auto__ = (function (){var statearr_33481 = f__32718__auto__();
(statearr_33481[(6)] = c__32717__auto__);

return statearr_33481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32719__auto__);
}));

return c__32717__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33484 = arguments.length;
switch (G__33484) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_35273 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_35273(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35284 = (function (m,ch,close_QMARK_){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4522__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4519__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_35284(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35285 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_35285(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35286 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_35286(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33489 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33489 = (function (ch,cs,meta33490){
this.ch = ch;
this.cs = cs;
this.meta33490 = meta33490;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33491,meta33490__$1){
var self__ = this;
var _33491__$1 = this;
return (new cljs.core.async.t_cljs$core$async33489(self__.ch,self__.cs,meta33490__$1));
}));

(cljs.core.async.t_cljs$core$async33489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33491){
var self__ = this;
var _33491__$1 = this;
return self__.meta33490;
}));

(cljs.core.async.t_cljs$core$async33489.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33489.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33489.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33489.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33489.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33489.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33489.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33490","meta33490",-1671501259,null)], null);
}));

(cljs.core.async.t_cljs$core$async33489.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33489.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33489");

(cljs.core.async.t_cljs$core$async33489.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async33489");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33489.
 */
cljs.core.async.__GT_t_cljs$core$async33489 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33489(ch__$1,cs__$1,meta33490){
return (new cljs.core.async.t_cljs$core$async33489(ch__$1,cs__$1,meta33490));
});

}

return (new cljs.core.async.t_cljs$core$async33489(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32717__auto___35288 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32718__auto__ = (function (){var switch__32514__auto__ = (function (state_33628){
var state_val_33629 = (state_33628[(1)]);
if((state_val_33629 === (7))){
var inst_33624 = (state_33628[(2)]);
var state_33628__$1 = state_33628;
var statearr_33631_35289 = state_33628__$1;
(statearr_33631_35289[(2)] = inst_33624);

(statearr_33631_35289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (20))){
var inst_33528 = (state_33628[(7)]);
var inst_33540 = cljs.core.first(inst_33528);
var inst_33541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33540,(0),null);
var inst_33542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33540,(1),null);
var state_33628__$1 = (function (){var statearr_33632 = state_33628;
(statearr_33632[(8)] = inst_33541);

return statearr_33632;
})();
if(cljs.core.truth_(inst_33542)){
var statearr_33633_35290 = state_33628__$1;
(statearr_33633_35290[(1)] = (22));

} else {
var statearr_33634_35291 = state_33628__$1;
(statearr_33634_35291[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (27))){
var inst_33571 = (state_33628[(9)]);
var inst_33578 = (state_33628[(10)]);
var inst_33573 = (state_33628[(11)]);
var inst_33496 = (state_33628[(12)]);
var inst_33578__$1 = cljs.core._nth(inst_33571,inst_33573);
var inst_33579 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33578__$1,inst_33496,done);
var state_33628__$1 = (function (){var statearr_33635 = state_33628;
(statearr_33635[(10)] = inst_33578__$1);

return statearr_33635;
})();
if(cljs.core.truth_(inst_33579)){
var statearr_33637_35292 = state_33628__$1;
(statearr_33637_35292[(1)] = (30));

} else {
var statearr_33638_35293 = state_33628__$1;
(statearr_33638_35293[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (1))){
var state_33628__$1 = state_33628;
var statearr_33639_35294 = state_33628__$1;
(statearr_33639_35294[(2)] = null);

(statearr_33639_35294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (24))){
var inst_33528 = (state_33628[(7)]);
var inst_33547 = (state_33628[(2)]);
var inst_33548 = cljs.core.next(inst_33528);
var inst_33506 = inst_33548;
var inst_33507 = null;
var inst_33508 = (0);
var inst_33509 = (0);
var state_33628__$1 = (function (){var statearr_33640 = state_33628;
(statearr_33640[(13)] = inst_33507);

(statearr_33640[(14)] = inst_33506);

(statearr_33640[(15)] = inst_33508);

(statearr_33640[(16)] = inst_33509);

(statearr_33640[(17)] = inst_33547);

return statearr_33640;
})();
var statearr_33641_35297 = state_33628__$1;
(statearr_33641_35297[(2)] = null);

(statearr_33641_35297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (39))){
var state_33628__$1 = state_33628;
var statearr_33645_35301 = state_33628__$1;
(statearr_33645_35301[(2)] = null);

(statearr_33645_35301[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (4))){
var inst_33496 = (state_33628[(12)]);
var inst_33496__$1 = (state_33628[(2)]);
var inst_33497 = (inst_33496__$1 == null);
var state_33628__$1 = (function (){var statearr_33647 = state_33628;
(statearr_33647[(12)] = inst_33496__$1);

return statearr_33647;
})();
if(cljs.core.truth_(inst_33497)){
var statearr_33648_35302 = state_33628__$1;
(statearr_33648_35302[(1)] = (5));

} else {
var statearr_33649_35303 = state_33628__$1;
(statearr_33649_35303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (15))){
var inst_33507 = (state_33628[(13)]);
var inst_33506 = (state_33628[(14)]);
var inst_33508 = (state_33628[(15)]);
var inst_33509 = (state_33628[(16)]);
var inst_33524 = (state_33628[(2)]);
var inst_33525 = (inst_33509 + (1));
var tmp33642 = inst_33507;
var tmp33643 = inst_33506;
var tmp33644 = inst_33508;
var inst_33506__$1 = tmp33643;
var inst_33507__$1 = tmp33642;
var inst_33508__$1 = tmp33644;
var inst_33509__$1 = inst_33525;
var state_33628__$1 = (function (){var statearr_33650 = state_33628;
(statearr_33650[(13)] = inst_33507__$1);

(statearr_33650[(18)] = inst_33524);

(statearr_33650[(14)] = inst_33506__$1);

(statearr_33650[(15)] = inst_33508__$1);

(statearr_33650[(16)] = inst_33509__$1);

return statearr_33650;
})();
var statearr_33651_35305 = state_33628__$1;
(statearr_33651_35305[(2)] = null);

(statearr_33651_35305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (21))){
var inst_33551 = (state_33628[(2)]);
var state_33628__$1 = state_33628;
var statearr_33655_35306 = state_33628__$1;
(statearr_33655_35306[(2)] = inst_33551);

(statearr_33655_35306[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (31))){
var inst_33578 = (state_33628[(10)]);
var inst_33582 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33578);
var state_33628__$1 = state_33628;
var statearr_33656_35308 = state_33628__$1;
(statearr_33656_35308[(2)] = inst_33582);

(statearr_33656_35308[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (32))){
var inst_33570 = (state_33628[(19)]);
var inst_33571 = (state_33628[(9)]);
var inst_33573 = (state_33628[(11)]);
var inst_33572 = (state_33628[(20)]);
var inst_33584 = (state_33628[(2)]);
var inst_33585 = (inst_33573 + (1));
var tmp33652 = inst_33570;
var tmp33653 = inst_33571;
var tmp33654 = inst_33572;
var inst_33570__$1 = tmp33652;
var inst_33571__$1 = tmp33653;
var inst_33572__$1 = tmp33654;
var inst_33573__$1 = inst_33585;
var state_33628__$1 = (function (){var statearr_33658 = state_33628;
(statearr_33658[(19)] = inst_33570__$1);

(statearr_33658[(9)] = inst_33571__$1);

(statearr_33658[(11)] = inst_33573__$1);

(statearr_33658[(20)] = inst_33572__$1);

(statearr_33658[(21)] = inst_33584);

return statearr_33658;
})();
var statearr_33659_35312 = state_33628__$1;
(statearr_33659_35312[(2)] = null);

(statearr_33659_35312[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (40))){
var inst_33597 = (state_33628[(22)]);
var inst_33601 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33597);
var state_33628__$1 = state_33628;
var statearr_33660_35313 = state_33628__$1;
(statearr_33660_35313[(2)] = inst_33601);

(statearr_33660_35313[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (33))){
var inst_33588 = (state_33628[(23)]);
var inst_33590 = cljs.core.chunked_seq_QMARK_(inst_33588);
var state_33628__$1 = state_33628;
if(inst_33590){
var statearr_33661_35314 = state_33628__$1;
(statearr_33661_35314[(1)] = (36));

} else {
var statearr_33662_35315 = state_33628__$1;
(statearr_33662_35315[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (13))){
var inst_33518 = (state_33628[(24)]);
var inst_33521 = cljs.core.async.close_BANG_(inst_33518);
var state_33628__$1 = state_33628;
var statearr_33663_35316 = state_33628__$1;
(statearr_33663_35316[(2)] = inst_33521);

(statearr_33663_35316[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (22))){
var inst_33541 = (state_33628[(8)]);
var inst_33544 = cljs.core.async.close_BANG_(inst_33541);
var state_33628__$1 = state_33628;
var statearr_33665_35317 = state_33628__$1;
(statearr_33665_35317[(2)] = inst_33544);

(statearr_33665_35317[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (36))){
var inst_33588 = (state_33628[(23)]);
var inst_33592 = cljs.core.chunk_first(inst_33588);
var inst_33593 = cljs.core.chunk_rest(inst_33588);
var inst_33594 = cljs.core.count(inst_33592);
var inst_33570 = inst_33593;
var inst_33571 = inst_33592;
var inst_33572 = inst_33594;
var inst_33573 = (0);
var state_33628__$1 = (function (){var statearr_33666 = state_33628;
(statearr_33666[(19)] = inst_33570);

(statearr_33666[(9)] = inst_33571);

(statearr_33666[(11)] = inst_33573);

(statearr_33666[(20)] = inst_33572);

return statearr_33666;
})();
var statearr_33667_35318 = state_33628__$1;
(statearr_33667_35318[(2)] = null);

(statearr_33667_35318[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (41))){
var inst_33588 = (state_33628[(23)]);
var inst_33603 = (state_33628[(2)]);
var inst_33604 = cljs.core.next(inst_33588);
var inst_33570 = inst_33604;
var inst_33571 = null;
var inst_33572 = (0);
var inst_33573 = (0);
var state_33628__$1 = (function (){var statearr_33668 = state_33628;
(statearr_33668[(19)] = inst_33570);

(statearr_33668[(9)] = inst_33571);

(statearr_33668[(11)] = inst_33573);

(statearr_33668[(20)] = inst_33572);

(statearr_33668[(25)] = inst_33603);

return statearr_33668;
})();
var statearr_33669_35320 = state_33628__$1;
(statearr_33669_35320[(2)] = null);

(statearr_33669_35320[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (43))){
var state_33628__$1 = state_33628;
var statearr_33670_35322 = state_33628__$1;
(statearr_33670_35322[(2)] = null);

(statearr_33670_35322[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (29))){
var inst_33612 = (state_33628[(2)]);
var state_33628__$1 = state_33628;
var statearr_33671_35324 = state_33628__$1;
(statearr_33671_35324[(2)] = inst_33612);

(statearr_33671_35324[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (44))){
var inst_33621 = (state_33628[(2)]);
var state_33628__$1 = (function (){var statearr_33672 = state_33628;
(statearr_33672[(26)] = inst_33621);

return statearr_33672;
})();
var statearr_33673_35328 = state_33628__$1;
(statearr_33673_35328[(2)] = null);

(statearr_33673_35328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (6))){
var inst_33562 = (state_33628[(27)]);
var inst_33561 = cljs.core.deref(cs);
var inst_33562__$1 = cljs.core.keys(inst_33561);
var inst_33563 = cljs.core.count(inst_33562__$1);
var inst_33564 = cljs.core.reset_BANG_(dctr,inst_33563);
var inst_33569 = cljs.core.seq(inst_33562__$1);
var inst_33570 = inst_33569;
var inst_33571 = null;
var inst_33572 = (0);
var inst_33573 = (0);
var state_33628__$1 = (function (){var statearr_33675 = state_33628;
(statearr_33675[(19)] = inst_33570);

(statearr_33675[(9)] = inst_33571);

(statearr_33675[(11)] = inst_33573);

(statearr_33675[(20)] = inst_33572);

(statearr_33675[(28)] = inst_33564);

(statearr_33675[(27)] = inst_33562__$1);

return statearr_33675;
})();
var statearr_33676_35331 = state_33628__$1;
(statearr_33676_35331[(2)] = null);

(statearr_33676_35331[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (28))){
var inst_33570 = (state_33628[(19)]);
var inst_33588 = (state_33628[(23)]);
var inst_33588__$1 = cljs.core.seq(inst_33570);
var state_33628__$1 = (function (){var statearr_33677 = state_33628;
(statearr_33677[(23)] = inst_33588__$1);

return statearr_33677;
})();
if(inst_33588__$1){
var statearr_33678_35334 = state_33628__$1;
(statearr_33678_35334[(1)] = (33));

} else {
var statearr_33679_35335 = state_33628__$1;
(statearr_33679_35335[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (25))){
var inst_33573 = (state_33628[(11)]);
var inst_33572 = (state_33628[(20)]);
var inst_33575 = (inst_33573 < inst_33572);
var inst_33576 = inst_33575;
var state_33628__$1 = state_33628;
if(cljs.core.truth_(inst_33576)){
var statearr_33680_35336 = state_33628__$1;
(statearr_33680_35336[(1)] = (27));

} else {
var statearr_33681_35337 = state_33628__$1;
(statearr_33681_35337[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (34))){
var state_33628__$1 = state_33628;
var statearr_33682_35338 = state_33628__$1;
(statearr_33682_35338[(2)] = null);

(statearr_33682_35338[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (17))){
var state_33628__$1 = state_33628;
var statearr_33684_35342 = state_33628__$1;
(statearr_33684_35342[(2)] = null);

(statearr_33684_35342[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (3))){
var inst_33626 = (state_33628[(2)]);
var state_33628__$1 = state_33628;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33628__$1,inst_33626);
} else {
if((state_val_33629 === (12))){
var inst_33556 = (state_33628[(2)]);
var state_33628__$1 = state_33628;
var statearr_33685_35347 = state_33628__$1;
(statearr_33685_35347[(2)] = inst_33556);

(statearr_33685_35347[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (2))){
var state_33628__$1 = state_33628;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33628__$1,(4),ch);
} else {
if((state_val_33629 === (23))){
var state_33628__$1 = state_33628;
var statearr_33686_35361 = state_33628__$1;
(statearr_33686_35361[(2)] = null);

(statearr_33686_35361[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (35))){
var inst_33610 = (state_33628[(2)]);
var state_33628__$1 = state_33628;
var statearr_33687_35362 = state_33628__$1;
(statearr_33687_35362[(2)] = inst_33610);

(statearr_33687_35362[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (19))){
var inst_33528 = (state_33628[(7)]);
var inst_33532 = cljs.core.chunk_first(inst_33528);
var inst_33533 = cljs.core.chunk_rest(inst_33528);
var inst_33534 = cljs.core.count(inst_33532);
var inst_33506 = inst_33533;
var inst_33507 = inst_33532;
var inst_33508 = inst_33534;
var inst_33509 = (0);
var state_33628__$1 = (function (){var statearr_33688 = state_33628;
(statearr_33688[(13)] = inst_33507);

(statearr_33688[(14)] = inst_33506);

(statearr_33688[(15)] = inst_33508);

(statearr_33688[(16)] = inst_33509);

return statearr_33688;
})();
var statearr_33690_35364 = state_33628__$1;
(statearr_33690_35364[(2)] = null);

(statearr_33690_35364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (11))){
var inst_33506 = (state_33628[(14)]);
var inst_33528 = (state_33628[(7)]);
var inst_33528__$1 = cljs.core.seq(inst_33506);
var state_33628__$1 = (function (){var statearr_33691 = state_33628;
(statearr_33691[(7)] = inst_33528__$1);

return statearr_33691;
})();
if(inst_33528__$1){
var statearr_33692_35365 = state_33628__$1;
(statearr_33692_35365[(1)] = (16));

} else {
var statearr_33693_35366 = state_33628__$1;
(statearr_33693_35366[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (9))){
var inst_33558 = (state_33628[(2)]);
var state_33628__$1 = state_33628;
var statearr_33694_35376 = state_33628__$1;
(statearr_33694_35376[(2)] = inst_33558);

(statearr_33694_35376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (5))){
var inst_33504 = cljs.core.deref(cs);
var inst_33505 = cljs.core.seq(inst_33504);
var inst_33506 = inst_33505;
var inst_33507 = null;
var inst_33508 = (0);
var inst_33509 = (0);
var state_33628__$1 = (function (){var statearr_33695 = state_33628;
(statearr_33695[(13)] = inst_33507);

(statearr_33695[(14)] = inst_33506);

(statearr_33695[(15)] = inst_33508);

(statearr_33695[(16)] = inst_33509);

return statearr_33695;
})();
var statearr_33696_35377 = state_33628__$1;
(statearr_33696_35377[(2)] = null);

(statearr_33696_35377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (14))){
var state_33628__$1 = state_33628;
var statearr_33698_35378 = state_33628__$1;
(statearr_33698_35378[(2)] = null);

(statearr_33698_35378[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (45))){
var inst_33618 = (state_33628[(2)]);
var state_33628__$1 = state_33628;
var statearr_33699_35381 = state_33628__$1;
(statearr_33699_35381[(2)] = inst_33618);

(statearr_33699_35381[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (26))){
var inst_33562 = (state_33628[(27)]);
var inst_33614 = (state_33628[(2)]);
var inst_33615 = cljs.core.seq(inst_33562);
var state_33628__$1 = (function (){var statearr_33700 = state_33628;
(statearr_33700[(29)] = inst_33614);

return statearr_33700;
})();
if(inst_33615){
var statearr_33701_35384 = state_33628__$1;
(statearr_33701_35384[(1)] = (42));

} else {
var statearr_33702_35385 = state_33628__$1;
(statearr_33702_35385[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (16))){
var inst_33528 = (state_33628[(7)]);
var inst_33530 = cljs.core.chunked_seq_QMARK_(inst_33528);
var state_33628__$1 = state_33628;
if(inst_33530){
var statearr_33703_35386 = state_33628__$1;
(statearr_33703_35386[(1)] = (19));

} else {
var statearr_33704_35387 = state_33628__$1;
(statearr_33704_35387[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (38))){
var inst_33607 = (state_33628[(2)]);
var state_33628__$1 = state_33628;
var statearr_33705_35388 = state_33628__$1;
(statearr_33705_35388[(2)] = inst_33607);

(statearr_33705_35388[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (30))){
var state_33628__$1 = state_33628;
var statearr_33706_35389 = state_33628__$1;
(statearr_33706_35389[(2)] = null);

(statearr_33706_35389[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (10))){
var inst_33507 = (state_33628[(13)]);
var inst_33509 = (state_33628[(16)]);
var inst_33517 = cljs.core._nth(inst_33507,inst_33509);
var inst_33518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33517,(0),null);
var inst_33519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33517,(1),null);
var state_33628__$1 = (function (){var statearr_33708 = state_33628;
(statearr_33708[(24)] = inst_33518);

return statearr_33708;
})();
if(cljs.core.truth_(inst_33519)){
var statearr_33709_35403 = state_33628__$1;
(statearr_33709_35403[(1)] = (13));

} else {
var statearr_33710_35404 = state_33628__$1;
(statearr_33710_35404[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (18))){
var inst_33554 = (state_33628[(2)]);
var state_33628__$1 = state_33628;
var statearr_33711_35405 = state_33628__$1;
(statearr_33711_35405[(2)] = inst_33554);

(statearr_33711_35405[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (42))){
var state_33628__$1 = state_33628;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33628__$1,(45),dchan);
} else {
if((state_val_33629 === (37))){
var inst_33588 = (state_33628[(23)]);
var inst_33496 = (state_33628[(12)]);
var inst_33597 = (state_33628[(22)]);
var inst_33597__$1 = cljs.core.first(inst_33588);
var inst_33598 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33597__$1,inst_33496,done);
var state_33628__$1 = (function (){var statearr_33712 = state_33628;
(statearr_33712[(22)] = inst_33597__$1);

return statearr_33712;
})();
if(cljs.core.truth_(inst_33598)){
var statearr_33713_35407 = state_33628__$1;
(statearr_33713_35407[(1)] = (39));

} else {
var statearr_33714_35408 = state_33628__$1;
(statearr_33714_35408[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (8))){
var inst_33508 = (state_33628[(15)]);
var inst_33509 = (state_33628[(16)]);
var inst_33511 = (inst_33509 < inst_33508);
var inst_33512 = inst_33511;
var state_33628__$1 = state_33628;
if(cljs.core.truth_(inst_33512)){
var statearr_33716_35409 = state_33628__$1;
(statearr_33716_35409[(1)] = (10));

} else {
var statearr_33717_35410 = state_33628__$1;
(statearr_33717_35410[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__32515__auto__ = null;
var cljs$core$async$mult_$_state_machine__32515__auto____0 = (function (){
var statearr_33718 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33718[(0)] = cljs$core$async$mult_$_state_machine__32515__auto__);

(statearr_33718[(1)] = (1));

return statearr_33718;
});
var cljs$core$async$mult_$_state_machine__32515__auto____1 = (function (state_33628){
while(true){
var ret_value__32516__auto__ = (function (){try{while(true){
var result__32517__auto__ = switch__32514__auto__(state_33628);
if(cljs.core.keyword_identical_QMARK_(result__32517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32517__auto__;
}
break;
}
}catch (e33719){var ex__32518__auto__ = e33719;
var statearr_33720_35411 = state_33628;
(statearr_33720_35411[(2)] = ex__32518__auto__);


if(cljs.core.seq((state_33628[(4)]))){
var statearr_33721_35412 = state_33628;
(statearr_33721_35412[(1)] = cljs.core.first((state_33628[(4)])));

} else {
throw ex__32518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35415 = state_33628;
state_33628 = G__35415;
continue;
} else {
return ret_value__32516__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32515__auto__ = function(state_33628){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32515__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32515__auto____1.call(this,state_33628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32515__auto____0;
cljs$core$async$mult_$_state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32515__auto____1;
return cljs$core$async$mult_$_state_machine__32515__auto__;
})()
})();
var state__32719__auto__ = (function (){var statearr_33722 = f__32718__auto__();
(statearr_33722[(6)] = c__32717__auto___35288);

return statearr_33722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32719__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33725 = arguments.length;
switch (G__33725) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_35428 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_35428(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35430 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_35430(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35435 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35435(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35436 = (function (m,state_map){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4522__auto__.call(null,m,state_map));
} else {
var m__4519__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4519__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_35436(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35437 = (function (m,mode){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4522__auto__.call(null,m,mode));
} else {
var m__4519__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4519__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35437(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___35445 = arguments.length;
var i__4830__auto___35446 = (0);
while(true){
if((i__4830__auto___35446 < len__4829__auto___35445)){
args__4835__auto__.push((arguments[i__4830__auto___35446]));

var G__35447 = (i__4830__auto___35446 + (1));
i__4830__auto___35446 = G__35447;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33735){
var map__33736 = p__33735;
var map__33736__$1 = cljs.core.__destructure_map(map__33736);
var opts = map__33736__$1;
var statearr_33737_35455 = state;
(statearr_33737_35455[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33739_35456 = state;
(statearr_33739_35456[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_33740_35457 = state;
(statearr_33740_35457[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33731){
var G__33732 = cljs.core.first(seq33731);
var seq33731__$1 = cljs.core.next(seq33731);
var G__33733 = cljs.core.first(seq33731__$1);
var seq33731__$2 = cljs.core.next(seq33731__$1);
var G__33734 = cljs.core.first(seq33731__$2);
var seq33731__$3 = cljs.core.next(seq33731__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33732,G__33733,G__33734,seq33731__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33744 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33744 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33745){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33745 = meta33745;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33746,meta33745__$1){
var self__ = this;
var _33746__$1 = this;
return (new cljs.core.async.t_cljs$core$async33744(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33745__$1));
}));

(cljs.core.async.t_cljs$core$async33744.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33746){
var self__ = this;
var _33746__$1 = this;
return self__.meta33745;
}));

(cljs.core.async.t_cljs$core$async33744.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33744.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33744.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33744.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33744.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33744.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33744.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33744.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33744.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33745","meta33745",1309077386,null)], null);
}));

(cljs.core.async.t_cljs$core$async33744.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33744.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33744");

(cljs.core.async.t_cljs$core$async33744.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async33744");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33744.
 */
cljs.core.async.__GT_t_cljs$core$async33744 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33744(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33745){
return (new cljs.core.async.t_cljs$core$async33744(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33745));
});

}

return (new cljs.core.async.t_cljs$core$async33744(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32717__auto___35465 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32718__auto__ = (function (){var switch__32514__auto__ = (function (state_33818){
var state_val_33819 = (state_33818[(1)]);
if((state_val_33819 === (7))){
var inst_33778 = (state_33818[(2)]);
var state_33818__$1 = state_33818;
if(cljs.core.truth_(inst_33778)){
var statearr_33820_35467 = state_33818__$1;
(statearr_33820_35467[(1)] = (8));

} else {
var statearr_33821_35468 = state_33818__$1;
(statearr_33821_35468[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (20))){
var inst_33769 = (state_33818[(7)]);
var state_33818__$1 = state_33818;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33818__$1,(23),out,inst_33769);
} else {
if((state_val_33819 === (1))){
var inst_33752 = calc_state();
var inst_33753 = cljs.core.__destructure_map(inst_33752);
var inst_33754 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33753,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33755 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33753,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33756 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33753,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33757 = inst_33752;
var state_33818__$1 = (function (){var statearr_33822 = state_33818;
(statearr_33822[(8)] = inst_33754);

(statearr_33822[(9)] = inst_33756);

(statearr_33822[(10)] = inst_33757);

(statearr_33822[(11)] = inst_33755);

return statearr_33822;
})();
var statearr_33823_35473 = state_33818__$1;
(statearr_33823_35473[(2)] = null);

(statearr_33823_35473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (24))){
var inst_33760 = (state_33818[(12)]);
var inst_33757 = inst_33760;
var state_33818__$1 = (function (){var statearr_33824 = state_33818;
(statearr_33824[(10)] = inst_33757);

return statearr_33824;
})();
var statearr_33825_35474 = state_33818__$1;
(statearr_33825_35474[(2)] = null);

(statearr_33825_35474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (4))){
var inst_33773 = (state_33818[(13)]);
var inst_33769 = (state_33818[(7)]);
var inst_33768 = (state_33818[(2)]);
var inst_33769__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33768,(0),null);
var inst_33770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33768,(1),null);
var inst_33773__$1 = (inst_33769__$1 == null);
var state_33818__$1 = (function (){var statearr_33826 = state_33818;
(statearr_33826[(14)] = inst_33770);

(statearr_33826[(13)] = inst_33773__$1);

(statearr_33826[(7)] = inst_33769__$1);

return statearr_33826;
})();
if(cljs.core.truth_(inst_33773__$1)){
var statearr_33827_35475 = state_33818__$1;
(statearr_33827_35475[(1)] = (5));

} else {
var statearr_33828_35476 = state_33818__$1;
(statearr_33828_35476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (15))){
var inst_33792 = (state_33818[(15)]);
var inst_33761 = (state_33818[(16)]);
var inst_33792__$1 = cljs.core.empty_QMARK_(inst_33761);
var state_33818__$1 = (function (){var statearr_33832 = state_33818;
(statearr_33832[(15)] = inst_33792__$1);

return statearr_33832;
})();
if(inst_33792__$1){
var statearr_33833_35477 = state_33818__$1;
(statearr_33833_35477[(1)] = (17));

} else {
var statearr_33834_35478 = state_33818__$1;
(statearr_33834_35478[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (21))){
var inst_33760 = (state_33818[(12)]);
var inst_33757 = inst_33760;
var state_33818__$1 = (function (){var statearr_33837 = state_33818;
(statearr_33837[(10)] = inst_33757);

return statearr_33837;
})();
var statearr_33839_35479 = state_33818__$1;
(statearr_33839_35479[(2)] = null);

(statearr_33839_35479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (13))){
var inst_33785 = (state_33818[(2)]);
var inst_33786 = calc_state();
var inst_33757 = inst_33786;
var state_33818__$1 = (function (){var statearr_33843 = state_33818;
(statearr_33843[(10)] = inst_33757);

(statearr_33843[(17)] = inst_33785);

return statearr_33843;
})();
var statearr_33844_35480 = state_33818__$1;
(statearr_33844_35480[(2)] = null);

(statearr_33844_35480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (22))){
var inst_33812 = (state_33818[(2)]);
var state_33818__$1 = state_33818;
var statearr_33845_35481 = state_33818__$1;
(statearr_33845_35481[(2)] = inst_33812);

(statearr_33845_35481[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (6))){
var inst_33770 = (state_33818[(14)]);
var inst_33776 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33770,change);
var state_33818__$1 = state_33818;
var statearr_33846_35482 = state_33818__$1;
(statearr_33846_35482[(2)] = inst_33776);

(statearr_33846_35482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (25))){
var state_33818__$1 = state_33818;
var statearr_33847_35483 = state_33818__$1;
(statearr_33847_35483[(2)] = null);

(statearr_33847_35483[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (17))){
var inst_33770 = (state_33818[(14)]);
var inst_33762 = (state_33818[(18)]);
var inst_33794 = (inst_33762.cljs$core$IFn$_invoke$arity$1 ? inst_33762.cljs$core$IFn$_invoke$arity$1(inst_33770) : inst_33762.call(null,inst_33770));
var inst_33795 = cljs.core.not(inst_33794);
var state_33818__$1 = state_33818;
var statearr_33849_35488 = state_33818__$1;
(statearr_33849_35488[(2)] = inst_33795);

(statearr_33849_35488[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (3))){
var inst_33816 = (state_33818[(2)]);
var state_33818__$1 = state_33818;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33818__$1,inst_33816);
} else {
if((state_val_33819 === (12))){
var state_33818__$1 = state_33818;
var statearr_33854_35489 = state_33818__$1;
(statearr_33854_35489[(2)] = null);

(statearr_33854_35489[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (2))){
var inst_33757 = (state_33818[(10)]);
var inst_33760 = (state_33818[(12)]);
var inst_33760__$1 = cljs.core.__destructure_map(inst_33757);
var inst_33761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33760__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33760__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33763 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33760__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33818__$1 = (function (){var statearr_33858 = state_33818;
(statearr_33858[(18)] = inst_33762);

(statearr_33858[(12)] = inst_33760__$1);

(statearr_33858[(16)] = inst_33761);

return statearr_33858;
})();
return cljs.core.async.ioc_alts_BANG_(state_33818__$1,(4),inst_33763);
} else {
if((state_val_33819 === (23))){
var inst_33803 = (state_33818[(2)]);
var state_33818__$1 = state_33818;
if(cljs.core.truth_(inst_33803)){
var statearr_33860_35490 = state_33818__$1;
(statearr_33860_35490[(1)] = (24));

} else {
var statearr_33863_35491 = state_33818__$1;
(statearr_33863_35491[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (19))){
var inst_33798 = (state_33818[(2)]);
var state_33818__$1 = state_33818;
var statearr_33865_35492 = state_33818__$1;
(statearr_33865_35492[(2)] = inst_33798);

(statearr_33865_35492[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (11))){
var inst_33770 = (state_33818[(14)]);
var inst_33782 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33770);
var state_33818__$1 = state_33818;
var statearr_33867_35495 = state_33818__$1;
(statearr_33867_35495[(2)] = inst_33782);

(statearr_33867_35495[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (9))){
var inst_33770 = (state_33818[(14)]);
var inst_33789 = (state_33818[(19)]);
var inst_33761 = (state_33818[(16)]);
var inst_33789__$1 = (inst_33761.cljs$core$IFn$_invoke$arity$1 ? inst_33761.cljs$core$IFn$_invoke$arity$1(inst_33770) : inst_33761.call(null,inst_33770));
var state_33818__$1 = (function (){var statearr_33871 = state_33818;
(statearr_33871[(19)] = inst_33789__$1);

return statearr_33871;
})();
if(cljs.core.truth_(inst_33789__$1)){
var statearr_33873_35497 = state_33818__$1;
(statearr_33873_35497[(1)] = (14));

} else {
var statearr_33874_35498 = state_33818__$1;
(statearr_33874_35498[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (5))){
var inst_33773 = (state_33818[(13)]);
var state_33818__$1 = state_33818;
var statearr_33878_35499 = state_33818__$1;
(statearr_33878_35499[(2)] = inst_33773);

(statearr_33878_35499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (14))){
var inst_33789 = (state_33818[(19)]);
var state_33818__$1 = state_33818;
var statearr_33879_35500 = state_33818__$1;
(statearr_33879_35500[(2)] = inst_33789);

(statearr_33879_35500[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (26))){
var inst_33808 = (state_33818[(2)]);
var state_33818__$1 = state_33818;
var statearr_33881_35501 = state_33818__$1;
(statearr_33881_35501[(2)] = inst_33808);

(statearr_33881_35501[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (16))){
var inst_33800 = (state_33818[(2)]);
var state_33818__$1 = state_33818;
if(cljs.core.truth_(inst_33800)){
var statearr_33885_35502 = state_33818__$1;
(statearr_33885_35502[(1)] = (20));

} else {
var statearr_33887_35503 = state_33818__$1;
(statearr_33887_35503[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (10))){
var inst_33814 = (state_33818[(2)]);
var state_33818__$1 = state_33818;
var statearr_33890_35504 = state_33818__$1;
(statearr_33890_35504[(2)] = inst_33814);

(statearr_33890_35504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (18))){
var inst_33792 = (state_33818[(15)]);
var state_33818__$1 = state_33818;
var statearr_33892_35511 = state_33818__$1;
(statearr_33892_35511[(2)] = inst_33792);

(statearr_33892_35511[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (8))){
var inst_33769 = (state_33818[(7)]);
var inst_33780 = (inst_33769 == null);
var state_33818__$1 = state_33818;
if(cljs.core.truth_(inst_33780)){
var statearr_33894_35512 = state_33818__$1;
(statearr_33894_35512[(1)] = (11));

} else {
var statearr_33895_35513 = state_33818__$1;
(statearr_33895_35513[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__32515__auto__ = null;
var cljs$core$async$mix_$_state_machine__32515__auto____0 = (function (){
var statearr_33900 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33900[(0)] = cljs$core$async$mix_$_state_machine__32515__auto__);

(statearr_33900[(1)] = (1));

return statearr_33900;
});
var cljs$core$async$mix_$_state_machine__32515__auto____1 = (function (state_33818){
while(true){
var ret_value__32516__auto__ = (function (){try{while(true){
var result__32517__auto__ = switch__32514__auto__(state_33818);
if(cljs.core.keyword_identical_QMARK_(result__32517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32517__auto__;
}
break;
}
}catch (e33901){var ex__32518__auto__ = e33901;
var statearr_33903_35519 = state_33818;
(statearr_33903_35519[(2)] = ex__32518__auto__);


if(cljs.core.seq((state_33818[(4)]))){
var statearr_33906_35520 = state_33818;
(statearr_33906_35520[(1)] = cljs.core.first((state_33818[(4)])));

} else {
throw ex__32518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35521 = state_33818;
state_33818 = G__35521;
continue;
} else {
return ret_value__32516__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32515__auto__ = function(state_33818){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32515__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32515__auto____1.call(this,state_33818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32515__auto____0;
cljs$core$async$mix_$_state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32515__auto____1;
return cljs$core$async$mix_$_state_machine__32515__auto__;
})()
})();
var state__32719__auto__ = (function (){var statearr_33908 = f__32718__auto__();
(statearr_33908[(6)] = c__32717__auto___35465);

return statearr_33908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32719__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_35523 = (function (p,v,ch,close_QMARK_){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4522__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4519__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35523(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35527 = (function (p,v,ch){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4522__auto__.call(null,p,v,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4519__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35527(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35528 = (function() {
var G__35529 = null;
var G__35529__1 = (function (p){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4522__auto__.call(null,p));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4519__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35529__2 = (function (p,v){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4522__auto__.call(null,p,v));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4519__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35529 = function(p,v){
switch(arguments.length){
case 1:
return G__35529__1.call(this,p);
case 2:
return G__35529__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35529.cljs$core$IFn$_invoke$arity$1 = G__35529__1;
G__35529.cljs$core$IFn$_invoke$arity$2 = G__35529__2;
return G__35529;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33947 = arguments.length;
switch (G__33947) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35528(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35528(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33968 = arguments.length;
switch (G__33968) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33961_SHARP_){
if(cljs.core.truth_((p1__33961_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33961_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33961_SHARP_.call(null,topic)))){
return p1__33961_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33961_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33977 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33977 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33978){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33978 = meta33978;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33979,meta33978__$1){
var self__ = this;
var _33979__$1 = this;
return (new cljs.core.async.t_cljs$core$async33977(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33978__$1));
}));

(cljs.core.async.t_cljs$core$async33977.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33979){
var self__ = this;
var _33979__$1 = this;
return self__.meta33978;
}));

(cljs.core.async.t_cljs$core$async33977.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33977.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33977.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33977.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33977.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async33977.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33977.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33977.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33978","meta33978",-21656465,null)], null);
}));

(cljs.core.async.t_cljs$core$async33977.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33977.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33977");

(cljs.core.async.t_cljs$core$async33977.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async33977");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33977.
 */
cljs.core.async.__GT_t_cljs$core$async33977 = (function cljs$core$async$__GT_t_cljs$core$async33977(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33978){
return (new cljs.core.async.t_cljs$core$async33977(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33978));
});

}

return (new cljs.core.async.t_cljs$core$async33977(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32717__auto___35553 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32718__auto__ = (function (){var switch__32514__auto__ = (function (state_34093){
var state_val_34094 = (state_34093[(1)]);
if((state_val_34094 === (7))){
var inst_34088 = (state_34093[(2)]);
var state_34093__$1 = state_34093;
var statearr_34102_35554 = state_34093__$1;
(statearr_34102_35554[(2)] = inst_34088);

(statearr_34102_35554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34094 === (20))){
var state_34093__$1 = state_34093;
var statearr_34104_35560 = state_34093__$1;
(statearr_34104_35560[(2)] = null);

(statearr_34104_35560[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34094 === (1))){
var state_34093__$1 = state_34093;
var statearr_34108_35562 = state_34093__$1;
(statearr_34108_35562[(2)] = null);

(statearr_34108_35562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34094 === (24))){
var inst_34068 = (state_34093[(7)]);
var inst_34080 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34068);
var state_34093__$1 = state_34093;
var statearr_34110_35563 = state_34093__$1;
(statearr_34110_35563[(2)] = inst_34080);

(statearr_34110_35563[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34094 === (4))){
var inst_34012 = (state_34093[(8)]);
var inst_34012__$1 = (state_34093[(2)]);
var inst_34013 = (inst_34012__$1 == null);
var state_34093__$1 = (function (){var statearr_34114 = state_34093;
(statearr_34114[(8)] = inst_34012__$1);

return statearr_34114;
})();
if(cljs.core.truth_(inst_34013)){
var statearr_34117_35564 = state_34093__$1;
(statearr_34117_35564[(1)] = (5));

} else {
var statearr_34118_35565 = state_34093__$1;
(statearr_34118_35565[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34094 === (15))){
var inst_34062 = (state_34093[(2)]);
var state_34093__$1 = state_34093;
var statearr_34123_35570 = state_34093__$1;
(statearr_34123_35570[(2)] = inst_34062);

(statearr_34123_35570[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34094 === (21))){
var inst_34085 = (state_34093[(2)]);
var state_34093__$1 = (function (){var statearr_34125 = state_34093;
(statearr_34125[(9)] = inst_34085);

return statearr_34125;
})();
var statearr_34126_35571 = state_34093__$1;
(statearr_34126_35571[(2)] = null);

(statearr_34126_35571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34094 === (13))){
var inst_34040 = (state_34093[(10)]);
var inst_34044 = cljs.core.chunked_seq_QMARK_(inst_34040);
var state_34093__$1 = state_34093;
if(inst_34044){
var statearr_34130_35572 = state_34093__$1;
(statearr_34130_35572[(1)] = (16));

} else {
var statearr_34131_35573 = state_34093__$1;
(statearr_34131_35573[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34094 === (22))){
var inst_34076 = (state_34093[(2)]);
var state_34093__$1 = state_34093;
if(cljs.core.truth_(inst_34076)){
var statearr_34133_35575 = state_34093__$1;
(statearr_34133_35575[(1)] = (23));

} else {
var statearr_34134_35576 = state_34093__$1;
(statearr_34134_35576[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34094 === (6))){
var inst_34012 = (state_34093[(8)]);
var inst_34068 = (state_34093[(7)]);
var inst_34070 = (state_34093[(11)]);
var inst_34068__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34012) : topic_fn.call(null,inst_34012));
var inst_34069 = cljs.core.deref(mults);
var inst_34070__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34069,inst_34068__$1);
var state_34093__$1 = (function (){var statearr_34138 = state_34093;
(statearr_34138[(7)] = inst_34068__$1);

(statearr_34138[(11)] = inst_34070__$1);

return statearr_34138;
})();
if(cljs.core.truth_(inst_34070__$1)){
var statearr_34140_35577 = state_34093__$1;
(statearr_34140_35577[(1)] = (19));

} else {
var statearr_34141_35578 = state_34093__$1;
(statearr_34141_35578[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34094 === (25))){
var inst_34082 = (state_34093[(2)]);
var state_34093__$1 = state_34093;
var statearr_34142_35580 = state_34093__$1;
(statearr_34142_35580[(2)] = inst_34082);

(statearr_34142_35580[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34094 === (17))){
var inst_34040 = (state_34093[(10)]);
var inst_34052 = cljs.core.first(inst_34040);
var inst_34053 = cljs.core.async.muxch_STAR_(inst_34052);
var inst_34054 = cljs.core.async.close_BANG_(inst_34053);
var inst_34055 = cljs.core.next(inst_34040);
var inst_34024 = inst_34055;
var inst_34025 = null;
var inst_34026 = (0);
var inst_34027 = (0);
var state_34093__$1 = (function (){var statearr_34146 = state_34093;
(statearr_34146[(12)] = inst_34024);

(statearr_34146[(13)] = inst_34054);

(statearr_34146[(14)] = inst_34027);

(statearr_34146[(15)] = inst_34025);

(statearr_34146[(16)] = inst_34026);

return statearr_34146;
})();
var statearr_34149_35586 = state_34093__$1;
(statearr_34149_35586[(2)] = null);

(statearr_34149_35586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34094 === (3))){
var inst_34090 = (state_34093[(2)]);
var state_34093__$1 = state_34093;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34093__$1,inst_34090);
} else {
if((state_val_34094 === (12))){
var inst_34064 = (state_34093[(2)]);
var state_34093__$1 = state_34093;
var statearr_34151_35587 = state_34093__$1;
(statearr_34151_35587[(2)] = inst_34064);

(statearr_34151_35587[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34094 === (2))){
var state_34093__$1 = state_34093;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34093__$1,(4),ch);
} else {
if((state_val_34094 === (23))){
var state_34093__$1 = state_34093;
var statearr_34152_35595 = state_34093__$1;
(statearr_34152_35595[(2)] = null);

(statearr_34152_35595[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34094 === (19))){
var inst_34012 = (state_34093[(8)]);
var inst_34070 = (state_34093[(11)]);
var inst_34074 = cljs.core.async.muxch_STAR_(inst_34070);
var state_34093__$1 = state_34093;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34093__$1,(22),inst_34074,inst_34012);
} else {
if((state_val_34094 === (11))){
var inst_34024 = (state_34093[(12)]);
var inst_34040 = (state_34093[(10)]);
var inst_34040__$1 = cljs.core.seq(inst_34024);
var state_34093__$1 = (function (){var statearr_34153 = state_34093;
(statearr_34153[(10)] = inst_34040__$1);

return statearr_34153;
})();
if(inst_34040__$1){
var statearr_34154_35599 = state_34093__$1;
(statearr_34154_35599[(1)] = (13));

} else {
var statearr_34155_35600 = state_34093__$1;
(statearr_34155_35600[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34094 === (9))){
var inst_34066 = (state_34093[(2)]);
var state_34093__$1 = state_34093;
var statearr_34156_35601 = state_34093__$1;
(statearr_34156_35601[(2)] = inst_34066);

(statearr_34156_35601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34094 === (5))){
var inst_34021 = cljs.core.deref(mults);
var inst_34022 = cljs.core.vals(inst_34021);
var inst_34023 = cljs.core.seq(inst_34022);
var inst_34024 = inst_34023;
var inst_34025 = null;
var inst_34026 = (0);
var inst_34027 = (0);
var state_34093__$1 = (function (){var statearr_34157 = state_34093;
(statearr_34157[(12)] = inst_34024);

(statearr_34157[(14)] = inst_34027);

(statearr_34157[(15)] = inst_34025);

(statearr_34157[(16)] = inst_34026);

return statearr_34157;
})();
var statearr_34158_35606 = state_34093__$1;
(statearr_34158_35606[(2)] = null);

(statearr_34158_35606[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34094 === (14))){
var state_34093__$1 = state_34093;
var statearr_34162_35610 = state_34093__$1;
(statearr_34162_35610[(2)] = null);

(statearr_34162_35610[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34094 === (16))){
var inst_34040 = (state_34093[(10)]);
var inst_34047 = cljs.core.chunk_first(inst_34040);
var inst_34048 = cljs.core.chunk_rest(inst_34040);
var inst_34049 = cljs.core.count(inst_34047);
var inst_34024 = inst_34048;
var inst_34025 = inst_34047;
var inst_34026 = inst_34049;
var inst_34027 = (0);
var state_34093__$1 = (function (){var statearr_34163 = state_34093;
(statearr_34163[(12)] = inst_34024);

(statearr_34163[(14)] = inst_34027);

(statearr_34163[(15)] = inst_34025);

(statearr_34163[(16)] = inst_34026);

return statearr_34163;
})();
var statearr_34164_35614 = state_34093__$1;
(statearr_34164_35614[(2)] = null);

(statearr_34164_35614[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34094 === (10))){
var inst_34024 = (state_34093[(12)]);
var inst_34027 = (state_34093[(14)]);
var inst_34025 = (state_34093[(15)]);
var inst_34026 = (state_34093[(16)]);
var inst_34033 = cljs.core._nth(inst_34025,inst_34027);
var inst_34034 = cljs.core.async.muxch_STAR_(inst_34033);
var inst_34035 = cljs.core.async.close_BANG_(inst_34034);
var inst_34037 = (inst_34027 + (1));
var tmp34159 = inst_34024;
var tmp34160 = inst_34025;
var tmp34161 = inst_34026;
var inst_34024__$1 = tmp34159;
var inst_34025__$1 = tmp34160;
var inst_34026__$1 = tmp34161;
var inst_34027__$1 = inst_34037;
var state_34093__$1 = (function (){var statearr_34165 = state_34093;
(statearr_34165[(17)] = inst_34035);

(statearr_34165[(12)] = inst_34024__$1);

(statearr_34165[(14)] = inst_34027__$1);

(statearr_34165[(15)] = inst_34025__$1);

(statearr_34165[(16)] = inst_34026__$1);

return statearr_34165;
})();
var statearr_34166_35619 = state_34093__$1;
(statearr_34166_35619[(2)] = null);

(statearr_34166_35619[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34094 === (18))){
var inst_34059 = (state_34093[(2)]);
var state_34093__$1 = state_34093;
var statearr_34167_35620 = state_34093__$1;
(statearr_34167_35620[(2)] = inst_34059);

(statearr_34167_35620[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34094 === (8))){
var inst_34027 = (state_34093[(14)]);
var inst_34026 = (state_34093[(16)]);
var inst_34030 = (inst_34027 < inst_34026);
var inst_34031 = inst_34030;
var state_34093__$1 = state_34093;
if(cljs.core.truth_(inst_34031)){
var statearr_34170_35621 = state_34093__$1;
(statearr_34170_35621[(1)] = (10));

} else {
var statearr_34171_35622 = state_34093__$1;
(statearr_34171_35622[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32515__auto__ = null;
var cljs$core$async$state_machine__32515__auto____0 = (function (){
var statearr_34172 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34172[(0)] = cljs$core$async$state_machine__32515__auto__);

(statearr_34172[(1)] = (1));

return statearr_34172;
});
var cljs$core$async$state_machine__32515__auto____1 = (function (state_34093){
while(true){
var ret_value__32516__auto__ = (function (){try{while(true){
var result__32517__auto__ = switch__32514__auto__(state_34093);
if(cljs.core.keyword_identical_QMARK_(result__32517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32517__auto__;
}
break;
}
}catch (e34173){var ex__32518__auto__ = e34173;
var statearr_34178_35623 = state_34093;
(statearr_34178_35623[(2)] = ex__32518__auto__);


if(cljs.core.seq((state_34093[(4)]))){
var statearr_34179_35624 = state_34093;
(statearr_34179_35624[(1)] = cljs.core.first((state_34093[(4)])));

} else {
throw ex__32518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35625 = state_34093;
state_34093 = G__35625;
continue;
} else {
return ret_value__32516__auto__;
}
break;
}
});
cljs$core$async$state_machine__32515__auto__ = function(state_34093){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32515__auto____1.call(this,state_34093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32515__auto____0;
cljs$core$async$state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32515__auto____1;
return cljs$core$async$state_machine__32515__auto__;
})()
})();
var state__32719__auto__ = (function (){var statearr_34184 = f__32718__auto__();
(statearr_34184[(6)] = c__32717__auto___35553);

return statearr_34184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32719__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34187 = arguments.length;
switch (G__34187) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34197 = arguments.length;
switch (G__34197) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__34207 = arguments.length;
switch (G__34207) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__32717__auto___35641 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32718__auto__ = (function (){var switch__32514__auto__ = (function (state_34270){
var state_val_34271 = (state_34270[(1)]);
if((state_val_34271 === (7))){
var state_34270__$1 = state_34270;
var statearr_34273_35642 = state_34270__$1;
(statearr_34273_35642[(2)] = null);

(statearr_34273_35642[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34271 === (1))){
var state_34270__$1 = state_34270;
var statearr_34277_35643 = state_34270__$1;
(statearr_34277_35643[(2)] = null);

(statearr_34277_35643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34271 === (4))){
var inst_34216 = (state_34270[(7)]);
var inst_34215 = (state_34270[(8)]);
var inst_34222 = (inst_34216 < inst_34215);
var state_34270__$1 = state_34270;
if(cljs.core.truth_(inst_34222)){
var statearr_34279_35644 = state_34270__$1;
(statearr_34279_35644[(1)] = (6));

} else {
var statearr_34280_35645 = state_34270__$1;
(statearr_34280_35645[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34271 === (15))){
var inst_34253 = (state_34270[(9)]);
var inst_34258 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34253);
var state_34270__$1 = state_34270;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34270__$1,(17),out,inst_34258);
} else {
if((state_val_34271 === (13))){
var inst_34253 = (state_34270[(9)]);
var inst_34253__$1 = (state_34270[(2)]);
var inst_34254 = cljs.core.some(cljs.core.nil_QMARK_,inst_34253__$1);
var state_34270__$1 = (function (){var statearr_34282 = state_34270;
(statearr_34282[(9)] = inst_34253__$1);

return statearr_34282;
})();
if(cljs.core.truth_(inst_34254)){
var statearr_34283_35649 = state_34270__$1;
(statearr_34283_35649[(1)] = (14));

} else {
var statearr_34284_35650 = state_34270__$1;
(statearr_34284_35650[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34271 === (6))){
var state_34270__$1 = state_34270;
var statearr_34285_35651 = state_34270__$1;
(statearr_34285_35651[(2)] = null);

(statearr_34285_35651[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34271 === (17))){
var inst_34260 = (state_34270[(2)]);
var state_34270__$1 = (function (){var statearr_34299 = state_34270;
(statearr_34299[(10)] = inst_34260);

return statearr_34299;
})();
var statearr_34300_35652 = state_34270__$1;
(statearr_34300_35652[(2)] = null);

(statearr_34300_35652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34271 === (3))){
var inst_34265 = (state_34270[(2)]);
var state_34270__$1 = state_34270;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34270__$1,inst_34265);
} else {
if((state_val_34271 === (12))){
var _ = (function (){var statearr_34305 = state_34270;
(statearr_34305[(4)] = cljs.core.rest((state_34270[(4)])));

return statearr_34305;
})();
var state_34270__$1 = state_34270;
var ex34294 = (state_34270__$1[(2)]);
var statearr_34306_35653 = state_34270__$1;
(statearr_34306_35653[(5)] = ex34294);


if((ex34294 instanceof Object)){
var statearr_34307_35654 = state_34270__$1;
(statearr_34307_35654[(1)] = (11));

(statearr_34307_35654[(5)] = null);

} else {
throw ex34294;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34271 === (2))){
var inst_34214 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34215 = cnt;
var inst_34216 = (0);
var state_34270__$1 = (function (){var statearr_34312 = state_34270;
(statearr_34312[(7)] = inst_34216);

(statearr_34312[(8)] = inst_34215);

(statearr_34312[(11)] = inst_34214);

return statearr_34312;
})();
var statearr_34313_35655 = state_34270__$1;
(statearr_34313_35655[(2)] = null);

(statearr_34313_35655[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34271 === (11))){
var inst_34228 = (state_34270[(2)]);
var inst_34229 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34270__$1 = (function (){var statearr_34315 = state_34270;
(statearr_34315[(12)] = inst_34228);

return statearr_34315;
})();
var statearr_34316_35656 = state_34270__$1;
(statearr_34316_35656[(2)] = inst_34229);

(statearr_34316_35656[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34271 === (9))){
var inst_34216 = (state_34270[(7)]);
var _ = (function (){var statearr_34317 = state_34270;
(statearr_34317[(4)] = cljs.core.cons((12),(state_34270[(4)])));

return statearr_34317;
})();
var inst_34238 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34216) : chs__$1.call(null,inst_34216));
var inst_34240 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34216) : done.call(null,inst_34216));
var inst_34241 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34238,inst_34240);
var ___$1 = (function (){var statearr_34318 = state_34270;
(statearr_34318[(4)] = cljs.core.rest((state_34270[(4)])));

return statearr_34318;
})();
var state_34270__$1 = state_34270;
var statearr_34323_35657 = state_34270__$1;
(statearr_34323_35657[(2)] = inst_34241);

(statearr_34323_35657[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34271 === (5))){
var inst_34251 = (state_34270[(2)]);
var state_34270__$1 = (function (){var statearr_34327 = state_34270;
(statearr_34327[(13)] = inst_34251);

return statearr_34327;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34270__$1,(13),dchan);
} else {
if((state_val_34271 === (14))){
var inst_34256 = cljs.core.async.close_BANG_(out);
var state_34270__$1 = state_34270;
var statearr_34329_35658 = state_34270__$1;
(statearr_34329_35658[(2)] = inst_34256);

(statearr_34329_35658[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34271 === (16))){
var inst_34263 = (state_34270[(2)]);
var state_34270__$1 = state_34270;
var statearr_34330_35659 = state_34270__$1;
(statearr_34330_35659[(2)] = inst_34263);

(statearr_34330_35659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34271 === (10))){
var inst_34216 = (state_34270[(7)]);
var inst_34244 = (state_34270[(2)]);
var inst_34245 = (inst_34216 + (1));
var inst_34216__$1 = inst_34245;
var state_34270__$1 = (function (){var statearr_34334 = state_34270;
(statearr_34334[(14)] = inst_34244);

(statearr_34334[(7)] = inst_34216__$1);

return statearr_34334;
})();
var statearr_34336_35660 = state_34270__$1;
(statearr_34336_35660[(2)] = null);

(statearr_34336_35660[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34271 === (8))){
var inst_34249 = (state_34270[(2)]);
var state_34270__$1 = state_34270;
var statearr_34337_35661 = state_34270__$1;
(statearr_34337_35661[(2)] = inst_34249);

(statearr_34337_35661[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32515__auto__ = null;
var cljs$core$async$state_machine__32515__auto____0 = (function (){
var statearr_34342 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34342[(0)] = cljs$core$async$state_machine__32515__auto__);

(statearr_34342[(1)] = (1));

return statearr_34342;
});
var cljs$core$async$state_machine__32515__auto____1 = (function (state_34270){
while(true){
var ret_value__32516__auto__ = (function (){try{while(true){
var result__32517__auto__ = switch__32514__auto__(state_34270);
if(cljs.core.keyword_identical_QMARK_(result__32517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32517__auto__;
}
break;
}
}catch (e34343){var ex__32518__auto__ = e34343;
var statearr_34344_35666 = state_34270;
(statearr_34344_35666[(2)] = ex__32518__auto__);


if(cljs.core.seq((state_34270[(4)]))){
var statearr_34345_35667 = state_34270;
(statearr_34345_35667[(1)] = cljs.core.first((state_34270[(4)])));

} else {
throw ex__32518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35668 = state_34270;
state_34270 = G__35668;
continue;
} else {
return ret_value__32516__auto__;
}
break;
}
});
cljs$core$async$state_machine__32515__auto__ = function(state_34270){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32515__auto____1.call(this,state_34270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32515__auto____0;
cljs$core$async$state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32515__auto____1;
return cljs$core$async$state_machine__32515__auto__;
})()
})();
var state__32719__auto__ = (function (){var statearr_34350 = f__32718__auto__();
(statearr_34350[(6)] = c__32717__auto___35641);

return statearr_34350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32719__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34353 = arguments.length;
switch (G__34353) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32717__auto___35670 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32718__auto__ = (function (){var switch__32514__auto__ = (function (state_34390){
var state_val_34391 = (state_34390[(1)]);
if((state_val_34391 === (7))){
var inst_34369 = (state_34390[(7)]);
var inst_34368 = (state_34390[(8)]);
var inst_34368__$1 = (state_34390[(2)]);
var inst_34369__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34368__$1,(0),null);
var inst_34370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34368__$1,(1),null);
var inst_34371 = (inst_34369__$1 == null);
var state_34390__$1 = (function (){var statearr_34392 = state_34390;
(statearr_34392[(7)] = inst_34369__$1);

(statearr_34392[(9)] = inst_34370);

(statearr_34392[(8)] = inst_34368__$1);

return statearr_34392;
})();
if(cljs.core.truth_(inst_34371)){
var statearr_34393_35671 = state_34390__$1;
(statearr_34393_35671[(1)] = (8));

} else {
var statearr_34394_35672 = state_34390__$1;
(statearr_34394_35672[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34391 === (1))){
var inst_34358 = cljs.core.vec(chs);
var inst_34359 = inst_34358;
var state_34390__$1 = (function (){var statearr_34395 = state_34390;
(statearr_34395[(10)] = inst_34359);

return statearr_34395;
})();
var statearr_34396_35673 = state_34390__$1;
(statearr_34396_35673[(2)] = null);

(statearr_34396_35673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34391 === (4))){
var inst_34359 = (state_34390[(10)]);
var state_34390__$1 = state_34390;
return cljs.core.async.ioc_alts_BANG_(state_34390__$1,(7),inst_34359);
} else {
if((state_val_34391 === (6))){
var inst_34386 = (state_34390[(2)]);
var state_34390__$1 = state_34390;
var statearr_34398_35678 = state_34390__$1;
(statearr_34398_35678[(2)] = inst_34386);

(statearr_34398_35678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34391 === (3))){
var inst_34388 = (state_34390[(2)]);
var state_34390__$1 = state_34390;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34390__$1,inst_34388);
} else {
if((state_val_34391 === (2))){
var inst_34359 = (state_34390[(10)]);
var inst_34361 = cljs.core.count(inst_34359);
var inst_34362 = (inst_34361 > (0));
var state_34390__$1 = state_34390;
if(cljs.core.truth_(inst_34362)){
var statearr_34401_35680 = state_34390__$1;
(statearr_34401_35680[(1)] = (4));

} else {
var statearr_34402_35681 = state_34390__$1;
(statearr_34402_35681[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34391 === (11))){
var inst_34359 = (state_34390[(10)]);
var inst_34379 = (state_34390[(2)]);
var tmp34399 = inst_34359;
var inst_34359__$1 = tmp34399;
var state_34390__$1 = (function (){var statearr_34403 = state_34390;
(statearr_34403[(10)] = inst_34359__$1);

(statearr_34403[(11)] = inst_34379);

return statearr_34403;
})();
var statearr_34404_35683 = state_34390__$1;
(statearr_34404_35683[(2)] = null);

(statearr_34404_35683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34391 === (9))){
var inst_34369 = (state_34390[(7)]);
var state_34390__$1 = state_34390;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34390__$1,(11),out,inst_34369);
} else {
if((state_val_34391 === (5))){
var inst_34384 = cljs.core.async.close_BANG_(out);
var state_34390__$1 = state_34390;
var statearr_34405_35684 = state_34390__$1;
(statearr_34405_35684[(2)] = inst_34384);

(statearr_34405_35684[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34391 === (10))){
var inst_34382 = (state_34390[(2)]);
var state_34390__$1 = state_34390;
var statearr_34406_35685 = state_34390__$1;
(statearr_34406_35685[(2)] = inst_34382);

(statearr_34406_35685[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34391 === (8))){
var inst_34359 = (state_34390[(10)]);
var inst_34369 = (state_34390[(7)]);
var inst_34370 = (state_34390[(9)]);
var inst_34368 = (state_34390[(8)]);
var inst_34373 = (function (){var cs = inst_34359;
var vec__34364 = inst_34368;
var v = inst_34369;
var c = inst_34370;
return (function (p1__34351_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34351_SHARP_);
});
})();
var inst_34374 = cljs.core.filterv(inst_34373,inst_34359);
var inst_34359__$1 = inst_34374;
var state_34390__$1 = (function (){var statearr_34407 = state_34390;
(statearr_34407[(10)] = inst_34359__$1);

return statearr_34407;
})();
var statearr_34408_35687 = state_34390__$1;
(statearr_34408_35687[(2)] = null);

(statearr_34408_35687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32515__auto__ = null;
var cljs$core$async$state_machine__32515__auto____0 = (function (){
var statearr_34409 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34409[(0)] = cljs$core$async$state_machine__32515__auto__);

(statearr_34409[(1)] = (1));

return statearr_34409;
});
var cljs$core$async$state_machine__32515__auto____1 = (function (state_34390){
while(true){
var ret_value__32516__auto__ = (function (){try{while(true){
var result__32517__auto__ = switch__32514__auto__(state_34390);
if(cljs.core.keyword_identical_QMARK_(result__32517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32517__auto__;
}
break;
}
}catch (e34410){var ex__32518__auto__ = e34410;
var statearr_34411_35688 = state_34390;
(statearr_34411_35688[(2)] = ex__32518__auto__);


if(cljs.core.seq((state_34390[(4)]))){
var statearr_34412_35689 = state_34390;
(statearr_34412_35689[(1)] = cljs.core.first((state_34390[(4)])));

} else {
throw ex__32518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35693 = state_34390;
state_34390 = G__35693;
continue;
} else {
return ret_value__32516__auto__;
}
break;
}
});
cljs$core$async$state_machine__32515__auto__ = function(state_34390){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32515__auto____1.call(this,state_34390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32515__auto____0;
cljs$core$async$state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32515__auto____1;
return cljs$core$async$state_machine__32515__auto__;
})()
})();
var state__32719__auto__ = (function (){var statearr_34413 = f__32718__auto__();
(statearr_34413[(6)] = c__32717__auto___35670);

return statearr_34413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32719__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34415 = arguments.length;
switch (G__34415) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32717__auto___35699 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32718__auto__ = (function (){var switch__32514__auto__ = (function (state_34439){
var state_val_34440 = (state_34439[(1)]);
if((state_val_34440 === (7))){
var inst_34421 = (state_34439[(7)]);
var inst_34421__$1 = (state_34439[(2)]);
var inst_34422 = (inst_34421__$1 == null);
var inst_34423 = cljs.core.not(inst_34422);
var state_34439__$1 = (function (){var statearr_34441 = state_34439;
(statearr_34441[(7)] = inst_34421__$1);

return statearr_34441;
})();
if(inst_34423){
var statearr_34442_35700 = state_34439__$1;
(statearr_34442_35700[(1)] = (8));

} else {
var statearr_34443_35701 = state_34439__$1;
(statearr_34443_35701[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34440 === (1))){
var inst_34416 = (0);
var state_34439__$1 = (function (){var statearr_34444 = state_34439;
(statearr_34444[(8)] = inst_34416);

return statearr_34444;
})();
var statearr_34446_35702 = state_34439__$1;
(statearr_34446_35702[(2)] = null);

(statearr_34446_35702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34440 === (4))){
var state_34439__$1 = state_34439;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34439__$1,(7),ch);
} else {
if((state_val_34440 === (6))){
var inst_34434 = (state_34439[(2)]);
var state_34439__$1 = state_34439;
var statearr_34448_35703 = state_34439__$1;
(statearr_34448_35703[(2)] = inst_34434);

(statearr_34448_35703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34440 === (3))){
var inst_34436 = (state_34439[(2)]);
var inst_34437 = cljs.core.async.close_BANG_(out);
var state_34439__$1 = (function (){var statearr_34449 = state_34439;
(statearr_34449[(9)] = inst_34436);

return statearr_34449;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34439__$1,inst_34437);
} else {
if((state_val_34440 === (2))){
var inst_34416 = (state_34439[(8)]);
var inst_34418 = (inst_34416 < n);
var state_34439__$1 = state_34439;
if(cljs.core.truth_(inst_34418)){
var statearr_34450_35707 = state_34439__$1;
(statearr_34450_35707[(1)] = (4));

} else {
var statearr_34451_35708 = state_34439__$1;
(statearr_34451_35708[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34440 === (11))){
var inst_34416 = (state_34439[(8)]);
var inst_34426 = (state_34439[(2)]);
var inst_34427 = (inst_34416 + (1));
var inst_34416__$1 = inst_34427;
var state_34439__$1 = (function (){var statearr_34452 = state_34439;
(statearr_34452[(10)] = inst_34426);

(statearr_34452[(8)] = inst_34416__$1);

return statearr_34452;
})();
var statearr_34453_35709 = state_34439__$1;
(statearr_34453_35709[(2)] = null);

(statearr_34453_35709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34440 === (9))){
var state_34439__$1 = state_34439;
var statearr_34454_35710 = state_34439__$1;
(statearr_34454_35710[(2)] = null);

(statearr_34454_35710[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34440 === (5))){
var state_34439__$1 = state_34439;
var statearr_34455_35711 = state_34439__$1;
(statearr_34455_35711[(2)] = null);

(statearr_34455_35711[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34440 === (10))){
var inst_34431 = (state_34439[(2)]);
var state_34439__$1 = state_34439;
var statearr_34456_35712 = state_34439__$1;
(statearr_34456_35712[(2)] = inst_34431);

(statearr_34456_35712[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34440 === (8))){
var inst_34421 = (state_34439[(7)]);
var state_34439__$1 = state_34439;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34439__$1,(11),out,inst_34421);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32515__auto__ = null;
var cljs$core$async$state_machine__32515__auto____0 = (function (){
var statearr_34457 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34457[(0)] = cljs$core$async$state_machine__32515__auto__);

(statearr_34457[(1)] = (1));

return statearr_34457;
});
var cljs$core$async$state_machine__32515__auto____1 = (function (state_34439){
while(true){
var ret_value__32516__auto__ = (function (){try{while(true){
var result__32517__auto__ = switch__32514__auto__(state_34439);
if(cljs.core.keyword_identical_QMARK_(result__32517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32517__auto__;
}
break;
}
}catch (e34458){var ex__32518__auto__ = e34458;
var statearr_34459_35713 = state_34439;
(statearr_34459_35713[(2)] = ex__32518__auto__);


if(cljs.core.seq((state_34439[(4)]))){
var statearr_34461_35714 = state_34439;
(statearr_34461_35714[(1)] = cljs.core.first((state_34439[(4)])));

} else {
throw ex__32518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35715 = state_34439;
state_34439 = G__35715;
continue;
} else {
return ret_value__32516__auto__;
}
break;
}
});
cljs$core$async$state_machine__32515__auto__ = function(state_34439){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32515__auto____1.call(this,state_34439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32515__auto____0;
cljs$core$async$state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32515__auto____1;
return cljs$core$async$state_machine__32515__auto__;
})()
})();
var state__32719__auto__ = (function (){var statearr_34463 = f__32718__auto__();
(statearr_34463[(6)] = c__32717__auto___35699);

return statearr_34463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32719__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34465 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34465 = (function (f,ch,meta34466){
this.f = f;
this.ch = ch;
this.meta34466 = meta34466;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34467,meta34466__$1){
var self__ = this;
var _34467__$1 = this;
return (new cljs.core.async.t_cljs$core$async34465(self__.f,self__.ch,meta34466__$1));
}));

(cljs.core.async.t_cljs$core$async34465.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34467){
var self__ = this;
var _34467__$1 = this;
return self__.meta34466;
}));

(cljs.core.async.t_cljs$core$async34465.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34465.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34465.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34465.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34465.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34470 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34470 = (function (f,ch,meta34466,_,fn1,meta34471){
this.f = f;
this.ch = ch;
this.meta34466 = meta34466;
this._ = _;
this.fn1 = fn1;
this.meta34471 = meta34471;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34472,meta34471__$1){
var self__ = this;
var _34472__$1 = this;
return (new cljs.core.async.t_cljs$core$async34470(self__.f,self__.ch,self__.meta34466,self__._,self__.fn1,meta34471__$1));
}));

(cljs.core.async.t_cljs$core$async34470.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34472){
var self__ = this;
var _34472__$1 = this;
return self__.meta34471;
}));

(cljs.core.async.t_cljs$core$async34470.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34470.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34470.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34470.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34464_SHARP_){
var G__34473 = (((p1__34464_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34464_SHARP_) : self__.f.call(null,p1__34464_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34473) : f1.call(null,G__34473));
});
}));

(cljs.core.async.t_cljs$core$async34470.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34466","meta34466",1311345274,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34465","cljs.core.async/t_cljs$core$async34465",20236548,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34471","meta34471",524928278,null)], null);
}));

(cljs.core.async.t_cljs$core$async34470.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34470.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34470");

(cljs.core.async.t_cljs$core$async34470.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async34470");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34470.
 */
cljs.core.async.__GT_t_cljs$core$async34470 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34470(f__$1,ch__$1,meta34466__$1,___$2,fn1__$1,meta34471){
return (new cljs.core.async.t_cljs$core$async34470(f__$1,ch__$1,meta34466__$1,___$2,fn1__$1,meta34471));
});

}

return (new cljs.core.async.t_cljs$core$async34470(self__.f,self__.ch,self__.meta34466,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34476 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34476) : self__.f.call(null,G__34476));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34465.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34465.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34465.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34466","meta34466",1311345274,null)], null);
}));

(cljs.core.async.t_cljs$core$async34465.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34465.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34465");

(cljs.core.async.t_cljs$core$async34465.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async34465");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34465.
 */
cljs.core.async.__GT_t_cljs$core$async34465 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34465(f__$1,ch__$1,meta34466){
return (new cljs.core.async.t_cljs$core$async34465(f__$1,ch__$1,meta34466));
});

}

return (new cljs.core.async.t_cljs$core$async34465(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34482 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34482 = (function (f,ch,meta34483){
this.f = f;
this.ch = ch;
this.meta34483 = meta34483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34484,meta34483__$1){
var self__ = this;
var _34484__$1 = this;
return (new cljs.core.async.t_cljs$core$async34482(self__.f,self__.ch,meta34483__$1));
}));

(cljs.core.async.t_cljs$core$async34482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34484){
var self__ = this;
var _34484__$1 = this;
return self__.meta34483;
}));

(cljs.core.async.t_cljs$core$async34482.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34482.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34482.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34482.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34482.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34482.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34482.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34483","meta34483",2012322527,null)], null);
}));

(cljs.core.async.t_cljs$core$async34482.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34482.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34482");

(cljs.core.async.t_cljs$core$async34482.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async34482");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34482.
 */
cljs.core.async.__GT_t_cljs$core$async34482 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34482(f__$1,ch__$1,meta34483){
return (new cljs.core.async.t_cljs$core$async34482(f__$1,ch__$1,meta34483));
});

}

return (new cljs.core.async.t_cljs$core$async34482(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34492 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34492 = (function (p,ch,meta34493){
this.p = p;
this.ch = ch;
this.meta34493 = meta34493;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34494,meta34493__$1){
var self__ = this;
var _34494__$1 = this;
return (new cljs.core.async.t_cljs$core$async34492(self__.p,self__.ch,meta34493__$1));
}));

(cljs.core.async.t_cljs$core$async34492.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34494){
var self__ = this;
var _34494__$1 = this;
return self__.meta34493;
}));

(cljs.core.async.t_cljs$core$async34492.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34492.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34492.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34492.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34492.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34492.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34492.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34492.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34493","meta34493",1285443517,null)], null);
}));

(cljs.core.async.t_cljs$core$async34492.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34492.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34492");

(cljs.core.async.t_cljs$core$async34492.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async34492");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34492.
 */
cljs.core.async.__GT_t_cljs$core$async34492 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34492(p__$1,ch__$1,meta34493){
return (new cljs.core.async.t_cljs$core$async34492(p__$1,ch__$1,meta34493));
});

}

return (new cljs.core.async.t_cljs$core$async34492(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34528 = arguments.length;
switch (G__34528) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32717__auto___35727 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32718__auto__ = (function (){var switch__32514__auto__ = (function (state_34549){
var state_val_34550 = (state_34549[(1)]);
if((state_val_34550 === (7))){
var inst_34545 = (state_34549[(2)]);
var state_34549__$1 = state_34549;
var statearr_34555_35728 = state_34549__$1;
(statearr_34555_35728[(2)] = inst_34545);

(statearr_34555_35728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34550 === (1))){
var state_34549__$1 = state_34549;
var statearr_34556_35733 = state_34549__$1;
(statearr_34556_35733[(2)] = null);

(statearr_34556_35733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34550 === (4))){
var inst_34531 = (state_34549[(7)]);
var inst_34531__$1 = (state_34549[(2)]);
var inst_34532 = (inst_34531__$1 == null);
var state_34549__$1 = (function (){var statearr_34557 = state_34549;
(statearr_34557[(7)] = inst_34531__$1);

return statearr_34557;
})();
if(cljs.core.truth_(inst_34532)){
var statearr_34558_35734 = state_34549__$1;
(statearr_34558_35734[(1)] = (5));

} else {
var statearr_34559_35735 = state_34549__$1;
(statearr_34559_35735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34550 === (6))){
var inst_34531 = (state_34549[(7)]);
var inst_34536 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34531) : p.call(null,inst_34531));
var state_34549__$1 = state_34549;
if(cljs.core.truth_(inst_34536)){
var statearr_34560_35736 = state_34549__$1;
(statearr_34560_35736[(1)] = (8));

} else {
var statearr_34561_35737 = state_34549__$1;
(statearr_34561_35737[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34550 === (3))){
var inst_34547 = (state_34549[(2)]);
var state_34549__$1 = state_34549;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34549__$1,inst_34547);
} else {
if((state_val_34550 === (2))){
var state_34549__$1 = state_34549;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34549__$1,(4),ch);
} else {
if((state_val_34550 === (11))){
var inst_34539 = (state_34549[(2)]);
var state_34549__$1 = state_34549;
var statearr_34562_35738 = state_34549__$1;
(statearr_34562_35738[(2)] = inst_34539);

(statearr_34562_35738[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34550 === (9))){
var state_34549__$1 = state_34549;
var statearr_34563_35739 = state_34549__$1;
(statearr_34563_35739[(2)] = null);

(statearr_34563_35739[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34550 === (5))){
var inst_34534 = cljs.core.async.close_BANG_(out);
var state_34549__$1 = state_34549;
var statearr_34568_35740 = state_34549__$1;
(statearr_34568_35740[(2)] = inst_34534);

(statearr_34568_35740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34550 === (10))){
var inst_34542 = (state_34549[(2)]);
var state_34549__$1 = (function (){var statearr_34569 = state_34549;
(statearr_34569[(8)] = inst_34542);

return statearr_34569;
})();
var statearr_34570_35741 = state_34549__$1;
(statearr_34570_35741[(2)] = null);

(statearr_34570_35741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34550 === (8))){
var inst_34531 = (state_34549[(7)]);
var state_34549__$1 = state_34549;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34549__$1,(11),out,inst_34531);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32515__auto__ = null;
var cljs$core$async$state_machine__32515__auto____0 = (function (){
var statearr_34573 = [null,null,null,null,null,null,null,null,null];
(statearr_34573[(0)] = cljs$core$async$state_machine__32515__auto__);

(statearr_34573[(1)] = (1));

return statearr_34573;
});
var cljs$core$async$state_machine__32515__auto____1 = (function (state_34549){
while(true){
var ret_value__32516__auto__ = (function (){try{while(true){
var result__32517__auto__ = switch__32514__auto__(state_34549);
if(cljs.core.keyword_identical_QMARK_(result__32517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32517__auto__;
}
break;
}
}catch (e34575){var ex__32518__auto__ = e34575;
var statearr_34576_35746 = state_34549;
(statearr_34576_35746[(2)] = ex__32518__auto__);


if(cljs.core.seq((state_34549[(4)]))){
var statearr_34577_35748 = state_34549;
(statearr_34577_35748[(1)] = cljs.core.first((state_34549[(4)])));

} else {
throw ex__32518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35749 = state_34549;
state_34549 = G__35749;
continue;
} else {
return ret_value__32516__auto__;
}
break;
}
});
cljs$core$async$state_machine__32515__auto__ = function(state_34549){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32515__auto____1.call(this,state_34549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32515__auto____0;
cljs$core$async$state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32515__auto____1;
return cljs$core$async$state_machine__32515__auto__;
})()
})();
var state__32719__auto__ = (function (){var statearr_34579 = f__32718__auto__();
(statearr_34579[(6)] = c__32717__auto___35727);

return statearr_34579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32719__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34581 = arguments.length;
switch (G__34581) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32717__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32718__auto__ = (function (){var switch__32514__auto__ = (function (state_34646){
var state_val_34647 = (state_34646[(1)]);
if((state_val_34647 === (7))){
var inst_34642 = (state_34646[(2)]);
var state_34646__$1 = state_34646;
var statearr_34652_35752 = state_34646__$1;
(statearr_34652_35752[(2)] = inst_34642);

(statearr_34652_35752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34647 === (20))){
var inst_34611 = (state_34646[(7)]);
var inst_34622 = (state_34646[(2)]);
var inst_34623 = cljs.core.next(inst_34611);
var inst_34597 = inst_34623;
var inst_34598 = null;
var inst_34599 = (0);
var inst_34600 = (0);
var state_34646__$1 = (function (){var statearr_34653 = state_34646;
(statearr_34653[(8)] = inst_34599);

(statearr_34653[(9)] = inst_34598);

(statearr_34653[(10)] = inst_34622);

(statearr_34653[(11)] = inst_34597);

(statearr_34653[(12)] = inst_34600);

return statearr_34653;
})();
var statearr_34654_35755 = state_34646__$1;
(statearr_34654_35755[(2)] = null);

(statearr_34654_35755[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34647 === (1))){
var state_34646__$1 = state_34646;
var statearr_34655_35756 = state_34646__$1;
(statearr_34655_35756[(2)] = null);

(statearr_34655_35756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34647 === (4))){
var inst_34585 = (state_34646[(13)]);
var inst_34585__$1 = (state_34646[(2)]);
var inst_34586 = (inst_34585__$1 == null);
var state_34646__$1 = (function (){var statearr_34656 = state_34646;
(statearr_34656[(13)] = inst_34585__$1);

return statearr_34656;
})();
if(cljs.core.truth_(inst_34586)){
var statearr_34657_35758 = state_34646__$1;
(statearr_34657_35758[(1)] = (5));

} else {
var statearr_34658_35759 = state_34646__$1;
(statearr_34658_35759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34647 === (15))){
var state_34646__$1 = state_34646;
var statearr_34662_35763 = state_34646__$1;
(statearr_34662_35763[(2)] = null);

(statearr_34662_35763[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34647 === (21))){
var state_34646__$1 = state_34646;
var statearr_34663_35764 = state_34646__$1;
(statearr_34663_35764[(2)] = null);

(statearr_34663_35764[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34647 === (13))){
var inst_34599 = (state_34646[(8)]);
var inst_34598 = (state_34646[(9)]);
var inst_34597 = (state_34646[(11)]);
var inst_34600 = (state_34646[(12)]);
var inst_34607 = (state_34646[(2)]);
var inst_34608 = (inst_34600 + (1));
var tmp34659 = inst_34599;
var tmp34660 = inst_34598;
var tmp34661 = inst_34597;
var inst_34597__$1 = tmp34661;
var inst_34598__$1 = tmp34660;
var inst_34599__$1 = tmp34659;
var inst_34600__$1 = inst_34608;
var state_34646__$1 = (function (){var statearr_34664 = state_34646;
(statearr_34664[(8)] = inst_34599__$1);

(statearr_34664[(14)] = inst_34607);

(statearr_34664[(9)] = inst_34598__$1);

(statearr_34664[(11)] = inst_34597__$1);

(statearr_34664[(12)] = inst_34600__$1);

return statearr_34664;
})();
var statearr_34665_35765 = state_34646__$1;
(statearr_34665_35765[(2)] = null);

(statearr_34665_35765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34647 === (22))){
var state_34646__$1 = state_34646;
var statearr_34666_35766 = state_34646__$1;
(statearr_34666_35766[(2)] = null);

(statearr_34666_35766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34647 === (6))){
var inst_34585 = (state_34646[(13)]);
var inst_34595 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34585) : f.call(null,inst_34585));
var inst_34596 = cljs.core.seq(inst_34595);
var inst_34597 = inst_34596;
var inst_34598 = null;
var inst_34599 = (0);
var inst_34600 = (0);
var state_34646__$1 = (function (){var statearr_34667 = state_34646;
(statearr_34667[(8)] = inst_34599);

(statearr_34667[(9)] = inst_34598);

(statearr_34667[(11)] = inst_34597);

(statearr_34667[(12)] = inst_34600);

return statearr_34667;
})();
var statearr_34668_35767 = state_34646__$1;
(statearr_34668_35767[(2)] = null);

(statearr_34668_35767[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34647 === (17))){
var inst_34611 = (state_34646[(7)]);
var inst_34615 = cljs.core.chunk_first(inst_34611);
var inst_34616 = cljs.core.chunk_rest(inst_34611);
var inst_34617 = cljs.core.count(inst_34615);
var inst_34597 = inst_34616;
var inst_34598 = inst_34615;
var inst_34599 = inst_34617;
var inst_34600 = (0);
var state_34646__$1 = (function (){var statearr_34669 = state_34646;
(statearr_34669[(8)] = inst_34599);

(statearr_34669[(9)] = inst_34598);

(statearr_34669[(11)] = inst_34597);

(statearr_34669[(12)] = inst_34600);

return statearr_34669;
})();
var statearr_34670_35768 = state_34646__$1;
(statearr_34670_35768[(2)] = null);

(statearr_34670_35768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34647 === (3))){
var inst_34644 = (state_34646[(2)]);
var state_34646__$1 = state_34646;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34646__$1,inst_34644);
} else {
if((state_val_34647 === (12))){
var inst_34631 = (state_34646[(2)]);
var state_34646__$1 = state_34646;
var statearr_34671_35769 = state_34646__$1;
(statearr_34671_35769[(2)] = inst_34631);

(statearr_34671_35769[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34647 === (2))){
var state_34646__$1 = state_34646;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34646__$1,(4),in$);
} else {
if((state_val_34647 === (23))){
var inst_34640 = (state_34646[(2)]);
var state_34646__$1 = state_34646;
var statearr_34676_35770 = state_34646__$1;
(statearr_34676_35770[(2)] = inst_34640);

(statearr_34676_35770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34647 === (19))){
var inst_34626 = (state_34646[(2)]);
var state_34646__$1 = state_34646;
var statearr_34678_35771 = state_34646__$1;
(statearr_34678_35771[(2)] = inst_34626);

(statearr_34678_35771[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34647 === (11))){
var inst_34611 = (state_34646[(7)]);
var inst_34597 = (state_34646[(11)]);
var inst_34611__$1 = cljs.core.seq(inst_34597);
var state_34646__$1 = (function (){var statearr_34681 = state_34646;
(statearr_34681[(7)] = inst_34611__$1);

return statearr_34681;
})();
if(inst_34611__$1){
var statearr_34682_35772 = state_34646__$1;
(statearr_34682_35772[(1)] = (14));

} else {
var statearr_34683_35773 = state_34646__$1;
(statearr_34683_35773[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34647 === (9))){
var inst_34633 = (state_34646[(2)]);
var inst_34634 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34646__$1 = (function (){var statearr_34684 = state_34646;
(statearr_34684[(15)] = inst_34633);

return statearr_34684;
})();
if(cljs.core.truth_(inst_34634)){
var statearr_34685_35774 = state_34646__$1;
(statearr_34685_35774[(1)] = (21));

} else {
var statearr_34686_35775 = state_34646__$1;
(statearr_34686_35775[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34647 === (5))){
var inst_34588 = cljs.core.async.close_BANG_(out);
var state_34646__$1 = state_34646;
var statearr_34688_35776 = state_34646__$1;
(statearr_34688_35776[(2)] = inst_34588);

(statearr_34688_35776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34647 === (14))){
var inst_34611 = (state_34646[(7)]);
var inst_34613 = cljs.core.chunked_seq_QMARK_(inst_34611);
var state_34646__$1 = state_34646;
if(inst_34613){
var statearr_34693_35777 = state_34646__$1;
(statearr_34693_35777[(1)] = (17));

} else {
var statearr_34694_35778 = state_34646__$1;
(statearr_34694_35778[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34647 === (16))){
var inst_34629 = (state_34646[(2)]);
var state_34646__$1 = state_34646;
var statearr_34695_35779 = state_34646__$1;
(statearr_34695_35779[(2)] = inst_34629);

(statearr_34695_35779[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34647 === (10))){
var inst_34598 = (state_34646[(9)]);
var inst_34600 = (state_34646[(12)]);
var inst_34605 = cljs.core._nth(inst_34598,inst_34600);
var state_34646__$1 = state_34646;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34646__$1,(13),out,inst_34605);
} else {
if((state_val_34647 === (18))){
var inst_34611 = (state_34646[(7)]);
var inst_34620 = cljs.core.first(inst_34611);
var state_34646__$1 = state_34646;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34646__$1,(20),out,inst_34620);
} else {
if((state_val_34647 === (8))){
var inst_34599 = (state_34646[(8)]);
var inst_34600 = (state_34646[(12)]);
var inst_34602 = (inst_34600 < inst_34599);
var inst_34603 = inst_34602;
var state_34646__$1 = state_34646;
if(cljs.core.truth_(inst_34603)){
var statearr_34696_35780 = state_34646__$1;
(statearr_34696_35780[(1)] = (10));

} else {
var statearr_34697_35781 = state_34646__$1;
(statearr_34697_35781[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32515__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32515__auto____0 = (function (){
var statearr_34698 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34698[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32515__auto__);

(statearr_34698[(1)] = (1));

return statearr_34698;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32515__auto____1 = (function (state_34646){
while(true){
var ret_value__32516__auto__ = (function (){try{while(true){
var result__32517__auto__ = switch__32514__auto__(state_34646);
if(cljs.core.keyword_identical_QMARK_(result__32517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32517__auto__;
}
break;
}
}catch (e34699){var ex__32518__auto__ = e34699;
var statearr_34700_35786 = state_34646;
(statearr_34700_35786[(2)] = ex__32518__auto__);


if(cljs.core.seq((state_34646[(4)]))){
var statearr_34701_35787 = state_34646;
(statearr_34701_35787[(1)] = cljs.core.first((state_34646[(4)])));

} else {
throw ex__32518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35788 = state_34646;
state_34646 = G__35788;
continue;
} else {
return ret_value__32516__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32515__auto__ = function(state_34646){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32515__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32515__auto____1.call(this,state_34646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32515__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32515__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32515__auto__;
})()
})();
var state__32719__auto__ = (function (){var statearr_34702 = f__32718__auto__();
(statearr_34702[(6)] = c__32717__auto__);

return statearr_34702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32719__auto__);
}));

return c__32717__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34704 = arguments.length;
switch (G__34704) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34710 = arguments.length;
switch (G__34710) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34716 = arguments.length;
switch (G__34716) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32717__auto___35799 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32718__auto__ = (function (){var switch__32514__auto__ = (function (state_34740){
var state_val_34741 = (state_34740[(1)]);
if((state_val_34741 === (7))){
var inst_34735 = (state_34740[(2)]);
var state_34740__$1 = state_34740;
var statearr_34744_35800 = state_34740__$1;
(statearr_34744_35800[(2)] = inst_34735);

(statearr_34744_35800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (1))){
var inst_34717 = null;
var state_34740__$1 = (function (){var statearr_34745 = state_34740;
(statearr_34745[(7)] = inst_34717);

return statearr_34745;
})();
var statearr_34746_35801 = state_34740__$1;
(statearr_34746_35801[(2)] = null);

(statearr_34746_35801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (4))){
var inst_34720 = (state_34740[(8)]);
var inst_34720__$1 = (state_34740[(2)]);
var inst_34721 = (inst_34720__$1 == null);
var inst_34722 = cljs.core.not(inst_34721);
var state_34740__$1 = (function (){var statearr_34747 = state_34740;
(statearr_34747[(8)] = inst_34720__$1);

return statearr_34747;
})();
if(inst_34722){
var statearr_34748_35802 = state_34740__$1;
(statearr_34748_35802[(1)] = (5));

} else {
var statearr_34752_35803 = state_34740__$1;
(statearr_34752_35803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (6))){
var state_34740__$1 = state_34740;
var statearr_34753_35804 = state_34740__$1;
(statearr_34753_35804[(2)] = null);

(statearr_34753_35804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (3))){
var inst_34737 = (state_34740[(2)]);
var inst_34738 = cljs.core.async.close_BANG_(out);
var state_34740__$1 = (function (){var statearr_34754 = state_34740;
(statearr_34754[(9)] = inst_34737);

return statearr_34754;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34740__$1,inst_34738);
} else {
if((state_val_34741 === (2))){
var state_34740__$1 = state_34740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34740__$1,(4),ch);
} else {
if((state_val_34741 === (11))){
var inst_34720 = (state_34740[(8)]);
var inst_34729 = (state_34740[(2)]);
var inst_34717 = inst_34720;
var state_34740__$1 = (function (){var statearr_34755 = state_34740;
(statearr_34755[(7)] = inst_34717);

(statearr_34755[(10)] = inst_34729);

return statearr_34755;
})();
var statearr_34756_35806 = state_34740__$1;
(statearr_34756_35806[(2)] = null);

(statearr_34756_35806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (9))){
var inst_34720 = (state_34740[(8)]);
var state_34740__$1 = state_34740;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34740__$1,(11),out,inst_34720);
} else {
if((state_val_34741 === (5))){
var inst_34717 = (state_34740[(7)]);
var inst_34720 = (state_34740[(8)]);
var inst_34724 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34720,inst_34717);
var state_34740__$1 = state_34740;
if(inst_34724){
var statearr_34758_35807 = state_34740__$1;
(statearr_34758_35807[(1)] = (8));

} else {
var statearr_34759_35808 = state_34740__$1;
(statearr_34759_35808[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (10))){
var inst_34732 = (state_34740[(2)]);
var state_34740__$1 = state_34740;
var statearr_34760_35809 = state_34740__$1;
(statearr_34760_35809[(2)] = inst_34732);

(statearr_34760_35809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (8))){
var inst_34717 = (state_34740[(7)]);
var tmp34757 = inst_34717;
var inst_34717__$1 = tmp34757;
var state_34740__$1 = (function (){var statearr_34761 = state_34740;
(statearr_34761[(7)] = inst_34717__$1);

return statearr_34761;
})();
var statearr_34762_35810 = state_34740__$1;
(statearr_34762_35810[(2)] = null);

(statearr_34762_35810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32515__auto__ = null;
var cljs$core$async$state_machine__32515__auto____0 = (function (){
var statearr_34763 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34763[(0)] = cljs$core$async$state_machine__32515__auto__);

(statearr_34763[(1)] = (1));

return statearr_34763;
});
var cljs$core$async$state_machine__32515__auto____1 = (function (state_34740){
while(true){
var ret_value__32516__auto__ = (function (){try{while(true){
var result__32517__auto__ = switch__32514__auto__(state_34740);
if(cljs.core.keyword_identical_QMARK_(result__32517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32517__auto__;
}
break;
}
}catch (e34764){var ex__32518__auto__ = e34764;
var statearr_34765_35811 = state_34740;
(statearr_34765_35811[(2)] = ex__32518__auto__);


if(cljs.core.seq((state_34740[(4)]))){
var statearr_34766_35813 = state_34740;
(statearr_34766_35813[(1)] = cljs.core.first((state_34740[(4)])));

} else {
throw ex__32518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35814 = state_34740;
state_34740 = G__35814;
continue;
} else {
return ret_value__32516__auto__;
}
break;
}
});
cljs$core$async$state_machine__32515__auto__ = function(state_34740){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32515__auto____1.call(this,state_34740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32515__auto____0;
cljs$core$async$state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32515__auto____1;
return cljs$core$async$state_machine__32515__auto__;
})()
})();
var state__32719__auto__ = (function (){var statearr_34767 = f__32718__auto__();
(statearr_34767[(6)] = c__32717__auto___35799);

return statearr_34767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32719__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34769 = arguments.length;
switch (G__34769) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32717__auto___35816 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32718__auto__ = (function (){var switch__32514__auto__ = (function (state_34807){
var state_val_34808 = (state_34807[(1)]);
if((state_val_34808 === (7))){
var inst_34803 = (state_34807[(2)]);
var state_34807__$1 = state_34807;
var statearr_34809_35817 = state_34807__$1;
(statearr_34809_35817[(2)] = inst_34803);

(statearr_34809_35817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (1))){
var inst_34770 = (new Array(n));
var inst_34771 = inst_34770;
var inst_34772 = (0);
var state_34807__$1 = (function (){var statearr_34810 = state_34807;
(statearr_34810[(7)] = inst_34771);

(statearr_34810[(8)] = inst_34772);

return statearr_34810;
})();
var statearr_34811_35818 = state_34807__$1;
(statearr_34811_35818[(2)] = null);

(statearr_34811_35818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (4))){
var inst_34775 = (state_34807[(9)]);
var inst_34775__$1 = (state_34807[(2)]);
var inst_34776 = (inst_34775__$1 == null);
var inst_34777 = cljs.core.not(inst_34776);
var state_34807__$1 = (function (){var statearr_34812 = state_34807;
(statearr_34812[(9)] = inst_34775__$1);

return statearr_34812;
})();
if(inst_34777){
var statearr_34813_35819 = state_34807__$1;
(statearr_34813_35819[(1)] = (5));

} else {
var statearr_34814_35820 = state_34807__$1;
(statearr_34814_35820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (15))){
var inst_34797 = (state_34807[(2)]);
var state_34807__$1 = state_34807;
var statearr_34815_35821 = state_34807__$1;
(statearr_34815_35821[(2)] = inst_34797);

(statearr_34815_35821[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (13))){
var state_34807__$1 = state_34807;
var statearr_34816_35822 = state_34807__$1;
(statearr_34816_35822[(2)] = null);

(statearr_34816_35822[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (6))){
var inst_34772 = (state_34807[(8)]);
var inst_34793 = (inst_34772 > (0));
var state_34807__$1 = state_34807;
if(cljs.core.truth_(inst_34793)){
var statearr_34817_35823 = state_34807__$1;
(statearr_34817_35823[(1)] = (12));

} else {
var statearr_34818_35824 = state_34807__$1;
(statearr_34818_35824[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (3))){
var inst_34805 = (state_34807[(2)]);
var state_34807__$1 = state_34807;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34807__$1,inst_34805);
} else {
if((state_val_34808 === (12))){
var inst_34771 = (state_34807[(7)]);
var inst_34795 = cljs.core.vec(inst_34771);
var state_34807__$1 = state_34807;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34807__$1,(15),out,inst_34795);
} else {
if((state_val_34808 === (2))){
var state_34807__$1 = state_34807;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34807__$1,(4),ch);
} else {
if((state_val_34808 === (11))){
var inst_34787 = (state_34807[(2)]);
var inst_34788 = (new Array(n));
var inst_34771 = inst_34788;
var inst_34772 = (0);
var state_34807__$1 = (function (){var statearr_34820 = state_34807;
(statearr_34820[(10)] = inst_34787);

(statearr_34820[(7)] = inst_34771);

(statearr_34820[(8)] = inst_34772);

return statearr_34820;
})();
var statearr_34821_35825 = state_34807__$1;
(statearr_34821_35825[(2)] = null);

(statearr_34821_35825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (9))){
var inst_34771 = (state_34807[(7)]);
var inst_34785 = cljs.core.vec(inst_34771);
var state_34807__$1 = state_34807;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34807__$1,(11),out,inst_34785);
} else {
if((state_val_34808 === (5))){
var inst_34775 = (state_34807[(9)]);
var inst_34780 = (state_34807[(11)]);
var inst_34771 = (state_34807[(7)]);
var inst_34772 = (state_34807[(8)]);
var inst_34779 = (inst_34771[inst_34772] = inst_34775);
var inst_34780__$1 = (inst_34772 + (1));
var inst_34781 = (inst_34780__$1 < n);
var state_34807__$1 = (function (){var statearr_34822 = state_34807;
(statearr_34822[(11)] = inst_34780__$1);

(statearr_34822[(12)] = inst_34779);

return statearr_34822;
})();
if(cljs.core.truth_(inst_34781)){
var statearr_34823_35826 = state_34807__$1;
(statearr_34823_35826[(1)] = (8));

} else {
var statearr_34824_35827 = state_34807__$1;
(statearr_34824_35827[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (14))){
var inst_34800 = (state_34807[(2)]);
var inst_34801 = cljs.core.async.close_BANG_(out);
var state_34807__$1 = (function (){var statearr_34826 = state_34807;
(statearr_34826[(13)] = inst_34800);

return statearr_34826;
})();
var statearr_34827_35831 = state_34807__$1;
(statearr_34827_35831[(2)] = inst_34801);

(statearr_34827_35831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (10))){
var inst_34791 = (state_34807[(2)]);
var state_34807__$1 = state_34807;
var statearr_34831_35832 = state_34807__$1;
(statearr_34831_35832[(2)] = inst_34791);

(statearr_34831_35832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (8))){
var inst_34780 = (state_34807[(11)]);
var inst_34771 = (state_34807[(7)]);
var tmp34825 = inst_34771;
var inst_34771__$1 = tmp34825;
var inst_34772 = inst_34780;
var state_34807__$1 = (function (){var statearr_34832 = state_34807;
(statearr_34832[(7)] = inst_34771__$1);

(statearr_34832[(8)] = inst_34772);

return statearr_34832;
})();
var statearr_34833_35834 = state_34807__$1;
(statearr_34833_35834[(2)] = null);

(statearr_34833_35834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32515__auto__ = null;
var cljs$core$async$state_machine__32515__auto____0 = (function (){
var statearr_34834 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34834[(0)] = cljs$core$async$state_machine__32515__auto__);

(statearr_34834[(1)] = (1));

return statearr_34834;
});
var cljs$core$async$state_machine__32515__auto____1 = (function (state_34807){
while(true){
var ret_value__32516__auto__ = (function (){try{while(true){
var result__32517__auto__ = switch__32514__auto__(state_34807);
if(cljs.core.keyword_identical_QMARK_(result__32517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32517__auto__;
}
break;
}
}catch (e34835){var ex__32518__auto__ = e34835;
var statearr_34836_35838 = state_34807;
(statearr_34836_35838[(2)] = ex__32518__auto__);


if(cljs.core.seq((state_34807[(4)]))){
var statearr_34837_35839 = state_34807;
(statearr_34837_35839[(1)] = cljs.core.first((state_34807[(4)])));

} else {
throw ex__32518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35844 = state_34807;
state_34807 = G__35844;
continue;
} else {
return ret_value__32516__auto__;
}
break;
}
});
cljs$core$async$state_machine__32515__auto__ = function(state_34807){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32515__auto____1.call(this,state_34807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32515__auto____0;
cljs$core$async$state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32515__auto____1;
return cljs$core$async$state_machine__32515__auto__;
})()
})();
var state__32719__auto__ = (function (){var statearr_34838 = f__32718__auto__();
(statearr_34838[(6)] = c__32717__auto___35816);

return statearr_34838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32719__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34844 = arguments.length;
switch (G__34844) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32717__auto___35847 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32718__auto__ = (function (){var switch__32514__auto__ = (function (state_34889){
var state_val_34890 = (state_34889[(1)]);
if((state_val_34890 === (7))){
var inst_34885 = (state_34889[(2)]);
var state_34889__$1 = state_34889;
var statearr_34891_35849 = state_34889__$1;
(statearr_34891_35849[(2)] = inst_34885);

(statearr_34891_35849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34890 === (1))){
var inst_34845 = [];
var inst_34846 = inst_34845;
var inst_34847 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34889__$1 = (function (){var statearr_34892 = state_34889;
(statearr_34892[(7)] = inst_34846);

(statearr_34892[(8)] = inst_34847);

return statearr_34892;
})();
var statearr_34893_35850 = state_34889__$1;
(statearr_34893_35850[(2)] = null);

(statearr_34893_35850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34890 === (4))){
var inst_34850 = (state_34889[(9)]);
var inst_34850__$1 = (state_34889[(2)]);
var inst_34851 = (inst_34850__$1 == null);
var inst_34852 = cljs.core.not(inst_34851);
var state_34889__$1 = (function (){var statearr_34894 = state_34889;
(statearr_34894[(9)] = inst_34850__$1);

return statearr_34894;
})();
if(inst_34852){
var statearr_34895_35851 = state_34889__$1;
(statearr_34895_35851[(1)] = (5));

} else {
var statearr_34896_35852 = state_34889__$1;
(statearr_34896_35852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34890 === (15))){
var inst_34846 = (state_34889[(7)]);
var inst_34877 = cljs.core.vec(inst_34846);
var state_34889__$1 = state_34889;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34889__$1,(18),out,inst_34877);
} else {
if((state_val_34890 === (13))){
var inst_34872 = (state_34889[(2)]);
var state_34889__$1 = state_34889;
var statearr_34917_35853 = state_34889__$1;
(statearr_34917_35853[(2)] = inst_34872);

(statearr_34917_35853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34890 === (6))){
var inst_34846 = (state_34889[(7)]);
var inst_34874 = inst_34846.length;
var inst_34875 = (inst_34874 > (0));
var state_34889__$1 = state_34889;
if(cljs.core.truth_(inst_34875)){
var statearr_34918_35854 = state_34889__$1;
(statearr_34918_35854[(1)] = (15));

} else {
var statearr_34919_35855 = state_34889__$1;
(statearr_34919_35855[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34890 === (17))){
var inst_34882 = (state_34889[(2)]);
var inst_34883 = cljs.core.async.close_BANG_(out);
var state_34889__$1 = (function (){var statearr_34920 = state_34889;
(statearr_34920[(10)] = inst_34882);

return statearr_34920;
})();
var statearr_34929_35856 = state_34889__$1;
(statearr_34929_35856[(2)] = inst_34883);

(statearr_34929_35856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34890 === (3))){
var inst_34887 = (state_34889[(2)]);
var state_34889__$1 = state_34889;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34889__$1,inst_34887);
} else {
if((state_val_34890 === (12))){
var inst_34846 = (state_34889[(7)]);
var inst_34865 = cljs.core.vec(inst_34846);
var state_34889__$1 = state_34889;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34889__$1,(14),out,inst_34865);
} else {
if((state_val_34890 === (2))){
var state_34889__$1 = state_34889;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34889__$1,(4),ch);
} else {
if((state_val_34890 === (11))){
var inst_34846 = (state_34889[(7)]);
var inst_34850 = (state_34889[(9)]);
var inst_34854 = (state_34889[(11)]);
var inst_34862 = inst_34846.push(inst_34850);
var tmp34936 = inst_34846;
var inst_34846__$1 = tmp34936;
var inst_34847 = inst_34854;
var state_34889__$1 = (function (){var statearr_34943 = state_34889;
(statearr_34943[(12)] = inst_34862);

(statearr_34943[(7)] = inst_34846__$1);

(statearr_34943[(8)] = inst_34847);

return statearr_34943;
})();
var statearr_34946_35857 = state_34889__$1;
(statearr_34946_35857[(2)] = null);

(statearr_34946_35857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34890 === (9))){
var inst_34847 = (state_34889[(8)]);
var inst_34858 = cljs.core.keyword_identical_QMARK_(inst_34847,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34889__$1 = state_34889;
var statearr_34947_35858 = state_34889__$1;
(statearr_34947_35858[(2)] = inst_34858);

(statearr_34947_35858[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34890 === (5))){
var inst_34855 = (state_34889[(13)]);
var inst_34850 = (state_34889[(9)]);
var inst_34847 = (state_34889[(8)]);
var inst_34854 = (state_34889[(11)]);
var inst_34854__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34850) : f.call(null,inst_34850));
var inst_34855__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34854__$1,inst_34847);
var state_34889__$1 = (function (){var statearr_34949 = state_34889;
(statearr_34949[(13)] = inst_34855__$1);

(statearr_34949[(11)] = inst_34854__$1);

return statearr_34949;
})();
if(inst_34855__$1){
var statearr_34950_35859 = state_34889__$1;
(statearr_34950_35859[(1)] = (8));

} else {
var statearr_34951_35860 = state_34889__$1;
(statearr_34951_35860[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34890 === (14))){
var inst_34850 = (state_34889[(9)]);
var inst_34854 = (state_34889[(11)]);
var inst_34867 = (state_34889[(2)]);
var inst_34868 = [];
var inst_34869 = inst_34868.push(inst_34850);
var inst_34846 = inst_34868;
var inst_34847 = inst_34854;
var state_34889__$1 = (function (){var statearr_34952 = state_34889;
(statearr_34952[(14)] = inst_34869);

(statearr_34952[(7)] = inst_34846);

(statearr_34952[(8)] = inst_34847);

(statearr_34952[(15)] = inst_34867);

return statearr_34952;
})();
var statearr_34953_35861 = state_34889__$1;
(statearr_34953_35861[(2)] = null);

(statearr_34953_35861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34890 === (16))){
var state_34889__$1 = state_34889;
var statearr_34954_35862 = state_34889__$1;
(statearr_34954_35862[(2)] = null);

(statearr_34954_35862[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34890 === (10))){
var inst_34860 = (state_34889[(2)]);
var state_34889__$1 = state_34889;
if(cljs.core.truth_(inst_34860)){
var statearr_34955_35863 = state_34889__$1;
(statearr_34955_35863[(1)] = (11));

} else {
var statearr_34956_35864 = state_34889__$1;
(statearr_34956_35864[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34890 === (18))){
var inst_34879 = (state_34889[(2)]);
var state_34889__$1 = state_34889;
var statearr_34957_35866 = state_34889__$1;
(statearr_34957_35866[(2)] = inst_34879);

(statearr_34957_35866[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34890 === (8))){
var inst_34855 = (state_34889[(13)]);
var state_34889__$1 = state_34889;
var statearr_34958_35868 = state_34889__$1;
(statearr_34958_35868[(2)] = inst_34855);

(statearr_34958_35868[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32515__auto__ = null;
var cljs$core$async$state_machine__32515__auto____0 = (function (){
var statearr_34962 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34962[(0)] = cljs$core$async$state_machine__32515__auto__);

(statearr_34962[(1)] = (1));

return statearr_34962;
});
var cljs$core$async$state_machine__32515__auto____1 = (function (state_34889){
while(true){
var ret_value__32516__auto__ = (function (){try{while(true){
var result__32517__auto__ = switch__32514__auto__(state_34889);
if(cljs.core.keyword_identical_QMARK_(result__32517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32517__auto__;
}
break;
}
}catch (e34963){var ex__32518__auto__ = e34963;
var statearr_34964_35870 = state_34889;
(statearr_34964_35870[(2)] = ex__32518__auto__);


if(cljs.core.seq((state_34889[(4)]))){
var statearr_34965_35871 = state_34889;
(statearr_34965_35871[(1)] = cljs.core.first((state_34889[(4)])));

} else {
throw ex__32518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35872 = state_34889;
state_34889 = G__35872;
continue;
} else {
return ret_value__32516__auto__;
}
break;
}
});
cljs$core$async$state_machine__32515__auto__ = function(state_34889){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32515__auto____1.call(this,state_34889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32515__auto____0;
cljs$core$async$state_machine__32515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32515__auto____1;
return cljs$core$async$state_machine__32515__auto__;
})()
})();
var state__32719__auto__ = (function (){var statearr_34966 = f__32718__auto__();
(statearr_34966[(6)] = c__32717__auto___35847);

return statearr_34966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32719__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
