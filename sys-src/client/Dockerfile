FROM node:16-alpine
ENV NODE_ENV development
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
EXPOSE 3000
CMD [ "sh", "-c", "yarn install & yarn dev" ]