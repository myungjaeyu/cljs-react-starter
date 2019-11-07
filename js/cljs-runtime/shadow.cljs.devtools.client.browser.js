goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35467 = arguments.length;
var i__4731__auto___35468 = (0);
while(true){
if((i__4731__auto___35468 < len__4730__auto___35467)){
args__4736__auto__.push((arguments[i__4731__auto___35468]));

var G__35469 = (i__4731__auto___35468 + (1));
i__4731__auto___35468 = G__35469;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35206){
var G__35207 = cljs.core.first(seq35206);
var seq35206__$1 = cljs.core.next(seq35206);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35207,seq35206__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__35219){
var map__35220 = p__35219;
var map__35220__$1 = (((((!((map__35220 == null))))?(((((map__35220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35220):map__35220);
var src = map__35220__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35220__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35220__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35222 = cljs.core.seq(sources);
var chunk__35223 = null;
var count__35224 = (0);
var i__35225 = (0);
while(true){
if((i__35225 < count__35224)){
var map__35230 = chunk__35223.cljs$core$IIndexed$_nth$arity$2(null,i__35225);
var map__35230__$1 = (((((!((map__35230 == null))))?(((((map__35230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35230):map__35230);
var src = map__35230__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35230__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35230__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35230__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35230__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__35480 = seq__35222;
var G__35481 = chunk__35223;
var G__35482 = count__35224;
var G__35483 = (i__35225 + (1));
seq__35222 = G__35480;
chunk__35223 = G__35481;
count__35224 = G__35482;
i__35225 = G__35483;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35222);
if(temp__5735__auto__){
var seq__35222__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35222__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35222__$1);
var G__35484 = cljs.core.chunk_rest(seq__35222__$1);
var G__35485 = c__4550__auto__;
var G__35486 = cljs.core.count(c__4550__auto__);
var G__35487 = (0);
seq__35222 = G__35484;
chunk__35223 = G__35485;
count__35224 = G__35486;
i__35225 = G__35487;
continue;
} else {
var map__35233 = cljs.core.first(seq__35222__$1);
var map__35233__$1 = (((((!((map__35233 == null))))?(((((map__35233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35233):map__35233);
var src = map__35233__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35233__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35233__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35233__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35233__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__35496 = cljs.core.next(seq__35222__$1);
var G__35497 = null;
var G__35498 = (0);
var G__35499 = (0);
seq__35222 = G__35496;
chunk__35223 = G__35497;
count__35224 = G__35498;
i__35225 = G__35499;
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
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
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
var seq__35237 = cljs.core.seq(js_requires);
var chunk__35238 = null;
var count__35239 = (0);
var i__35240 = (0);
while(true){
if((i__35240 < count__35239)){
var js_ns = chunk__35238.cljs$core$IIndexed$_nth$arity$2(null,i__35240);
var require_str_35507 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35507);


var G__35508 = seq__35237;
var G__35509 = chunk__35238;
var G__35510 = count__35239;
var G__35511 = (i__35240 + (1));
seq__35237 = G__35508;
chunk__35238 = G__35509;
count__35239 = G__35510;
i__35240 = G__35511;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35237);
if(temp__5735__auto__){
var seq__35237__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35237__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35237__$1);
var G__35512 = cljs.core.chunk_rest(seq__35237__$1);
var G__35513 = c__4550__auto__;
var G__35514 = cljs.core.count(c__4550__auto__);
var G__35515 = (0);
seq__35237 = G__35512;
chunk__35238 = G__35513;
count__35239 = G__35514;
i__35240 = G__35515;
continue;
} else {
var js_ns = cljs.core.first(seq__35237__$1);
var require_str_35516 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35516);


var G__35517 = cljs.core.next(seq__35237__$1);
var G__35518 = null;
var G__35519 = (0);
var G__35520 = (0);
seq__35237 = G__35517;
chunk__35238 = G__35518;
count__35239 = G__35519;
i__35240 = G__35520;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__35251 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__35251) : callback.call(null,G__35251));
} else {
var G__35252 = shadow.cljs.devtools.client.env.files_url();
var G__35253 = ((function (G__35252){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__35252))
;
var G__35254 = "POST";
var G__35255 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__35256 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35252,G__35253,G__35254,G__35255,G__35256);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__35275){
var map__35280 = p__35275;
var map__35280__$1 = (((((!((map__35280 == null))))?(((((map__35280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35280):map__35280);
var msg = map__35280__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35280__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35280__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__35282 = info;
var map__35282__$1 = (((((!((map__35282 == null))))?(((((map__35282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35282):map__35282);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35282__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35282__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__35282,map__35282__$1,sources,compiled,map__35280,map__35280__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35293(s__35294){
return (new cljs.core.LazySeq(null,((function (map__35282,map__35282__$1,sources,compiled,map__35280,map__35280__$1,msg,info,reload_info){
return (function (){
var s__35294__$1 = s__35294;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35294__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35301 = cljs.core.first(xs__6292__auto__);
var map__35301__$1 = (((((!((map__35301 == null))))?(((((map__35301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35301):map__35301);
var src = map__35301__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35301__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35301__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__35294__$1,map__35301,map__35301__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35282,map__35282__$1,sources,compiled,map__35280,map__35280__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35293_$_iter__35295(s__35296){
return (new cljs.core.LazySeq(null,((function (s__35294__$1,map__35301,map__35301__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35282,map__35282__$1,sources,compiled,map__35280,map__35280__$1,msg,info,reload_info){
return (function (){
var s__35296__$1 = s__35296;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35296__$1);
if(temp__5735__auto____$1){
var s__35296__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35296__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__35296__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__35298 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__35297 = (0);
while(true){
if((i__35297 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__35297);
cljs.core.chunk_append(b__35298,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35521 = (i__35297 + (1));
i__35297 = G__35521;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35298),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35293_$_iter__35295(cljs.core.chunk_rest(s__35296__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35298),null);
}
} else {
var warning = cljs.core.first(s__35296__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35293_$_iter__35295(cljs.core.rest(s__35296__$2)));
}
} else {
return null;
}
break;
}
});})(s__35294__$1,map__35301,map__35301__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35282,map__35282__$1,sources,compiled,map__35280,map__35280__$1,msg,info,reload_info))
,null,null));
});})(s__35294__$1,map__35301,map__35301__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35282,map__35282__$1,sources,compiled,map__35280,map__35280__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35293(cljs.core.rest(s__35294__$1)));
} else {
var G__35541 = cljs.core.rest(s__35294__$1);
s__35294__$1 = G__35541;
continue;
}
} else {
var G__35542 = cljs.core.rest(s__35294__$1);
s__35294__$1 = G__35542;
continue;
}
} else {
return null;
}
break;
}
});})(map__35282,map__35282__$1,sources,compiled,map__35280,map__35280__$1,msg,info,reload_info))
,null,null));
});})(map__35282,map__35282__$1,sources,compiled,map__35280,map__35280__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__35324_35545 = cljs.core.seq(warnings);
var chunk__35325_35546 = null;
var count__35326_35547 = (0);
var i__35327_35548 = (0);
while(true){
if((i__35327_35548 < count__35326_35547)){
var map__35333_35549 = chunk__35325_35546.cljs$core$IIndexed$_nth$arity$2(null,i__35327_35548);
var map__35333_35550__$1 = (((((!((map__35333_35549 == null))))?(((((map__35333_35549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35333_35549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35333_35549):map__35333_35549);
var w_35551 = map__35333_35550__$1;
var msg_35552__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35333_35550__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35553 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35333_35550__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35554 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35333_35550__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35555 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35333_35550__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35555)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35553),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35554),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35552__$1)].join(''));


var G__35568 = seq__35324_35545;
var G__35569 = chunk__35325_35546;
var G__35570 = count__35326_35547;
var G__35571 = (i__35327_35548 + (1));
seq__35324_35545 = G__35568;
chunk__35325_35546 = G__35569;
count__35326_35547 = G__35570;
i__35327_35548 = G__35571;
continue;
} else {
var temp__5735__auto___35572 = cljs.core.seq(seq__35324_35545);
if(temp__5735__auto___35572){
var seq__35324_35573__$1 = temp__5735__auto___35572;
if(cljs.core.chunked_seq_QMARK_(seq__35324_35573__$1)){
var c__4550__auto___35574 = cljs.core.chunk_first(seq__35324_35573__$1);
var G__35576 = cljs.core.chunk_rest(seq__35324_35573__$1);
var G__35577 = c__4550__auto___35574;
var G__35578 = cljs.core.count(c__4550__auto___35574);
var G__35579 = (0);
seq__35324_35545 = G__35576;
chunk__35325_35546 = G__35577;
count__35326_35547 = G__35578;
i__35327_35548 = G__35579;
continue;
} else {
var map__35339_35582 = cljs.core.first(seq__35324_35573__$1);
var map__35339_35583__$1 = (((((!((map__35339_35582 == null))))?(((((map__35339_35582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35339_35582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35339_35582):map__35339_35582);
var w_35584 = map__35339_35583__$1;
var msg_35585__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35339_35583__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35586 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35339_35583__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35587 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35339_35583__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35588 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35339_35583__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35588)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35586),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35587),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35585__$1)].join(''));


var G__35591 = cljs.core.next(seq__35324_35573__$1);
var G__35592 = null;
var G__35593 = (0);
var G__35594 = (0);
seq__35324_35545 = G__35591;
chunk__35325_35546 = G__35592;
count__35326_35547 = G__35593;
i__35327_35548 = G__35594;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__35282,map__35282__$1,sources,compiled,warnings,map__35280,map__35280__$1,msg,info,reload_info){
return (function (p__35359){
var map__35360 = p__35359;
var map__35360__$1 = (((((!((map__35360 == null))))?(((((map__35360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35360):map__35360);
var src = map__35360__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35360__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35360__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__35282,map__35282__$1,sources,compiled,warnings,map__35280,map__35280__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__35282,map__35282__$1,sources,compiled,warnings,map__35280,map__35280__$1,msg,info,reload_info){
return (function (p__35373){
var map__35374 = p__35373;
var map__35374__$1 = (((((!((map__35374 == null))))?(((((map__35374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35374):map__35374);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35374__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__35282,map__35282__$1,sources,compiled,warnings,map__35280,map__35280__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__35282,map__35282__$1,sources,compiled,warnings,map__35280,map__35280__$1,msg,info,reload_info){
return (function (p__35376){
var map__35377 = p__35376;
var map__35377__$1 = (((((!((map__35377 == null))))?(((((map__35377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35377):map__35377);
var rc = map__35377__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35377__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__35282,map__35282__$1,sources,compiled,warnings,map__35280,map__35280__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__35282,map__35282__$1,sources,compiled,warnings,map__35280,map__35280__$1,msg,info,reload_info){
return (function (p1__35267_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35267_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__35282,map__35282__$1,sources,compiled,warnings,map__35280,map__35280__$1,msg,info,reload_info))
);
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
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__35384){
var map__35385 = p__35384;
var map__35385__$1 = (((((!((map__35385 == null))))?(((((map__35385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35385):map__35385);
var msg = map__35385__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35385__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35387 = cljs.core.seq(updates);
var chunk__35389 = null;
var count__35390 = (0);
var i__35391 = (0);
while(true){
if((i__35391 < count__35390)){
var path = chunk__35389.cljs$core$IIndexed$_nth$arity$2(null,i__35391);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35418_35611 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35421_35612 = null;
var count__35422_35613 = (0);
var i__35423_35614 = (0);
while(true){
if((i__35423_35614 < count__35422_35613)){
var node_35615 = chunk__35421_35612.cljs$core$IIndexed$_nth$arity$2(null,i__35423_35614);
var path_match_35616 = shadow.cljs.devtools.client.browser.match_paths(node_35615.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35616)){
var new_link_35619 = (function (){var G__35428 = node_35615.cloneNode(true);
G__35428.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35616),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35428;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35616], 0));

goog.dom.insertSiblingAfter(new_link_35619,node_35615);

goog.dom.removeNode(node_35615);


var G__35622 = seq__35418_35611;
var G__35623 = chunk__35421_35612;
var G__35624 = count__35422_35613;
var G__35625 = (i__35423_35614 + (1));
seq__35418_35611 = G__35622;
chunk__35421_35612 = G__35623;
count__35422_35613 = G__35624;
i__35423_35614 = G__35625;
continue;
} else {
var G__35626 = seq__35418_35611;
var G__35627 = chunk__35421_35612;
var G__35628 = count__35422_35613;
var G__35629 = (i__35423_35614 + (1));
seq__35418_35611 = G__35626;
chunk__35421_35612 = G__35627;
count__35422_35613 = G__35628;
i__35423_35614 = G__35629;
continue;
}
} else {
var temp__5735__auto___35630 = cljs.core.seq(seq__35418_35611);
if(temp__5735__auto___35630){
var seq__35418_35631__$1 = temp__5735__auto___35630;
if(cljs.core.chunked_seq_QMARK_(seq__35418_35631__$1)){
var c__4550__auto___35632 = cljs.core.chunk_first(seq__35418_35631__$1);
var G__35633 = cljs.core.chunk_rest(seq__35418_35631__$1);
var G__35634 = c__4550__auto___35632;
var G__35635 = cljs.core.count(c__4550__auto___35632);
var G__35636 = (0);
seq__35418_35611 = G__35633;
chunk__35421_35612 = G__35634;
count__35422_35613 = G__35635;
i__35423_35614 = G__35636;
continue;
} else {
var node_35637 = cljs.core.first(seq__35418_35631__$1);
var path_match_35638 = shadow.cljs.devtools.client.browser.match_paths(node_35637.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35638)){
var new_link_35639 = (function (){var G__35429 = node_35637.cloneNode(true);
G__35429.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35638),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35429;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35638], 0));

goog.dom.insertSiblingAfter(new_link_35639,node_35637);

goog.dom.removeNode(node_35637);


var G__35640 = cljs.core.next(seq__35418_35631__$1);
var G__35641 = null;
var G__35642 = (0);
var G__35643 = (0);
seq__35418_35611 = G__35640;
chunk__35421_35612 = G__35641;
count__35422_35613 = G__35642;
i__35423_35614 = G__35643;
continue;
} else {
var G__35644 = cljs.core.next(seq__35418_35631__$1);
var G__35645 = null;
var G__35646 = (0);
var G__35647 = (0);
seq__35418_35611 = G__35644;
chunk__35421_35612 = G__35645;
count__35422_35613 = G__35646;
i__35423_35614 = G__35647;
continue;
}
}
} else {
}
}
break;
}


var G__35648 = seq__35387;
var G__35649 = chunk__35389;
var G__35650 = count__35390;
var G__35651 = (i__35391 + (1));
seq__35387 = G__35648;
chunk__35389 = G__35649;
count__35390 = G__35650;
i__35391 = G__35651;
continue;
} else {
var G__35652 = seq__35387;
var G__35653 = chunk__35389;
var G__35654 = count__35390;
var G__35655 = (i__35391 + (1));
seq__35387 = G__35652;
chunk__35389 = G__35653;
count__35390 = G__35654;
i__35391 = G__35655;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35387);
if(temp__5735__auto__){
var seq__35387__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35387__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35387__$1);
var G__35656 = cljs.core.chunk_rest(seq__35387__$1);
var G__35657 = c__4550__auto__;
var G__35658 = cljs.core.count(c__4550__auto__);
var G__35659 = (0);
seq__35387 = G__35656;
chunk__35389 = G__35657;
count__35390 = G__35658;
i__35391 = G__35659;
continue;
} else {
var path = cljs.core.first(seq__35387__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35430_35660 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35433_35661 = null;
var count__35434_35662 = (0);
var i__35435_35663 = (0);
while(true){
if((i__35435_35663 < count__35434_35662)){
var node_35664 = chunk__35433_35661.cljs$core$IIndexed$_nth$arity$2(null,i__35435_35663);
var path_match_35665 = shadow.cljs.devtools.client.browser.match_paths(node_35664.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35665)){
var new_link_35666 = (function (){var G__35440 = node_35664.cloneNode(true);
G__35440.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35665),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35440;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35665], 0));

goog.dom.insertSiblingAfter(new_link_35666,node_35664);

goog.dom.removeNode(node_35664);


var G__35667 = seq__35430_35660;
var G__35668 = chunk__35433_35661;
var G__35669 = count__35434_35662;
var G__35670 = (i__35435_35663 + (1));
seq__35430_35660 = G__35667;
chunk__35433_35661 = G__35668;
count__35434_35662 = G__35669;
i__35435_35663 = G__35670;
continue;
} else {
var G__35671 = seq__35430_35660;
var G__35672 = chunk__35433_35661;
var G__35673 = count__35434_35662;
var G__35674 = (i__35435_35663 + (1));
seq__35430_35660 = G__35671;
chunk__35433_35661 = G__35672;
count__35434_35662 = G__35673;
i__35435_35663 = G__35674;
continue;
}
} else {
var temp__5735__auto___35676__$1 = cljs.core.seq(seq__35430_35660);
if(temp__5735__auto___35676__$1){
var seq__35430_35677__$1 = temp__5735__auto___35676__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35430_35677__$1)){
var c__4550__auto___35678 = cljs.core.chunk_first(seq__35430_35677__$1);
var G__35680 = cljs.core.chunk_rest(seq__35430_35677__$1);
var G__35681 = c__4550__auto___35678;
var G__35682 = cljs.core.count(c__4550__auto___35678);
var G__35683 = (0);
seq__35430_35660 = G__35680;
chunk__35433_35661 = G__35681;
count__35434_35662 = G__35682;
i__35435_35663 = G__35683;
continue;
} else {
var node_35685 = cljs.core.first(seq__35430_35677__$1);
var path_match_35687 = shadow.cljs.devtools.client.browser.match_paths(node_35685.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35687)){
var new_link_35688 = (function (){var G__35441 = node_35685.cloneNode(true);
G__35441.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35687),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35441;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35687], 0));

goog.dom.insertSiblingAfter(new_link_35688,node_35685);

goog.dom.removeNode(node_35685);


var G__35689 = cljs.core.next(seq__35430_35677__$1);
var G__35690 = null;
var G__35691 = (0);
var G__35692 = (0);
seq__35430_35660 = G__35689;
chunk__35433_35661 = G__35690;
count__35434_35662 = G__35691;
i__35435_35663 = G__35692;
continue;
} else {
var G__35693 = cljs.core.next(seq__35430_35677__$1);
var G__35694 = null;
var G__35695 = (0);
var G__35696 = (0);
seq__35430_35660 = G__35693;
chunk__35433_35661 = G__35694;
count__35434_35662 = G__35695;
i__35435_35663 = G__35696;
continue;
}
}
} else {
}
}
break;
}


var G__35697 = cljs.core.next(seq__35387__$1);
var G__35698 = null;
var G__35699 = (0);
var G__35700 = (0);
seq__35387 = G__35697;
chunk__35389 = G__35698;
count__35390 = G__35699;
i__35391 = G__35700;
continue;
} else {
var G__35709 = cljs.core.next(seq__35387__$1);
var G__35710 = null;
var G__35711 = (0);
var G__35712 = (0);
seq__35387 = G__35709;
chunk__35389 = G__35710;
count__35390 = G__35711;
i__35391 = G__35712;
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
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
return (0,eval)(js);;
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__35442){
var map__35443 = p__35442;
var map__35443__$1 = (((((!((map__35443 == null))))?(((((map__35443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35443):map__35443);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35443__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35443__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__35443,map__35443__$1,id,js){
return (function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
});})(map__35443,map__35443__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__35445,done){
var map__35446 = p__35445;
var map__35446__$1 = (((((!((map__35446 == null))))?(((((map__35446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35446):map__35446);
var msg = map__35446__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35446__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35446__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35446__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35446__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__35446,map__35446__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__35448){
var map__35449 = p__35448;
var map__35449__$1 = (((((!((map__35449 == null))))?(((((map__35449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35449):map__35449);
var src = map__35449__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35449__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__35446,map__35446__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__35446,map__35446__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});})(sources_to_load,map__35446,map__35446__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__35451,done){
var map__35452 = p__35451;
var map__35452__$1 = (((((!((map__35452 == null))))?(((((map__35452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35452):map__35452);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35452__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35452__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__35452,map__35452__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});})(map__35452,map__35452__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__35454){
var map__35455 = p__35454;
var map__35455__$1 = (((((!((map__35455 == null))))?(((((map__35455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35455):map__35455);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35455__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35455__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__35457,done){
var map__35458 = p__35457;
var map__35458__$1 = (((((!((map__35458 == null))))?(((((map__35458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35458.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35458):map__35458);
var msg = map__35458__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35458__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__35460_35733 = type;
var G__35460_35734__$1 = (((G__35460_35733 instanceof cljs.core.Keyword))?G__35460_35733.fqn:null);
switch (G__35460_35734__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__35461 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__35462 = ((function (G__35461){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__35461))
;
var G__35463 = "POST";
var G__35464 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__35465 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35461,G__35462,G__35463,G__35464,G__35465);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e35466){var e = e35466;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___35741 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___35741)){
var s_35742 = temp__5735__auto___35741;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_35742.onclose = ((function (s_35742,temp__5735__auto___35741){
return (function (e){
return null;
});})(s_35742,temp__5735__auto___35741))
;

s_35742.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
