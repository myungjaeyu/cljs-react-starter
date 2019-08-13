(ns app.pages.sub
  (:require [reagent.core :refer [reactify-component]]))

(defn sub []
  [:div {:class "Sub"}
   [:h1 "Sub page"]])

(def Sub (reactify-component sub))