(ns app.core
   (:require [reagent.core :refer [render]]))

(defn index []
  [:div
   [:h1 "cljs-react-starter"]])

(defn main []
  (render [index] (js/document.getElementById "root")))