goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__27122){
var map__27123 = p__27122;
var map__27123__$1 = (((((!((map__27123 == null))))?(((((map__27123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27123):map__27123);
var m = map__27123__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27123__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27123__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
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
var seq__27127_27290 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27128_27291 = null;
var count__27129_27292 = (0);
var i__27130_27293 = (0);
while(true){
if((i__27130_27293 < count__27129_27292)){
var f_27294 = chunk__27128_27291.cljs$core$IIndexed$_nth$arity$2(null,i__27130_27293);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27294], 0));


var G__27295 = seq__27127_27290;
var G__27296 = chunk__27128_27291;
var G__27297 = count__27129_27292;
var G__27298 = (i__27130_27293 + (1));
seq__27127_27290 = G__27295;
chunk__27128_27291 = G__27296;
count__27129_27292 = G__27297;
i__27130_27293 = G__27298;
continue;
} else {
var temp__5735__auto___27299 = cljs.core.seq(seq__27127_27290);
if(temp__5735__auto___27299){
var seq__27127_27300__$1 = temp__5735__auto___27299;
if(cljs.core.chunked_seq_QMARK_(seq__27127_27300__$1)){
var c__4550__auto___27301 = cljs.core.chunk_first(seq__27127_27300__$1);
var G__27302 = cljs.core.chunk_rest(seq__27127_27300__$1);
var G__27303 = c__4550__auto___27301;
var G__27304 = cljs.core.count(c__4550__auto___27301);
var G__27305 = (0);
seq__27127_27290 = G__27302;
chunk__27128_27291 = G__27303;
count__27129_27292 = G__27304;
i__27130_27293 = G__27305;
continue;
} else {
var f_27306 = cljs.core.first(seq__27127_27300__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27306], 0));


var G__27307 = cljs.core.next(seq__27127_27300__$1);
var G__27308 = null;
var G__27309 = (0);
var G__27310 = (0);
seq__27127_27290 = G__27307;
chunk__27128_27291 = G__27308;
count__27129_27292 = G__27309;
i__27130_27293 = G__27310;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27315 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_27315], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_27315)))?cljs.core.second(arglists_27315):arglists_27315)], 0));
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
var seq__27136_27320 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27137_27321 = null;
var count__27138_27322 = (0);
var i__27139_27323 = (0);
while(true){
if((i__27139_27323 < count__27138_27322)){
var vec__27155_27324 = chunk__27137_27321.cljs$core$IIndexed$_nth$arity$2(null,i__27139_27323);
var name_27325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27155_27324,(0),null);
var map__27158_27326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27155_27324,(1),null);
var map__27158_27327__$1 = (((((!((map__27158_27326 == null))))?(((((map__27158_27326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27158_27326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27158_27326):map__27158_27326);
var doc_27328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27158_27327__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27329 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27158_27327__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27325], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27329], 0));

if(cljs.core.truth_(doc_27328)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27328], 0));
} else {
}


var G__27334 = seq__27136_27320;
var G__27335 = chunk__27137_27321;
var G__27336 = count__27138_27322;
var G__27337 = (i__27139_27323 + (1));
seq__27136_27320 = G__27334;
chunk__27137_27321 = G__27335;
count__27138_27322 = G__27336;
i__27139_27323 = G__27337;
continue;
} else {
var temp__5735__auto___27338 = cljs.core.seq(seq__27136_27320);
if(temp__5735__auto___27338){
var seq__27136_27340__$1 = temp__5735__auto___27338;
if(cljs.core.chunked_seq_QMARK_(seq__27136_27340__$1)){
var c__4550__auto___27341 = cljs.core.chunk_first(seq__27136_27340__$1);
var G__27342 = cljs.core.chunk_rest(seq__27136_27340__$1);
var G__27343 = c__4550__auto___27341;
var G__27344 = cljs.core.count(c__4550__auto___27341);
var G__27345 = (0);
seq__27136_27320 = G__27342;
chunk__27137_27321 = G__27343;
count__27138_27322 = G__27344;
i__27139_27323 = G__27345;
continue;
} else {
var vec__27161_27346 = cljs.core.first(seq__27136_27340__$1);
var name_27347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27161_27346,(0),null);
var map__27164_27348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27161_27346,(1),null);
var map__27164_27349__$1 = (((((!((map__27164_27348 == null))))?(((((map__27164_27348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27164_27348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27164_27348):map__27164_27348);
var doc_27350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27164_27349__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27351 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27164_27349__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27347], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27351], 0));

if(cljs.core.truth_(doc_27350)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27350], 0));
} else {
}


