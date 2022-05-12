FROM debian
RUN apt update &&\
    apt-get install -y nodejs curl sudo npm &&\
    curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo tee \
    /usr/share/keyrings/jenkins-keyring.asc > /dev/null &&\
    echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
    https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
    /etc/apt/sources.list.d/jenkins.list > /dev/null  &&\
    sudo apt-get update &&\
    sudo apt-get install -y fontconfig openjdk-11-jre &&\
    sudo apt-get install -y jenkins &&\
    curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
EXPOSE 8080
EXPOSE 50000
