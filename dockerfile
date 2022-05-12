FROM alpine
RUN apt-get update && \
    apt-get install nginx && \
    apt-get install -y nodejs curl sudo npm
WORKDIR /src
COPY . /app
RUN sudo apt-get update &&\
    npm start
EXPOSE 8080
ENV PORT = 3000
