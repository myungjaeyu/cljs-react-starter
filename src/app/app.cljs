(ns app.app
   (:require [react-router-dom :refer [HashRouter]]
             [app.routes :refer [routes]]))

(defn app []
  [:div
   [:h1 "cljs-react-starter"]
   [:> HashRouter
    (routes)]])