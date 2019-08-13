(ns app.app
   (:require [react-router-dom :refer [HashRouter]]
             [app.routes :refer [routes]]
             [app.components.navs :refer [navs]]))

(defn app []
  [:div
   [:h1 "cljs-react-starter"]
   [:> HashRouter
    (navs)
    (routes)]])