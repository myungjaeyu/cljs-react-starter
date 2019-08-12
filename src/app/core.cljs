(ns app.core)

(def text "u4bi")

(defn main []
  (js/console.log (js/document.getElementById "root"))
  (println (str "cljs-react-starter" " " text)))