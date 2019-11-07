goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33095 = coll;
var G__33096 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33095,G__33096) : shadow.dom.lazy_native_coll_seq.call(null,G__33095,G__33096));
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
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

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
var G__33099 = arguments.length;
switch (G__33099) {
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

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33103 = arguments.length;
switch (G__33103) {
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

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33106 = arguments.length;
switch (G__33106) {
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

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33108 = arguments.length;
switch (G__33108) {
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

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33110 = arguments.length;
switch (G__33110) {
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

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__33111 = document;
var G__33112 = shadow.dom.dom_node(el);
return goog.dom.contains(G__33111,G__33112);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__33113 = shadow.dom.dom_node(parent);
var G__33114 = shadow.dom.dom_node(el);
return goog.dom.contains(G__33113,G__33114);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__33116 = shadow.dom.dom_node(el);
var G__33117 = cls;
return goog.dom.classlist.add(G__33116,G__33117);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__33118 = shadow.dom.dom_node(el);
var G__33119 = cls;
return goog.dom.classlist.remove(G__33118,G__33119);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33121 = arguments.length;
switch (G__33121) {
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

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__33125 = shadow.dom.dom_node(el);
var G__33126 = cls;
return goog.dom.classlist.toggle(G__33125,G__33126);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33128){if((e33128 instanceof Object)){
var e = e33128;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33128;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33141 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33142 = null;
var count__33143 = (0);
var i__33144 = (0);
while(true){
if((i__33144 < count__33143)){
var el = chunk__33142.cljs$core$IIndexed$_nth$arity$2(null,i__33144);
var handler_33776__$1 = ((function (seq__33141,chunk__33142,count__33143,i__33144,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33141,chunk__33142,count__33143,i__33144,el))
;
var G__33156_33777 = el;
var G__33157_33778 = cljs.core.name(ev);
var G__33158_33779 = handler_33776__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33156_33777,G__33157_33778,G__33158_33779) : shadow.dom.dom_listen.call(null,G__33156_33777,G__33157_33778,G__33158_33779));


var G__33780 = seq__33141;
var G__33781 = chunk__33142;
var G__33782 = count__33143;
var G__33783 = (i__33144 + (1));
seq__33141 = G__33780;
chunk__33142 = G__33781;
count__33143 = G__33782;
i__33144 = G__33783;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33141);
if(temp__5735__auto__){
var seq__33141__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33141__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33141__$1);
var G__33784 = cljs.core.chunk_rest(seq__33141__$1);
var G__33785 = c__4550__auto__;
var G__33786 = cljs.core.count(c__4550__auto__);
var G__33787 = (0);
seq__33141 = G__33784;
chunk__33142 = G__33785;
count__33143 = G__33786;
i__33144 = G__33787;
continue;
} else {
var el = cljs.core.first(seq__33141__$1);
var handler_33788__$1 = ((function (seq__33141,chunk__33142,count__33143,i__33144,el,seq__33141__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33141,chunk__33142,count__33143,i__33144,el,seq__33141__$1,temp__5735__auto__))
;
var G__33159_33789 = el;
var G__33160_33790 = cljs.core.name(ev);
var G__33161_33791 = handler_33788__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33159_33789,G__33160_33790,G__33161_33791) : shadow.dom.dom_listen.call(null,G__33159_33789,G__33160_33790,G__33161_33791));


var G__33792 = cljs.core.next(seq__33141__$1);
var G__33793 = null;
var G__33794 = (0);
var G__33795 = (0);
seq__33141 = G__33792;
chunk__33142 = G__33793;
count__33143 = G__33794;
i__33144 = G__33795;
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
var G__33163 = arguments.length;
switch (G__33163) {
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

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__33164 = shadow.dom.dom_node(el);
var G__33165 = cljs.core.name(ev);
var G__33166 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33164,G__33165,G__33166) : shadow.dom.dom_listen.call(null,G__33164,G__33165,G__33166));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__33168 = shadow.dom.dom_node(el);
var G__33169 = cljs.core.name(ev);
var G__33170 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__33168,G__33169,G__33170) : shadow.dom.dom_listen_remove.call(null,G__33168,G__33169,G__33170));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33171 = cljs.core.seq(events);
var chunk__33172 = null;
var count__33173 = (0);
var i__33174 = (0);
while(true){
if((i__33174 < count__33173)){
var vec__33184 = chunk__33172.cljs$core$IIndexed$_nth$arity$2(null,i__33174);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33184,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33184,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33797 = seq__33171;
var G__33798 = chunk__33172;
var G__33799 = count__33173;
var G__33800 = (i__33174 + (1));
seq__33171 = G__33797;
chunk__33172 = G__33798;
count__33173 = G__33799;
i__33174 = G__33800;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33171);
if(temp__5735__auto__){
var seq__33171__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33171__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33171__$1);
var G__33802 = cljs.core.chunk_rest(seq__33171__$1);
var G__33803 = c__4550__auto__;
var G__33804 = cljs.core.count(c__4550__auto__);
var G__33805 = (0);
seq__33171 = G__33802;
chunk__33172 = G__33803;
count__33173 = G__33804;
i__33174 = G__33805;
continue;
} else {
var vec__33192 = cljs.core.first(seq__33171__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33192,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33192,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33810 = cljs.core.next(seq__33171__$1);
var G__33811 = null;
var G__33812 = (0);
var G__33813 = (0);
seq__33171 = G__33810;
chunk__33172 = G__33811;
count__33173 = G__33812;
i__33174 = G__33813;
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
var seq__33195 = cljs.core.seq(styles);
var chunk__33196 = null;
var count__33197 = (0);
var i__33198 = (0);
while(true){
if((i__33198 < count__33197)){
var vec__33213 = chunk__33196.cljs$core$IIndexed$_nth$arity$2(null,i__33198);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33213,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33213,(1),null);
var G__33217_33814 = dom;
var G__33218_33815 = cljs.core.name(k);
var G__33219_33816 = (((v == null))?"":v);
goog.style.setStyle(G__33217_33814,G__33218_33815,G__33219_33816);


var G__33817 = seq__33195;
var G__33818 = chunk__33196;
var G__33819 = count__33197;
var G__33820 = (i__33198 + (1));
seq__33195 = G__33817;
chunk__33196 = G__33818;
count__33197 = G__33819;
i__33198 = G__33820;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33195);
if(temp__5735__auto__){
var seq__33195__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33195__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33195__$1);
var G__33821 = cljs.core.chunk_rest(seq__33195__$1);
var G__33822 = c__4550__auto__;
var G__33823 = cljs.core.count(c__4550__auto__);
var G__33824 = (0);
seq__33195 = G__33821;
chunk__33196 = G__33822;
count__33197 = G__33823;
i__33198 = G__33824;
continue;
} else {
var vec__33220 = cljs.core.first(seq__33195__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33220,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33220,(1),null);
var G__33223_33825 = dom;
var G__33224_33826 = cljs.core.name(k);
var G__33225_33827 = (((v == null))?"":v);
goog.style.setStyle(G__33223_33825,G__33224_33826,G__33225_33827);


var G__33828 = cljs.core.next(seq__33195__$1);
var G__33829 = null;
var G__33830 = (0);
var G__33831 = (0);
seq__33195 = G__33828;
chunk__33196 = G__33829;
count__33197 = G__33830;
i__33198 = G__33831;
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
var G__33226_33832 = key;
var G__33226_33833__$1 = (((G__33226_33832 instanceof cljs.core.Keyword))?G__33226_33832.fqn:null);
switch (G__33226_33833__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

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
var ks_33835 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_33835,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_33835,"aria-");
}
})())){
el.setAttribute(ks_33835,value);
} else {
(el[ks_33835] = value);
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
var G__33227 = shadow.dom.dom_node(el);
var G__33228 = cls;
return goog.dom.classlist.contains(G__33227,G__33228);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33229){
var map__33230 = p__33229;
var map__33230__$1 = (((((!((map__33230 == null))))?(((((map__33230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33230):map__33230);
var props = map__33230__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33230__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33232 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33232,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33232,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33232,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33235 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33235,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33235;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33237 = arguments.length;
switch (G__33237) {
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

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33238){
var vec__33239 = p__33238;
var seq__33240 = cljs.core.seq(vec__33239);
var first__33241 = cljs.core.first(seq__33240);
var seq__33240__$1 = cljs.core.next(seq__33240);
var nn = first__33241;
var first__33241__$1 = cljs.core.first(seq__33240__$1);
var seq__33240__$2 = cljs.core.next(seq__33240__$1);
var np = first__33241__$1;
var nc = seq__33240__$2;
var node = vec__33239;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33242 = nn;
var G__33243 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33242,G__33243) : create_fn.call(null,G__33242,G__33243));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33244 = nn;
var G__33245 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33244,G__33245) : create_fn.call(null,G__33244,G__33245));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33246 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33246,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33246,(1),null);
var seq__33249_33895 = cljs.core.seq(node_children);
var chunk__33250_33896 = null;
var count__33251_33897 = (0);
var i__33252_33898 = (0);
while(true){
if((i__33252_33898 < count__33251_33897)){
var child_struct_33899 = chunk__33250_33896.cljs$core$IIndexed$_nth$arity$2(null,i__33252_33898);
var children_33901 = shadow.dom.dom_node(child_struct_33899);
if(cljs.core.seq_QMARK_(children_33901)){
var seq__33265_33902 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33901));
var chunk__33267_33903 = null;
var count__33268_33904 = (0);
var i__33269_33905 = (0);
while(true){
if((i__33269_33905 < count__33268_33904)){
var child_33906 = chunk__33267_33903.cljs$core$IIndexed$_nth$arity$2(null,i__33269_33905);
if(cljs.core.truth_(child_33906)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33906);


var G__33907 = seq__33265_33902;
var G__33908 = chunk__33267_33903;
var G__33909 = count__33268_33904;
var G__33910 = (i__33269_33905 + (1));
seq__33265_33902 = G__33907;
chunk__33267_33903 = G__33908;
count__33268_33904 = G__33909;
i__33269_33905 = G__33910;
continue;
} else {
var G__33912 = seq__33265_33902;
var G__33913 = chunk__33267_33903;
var G__33914 = count__33268_33904;
var G__33915 = (i__33269_33905 + (1));
seq__33265_33902 = G__33912;
chunk__33267_33903 = G__33913;
count__33268_33904 = G__33914;
i__33269_33905 = G__33915;
continue;
}
} else {
var temp__5735__auto___33916 = cljs.core.seq(seq__33265_33902);
if(temp__5735__auto___33916){
var seq__33265_33917__$1 = temp__5735__auto___33916;
if(cljs.core.chunked_seq_QMARK_(seq__33265_33917__$1)){
var c__4550__auto___33918 = cljs.core.chunk_first(seq__33265_33917__$1);
var G__33919 = cljs.core.chunk_rest(seq__33265_33917__$1);
var G__33920 = c__4550__auto___33918;
var G__33921 = cljs.core.count(c__4550__auto___33918);
var G__33922 = (0);
seq__33265_33902 = G__33919;
chunk__33267_33903 = G__33920;
count__33268_33904 = G__33921;
i__33269_33905 = G__33922;
continue;
} else {
var child_33923 = cljs.core.first(seq__33265_33917__$1);
if(cljs.core.truth_(child_33923)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33923);


var G__33924 = cljs.core.next(seq__33265_33917__$1);
var G__33925 = null;
var G__33926 = (0);
var G__33927 = (0);
seq__33265_33902 = G__33924;
chunk__33267_33903 = G__33925;
count__33268_33904 = G__33926;
i__33269_33905 = G__33927;
continue;
} else {
var G__33928 = cljs.core.next(seq__33265_33917__$1);
var G__33929 = null;
var G__33930 = (0);
var G__33931 = (0);
seq__33265_33902 = G__33928;
chunk__33267_33903 = G__33929;
count__33268_33904 = G__33930;
i__33269_33905 = G__33931;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33901);
}


var G__33933 = seq__33249_33895;
var G__33934 = chunk__33250_33896;
var G__33935 = count__33251_33897;
var G__33936 = (i__33252_33898 + (1));
seq__33249_33895 = G__33933;
chunk__33250_33896 = G__33934;
count__33251_33897 = G__33935;
i__33252_33898 = G__33936;
continue;
} else {
var temp__5735__auto___33937 = cljs.core.seq(seq__33249_33895);
if(temp__5735__auto___33937){
var seq__33249_33938__$1 = temp__5735__auto___33937;
if(cljs.core.chunked_seq_QMARK_(seq__33249_33938__$1)){
var c__4550__auto___33939 = cljs.core.chunk_first(seq__33249_33938__$1);
var G__33940 = cljs.core.chunk_rest(seq__33249_33938__$1);
var G__33941 = c__4550__auto___33939;
var G__33942 = cljs.core.count(c__4550__auto___33939);
var G__33943 = (0);
seq__33249_33895 = G__33940;
chunk__33250_33896 = G__33941;
count__33251_33897 = G__33942;
i__33252_33898 = G__33943;
continue;
} else {
var child_struct_33944 = cljs.core.first(seq__33249_33938__$1);
var children_33945 = shadow.dom.dom_node(child_struct_33944);
if(cljs.core.seq_QMARK_(children_33945)){
var seq__33271_33946 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33945));
var chunk__33273_33947 = null;
var count__33274_33948 = (0);
var i__33275_33949 = (0);
while(true){
if((i__33275_33949 < count__33274_33948)){
var child_33950 = chunk__33273_33947.cljs$core$IIndexed$_nth$arity$2(null,i__33275_33949);
if(cljs.core.truth_(child_33950)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33950);


var G__33951 = seq__33271_33946;
var G__33952 = chunk__33273_33947;
var G__33953 = count__33274_33948;
var G__33954 = (i__33275_33949 + (1));
seq__33271_33946 = G__33951;
chunk__33273_33947 = G__33952;
count__33274_33948 = G__33953;
i__33275_33949 = G__33954;
continue;
} else {
var G__33955 = seq__33271_33946;
var G__33956 = chunk__33273_33947;
var G__33957 = count__33274_33948;
var G__33958 = (i__33275_33949 + (1));
seq__33271_33946 = G__33955;
chunk__33273_33947 = G__33956;
count__33274_33948 = G__33957;
i__33275_33949 = G__33958;
continue;
}
} else {
var temp__5735__auto___33959__$1 = cljs.core.seq(seq__33271_33946);
if(temp__5735__auto___33959__$1){
var seq__33271_33960__$1 = temp__5735__auto___33959__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33271_33960__$1)){
var c__4550__auto___33961 = cljs.core.chunk_first(seq__33271_33960__$1);
var G__33962 = cljs.core.chunk_rest(seq__33271_33960__$1);
var G__33963 = c__4550__auto___33961;
var G__33964 = cljs.core.count(c__4550__auto___33961);
var G__33965 = (0);
seq__33271_33946 = G__33962;
chunk__33273_33947 = G__33963;
count__33274_33948 = G__33964;
i__33275_33949 = G__33965;
continue;
} else {
var child_33966 = cljs.core.first(seq__33271_33960__$1);
if(cljs.core.truth_(child_33966)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33966);


var G__33967 = cljs.core.next(seq__33271_33960__$1);
var G__33968 = null;
var G__33969 = (0);
var G__33970 = (0);
seq__33271_33946 = G__33967;
chunk__33273_33947 = G__33968;
count__33274_33948 = G__33969;
i__33275_33949 = G__33970;
continue;
} else {
var G__33975 = cljs.core.next(seq__33271_33960__$1);
var G__33976 = null;
var G__33977 = (0);
var G__33978 = (0);
seq__33271_33946 = G__33975;
chunk__33273_33947 = G__33976;
count__33274_33948 = G__33977;
i__33275_33949 = G__33978;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33945);
}


var G__33979 = cljs.core.next(seq__33249_33938__$1);
var G__33980 = null;
var G__33981 = (0);
var G__33982 = (0);
seq__33249_33895 = G__33979;
chunk__33250_33896 = G__33980;
count__33251_33897 = G__33981;
i__33252_33898 = G__33982;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__33277 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__33277);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33279 = cljs.core.seq(node);
var chunk__33280 = null;
var count__33281 = (0);
var i__33282 = (0);
while(true){
if((i__33282 < count__33281)){
var n = chunk__33280.cljs$core$IIndexed$_nth$arity$2(null,i__33282);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33989 = seq__33279;
var G__33990 = chunk__33280;
var G__33991 = count__33281;
var G__33992 = (i__33282 + (1));
seq__33279 = G__33989;
chunk__33280 = G__33990;
count__33281 = G__33991;
i__33282 = G__33992;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33279);
if(temp__5735__auto__){
var seq__33279__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33279__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33279__$1);
var G__33993 = cljs.core.chunk_rest(seq__33279__$1);
var G__33994 = c__4550__auto__;
var G__33995 = cljs.core.count(c__4550__auto__);
var G__33996 = (0);
seq__33279 = G__33993;
chunk__33280 = G__33994;
count__33281 = G__33995;
i__33282 = G__33996;
continue;
} else {
var n = cljs.core.first(seq__33279__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33997 = cljs.core.next(seq__33279__$1);
var G__33998 = null;
var G__33999 = (0);
var G__34000 = (0);
seq__33279 = G__33997;
chunk__33280 = G__33998;
count__33281 = G__33999;
i__33282 = G__34000;
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
var G__33284 = shadow.dom.dom_node(new$);
var G__33285 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__33284,G__33285);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33287 = arguments.length;
switch (G__33287) {
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

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33289 = arguments.length;
switch (G__33289) {
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

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

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
var G__33310 = arguments.length;
switch (G__33310) {
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

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

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
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34008 = arguments.length;
var i__4731__auto___34009 = (0);
while(true){
if((i__4731__auto___34009 < len__4730__auto___34008)){
args__4736__auto__.push((arguments[i__4731__auto___34009]));

var G__34010 = (i__4731__auto___34009 + (1));
i__4731__auto___34009 = G__34010;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33330_34011 = cljs.core.seq(nodes);
var chunk__33331_34012 = null;
var count__33332_34013 = (0);
var i__33333_34026 = (0);
while(true){
if((i__33333_34026 < count__33332_34013)){
var node_34027 = chunk__33331_34012.cljs$core$IIndexed$_nth$arity$2(null,i__33333_34026);
fragment.appendChild(shadow.dom._to_dom(node_34027));


var G__34029 = seq__33330_34011;
var G__34030 = chunk__33331_34012;
var G__34031 = count__33332_34013;
var G__34032 = (i__33333_34026 + (1));
seq__33330_34011 = G__34029;
chunk__33331_34012 = G__34030;
count__33332_34013 = G__34031;
i__33333_34026 = G__34032;
continue;
} else {
var temp__5735__auto___34033 = cljs.core.seq(seq__33330_34011);
if(temp__5735__auto___34033){
var seq__33330_34034__$1 = temp__5735__auto___34033;
if(cljs.core.chunked_seq_QMARK_(seq__33330_34034__$1)){
var c__4550__auto___34035 = cljs.core.chunk_first(seq__33330_34034__$1);
var G__34037 = cljs.core.chunk_rest(seq__33330_34034__$1);
var G__34038 = c__4550__auto___34035;
var G__34039 = cljs.core.count(c__4550__auto___34035);
var G__34040 = (0);
seq__33330_34011 = G__34037;
chunk__33331_34012 = G__34038;
count__33332_34013 = G__34039;
i__33333_34026 = G__34040;
continue;
} else {
var node_34041 = cljs.core.first(seq__33330_34034__$1);
fragment.appendChild(shadow.dom._to_dom(node_34041));


var G__34042 = cljs.core.next(seq__33330_34034__$1);
var G__34043 = null;
var G__34044 = (0);
var G__34045 = (0);
seq__33330_34011 = G__34042;
chunk__33331_34012 = G__34043;
count__33332_34013 = G__34044;
i__33333_34026 = G__34045;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq33324){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33324));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33343_34054 = cljs.core.seq(scripts);
var chunk__33344_34055 = null;
var count__33345_34056 = (0);
var i__33346_34057 = (0);
while(true){
if((i__33346_34057 < count__33345_34056)){
var vec__33354_34059 = chunk__33344_34055.cljs$core$IIndexed$_nth$arity$2(null,i__33346_34057);
var script_tag_34060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33354_34059,(0),null);
var script_body_34061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33354_34059,(1),null);
eval(script_body_34061);


var G__34062 = seq__33343_34054;
var G__34063 = chunk__33344_34055;
var G__34064 = count__33345_34056;
var G__34065 = (i__33346_34057 + (1));
seq__33343_34054 = G__34062;
chunk__33344_34055 = G__34063;
count__33345_34056 = G__34064;
i__33346_34057 = G__34065;
continue;
} else {
var temp__5735__auto___34066 = cljs.core.seq(seq__33343_34054);
if(temp__5735__auto___34066){
var seq__33343_34067__$1 = temp__5735__auto___34066;
if(cljs.core.chunked_seq_QMARK_(seq__33343_34067__$1)){
var c__4550__auto___34068 = cljs.core.chunk_first(seq__33343_34067__$1);
var G__34069 = cljs.core.chunk_rest(seq__33343_34067__$1);
var G__34070 = c__4550__auto___34068;
var G__34071 = cljs.core.count(c__4550__auto___34068);
var G__34072 = (0);
seq__33343_34054 = G__34069;
chunk__33344_34055 = G__34070;
count__33345_34056 = G__34071;
i__33346_34057 = G__34072;
continue;
} else {
var vec__33357_34074 = cljs.core.first(seq__33343_34067__$1);
var script_tag_34075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33357_34074,(0),null);
var script_body_34076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33357_34074,(1),null);
eval(script_body_34076);


var G__34078 = cljs.core.next(seq__33343_34067__$1);
var G__34079 = null;
var G__34080 = (0);
var G__34081 = (0);
seq__33343_34054 = G__34078;
chunk__33344_34055 = G__34079;
count__33345_34056 = G__34080;
i__33346_34057 = G__34081;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__33372){
var vec__33374 = p__33372;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33374,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33374,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__33382 = shadow.dom.dom_node(el);
var G__33383 = cls;
return goog.dom.getAncestorByClass(G__33382,G__33383);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33385 = arguments.length;
switch (G__33385) {
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

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__33386 = shadow.dom.dom_node(el);
var G__33387 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__33386,G__33387);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__33388 = shadow.dom.dom_node(el);
var G__33389 = cljs.core.name(tag);
var G__33390 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__33388,G__33389,G__33390);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__33391 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__33391);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__33392 = shadow.dom.dom_node(dom);
var G__33393 = value;
return goog.dom.forms.setValue(G__33392,G__33393);
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
var seq__33394 = cljs.core.seq(style_keys);
var chunk__33395 = null;
var count__33396 = (0);
var i__33397 = (0);
while(true){
if((i__33397 < count__33396)){
var it = chunk__33395.cljs$core$IIndexed$_nth$arity$2(null,i__33397);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34090 = seq__33394;
var G__34091 = chunk__33395;
var G__34092 = count__33396;
var G__34093 = (i__33397 + (1));
seq__33394 = G__34090;
chunk__33395 = G__34091;
count__33396 = G__34092;
i__33397 = G__34093;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33394);
if(temp__5735__auto__){
var seq__33394__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33394__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33394__$1);
var G__34094 = cljs.core.chunk_rest(seq__33394__$1);
var G__34095 = c__4550__auto__;
var G__34096 = cljs.core.count(c__4550__auto__);
var G__34097 = (0);
seq__33394 = G__34094;
chunk__33395 = G__34095;
count__33396 = G__34096;
i__33397 = G__34097;
continue;
} else {
var it = cljs.core.first(seq__33394__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34098 = cljs.core.next(seq__33394__$1);
var G__34099 = null;
var G__34100 = (0);
var G__34101 = (0);
seq__33394 = G__34098;
chunk__33395 = G__34099;
count__33396 = G__34100;
i__33397 = G__34101;
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
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k33423,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__33427 = k33423;
var G__33427__$1 = (((G__33427 instanceof cljs.core.Keyword))?G__33427.fqn:null);
switch (G__33427__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33423,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__33428){
var vec__33429 = p__33428;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33429,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33429,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33422){
var self__ = this;
var G__33422__$1 = this;
return (new cljs.core.RecordIter((0),G__33422__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__33435 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__33435(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33424,other33425){
var self__ = this;
var this33424__$1 = this;
return (((!((other33425 == null)))) && ((this33424__$1.constructor === other33425.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33424__$1.x,other33425.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33424__$1.y,other33425.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33424__$1.__extmap,other33425.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__33422){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__33438 = cljs.core.keyword_identical_QMARK_;
var expr__33439 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__33441 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__33442 = expr__33439;
return (pred__33438.cljs$core$IFn$_invoke$arity$2 ? pred__33438.cljs$core$IFn$_invoke$arity$2(G__33441,G__33442) : pred__33438.call(null,G__33441,G__33442));
})())){
return (new shadow.dom.Coordinate(G__33422,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33443 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__33444 = expr__33439;
return (pred__33438.cljs$core$IFn$_invoke$arity$2 ? pred__33438.cljs$core$IFn$_invoke$arity$2(G__33443,G__33444) : pred__33438.call(null,G__33443,G__33444));
})())){
return (new shadow.dom.Coordinate(self__.x,G__33422,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__33422),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__33422){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33422,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33426){
var extmap__4424__auto__ = (function (){var G__33447 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33426,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33426)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33447);
} else {
return G__33447;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33426),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33426),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__33448 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__33448);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__33449 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__33449);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__33450 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__33450);
})();
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
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k33452,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__33458 = k33452;
var G__33458__$1 = (((G__33458 instanceof cljs.core.Keyword))?G__33458.fqn:null);
switch (G__33458__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33452,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__33461){
var vec__33462 = p__33461;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33462,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33462,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33451){
var self__ = this;
var G__33451__$1 = this;
return (new cljs.core.RecordIter((0),G__33451__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__33468 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__33468(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33453,other33454){
var self__ = this;
var this33453__$1 = this;
return (((!((other33454 == null)))) && ((this33453__$1.constructor === other33454.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33453__$1.w,other33454.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33453__$1.h,other33454.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33453__$1.__extmap,other33454.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__33451){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__33471 = cljs.core.keyword_identical_QMARK_;
var expr__33472 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__33474 = new cljs.core.Keyword(null,"w","w",354169001);
var G__33475 = expr__33472;
return (pred__33471.cljs$core$IFn$_invoke$arity$2 ? pred__33471.cljs$core$IFn$_invoke$arity$2(G__33474,G__33475) : pred__33471.call(null,G__33474,G__33475));
})())){
return (new shadow.dom.Size(G__33451,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33476 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__33477 = expr__33472;
return (pred__33471.cljs$core$IFn$_invoke$arity$2 ? pred__33471.cljs$core$IFn$_invoke$arity$2(G__33476,G__33477) : pred__33471.call(null,G__33476,G__33477));
})())){
return (new shadow.dom.Size(self__.w,G__33451,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__33451),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__33451){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33451,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33455){
var extmap__4424__auto__ = (function (){var G__33484 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33455,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33455)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33484);
} else {
return G__33484;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33455),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33455),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__33489 = shadow.dom.dom_node(el);
return goog.style.getSize(G__33489);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
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
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__34138 = (i + (1));
var G__34139 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34138;
ret = G__34139;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33588){
var vec__33589 = p__33588;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33589,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33589,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33593 = arguments.length;
switch (G__33593) {
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

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__33594_34141 = new_node;
var G__33595_34142 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__33594_34141,G__33595_34142);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__33596_34145 = new_node;
var G__33597_34146 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__33596_34145,G__33597_34146);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
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
var G__34147 = ps;
var G__34148 = (i + (1));
el__$1 = G__34147;
i = G__34148;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__33598 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__33598);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__33599 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__33599);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__33600 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__33600);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33601 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33601,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33601,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33601,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33604_34149 = cljs.core.seq(props);
var chunk__33605_34150 = null;
var count__33606_34151 = (0);
var i__33607_34152 = (0);
while(true){
if((i__33607_34152 < count__33606_34151)){
var vec__33614_34153 = chunk__33605_34150.cljs$core$IIndexed$_nth$arity$2(null,i__33607_34152);
var k_34154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33614_34153,(0),null);
var v_34155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33614_34153,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_34154);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34154),v_34155);


var G__34156 = seq__33604_34149;
var G__34157 = chunk__33605_34150;
var G__34158 = count__33606_34151;
var G__34159 = (i__33607_34152 + (1));
seq__33604_34149 = G__34156;
chunk__33605_34150 = G__34157;
count__33606_34151 = G__34158;
i__33607_34152 = G__34159;
continue;
} else {
var temp__5735__auto___34160 = cljs.core.seq(seq__33604_34149);
if(temp__5735__auto___34160){
var seq__33604_34161__$1 = temp__5735__auto___34160;
if(cljs.core.chunked_seq_QMARK_(seq__33604_34161__$1)){
var c__4550__auto___34162 = cljs.core.chunk_first(seq__33604_34161__$1);
var G__34164 = cljs.core.chunk_rest(seq__33604_34161__$1);
var G__34165 = c__4550__auto___34162;
var G__34166 = cljs.core.count(c__4550__auto___34162);
var G__34167 = (0);
seq__33604_34149 = G__34164;
chunk__33605_34150 = G__34165;
count__33606_34151 = G__34166;
i__33607_34152 = G__34167;
continue;
} else {
var vec__33617_34168 = cljs.core.first(seq__33604_34161__$1);
var k_34169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33617_34168,(0),null);
var v_34170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33617_34168,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_34169);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34169),v_34170);


var G__34172 = cljs.core.next(seq__33604_34161__$1);
var G__34173 = null;
var G__34174 = (0);
var G__34175 = (0);
seq__33604_34149 = G__34172;
chunk__33605_34150 = G__34173;
count__33606_34151 = G__34174;
i__33607_34152 = G__34175;
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
var vec__33621 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33621,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33621,(1),null);
var seq__33624_34176 = cljs.core.seq(node_children);
var chunk__33626_34177 = null;
var count__33627_34178 = (0);
var i__33628_34179 = (0);
while(true){
if((i__33628_34179 < count__33627_34178)){
var child_struct_34180 = chunk__33626_34177.cljs$core$IIndexed$_nth$arity$2(null,i__33628_34179);
if((!((child_struct_34180 == null)))){
if(typeof child_struct_34180 === 'string'){
var text_34181 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34181),child_struct_34180].join(''));
} else {
var children_34182 = shadow.dom.svg_node(child_struct_34180);
if(cljs.core.seq_QMARK_(children_34182)){
var seq__33642_34183 = cljs.core.seq(children_34182);
var chunk__33644_34184 = null;
var count__33645_34185 = (0);
var i__33646_34186 = (0);
while(true){
if((i__33646_34186 < count__33645_34185)){
var child_34187 = chunk__33644_34184.cljs$core$IIndexed$_nth$arity$2(null,i__33646_34186);
if(cljs.core.truth_(child_34187)){
node.appendChild(child_34187);


var G__34188 = seq__33642_34183;
var G__34189 = chunk__33644_34184;
var G__34190 = count__33645_34185;
var G__34191 = (i__33646_34186 + (1));
seq__33642_34183 = G__34188;
chunk__33644_34184 = G__34189;
count__33645_34185 = G__34190;
i__33646_34186 = G__34191;
continue;
} else {
var G__34192 = seq__33642_34183;
var G__34193 = chunk__33644_34184;
var G__34194 = count__33645_34185;
var G__34195 = (i__33646_34186 + (1));
seq__33642_34183 = G__34192;
chunk__33644_34184 = G__34193;
count__33645_34185 = G__34194;
i__33646_34186 = G__34195;
continue;
}
} else {
var temp__5735__auto___34196 = cljs.core.seq(seq__33642_34183);
if(temp__5735__auto___34196){
var seq__33642_34197__$1 = temp__5735__auto___34196;
if(cljs.core.chunked_seq_QMARK_(seq__33642_34197__$1)){
var c__4550__auto___34198 = cljs.core.chunk_first(seq__33642_34197__$1);
var G__34199 = cljs.core.chunk_rest(seq__33642_34197__$1);
var G__34200 = c__4550__auto___34198;
var G__34201 = cljs.core.count(c__4550__auto___34198);
var G__34202 = (0);
seq__33642_34183 = G__34199;
chunk__33644_34184 = G__34200;
count__33645_34185 = G__34201;
i__33646_34186 = G__34202;
continue;
} else {
var child_34203 = cljs.core.first(seq__33642_34197__$1);
if(cljs.core.truth_(child_34203)){
node.appendChild(child_34203);


var G__34204 = cljs.core.next(seq__33642_34197__$1);
var G__34205 = null;
var G__34206 = (0);
var G__34207 = (0);
seq__33642_34183 = G__34204;
chunk__33644_34184 = G__34205;
count__33645_34185 = G__34206;
i__33646_34186 = G__34207;
continue;
} else {
var G__34208 = cljs.core.next(seq__33642_34197__$1);
var G__34209 = null;
var G__34210 = (0);
var G__34211 = (0);
seq__33642_34183 = G__34208;
chunk__33644_34184 = G__34209;
count__33645_34185 = G__34210;
i__33646_34186 = G__34211;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34182);
}
}


var G__34212 = seq__33624_34176;
var G__34213 = chunk__33626_34177;
var G__34214 = count__33627_34178;
var G__34215 = (i__33628_34179 + (1));
seq__33624_34176 = G__34212;
chunk__33626_34177 = G__34213;
count__33627_34178 = G__34214;
i__33628_34179 = G__34215;
continue;
} else {
var G__34216 = seq__33624_34176;
var G__34217 = chunk__33626_34177;
var G__34218 = count__33627_34178;
var G__34219 = (i__33628_34179 + (1));
seq__33624_34176 = G__34216;
chunk__33626_34177 = G__34217;
count__33627_34178 = G__34218;
i__33628_34179 = G__34219;
continue;
}
} else {
var temp__5735__auto___34220 = cljs.core.seq(seq__33624_34176);
if(temp__5735__auto___34220){
var seq__33624_34221__$1 = temp__5735__auto___34220;
if(cljs.core.chunked_seq_QMARK_(seq__33624_34221__$1)){
var c__4550__auto___34222 = cljs.core.chunk_first(seq__33624_34221__$1);
var G__34223 = cljs.core.chunk_rest(seq__33624_34221__$1);
var G__34224 = c__4550__auto___34222;
var G__34225 = cljs.core.count(c__4550__auto___34222);
var G__34226 = (0);
seq__33624_34176 = G__34223;
chunk__33626_34177 = G__34224;
count__33627_34178 = G__34225;
i__33628_34179 = G__34226;
continue;
} else {
var child_struct_34227 = cljs.core.first(seq__33624_34221__$1);
if((!((child_struct_34227 == null)))){
if(typeof child_struct_34227 === 'string'){
var text_34228 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34228),child_struct_34227].join(''));
} else {
var children_34229 = shadow.dom.svg_node(child_struct_34227);
if(cljs.core.seq_QMARK_(children_34229)){
var seq__33650_34230 = cljs.core.seq(children_34229);
var chunk__33652_34231 = null;
var count__33653_34232 = (0);
var i__33654_34233 = (0);
while(true){
if((i__33654_34233 < count__33653_34232)){
var child_34234 = chunk__33652_34231.cljs$core$IIndexed$_nth$arity$2(null,i__33654_34233);
if(cljs.core.truth_(child_34234)){
node.appendChild(child_34234);


var G__34235 = seq__33650_34230;
var G__34236 = chunk__33652_34231;
var G__34237 = count__33653_34232;
var G__34238 = (i__33654_34233 + (1));
seq__33650_34230 = G__34235;
chunk__33652_34231 = G__34236;
count__33653_34232 = G__34237;
i__33654_34233 = G__34238;
continue;
} else {
var G__34239 = seq__33650_34230;
var G__34240 = chunk__33652_34231;
var G__34241 = count__33653_34232;
var G__34242 = (i__33654_34233 + (1));
seq__33650_34230 = G__34239;
chunk__33652_34231 = G__34240;
count__33653_34232 = G__34241;
i__33654_34233 = G__34242;
continue;
}
} else {
var temp__5735__auto___34243__$1 = cljs.core.seq(seq__33650_34230);
if(temp__5735__auto___34243__$1){
var seq__33650_34244__$1 = temp__5735__auto___34243__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33650_34244__$1)){
var c__4550__auto___34245 = cljs.core.chunk_first(seq__33650_34244__$1);
var G__34246 = cljs.core.chunk_rest(seq__33650_34244__$1);
var G__34247 = c__4550__auto___34245;
var G__34248 = cljs.core.count(c__4550__auto___34245);
var G__34249 = (0);
seq__33650_34230 = G__34246;
chunk__33652_34231 = G__34247;
count__33653_34232 = G__34248;
i__33654_34233 = G__34249;
continue;
} else {
var child_34250 = cljs.core.first(seq__33650_34244__$1);
if(cljs.core.truth_(child_34250)){
node.appendChild(child_34250);


var G__34251 = cljs.core.next(seq__33650_34244__$1);
var G__34252 = null;
var G__34253 = (0);
var G__34254 = (0);
seq__33650_34230 = G__34251;
chunk__33652_34231 = G__34252;
count__33653_34232 = G__34253;
i__33654_34233 = G__34254;
continue;
} else {
var G__34255 = cljs.core.next(seq__33650_34244__$1);
var G__34256 = null;
var G__34257 = (0);
var G__34258 = (0);
seq__33650_34230 = G__34255;
chunk__33652_34231 = G__34256;
count__33653_34232 = G__34257;
i__33654_34233 = G__34258;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34229);
}
}


var G__34259 = cljs.core.next(seq__33624_34221__$1);
var G__34260 = null;
var G__34261 = (0);
var G__34262 = (0);
seq__33624_34176 = G__34259;
chunk__33626_34177 = G__34260;
count__33627_34178 = G__34261;
i__33628_34179 = G__34262;
continue;
} else {
var G__34263 = cljs.core.next(seq__33624_34221__$1);
var G__34264 = null;
var G__34265 = (0);
var G__34266 = (0);
seq__33624_34176 = G__34263;
chunk__33626_34177 = G__34264;
count__33627_34178 = G__34265;
i__33628_34179 = G__34266;
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

var G__33665_34267 = shadow.dom._to_svg;
var G__33666_34268 = "string";
var G__33667_34269 = ((function (G__33665_34267,G__33666_34268){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__33665_34267,G__33666_34268))
;
goog.object.set(G__33665_34267,G__33666_34268,G__33667_34269);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__33672_34285 = shadow.dom._to_svg;
var G__33673_34286 = "null";
var G__33674_34287 = ((function (G__33672_34285,G__33673_34286){
return (function (_){
return null;
});})(G__33672_34285,G__33673_34286))
;
goog.object.set(G__33672_34285,G__33673_34286,G__33674_34287);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34291 = arguments.length;
var i__4731__auto___34292 = (0);
while(true){
if((i__4731__auto___34292 < len__4730__auto___34291)){
args__4736__auto__.push((arguments[i__4731__auto___34292]));

var G__34293 = (i__4731__auto___34292 + (1));
i__4731__auto___34292 = G__34293;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq33675){
var G__33676 = cljs.core.first(seq33675);
var seq33675__$1 = cljs.core.next(seq33675);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33676,seq33675__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33678 = arguments.length;
switch (G__33678) {
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

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__33682_34307 = shadow.dom.dom_node(el);
var G__33683_34308 = cljs.core.name(event);
var G__33684_34309 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33682_34307,G__33683_34308,G__33684_34309) : shadow.dom.dom_listen.call(null,G__33682_34307,G__33683_34308,G__33684_34309));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__31155__auto___34310 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31155__auto___34310,buf,chan,event_fn){
return (function (){
var f__31156__auto__ = (function (){var switch__30907__auto__ = ((function (c__31155__auto___34310,buf,chan,event_fn){
return (function (state_33689){
var state_val_33690 = (state_33689[(1)]);
if((state_val_33690 === (1))){
var state_33689__$1 = state_33689;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33689__$1,(2),once_or_cleanup);
} else {
if((state_val_33690 === (2))){
var inst_33686 = (state_33689[(2)]);
var inst_33687 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33689__$1 = (function (){var statearr_33727 = state_33689;
(statearr_33727[(7)] = inst_33686);

return statearr_33727;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33689__$1,inst_33687);
} else {
return null;
}
}
});})(c__31155__auto___34310,buf,chan,event_fn))
;
return ((function (switch__30907__auto__,c__31155__auto___34310,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__30908__auto__ = null;
var shadow$dom$state_machine__30908__auto____0 = (function (){
var statearr_33728 = [null,null,null,null,null,null,null,null];
(statearr_33728[(0)] = shadow$dom$state_machine__30908__auto__);

(statearr_33728[(1)] = (1));

return statearr_33728;
});
var shadow$dom$state_machine__30908__auto____1 = (function (state_33689){
while(true){
var ret_value__30909__auto__ = (function (){try{while(true){
var result__30910__auto__ = switch__30907__auto__(state_33689);
if(cljs.core.keyword_identical_QMARK_(result__30910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30910__auto__;
}
break;
}
}catch (e33729){if((e33729 instanceof Object)){
var ex__30911__auto__ = e33729;
var statearr_33730_34311 = state_33689;
(statearr_33730_34311[(5)] = ex__30911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33729;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34312 = state_33689;
state_33689 = G__34312;
continue;
} else {
return ret_value__30909__auto__;
}
break;
}
});
shadow$dom$state_machine__30908__auto__ = function(state_33689){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30908__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30908__auto____1.call(this,state_33689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30908__auto____0;
shadow$dom$state_machine__30908__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30908__auto____1;
return shadow$dom$state_machine__30908__auto__;
})()
;})(switch__30907__auto__,c__31155__auto___34310,buf,chan,event_fn))
})();
var state__31157__auto__ = (function (){var statearr_33731 = (f__31156__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31156__auto__.cljs$core$IFn$_invoke$arity$0() : f__31156__auto__.call(null));
(statearr_33731[(6)] = c__31155__auto___34310);

return statearr_33731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31157__auto__);
});})(c__31155__auto___34310,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
