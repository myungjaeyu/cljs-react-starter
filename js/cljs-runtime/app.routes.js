goog.provide('app.routes');
goog.require('cljs.core');
var module$node_modules$react_router_dom$index=shadow.js.require("module$node_modules$react_router_dom$index", {});
goog.require('app.pages.index');
goog.require('app.pages.sub');
app.routes.routes = (function app$routes$routes(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_router_dom$index.Route,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),"/",new cljs.core.Keyword(null,"exact","exact",1438022323),true,new cljs.core.Keyword(null,"component","component",1555936782),app.pages.index.Index], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_router_dom$index.Route,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),"/sub",new cljs.core.Keyword(null,"exact","exact",1438022323),true,new cljs.core.Keyword(null,"component","component",1555936782),app.pages.sub.Sub], null)], null)], null);
});

//# sourceMappingURL=app.routes.js.map
