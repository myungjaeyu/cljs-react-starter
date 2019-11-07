goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__34108){
var vec__34109 = p__34108;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34109,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34109,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__34114 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34114,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34114,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34114,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__34171 = arguments.length;
switch (G__34171) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__34270_34332 = clojure.data.equality_partition;
var G__34271_34333 = "null";
var G__34272_34334 = ((function (G__34270_34332,G__34271_34333){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__34270_34332,G__34271_34333))
;
goog.object.set(G__34270_34332,G__34271_34333,G__34272_34334);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__34273_34335 = clojure.data.equality_partition;
var G__34274_34336 = "string";
var G__34275_34337 = ((function (G__34273_34335,G__34274_34336){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__34273_34335,G__34274_34336))
;
goog.object.set(G__34273_34335,G__34274_34336,G__34275_34337);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__34276_34338 = clojure.data.equality_partition;
var G__34277_34339 = "number";
var G__34278_34340 = ((function (G__34276_34338,G__34277_34339){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__34276_34338,G__34277_34339))
;
goog.object.set(G__34276_34338,G__34277_34339,G__34278_34340);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__34279_34341 = clojure.data.equality_partition;
var G__34280_34342 = "array";
var G__34281_34343 = ((function (G__34279_34341,G__34280_34342){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__34279_34341,G__34280_34342))
;
goog.object.set(G__34279_34341,G__34280_34342,G__34281_34343);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__34282_34344 = clojure.data.equality_partition;
var G__34283_34345 = "function";
var G__34284_34346 = ((function (G__34282_34344,G__34283_34345){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__34282_34344,G__34283_34345))
;
goog.object.set(G__34282_34344,G__34283_34345,G__34284_34346);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__34288_34347 = clojure.data.equality_partition;
var G__34289_34348 = "boolean";
var G__34290_34349 = ((function (G__34288_34347,G__34289_34348){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__34288_34347,G__34289_34348))
;
goog.object.set(G__34288_34347,G__34289_34348,G__34290_34349);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__34294_34350 = clojure.data.equality_partition;
var G__34295_34351 = "_";
var G__34296_34352 = ((function (G__34294_34350,G__34295_34351){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__34294_34350,G__34295_34351))
;
goog.object.set(G__34294_34350,G__34295_34351,G__34296_34352);
goog.object.set(clojure.data.Diff,"null",true);

var G__34300_34353 = clojure.data.diff_similar;
var G__34301_34354 = "null";
var G__34302_34355 = ((function (G__34300_34353,G__34301_34354){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__34300_34353,G__34301_34354))
;
goog.object.set(G__34300_34353,G__34301_34354,G__34302_34355);

goog.object.set(clojure.data.Diff,"string",true);

var G__34303_34356 = clojure.data.diff_similar;
var G__34304_34357 = "string";
var G__34305_34358 = ((function (G__34303_34356,G__34304_34357){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__34303_34356,G__34304_34357))
;
goog.object.set(G__34303_34356,G__34304_34357,G__34305_34358);

goog.object.set(clojure.data.Diff,"number",true);

var G__34313_34359 = clojure.data.diff_similar;
var G__34314_34360 = "number";
var G__34315_34361 = ((function (G__34313_34359,G__34314_34360){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__34313_34359,G__34314_34360))
;
goog.object.set(G__34313_34359,G__34314_34360,G__34315_34361);

goog.object.set(clojure.data.Diff,"array",true);

var G__34316_34362 = clojure.data.diff_similar;
var G__34317_34363 = "array";
var G__34318_34364 = ((function (G__34316_34362,G__34317_34363){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__34316_34362,G__34317_34363))
;
goog.object.set(G__34316_34362,G__34317_34363,G__34318_34364);

goog.object.set(clojure.data.Diff,"function",true);

var G__34319_34365 = clojure.data.diff_similar;
var G__34320_34366 = "function";
var G__34321_34367 = ((function (G__34319_34365,G__34320_34366){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__34319_34365,G__34320_34366))
;
goog.object.set(G__34319_34365,G__34320_34366,G__34321_34367);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__34322_34368 = clojure.data.diff_similar;
var G__34323_34369 = "boolean";
var G__34324_34370 = ((function (G__34322_34368,G__34323_34369){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__34322_34368,G__34323_34369))
;
goog.object.set(G__34322_34368,G__34323_34369,G__34324_34370);

goog.object.set(clojure.data.Diff,"_",true);

var G__34325_34371 = clojure.data.diff_similar;
var G__34326_34372 = "_";
var G__34327_34373 = ((function (G__34325_34371,G__34326_34372){
return (function (a,b){
var fexpr__34329 = (function (){var G__34330 = clojure.data.equality_partition(a);
var G__34330__$1 = (((G__34330 instanceof cljs.core.Keyword))?G__34330.fqn:null);
switch (G__34330__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34330__$1)].join('')));

}
})();
return (fexpr__34329.cljs$core$IFn$_invoke$arity$2 ? fexpr__34329.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__34329.call(null,a,b));
});})(G__34325_34371,G__34326_34372))
;
goog.object.set(G__34325_34371,G__34326_34372,G__34327_34373);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
