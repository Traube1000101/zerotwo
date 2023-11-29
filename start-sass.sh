#!/bin/bash
directory=$(dirname "$BASH_SOURCE")
sass "$directory"/scss/:"$directory"/css/ --watch --no-source-map

