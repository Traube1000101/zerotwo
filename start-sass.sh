#!/bin/bash
directory=$(dirname "$BASH_SOURCE")
sass "$directory"/styles/:"$directory"/css/ --watch --no-source-map

