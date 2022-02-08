#!/bash/bin

cd $(dirname $0)
cd ..

SHA=$(git rev-parse HEAD)

docker build -t ghcr.io/aelporg/builder:latest -t ghcr.io/aelporg/builder:$SHA -f docker/builder.Dockerfile .
dotenv -e .env -- docker build -t ghcr.io/aelporg/frontend:latest -t ghcr.io/aelporg/frontend:$SHA -f docker/frontend.Dockerfile . --build-arg NEXT_PUBLIC_GOOGLE_CLIENT_ID=$NEXT_PUBLIC_GOOGLE_CLIENT_ID
docker build -t ghcr.io/aelporg/api:latest -t ghcr.io/aelporg/api:$SHA -f docker/api.Dockerfile .

docker push ghcr.io/aelporg/api:latest
docker push ghcr.io/aelporg/frontend:latest


