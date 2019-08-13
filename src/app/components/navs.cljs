(ns app.components.navs
  (:require [react-router-dom :refer [Link]]))

(defn navs []
  [:nav
   [:ul
    [:li
     [:> Link {:to "/"} "Index"]]
    [:li
     [:> Link {:to "/sub"} "Sub"]]]])