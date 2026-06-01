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

        stage('List Files') {
            steps {
                sh 'ls -la'
            }
        }

    }
}