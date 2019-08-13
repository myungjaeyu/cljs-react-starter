(ns app.app
   (:require [react-router-dom :refer [HashRouter]]))

(defn app []
  [:div
   [:h1 "cljs-react-starter"]
   [:> HashRouter
    [:div "hash router"]]])