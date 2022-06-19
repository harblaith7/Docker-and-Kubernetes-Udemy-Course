docker container inspect mongo

docker network create todos-net

docker run --name mongodb -d -p 27017:27017 -v data:/data/db --network todos-net mongo

docker run -d --name todoapp --network todo-net -p 8000:8000 todos-app

docker run -p 3000:3000 -v $(pwd)/src:/app/src/src --network todo-net -it frontend