var G__27358 = cljs.core.next(seq__27136_27340__$1);
var G__27359 = null;
var G__27360 = (0);
var G__27361 = (0);
seq__27136_27320 = G__27358;
chunk__27137_27321 = G__27359;
count__27138_27322 = G__27360;
i__27139_27323 = G__27361;
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
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__27166 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__27167 = null;
var count__27168 = (0);
var i__27169 = (0);
while(true){
if((i__27169 < count__27168)){
var role = chunk__27167.cljs$core$IIndexed$_nth$arity$2(null,i__27169);
var temp__5735__auto___27364__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___27364__$1)){
var spec_27365 = temp__5735__auto___27364__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_27365)], 0));
} else {
}


var G__27366 = seq__27166;
var G__27367 = chunk__27167;
var G__27368 = count__27168;
var G__27369 = (i__27169 + (1));
seq__27166 = G__27366;
chunk__27167 = G__27367;
count__27168 = G__27368;
i__27169 = G__27369;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__27166);
if(temp__5735__auto____$1){
var seq__27166__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__27166__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__27166__$1);
var G__27370 = cljs.core.chunk_rest(seq__27166__$1);
var G__27371 = c__4550__auto__;
var G__27372 = cljs.core.count(c__4550__auto__);
var G__27373 = (0);
seq__27166 = G__27370;
chunk__27167 = G__27371;
count__27168 = G__27372;
i__27169 = G__27373;
continue;
} else {
var role = cljs.core.first(seq__27166__$1);
var temp__5735__auto___27374__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___27374__$2)){
var spec_27375 = temp__5735__auto___27374__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_27375)], 0));
} else {
}


