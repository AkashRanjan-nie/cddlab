# Experiment 9 – Writing Dockerfiles and Building Custom Containerized Applications

```bash
cd exp09-dockerfile-node
docker build -t myapp:1.0 .
docker images
docker run -d -p 5000:5000 --name myapp-container myapp:1.0
curl http://localhost:5000        # Hello from a Dockerized Node.js app!
docker logs myapp-container       # Server running on port 5000
docker stop myapp-container && docker rm myapp-container
```

Optional – push to Docker Hub:
```bash
docker login
docker tag myapp:1.0 <your-dockerhub-username>/myapp:1.0
docker push <your-dockerhub-username>/myapp:1.0
```
Add screenshots of the build, `docker images`, and the browser/curl output in `screenshots/`.
