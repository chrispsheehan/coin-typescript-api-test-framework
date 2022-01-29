# TypeScriptAPITestFramework

- [Blog post inspiration](https://sylvain.pontoreau.com/2018/04/30/typescript-cucumber-getting-started)

This is some blerb.
## CI Jobs

Job are run via [GitHub Actions](https://github.com/features/actions). All below jobs are dependant on each other.

- ```Build```: Ensures no build time errors.
- ```Test```: Ensures no failures during tests.
- ```Publish```: Builds image and pushes to [Dockerhub](https://hub.docker.com/).

## Run it locally

- Install [node](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/)

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
