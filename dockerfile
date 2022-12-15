FROM node:16

# Workspace or Directory
WORKDIR /app

# Copy Package.json to current Location
COPY package*.json ./app

# Install dependencies
RUN npm install

# Add Everything to Docker Image
COPY . .

# Exposing Port
EXPOSE 3000

# Run App
CMD ["npm", "run", "server"]