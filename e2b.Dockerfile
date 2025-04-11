# You can use most Debian-based base images
FROM node:23-slim

# Install curl
RUN apt-get update && apt-get install -y curl git && apt-get clean && rm -rf /var/lib/apt/lists/*

RUN npm install -g pnpm@latest-10

COPY compile_page.sh /compile_page.sh
RUN chmod +x /compile_page.sh

# Install dependencies and customize sandbox
WORKDIR /home/user/.plato

COPY . .

RUN pnpm config set store-dir /home/user/.local/share/pnpm/store/v10 --global

RUN pnpm install

# Move the Nextjs app to the home directory and remove the .plato directory
RUN mv /home/user/.plato/* /home/user/ && rm -rf /home/user/.plato

# e2b.toml :
# start_cmd = "/compile_page.sh"
# cpu_count = 4
# memory_mb = 4_096