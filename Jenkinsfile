node {
  def app
  stage("clone"){ 
    checkout scm 
  }
  stage("build image"){ 
    app = docker.build("IMAGEtodolist") }
  stage("test image") {
    docker.image("IMAGEtodolist").withRun("-p 80:80")
    sh "docker ps"
    sh "curl localhost" 
  } 
}

node {
  def registryProjet="https://github.com/garotc/todolistreact.git" 
  def IMAGE = "${registryProjet}:version-${env:BUILD_ID}"
  stage("clone"){ 
    checkout scm 
  } 
  def img = stage("build image"){
    docker.build("$IMAGE", ".") 
  }
  stage("test image") {
    img.withRun("--name run-$BUILD_ID -p 80:80") {c 
        -> sh "curl localhost" 
    } 
  } stage("Push") {
      docker.withRegistry("https://github.com","tokReg"){
        img.push 'latest'
        img.push() 
      } 
  } 
}
