#!/usr/bin/env bash
# Runs the Experiment 8 steps in order. Requires Docker.
set -e
docker --version
docker pull hello-world
docker images
docker run --rm hello-world
docker pull nginx
docker run -d -p 8080:80 --name my-nginx nginx
sleep 3
curl -s http://localhost:8080 | head -5
docker ps
docker ps -a
docker stop my-nginx
docker rm my-nginx
docker rmi nginx
