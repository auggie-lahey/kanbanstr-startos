FROM node:20 AS build

WORKDIR /app
COPY ./kanbanstr/ .kanbanstr/
# COPY package.json ./
# COPY package-lock.json ./
RUN cd kanbanstr; npm install
COPY . ./
RUN npm run build


FROM nginx:1.19-alpine
COPY --from=build ./index.html /usr/share/nginx/html/index.html
COPY --from=build /app/dist /usr/share/nginx/html
