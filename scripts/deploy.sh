docker build -t ghcr.io/aelporg/api:latest apps/api
docker build -t ghcr.io/aelporg/frontend:latest apps/frontend

docker push ghcr.io/aelporg/api:latest
docker push ghcr.io/aelporg/frontend:latest


