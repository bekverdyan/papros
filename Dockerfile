FROM node:11.6.0-alpine AS builder
COPY . ./papros
WORKDIR /papros
RUN npm i
RUN $(npm bin)/ng build --prod

FROM nginx:1.15.8-alpine
COPY --from=builder /papros/dist/Papros/ /usr/share/nginx/html

