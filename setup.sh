
#!/bin/bash

set -e

source setup/config.sh
source setup/utils.sh

echo "🦊 Site Setup Wizard"
echo "===================="

check_prerequisites

get_user_config

create_directories

write_env_file

envsubst < "setup/templates/docker-compose.yml.template" > "docker-compose.yml"

if [ "$ENABLE_OBSIDIAN" = "y" ]; then
    docker-compose --profile obsidian up -d
else
    docker-compose up -d
fi

echo "✨ Setup complete!"
echo "Site available at: http://localhost:${SITE_PORT}"
if [ "$ENABLE_OBSIDIAN" = "y" ]; then
    echo "Obsidian interface at: http://localhost:${OBSIDIAN_PORT}"
    echo "Configure Obsidian sync in the web interface to start syncing your notes."
fi