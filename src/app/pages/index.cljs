(ns app.pages.index
  (:require [reagent.core :refer [reactify-component]]))

(defn index []
  [:div {:class "Index"}
   [:h1 "Index page"]])

(def Index (reactify-component index))