var G__27376 = cljs.core.next(seq__27166__$1);
var G__27377 = null;
var G__27378 = (0);
var G__27379 = (0);
seq__27166 = G__27376;
chunk__27167 = G__27377;
count__27168 = G__27378;
i__27169 = G__27379;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
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
var G__27394 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__27395 = cljs.core.ex_cause(t);
via = G__27394;
t = G__27395;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
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
var map__27189 = datafied_throwable;
var map__27189__$1 = (((((!((map__27189 == null))))?(((((map__27189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27189):map__27189);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27189__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27189__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27189__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__27190 = cljs.core.last(via);
var map__27190__$1 = (((((!((map__27190 == null))))?(((((map__27190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27190):map__27190);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27190__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27190__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27190__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__27191 = data;
var map__27191__$1 = (((((!((map__27191 == null))))?(((((map__27191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27191):map__27191);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27191__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27191__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27191__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__27192 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__27192__$1 = (((((!((map__27192 == null))))?(((((map__27192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27192):map__27192);
var top_data = map__27192__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27192__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__27197 = phase;
var G__27197__$1 = (((G__27197 instanceof cljs.core.Keyword))?G__27197.fqn:null);
switch (G__27197__$1) {
case "read-source":
var map__27198 = data;
var map__27198__$1 = (((((!((map__27198 == null))))?(((((map__27198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27198):map__27198);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27198__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27198__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__27204 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__27204__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27204,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27204);
var G__27204__$2 = (cljs.core.truth_((function (){var fexpr__27205 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27205.cljs$core$IFn$_invoke$arity$1 ? fexpr__27205.cljs$core$IFn$_invoke$arity$1(source) : fexpr__27205.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27204__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27204__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27204__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27204__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__27206 = top_data;
var G__27206__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27206,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27206);
var G__27206__$2 = (cljs.core.truth_((function (){var fexpr__27207 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27207.cljs$core$IFn$_invoke$arity$1 ? fexpr__27207.cljs$core$IFn$_invoke$arity$1(source) : fexpr__27207.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27206__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27206__$1);
var G__27206__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27206__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27206__$2);
var G__27206__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27206__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27206__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27206__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27206__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__27208 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27208,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27208,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27208,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27208,(3),null);
var G__27211 = top_data;
var G__27211__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27211,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__27211);
var G__27211__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27211__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__27211__$1);
var G__27211__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27211__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__27211__$2);
var G__27211__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27211__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27211__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27211__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27211__$4;
}

break;
case "execution":
var vec__27213 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27213,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27213,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27213,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27213,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__27213,source__$1,method,file,line,G__27197,G__27197__$1,map__27189,map__27189__$1,via,trace,phase,map__27190,map__27190__$1,type,message,data,map__27191,map__27191__$1,problems,fn,caller,map__27192,map__27192__$1,top_data,source){
return (function (p1__27188_SHARP_){
var or__4131__auto__ = (p1__27188_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__27219 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27219.cljs$core$IFn$_invoke$arity$1 ? fexpr__27219.cljs$core$IFn$_invoke$arity$1(p1__27188_SHARP_) : fexpr__27219.call(null,p1__27188_SHARP_));
}
});})(vec__27213,source__$1,method,file,line,G__27197,G__27197__$1,map__27189,map__27189__$1,via,trace,phase,map__27190,map__27190__$1,type,message,data,map__27191,map__27191__$1,problems,fn,caller,map__27192,map__27192__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__27222 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__27222__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27222,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__27222);
var G__27222__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27222__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27222__$1);
var G__27222__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27222__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__27222__$2);
var G__27222__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27222__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__27222__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27222__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27222__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27197__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__27231){
var map__27232 = p__27231;
var map__27232__$1 = (((((!((map__27232 == null))))?(((((map__27232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27232):map__27232);
var triage_data = map__27232__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27232__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27232__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27232__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27232__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27232__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27232__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27232__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27232__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__27246 = phase;
var G__27246__$1 = (((G__27246 instanceof cljs.core.Keyword))?G__27246.fqn:null);
switch (G__27246__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__27247 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__27248 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27249 = loc;
var G__27250 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27253_27430 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27254_27431 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27255_27432 = true;
var _STAR_print_fn_STAR__temp_val__27256_27433 = ((function (_STAR_print_newline_STAR__orig_val__27253_27430,_STAR_print_fn_STAR__orig_val__27254_27431,_STAR_print_newline_STAR__temp_val__27255_27432,sb__4661__auto__,G__27247,G__27248,G__27249,G__27246,G__27246__$1,loc,class_name,simple_class,cause_type,format,map__27232,map__27232__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__27253_27430,_STAR_print_fn_STAR__orig_val__27254_27431,_STAR_print_newline_STAR__temp_val__27255_27432,sb__4661__auto__,G__27247,G__27248,G__27249,G__27246,G__27246__$1,loc,class_name,simple_class,cause_type,format,map__27232,map__27232__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27255_27432;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27256_27433;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__27253_27430,_STAR_print_fn_STAR__orig_val__27254_27431,_STAR_print_newline_STAR__temp_val__27255_27432,_STAR_print_fn_STAR__temp_val__27256_27433,sb__4661__auto__,G__27247,G__27248,G__27249,G__27246,G__27246__$1,loc,class_name,simple_class,cause_type,format,map__27232,map__27232__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__27253_27430,_STAR_print_fn_STAR__orig_val__27254_27431,_STAR_print_newline_STAR__temp_val__27255_27432,_STAR_print_fn_STAR__temp_val__27256_27433,sb__4661__auto__,G__27247,G__27248,G__27249,G__27246,G__27246__$1,loc,class_name,simple_class,cause_type,format,map__27232,map__27232__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__27227_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__27227_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__27253_27430,_STAR_print_fn_STAR__orig_val__27254_27431,_STAR_print_newline_STAR__temp_val__27255_27432,_STAR_print_fn_STAR__temp_val__27256_27433,sb__4661__auto__,G__27247,G__27248,G__27249,G__27246,G__27246__$1,loc,class_name,simple_class,cause_type,format,map__27232,map__27232__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__27253_27430,_STAR_print_fn_STAR__orig_val__27254_27431,_STAR_print_newline_STAR__temp_val__27255_27432,_STAR_print_fn_STAR__temp_val__27256_27433,sb__4661__auto__,G__27247,G__27248,G__27249,G__27246,G__27246__$1,loc,class_name,simple_class,cause_type,format,map__27232,map__27232__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27254_27431;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27253_27430;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__27247,G__27248,G__27249,G__27250) : format.call(null,G__27247,G__27248,G__27249,G__27250));

break;
case "macroexpansion":
var G__27260 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__27261 = cause_type;
var G__27262 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27263 = loc;
var G__27264 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27260,G__27261,G__27262,G__27263,G__27264) : format.call(null,G__27260,G__27261,G__27262,G__27263,G__27264));

break;
case "compile-syntax-check":
var G__27265 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__27266 = cause_type;
var G__27267 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27268 = loc;
var G__27269 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27265,G__27266,G__27267,G__27268,G__27269) : format.call(null,G__27265,G__27266,G__27267,G__27268,G__27269));

break;
case "compilation":
var G__27270 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__27271 = cause_type;
var G__27272 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27273 = loc;
var G__27274 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27270,G__27271,G__27272,G__27273,G__27274) : format.call(null,G__27270,G__27271,G__27272,G__27273,G__27274));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__27275 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__27276 = symbol;
var G__27277 = loc;
var G__27278 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27279_27438 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27280_27439 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27281_27440 = true;
var _STAR_print_fn_STAR__temp_val__27282_27441 = ((function (_STAR_print_newline_STAR__orig_val__27279_27438,_STAR_print_fn_STAR__orig_val__27280_27439,_STAR_print_newline_STAR__temp_val__27281_27440,sb__4661__auto__,G__27275,G__27276,G__27277,G__27246,G__27246__$1,loc,class_name,simple_class,cause_type,format,map__27232,map__27232__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__27279_27438,_STAR_print_fn_STAR__orig_val__27280_27439,_STAR_print_newline_STAR__temp_val__27281_27440,sb__4661__auto__,G__27275,G__27276,G__27277,G__27246,G__27246__$1,loc,class_name,simple_class,cause_type,format,map__27232,map__27232__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27281_27440;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27282_27441;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__27279_27438,_STAR_print_fn_STAR__orig_val__27280_27439,_STAR_print_newline_STAR__temp_val__27281_27440,_STAR_print_fn_STAR__temp_val__27282_27441,sb__4661__auto__,G__27275,G__27276,G__27277,G__27246,G__27246__$1,loc,class_name,simple_class,cause_type,format,map__27232,map__27232__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__27279_27438,_STAR_print_fn_STAR__orig_val__27280_27439,_STAR_print_newline_STAR__temp_val__27281_27440,_STAR_print_fn_STAR__temp_val__27282_27441,sb__4661__auto__,G__27275,G__27276,G__27277,G__27246,G__27246__$1,loc,class_name,simple_class,cause_type,format,map__27232,map__27232__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__27230_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__27230_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__27279_27438,_STAR_print_fn_STAR__orig_val__27280_27439,_STAR_print_newline_STAR__temp_val__27281_27440,_STAR_print_fn_STAR__temp_val__27282_27441,sb__4661__auto__,G__27275,G__27276,G__27277,G__27246,G__27246__$1,loc,class_name,simple_class,cause_type,format,map__27232,map__27232__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__27279_27438,_STAR_print_fn_STAR__orig_val__27280_27439,_STAR_print_newline_STAR__temp_val__27281_27440,_STAR_print_fn_STAR__temp_val__27282_27441,sb__4661__auto__,G__27275,G__27276,G__27277,G__27246,G__27246__$1,loc,class_name,simple_class,cause_type,format,map__27232,map__27232__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27280_27439;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27279_27438;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__27275,G__27276,G__27277,G__27278) : format.call(null,G__27275,G__27276,G__27277,G__27278));
} else {
var G__27285 = "Execution error%s at %s(%s).\n%s\n";
var G__27286 = cause_type;
var G__27287 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27288 = loc;
var G__27289 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27285,G__27286,G__27287,G__27288,G__27289) : format.call(null,G__27285,G__27286,G__27287,G__27288,G__27289));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27246__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
