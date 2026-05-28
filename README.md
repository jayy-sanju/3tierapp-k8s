# CloudKart – Kubernetes-Based Microservices Application

## Overview

CloudKart is a containerized microservices-based application built using React, Node.js, PostgreSQL, Docker, and Kubernetes.

The project demonstrates real-world DevOps and Kubernetes concepts including container orchestration, ingress routing, persistent storage, configuration management, and service discovery.

---

## Tech Stack

* React (Frontend)
* Node.js + Express (Backend)
* PostgreSQL
* Docker
* Kubernetes (KIND)
* NGINX Ingress Controller

---

## Kubernetes Concepts Implemented

* Deployments
* Services
* Ingress
* ConfigMaps
* Secrets
* PersistentVolumeClaims
* Scaling
* Internal Service Discovery

---

## Features

* User authentication API
* Kubernetes-based deployment
* Persistent PostgreSQL storage
* Ingress-based routing
* Multi-service architecture
* Containerized applications

---

## Run Locally

### Build Docker Images

```bash
docker build -t cloudkart-frontend ./frontend
docker build -t cloudkart-auth ./auth-service
```

### Create KIND Cluster

```bash
kind create cluster --name cloudkart --config kind-config.yaml
```

### Apply Kubernetes Resources

```bash
kubectl apply -f k8s/
```

---

## Future Enhancements

* Helm Charts
* Jenkins CI/CD Pipeline
* EKS Deployment
* Monitoring with Prometheus/Grafana
