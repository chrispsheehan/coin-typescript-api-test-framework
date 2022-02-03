# TypeScriptAPITestFramework

- [Blog post inspiration](https://sylvain.pontoreau.com/2018/04/30/typescript-cucumber-getting-started)
- [CucumberJS](https://github.com/cucumber/cucumber-js)

This framework targets the [Coin Ranking API](https://rapidapi.com/Coinranking/api/coinranking1).

## Configuration

Configuration is stored in the below format. Auth token will need to be populated. It can be obtained from the [RapidApi](https://rapidapi.com/Coinranking/api/coinranking1/) site.

```json
{
    "BASE_URL" : "https://coinranking1.p.rapidapi.com",
    "AUTH_TOKEN" : "[ENTER_AUTH_TOKEN_HERE]"
}
```

## [GitHub Actions](https://github.com/features/actions)

All below jobs are dependant on each other and defined in ```.github/workflows/github-ci.yml```.

- ```Build```: Ensures no build time errors
- ```Test```: Ensures no failures during tests
- ```Publish```: Builds image and pushes to [Dockerhub](https://hub.docker.com/)

Required [GitHub repositry secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)

- ```API_CONFIG```: Json string as per above [configuration](#configuration) json.
- ```DOCKER_PASSWORD```: Username used to log into [Dockerhub](https://hub.docker.com/)
- ```DOCKER_USERNAME```: Password used to log into [Dockerhub](https://hub.docker.com/)

## Run it locally

- Install [node](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/)
- Ensure ```src/config/env.json``` file and populate with [configuration](#configuration) json.

```bash
cd src
npm run build
npm run test
```

## Run it in docker

- Install [docker](https://www.docker.com/products/docker-desktop)
- Ensure ```src/config/env.json``` file and populate with [configuration](#configuration) json.

Build the image locally.

```bash
docker build . -t [YourImageName] 
```

Run the container.

```bash
docker run -it [YourImageName] 
```

## Filters

Filters can be appended to local and docker tests.

Documentation found [here](https://cucumber.io/docs/cucumber/api/#tag-expressions)

Examples filters;

```bash
"(@coins and not @exchanges)"
"(@coins or @exchanges)"
"@coins"
```

- Local: ```tags=@coins npm run test```
- Docker: ```docker run -it [YourImageName] --tags=@coins```

## Run in paralell

Simply add parameter as per below

```bash
--parallel 3
```

### To-Do

- Proper versioning on docker images. At the moment all images are tagged with latest, ideally this would be an incremented major/minor version.
- Work out why the ```exchanges/``` endpoints aren't authenticating.
