# Use a smaller base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Bundle your app's source code inside the Docker image
COPY . .

# Create a directory to store the messages file
RUN mkdir -p /data

# Set an environment variable for the messages file location
ENV MESSAGES_FILE /data/messages.txt

# Your app binds to port 3000
EXPOSE 3000

CMD [ "node", "server.js" ]
