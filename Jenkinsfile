pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/durden2004/login-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t login-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker rm -f login-app || true'
                sh 'docker run -d -p 80:80 --name login-app login-app'
            }
        }
    }
}
