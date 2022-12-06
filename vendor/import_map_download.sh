#!/bin/bash
#
# Use that till rails/importmap has next issues - 
# (the gem does not work for multi-files dependencies)
# https://github.com/rails/importmap-rails/issues/65
# https://github.com/rails/importmap-rails/issues/153
# examples 
# "./_/cc45baaa.js"
# "#lib/platform/node/index.js"
# "#lib/adapters/http.js"
# "form-data"

cd $(dirname "$0")

main(){
	jspm chart.js 3.9.1

	dl chart.js/dist/chart.mjs
	dl chart.js/_/16cda191.js
	dl chart.js/dist/chunks/helpers.segment.mjs
}

jspm(){
	local pkg="$1"
	local ver="$2"
	local kind=npm
	packages[$pkg]=https://ga.jspm.io/$kind:$pkg@$ver/
}

dl(){
	local path="$1"
	local pkg="${path%%/*}"
	local pkgpath="${path#*/}"
	local dir="${path%/*}"
	local urlprefix="${packages[$pkg]}"
	mkdir -p "javascript/$dir"
	path=${path//.mjs/.js} # because rails-importmap cannot pin .mjs files
	>&2 echo "dl $pkg/${path#*/} $urlprefix$pkgpath"
	curl -s -o "javascript/$path" "$urlprefix$pkgpath"
}

declare -A packages

main "$@"
