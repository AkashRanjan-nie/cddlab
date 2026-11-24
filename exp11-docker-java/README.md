# Experiment 11 – Containerizing a Java / Python Application

## Part A – Java (multi-stage build)
```bash
cd exp11-docker-java
mvn package
java -jar target/docker-java-app-1.0-SNAPSHOT.jar
docker build -t javaapp:1.0 .
docker run javaapp:1.0        # Hello from a Dockerized Java application!
docker images javaapp         # runtime image is small: only the JAR is copied in
```

## Part B – Python (single stage) – see `../exp11-docker-python`
```bash
cd ../exp11-docker-python
docker build -t pythonapp:1.0 .
docker run pythonapp:1.0      # Hello from a Dockerized Python application!
```
