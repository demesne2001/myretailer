
pipeline {
    agent any
   
    
    stages {
        stage('checkout') {
            steps {
               checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: 'demesne2001', url: 'https://github.com/demesne2001/myretailer.git']])
                echo 'checkout done'
            }
        }
        stage('Docker Image') {
            steps {
                
                script{
                    def a=0
                    bat 'docker build . -f dockerfile.txt -t  myretailer'
                    a=1
                    if(a>0)
                    {
                         bat 'docker stop myretailer'
                         bat 'docker rm myretailer'
                    }
                }
                echo 'Docker Image done'
            }
        }
        stage('Docker Run') {
            steps {
                script{
                    bat 'docker run -p 5000:5000 -d --name myretailer myretailer'
                }
                echo 'Docker Running'
            }
        }
        stage('Docker push') {
            steps {
                script{
                    bat 'docker login -u patelom0910 -p 09102001Om'
                }
                echo 'Docker push done'
            }
        }
    }
}
