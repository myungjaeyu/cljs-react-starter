(ns app.core
   (:require [react-router-dom :refer [HashRouter]]
             [reagent.core :refer [render]]
             [app.app :refer [app]]))

(defn index []
  [:> HashRouter
   (app)])

(defn main []
  (render [index] (js/document.getElementById "root")))