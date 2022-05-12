FROM node:13.12.0-alpine
RUN apt-get update &&\
    apt-get install -y nodejs curl sudo npm &&\
RUN curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo tee \
    /usr/share/keyrings/jenkins-keyring.asc > /dev/null 
RUN echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
    https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
    /etc/apt/sources.list.d/jenkins.list > /dev/null 
RUN sudo apt-get update &&\
    sudo apt-get install -y fontconfig openjdk-11-jre &&\
    sudo apt-get install -y jenkins &&\
    sudo apt-get install docker
EXPOSE 8080
EXPOSE 50000
