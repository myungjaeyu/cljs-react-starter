goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31214 = arguments.length;
switch (G__31214) {
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

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31215 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31215 = (function (f,blockable,meta31216){
this.f = f;
this.blockable = blockable;
this.meta31216 = meta31216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31217,meta31216__$1){
var self__ = this;
var _31217__$1 = this;
return (new cljs.core.async.t_cljs$core$async31215(self__.f,self__.blockable,meta31216__$1));
});

cljs.core.async.t_cljs$core$async31215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31217){
var self__ = this;
var _31217__$1 = this;
return self__.meta31216;
});

cljs.core.async.t_cljs$core$async31215.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31215.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31215.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31215.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31215.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31216","meta31216",-864226710,null)], null);
});

cljs.core.async.t_cljs$core$async31215.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31215.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31215";

cljs.core.async.t_cljs$core$async31215.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31215");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31215.
 */
cljs.core.async.__GT_t_cljs$core$async31215 = (function cljs$core$async$__GT_t_cljs$core$async31215(f__$1,blockable__$1,meta31216){
return (new cljs.core.async.t_cljs$core$async31215(f__$1,blockable__$1,meta31216));
});

}

return (new cljs.core.async.t_cljs$core$async31215(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

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
var G__31220 = arguments.length;
switch (G__31220) {
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

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__31222 = arguments.length;
switch (G__31222) {
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

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

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
var G__31232 = arguments.length;
switch (G__31232) {
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

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_33084 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33084) : fn1.call(null,val_33084));
} else {
cljs.core.async.impl.dispatch.run(((function (val_33084,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33084) : fn1.call(null,val_33084));
});})(val_33084,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

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
var G__31234 = arguments.length;
switch (G__31234) {
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

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5733__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___33101 = n;
var x_33102 = (0);
while(true){
if((x_33102 < n__4607__auto___33101)){
(a[x_33102] = x_33102);

var G__33104 = (x_33102 + (1));
x_33102 = G__33104;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31235 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31235 = (function (flag,meta31236){
this.flag = flag;
this.meta31236 = meta31236;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31237,meta31236__$1){
var self__ = this;
var _31237__$1 = this;
return (new cljs.core.async.t_cljs$core$async31235(self__.flag,meta31236__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31235.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31237){
var self__ = this;
var _31237__$1 = this;
return self__.meta31236;
});})(flag))
;

cljs.core.async.t_cljs$core$async31235.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31235.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31235.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31235.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31235.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31236","meta31236",624951942,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31235.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31235.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31235";

cljs.core.async.t_cljs$core$async31235.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31235");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31235.
 */
cljs.core.async.__GT_t_cljs$core$async31235 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31235(flag__$1,meta31236){
return (new cljs.core.async.t_cljs$core$async31235(flag__$1,meta31236));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31235(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31258 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31258 = (function (flag,cb,meta31259){
this.flag = flag;
this.cb = cb;
this.meta31259 = meta31259;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31260,meta31259__$1){
var self__ = this;
var _31260__$1 = this;
return (new cljs.core.async.t_cljs$core$async31258(self__.flag,self__.cb,meta31259__$1));
});

cljs.core.async.t_cljs$core$async31258.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31260){
var self__ = this;
var _31260__$1 = this;
return self__.meta31259;
});

cljs.core.async.t_cljs$core$async31258.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31258.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async31258.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31258.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31258.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31259","meta31259",-360839546,null)], null);
});

cljs.core.async.t_cljs$core$async31258.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31258.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31258";

cljs.core.async.t_cljs$core$async31258.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31258");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31258.
 */
cljs.core.async.__GT_t_cljs$core$async31258 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31258(flag__$1,cb__$1,meta31259){
return (new cljs.core.async.t_cljs$core$async31258(flag__$1,cb__$1,meta31259));
});

}

