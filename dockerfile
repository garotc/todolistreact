FROM ubuntu :latest
RUN apt-get install nginx
EXPOSE 80
ENV PORT=3000
