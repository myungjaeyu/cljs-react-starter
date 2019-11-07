goog.provide('app.core');
goog.require('cljs.core');
var module$node_modules$react_router_dom$index=shadow.js.require("module$node_modules$react_router_dom$index", {});
goog.require('reagent.core');
goog.require('app.app');
app.core.index = (function app$core$index(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_router_dom$index.HashRouter,app.app.app()], null);
});
app.core.main = (function app$core$main(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.index], null),document.getElementById("root"));
});

//# sourceMappingURL=app.core.js.map
