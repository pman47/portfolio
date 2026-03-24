#!/bin/bash
set -e

IMAGE="ghcr.io/pman47/portfolio"
TAG="${1:-latest}"

echo "==> Building image ${IMAGE}:${TAG}"
docker build -t "${IMAGE}:${TAG}" .

echo "==> Pushing ${IMAGE}:${TAG}"
docker push "${IMAGE}:${TAG}"

echo "==> Done! Image pushed to ${IMAGE}:${TAG}"
echo ""
echo "On your server, run:"
echo "  docker compose pull && docker compose up -d"
