FROM node:12-alpine AS build-stage
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN yarn install
COPY . /app
RUN yarn run build

FROM node:12-alpine
RUN yarn global add serve
WORKDIR /app
COPY --from=build-stage /app/build .
CMD serve -p 80 -s .