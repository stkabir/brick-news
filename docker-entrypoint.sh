#!/bin/sh
# If the live content dir is empty, initialize it from the bundled defaults
CONTENT_DIR=/app/src/content
DEFAULT_DIR=/app/src/content-default

if [ -d "$DEFAULT_DIR" ] && [ -z "$(ls -A "$CONTENT_DIR" 2>/dev/null)" ]; then
  echo "Initializing content from defaults..."
  mkdir -p "$CONTENT_DIR"
  cp -r "$DEFAULT_DIR/." "$CONTENT_DIR/"
fi

exec node ./dist/server/entry.mjs
