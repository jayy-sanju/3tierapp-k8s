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

        stage('Check Kubectl') {
            steps {
                sh 'kubectl version --client'
            }
        }

        stage('Check Cluster Access') {
            steps {
                sh 'kubectl get pods'
            }
        }

        stage('Check Helm') {
            steps {
                sh 'helm version'
            }
        }

    }
}