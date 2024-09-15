# First stage: Build the application
FROM node:18-alpine as build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Second stage: Set up nginx to serve the application
FROM nginx:stable-alpine

# Copy the built application from the 'build' stage to the nginx html directory
COPY --from=build /usr/src/app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
