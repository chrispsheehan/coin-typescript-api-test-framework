# TypeScriptAPITestFramework

- [Blog post inspiration](https://sylvain.pontoreau.com/2018/04/30/typescript-cucumber-getting-started)

This framewoerk targets the https://rapidapi.com/Coinranking/api/coinranking1/ API.

## CI Jobs

Job are run via [GitHub Actions](https://github.com/features/actions). All below jobs are dependant on each other.

- ```Build```: Ensures no build time errors
- ```Test```: Ensures no failures during tests
- ```Publish```: Builds image and pushes to [Dockerhub](https://hub.docker.com/)

Required [GitHub repositry secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)

- ```API_CONFIG```: Json string as per ```src/config/env.json``` containing API URL and auth token
- ```DOCKER_PASSWORD```: Username used to log into [Dockerhub](https://hub.docker.com/)
- ```DOCKER_USERNAME```: Password used to log into [Dockerhub](https://hub.docker.com/)

## Run it locally

- Install [node](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/)
- Populate ```src/config/env.json``` with valid values

```bash
cd src
npm run build
npm run test
```

## Run it in docker

- Install [docker](https://www.docker.com/products/docker-desktop)

Build the image locally.

```bash
docker build . -t local-test 
```

Run the container.

```bash
docker run -it local-test test 
```

### To-Do

- Proper versioning on docker images. At the moment all images are tagged with latest, ideally this would be an incremented major/minor version.
