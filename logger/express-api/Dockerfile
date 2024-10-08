# Use the Node.js image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the remaining source files
COPY . .

# Expose the port for the Express API
EXPOSE 3000

# Start the Express server
CMD ["node", "index.js"]
