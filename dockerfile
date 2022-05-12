FROM debian
RUN apt update
RUN apt-get install -y nodejs curl sudo npm
RUN curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo tee \
    /usr/share/keyrings/jenkins-keyring.asc > /dev/null 
RUN echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
    https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
    /etc/apt/sources.list.d/jenkins.list > /dev/null 
RUN sudo apt-get update
RUN sudo apt-get install -y fontconfig openjdk-11-jre
RUN sudo apt-get install -y jenkins
RUN curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
EXPOSE 8080
EXPOSE 50000
