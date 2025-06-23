# Step 1: Build the Vite app
FROM node:18 AS builder

WORKDIR /app

# Copy only the package.json and lock file first to optimize caching
COPY package*.json ./
RUN npm install

# Now copy the rest of the app
COPY . .
RUN npm run build


# Step 2: Serve with NGINX
FROM nginx:alpine

# Remove default NGINX content
RUN rm -rf /usr/share/nginx/html/*

# Copy built Vite files to NGINX's web root
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 for HTTP
EXPOSE 80

# Start NGINX in the foreground
CMD ["nginx", "-g", "daemon off;"]
