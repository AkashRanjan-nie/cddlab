# Experiment 10 – Multi-Container Applications Using Docker Compose

Services: `web` (Node.js/Express) and `db` (MySQL 8.0) on a shared Compose network.

```bash
cd exp10-docker-compose
docker compose version
docker compose build
docker compose up -d
docker compose ps
curl http://localhost:5000     # confirms the web container reached MySQL
docker compose logs
docker compose logs -f web
docker compose down            # add -v to also delete the db-data volume
```
Add screenshots of `docker compose ps` and the browser/curl output in `screenshots/`.
