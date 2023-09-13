# Use an official Node.js runtime as a parent image
FROM node:18 AS build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project directory to the container
COPY . .

# Build the Vue.js application
RUN npm run build

# Use a lightweight web server to serve the Vue.js application
FROM nginx:alpine

# Copy the built application files to the Nginx web server directory
COPY --from=build ./docs /usr/share/nginx/html

# Expose port 80 for the Nginx web server
EXPOSE 8080

# Start the Nginx web server
CMD ["nginx", "-g", "daemon off;"]
