package handler

import (
	"fmt"
	"net/http"
)

func HandlerAusstellungen(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "<h1>Hello %s from Go!</h1>", json)
	w.Write(json)
}

var json []byte = []byte(`[
	  {
		id: 126,
		slug: "farben-des-lebens",
		ort: "Freiburg",
		jahr: 2022,
		venue: "c-punkt Münsterforum",
		titel: "Farben des Lebens - Monochrome Bilder",
		untertitel: "",
		typ: "Einzelausstellung mit Katalog",
		von: null,
		bis: null,
		kommentar: "Farben des Lebens, monochrome Malerei, C-Punkt Münsterforum, Freiburg ",
		bilder: null,
		fotos: null,
		dokumente: null,
	  }
]`)
