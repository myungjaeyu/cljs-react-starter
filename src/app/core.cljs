(ns app.core
   (:require [reagent.core :refer [render]]
             [app.app :refer [app]]))

(defn index []
  (app))

(defn main []
  (render [index] (js/document.getElementById "root")))