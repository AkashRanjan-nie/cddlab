# Experiment 8 – Creating Docker Images and Containers for Simple Applications

**Aim:** Install Docker, pull images from Docker Hub, and run/manage containers.

## Commands executed (in order)
```bash
docker --version
docker pull hello-world
docker images
docker run hello-world
docker pull nginx
docker run -d -p 8080:80 --name my-nginx nginx
curl http://localhost:8080
docker ps
docker ps -a
docker stop my-nginx
docker rm my-nginx
docker rmi nginx
```

## Output screenshots
Add your own screenshots to a `screenshots/` folder and list them here:
- `screenshots/docker-version.png`
- `screenshots/hello-world.png`
- `screenshots/nginx-browser.png`
- `screenshots/docker-ps.png`

## Result
Docker was installed and verified; images were pulled, containers were run on port 8080, listed, stopped and removed.
