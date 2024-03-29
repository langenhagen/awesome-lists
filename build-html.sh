#!/bin/bash
# Autoformat the markdown files with `prettier` on the files,
# convert the markdown files in the project to HTML
# and autoformat the HTML files with `prettier` as well.
set -e

cd "$(dirname "${BASH_SOURCE[0]}")" || exit 1

prettier --write --print-width 100 'README.md' ./markdown/*.md

pandoc --standalone --template 'template.html' 'README.md' -o 'index.html'
for file in markdown/*.md; do
    [ "$file" == 'README.md' ] && continue

    output_file="${file#markdown/}"
    output_file="${output_file%.md}.html"
    pandoc --standalone --template 'template.html' "$file" -o "$output_file"
done

prettier --write --print-width 100 ./*.{html,js,css,md}
