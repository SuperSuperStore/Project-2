# pull official base image
FROM node:16.14.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN mkdir -p /app/node_modules
RUN chown node:node /app/node_modules
RUN npm install --legacy-peer-deps 
# --silent
# RUN npm install react-scripts@3.4.1 -g 
#--silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]
