FROM node:18-alpine
WORKDIR /app1
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["node", "app.js"]
