FROM node:16

# Workspace or Directory
WORKDIR /app

# Copy Package.json to current Location
COPY package*.json ./

# Install dependencies
RUN npm install

# Add Everything to Docker Image
COPY . .

# Exposing Port
EXPOSE 9876

# Run App
CMD ["npm", "run", "server"]