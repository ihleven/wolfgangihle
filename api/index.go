package handler

import (
	"fmt"
	"net/http"
	"os"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "<h1>Hello %s from Go!</h1>", os.Getenv("NITRO_PRESET"))
}
