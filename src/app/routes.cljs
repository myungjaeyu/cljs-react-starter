(ns app.routes
  (:require [react-router-dom :refer [Route]]
            [app.pages.index :refer [Index]]
            [app.pages.sub :refer [Sub]]))

(defn routes []
  [:div
   [:> Route {:path "/" 
              :exact true 
              :component Index}]
   [:> Route {:path "/sub" 
              :exact true 
              :component Sub}]])