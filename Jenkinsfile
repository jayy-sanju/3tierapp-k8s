pipeline {
    agent any

    stages {

        stage('Check Docker') {
            steps {
                sh 'docker --version'
            }
        }

        stage('Check Cluster Access') {
            steps {
                sh 'kubectl get pods'
            }
        }

        stage('Build Auth Image') {
            steps {
                sh 'docker build -t cloudkart-auth ./auth-service'
            }
        }

        stage('Build Frontend Image') {
            steps {
                sh 'docker build -t cloudkart-frontend ./frontend'
            }
        }

        stage('Load Images Into KIND') {
            steps {
                sh 'kind load docker-image cloudkart-auth --name cloudkart'
                sh 'kind load docker-image cloudkart-frontend --name cloudkart'
            }
        }

        stage('Deploy Using Helm') {
            steps {
                sh 'helm upgrade --install cloudkart ./cloudkart-chart'
            }
        }

    }
}