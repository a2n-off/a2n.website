FROM node:13.12.0-alpine as build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install -g yarn
RUN yarn install --frozen-lockfile --silent
RUN yarn install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

RUN yarn build

# start app
#CMD ["yarn", "start"]

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
