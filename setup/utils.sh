#!/bin/bash

check_prerequisites() {
    local missing_deps=0

    if ! command -v docker &> /dev/null; then
        echo "❌ Docker is not installed"
        missing_deps=1
    fi

    if ! command -v docker-compose &> /dev/null; then
        echo "❌ Docker Compose is not installed"
        missing_deps=1
    fi

    if ! command -v envsubst &> /dev/null; then
        echo "❌ envsubst is not installed (package: gettext-base)"
        missing_deps=1
    fi

    if [ $missing_deps -eq 1 ]; then
        exit 1
    fi
}

create_directories() {
    mkdir -p "$CONTENT_DIR"
    mkdir -p .obsidian/config
}
