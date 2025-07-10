#!/bin/bash

get_user_config() {
    read -p "Enter site title [My Site]: " SITE_TITLE
    SITE_TITLE=${SITE_TITLE:-"My Site"}

    read -p "Enter site port [8080]: " SITE_PORT
    SITE_PORT=${SITE_PORT:-8080}

    read -p "Enter content directory path [./content]: " CONTENT_DIR
    CONTENT_DIR=${CONTENT_DIR:-"./content"}

    PUID=$(id -u)
    PGID=$(id -g)

    read -p "Enter timezone [Etc/UTC]: " TZ
    TZ=${TZ:-"Etc/UTC"}

    read -p "Enable Obsidian sync? [Y/n]: " ENABLE_OBSIDIAN
    ENABLE_OBSIDIAN=${ENABLE_OBSIDIAN:-"y"}
    ENABLE_OBSIDIAN=$(echo "$ENABLE_OBSIDIAN" | tr '[:upper:]' '[:lower:]')
}

write_env_file() {
    envsubst < "setup/templates/.env.template" > ".env"
}
