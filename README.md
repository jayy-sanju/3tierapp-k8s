# CloudKart - 3 Tier Application Deployment on Kubernetes with Jenkins CI/CD

## Overview

CloudKart is a 3-tier microservices application deployed on Kubernetes using Docker, Helm, and Jenkins CI/CD.

This project demonstrates a complete DevOps workflow starting from containerization, Kubernetes orchestration, Helm-based deployments, and automated CI/CD pipelines using Jenkins.

The entire environment is currently running on a local Kubernetes cluster created using KIND (Kubernetes IN Docker), simulating a real-world cloud-native deployment workflow.

---

## Architecture

Frontend → Auth Service → PostgreSQL Database

### Components

* Frontend Service
* Auth Service (Node.js Backend)
* PostgreSQL Database
* Kubernetes
* Helm
* Jenkins
* Docker
* KIND Cluster
* GitHub

---

## Tech Stack

### Containerization

* Docker

### Orchestration

* Kubernetes (KIND)

### Package Management

* Helm

### CI/CD

* Jenkins
* Jenkinsfile (Pipeline as Code)

### Source Control

* Git
* GitHub

### Database

* PostgreSQL

### Backend

* Node.js
* Prisma ORM

### Frontend

* React

---

## Features Implemented

### Dockerization

* Containerized frontend application
* Containerized backend application
* Custom Docker image builds

### Kubernetes Deployment

* Deployments
* Services
* Ingress
* Persistent Volume Claims (PVC)
* Environment Variables
* Rolling Updates

### Helm Integration

Migrated raw Kubernetes manifests into Helm templates.

Benefits:

* Reusable deployments
* Centralized values.yaml
* Environment flexibility
* Easier upgrades and rollbacks

### Persistent Storage

Implemented PostgreSQL persistence using PVCs.

Verified:

* Data survives pod recreation
* Database remains persistent across deployments

### Jenkins CI/CD Pipeline

Implemented Jenkins pipeline with:

* GitHub repository integration
* Pipeline as Code (Jenkinsfile)
* Docker image builds
* Kubernetes cluster access
* Helm deployment automation
* KIND image loading automation

Pipeline Flow:

GitHub
↓
Jenkins
↓
Docker Build
↓
Load Image Into KIND
↓
Helm Upgrade
↓
Kubernetes Deployment

### Custom Jenkins Image

Built a custom Jenkins Docker image containing:

* Docker CLI
* Kubectl
* Helm
* KIND CLI

Configured:

* Docker socket mounting
* Kubernetes kubeconfig access
* KIND network connectivity

---

## Project Structure

```text
3tierapp-k8s/

├── auth-service/
├── frontend/
├── public/

├── cloudkart-chart/
│   ├── templates/
│   ├── values.yaml
│   └── Chart.yaml

├── jenkins-docker/
│   └── Dockerfile

├── Jenkinsfile

├── docker-compose.yml
├── kind-config.yaml

├── README.md
└── .gitignore
```

---

## CI/CD Pipeline

Current automated workflow:

1. Developer pushes code to GitHub
2. Jenkins pulls repository
3. Docker images are built
4. Images are loaded into KIND cluster
5. Helm upgrades Kubernetes deployment
6. Kubernetes performs rollout

---

## Key DevOps Concepts Practiced

* Docker Image Lifecycle
* Kubernetes Deployments
* Ingress Networking
* Persistent Volumes
* Helm Templating
* Jenkins Pipelines
* Pipeline as Code
* GitOps Foundations
* Container Networking
* Kubernetes Service Discovery
* CI/CD Automation
* Kubernetes Rollouts
* Docker Socket Integration
* Artifact Creation (Docker Images)

---

## Future Enhancements

* GitHub Webhooks
* AWS ECR Integration
* EKS Deployment
* SonarQube Integration
* Trivy Security Scanning
* Terraform Infrastructure Provisioning

---

## Learning Outcomes

This project helped me gain hands-on experience with:

* Docker
* Kubernetes
* Helm
* Jenkins
* GitHub
* CI/CD Automation
* Containerized Application Deployment
* Kubernetes Networking
* Persistent Storage Management
* DevOps Pipeline Engineering

---

## Author

S. Srisanjay

DevOps Engineer | AWS | Docker | Kubernetes | Jenkins | Terraform
