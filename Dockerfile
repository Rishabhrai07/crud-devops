FROM node:19-alpine3.15

WORKDIR /crud-application

COPY . /crud-application
RUN npm install 

EXPOSE 3000
CMD ["npm","start"]