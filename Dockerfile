# Use Node.js base image
FROM node:22
# Set working directory
WORKDIR /app
# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install
# Copy the rest of the source code
COPY . .
# Expose the dev port (default: 5173 for Vite)
EXPOSE 5173
# Run the Vite dev server
CMD ["npm", "run", "dev", "--", "--host"]
