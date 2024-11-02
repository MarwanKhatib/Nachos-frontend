# Use a Node.js image that matches your local version
FROM node:22.11.0

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that Vite uses
EXPOSE 5173

# Start the Vite development server
CMD ["npm", "run", "dev"]