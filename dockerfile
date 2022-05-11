FROM ubuntu :latest
RUN apt-get update
RUN apt-get install nginx
RUN apt-get install -y nodejs curl sudo npm
RUN sudo apt-get update
EXPOSE 8080
ENV PORT = 3000
EXPOSE 50000