return (new cljs.core.async.t_cljs$core$async31258(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31263_SHARP_){
var G__31266 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31263_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31266) : fret.call(null,G__31266));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31264_SHARP_){
var G__31267 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31264_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31267) : fret.call(null,G__31267));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33115 = (i + (1));
i = G__33115;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
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
var args__4736__auto__ = [];
var len__4730__auto___33122 = arguments.length;
var i__4731__auto___33123 = (0);
while(true){
if((i__4731__auto___33123 < len__4730__auto___33122)){
args__4736__auto__.push((arguments[i__4731__auto___33123]));

var G__33124 = (i__4731__auto___33123 + (1));
i__4731__auto___33123 = G__33124;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31282){
var map__31285 = p__31282;
var map__31285__$1 = (((((!((map__31285 == null))))?(((((map__31285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31285):map__31285);
var opts = map__31285__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31274){
var G__31275 = cljs.core.first(seq31274);
var seq31274__$1 = cljs.core.next(seq31274);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31275,seq31274__$1);
});

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
var G__31300 = arguments.length;
switch (G__31300) {
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

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31155__auto___33129 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31155__auto___33129){
return (function (){
var f__31156__auto__ = (function (){var switch__30907__auto__ = ((function (c__31155__auto___33129){
return (function (state_31338){
var state_val_31339 = (state_31338[(1)]);
if((state_val_31339 === (7))){
var inst_31328 = (state_31338[(2)]);
var state_31338__$1 = state_31338;
var statearr_31343_33130 = state_31338__$1;
(statearr_31343_33130[(2)] = inst_31328);

(statearr_31343_33130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (1))){
var state_31338__$1 = state_31338;
var statearr_31344_33131 = state_31338__$1;
(statearr_31344_33131[(2)] = null);

(statearr_31344_33131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (4))){
var inst_31308 = (state_31338[(7)]);
var inst_31308__$1 = (state_31338[(2)]);
var inst_31312 = (inst_31308__$1 == null);
var state_31338__$1 = (function (){var statearr_31345 = state_31338;
(statearr_31345[(7)] = inst_31308__$1);

return statearr_31345;
})();
if(cljs.core.truth_(inst_31312)){
var statearr_31346_33132 = state_31338__$1;
(statearr_31346_33132[(1)] = (5));

} else {
var statearr_31347_33133 = state_31338__$1;
(statearr_31347_33133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (13))){
var state_31338__$1 = state_31338;
var statearr_31348_33134 = state_31338__$1;
(statearr_31348_33134[(2)] = null);

(statearr_31348_33134[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (6))){
var inst_31308 = (state_31338[(7)]);
var state_31338__$1 = state_31338;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31338__$1,(11),to,inst_31308);
} else {
if((state_val_31339 === (3))){
var inst_31334 = (state_31338[(2)]);
var state_31338__$1 = state_31338;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31338__$1,inst_31334);
} else {
if((state_val_31339 === (12))){
var state_31338__$1 = state_31338;
var statearr_31352_33135 = state_31338__$1;
(statearr_31352_33135[(2)] = null);

(statearr_31352_33135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (2))){
var state_31338__$1 = state_31338;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31338__$1,(4),from);
} else {
if((state_val_31339 === (11))){
var inst_31321 = (state_31338[(2)]);
var state_31338__$1 = state_31338;
if(cljs.core.truth_(inst_31321)){
var statearr_31353_33136 = state_31338__$1;
(statearr_31353_33136[(1)] = (12));

} else {
var statearr_31354_33137 = state_31338__$1;
(statearr_31354_33137[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (9))){
var state_31338__$1 = state_31338;
var statearr_31355_33138 = state_31338__$1;
(statearr_31355_33138[(2)] = null);

(statearr_31355_33138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (5))){
var state_31338__$1 = state_31338;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31356_33139 = state_31338__$1;
(statearr_31356_33139[(1)] = (8));

} else {
var statearr_31357_33140 = state_31338__$1;
(statearr_31357_33140[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (14))){
var inst_31326 = (state_31338[(2)]);
var state_31338__$1 = state_31338;
var statearr_31359_33145 = state_31338__$1;
(statearr_31359_33145[(2)] = inst_31326);

(statearr_31359_33145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (10))){
var inst_31318 = (state_31338[(2)]);
var state_31338__$1 = state_31338;
var statearr_31360_33146 = state_31338__$1;
(statearr_31360_33146[(2)] = inst_31318);

(statearr_31360_33146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (8))){
var inst_31315 = cljs.core.async.close_BANG_(to);
var state_31338__$1 = state_31338;
var statearr_31361_33150 = state_31338__$1;
(statearr_31361_33150[(2)] = inst_31315);

(statearr_31361_33150[(1)] = (10));


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
});})(c__31155__auto___33129))
;
return ((function (switch__30907__auto__,c__31155__auto___33129){
return (function() {
var cljs$core$async$state_machine__30908__auto__ = null;
var cljs$core$async$state_machine__30908__auto____0 = (function (){
var statearr_31362 = [null,null,null,null,null,null,null,null];
(statearr_31362[(0)] = cljs$core$async$state_machine__30908__auto__);

(statearr_31362[(1)] = (1));

return statearr_31362;
});
var cljs$core$async$state_machine__30908__auto____1 = (function (state_31338){
while(true){
var ret_value__30909__auto__ = (function (){try{while(true){
var result__30910__auto__ = switch__30907__auto__(state_31338);
if(cljs.core.keyword_identical_QMARK_(result__30910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30910__auto__;
}
break;
}
}catch (e31363){if((e31363 instanceof Object)){
var ex__30911__auto__ = e31363;
var statearr_31364_33151 = state_31338;
(statearr_31364_33151[(5)] = ex__30911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31363;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33155 = state_31338;
state_31338 = G__33155;
continue;
} else {
return ret_value__30909__auto__;
}
break;
}
});
cljs$core$async$state_machine__30908__auto__ = function(state_31338){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30908__auto____1.call(this,state_31338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30908__auto____0;
cljs$core$async$state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30908__auto____1;
return cljs$core$async$state_machine__30908__auto__;
})()
;})(switch__30907__auto__,c__31155__auto___33129))
})();
var state__31157__auto__ = (function (){var statearr_31365 = (f__31156__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31156__auto__.cljs$core$IFn$_invoke$arity$0() : f__31156__auto__.call(null));
(statearr_31365[(6)] = c__31155__auto___33129);

return statearr_31365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31157__auto__);
});})(c__31155__auto___33129))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__31366){
var vec__31367 = p__31366;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31367,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31367,(1),null);
var job = vec__31367;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__31155__auto___33167 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31155__auto___33167,res,vec__31367,v,p,job,jobs,results){
return (function (){
var f__31156__auto__ = (function (){var switch__30907__auto__ = ((function (c__31155__auto___33167,res,vec__31367,v,p,job,jobs,results){
return (function (state_31374){
var state_val_31375 = (state_31374[(1)]);
if((state_val_31375 === (1))){
var state_31374__$1 = state_31374;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31374__$1,(2),res,v);
} else {
if((state_val_31375 === (2))){
var inst_31371 = (state_31374[(2)]);
var inst_31372 = cljs.core.async.close_BANG_(res);
var state_31374__$1 = (function (){var statearr_31376 = state_31374;
(statearr_31376[(7)] = inst_31371);

return statearr_31376;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31374__$1,inst_31372);
} else {
return null;
}
}
});})(c__31155__auto___33167,res,vec__31367,v,p,job,jobs,results))
;
return ((function (switch__30907__auto__,c__31155__auto___33167,res,vec__31367,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30908__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30908__auto____0 = (function (){
var statearr_31377 = [null,null,null,null,null,null,null,null];
(statearr_31377[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30908__auto__);

(statearr_31377[(1)] = (1));

return statearr_31377;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30908__auto____1 = (function (state_31374){
while(true){
var ret_value__30909__auto__ = (function (){try{while(true){
var result__30910__auto__ = switch__30907__auto__(state_31374);
if(cljs.core.keyword_identical_QMARK_(result__30910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30910__auto__;
}
break;
}
}catch (e31378){if((e31378 instanceof Object)){
var ex__30911__auto__ = e31378;
var statearr_31379_33175 = state_31374;
(statearr_31379_33175[(5)] = ex__30911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31378;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33179 = state_31374;
state_31374 = G__33179;
continue;
} else {
return ret_value__30909__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30908__auto__ = function(state_31374){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30908__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30908__auto____1.call(this,state_31374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30908__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30908__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30908__auto__;
})()
;})(switch__30907__auto__,c__31155__auto___33167,res,vec__31367,v,p,job,jobs,results))
})();
var state__31157__auto__ = (function (){var statearr_31380 = (f__31156__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31156__auto__.cljs$core$IFn$_invoke$arity$0() : f__31156__auto__.call(null));
(statearr_31380[(6)] = c__31155__auto___33167);

return statearr_31380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31157__auto__);
});})(c__31155__auto___33167,res,vec__31367,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31381){
var vec__31382 = p__31381;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31382,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31382,(1),null);
var job = vec__31382;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___33183 = n;
var __33187 = (0);
while(true){
if((__33187 < n__4607__auto___33183)){
var G__31385_33188 = type;
var G__31385_33189__$1 = (((G__31385_33188 instanceof cljs.core.Keyword))?G__31385_33188.fqn:null);
switch (G__31385_33189__$1) {
case "compute":
var c__31155__auto___33191 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33187,c__31155__auto___33191,G__31385_33188,G__31385_33189__$1,n__4607__auto___33183,jobs,results,process,async){
return (function (){
var f__31156__auto__ = (function (){var switch__30907__auto__ = ((function (__33187,c__31155__auto___33191,G__31385_33188,G__31385_33189__$1,n__4607__auto___33183,jobs,results,process,async){
return (function (state_31398){
var state_val_31399 = (state_31398[(1)]);
if((state_val_31399 === (1))){
var state_31398__$1 = state_31398;
var statearr_31400_33205 = state_31398__$1;
(statearr_31400_33205[(2)] = null);

(statearr_31400_33205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31399 === (2))){
var state_31398__$1 = state_31398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31398__$1,(4),jobs);
} else {
if((state_val_31399 === (3))){
var inst_31396 = (state_31398[(2)]);
var state_31398__$1 = state_31398;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31398__$1,inst_31396);
} else {
if((state_val_31399 === (4))){
var inst_31388 = (state_31398[(2)]);
var inst_31389 = process(inst_31388);
var state_31398__$1 = state_31398;
if(cljs.core.truth_(inst_31389)){
var statearr_31401_33212 = state_31398__$1;
(statearr_31401_33212[(1)] = (5));

} else {
var statearr_31402_33216 = state_31398__$1;
(statearr_31402_33216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31399 === (5))){
var state_31398__$1 = state_31398;
var statearr_31403_33283 = state_31398__$1;
(statearr_31403_33283[(2)] = null);

(statearr_31403_33283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31399 === (6))){
var state_31398__$1 = state_31398;
var statearr_31404_33290 = state_31398__$1;
(statearr_31404_33290[(2)] = null);

(statearr_31404_33290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31399 === (7))){
var inst_31394 = (state_31398[(2)]);
var state_31398__$1 = state_31398;
var statearr_31405_33291 = state_31398__$1;
(statearr_31405_33291[(2)] = inst_31394);

(statearr_31405_33291[(1)] = (3));


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
});})(__33187,c__31155__auto___33191,G__31385_33188,G__31385_33189__$1,n__4607__auto___33183,jobs,results,process,async))
;
return ((function (__33187,switch__30907__auto__,c__31155__auto___33191,G__31385_33188,G__31385_33189__$1,n__4607__auto___33183,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30908__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30908__auto____0 = (function (){
var statearr_31406 = [null,null,null,null,null,null,null];
(statearr_31406[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30908__auto__);

(statearr_31406[(1)] = (1));

return statearr_31406;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30908__auto____1 = (function (state_31398){
while(true){
var ret_value__30909__auto__ = (function (){try{while(true){
var result__30910__auto__ = switch__30907__auto__(state_31398);
if(cljs.core.keyword_identical_QMARK_(result__30910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30910__auto__;
}
break;
}
}catch (e31407){if((e31407 instanceof Object)){
var ex__30911__auto__ = e31407;
var statearr_31408_33292 = state_31398;
(statearr_31408_33292[(5)] = ex__30911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31407;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33293 = state_31398;
state_31398 = G__33293;
continue;
} else {
return ret_value__30909__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30908__auto__ = function(state_31398){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30908__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30908__auto____1.call(this,state_31398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30908__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30908__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30908__auto__;
})()
;})(__33187,switch__30907__auto__,c__31155__auto___33191,G__31385_33188,G__31385_33189__$1,n__4607__auto___33183,jobs,results,process,async))
})();
var state__31157__auto__ = (function (){var statearr_31410 = (f__31156__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31156__auto__.cljs$core$IFn$_invoke$arity$0() : f__31156__auto__.call(null));
(statearr_31410[(6)] = c__31155__auto___33191);

return statearr_31410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31157__auto__);
});})(__33187,c__31155__auto___33191,G__31385_33188,G__31385_33189__$1,n__4607__auto___33183,jobs,results,process,async))
);


break;
case "async":
var c__31155__auto___33294 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33187,c__31155__auto___33294,G__31385_33188,G__31385_33189__$1,n__4607__auto___33183,jobs,results,process,async){
return (function (){
var f__31156__auto__ = (function (){var switch__30907__auto__ = ((function (__33187,c__31155__auto___33294,G__31385_33188,G__31385_33189__$1,n__4607__auto___33183,jobs,results,process,async){
return (function (state_31423){
var state_val_31424 = (state_31423[(1)]);
if((state_val_31424 === (1))){
var state_31423__$1 = state_31423;
var statearr_31425_33295 = state_31423__$1;
(statearr_31425_33295[(2)] = null);

(statearr_31425_33295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31424 === (2))){
var state_31423__$1 = state_31423;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31423__$1,(4),jobs);
} else {
if((state_val_31424 === (3))){
var inst_31421 = (state_31423[(2)]);
var state_31423__$1 = state_31423;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31423__$1,inst_31421);
} else {
if((state_val_31424 === (4))){
var inst_31413 = (state_31423[(2)]);
var inst_31414 = async(inst_31413);
var state_31423__$1 = state_31423;
if(cljs.core.truth_(inst_31414)){
var statearr_31426_33296 = state_31423__$1;
(statearr_31426_33296[(1)] = (5));

} else {
var statearr_31427_33297 = state_31423__$1;
(statearr_31427_33297[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31424 === (5))){
var state_31423__$1 = state_31423;
var statearr_31428_33298 = state_31423__$1;
(statearr_31428_33298[(2)] = null);

(statearr_31428_33298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31424 === (6))){
var state_31423__$1 = state_31423;
var statearr_31429_33299 = state_31423__$1;
(statearr_31429_33299[(2)] = null);

(statearr_31429_33299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31424 === (7))){
var inst_31419 = (state_31423[(2)]);
var state_31423__$1 = state_31423;
var statearr_31430_33300 = state_31423__$1;
(statearr_31430_33300[(2)] = inst_31419);

(statearr_31430_33300[(1)] = (3));


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
});})(__33187,c__31155__auto___33294,G__31385_33188,G__31385_33189__$1,n__4607__auto___33183,jobs,results,process,async))
;
return ((function (__33187,switch__30907__auto__,c__31155__auto___33294,G__31385_33188,G__31385_33189__$1,n__4607__auto___33183,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30908__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30908__auto____0 = (function (){
var statearr_31431 = [null,null,null,null,null,null,null];
(statearr_31431[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30908__auto__);

(statearr_31431[(1)] = (1));

return statearr_31431;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30908__auto____1 = (function (state_31423){
while(true){
var ret_value__30909__auto__ = (function (){try{while(true){
var result__30910__auto__ = switch__30907__auto__(state_31423);
if(cljs.core.keyword_identical_QMARK_(result__30910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30910__auto__;
}
break;
}
}catch (e31432){if((e31432 instanceof Object)){
var ex__30911__auto__ = e31432;
var statearr_31433_33301 = state_31423;
(statearr_31433_33301[(5)] = ex__30911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31432;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33302 = state_31423;
state_31423 = G__33302;
continue;
} else {
return ret_value__30909__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30908__auto__ = function(state_31423){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30908__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30908__auto____1.call(this,state_31423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30908__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30908__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30908__auto__;
})()
;})(__33187,switch__30907__auto__,c__31155__auto___33294,G__31385_33188,G__31385_33189__$1,n__4607__auto___33183,jobs,results,process,async))
})();
var state__31157__auto__ = (function (){var statearr_31434 = (f__31156__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31156__auto__.cljs$core$IFn$_invoke$arity$0() : f__31156__auto__.call(null));
(statearr_31434[(6)] = c__31155__auto___33294);

return statearr_31434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31157__auto__);
});})(__33187,c__31155__auto___33294,G__31385_33188,G__31385_33189__$1,n__4607__auto___33183,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31385_33189__$1)].join('')));

}

var G__33303 = (__33187 + (1));
__33187 = G__33303;
continue;
} else {
}
break;
}

var c__31155__auto___33304 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31155__auto___33304,jobs,results,process,async){
return (function (){
var f__31156__auto__ = (function (){var switch__30907__auto__ = ((function (c__31155__auto___33304,jobs,results,process,async){
return (function (state_31456){
var state_val_31457 = (state_31456[(1)]);
if((state_val_31457 === (7))){
var inst_31452 = (state_31456[(2)]);
var state_31456__$1 = state_31456;
var statearr_31458_33305 = state_31456__$1;
(statearr_31458_33305[(2)] = inst_31452);

(statearr_31458_33305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31457 === (1))){
var state_31456__$1 = state_31456;
var statearr_31459_33306 = state_31456__$1;
(statearr_31459_33306[(2)] = null);

(statearr_31459_33306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31457 === (4))){
var inst_31437 = (state_31456[(7)]);
var inst_31437__$1 = (state_31456[(2)]);
var inst_31438 = (inst_31437__$1 == null);
var state_31456__$1 = (function (){var statearr_31460 = state_31456;
(statearr_31460[(7)] = inst_31437__$1);

return statearr_31460;
})();
if(cljs.core.truth_(inst_31438)){
var statearr_31461_33307 = state_31456__$1;
(statearr_31461_33307[(1)] = (5));

} else {
var statearr_31462_33308 = state_31456__$1;
(statearr_31462_33308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31457 === (6))){
var inst_31437 = (state_31456[(7)]);
var inst_31442 = (state_31456[(8)]);
var inst_31442__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31443 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31444 = [inst_31437,inst_31442__$1];
var inst_31445 = (new cljs.core.PersistentVector(null,2,(5),inst_31443,inst_31444,null));
var state_31456__$1 = (function (){var statearr_31463 = state_31456;
(statearr_31463[(8)] = inst_31442__$1);

return statearr_31463;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31456__$1,(8),jobs,inst_31445);
} else {
if((state_val_31457 === (3))){
var inst_31454 = (state_31456[(2)]);
var state_31456__$1 = state_31456;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31456__$1,inst_31454);
} else {
if((state_val_31457 === (2))){
var state_31456__$1 = state_31456;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31456__$1,(4),from);
} else {
if((state_val_31457 === (9))){
var inst_31449 = (state_31456[(2)]);
var state_31456__$1 = (function (){var statearr_31464 = state_31456;
(statearr_31464[(9)] = inst_31449);

return statearr_31464;
})();
var statearr_31465_33311 = state_31456__$1;
(statearr_31465_33311[(2)] = null);

(statearr_31465_33311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31457 === (5))){
var inst_31440 = cljs.core.async.close_BANG_(jobs);
var state_31456__$1 = state_31456;
var statearr_31466_33312 = state_31456__$1;
(statearr_31466_33312[(2)] = inst_31440);

(statearr_31466_33312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31457 === (8))){
var inst_31442 = (state_31456[(8)]);
var inst_31447 = (state_31456[(2)]);
var state_31456__$1 = (function (){var statearr_31467 = state_31456;
(statearr_31467[(10)] = inst_31447);

return statearr_31467;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31456__$1,(9),results,inst_31442);
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
});})(c__31155__auto___33304,jobs,results,process,async))
;
return ((function (switch__30907__auto__,c__31155__auto___33304,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30908__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30908__auto____0 = (function (){
var statearr_31468 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31468[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30908__auto__);

(statearr_31468[(1)] = (1));

return statearr_31468;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30908__auto____1 = (function (state_31456){
while(true){
var ret_value__30909__auto__ = (function (){try{while(true){
var result__30910__auto__ = switch__30907__auto__(state_31456);
if(cljs.core.keyword_identical_QMARK_(result__30910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30910__auto__;
}
break;
}
}catch (e31469){if((e31469 instanceof Object)){
var ex__30911__auto__ = e31469;
var statearr_31470_33313 = state_31456;
(statearr_31470_33313[(5)] = ex__30911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31469;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33314 = state_31456;
state_31456 = G__33314;
continue;
} else {
return ret_value__30909__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30908__auto__ = function(state_31456){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30908__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30908__auto____1.call(this,state_31456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30908__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30908__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30908__auto__;
})()
;})(switch__30907__auto__,c__31155__auto___33304,jobs,results,process,async))
})();
var state__31157__auto__ = (function (){var statearr_31471 = (f__31156__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31156__auto__.cljs$core$IFn$_invoke$arity$0() : f__31156__auto__.call(null));
(statearr_31471[(6)] = c__31155__auto___33304);

return statearr_31471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31157__auto__);
});})(c__31155__auto___33304,jobs,results,process,async))
);


var c__31155__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31155__auto__,jobs,results,process,async){
return (function (){
var f__31156__auto__ = (function (){var switch__30907__auto__ = ((function (c__31155__auto__,jobs,results,process,async){
return (function (state_31509){
var state_val_31510 = (state_31509[(1)]);
if((state_val_31510 === (7))){
var inst_31505 = (state_31509[(2)]);
var state_31509__$1 = state_31509;
var statearr_31511_33315 = state_31509__$1;
(statearr_31511_33315[(2)] = inst_31505);

(statearr_31511_33315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (20))){
var state_31509__$1 = state_31509;
var statearr_31512_33316 = state_31509__$1;
(statearr_31512_33316[(2)] = null);

(statearr_31512_33316[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (1))){
var state_31509__$1 = state_31509;
var statearr_31513_33317 = state_31509__$1;
(statearr_31513_33317[(2)] = null);

(statearr_31513_33317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (4))){
var inst_31474 = (state_31509[(7)]);
var inst_31474__$1 = (state_31509[(2)]);
var inst_31475 = (inst_31474__$1 == null);
var state_31509__$1 = (function (){var statearr_31514 = state_31509;
(statearr_31514[(7)] = inst_31474__$1);

return statearr_31514;
})();
if(cljs.core.truth_(inst_31475)){
var statearr_31515_33318 = state_31509__$1;
(statearr_31515_33318[(1)] = (5));

} else {
var statearr_31516_33319 = state_31509__$1;
(statearr_31516_33319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (15))){
var inst_31487 = (state_31509[(8)]);
var state_31509__$1 = state_31509;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31509__$1,(18),to,inst_31487);
} else {
if((state_val_31510 === (21))){
var inst_31500 = (state_31509[(2)]);
var state_31509__$1 = state_31509;
var statearr_31517_33320 = state_31509__$1;
(statearr_31517_33320[(2)] = inst_31500);

(statearr_31517_33320[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (13))){
var inst_31502 = (state_31509[(2)]);
var state_31509__$1 = (function (){var statearr_31524 = state_31509;
(statearr_31524[(9)] = inst_31502);

return statearr_31524;
})();
var statearr_31525_33321 = state_31509__$1;
(statearr_31525_33321[(2)] = null);

(statearr_31525_33321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (6))){
var inst_31474 = (state_31509[(7)]);
var state_31509__$1 = state_31509;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31509__$1,(11),inst_31474);
} else {
if((state_val_31510 === (17))){
var inst_31495 = (state_31509[(2)]);
var state_31509__$1 = state_31509;
if(cljs.core.truth_(inst_31495)){
var statearr_31526_33322 = state_31509__$1;
(statearr_31526_33322[(1)] = (19));

} else {
var statearr_31527_33323 = state_31509__$1;
(statearr_31527_33323[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (3))){
var inst_31507 = (state_31509[(2)]);
var state_31509__$1 = state_31509;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31509__$1,inst_31507);
} else {
if((state_val_31510 === (12))){
var inst_31484 = (state_31509[(10)]);
var state_31509__$1 = state_31509;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31509__$1,(14),inst_31484);
} else {
if((state_val_31510 === (2))){
var state_31509__$1 = state_31509;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31509__$1,(4),results);
} else {
if((state_val_31510 === (19))){
var state_31509__$1 = state_31509;
var statearr_31552_33325 = state_31509__$1;
(statearr_31552_33325[(2)] = null);

(statearr_31552_33325[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (11))){
var inst_31484 = (state_31509[(2)]);
var state_31509__$1 = (function (){var statearr_31553 = state_31509;
(statearr_31553[(10)] = inst_31484);

return statearr_31553;
})();
var statearr_31554_33326 = state_31509__$1;
(statearr_31554_33326[(2)] = null);

(statearr_31554_33326[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (9))){
var state_31509__$1 = state_31509;
var statearr_31555_33327 = state_31509__$1;
(statearr_31555_33327[(2)] = null);

(statearr_31555_33327[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (5))){
var state_31509__$1 = state_31509;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31556_33328 = state_31509__$1;
(statearr_31556_33328[(1)] = (8));

} else {
var statearr_31557_33329 = state_31509__$1;
(statearr_31557_33329[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (14))){
var inst_31487 = (state_31509[(8)]);
var inst_31489 = (state_31509[(11)]);
var inst_31487__$1 = (state_31509[(2)]);
var inst_31488 = (inst_31487__$1 == null);
var inst_31489__$1 = cljs.core.not(inst_31488);
var state_31509__$1 = (function (){var statearr_31558 = state_31509;
(statearr_31558[(8)] = inst_31487__$1);

(statearr_31558[(11)] = inst_31489__$1);

return statearr_31558;
})();
if(inst_31489__$1){
var statearr_31559_33334 = state_31509__$1;
(statearr_31559_33334[(1)] = (15));

} else {
var statearr_31560_33335 = state_31509__$1;
(statearr_31560_33335[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (16))){
var inst_31489 = (state_31509[(11)]);
var state_31509__$1 = state_31509;
var statearr_31563_33336 = state_31509__$1;
(statearr_31563_33336[(2)] = inst_31489);

(statearr_31563_33336[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (10))){
var inst_31481 = (state_31509[(2)]);
var state_31509__$1 = state_31509;
var statearr_31564_33337 = state_31509__$1;
(statearr_31564_33337[(2)] = inst_31481);

(statearr_31564_33337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (18))){
var inst_31492 = (state_31509[(2)]);
var state_31509__$1 = state_31509;
var statearr_31565_33338 = state_31509__$1;
(statearr_31565_33338[(2)] = inst_31492);

(statearr_31565_33338[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (8))){
var inst_31478 = cljs.core.async.close_BANG_(to);
var state_31509__$1 = state_31509;
var statearr_31566_33339 = state_31509__$1;
(statearr_31566_33339[(2)] = inst_31478);

(statearr_31566_33339[(1)] = (10));


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
});})(c__31155__auto__,jobs,results,process,async))
;
return ((function (switch__30907__auto__,c__31155__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30908__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30908__auto____0 = (function (){
var statearr_31567 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31567[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30908__auto__);

(statearr_31567[(1)] = (1));

return statearr_31567;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30908__auto____1 = (function (state_31509){
while(true){
var ret_value__30909__auto__ = (function (){try{while(true){
var result__30910__auto__ = switch__30907__auto__(state_31509);
if(cljs.core.keyword_identical_QMARK_(result__30910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30910__auto__;
}
break;
}
}catch (e31568){if((e31568 instanceof Object)){
var ex__30911__auto__ = e31568;
var statearr_31569_33340 = state_31509;
(statearr_31569_33340[(5)] = ex__30911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31568;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33341 = state_31509;
state_31509 = G__33341;
continue;
} else {
return ret_value__30909__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30908__auto__ = function(state_31509){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30908__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30908__auto____1.call(this,state_31509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30908__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30908__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30908__auto__;
})()
;})(switch__30907__auto__,c__31155__auto__,jobs,results,process,async))
})();
var state__31157__auto__ = (function (){var statearr_31570 = (f__31156__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31156__auto__.cljs$core$IFn$_invoke$arity$0() : f__31156__auto__.call(null));
(statearr_31570[(6)] = c__31155__auto__);

return statearr_31570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31157__auto__);
});})(c__31155__auto__,jobs,results,process,async))
);

return c__31155__auto__;
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
var G__31572 = arguments.length;
switch (G__31572) {
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

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var G__31574 = arguments.length;
switch (G__31574) {
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

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var G__31576 = arguments.length;
switch (G__31576) {
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

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__31155__auto___33361 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31155__auto___33361,tc,fc){
return (function (){
var f__31156__auto__ = (function (){var switch__30907__auto__ = ((function (c__31155__auto___33361,tc,fc){
return (function (state_31602){
var state_val_31603 = (state_31602[(1)]);
if((state_val_31603 === (7))){
var inst_31598 = (state_31602[(2)]);
var state_31602__$1 = state_31602;
var statearr_31604_33362 = state_31602__$1;
(statearr_31604_33362[(2)] = inst_31598);

(statearr_31604_33362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (1))){
var state_31602__$1 = state_31602;
var statearr_31605_33363 = state_31602__$1;
(statearr_31605_33363[(2)] = null);

(statearr_31605_33363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (4))){
var inst_31579 = (state_31602[(7)]);
var inst_31579__$1 = (state_31602[(2)]);
var inst_31580 = (inst_31579__$1 == null);
var state_31602__$1 = (function (){var statearr_31606 = state_31602;
(statearr_31606[(7)] = inst_31579__$1);

return statearr_31606;
})();
if(cljs.core.truth_(inst_31580)){
var statearr_31607_33364 = state_31602__$1;
(statearr_31607_33364[(1)] = (5));

} else {
var statearr_31608_33365 = state_31602__$1;
(statearr_31608_33365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (13))){
var state_31602__$1 = state_31602;
var statearr_31609_33366 = state_31602__$1;
(statearr_31609_33366[(2)] = null);

(statearr_31609_33366[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (6))){
var inst_31579 = (state_31602[(7)]);
var inst_31585 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31579) : p.call(null,inst_31579));
var state_31602__$1 = state_31602;
if(cljs.core.truth_(inst_31585)){
var statearr_31610_33367 = state_31602__$1;
(statearr_31610_33367[(1)] = (9));

} else {
var statearr_31611_33368 = state_31602__$1;
(statearr_31611_33368[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (3))){
var inst_31600 = (state_31602[(2)]);
var state_31602__$1 = state_31602;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31602__$1,inst_31600);
} else {
if((state_val_31603 === (12))){
var state_31602__$1 = state_31602;
var statearr_31612_33369 = state_31602__$1;
(statearr_31612_33369[(2)] = null);

(statearr_31612_33369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (2))){
var state_31602__$1 = state_31602;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31602__$1,(4),ch);
} else {
if((state_val_31603 === (11))){
var inst_31579 = (state_31602[(7)]);
var inst_31589 = (state_31602[(2)]);
var state_31602__$1 = state_31602;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31602__$1,(8),inst_31589,inst_31579);
} else {
if((state_val_31603 === (9))){
var state_31602__$1 = state_31602;
var statearr_31614_33370 = state_31602__$1;
(statearr_31614_33370[(2)] = tc);

(statearr_31614_33370[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (5))){
var inst_31582 = cljs.core.async.close_BANG_(tc);
var inst_31583 = cljs.core.async.close_BANG_(fc);
var state_31602__$1 = (function (){var statearr_31615 = state_31602;
(statearr_31615[(8)] = inst_31582);

return statearr_31615;
})();
var statearr_31616_33371 = state_31602__$1;
(statearr_31616_33371[(2)] = inst_31583);

(statearr_31616_33371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (14))){
var inst_31596 = (state_31602[(2)]);
var state_31602__$1 = state_31602;
var statearr_31617_33373 = state_31602__$1;
(statearr_31617_33373[(2)] = inst_31596);

(statearr_31617_33373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (10))){
var state_31602__$1 = state_31602;
var statearr_31618_33377 = state_31602__$1;
(statearr_31618_33377[(2)] = fc);

(statearr_31618_33377[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (8))){
var inst_31591 = (state_31602[(2)]);
var state_31602__$1 = state_31602;
if(cljs.core.truth_(inst_31591)){
var statearr_31619_33378 = state_31602__$1;
(statearr_31619_33378[(1)] = (12));

} else {
var statearr_31620_33379 = state_31602__$1;
(statearr_31620_33379[(1)] = (13));

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
});})(c__31155__auto___33361,tc,fc))
;
return ((function (switch__30907__auto__,c__31155__auto___33361,tc,fc){
return (function() {
var cljs$core$async$state_machine__30908__auto__ = null;
var cljs$core$async$state_machine__30908__auto____0 = (function (){
var statearr_31621 = [null,null,null,null,null,null,null,null,null];
(statearr_31621[(0)] = cljs$core$async$state_machine__30908__auto__);

(statearr_31621[(1)] = (1));

return statearr_31621;
});
var cljs$core$async$state_machine__30908__auto____1 = (function (state_31602){
while(true){
var ret_value__30909__auto__ = (function (){try{while(true){
var result__30910__auto__ = switch__30907__auto__(state_31602);
if(cljs.core.keyword_identical_QMARK_(result__30910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30910__auto__;
}
break;
}
}catch (e31622){if((e31622 instanceof Object)){
var ex__30911__auto__ = e31622;
var statearr_31623_33380 = state_31602;
(statearr_31623_33380[(5)] = ex__30911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31622;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33381 = state_31602;
state_31602 = G__33381;
continue;
} else {
return ret_value__30909__auto__;
}
break;
}
});
cljs$core$async$state_machine__30908__auto__ = function(state_31602){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30908__auto____1.call(this,state_31602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30908__auto____0;
cljs$core$async$state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30908__auto____1;
return cljs$core$async$state_machine__30908__auto__;
})()
;})(switch__30907__auto__,c__31155__auto___33361,tc,fc))
})();
var state__31157__auto__ = (function (){var statearr_31624 = (f__31156__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31156__auto__.cljs$core$IFn$_invoke$arity$0() : f__31156__auto__.call(null));
(statearr_31624[(6)] = c__31155__auto___33361);

return statearr_31624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31157__auto__);
});})(c__31155__auto___33361,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__31155__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31155__auto__){
return (function (){
var f__31156__auto__ = (function (){var switch__30907__auto__ = ((function (c__31155__auto__){
return (function (state_31650){
var state_val_31651 = (state_31650[(1)]);
if((state_val_31651 === (7))){
var inst_31646 = (state_31650[(2)]);
var state_31650__$1 = state_31650;
var statearr_31652_33398 = state_31650__$1;
(statearr_31652_33398[(2)] = inst_31646);

(statearr_31652_33398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (1))){
var inst_31630 = init;
var state_31650__$1 = (function (){var statearr_31653 = state_31650;
(statearr_31653[(7)] = inst_31630);

return statearr_31653;
})();
var statearr_31654_33399 = state_31650__$1;
(statearr_31654_33399[(2)] = null);

(statearr_31654_33399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (4))){
var inst_31633 = (state_31650[(8)]);
var inst_31633__$1 = (state_31650[(2)]);
var inst_31634 = (inst_31633__$1 == null);
var state_31650__$1 = (function (){var statearr_31655 = state_31650;
(statearr_31655[(8)] = inst_31633__$1);

return statearr_31655;
})();
if(cljs.core.truth_(inst_31634)){
var statearr_31656_33400 = state_31650__$1;
(statearr_31656_33400[(1)] = (5));

} else {
var statearr_31657_33401 = state_31650__$1;
(statearr_31657_33401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (6))){
var inst_31633 = (state_31650[(8)]);
var inst_31630 = (state_31650[(7)]);
var inst_31637 = (state_31650[(9)]);
var inst_31637__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31630,inst_31633) : f.call(null,inst_31630,inst_31633));
var inst_31638 = cljs.core.reduced_QMARK_(inst_31637__$1);
var state_31650__$1 = (function (){var statearr_31658 = state_31650;
(statearr_31658[(9)] = inst_31637__$1);

return statearr_31658;
})();
if(inst_31638){
var statearr_31659_33402 = state_31650__$1;
(statearr_31659_33402[(1)] = (8));

} else {
var statearr_31660_33403 = state_31650__$1;
(statearr_31660_33403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (3))){
var inst_31648 = (state_31650[(2)]);
var state_31650__$1 = state_31650;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31650__$1,inst_31648);
} else {
if((state_val_31651 === (2))){
var state_31650__$1 = state_31650;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31650__$1,(4),ch);
} else {
if((state_val_31651 === (9))){
var inst_31637 = (state_31650[(9)]);
var inst_31630 = inst_31637;
var state_31650__$1 = (function (){var statearr_31661 = state_31650;
(statearr_31661[(7)] = inst_31630);

return statearr_31661;
})();
var statearr_31662_33404 = state_31650__$1;
(statearr_31662_33404[(2)] = null);

(statearr_31662_33404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (5))){
var inst_31630 = (state_31650[(7)]);
var state_31650__$1 = state_31650;
var statearr_31663_33405 = state_31650__$1;
(statearr_31663_33405[(2)] = inst_31630);

(statearr_31663_33405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (10))){
var inst_31644 = (state_31650[(2)]);
var state_31650__$1 = state_31650;
var statearr_31664_33406 = state_31650__$1;
(statearr_31664_33406[(2)] = inst_31644);

(statearr_31664_33406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (8))){
var inst_31637 = (state_31650[(9)]);
var inst_31640 = cljs.core.deref(inst_31637);
var state_31650__$1 = state_31650;
var statearr_31665_33407 = state_31650__$1;
(statearr_31665_33407[(2)] = inst_31640);

(statearr_31665_33407[(1)] = (10));


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
});})(c__31155__auto__))
;
return ((function (switch__30907__auto__,c__31155__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30908__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30908__auto____0 = (function (){
var statearr_31666 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31666[(0)] = cljs$core$async$reduce_$_state_machine__30908__auto__);

(statearr_31666[(1)] = (1));

return statearr_31666;
});
var cljs$core$async$reduce_$_state_machine__30908__auto____1 = (function (state_31650){
while(true){
var ret_value__30909__auto__ = (function (){try{while(true){
var result__30910__auto__ = switch__30907__auto__(state_31650);
if(cljs.core.keyword_identical_QMARK_(result__30910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30910__auto__;
}
break;
}
}catch (e31667){if((e31667 instanceof Object)){
var ex__30911__auto__ = e31667;
var statearr_31668_33408 = state_31650;
(statearr_31668_33408[(5)] = ex__30911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31667;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33409 = state_31650;
state_31650 = G__33409;
continue;
} else {
return ret_value__30909__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30908__auto__ = function(state_31650){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30908__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30908__auto____1.call(this,state_31650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30908__auto____0;
cljs$core$async$reduce_$_state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30908__auto____1;
return cljs$core$async$reduce_$_state_machine__30908__auto__;
})()
;})(switch__30907__auto__,c__31155__auto__))
})();
var state__31157__auto__ = (function (){var statearr_31673 = (f__31156__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31156__auto__.cljs$core$IFn$_invoke$arity$0() : f__31156__auto__.call(null));
(statearr_31673[(6)] = c__31155__auto__);

return statearr_31673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31157__auto__);
});})(c__31155__auto__))
);

return c__31155__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__31155__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31155__auto__,f__$1){
return (function (){
var f__31156__auto__ = (function (){var switch__30907__auto__ = ((function (c__31155__auto__,f__$1){
return (function (state_31703){
var state_val_31704 = (state_31703[(1)]);
if((state_val_31704 === (1))){
var inst_31698 = cljs.core.async.reduce(f__$1,init,ch);
var state_31703__$1 = state_31703;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31703__$1,(2),inst_31698);
} else {
if((state_val_31704 === (2))){
var inst_31700 = (state_31703[(2)]);
var inst_31701 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31700) : f__$1.call(null,inst_31700));
var state_31703__$1 = state_31703;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31703__$1,inst_31701);
} else {
return null;
}
}
});})(c__31155__auto__,f__$1))
;
return ((function (switch__30907__auto__,c__31155__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__30908__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30908__auto____0 = (function (){
var statearr_31705 = [null,null,null,null,null,null,null];
(statearr_31705[(0)] = cljs$core$async$transduce_$_state_machine__30908__auto__);

(statearr_31705[(1)] = (1));

return statearr_31705;
});
var cljs$core$async$transduce_$_state_machine__30908__auto____1 = (function (state_31703){
while(true){
var ret_value__30909__auto__ = (function (){try{while(true){
var result__30910__auto__ = switch__30907__auto__(state_31703);
if(cljs.core.keyword_identical_QMARK_(result__30910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30910__auto__;
}
break;
}
}catch (e31706){if((e31706 instanceof Object)){
var ex__30911__auto__ = e31706;
var statearr_31707_33410 = state_31703;
(statearr_31707_33410[(5)] = ex__30911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31706;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33411 = state_31703;
state_31703 = G__33411;
continue;
} else {
return ret_value__30909__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30908__auto__ = function(state_31703){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30908__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30908__auto____1.call(this,state_31703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30908__auto____0;
cljs$core$async$transduce_$_state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30908__auto____1;
return cljs$core$async$transduce_$_state_machine__30908__auto__;
})()
;})(switch__30907__auto__,c__31155__auto__,f__$1))
})();
var state__31157__auto__ = (function (){var statearr_31708 = (f__31156__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31156__auto__.cljs$core$IFn$_invoke$arity$0() : f__31156__auto__.call(null));
(statearr_31708[(6)] = c__31155__auto__);

return statearr_31708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31157__auto__);
});})(c__31155__auto__,f__$1))
);

return c__31155__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31710 = arguments.length;
switch (G__31710) {
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

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31155__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31155__auto__){
return (function (){
var f__31156__auto__ = (function (){var switch__30907__auto__ = ((function (c__31155__auto__){
return (function (state_31735){
var state_val_31736 = (state_31735[(1)]);
if((state_val_31736 === (7))){
var inst_31717 = (state_31735[(2)]);
var state_31735__$1 = state_31735;
var statearr_31742_33413 = state_31735__$1;
(statearr_31742_33413[(2)] = inst_31717);

(statearr_31742_33413[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (1))){
var inst_31711 = cljs.core.seq(coll);
var inst_31712 = inst_31711;
var state_31735__$1 = (function (){var statearr_31743 = state_31735;
(statearr_31743[(7)] = inst_31712);

return statearr_31743;
})();
var statearr_31744_33414 = state_31735__$1;
(statearr_31744_33414[(2)] = null);

(statearr_31744_33414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (4))){
var inst_31712 = (state_31735[(7)]);
var inst_31715 = cljs.core.first(inst_31712);
var state_31735__$1 = state_31735;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31735__$1,(7),ch,inst_31715);
} else {
if((state_val_31736 === (13))){
var inst_31729 = (state_31735[(2)]);
var state_31735__$1 = state_31735;
var statearr_31746_33415 = state_31735__$1;
(statearr_31746_33415[(2)] = inst_31729);

(statearr_31746_33415[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (6))){
var inst_31720 = (state_31735[(2)]);
var state_31735__$1 = state_31735;
if(cljs.core.truth_(inst_31720)){
var statearr_31747_33416 = state_31735__$1;
(statearr_31747_33416[(1)] = (8));

} else {
var statearr_31748_33417 = state_31735__$1;
(statearr_31748_33417[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (3))){
var inst_31733 = (state_31735[(2)]);
var state_31735__$1 = state_31735;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31735__$1,inst_31733);
} else {
if((state_val_31736 === (12))){
var state_31735__$1 = state_31735;
var statearr_31749_33418 = state_31735__$1;
(statearr_31749_33418[(2)] = null);

(statearr_31749_33418[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (2))){
var inst_31712 = (state_31735[(7)]);
var state_31735__$1 = state_31735;
if(cljs.core.truth_(inst_31712)){
var statearr_31750_33419 = state_31735__$1;
(statearr_31750_33419[(1)] = (4));

} else {
var statearr_31751_33420 = state_31735__$1;
(statearr_31751_33420[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (11))){
var inst_31726 = cljs.core.async.close_BANG_(ch);
var state_31735__$1 = state_31735;
var statearr_31752_33421 = state_31735__$1;
(statearr_31752_33421[(2)] = inst_31726);

(statearr_31752_33421[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (9))){
var state_31735__$1 = state_31735;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31753_33432 = state_31735__$1;
(statearr_31753_33432[(1)] = (11));

} else {
var statearr_31754_33433 = state_31735__$1;
(statearr_31754_33433[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (5))){
var inst_31712 = (state_31735[(7)]);
var state_31735__$1 = state_31735;
var statearr_31755_33434 = state_31735__$1;
(statearr_31755_33434[(2)] = inst_31712);

(statearr_31755_33434[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (10))){
var inst_31731 = (state_31735[(2)]);
var state_31735__$1 = state_31735;
var statearr_31756_33436 = state_31735__$1;
(statearr_31756_33436[(2)] = inst_31731);

(statearr_31756_33436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (8))){
var inst_31712 = (state_31735[(7)]);
var inst_31722 = cljs.core.next(inst_31712);
var inst_31712__$1 = inst_31722;
var state_31735__$1 = (function (){var statearr_31757 = state_31735;
(statearr_31757[(7)] = inst_31712__$1);

return statearr_31757;
})();
var statearr_31758_33437 = state_31735__$1;
(statearr_31758_33437[(2)] = null);

(statearr_31758_33437[(1)] = (2));


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
});})(c__31155__auto__))
;
return ((function (switch__30907__auto__,c__31155__auto__){
return (function() {
var cljs$core$async$state_machine__30908__auto__ = null;
var cljs$core$async$state_machine__30908__auto____0 = (function (){
var statearr_31759 = [null,null,null,null,null,null,null,null];
(statearr_31759[(0)] = cljs$core$async$state_machine__30908__auto__);

(statearr_31759[(1)] = (1));

return statearr_31759;
});
var cljs$core$async$state_machine__30908__auto____1 = (function (state_31735){
while(true){
var ret_value__30909__auto__ = (function (){try{while(true){
var result__30910__auto__ = switch__30907__auto__(state_31735);
if(cljs.core.keyword_identical_QMARK_(result__30910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30910__auto__;
}
break;
}
}catch (e31760){if((e31760 instanceof Object)){
var ex__30911__auto__ = e31760;
var statearr_31761_33445 = state_31735;
(statearr_31761_33445[(5)] = ex__30911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31760;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33446 = state_31735;
state_31735 = G__33446;
continue;
} else {
return ret_value__30909__auto__;
}
break;
}
});
cljs$core$async$state_machine__30908__auto__ = function(state_31735){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30908__auto____1.call(this,state_31735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30908__auto____0;
cljs$core$async$state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30908__auto____1;
return cljs$core$async$state_machine__30908__auto__;
})()
;})(switch__30907__auto__,c__31155__auto__))
})();
var state__31157__auto__ = (function (){var statearr_31762 = (f__31156__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31156__auto__.cljs$core$IFn$_invoke$arity$0() : f__31156__auto__.call(null));
(statearr_31762[(6)] = c__31155__auto__);

return statearr_31762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31157__auto__);
});})(c__31155__auto__))
);

return c__31155__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31766 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31766 = (function (ch,cs,meta31767){
this.ch = ch;
this.cs = cs;
this.meta31767 = meta31767;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31768,meta31767__$1){
var self__ = this;
var _31768__$1 = this;
return (new cljs.core.async.t_cljs$core$async31766(self__.ch,self__.cs,meta31767__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31766.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31768){
var self__ = this;
var _31768__$1 = this;
return self__.meta31767;
});})(cs))
;

cljs.core.async.t_cljs$core$async31766.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31766.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31766.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31766.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31766.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31766.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31766.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31767","meta31767",1171133532,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31766.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31766.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31766";

cljs.core.async.t_cljs$core$async31766.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31766");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31766.
 */
cljs.core.async.__GT_t_cljs$core$async31766 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31766(ch__$1,cs__$1,meta31767){
return (new cljs.core.async.t_cljs$core$async31766(ch__$1,cs__$1,meta31767));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31766(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__31155__auto___33456 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31155__auto___33456,cs,m,dchan,dctr,done){
return (function (){
var f__31156__auto__ = (function (){var switch__30907__auto__ = ((function (c__31155__auto___33456,cs,m,dchan,dctr,done){
return (function (state_31921){
var state_val_31922 = (state_31921[(1)]);
if((state_val_31922 === (7))){
var inst_31917 = (state_31921[(2)]);
var state_31921__$1 = state_31921;
var statearr_31923_33457 = state_31921__$1;
(statearr_31923_33457[(2)] = inst_31917);

(statearr_31923_33457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (20))){
var inst_31820 = (state_31921[(7)]);
var inst_31832 = cljs.core.first(inst_31820);
var inst_31833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31832,(0),null);
var inst_31834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31832,(1),null);
var state_31921__$1 = (function (){var statearr_31924 = state_31921;
(statearr_31924[(8)] = inst_31833);

return statearr_31924;
})();
if(cljs.core.truth_(inst_31834)){
var statearr_31925_33459 = state_31921__$1;
(statearr_31925_33459[(1)] = (22));

} else {
var statearr_31926_33460 = state_31921__$1;
(statearr_31926_33460[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (27))){
var inst_31862 = (state_31921[(9)]);
var inst_31864 = (state_31921[(10)]);
var inst_31789 = (state_31921[(11)]);
var inst_31869 = (state_31921[(12)]);
var inst_31869__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31862,inst_31864);
var inst_31870 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31869__$1,inst_31789,done);
var state_31921__$1 = (function (){var statearr_31927 = state_31921;
(statearr_31927[(12)] = inst_31869__$1);

return statearr_31927;
})();
if(cljs.core.truth_(inst_31870)){
var statearr_31928_33465 = state_31921__$1;
(statearr_31928_33465[(1)] = (30));

} else {
var statearr_31929_33466 = state_31921__$1;
(statearr_31929_33466[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (1))){
var state_31921__$1 = state_31921;
var statearr_31930_33467 = state_31921__$1;
(statearr_31930_33467[(2)] = null);

(statearr_31930_33467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (24))){
var inst_31820 = (state_31921[(7)]);
var inst_31839 = (state_31921[(2)]);
var inst_31840 = cljs.core.next(inst_31820);
var inst_31798 = inst_31840;
var inst_31799 = null;
var inst_31800 = (0);
var inst_31801 = (0);
var state_31921__$1 = (function (){var statearr_31931 = state_31921;
(statearr_31931[(13)] = inst_31801);

(statearr_31931[(14)] = inst_31800);

(statearr_31931[(15)] = inst_31839);

(statearr_31931[(16)] = inst_31798);

(statearr_31931[(17)] = inst_31799);

return statearr_31931;
})();
var statearr_31932_33469 = state_31921__$1;
(statearr_31932_33469[(2)] = null);

(statearr_31932_33469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (39))){
var state_31921__$1 = state_31921;
var statearr_31936_33470 = state_31921__$1;
(statearr_31936_33470[(2)] = null);

(statearr_31936_33470[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (4))){
var inst_31789 = (state_31921[(11)]);
var inst_31789__$1 = (state_31921[(2)]);
var inst_31790 = (inst_31789__$1 == null);
var state_31921__$1 = (function (){var statearr_31941 = state_31921;
(statearr_31941[(11)] = inst_31789__$1);

return statearr_31941;
})();
if(cljs.core.truth_(inst_31790)){
var statearr_31942_33478 = state_31921__$1;
(statearr_31942_33478[(1)] = (5));

} else {
var statearr_31948_33479 = state_31921__$1;
(statearr_31948_33479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (15))){
var inst_31801 = (state_31921[(13)]);
var inst_31800 = (state_31921[(14)]);
var inst_31798 = (state_31921[(16)]);
var inst_31799 = (state_31921[(17)]);
var inst_31816 = (state_31921[(2)]);
var inst_31817 = (inst_31801 + (1));
var tmp31933 = inst_31800;
var tmp31934 = inst_31798;
var tmp31935 = inst_31799;
var inst_31798__$1 = tmp31934;
var inst_31799__$1 = tmp31935;
var inst_31800__$1 = tmp31933;
var inst_31801__$1 = inst_31817;
var state_31921__$1 = (function (){var statearr_31949 = state_31921;
(statearr_31949[(13)] = inst_31801__$1);

(statearr_31949[(14)] = inst_31800__$1);

(statearr_31949[(18)] = inst_31816);

(statearr_31949[(16)] = inst_31798__$1);

(statearr_31949[(17)] = inst_31799__$1);

return statearr_31949;
})();
var statearr_31950_33480 = state_31921__$1;
(statearr_31950_33480[(2)] = null);

(statearr_31950_33480[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (21))){
var inst_31843 = (state_31921[(2)]);
var state_31921__$1 = state_31921;
var statearr_31954_33481 = state_31921__$1;
(statearr_31954_33481[(2)] = inst_31843);

(statearr_31954_33481[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (31))){
var inst_31869 = (state_31921[(12)]);
var inst_31873 = done(null);
var inst_31874 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31869);
var state_31921__$1 = (function (){var statearr_31959 = state_31921;
(statearr_31959[(19)] = inst_31873);

return statearr_31959;
})();
var statearr_31960_33482 = state_31921__$1;
(statearr_31960_33482[(2)] = inst_31874);

(statearr_31960_33482[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (32))){
var inst_31862 = (state_31921[(9)]);
var inst_31864 = (state_31921[(10)]);
var inst_31863 = (state_31921[(20)]);
var inst_31861 = (state_31921[(21)]);
var inst_31876 = (state_31921[(2)]);
var inst_31877 = (inst_31864 + (1));
var tmp31951 = inst_31862;
var tmp31952 = inst_31863;
var tmp31953 = inst_31861;
var inst_31861__$1 = tmp31953;
var inst_31862__$1 = tmp31951;
var inst_31863__$1 = tmp31952;
var inst_31864__$1 = inst_31877;
var state_31921__$1 = (function (){var statearr_31961 = state_31921;
(statearr_31961[(9)] = inst_31862__$1);

(statearr_31961[(10)] = inst_31864__$1);

(statearr_31961[(20)] = inst_31863__$1);

(statearr_31961[(21)] = inst_31861__$1);

(statearr_31961[(22)] = inst_31876);

return statearr_31961;
})();
var statearr_31962_33483 = state_31921__$1;
(statearr_31962_33483[(2)] = null);

(statearr_31962_33483[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (40))){
var inst_31889 = (state_31921[(23)]);
var inst_31893 = done(null);
var inst_31894 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31889);
var state_31921__$1 = (function (){var statearr_31963 = state_31921;
(statearr_31963[(24)] = inst_31893);

return statearr_31963;
})();
var statearr_31964_33485 = state_31921__$1;
(statearr_31964_33485[(2)] = inst_31894);

(statearr_31964_33485[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (33))){
var inst_31880 = (state_31921[(25)]);
var inst_31882 = cljs.core.chunked_seq_QMARK_(inst_31880);
var state_31921__$1 = state_31921;
if(inst_31882){
var statearr_31965_33486 = state_31921__$1;
(statearr_31965_33486[(1)] = (36));

} else {
var statearr_31966_33487 = state_31921__$1;
(statearr_31966_33487[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (13))){
var inst_31810 = (state_31921[(26)]);
var inst_31813 = cljs.core.async.close_BANG_(inst_31810);
var state_31921__$1 = state_31921;
var statearr_31967_33488 = state_31921__$1;
(statearr_31967_33488[(2)] = inst_31813);

(statearr_31967_33488[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (22))){
var inst_31833 = (state_31921[(8)]);
var inst_31836 = cljs.core.async.close_BANG_(inst_31833);
var state_31921__$1 = state_31921;
var statearr_31968_33490 = state_31921__$1;
(statearr_31968_33490[(2)] = inst_31836);

(statearr_31968_33490[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (36))){
var inst_31880 = (state_31921[(25)]);
var inst_31884 = cljs.core.chunk_first(inst_31880);
var inst_31885 = cljs.core.chunk_rest(inst_31880);
var inst_31886 = cljs.core.count(inst_31884);
var inst_31861 = inst_31885;
var inst_31862 = inst_31884;
var inst_31863 = inst_31886;
var inst_31864 = (0);
var state_31921__$1 = (function (){var statearr_31969 = state_31921;
(statearr_31969[(9)] = inst_31862);

(statearr_31969[(10)] = inst_31864);

(statearr_31969[(20)] = inst_31863);

(statearr_31969[(21)] = inst_31861);

return statearr_31969;
})();
var statearr_31970_33491 = state_31921__$1;
(statearr_31970_33491[(2)] = null);

(statearr_31970_33491[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (41))){
var inst_31880 = (state_31921[(25)]);
var inst_31896 = (state_31921[(2)]);
var inst_31897 = cljs.core.next(inst_31880);
var inst_31861 = inst_31897;
var inst_31862 = null;
var inst_31863 = (0);
var inst_31864 = (0);
var state_31921__$1 = (function (){var statearr_31971 = state_31921;
(statearr_31971[(9)] = inst_31862);

(statearr_31971[(10)] = inst_31864);

(statearr_31971[(20)] = inst_31863);

(statearr_31971[(21)] = inst_31861);

(statearr_31971[(27)] = inst_31896);

return statearr_31971;
})();
var statearr_31972_33492 = state_31921__$1;
(statearr_31972_33492[(2)] = null);

(statearr_31972_33492[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (43))){
var state_31921__$1 = state_31921;
var statearr_31973_33493 = state_31921__$1;
(statearr_31973_33493[(2)] = null);

(statearr_31973_33493[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (29))){
var inst_31905 = (state_31921[(2)]);
var state_31921__$1 = state_31921;
var statearr_31974_33494 = state_31921__$1;
(statearr_31974_33494[(2)] = inst_31905);

(statearr_31974_33494[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (44))){
var inst_31914 = (state_31921[(2)]);
var state_31921__$1 = (function (){var statearr_31975 = state_31921;
(statearr_31975[(28)] = inst_31914);

return statearr_31975;
})();
var statearr_31976_33495 = state_31921__$1;
(statearr_31976_33495[(2)] = null);

(statearr_31976_33495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (6))){
var inst_31853 = (state_31921[(29)]);
var inst_31852 = cljs.core.deref(cs);
var inst_31853__$1 = cljs.core.keys(inst_31852);
var inst_31854 = cljs.core.count(inst_31853__$1);
var inst_31855 = cljs.core.reset_BANG_(dctr,inst_31854);
var inst_31860 = cljs.core.seq(inst_31853__$1);
var inst_31861 = inst_31860;
var inst_31862 = null;
var inst_31863 = (0);
var inst_31864 = (0);
var state_31921__$1 = (function (){var statearr_31977 = state_31921;
(statearr_31977[(9)] = inst_31862);

(statearr_31977[(10)] = inst_31864);

(statearr_31977[(20)] = inst_31863);

(statearr_31977[(30)] = inst_31855);

(statearr_31977[(21)] = inst_31861);

(statearr_31977[(29)] = inst_31853__$1);

return statearr_31977;
})();
var statearr_31978_33496 = state_31921__$1;
(statearr_31978_33496[(2)] = null);

(statearr_31978_33496[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (28))){
var inst_31880 = (state_31921[(25)]);
var inst_31861 = (state_31921[(21)]);
var inst_31880__$1 = cljs.core.seq(inst_31861);
var state_31921__$1 = (function (){var statearr_31979 = state_31921;
(statearr_31979[(25)] = inst_31880__$1);

return statearr_31979;
})();
if(inst_31880__$1){
var statearr_31980_33497 = state_31921__$1;
(statearr_31980_33497[(1)] = (33));

} else {
var statearr_31981_33498 = state_31921__$1;
(statearr_31981_33498[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (25))){
var inst_31864 = (state_31921[(10)]);
var inst_31863 = (state_31921[(20)]);
var inst_31866 = (inst_31864 < inst_31863);
var inst_31867 = inst_31866;
var state_31921__$1 = state_31921;
if(cljs.core.truth_(inst_31867)){
var statearr_31982_33499 = state_31921__$1;
(statearr_31982_33499[(1)] = (27));

} else {
var statearr_31983_33500 = state_31921__$1;
(statearr_31983_33500[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (34))){
var state_31921__$1 = state_31921;
var statearr_31984_33501 = state_31921__$1;
(statearr_31984_33501[(2)] = null);

(statearr_31984_33501[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (17))){
var state_31921__$1 = state_31921;
var statearr_31985_33502 = state_31921__$1;
(statearr_31985_33502[(2)] = null);

(statearr_31985_33502[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (3))){
var inst_31919 = (state_31921[(2)]);
var state_31921__$1 = state_31921;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31921__$1,inst_31919);
} else {
if((state_val_31922 === (12))){
var inst_31848 = (state_31921[(2)]);
var state_31921__$1 = state_31921;
var statearr_31986_33503 = state_31921__$1;
(statearr_31986_33503[(2)] = inst_31848);

(statearr_31986_33503[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (2))){
var state_31921__$1 = state_31921;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31921__$1,(4),ch);
} else {
if((state_val_31922 === (23))){
var state_31921__$1 = state_31921;
var statearr_31987_33504 = state_31921__$1;
(statearr_31987_33504[(2)] = null);

(statearr_31987_33504[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (35))){
var inst_31903 = (state_31921[(2)]);
var state_31921__$1 = state_31921;
var statearr_31988_33505 = state_31921__$1;
(statearr_31988_33505[(2)] = inst_31903);

(statearr_31988_33505[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (19))){
var inst_31820 = (state_31921[(7)]);
var inst_31824 = cljs.core.chunk_first(inst_31820);
var inst_31825 = cljs.core.chunk_rest(inst_31820);
var inst_31826 = cljs.core.count(inst_31824);
var inst_31798 = inst_31825;
var inst_31799 = inst_31824;
var inst_31800 = inst_31826;
var inst_31801 = (0);
var state_31921__$1 = (function (){var statearr_31989 = state_31921;
(statearr_31989[(13)] = inst_31801);

(statearr_31989[(14)] = inst_31800);

(statearr_31989[(16)] = inst_31798);

(statearr_31989[(17)] = inst_31799);

return statearr_31989;
})();
var statearr_31990_33506 = state_31921__$1;
(statearr_31990_33506[(2)] = null);

(statearr_31990_33506[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (11))){
var inst_31820 = (state_31921[(7)]);
var inst_31798 = (state_31921[(16)]);
var inst_31820__$1 = cljs.core.seq(inst_31798);
var state_31921__$1 = (function (){var statearr_31991 = state_31921;
(statearr_31991[(7)] = inst_31820__$1);

return statearr_31991;
})();
if(inst_31820__$1){
var statearr_31992_33507 = state_31921__$1;
(statearr_31992_33507[(1)] = (16));

} else {
var statearr_31993_33508 = state_31921__$1;
(statearr_31993_33508[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (9))){
var inst_31850 = (state_31921[(2)]);
var state_31921__$1 = state_31921;
var statearr_31994_33509 = state_31921__$1;
(statearr_31994_33509[(2)] = inst_31850);

(statearr_31994_33509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (5))){
var inst_31796 = cljs.core.deref(cs);
var inst_31797 = cljs.core.seq(inst_31796);
var inst_31798 = inst_31797;
var inst_31799 = null;
var inst_31800 = (0);
var inst_31801 = (0);
var state_31921__$1 = (function (){var statearr_31998 = state_31921;
(statearr_31998[(13)] = inst_31801);

(statearr_31998[(14)] = inst_31800);

(statearr_31998[(16)] = inst_31798);

(statearr_31998[(17)] = inst_31799);

return statearr_31998;
})();
var statearr_31999_33510 = state_31921__$1;
(statearr_31999_33510[(2)] = null);

(statearr_31999_33510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (14))){
var state_31921__$1 = state_31921;
var statearr_32000_33511 = state_31921__$1;
(statearr_32000_33511[(2)] = null);

(statearr_32000_33511[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (45))){
var inst_31911 = (state_31921[(2)]);
var state_31921__$1 = state_31921;
var statearr_32001_33512 = state_31921__$1;
(statearr_32001_33512[(2)] = inst_31911);

(statearr_32001_33512[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (26))){
var inst_31853 = (state_31921[(29)]);
var inst_31907 = (state_31921[(2)]);
var inst_31908 = cljs.core.seq(inst_31853);
var state_31921__$1 = (function (){var statearr_32005 = state_31921;
(statearr_32005[(31)] = inst_31907);

return statearr_32005;
})();
if(inst_31908){
var statearr_32007_33513 = state_31921__$1;
(statearr_32007_33513[(1)] = (42));

} else {
var statearr_32008_33514 = state_31921__$1;
(statearr_32008_33514[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (16))){
var inst_31820 = (state_31921[(7)]);
var inst_31822 = cljs.core.chunked_seq_QMARK_(inst_31820);
var state_31921__$1 = state_31921;
if(inst_31822){
var statearr_32011_33515 = state_31921__$1;
(statearr_32011_33515[(1)] = (19));

} else {
var statearr_32013_33516 = state_31921__$1;
(statearr_32013_33516[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (38))){
var inst_31900 = (state_31921[(2)]);
var state_31921__$1 = state_31921;
var statearr_32014_33517 = state_31921__$1;
(statearr_32014_33517[(2)] = inst_31900);

(statearr_32014_33517[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (30))){
var state_31921__$1 = state_31921;
var statearr_32015_33518 = state_31921__$1;
(statearr_32015_33518[(2)] = null);

(statearr_32015_33518[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (10))){
var inst_31801 = (state_31921[(13)]);
var inst_31799 = (state_31921[(17)]);
var inst_31809 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31799,inst_31801);
var inst_31810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31809,(0),null);
var inst_31811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31809,(1),null);
var state_31921__$1 = (function (){var statearr_32016 = state_31921;
(statearr_32016[(26)] = inst_31810);

return statearr_32016;
})();
if(cljs.core.truth_(inst_31811)){
var statearr_32017_33519 = state_31921__$1;
(statearr_32017_33519[(1)] = (13));

} else {
var statearr_32018_33520 = state_31921__$1;
(statearr_32018_33520[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (18))){
var inst_31846 = (state_31921[(2)]);
var state_31921__$1 = state_31921;
var statearr_32019_33521 = state_31921__$1;
(statearr_32019_33521[(2)] = inst_31846);

(statearr_32019_33521[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (42))){
var state_31921__$1 = state_31921;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31921__$1,(45),dchan);
} else {
if((state_val_31922 === (37))){
var inst_31889 = (state_31921[(23)]);
var inst_31789 = (state_31921[(11)]);
var inst_31880 = (state_31921[(25)]);
var inst_31889__$1 = cljs.core.first(inst_31880);
var inst_31890 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31889__$1,inst_31789,done);
var state_31921__$1 = (function (){var statearr_32020 = state_31921;
(statearr_32020[(23)] = inst_31889__$1);

return statearr_32020;
})();
if(cljs.core.truth_(inst_31890)){
var statearr_32021_33522 = state_31921__$1;
(statearr_32021_33522[(1)] = (39));

} else {
var statearr_32022_33523 = state_31921__$1;
(statearr_32022_33523[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (8))){
var inst_31801 = (state_31921[(13)]);
var inst_31800 = (state_31921[(14)]);
var inst_31803 = (inst_31801 < inst_31800);
var inst_31804 = inst_31803;
var state_31921__$1 = state_31921;
if(cljs.core.truth_(inst_31804)){
var statearr_32023_33524 = state_31921__$1;
(statearr_32023_33524[(1)] = (10));

} else {
var statearr_32024_33525 = state_31921__$1;
(statearr_32024_33525[(1)] = (11));

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
});})(c__31155__auto___33456,cs,m,dchan,dctr,done))
;
return ((function (switch__30907__auto__,c__31155__auto___33456,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30908__auto__ = null;
var cljs$core$async$mult_$_state_machine__30908__auto____0 = (function (){
var statearr_32025 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32025[(0)] = cljs$core$async$mult_$_state_machine__30908__auto__);

(statearr_32025[(1)] = (1));

return statearr_32025;
});
var cljs$core$async$mult_$_state_machine__30908__auto____1 = (function (state_31921){
while(true){
var ret_value__30909__auto__ = (function (){try{while(true){
var result__30910__auto__ = switch__30907__auto__(state_31921);
if(cljs.core.keyword_identical_QMARK_(result__30910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30910__auto__;
}
break;
}
}catch (e32026){if((e32026 instanceof Object)){
var ex__30911__auto__ = e32026;
var statearr_32027_33526 = state_31921;
(statearr_32027_33526[(5)] = ex__30911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32026;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33527 = state_31921;
state_31921 = G__33527;
continue;
} else {
return ret_value__30909__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30908__auto__ = function(state_31921){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30908__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30908__auto____1.call(this,state_31921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30908__auto____0;
cljs$core$async$mult_$_state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30908__auto____1;
return cljs$core$async$mult_$_state_machine__30908__auto__;
})()
;})(switch__30907__auto__,c__31155__auto___33456,cs,m,dchan,dctr,done))
})();
var state__31157__auto__ = (function (){var statearr_32028 = (f__31156__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31156__auto__.cljs$core$IFn$_invoke$arity$0() : f__31156__auto__.call(null));
(statearr_32028[(6)] = c__31155__auto___33456);

return statearr_32028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31157__auto__);
});})(c__31155__auto___33456,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__32030 = arguments.length;
switch (G__32030) {
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

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

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

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33529 = arguments.length;
var i__4731__auto___33530 = (0);
while(true){
if((i__4731__auto___33530 < len__4730__auto___33529)){
args__4736__auto__.push((arguments[i__4731__auto___33530]));

var G__33531 = (i__4731__auto___33530 + (1));
i__4731__auto___33530 = G__33531;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32035){
var map__32036 = p__32035;
var map__32036__$1 = (((((!((map__32036 == null))))?(((((map__32036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32036):map__32036);
var opts = map__32036__$1;
var statearr_32038_33532 = state;
(statearr_32038_33532[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts(((function (map__32036,map__32036__$1,opts){
return (function (val){
var statearr_32039_33533 = state;
(statearr_32039_33533[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__32036,map__32036__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_32040_33534 = state;
(statearr_32040_33534[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32031){
var G__32032 = cljs.core.first(seq32031);
var seq32031__$1 = cljs.core.next(seq32031);
var G__32033 = cljs.core.first(seq32031__$1);
var seq32031__$2 = cljs.core.next(seq32031__$1);
var G__32034 = cljs.core.first(seq32031__$2);
var seq32031__$3 = cljs.core.next(seq32031__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32032,G__32033,G__32034,seq32031__$3);
});

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
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32042 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32042 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32043){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32043 = meta32043;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32044,meta32043__$1){
var self__ = this;
var _32044__$1 = this;
return (new cljs.core.async.t_cljs$core$async32042(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32043__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32042.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32044){
var self__ = this;
var _32044__$1 = this;
return self__.meta32043;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32042.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32042.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32042.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32042.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32042.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32042.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32042.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32042.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32042.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32043","meta32043",-613682429,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32042.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32042.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32042";

cljs.core.async.t_cljs$core$async32042.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32042");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32042.
 */
cljs.core.async.__GT_t_cljs$core$async32042 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32042(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32043){
return (new cljs.core.async.t_cljs$core$async32042(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32043));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32042(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31155__auto___33535 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31155__auto___33535,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31156__auto__ = (function (){var switch__30907__auto__ = ((function (c__31155__auto___33535,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32148){
var state_val_32149 = (state_32148[(1)]);
if((state_val_32149 === (7))){
var inst_32061 = (state_32148[(2)]);
var state_32148__$1 = state_32148;
var statearr_32150_33536 = state_32148__$1;
(statearr_32150_33536[(2)] = inst_32061);

(statearr_32150_33536[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (20))){
var inst_32073 = (state_32148[(7)]);
var state_32148__$1 = state_32148;
var statearr_32151_33537 = state_32148__$1;
(statearr_32151_33537[(2)] = inst_32073);

(statearr_32151_33537[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (27))){
var state_32148__$1 = state_32148;
var statearr_32152_33538 = state_32148__$1;
(statearr_32152_33538[(2)] = null);

(statearr_32152_33538[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (1))){
var inst_32048 = (state_32148[(8)]);
var inst_32048__$1 = calc_state();
var inst_32050 = (inst_32048__$1 == null);
var inst_32051 = cljs.core.not(inst_32050);
var state_32148__$1 = (function (){var statearr_32153 = state_32148;
(statearr_32153[(8)] = inst_32048__$1);

return statearr_32153;
})();
if(inst_32051){
var statearr_32154_33539 = state_32148__$1;
(statearr_32154_33539[(1)] = (2));

} else {
var statearr_32155_33540 = state_32148__$1;
(statearr_32155_33540[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (24))){
var inst_32097 = (state_32148[(9)]);
var inst_32106 = (state_32148[(10)]);
var inst_32120 = (state_32148[(11)]);
var inst_32120__$1 = (inst_32097.cljs$core$IFn$_invoke$arity$1 ? inst_32097.cljs$core$IFn$_invoke$arity$1(inst_32106) : inst_32097.call(null,inst_32106));
var state_32148__$1 = (function (){var statearr_32156 = state_32148;
(statearr_32156[(11)] = inst_32120__$1);

return statearr_32156;
})();
if(cljs.core.truth_(inst_32120__$1)){
var statearr_32157_33541 = state_32148__$1;
(statearr_32157_33541[(1)] = (29));

} else {
var statearr_32158_33542 = state_32148__$1;
(statearr_32158_33542[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (4))){
var inst_32064 = (state_32148[(2)]);
var state_32148__$1 = state_32148;
if(cljs.core.truth_(inst_32064)){
var statearr_32159_33543 = state_32148__$1;
(statearr_32159_33543[(1)] = (8));

} else {
var statearr_32160_33544 = state_32148__$1;
(statearr_32160_33544[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (15))){
var inst_32091 = (state_32148[(2)]);
var state_32148__$1 = state_32148;
if(cljs.core.truth_(inst_32091)){
var statearr_32161_33545 = state_32148__$1;
(statearr_32161_33545[(1)] = (19));

} else {
var statearr_32162_33546 = state_32148__$1;
(statearr_32162_33546[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (21))){
var inst_32096 = (state_32148[(12)]);
var inst_32096__$1 = (state_32148[(2)]);
var inst_32097 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32096__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32098 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32096__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32099 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32096__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32148__$1 = (function (){var statearr_32163 = state_32148;
(statearr_32163[(13)] = inst_32098);

(statearr_32163[(9)] = inst_32097);

(statearr_32163[(12)] = inst_32096__$1);

return statearr_32163;
})();
return cljs.core.async.ioc_alts_BANG_(state_32148__$1,(22),inst_32099);
} else {
if((state_val_32149 === (31))){
var inst_32130 = (state_32148[(2)]);
var state_32148__$1 = state_32148;
if(cljs.core.truth_(inst_32130)){
var statearr_32164_33547 = state_32148__$1;
(statearr_32164_33547[(1)] = (32));

} else {
var statearr_32165_33548 = state_32148__$1;
(statearr_32165_33548[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (32))){
var inst_32105 = (state_32148[(14)]);
var state_32148__$1 = state_32148;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32148__$1,(35),out,inst_32105);
} else {
if((state_val_32149 === (33))){
var inst_32096 = (state_32148[(12)]);
var inst_32073 = inst_32096;
var state_32148__$1 = (function (){var statearr_32166 = state_32148;
(statearr_32166[(7)] = inst_32073);

return statearr_32166;
})();
var statearr_32167_33549 = state_32148__$1;
(statearr_32167_33549[(2)] = null);

(statearr_32167_33549[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (13))){
var inst_32073 = (state_32148[(7)]);
var inst_32080 = inst_32073.cljs$lang$protocol_mask$partition0$;
var inst_32081 = (inst_32080 & (64));
var inst_32082 = inst_32073.cljs$core$ISeq$;
var inst_32083 = (cljs.core.PROTOCOL_SENTINEL === inst_32082);
var inst_32084 = ((inst_32081) || (inst_32083));
var state_32148__$1 = state_32148;
if(cljs.core.truth_(inst_32084)){
var statearr_32168_33550 = state_32148__$1;
(statearr_32168_33550[(1)] = (16));

} else {
var statearr_32169_33551 = state_32148__$1;
(statearr_32169_33551[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (22))){
var inst_32105 = (state_32148[(14)]);
var inst_32106 = (state_32148[(10)]);
var inst_32104 = (state_32148[(2)]);
var inst_32105__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32104,(0),null);
var inst_32106__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32104,(1),null);
var inst_32107 = (inst_32105__$1 == null);
var inst_32108 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32106__$1,change);
var inst_32109 = ((inst_32107) || (inst_32108));
var state_32148__$1 = (function (){var statearr_32170 = state_32148;
(statearr_32170[(14)] = inst_32105__$1);

(statearr_32170[(10)] = inst_32106__$1);

return statearr_32170;
})();
if(cljs.core.truth_(inst_32109)){
var statearr_32171_33552 = state_32148__$1;
(statearr_32171_33552[(1)] = (23));

} else {
var statearr_32172_33553 = state_32148__$1;
(statearr_32172_33553[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (36))){
var inst_32096 = (state_32148[(12)]);
var inst_32073 = inst_32096;
var state_32148__$1 = (function (){var statearr_32173 = state_32148;
(statearr_32173[(7)] = inst_32073);

return statearr_32173;
})();
var statearr_32178_33554 = state_32148__$1;
(statearr_32178_33554[(2)] = null);

(statearr_32178_33554[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (29))){
var inst_32120 = (state_32148[(11)]);
var state_32148__$1 = state_32148;
var statearr_32187_33555 = state_32148__$1;
(statearr_32187_33555[(2)] = inst_32120);

(statearr_32187_33555[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (6))){
var state_32148__$1 = state_32148;
var statearr_32190_33556 = state_32148__$1;
(statearr_32190_33556[(2)] = false);

(statearr_32190_33556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (28))){
var inst_32116 = (state_32148[(2)]);
var inst_32117 = calc_state();
var inst_32073 = inst_32117;
var state_32148__$1 = (function (){var statearr_32193 = state_32148;
(statearr_32193[(7)] = inst_32073);

(statearr_32193[(15)] = inst_32116);

return statearr_32193;
})();
var statearr_32194_33557 = state_32148__$1;
(statearr_32194_33557[(2)] = null);

(statearr_32194_33557[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (25))){
var inst_32144 = (state_32148[(2)]);
var state_32148__$1 = state_32148;
var statearr_32196_33558 = state_32148__$1;
(statearr_32196_33558[(2)] = inst_32144);

(statearr_32196_33558[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (34))){
var inst_32142 = (state_32148[(2)]);
var state_32148__$1 = state_32148;
var statearr_32199_33559 = state_32148__$1;
(statearr_32199_33559[(2)] = inst_32142);

(statearr_32199_33559[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (17))){
var state_32148__$1 = state_32148;
var statearr_32200_33560 = state_32148__$1;
(statearr_32200_33560[(2)] = false);

(statearr_32200_33560[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (3))){
var state_32148__$1 = state_32148;
var statearr_32201_33561 = state_32148__$1;
(statearr_32201_33561[(2)] = false);

(statearr_32201_33561[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (12))){
var inst_32146 = (state_32148[(2)]);
var state_32148__$1 = state_32148;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32148__$1,inst_32146);
} else {
if((state_val_32149 === (2))){
var inst_32048 = (state_32148[(8)]);
var inst_32053 = inst_32048.cljs$lang$protocol_mask$partition0$;
var inst_32054 = (inst_32053 & (64));
var inst_32055 = inst_32048.cljs$core$ISeq$;
var inst_32056 = (cljs.core.PROTOCOL_SENTINEL === inst_32055);
var inst_32057 = ((inst_32054) || (inst_32056));
var state_32148__$1 = state_32148;
if(cljs.core.truth_(inst_32057)){
var statearr_32202_33562 = state_32148__$1;
(statearr_32202_33562[(1)] = (5));

} else {
var statearr_32207_33563 = state_32148__$1;
(statearr_32207_33563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (23))){
var inst_32105 = (state_32148[(14)]);
var inst_32111 = (inst_32105 == null);
var state_32148__$1 = state_32148;
if(cljs.core.truth_(inst_32111)){
var statearr_32214_33564 = state_32148__$1;
(statearr_32214_33564[(1)] = (26));

} else {
var statearr_32215_33565 = state_32148__$1;
(statearr_32215_33565[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (35))){
var inst_32133 = (state_32148[(2)]);
var state_32148__$1 = state_32148;
if(cljs.core.truth_(inst_32133)){
var statearr_32216_33566 = state_32148__$1;
(statearr_32216_33566[(1)] = (36));

} else {
var statearr_32217_33567 = state_32148__$1;
(statearr_32217_33567[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (19))){
var inst_32073 = (state_32148[(7)]);
var inst_32093 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32073);
var state_32148__$1 = state_32148;
var statearr_32218_33568 = state_32148__$1;
(statearr_32218_33568[(2)] = inst_32093);

(statearr_32218_33568[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (11))){
var inst_32073 = (state_32148[(7)]);
var inst_32077 = (inst_32073 == null);
var inst_32078 = cljs.core.not(inst_32077);
var state_32148__$1 = state_32148;
if(inst_32078){
var statearr_32219_33569 = state_32148__$1;
(statearr_32219_33569[(1)] = (13));

} else {
var statearr_32220_33570 = state_32148__$1;
(statearr_32220_33570[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (9))){
var inst_32048 = (state_32148[(8)]);
var state_32148__$1 = state_32148;
var statearr_32221_33571 = state_32148__$1;
(statearr_32221_33571[(2)] = inst_32048);

(statearr_32221_33571[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (5))){
var state_32148__$1 = state_32148;
var statearr_32224_33572 = state_32148__$1;
(statearr_32224_33572[(2)] = true);

(statearr_32224_33572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (14))){
var state_32148__$1 = state_32148;
var statearr_32225_33573 = state_32148__$1;
(statearr_32225_33573[(2)] = false);

(statearr_32225_33573[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (26))){
var inst_32106 = (state_32148[(10)]);
var inst_32113 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32106);
var state_32148__$1 = state_32148;
var statearr_32226_33574 = state_32148__$1;
(statearr_32226_33574[(2)] = inst_32113);

(statearr_32226_33574[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (16))){
var state_32148__$1 = state_32148;
var statearr_32230_33575 = state_32148__$1;
(statearr_32230_33575[(2)] = true);

(statearr_32230_33575[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (38))){
var inst_32138 = (state_32148[(2)]);
var state_32148__$1 = state_32148;
var statearr_32231_33576 = state_32148__$1;
(statearr_32231_33576[(2)] = inst_32138);

(statearr_32231_33576[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (30))){
var inst_32098 = (state_32148[(13)]);
var inst_32097 = (state_32148[(9)]);
var inst_32106 = (state_32148[(10)]);
var inst_32124 = cljs.core.empty_QMARK_(inst_32097);
var inst_32125 = (inst_32098.cljs$core$IFn$_invoke$arity$1 ? inst_32098.cljs$core$IFn$_invoke$arity$1(inst_32106) : inst_32098.call(null,inst_32106));
var inst_32126 = cljs.core.not(inst_32125);
var inst_32128 = ((inst_32124) && (inst_32126));
var state_32148__$1 = state_32148;
var statearr_32232_33577 = state_32148__$1;
(statearr_32232_33577[(2)] = inst_32128);

(statearr_32232_33577[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (10))){
var inst_32048 = (state_32148[(8)]);
var inst_32069 = (state_32148[(2)]);
var inst_32070 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32069,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32071 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32069,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32069,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32073 = inst_32048;
var state_32148__$1 = (function (){var statearr_32237 = state_32148;
(statearr_32237[(16)] = inst_32070);

(statearr_32237[(17)] = inst_32072);

(statearr_32237[(18)] = inst_32071);

(statearr_32237[(7)] = inst_32073);

return statearr_32237;
})();
var statearr_32240_33578 = state_32148__$1;
(statearr_32240_33578[(2)] = null);

(statearr_32240_33578[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (18))){
var inst_32088 = (state_32148[(2)]);
var state_32148__$1 = state_32148;
var statearr_32242_33579 = state_32148__$1;
(statearr_32242_33579[(2)] = inst_32088);

(statearr_32242_33579[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (37))){
var state_32148__$1 = state_32148;
var statearr_32243_33580 = state_32148__$1;
(statearr_32243_33580[(2)] = null);

(statearr_32243_33580[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (8))){
var inst_32048 = (state_32148[(8)]);
var inst_32066 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32048);
var state_32148__$1 = state_32148;
var statearr_32244_33581 = state_32148__$1;
(statearr_32244_33581[(2)] = inst_32066);

(statearr_32244_33581[(1)] = (10));


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
});})(c__31155__auto___33535,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30907__auto__,c__31155__auto___33535,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30908__auto__ = null;
var cljs$core$async$mix_$_state_machine__30908__auto____0 = (function (){
var statearr_32245 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32245[(0)] = cljs$core$async$mix_$_state_machine__30908__auto__);

(statearr_32245[(1)] = (1));

return statearr_32245;
});
var cljs$core$async$mix_$_state_machine__30908__auto____1 = (function (state_32148){
while(true){
var ret_value__30909__auto__ = (function (){try{while(true){
var result__30910__auto__ = switch__30907__auto__(state_32148);
if(cljs.core.keyword_identical_QMARK_(result__30910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30910__auto__;
}
break;
}
}catch (e32246){if((e32246 instanceof Object)){
var ex__30911__auto__ = e32246;
var statearr_32247_33582 = state_32148;
(statearr_32247_33582[(5)] = ex__30911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32246;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33583 = state_32148;
state_32148 = G__33583;
continue;
} else {
return ret_value__30909__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30908__auto__ = function(state_32148){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30908__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30908__auto____1.call(this,state_32148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30908__auto____0;
cljs$core$async$mix_$_state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30908__auto____1;
return cljs$core$async$mix_$_state_machine__30908__auto__;
})()
;})(switch__30907__auto__,c__31155__auto___33535,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31157__auto__ = (function (){var statearr_32248 = (f__31156__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31156__auto__.cljs$core$IFn$_invoke$arity$0() : f__31156__auto__.call(null));
(statearr_32248[(6)] = c__31155__auto___33535);

return statearr_32248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31157__auto__);
});})(c__31155__auto___33535,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


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

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32310 = arguments.length;
switch (G__32310) {
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

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var G__32330 = arguments.length;
switch (G__32330) {
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

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__32323_SHARP_){
if(cljs.core.truth_((p1__32323_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32323_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32323_SHARP_.call(null,topic)))){
return p1__32323_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32323_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32336 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32336 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32337){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32337 = meta32337;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32338,meta32337__$1){
var self__ = this;
var _32338__$1 = this;
return (new cljs.core.async.t_cljs$core$async32336(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32337__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32336.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32338){
var self__ = this;
var _32338__$1 = this;
return self__.meta32337;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32336.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32336.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32336.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32336.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32336.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32336.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32336.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32336.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32337","meta32337",-205476620,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32336.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32336.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32336";

cljs.core.async.t_cljs$core$async32336.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32336");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32336.
 */
cljs.core.async.__GT_t_cljs$core$async32336 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32336(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32337){
return (new cljs.core.async.t_cljs$core$async32336(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32337));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32336(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31155__auto___33656 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31155__auto___33656,mults,ensure_mult,p){
return (function (){
var f__31156__auto__ = (function (){var switch__30907__auto__ = ((function (c__31155__auto___33656,mults,ensure_mult,p){
return (function (state_32445){
var state_val_32446 = (state_32445[(1)]);
if((state_val_32446 === (7))){
var inst_32440 = (state_32445[(2)]);
var state_32445__$1 = state_32445;
var statearr_32452_33657 = state_32445__$1;
(statearr_32452_33657[(2)] = inst_32440);

(statearr_32452_33657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32446 === (20))){
var state_32445__$1 = state_32445;
var statearr_32454_33658 = state_32445__$1;
(statearr_32454_33658[(2)] = null);

(statearr_32454_33658[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32446 === (1))){
var state_32445__$1 = state_32445;
var statearr_32457_33659 = state_32445__$1;
(statearr_32457_33659[(2)] = null);

(statearr_32457_33659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32446 === (24))){
var inst_32419 = (state_32445[(7)]);
var inst_32432 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32419);
var state_32445__$1 = state_32445;
var statearr_32458_33660 = state_32445__$1;
(statearr_32458_33660[(2)] = inst_32432);

(statearr_32458_33660[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32446 === (4))){
var inst_32359 = (state_32445[(8)]);
var inst_32359__$1 = (state_32445[(2)]);
var inst_32360 = (inst_32359__$1 == null);
var state_32445__$1 = (function (){var statearr_32462 = state_32445;
(statearr_32462[(8)] = inst_32359__$1);

return statearr_32462;
})();
if(cljs.core.truth_(inst_32360)){
var statearr_32467_33661 = state_32445__$1;
(statearr_32467_33661[(1)] = (5));

} else {
var statearr_32468_33662 = state_32445__$1;
(statearr_32468_33662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32446 === (15))){
var inst_32413 = (state_32445[(2)]);
var state_32445__$1 = state_32445;
var statearr_32469_33663 = state_32445__$1;
(statearr_32469_33663[(2)] = inst_32413);

(statearr_32469_33663[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32446 === (21))){
var inst_32437 = (state_32445[(2)]);
var state_32445__$1 = (function (){var statearr_32472 = state_32445;
(statearr_32472[(9)] = inst_32437);

return statearr_32472;
})();
var statearr_32473_33664 = state_32445__$1;
(statearr_32473_33664[(2)] = null);

(statearr_32473_33664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32446 === (13))){
var inst_32383 = (state_32445[(10)]);
var inst_32385 = cljs.core.chunked_seq_QMARK_(inst_32383);
var state_32445__$1 = state_32445;
if(inst_32385){
var statearr_32474_33668 = state_32445__$1;
(statearr_32474_33668[(1)] = (16));

} else {
var statearr_32475_33669 = state_32445__$1;
(statearr_32475_33669[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32446 === (22))){
var inst_32429 = (state_32445[(2)]);
var state_32445__$1 = state_32445;
if(cljs.core.truth_(inst_32429)){
var statearr_32476_33670 = state_32445__$1;
(statearr_32476_33670[(1)] = (23));

} else {
var statearr_32477_33671 = state_32445__$1;
(statearr_32477_33671[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32446 === (6))){
var inst_32421 = (state_32445[(11)]);
var inst_32419 = (state_32445[(7)]);
var inst_32359 = (state_32445[(8)]);
var inst_32419__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32359) : topic_fn.call(null,inst_32359));
var inst_32420 = cljs.core.deref(mults);
var inst_32421__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32420,inst_32419__$1);
var state_32445__$1 = (function (){var statearr_32478 = state_32445;
(statearr_32478[(11)] = inst_32421__$1);

(statearr_32478[(7)] = inst_32419__$1);

return statearr_32478;
})();
if(cljs.core.truth_(inst_32421__$1)){
var statearr_32479_33679 = state_32445__$1;
(statearr_32479_33679[(1)] = (19));

} else {
var statearr_32480_33680 = state_32445__$1;
(statearr_32480_33680[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32446 === (25))){
var inst_32434 = (state_32445[(2)]);
var state_32445__$1 = state_32445;
var statearr_32485_33681 = state_32445__$1;
(statearr_32485_33681[(2)] = inst_32434);

(statearr_32485_33681[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32446 === (17))){
var inst_32383 = (state_32445[(10)]);
var inst_32392 = cljs.core.first(inst_32383);
var inst_32393 = cljs.core.async.muxch_STAR_(inst_32392);
var inst_32394 = cljs.core.async.close_BANG_(inst_32393);
var inst_32395 = cljs.core.next(inst_32383);
var inst_32369 = inst_32395;
var inst_32370 = null;
var inst_32371 = (0);
var inst_32372 = (0);
var state_32445__$1 = (function (){var statearr_32503 = state_32445;
(statearr_32503[(12)] = inst_32369);

(statearr_32503[(13)] = inst_32370);

(statearr_32503[(14)] = inst_32394);

(statearr_32503[(15)] = inst_32371);

(statearr_32503[(16)] = inst_32372);

return statearr_32503;
})();
var statearr_32504_33691 = state_32445__$1;
(statearr_32504_33691[(2)] = null);

(statearr_32504_33691[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32446 === (3))){
var inst_32442 = (state_32445[(2)]);
var state_32445__$1 = state_32445;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32445__$1,inst_32442);
} else {
if((state_val_32446 === (12))){
var inst_32415 = (state_32445[(2)]);
var state_32445__$1 = state_32445;
var statearr_32505_33692 = state_32445__$1;
(statearr_32505_33692[(2)] = inst_32415);

(statearr_32505_33692[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32446 === (2))){
var state_32445__$1 = state_32445;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32445__$1,(4),ch);
} else {
if((state_val_32446 === (23))){
var state_32445__$1 = state_32445;
var statearr_32506_33693 = state_32445__$1;
(statearr_32506_33693[(2)] = null);

(statearr_32506_33693[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32446 === (19))){
var inst_32421 = (state_32445[(11)]);
var inst_32359 = (state_32445[(8)]);
var inst_32427 = cljs.core.async.muxch_STAR_(inst_32421);
var state_32445__$1 = state_32445;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32445__$1,(22),inst_32427,inst_32359);
} else {
if((state_val_32446 === (11))){
var inst_32369 = (state_32445[(12)]);
var inst_32383 = (state_32445[(10)]);
var inst_32383__$1 = cljs.core.seq(inst_32369);
var state_32445__$1 = (function (){var statearr_32518 = state_32445;
(statearr_32518[(10)] = inst_32383__$1);

return statearr_32518;
})();
if(inst_32383__$1){
var statearr_32519_33694 = state_32445__$1;
(statearr_32519_33694[(1)] = (13));

} else {
var statearr_32520_33695 = state_32445__$1;
(statearr_32520_33695[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32446 === (9))){
var inst_32417 = (state_32445[(2)]);
var state_32445__$1 = state_32445;
var statearr_32521_33696 = state_32445__$1;
(statearr_32521_33696[(2)] = inst_32417);

(statearr_32521_33696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32446 === (5))){
var inst_32366 = cljs.core.deref(mults);
var inst_32367 = cljs.core.vals(inst_32366);
var inst_32368 = cljs.core.seq(inst_32367);
var inst_32369 = inst_32368;
var inst_32370 = null;
var inst_32371 = (0);
var inst_32372 = (0);
var state_32445__$1 = (function (){var statearr_32522 = state_32445;
(statearr_32522[(12)] = inst_32369);

(statearr_32522[(13)] = inst_32370);

(statearr_32522[(15)] = inst_32371);

(statearr_32522[(16)] = inst_32372);

return statearr_32522;
})();
var statearr_32523_33697 = state_32445__$1;
(statearr_32523_33697[(2)] = null);

(statearr_32523_33697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32446 === (14))){
var state_32445__$1 = state_32445;
var statearr_32528_33698 = state_32445__$1;
(statearr_32528_33698[(2)] = null);

(statearr_32528_33698[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32446 === (16))){
var inst_32383 = (state_32445[(10)]);
var inst_32387 = cljs.core.chunk_first(inst_32383);
var inst_32388 = cljs.core.chunk_rest(inst_32383);
var inst_32389 = cljs.core.count(inst_32387);
var inst_32369 = inst_32388;
var inst_32370 = inst_32387;
var inst_32371 = inst_32389;
var inst_32372 = (0);
var state_32445__$1 = (function (){var statearr_32529 = state_32445;
(statearr_32529[(12)] = inst_32369);

(statearr_32529[(13)] = inst_32370);

(statearr_32529[(15)] = inst_32371);

(statearr_32529[(16)] = inst_32372);

return statearr_32529;
})();
var statearr_32530_33699 = state_32445__$1;
(statearr_32530_33699[(2)] = null);

(statearr_32530_33699[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32446 === (10))){
var inst_32369 = (state_32445[(12)]);
var inst_32370 = (state_32445[(13)]);
var inst_32371 = (state_32445[(15)]);
var inst_32372 = (state_32445[(16)]);
var inst_32377 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32370,inst_32372);
var inst_32378 = cljs.core.async.muxch_STAR_(inst_32377);
var inst_32379 = cljs.core.async.close_BANG_(inst_32378);
var inst_32380 = (inst_32372 + (1));
var tmp32525 = inst_32369;
var tmp32526 = inst_32370;
var tmp32527 = inst_32371;
var inst_32369__$1 = tmp32525;
var inst_32370__$1 = tmp32526;
var inst_32371__$1 = tmp32527;
var inst_32372__$1 = inst_32380;
var state_32445__$1 = (function (){var statearr_32531 = state_32445;
(statearr_32531[(12)] = inst_32369__$1);

(statearr_32531[(13)] = inst_32370__$1);

(statearr_32531[(17)] = inst_32379);

(statearr_32531[(15)] = inst_32371__$1);

(statearr_32531[(16)] = inst_32372__$1);

return statearr_32531;
})();
var statearr_32532_33700 = state_32445__$1;
(statearr_32532_33700[(2)] = null);

(statearr_32532_33700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32446 === (18))){
var inst_32410 = (state_32445[(2)]);
var state_32445__$1 = state_32445;
var statearr_32533_33701 = state_32445__$1;
(statearr_32533_33701[(2)] = inst_32410);

(statearr_32533_33701[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32446 === (8))){
var inst_32371 = (state_32445[(15)]);
var inst_32372 = (state_32445[(16)]);
var inst_32374 = (inst_32372 < inst_32371);
var inst_32375 = inst_32374;
var state_32445__$1 = state_32445;
if(cljs.core.truth_(inst_32375)){
var statearr_32534_33702 = state_32445__$1;
(statearr_32534_33702[(1)] = (10));

} else {
var statearr_32535_33703 = state_32445__$1;
(statearr_32535_33703[(1)] = (11));

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
});})(c__31155__auto___33656,mults,ensure_mult,p))
;
return ((function (switch__30907__auto__,c__31155__auto___33656,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30908__auto__ = null;
var cljs$core$async$state_machine__30908__auto____0 = (function (){
var statearr_32536 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32536[(0)] = cljs$core$async$state_machine__30908__auto__);

(statearr_32536[(1)] = (1));

return statearr_32536;
});
var cljs$core$async$state_machine__30908__auto____1 = (function (state_32445){
while(true){
var ret_value__30909__auto__ = (function (){try{while(true){
var result__30910__auto__ = switch__30907__auto__(state_32445);
if(cljs.core.keyword_identical_QMARK_(result__30910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30910__auto__;
}
break;
}
}catch (e32537){if((e32537 instanceof Object)){
var ex__30911__auto__ = e32537;
var statearr_32538_33704 = state_32445;
(statearr_32538_33704[(5)] = ex__30911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32537;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33705 = state_32445;
state_32445 = G__33705;
continue;
} else {
return ret_value__30909__auto__;
}
break;
}
});
cljs$core$async$state_machine__30908__auto__ = function(state_32445){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30908__auto____1.call(this,state_32445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30908__auto____0;
cljs$core$async$state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30908__auto____1;
return cljs$core$async$state_machine__30908__auto__;
})()
;})(switch__30907__auto__,c__31155__auto___33656,mults,ensure_mult,p))
})();
var state__31157__auto__ = (function (){var statearr_32539 = (f__31156__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31156__auto__.cljs$core$IFn$_invoke$arity$0() : f__31156__auto__.call(null));
(statearr_32539[(6)] = c__31155__auto___33656);

return statearr_32539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31157__auto__);
});})(c__31155__auto___33656,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32542 = arguments.length;
switch (G__32542) {
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

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

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
var G__32544 = arguments.length;
switch (G__32544) {
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

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var G__32559 = arguments.length;
switch (G__32559) {
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

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__31155__auto___33709 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31155__auto___33709,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31156__auto__ = (function (){var switch__30907__auto__ = ((function (c__31155__auto___33709,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32598){
var state_val_32599 = (state_32598[(1)]);
if((state_val_32599 === (7))){
var state_32598__$1 = state_32598;
var statearr_32600_33710 = state_32598__$1;
(statearr_32600_33710[(2)] = null);

(statearr_32600_33710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32599 === (1))){
var state_32598__$1 = state_32598;
var statearr_32601_33711 = state_32598__$1;
(statearr_32601_33711[(2)] = null);

(statearr_32601_33711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32599 === (4))){
var inst_32562 = (state_32598[(7)]);
var inst_32564 = (inst_32562 < cnt);
var state_32598__$1 = state_32598;
if(cljs.core.truth_(inst_32564)){
var statearr_32602_33712 = state_32598__$1;
(statearr_32602_33712[(1)] = (6));

} else {
var statearr_32603_33713 = state_32598__$1;
(statearr_32603_33713[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32599 === (15))){
var inst_32594 = (state_32598[(2)]);
var state_32598__$1 = state_32598;
var statearr_32604_33714 = state_32598__$1;
(statearr_32604_33714[(2)] = inst_32594);

(statearr_32604_33714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32599 === (13))){
var inst_32587 = cljs.core.async.close_BANG_(out);
var state_32598__$1 = state_32598;
var statearr_32605_33715 = state_32598__$1;
(statearr_32605_33715[(2)] = inst_32587);

(statearr_32605_33715[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32599 === (6))){
var state_32598__$1 = state_32598;
var statearr_32606_33716 = state_32598__$1;
(statearr_32606_33716[(2)] = null);

(statearr_32606_33716[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32599 === (3))){
var inst_32596 = (state_32598[(2)]);
var state_32598__$1 = state_32598;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32598__$1,inst_32596);
} else {
if((state_val_32599 === (12))){
var inst_32584 = (state_32598[(8)]);
var inst_32584__$1 = (state_32598[(2)]);
var inst_32585 = cljs.core.some(cljs.core.nil_QMARK_,inst_32584__$1);
var state_32598__$1 = (function (){var statearr_32607 = state_32598;
(statearr_32607[(8)] = inst_32584__$1);

return statearr_32607;
})();
if(cljs.core.truth_(inst_32585)){
var statearr_32608_33717 = state_32598__$1;
(statearr_32608_33717[(1)] = (13));

} else {
var statearr_32609_33718 = state_32598__$1;
(statearr_32609_33718[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32599 === (2))){
var inst_32561 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32562 = (0);
var state_32598__$1 = (function (){var statearr_32610 = state_32598;
(statearr_32610[(7)] = inst_32562);

(statearr_32610[(9)] = inst_32561);

return statearr_32610;
})();
var statearr_32611_33719 = state_32598__$1;
(statearr_32611_33719[(2)] = null);

(statearr_32611_33719[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32599 === (11))){
var inst_32562 = (state_32598[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_32598,(10),Object,null,(9));
var inst_32571 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32562) : chs__$1.call(null,inst_32562));
var inst_32572 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32562) : done.call(null,inst_32562));
var inst_32573 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32571,inst_32572);
var state_32598__$1 = state_32598;
var statearr_32612_33720 = state_32598__$1;
(statearr_32612_33720[(2)] = inst_32573);


cljs.core.async.impl.ioc_helpers.process_exception(state_32598__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32599 === (9))){
var inst_32562 = (state_32598[(7)]);
var inst_32575 = (state_32598[(2)]);
var inst_32576 = (inst_32562 + (1));
var inst_32562__$1 = inst_32576;
var state_32598__$1 = (function (){var statearr_32613 = state_32598;
(statearr_32613[(7)] = inst_32562__$1);

(statearr_32613[(10)] = inst_32575);

return statearr_32613;
})();
var statearr_32614_33721 = state_32598__$1;
(statearr_32614_33721[(2)] = null);

(statearr_32614_33721[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32599 === (5))){
var inst_32582 = (state_32598[(2)]);
var state_32598__$1 = (function (){var statearr_32615 = state_32598;
(statearr_32615[(11)] = inst_32582);

return statearr_32615;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32598__$1,(12),dchan);
} else {
if((state_val_32599 === (14))){
var inst_32584 = (state_32598[(8)]);
var inst_32589 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32584);
var state_32598__$1 = state_32598;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32598__$1,(16),out,inst_32589);
} else {
if((state_val_32599 === (16))){
var inst_32591 = (state_32598[(2)]);
var state_32598__$1 = (function (){var statearr_32616 = state_32598;
(statearr_32616[(12)] = inst_32591);

return statearr_32616;
})();
var statearr_32617_33722 = state_32598__$1;
(statearr_32617_33722[(2)] = null);

(statearr_32617_33722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32599 === (10))){
var inst_32566 = (state_32598[(2)]);
var inst_32567 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32598__$1 = (function (){var statearr_32618 = state_32598;
(statearr_32618[(13)] = inst_32566);

return statearr_32618;
})();
var statearr_32619_33723 = state_32598__$1;
(statearr_32619_33723[(2)] = inst_32567);


cljs.core.async.impl.ioc_helpers.process_exception(state_32598__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32599 === (8))){
var inst_32580 = (state_32598[(2)]);
var state_32598__$1 = state_32598;
var statearr_32620_33724 = state_32598__$1;
(statearr_32620_33724[(2)] = inst_32580);

(statearr_32620_33724[(1)] = (5));


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
});})(c__31155__auto___33709,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30907__auto__,c__31155__auto___33709,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30908__auto__ = null;
var cljs$core$async$state_machine__30908__auto____0 = (function (){
var statearr_32621 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32621[(0)] = cljs$core$async$state_machine__30908__auto__);

(statearr_32621[(1)] = (1));

return statearr_32621;
});
var cljs$core$async$state_machine__30908__auto____1 = (function (state_32598){
while(true){
var ret_value__30909__auto__ = (function (){try{while(true){
var result__30910__auto__ = switch__30907__auto__(state_32598);
if(cljs.core.keyword_identical_QMARK_(result__30910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30910__auto__;
}
break;
}
}catch (e32622){if((e32622 instanceof Object)){
var ex__30911__auto__ = e32622;
var statearr_32623_33725 = state_32598;
(statearr_32623_33725[(5)] = ex__30911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32622;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33726 = state_32598;
state_32598 = G__33726;
continue;
} else {
return ret_value__30909__auto__;
}
break;
}
});
cljs$core$async$state_machine__30908__auto__ = function(state_32598){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30908__auto____1.call(this,state_32598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30908__auto____0;
cljs$core$async$state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30908__auto____1;
return cljs$core$async$state_machine__30908__auto__;
})()
;})(switch__30907__auto__,c__31155__auto___33709,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31157__auto__ = (function (){var statearr_32624 = (f__31156__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31156__auto__.cljs$core$IFn$_invoke$arity$0() : f__31156__auto__.call(null));
(statearr_32624[(6)] = c__31155__auto___33709);

return statearr_32624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31157__auto__);
});})(c__31155__auto___33709,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32627 = arguments.length;
switch (G__32627) {
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

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31155__auto___33733 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31155__auto___33733,out){
return (function (){
var f__31156__auto__ = (function (){var switch__30907__auto__ = ((function (c__31155__auto___33733,out){
return (function (state_32659){
var state_val_32660 = (state_32659[(1)]);
if((state_val_32660 === (7))){
var inst_32639 = (state_32659[(7)]);
var inst_32638 = (state_32659[(8)]);
var inst_32638__$1 = (state_32659[(2)]);
var inst_32639__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32638__$1,(0),null);
var inst_32640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32638__$1,(1),null);
var inst_32641 = (inst_32639__$1 == null);
var state_32659__$1 = (function (){var statearr_32661 = state_32659;
(statearr_32661[(7)] = inst_32639__$1);

(statearr_32661[(8)] = inst_32638__$1);

(statearr_32661[(9)] = inst_32640);

return statearr_32661;
})();
if(cljs.core.truth_(inst_32641)){
var statearr_32662_33734 = state_32659__$1;
(statearr_32662_33734[(1)] = (8));

} else {
var statearr_32663_33735 = state_32659__$1;
(statearr_32663_33735[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32660 === (1))){
var inst_32628 = cljs.core.vec(chs);
var inst_32629 = inst_32628;
var state_32659__$1 = (function (){var statearr_32664 = state_32659;
(statearr_32664[(10)] = inst_32629);

return statearr_32664;
})();
var statearr_32665_33736 = state_32659__$1;
(statearr_32665_33736[(2)] = null);

(statearr_32665_33736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32660 === (4))){
var inst_32629 = (state_32659[(10)]);
var state_32659__$1 = state_32659;
return cljs.core.async.ioc_alts_BANG_(state_32659__$1,(7),inst_32629);
} else {
if((state_val_32660 === (6))){
var inst_32655 = (state_32659[(2)]);
var state_32659__$1 = state_32659;
var statearr_32666_33737 = state_32659__$1;
(statearr_32666_33737[(2)] = inst_32655);

(statearr_32666_33737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32660 === (3))){
var inst_32657 = (state_32659[(2)]);
var state_32659__$1 = state_32659;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32659__$1,inst_32657);
} else {
if((state_val_32660 === (2))){
var inst_32629 = (state_32659[(10)]);
var inst_32631 = cljs.core.count(inst_32629);
var inst_32632 = (inst_32631 > (0));
var state_32659__$1 = state_32659;
if(cljs.core.truth_(inst_32632)){
var statearr_32668_33738 = state_32659__$1;
(statearr_32668_33738[(1)] = (4));

} else {
var statearr_32669_33739 = state_32659__$1;
(statearr_32669_33739[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32660 === (11))){
var inst_32629 = (state_32659[(10)]);
var inst_32648 = (state_32659[(2)]);
var tmp32667 = inst_32629;
var inst_32629__$1 = tmp32667;
var state_32659__$1 = (function (){var statearr_32670 = state_32659;
(statearr_32670[(10)] = inst_32629__$1);

(statearr_32670[(11)] = inst_32648);

return statearr_32670;
})();
var statearr_32671_33752 = state_32659__$1;
(statearr_32671_33752[(2)] = null);

(statearr_32671_33752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32660 === (9))){
var inst_32639 = (state_32659[(7)]);
var state_32659__$1 = state_32659;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32659__$1,(11),out,inst_32639);
} else {
if((state_val_32660 === (5))){
var inst_32653 = cljs.core.async.close_BANG_(out);
var state_32659__$1 = state_32659;
var statearr_32672_33759 = state_32659__$1;
(statearr_32672_33759[(2)] = inst_32653);

(statearr_32672_33759[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32660 === (10))){
var inst_32651 = (state_32659[(2)]);
var state_32659__$1 = state_32659;
var statearr_32673_33760 = state_32659__$1;
(statearr_32673_33760[(2)] = inst_32651);

(statearr_32673_33760[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32660 === (8))){
var inst_32639 = (state_32659[(7)]);
var inst_32638 = (state_32659[(8)]);
var inst_32629 = (state_32659[(10)]);
var inst_32640 = (state_32659[(9)]);
var inst_32643 = (function (){var cs = inst_32629;
var vec__32634 = inst_32638;
var v = inst_32639;
var c = inst_32640;
return ((function (cs,vec__32634,v,c,inst_32639,inst_32638,inst_32629,inst_32640,state_val_32660,c__31155__auto___33733,out){
return (function (p1__32625_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32625_SHARP_);
});
;})(cs,vec__32634,v,c,inst_32639,inst_32638,inst_32629,inst_32640,state_val_32660,c__31155__auto___33733,out))
})();
var inst_32644 = cljs.core.filterv(inst_32643,inst_32629);
var inst_32629__$1 = inst_32644;
var state_32659__$1 = (function (){var statearr_32674 = state_32659;
(statearr_32674[(10)] = inst_32629__$1);

return statearr_32674;
})();
var statearr_32675_33761 = state_32659__$1;
(statearr_32675_33761[(2)] = null);

(statearr_32675_33761[(1)] = (2));


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
});})(c__31155__auto___33733,out))
;
return ((function (switch__30907__auto__,c__31155__auto___33733,out){
return (function() {
var cljs$core$async$state_machine__30908__auto__ = null;
var cljs$core$async$state_machine__30908__auto____0 = (function (){
var statearr_32676 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32676[(0)] = cljs$core$async$state_machine__30908__auto__);

(statearr_32676[(1)] = (1));

return statearr_32676;
});
var cljs$core$async$state_machine__30908__auto____1 = (function (state_32659){
while(true){
var ret_value__30909__auto__ = (function (){try{while(true){
var result__30910__auto__ = switch__30907__auto__(state_32659);
if(cljs.core.keyword_identical_QMARK_(result__30910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30910__auto__;
}
break;
}
}catch (e32677){if((e32677 instanceof Object)){
var ex__30911__auto__ = e32677;
var statearr_32678_33762 = state_32659;
(statearr_32678_33762[(5)] = ex__30911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32677;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33763 = state_32659;
state_32659 = G__33763;
continue;
} else {
return ret_value__30909__auto__;
}
break;
}
});
cljs$core$async$state_machine__30908__auto__ = function(state_32659){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30908__auto____1.call(this,state_32659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30908__auto____0;
cljs$core$async$state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30908__auto____1;
return cljs$core$async$state_machine__30908__auto__;
})()
;})(switch__30907__auto__,c__31155__auto___33733,out))
})();
var state__31157__auto__ = (function (){var statearr_32679 = (f__31156__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31156__auto__.cljs$core$IFn$_invoke$arity$0() : f__31156__auto__.call(null));
(statearr_32679[(6)] = c__31155__auto___33733);

return statearr_32679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31157__auto__);
});})(c__31155__auto___33733,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

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
var G__32681 = arguments.length;
switch (G__32681) {
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

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31155__auto___33765 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31155__auto___33765,out){
return (function (){
var f__31156__auto__ = (function (){var switch__30907__auto__ = ((function (c__31155__auto___33765,out){
return (function (state_32705){
var state_val_32706 = (state_32705[(1)]);
if((state_val_32706 === (7))){
var inst_32687 = (state_32705[(7)]);
var inst_32687__$1 = (state_32705[(2)]);
var inst_32688 = (inst_32687__$1 == null);
var inst_32689 = cljs.core.not(inst_32688);
var state_32705__$1 = (function (){var statearr_32707 = state_32705;
(statearr_32707[(7)] = inst_32687__$1);

return statearr_32707;
})();
if(inst_32689){
var statearr_32708_33766 = state_32705__$1;
(statearr_32708_33766[(1)] = (8));

} else {
var statearr_32709_33767 = state_32705__$1;
(statearr_32709_33767[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (1))){
var inst_32682 = (0);
var state_32705__$1 = (function (){var statearr_32710 = state_32705;
(statearr_32710[(8)] = inst_32682);

return statearr_32710;
})();
var statearr_32711_33768 = state_32705__$1;
(statearr_32711_33768[(2)] = null);

(statearr_32711_33768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (4))){
var state_32705__$1 = state_32705;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32705__$1,(7),ch);
} else {
if((state_val_32706 === (6))){
var inst_32700 = (state_32705[(2)]);
var state_32705__$1 = state_32705;
var statearr_32712_33769 = state_32705__$1;
(statearr_32712_33769[(2)] = inst_32700);

(statearr_32712_33769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (3))){
var inst_32702 = (state_32705[(2)]);
var inst_32703 = cljs.core.async.close_BANG_(out);
var state_32705__$1 = (function (){var statearr_32713 = state_32705;
(statearr_32713[(9)] = inst_32702);

return statearr_32713;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32705__$1,inst_32703);
} else {
if((state_val_32706 === (2))){
var inst_32682 = (state_32705[(8)]);
var inst_32684 = (inst_32682 < n);
var state_32705__$1 = state_32705;
if(cljs.core.truth_(inst_32684)){
var statearr_32714_33770 = state_32705__$1;
(statearr_32714_33770[(1)] = (4));

} else {
var statearr_32715_33771 = state_32705__$1;
(statearr_32715_33771[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (11))){
var inst_32682 = (state_32705[(8)]);
var inst_32692 = (state_32705[(2)]);
var inst_32693 = (inst_32682 + (1));
var inst_32682__$1 = inst_32693;
var state_32705__$1 = (function (){var statearr_32716 = state_32705;
(statearr_32716[(8)] = inst_32682__$1);

(statearr_32716[(10)] = inst_32692);

return statearr_32716;
})();
var statearr_32717_33772 = state_32705__$1;
(statearr_32717_33772[(2)] = null);

(statearr_32717_33772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (9))){
var state_32705__$1 = state_32705;
var statearr_32718_33773 = state_32705__$1;
(statearr_32718_33773[(2)] = null);

(statearr_32718_33773[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (5))){
var state_32705__$1 = state_32705;
var statearr_32719_33774 = state_32705__$1;
(statearr_32719_33774[(2)] = null);

(statearr_32719_33774[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (10))){
var inst_32697 = (state_32705[(2)]);
var state_32705__$1 = state_32705;
var statearr_32720_33775 = state_32705__$1;
(statearr_32720_33775[(2)] = inst_32697);

(statearr_32720_33775[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (8))){
var inst_32687 = (state_32705[(7)]);
var state_32705__$1 = state_32705;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32705__$1,(11),out,inst_32687);
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
});})(c__31155__auto___33765,out))
;
return ((function (switch__30907__auto__,c__31155__auto___33765,out){
return (function() {
var cljs$core$async$state_machine__30908__auto__ = null;
var cljs$core$async$state_machine__30908__auto____0 = (function (){
var statearr_32721 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32721[(0)] = cljs$core$async$state_machine__30908__auto__);

(statearr_32721[(1)] = (1));

return statearr_32721;
});
var cljs$core$async$state_machine__30908__auto____1 = (function (state_32705){
while(true){
var ret_value__30909__auto__ = (function (){try{while(true){
var result__30910__auto__ = switch__30907__auto__(state_32705);
if(cljs.core.keyword_identical_QMARK_(result__30910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30910__auto__;
}
break;
}
}catch (e32722){if((e32722 instanceof Object)){
var ex__30911__auto__ = e32722;
var statearr_32723_33836 = state_32705;
(statearr_32723_33836[(5)] = ex__30911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32722;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33837 = state_32705;
state_32705 = G__33837;
continue;
} else {
return ret_value__30909__auto__;
}
break;
}
});
cljs$core$async$state_machine__30908__auto__ = function(state_32705){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30908__auto____1.call(this,state_32705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30908__auto____0;
cljs$core$async$state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30908__auto____1;
return cljs$core$async$state_machine__30908__auto__;
})()
;})(switch__30907__auto__,c__31155__auto___33765,out))
})();
var state__31157__auto__ = (function (){var statearr_32724 = (f__31156__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31156__auto__.cljs$core$IFn$_invoke$arity$0() : f__31156__auto__.call(null));
(statearr_32724[(6)] = c__31155__auto___33765);

return statearr_32724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31157__auto__);
});})(c__31155__auto___33765,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32726 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32726 = (function (f,ch,meta32727){
this.f = f;
this.ch = ch;
this.meta32727 = meta32727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32728,meta32727__$1){
var self__ = this;
var _32728__$1 = this;
return (new cljs.core.async.t_cljs$core$async32726(self__.f,self__.ch,meta32727__$1));
});

cljs.core.async.t_cljs$core$async32726.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32728){
var self__ = this;
var _32728__$1 = this;
return self__.meta32727;
});

cljs.core.async.t_cljs$core$async32726.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32726.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32726.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async32726.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32726.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32729 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32729 = (function (f,ch,meta32727,_,fn1,meta32730){
this.f = f;
this.ch = ch;
this.meta32727 = meta32727;
this._ = _;
this.fn1 = fn1;
this.meta32730 = meta32730;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32731,meta32730__$1){
var self__ = this;
var _32731__$1 = this;
return (new cljs.core.async.t_cljs$core$async32729(self__.f,self__.ch,self__.meta32727,self__._,self__.fn1,meta32730__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32729.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32731){
var self__ = this;
var _32731__$1 = this;
return self__.meta32730;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32729.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32729.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32729.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32729.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32725_SHARP_){
var G__32732 = (((p1__32725_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32725_SHARP_) : self__.f.call(null,p1__32725_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32732) : f1.call(null,G__32732));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32729.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32727","meta32727",-1982590006,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32726","cljs.core.async/t_cljs$core$async32726",-1251766860,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32730","meta32730",391744224,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32729.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32729.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32729";

cljs.core.async.t_cljs$core$async32729.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32729");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32729.
 */
cljs.core.async.__GT_t_cljs$core$async32729 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32729(f__$1,ch__$1,meta32727__$1,___$2,fn1__$1,meta32730){
return (new cljs.core.async.t_cljs$core$async32729(f__$1,ch__$1,meta32727__$1,___$2,fn1__$1,meta32730));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32729(self__.f,self__.ch,self__.meta32727,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32733 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32733) : self__.f.call(null,G__32733));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32726.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32726.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32726.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32727","meta32727",-1982590006,null)], null);
});

cljs.core.async.t_cljs$core$async32726.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32726.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32726";

cljs.core.async.t_cljs$core$async32726.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32726");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32726.
 */
cljs.core.async.__GT_t_cljs$core$async32726 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32726(f__$1,ch__$1,meta32727){
return (new cljs.core.async.t_cljs$core$async32726(f__$1,ch__$1,meta32727));
});

}

return (new cljs.core.async.t_cljs$core$async32726(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32734 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32734 = (function (f,ch,meta32735){
this.f = f;
this.ch = ch;
this.meta32735 = meta32735;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32736,meta32735__$1){
var self__ = this;
var _32736__$1 = this;
return (new cljs.core.async.t_cljs$core$async32734(self__.f,self__.ch,meta32735__$1));
});

cljs.core.async.t_cljs$core$async32734.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32736){
var self__ = this;
var _32736__$1 = this;
return self__.meta32735;
});

cljs.core.async.t_cljs$core$async32734.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32734.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32734.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32734.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32734.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32734.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async32734.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32735","meta32735",-275257520,null)], null);
});

cljs.core.async.t_cljs$core$async32734.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32734.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32734";

cljs.core.async.t_cljs$core$async32734.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32734");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32734.
 */
cljs.core.async.__GT_t_cljs$core$async32734 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32734(f__$1,ch__$1,meta32735){
return (new cljs.core.async.t_cljs$core$async32734(f__$1,ch__$1,meta32735));
});

}

return (new cljs.core.async.t_cljs$core$async32734(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32737 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32737 = (function (p,ch,meta32738){
this.p = p;
this.ch = ch;
this.meta32738 = meta32738;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32739,meta32738__$1){
var self__ = this;
var _32739__$1 = this;
return (new cljs.core.async.t_cljs$core$async32737(self__.p,self__.ch,meta32738__$1));
});

cljs.core.async.t_cljs$core$async32737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32739){
var self__ = this;
var _32739__$1 = this;
return self__.meta32738;
});

cljs.core.async.t_cljs$core$async32737.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32737.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32737.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async32737.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32737.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32737.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32737.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32737.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32738","meta32738",1077468281,null)], null);
});

cljs.core.async.t_cljs$core$async32737.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32737.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32737";

cljs.core.async.t_cljs$core$async32737.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32737");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32737.
 */
cljs.core.async.__GT_t_cljs$core$async32737 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32737(p__$1,ch__$1,meta32738){
return (new cljs.core.async.t_cljs$core$async32737(p__$1,ch__$1,meta32738));
});

}

return (new cljs.core.async.t_cljs$core$async32737(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32741 = arguments.length;
switch (G__32741) {
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

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31155__auto___33860 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31155__auto___33860,out){
return (function (){
var f__31156__auto__ = (function (){var switch__30907__auto__ = ((function (c__31155__auto___33860,out){
return (function (state_32762){
var state_val_32763 = (state_32762[(1)]);
if((state_val_32763 === (7))){
var inst_32758 = (state_32762[(2)]);
var state_32762__$1 = state_32762;
var statearr_32764_33861 = state_32762__$1;
(statearr_32764_33861[(2)] = inst_32758);

(statearr_32764_33861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32763 === (1))){
var state_32762__$1 = state_32762;
var statearr_32765_33862 = state_32762__$1;
(statearr_32765_33862[(2)] = null);

(statearr_32765_33862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32763 === (4))){
var inst_32744 = (state_32762[(7)]);
var inst_32744__$1 = (state_32762[(2)]);
var inst_32745 = (inst_32744__$1 == null);
var state_32762__$1 = (function (){var statearr_32766 = state_32762;
(statearr_32766[(7)] = inst_32744__$1);

return statearr_32766;
})();
if(cljs.core.truth_(inst_32745)){
var statearr_32767_33863 = state_32762__$1;
(statearr_32767_33863[(1)] = (5));

} else {
var statearr_32768_33864 = state_32762__$1;
(statearr_32768_33864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32763 === (6))){
var inst_32744 = (state_32762[(7)]);
var inst_32749 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32744) : p.call(null,inst_32744));
var state_32762__$1 = state_32762;
if(cljs.core.truth_(inst_32749)){
var statearr_32769_33865 = state_32762__$1;
(statearr_32769_33865[(1)] = (8));

} else {
var statearr_32770_33866 = state_32762__$1;
(statearr_32770_33866[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32763 === (3))){
var inst_32760 = (state_32762[(2)]);
var state_32762__$1 = state_32762;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32762__$1,inst_32760);
} else {
if((state_val_32763 === (2))){
var state_32762__$1 = state_32762;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32762__$1,(4),ch);
} else {
if((state_val_32763 === (11))){
var inst_32752 = (state_32762[(2)]);
var state_32762__$1 = state_32762;
var statearr_32771_33867 = state_32762__$1;
(statearr_32771_33867[(2)] = inst_32752);

(statearr_32771_33867[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32763 === (9))){
var state_32762__$1 = state_32762;
var statearr_32772_33868 = state_32762__$1;
(statearr_32772_33868[(2)] = null);

(statearr_32772_33868[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32763 === (5))){
var inst_32747 = cljs.core.async.close_BANG_(out);
var state_32762__$1 = state_32762;
var statearr_32773_33869 = state_32762__$1;
(statearr_32773_33869[(2)] = inst_32747);

(statearr_32773_33869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32763 === (10))){
var inst_32755 = (state_32762[(2)]);
var state_32762__$1 = (function (){var statearr_32774 = state_32762;
(statearr_32774[(8)] = inst_32755);

return statearr_32774;
})();
var statearr_32775_33870 = state_32762__$1;
(statearr_32775_33870[(2)] = null);

(statearr_32775_33870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32763 === (8))){
var inst_32744 = (state_32762[(7)]);
var state_32762__$1 = state_32762;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32762__$1,(11),out,inst_32744);
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
});})(c__31155__auto___33860,out))
;
return ((function (switch__30907__auto__,c__31155__auto___33860,out){
return (function() {
var cljs$core$async$state_machine__30908__auto__ = null;
var cljs$core$async$state_machine__30908__auto____0 = (function (){
var statearr_32776 = [null,null,null,null,null,null,null,null,null];
(statearr_32776[(0)] = cljs$core$async$state_machine__30908__auto__);

(statearr_32776[(1)] = (1));

return statearr_32776;
});
var cljs$core$async$state_machine__30908__auto____1 = (function (state_32762){
while(true){
var ret_value__30909__auto__ = (function (){try{while(true){
var result__30910__auto__ = switch__30907__auto__(state_32762);
if(cljs.core.keyword_identical_QMARK_(result__30910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30910__auto__;
}
break;
}
}catch (e32777){if((e32777 instanceof Object)){
var ex__30911__auto__ = e32777;
var statearr_32778_33871 = state_32762;
(statearr_32778_33871[(5)] = ex__30911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32777;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33872 = state_32762;
state_32762 = G__33872;
continue;
} else {
return ret_value__30909__auto__;
}
break;
}
});
cljs$core$async$state_machine__30908__auto__ = function(state_32762){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30908__auto____1.call(this,state_32762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30908__auto____0;
cljs$core$async$state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30908__auto____1;
return cljs$core$async$state_machine__30908__auto__;
})()
;})(switch__30907__auto__,c__31155__auto___33860,out))
})();
var state__31157__auto__ = (function (){var statearr_32779 = (f__31156__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31156__auto__.cljs$core$IFn$_invoke$arity$0() : f__31156__auto__.call(null));
(statearr_32779[(6)] = c__31155__auto___33860);

return statearr_32779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31157__auto__);
});})(c__31155__auto___33860,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32781 = arguments.length;
switch (G__32781) {
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

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31155__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31155__auto__){
return (function (){
var f__31156__auto__ = (function (){var switch__30907__auto__ = ((function (c__31155__auto__){
return (function (state_32843){
var state_val_32844 = (state_32843[(1)]);
if((state_val_32844 === (7))){
var inst_32839 = (state_32843[(2)]);
var state_32843__$1 = state_32843;
var statearr_32845_33874 = state_32843__$1;
(statearr_32845_33874[(2)] = inst_32839);

(statearr_32845_33874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32844 === (20))){
var inst_32809 = (state_32843[(7)]);
var inst_32820 = (state_32843[(2)]);
var inst_32821 = cljs.core.next(inst_32809);
var inst_32795 = inst_32821;
var inst_32796 = null;
var inst_32797 = (0);
var inst_32798 = (0);
var state_32843__$1 = (function (){var statearr_32846 = state_32843;
(statearr_32846[(8)] = inst_32798);

(statearr_32846[(9)] = inst_32820);

(statearr_32846[(10)] = inst_32797);

(statearr_32846[(11)] = inst_32795);

(statearr_32846[(12)] = inst_32796);

return statearr_32846;
})();
var statearr_32847_33875 = state_32843__$1;
(statearr_32847_33875[(2)] = null);

(statearr_32847_33875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32844 === (1))){
var state_32843__$1 = state_32843;
var statearr_32848_33876 = state_32843__$1;
(statearr_32848_33876[(2)] = null);

(statearr_32848_33876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32844 === (4))){
var inst_32784 = (state_32843[(13)]);
var inst_32784__$1 = (state_32843[(2)]);
var inst_32785 = (inst_32784__$1 == null);
var state_32843__$1 = (function (){var statearr_32849 = state_32843;
(statearr_32849[(13)] = inst_32784__$1);

return statearr_32849;
})();
if(cljs.core.truth_(inst_32785)){
var statearr_32850_33877 = state_32843__$1;
(statearr_32850_33877[(1)] = (5));

} else {
var statearr_32851_33878 = state_32843__$1;
(statearr_32851_33878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32844 === (15))){
var state_32843__$1 = state_32843;
var statearr_32855_33879 = state_32843__$1;
(statearr_32855_33879[(2)] = null);

(statearr_32855_33879[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32844 === (21))){
var state_32843__$1 = state_32843;
var statearr_32856_33880 = state_32843__$1;
(statearr_32856_33880[(2)] = null);

(statearr_32856_33880[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32844 === (13))){
var inst_32798 = (state_32843[(8)]);
var inst_32797 = (state_32843[(10)]);
var inst_32795 = (state_32843[(11)]);
var inst_32796 = (state_32843[(12)]);
var inst_32805 = (state_32843[(2)]);
var inst_32806 = (inst_32798 + (1));
var tmp32852 = inst_32797;
var tmp32853 = inst_32795;
var tmp32854 = inst_32796;
var inst_32795__$1 = tmp32853;
var inst_32796__$1 = tmp32854;
var inst_32797__$1 = tmp32852;
var inst_32798__$1 = inst_32806;
var state_32843__$1 = (function (){var statearr_32857 = state_32843;
(statearr_32857[(8)] = inst_32798__$1);

(statearr_32857[(10)] = inst_32797__$1);

(statearr_32857[(11)] = inst_32795__$1);

(statearr_32857[(12)] = inst_32796__$1);

(statearr_32857[(14)] = inst_32805);

return statearr_32857;
})();
var statearr_32858_33881 = state_32843__$1;
(statearr_32858_33881[(2)] = null);

(statearr_32858_33881[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32844 === (22))){
var state_32843__$1 = state_32843;
var statearr_32859_33882 = state_32843__$1;
(statearr_32859_33882[(2)] = null);

(statearr_32859_33882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32844 === (6))){
var inst_32784 = (state_32843[(13)]);
var inst_32793 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32784) : f.call(null,inst_32784));
var inst_32794 = cljs.core.seq(inst_32793);
var inst_32795 = inst_32794;
var inst_32796 = null;
var inst_32797 = (0);
var inst_32798 = (0);
var state_32843__$1 = (function (){var statearr_32860 = state_32843;
(statearr_32860[(8)] = inst_32798);

(statearr_32860[(10)] = inst_32797);

(statearr_32860[(11)] = inst_32795);

(statearr_32860[(12)] = inst_32796);

return statearr_32860;
})();
var statearr_32861_33883 = state_32843__$1;
(statearr_32861_33883[(2)] = null);

(statearr_32861_33883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32844 === (17))){
var inst_32809 = (state_32843[(7)]);
var inst_32813 = cljs.core.chunk_first(inst_32809);
var inst_32814 = cljs.core.chunk_rest(inst_32809);
var inst_32815 = cljs.core.count(inst_32813);
var inst_32795 = inst_32814;
var inst_32796 = inst_32813;
var inst_32797 = inst_32815;
var inst_32798 = (0);
var state_32843__$1 = (function (){var statearr_32862 = state_32843;
(statearr_32862[(8)] = inst_32798);

(statearr_32862[(10)] = inst_32797);

(statearr_32862[(11)] = inst_32795);

(statearr_32862[(12)] = inst_32796);

return statearr_32862;
})();
var statearr_32863_33884 = state_32843__$1;
(statearr_32863_33884[(2)] = null);

(statearr_32863_33884[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32844 === (3))){
var inst_32841 = (state_32843[(2)]);
var state_32843__$1 = state_32843;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32843__$1,inst_32841);
} else {
if((state_val_32844 === (12))){
var inst_32829 = (state_32843[(2)]);
var state_32843__$1 = state_32843;
var statearr_32864_33885 = state_32843__$1;
(statearr_32864_33885[(2)] = inst_32829);

(statearr_32864_33885[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32844 === (2))){
var state_32843__$1 = state_32843;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32843__$1,(4),in$);
} else {
if((state_val_32844 === (23))){
var inst_32837 = (state_32843[(2)]);
var state_32843__$1 = state_32843;
var statearr_32865_33886 = state_32843__$1;
(statearr_32865_33886[(2)] = inst_32837);

(statearr_32865_33886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32844 === (19))){
var inst_32824 = (state_32843[(2)]);
var state_32843__$1 = state_32843;
var statearr_32866_33887 = state_32843__$1;
(statearr_32866_33887[(2)] = inst_32824);

(statearr_32866_33887[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32844 === (11))){
var inst_32809 = (state_32843[(7)]);
var inst_32795 = (state_32843[(11)]);
var inst_32809__$1 = cljs.core.seq(inst_32795);
var state_32843__$1 = (function (){var statearr_32867 = state_32843;
(statearr_32867[(7)] = inst_32809__$1);

return statearr_32867;
})();
if(inst_32809__$1){
var statearr_32868_33888 = state_32843__$1;
(statearr_32868_33888[(1)] = (14));

} else {
var statearr_32869_33889 = state_32843__$1;
(statearr_32869_33889[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32844 === (9))){
var inst_32831 = (state_32843[(2)]);
var inst_32832 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32843__$1 = (function (){var statearr_32870 = state_32843;
(statearr_32870[(15)] = inst_32831);

return statearr_32870;
})();
if(cljs.core.truth_(inst_32832)){
var statearr_32871_33890 = state_32843__$1;
(statearr_32871_33890[(1)] = (21));

} else {
var statearr_32872_33891 = state_32843__$1;
(statearr_32872_33891[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32844 === (5))){
var inst_32787 = cljs.core.async.close_BANG_(out);
var state_32843__$1 = state_32843;
var statearr_32873_34014 = state_32843__$1;
(statearr_32873_34014[(2)] = inst_32787);

(statearr_32873_34014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32844 === (14))){
var inst_32809 = (state_32843[(7)]);
var inst_32811 = cljs.core.chunked_seq_QMARK_(inst_32809);
var state_32843__$1 = state_32843;
if(inst_32811){
var statearr_32874_34015 = state_32843__$1;
(statearr_32874_34015[(1)] = (17));

} else {
var statearr_32875_34016 = state_32843__$1;
(statearr_32875_34016[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32844 === (16))){
var inst_32827 = (state_32843[(2)]);
var state_32843__$1 = state_32843;
var statearr_32876_34017 = state_32843__$1;
(statearr_32876_34017[(2)] = inst_32827);

(statearr_32876_34017[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32844 === (10))){
var inst_32798 = (state_32843[(8)]);
var inst_32796 = (state_32843[(12)]);
var inst_32803 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32796,inst_32798);
var state_32843__$1 = state_32843;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32843__$1,(13),out,inst_32803);
} else {
if((state_val_32844 === (18))){
var inst_32809 = (state_32843[(7)]);
var inst_32818 = cljs.core.first(inst_32809);
var state_32843__$1 = state_32843;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32843__$1,(20),out,inst_32818);
} else {
if((state_val_32844 === (8))){
var inst_32798 = (state_32843[(8)]);
var inst_32797 = (state_32843[(10)]);
var inst_32800 = (inst_32798 < inst_32797);
var inst_32801 = inst_32800;
var state_32843__$1 = state_32843;
if(cljs.core.truth_(inst_32801)){
var statearr_32877_34018 = state_32843__$1;
(statearr_32877_34018[(1)] = (10));

} else {
var statearr_32878_34019 = state_32843__$1;
(statearr_32878_34019[(1)] = (11));

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
});})(c__31155__auto__))
;
return ((function (switch__30907__auto__,c__31155__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30908__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30908__auto____0 = (function (){
var statearr_32879 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32879[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30908__auto__);

(statearr_32879[(1)] = (1));

return statearr_32879;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30908__auto____1 = (function (state_32843){
while(true){
var ret_value__30909__auto__ = (function (){try{while(true){
var result__30910__auto__ = switch__30907__auto__(state_32843);
if(cljs.core.keyword_identical_QMARK_(result__30910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30910__auto__;
}
break;
}
}catch (e32880){if((e32880 instanceof Object)){
var ex__30911__auto__ = e32880;
var statearr_32881_34020 = state_32843;
(statearr_32881_34020[(5)] = ex__30911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32880;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34021 = state_32843;
state_32843 = G__34021;
continue;
} else {
return ret_value__30909__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30908__auto__ = function(state_32843){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30908__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30908__auto____1.call(this,state_32843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30908__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30908__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30908__auto__;
})()
;})(switch__30907__auto__,c__31155__auto__))
})();
var state__31157__auto__ = (function (){var statearr_32882 = (f__31156__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31156__auto__.cljs$core$IFn$_invoke$arity$0() : f__31156__auto__.call(null));
(statearr_32882[(6)] = c__31155__auto__);

return statearr_32882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31157__auto__);
});})(c__31155__auto__))
);

return c__31155__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32884 = arguments.length;
switch (G__32884) {
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

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32886 = arguments.length;
switch (G__32886) {
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

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32888 = arguments.length;
switch (G__32888) {
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

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31155__auto___34028 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31155__auto___34028,out){
return (function (){
var f__31156__auto__ = (function (){var switch__30907__auto__ = ((function (c__31155__auto___34028,out){
return (function (state_32912){
var state_val_32913 = (state_32912[(1)]);
if((state_val_32913 === (7))){
var inst_32907 = (state_32912[(2)]);
var state_32912__$1 = state_32912;
var statearr_32914_34036 = state_32912__$1;
(statearr_32914_34036[(2)] = inst_32907);

(statearr_32914_34036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (1))){
var inst_32889 = null;
var state_32912__$1 = (function (){var statearr_32915 = state_32912;
(statearr_32915[(7)] = inst_32889);

return statearr_32915;
})();
var statearr_32916_34046 = state_32912__$1;
(statearr_32916_34046[(2)] = null);

(statearr_32916_34046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (4))){
var inst_32892 = (state_32912[(8)]);
var inst_32892__$1 = (state_32912[(2)]);
var inst_32893 = (inst_32892__$1 == null);
var inst_32894 = cljs.core.not(inst_32893);
var state_32912__$1 = (function (){var statearr_32917 = state_32912;
(statearr_32917[(8)] = inst_32892__$1);

return statearr_32917;
})();
if(inst_32894){
var statearr_32918_34047 = state_32912__$1;
(statearr_32918_34047[(1)] = (5));

} else {
var statearr_32919_34048 = state_32912__$1;
(statearr_32919_34048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (6))){
var state_32912__$1 = state_32912;
var statearr_32920_34049 = state_32912__$1;
(statearr_32920_34049[(2)] = null);

(statearr_32920_34049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (3))){
var inst_32909 = (state_32912[(2)]);
var inst_32910 = cljs.core.async.close_BANG_(out);
var state_32912__$1 = (function (){var statearr_32921 = state_32912;
(statearr_32921[(9)] = inst_32909);

return statearr_32921;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32912__$1,inst_32910);
} else {
if((state_val_32913 === (2))){
var state_32912__$1 = state_32912;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32912__$1,(4),ch);
} else {
if((state_val_32913 === (11))){
var inst_32892 = (state_32912[(8)]);
var inst_32901 = (state_32912[(2)]);
var inst_32889 = inst_32892;
var state_32912__$1 = (function (){var statearr_32922 = state_32912;
(statearr_32922[(7)] = inst_32889);

(statearr_32922[(10)] = inst_32901);

return statearr_32922;
})();
var statearr_32923_34050 = state_32912__$1;
(statearr_32923_34050[(2)] = null);

(statearr_32923_34050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (9))){
var inst_32892 = (state_32912[(8)]);
var state_32912__$1 = state_32912;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32912__$1,(11),out,inst_32892);
} else {
if((state_val_32913 === (5))){
var inst_32892 = (state_32912[(8)]);
var inst_32889 = (state_32912[(7)]);
var inst_32896 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32892,inst_32889);
var state_32912__$1 = state_32912;
if(inst_32896){
var statearr_32925_34051 = state_32912__$1;
(statearr_32925_34051[(1)] = (8));

} else {
var statearr_32926_34052 = state_32912__$1;
(statearr_32926_34052[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (10))){
var inst_32904 = (state_32912[(2)]);
var state_32912__$1 = state_32912;
var statearr_32927_34053 = state_32912__$1;
(statearr_32927_34053[(2)] = inst_32904);

(statearr_32927_34053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (8))){
var inst_32889 = (state_32912[(7)]);
var tmp32924 = inst_32889;
var inst_32889__$1 = tmp32924;
var state_32912__$1 = (function (){var statearr_32928 = state_32912;
(statearr_32928[(7)] = inst_32889__$1);

return statearr_32928;
})();
var statearr_32929_34058 = state_32912__$1;
(statearr_32929_34058[(2)] = null);

(statearr_32929_34058[(1)] = (2));


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
});})(c__31155__auto___34028,out))
;
return ((function (switch__30907__auto__,c__31155__auto___34028,out){
return (function() {
var cljs$core$async$state_machine__30908__auto__ = null;
var cljs$core$async$state_machine__30908__auto____0 = (function (){
var statearr_32930 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32930[(0)] = cljs$core$async$state_machine__30908__auto__);

(statearr_32930[(1)] = (1));

return statearr_32930;
});
var cljs$core$async$state_machine__30908__auto____1 = (function (state_32912){
while(true){
var ret_value__30909__auto__ = (function (){try{while(true){
var result__30910__auto__ = switch__30907__auto__(state_32912);
if(cljs.core.keyword_identical_QMARK_(result__30910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30910__auto__;
}
break;
}
}catch (e32931){if((e32931 instanceof Object)){
var ex__30911__auto__ = e32931;
var statearr_32932_34073 = state_32912;
(statearr_32932_34073[(5)] = ex__30911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32931;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34077 = state_32912;
state_32912 = G__34077;
continue;
} else {
return ret_value__30909__auto__;
}
break;
}
});
cljs$core$async$state_machine__30908__auto__ = function(state_32912){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30908__auto____1.call(this,state_32912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30908__auto____0;
cljs$core$async$state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30908__auto____1;
return cljs$core$async$state_machine__30908__auto__;
})()
;})(switch__30907__auto__,c__31155__auto___34028,out))
})();
var state__31157__auto__ = (function (){var statearr_32933 = (f__31156__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31156__auto__.cljs$core$IFn$_invoke$arity$0() : f__31156__auto__.call(null));
(statearr_32933[(6)] = c__31155__auto___34028);

return statearr_32933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31157__auto__);
});})(c__31155__auto___34028,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32935 = arguments.length;
switch (G__32935) {
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

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31155__auto___34083 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31155__auto___34083,out){
return (function (){
var f__31156__auto__ = (function (){var switch__30907__auto__ = ((function (c__31155__auto___34083,out){
return (function (state_32973){
var state_val_32974 = (state_32973[(1)]);
if((state_val_32974 === (7))){
var inst_32969 = (state_32973[(2)]);
var state_32973__$1 = state_32973;
var statearr_32975_34084 = state_32973__$1;
(statearr_32975_34084[(2)] = inst_32969);

(statearr_32975_34084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32974 === (1))){
var inst_32936 = (new Array(n));
var inst_32937 = inst_32936;
var inst_32938 = (0);
var state_32973__$1 = (function (){var statearr_32976 = state_32973;
(statearr_32976[(7)] = inst_32938);

(statearr_32976[(8)] = inst_32937);

return statearr_32976;
})();
var statearr_32977_34085 = state_32973__$1;
(statearr_32977_34085[(2)] = null);

(statearr_32977_34085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32974 === (4))){
var inst_32941 = (state_32973[(9)]);
var inst_32941__$1 = (state_32973[(2)]);
var inst_32942 = (inst_32941__$1 == null);
var inst_32943 = cljs.core.not(inst_32942);
var state_32973__$1 = (function (){var statearr_32978 = state_32973;
(statearr_32978[(9)] = inst_32941__$1);

return statearr_32978;
})();
if(inst_32943){
var statearr_32979_34086 = state_32973__$1;
(statearr_32979_34086[(1)] = (5));

} else {
var statearr_32980_34087 = state_32973__$1;
(statearr_32980_34087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32974 === (15))){
var inst_32963 = (state_32973[(2)]);
var state_32973__$1 = state_32973;
var statearr_32981_34088 = state_32973__$1;
(statearr_32981_34088[(2)] = inst_32963);

(statearr_32981_34088[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32974 === (13))){
var state_32973__$1 = state_32973;
var statearr_32982_34104 = state_32973__$1;
(statearr_32982_34104[(2)] = null);

(statearr_32982_34104[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32974 === (6))){
var inst_32938 = (state_32973[(7)]);
var inst_32959 = (inst_32938 > (0));
var state_32973__$1 = state_32973;
if(cljs.core.truth_(inst_32959)){
var statearr_32983_34105 = state_32973__$1;
(statearr_32983_34105[(1)] = (12));

} else {
var statearr_32984_34106 = state_32973__$1;
(statearr_32984_34106[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32974 === (3))){
var inst_32971 = (state_32973[(2)]);
var state_32973__$1 = state_32973;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32973__$1,inst_32971);
} else {
if((state_val_32974 === (12))){
var inst_32937 = (state_32973[(8)]);
var inst_32961 = cljs.core.vec(inst_32937);
var state_32973__$1 = state_32973;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32973__$1,(15),out,inst_32961);
} else {
if((state_val_32974 === (2))){
var state_32973__$1 = state_32973;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32973__$1,(4),ch);
} else {
if((state_val_32974 === (11))){
var inst_32953 = (state_32973[(2)]);
var inst_32954 = (new Array(n));
var inst_32937 = inst_32954;
var inst_32938 = (0);
var state_32973__$1 = (function (){var statearr_32985 = state_32973;
(statearr_32985[(7)] = inst_32938);

(statearr_32985[(10)] = inst_32953);

(statearr_32985[(8)] = inst_32937);

return statearr_32985;
})();
var statearr_32986_34107 = state_32973__$1;
(statearr_32986_34107[(2)] = null);

(statearr_32986_34107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32974 === (9))){
var inst_32937 = (state_32973[(8)]);
var inst_32951 = cljs.core.vec(inst_32937);
var state_32973__$1 = state_32973;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32973__$1,(11),out,inst_32951);
} else {
if((state_val_32974 === (5))){
var inst_32941 = (state_32973[(9)]);
var inst_32938 = (state_32973[(7)]);
var inst_32937 = (state_32973[(8)]);
var inst_32946 = (state_32973[(11)]);
var inst_32945 = (inst_32937[inst_32938] = inst_32941);
var inst_32946__$1 = (inst_32938 + (1));
var inst_32947 = (inst_32946__$1 < n);
var state_32973__$1 = (function (){var statearr_32987 = state_32973;
(statearr_32987[(12)] = inst_32945);

(statearr_32987[(11)] = inst_32946__$1);

return statearr_32987;
})();
if(cljs.core.truth_(inst_32947)){
var statearr_32988_34112 = state_32973__$1;
(statearr_32988_34112[(1)] = (8));

} else {
var statearr_32989_34113 = state_32973__$1;
(statearr_32989_34113[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32974 === (14))){
var inst_32966 = (state_32973[(2)]);
var inst_32967 = cljs.core.async.close_BANG_(out);
var state_32973__$1 = (function (){var statearr_32991 = state_32973;
(statearr_32991[(13)] = inst_32966);

return statearr_32991;
})();
var statearr_32992_34117 = state_32973__$1;
(statearr_32992_34117[(2)] = inst_32967);

(statearr_32992_34117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32974 === (10))){
var inst_32957 = (state_32973[(2)]);
var state_32973__$1 = state_32973;
var statearr_32993_34118 = state_32973__$1;
(statearr_32993_34118[(2)] = inst_32957);

(statearr_32993_34118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32974 === (8))){
var inst_32937 = (state_32973[(8)]);
var inst_32946 = (state_32973[(11)]);
var tmp32990 = inst_32937;
var inst_32937__$1 = tmp32990;
var inst_32938 = inst_32946;
var state_32973__$1 = (function (){var statearr_32994 = state_32973;
(statearr_32994[(7)] = inst_32938);

(statearr_32994[(8)] = inst_32937__$1);

return statearr_32994;
})();
var statearr_32995_34119 = state_32973__$1;
(statearr_32995_34119[(2)] = null);

(statearr_32995_34119[(1)] = (2));


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
});})(c__31155__auto___34083,out))
;
return ((function (switch__30907__auto__,c__31155__auto___34083,out){
return (function() {
var cljs$core$async$state_machine__30908__auto__ = null;
var cljs$core$async$state_machine__30908__auto____0 = (function (){
var statearr_32996 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32996[(0)] = cljs$core$async$state_machine__30908__auto__);

(statearr_32996[(1)] = (1));

return statearr_32996;
});
var cljs$core$async$state_machine__30908__auto____1 = (function (state_32973){
while(true){
var ret_value__30909__auto__ = (function (){try{while(true){
var result__30910__auto__ = switch__30907__auto__(state_32973);
if(cljs.core.keyword_identical_QMARK_(result__30910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30910__auto__;
}
break;
}
}catch (e32997){if((e32997 instanceof Object)){
var ex__30911__auto__ = e32997;
var statearr_32998_34120 = state_32973;
(statearr_32998_34120[(5)] = ex__30911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32997;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34121 = state_32973;
state_32973 = G__34121;
continue;
} else {
return ret_value__30909__auto__;
}
break;
}
});
cljs$core$async$state_machine__30908__auto__ = function(state_32973){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30908__auto____1.call(this,state_32973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30908__auto____0;
cljs$core$async$state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30908__auto____1;
return cljs$core$async$state_machine__30908__auto__;
})()
;})(switch__30907__auto__,c__31155__auto___34083,out))
})();
var state__31157__auto__ = (function (){var statearr_32999 = (f__31156__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31156__auto__.cljs$core$IFn$_invoke$arity$0() : f__31156__auto__.call(null));
(statearr_32999[(6)] = c__31155__auto___34083);

return statearr_32999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31157__auto__);
});})(c__31155__auto___34083,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33001 = arguments.length;
switch (G__33001) {
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

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31155__auto___34123 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31155__auto___34123,out){
return (function (){
var f__31156__auto__ = (function (){var switch__30907__auto__ = ((function (c__31155__auto___34123,out){
return (function (state_33043){
var state_val_33044 = (state_33043[(1)]);
if((state_val_33044 === (7))){
var inst_33039 = (state_33043[(2)]);
var state_33043__$1 = state_33043;
var statearr_33045_34124 = state_33043__$1;
(statearr_33045_34124[(2)] = inst_33039);

(statearr_33045_34124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (1))){
var inst_33002 = [];
var inst_33003 = inst_33002;
var inst_33004 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33043__$1 = (function (){var statearr_33046 = state_33043;
(statearr_33046[(7)] = inst_33003);

(statearr_33046[(8)] = inst_33004);

return statearr_33046;
})();
var statearr_33047_34125 = state_33043__$1;
(statearr_33047_34125[(2)] = null);

(statearr_33047_34125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (4))){
var inst_33007 = (state_33043[(9)]);
var inst_33007__$1 = (state_33043[(2)]);
var inst_33008 = (inst_33007__$1 == null);
var inst_33009 = cljs.core.not(inst_33008);
var state_33043__$1 = (function (){var statearr_33048 = state_33043;
(statearr_33048[(9)] = inst_33007__$1);

return statearr_33048;
})();
if(inst_33009){
var statearr_33049_34126 = state_33043__$1;
(statearr_33049_34126[(1)] = (5));

} else {
var statearr_33050_34127 = state_33043__$1;
(statearr_33050_34127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (15))){
var inst_33033 = (state_33043[(2)]);
var state_33043__$1 = state_33043;
var statearr_33051_34128 = state_33043__$1;
(statearr_33051_34128[(2)] = inst_33033);

(statearr_33051_34128[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (13))){
var state_33043__$1 = state_33043;
var statearr_33052_34129 = state_33043__$1;
(statearr_33052_34129[(2)] = null);

(statearr_33052_34129[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (6))){
var inst_33003 = (state_33043[(7)]);
var inst_33028 = inst_33003.length;
var inst_33029 = (inst_33028 > (0));
var state_33043__$1 = state_33043;
if(cljs.core.truth_(inst_33029)){
var statearr_33053_34130 = state_33043__$1;
(statearr_33053_34130[(1)] = (12));

} else {
var statearr_33054_34131 = state_33043__$1;
(statearr_33054_34131[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (3))){
var inst_33041 = (state_33043[(2)]);
var state_33043__$1 = state_33043;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33043__$1,inst_33041);
} else {
if((state_val_33044 === (12))){
var inst_33003 = (state_33043[(7)]);
var inst_33031 = cljs.core.vec(inst_33003);
var state_33043__$1 = state_33043;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33043__$1,(15),out,inst_33031);
} else {
if((state_val_33044 === (2))){
var state_33043__$1 = state_33043;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33043__$1,(4),ch);
} else {
if((state_val_33044 === (11))){
var inst_33011 = (state_33043[(10)]);
var inst_33007 = (state_33043[(9)]);
var inst_33021 = (state_33043[(2)]);
var inst_33022 = [];
var inst_33023 = inst_33022.push(inst_33007);
var inst_33003 = inst_33022;
var inst_33004 = inst_33011;
var state_33043__$1 = (function (){var statearr_33055 = state_33043;
(statearr_33055[(7)] = inst_33003);

(statearr_33055[(8)] = inst_33004);

(statearr_33055[(11)] = inst_33021);

(statearr_33055[(12)] = inst_33023);

return statearr_33055;
})();
var statearr_33056_34132 = state_33043__$1;
(statearr_33056_34132[(2)] = null);

(statearr_33056_34132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (9))){
var inst_33003 = (state_33043[(7)]);
var inst_33019 = cljs.core.vec(inst_33003);
var state_33043__$1 = state_33043;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33043__$1,(11),out,inst_33019);
} else {
if((state_val_33044 === (5))){
var inst_33004 = (state_33043[(8)]);
var inst_33011 = (state_33043[(10)]);
var inst_33007 = (state_33043[(9)]);
var inst_33011__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33007) : f.call(null,inst_33007));
var inst_33012 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33011__$1,inst_33004);
var inst_33013 = cljs.core.keyword_identical_QMARK_(inst_33004,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33014 = ((inst_33012) || (inst_33013));
var state_33043__$1 = (function (){var statearr_33057 = state_33043;
(statearr_33057[(10)] = inst_33011__$1);

return statearr_33057;
})();
if(cljs.core.truth_(inst_33014)){
var statearr_33058_34133 = state_33043__$1;
(statearr_33058_34133[(1)] = (8));

} else {
var statearr_33059_34134 = state_33043__$1;
(statearr_33059_34134[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (14))){
var inst_33036 = (state_33043[(2)]);
var inst_33037 = cljs.core.async.close_BANG_(out);
var state_33043__$1 = (function (){var statearr_33061 = state_33043;
(statearr_33061[(13)] = inst_33036);

return statearr_33061;
})();
var statearr_33062_34135 = state_33043__$1;
(statearr_33062_34135[(2)] = inst_33037);

(statearr_33062_34135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (10))){
var inst_33026 = (state_33043[(2)]);
var state_33043__$1 = state_33043;
var statearr_33063_34136 = state_33043__$1;
(statearr_33063_34136[(2)] = inst_33026);

(statearr_33063_34136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (8))){
var inst_33003 = (state_33043[(7)]);
var inst_33011 = (state_33043[(10)]);
var inst_33007 = (state_33043[(9)]);
var inst_33016 = inst_33003.push(inst_33007);
var tmp33060 = inst_33003;
var inst_33003__$1 = tmp33060;
var inst_33004 = inst_33011;
var state_33043__$1 = (function (){var statearr_33064 = state_33043;
(statearr_33064[(7)] = inst_33003__$1);

(statearr_33064[(8)] = inst_33004);

(statearr_33064[(14)] = inst_33016);

return statearr_33064;
})();
var statearr_33065_34137 = state_33043__$1;
(statearr_33065_34137[(2)] = null);

(statearr_33065_34137[(1)] = (2));


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
});})(c__31155__auto___34123,out))
;
return ((function (switch__30907__auto__,c__31155__auto___34123,out){
return (function() {
var cljs$core$async$state_machine__30908__auto__ = null;
var cljs$core$async$state_machine__30908__auto____0 = (function (){
var statearr_33066 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33066[(0)] = cljs$core$async$state_machine__30908__auto__);

(statearr_33066[(1)] = (1));

return statearr_33066;
});
var cljs$core$async$state_machine__30908__auto____1 = (function (state_33043){
while(true){
var ret_value__30909__auto__ = (function (){try{while(true){
var result__30910__auto__ = switch__30907__auto__(state_33043);
if(cljs.core.keyword_identical_QMARK_(result__30910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30910__auto__;
}
break;
}
}catch (e33067){if((e33067 instanceof Object)){
var ex__30911__auto__ = e33067;
var statearr_33068_34143 = state_33043;
(statearr_33068_34143[(5)] = ex__30911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33067;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34144 = state_33043;
state_33043 = G__34144;
continue;
} else {
return ret_value__30909__auto__;
}
break;
}
});
cljs$core$async$state_machine__30908__auto__ = function(state_33043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30908__auto____1.call(this,state_33043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30908__auto____0;
cljs$core$async$state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30908__auto____1;
return cljs$core$async$state_machine__30908__auto__;
})()
;})(switch__30907__auto__,c__31155__auto___34123,out))
})();
var state__31157__auto__ = (function (){var statearr_33069 = (f__31156__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31156__auto__.cljs$core$IFn$_invoke$arity$0() : f__31156__auto__.call(null));
(statearr_33069[(6)] = c__31155__auto___34123);

return statearr_33069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31157__auto__);
});})(c__31155__auto___34123,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
