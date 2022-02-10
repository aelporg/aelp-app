#!/bash/bin

cd $(dirname $0)
cd ..

SHA=$(git rev-parse HEAD)

docker build -t ghcr.io/aelporg/builder:latest -t ghcr.io/aelporg/builder:$CIRCLE_SHA1 -f docker/builder.Dockerfile .
docker build -t ghcr.io/aelporg/prisma:latest -t ghcr.io/aelporg/prisma:$SHA -f docker/prisma.Dockerfile .
docker build -t ghcr.io/aelporg/frontend:latest -t ghcr.io/aelporg/frontend:$SHA -f docker/frontend.Dockerfile . --build-arg NEXT_PUBLIC_GOOGLE_CLIENT_ID=$NEXT_PUBLIC_GOOGLE_CLIENT_ID --build-arg NEXT_PUBLIC_GRAPHQL_API_ENDPOINT=$NEXT_PUBLIC_GRAPHQL_API_ENDPOINT
docker build -t ghcr.io/aelporg/api:latest -t ghcr.io/aelporg/api:$SHA -f docker/api.Dockerfile .

docker push ghcr.io/aelporg/api:latest
docker push ghcr.io/aelporg/prisma:latest
docker push ghcr.io/aelporg/frontend:latest

docker push ghcr.io/aelporg/api:$SHA
docker push ghcr.io/aelporg/prisma:$SHA
docker push ghcr.io/aelporg/frontend:$SHA
