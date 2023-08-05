FROM node:20-alpine

WORKDIR /app/

COPY ./package.json ./
RUN npm install

# 앱 실행
RUN mkdir pages

EXPOSE 3000

CMD [ "npm", "run", "buildstart"]