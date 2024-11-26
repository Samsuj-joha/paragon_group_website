# Step 1: Use the official Node.js image from Docker Hub
FROM node:20-alpine

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json (if you have one)
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Build the Next.js app (optional if you want to build before serving)
RUN npm run build

# Step 7: Expose the port the app will run on (default Next.js port is 3000)
EXPOSE 3000

# Step 8: Start the application
CMD ["npm", "start"]
