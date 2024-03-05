# Use the official Node.js image as a base
FROM node:18-alpine

# Set environment variable for CI
ENV CI=true

# Update package repositories and install necessary packages
RUN apk update && apk add --no-cache nano curl

# Set working directory inside the container
WORKDIR /app

# Copy package.json to the working directory
COPY package.json /app

# Install dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Clean npm cache
RUN npm cache clean --force

# Command to run the application
CMD ["npm", "start"]

# Expose the port that the application runs on
EXPOSE 3000
