pipeline {
    agent any

    stages {

        stage('Clone Verification') {
            steps {
                echo 'Pipeline started successfully!'
            }
        }

        stage('Check Docker') {
            steps {
                sh 'docker --version'
            }
        }

        stage('Build Auth Image') {
            steps {
                sh 'docker build -t cloudkart-auth ./auth-service'
            }
        }

    }
}