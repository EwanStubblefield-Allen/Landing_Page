# Use an official Node.js runtime as a parent image
FROM node:14

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

# Expose the port your Vue.js app will run on (default is 8080)
EXPOSE 8080

# Define the command to start your Vue.js application
CMD [ "npm", "run", "serve" ]