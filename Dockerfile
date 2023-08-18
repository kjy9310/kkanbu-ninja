FROM node:20-alpine

WORKDIR /app/

COPY . .
COPY ./package.json ./
RUN npm install

# 앱 실행
RUN mkdir pages
RUN npm run build
EXPOSE 3000
EXPOSE 80

CMD [ "npm", "run", "start"]