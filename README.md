Overview

This project demonstrates the containerisation of a Node.js Arithmetic Microservice application using Docker and Docker Compose. It includes creating a Dockerfile, setting up a Docker Compose environment, building the Docker image, running the containerised application, testing the functionality, and pushing the project to GitHub.

Tools Used

Git
Visual Studio Code
Node.js
Docker
Docker Compose

Step-by-Step Instructions

1. Install Required Tools
Installed Docker using Homebrew:
brew install --cask docker
open /Applications/Docker.app

3. Clone or Use Web Application
Navigated to project directory:
cd /Users/unknown1/Desktop/SIT323/Task\ 4.1P

4. Create a Dockerfile
Created a Dockerfile with the following contents:

FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

4. Create a Docker Compose File
Created a docker-compose.yml:

version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
    environment:
      - NODE_ENV=development
      
5. Add .dockerignore
Created a .dockerignore file with:

node_modules
npm-debug.log
6. Update package.json
Ensured that package.json had a valid start script:

"scripts": {
  "start": "node server.js"
}
7. Build the Docker Image
Built the image using:
docker compose build

8. Start the Docker Compose Environment
Ran the containerized application:
docker compose up

Application available at: http://localhost:3000
Testing the Application

Accessed the following endpoints:

Operation	URL Example	Result Example
Addition	http://localhost:3000/add?num1=5&num2=3	{"result":8}
Subtraction	http://localhost:3000/subtract?num1=10&num2=4	{"result":6}
Multiplication	http://localhost:3000/multiply?num1=6&num2=7	{"result":42}
Division	http://localhost:3000/divide?num1=20&num2=5	{"result":4}

Pushing the Project to GitHub

Initialize Git:
git init
Add remote repository:
git remote add origin https://github.com/your-username/sit323-2025-prac5p.git
Push the code:
git add .
git commit -m "Dockerized Arithmetic Microservice App"
git push -u origin main

Final Deliverables

server.js
package.json
Dockerfile
docker-compose.yml
.dockerignore
README.md
GitHub Repository: https://github.com/your-username/sit323-2025-prac5p
