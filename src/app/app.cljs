(ns app.app
   (:require [app.routes :refer [routes]]
             [app.components.navs :refer [navs]]))

(defn app []
  [:div
   [:link {:rel "stylesheet" 
           :href "/css/base.css"}]
   [:h1 "cljs-react-starter"]
   (navs)
   (routes)])