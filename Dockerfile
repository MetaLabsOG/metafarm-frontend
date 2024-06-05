# Use the official Node.js image as the base image
FROM node:18.12.0

# Set the working directory
WORKDIR /workspace

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Copy custom install script
COPY install_prod.sh ./

# Ensure the install script is executable
RUN chmod +x install_prod.sh

# Run the custom install script
RUN ./install_prod.sh

# Copy the rest of the application files
COPY . .

# Build the application
RUN yarn build

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]
