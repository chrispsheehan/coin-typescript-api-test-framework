# TypeScriptAPITestFramework

- [Blog post inspiration](https://sylvain.pontoreau.com/2018/04/30/typescript-cucumber-getting-started)

This is some blerb.
## CI Jobs

Job are run via [GitHub Actions](https://github.com/features/actions). All below jobs are dependant on each other.

- Build: Ensures no build time errors.
- Test: Ensures no failures during tests.
- Publish: Builds image and pushes to [Dockerhub](https://hub.docker.com/).






### To-Do

- Proper versioning on docker images. At the moment all images are tagged with latest, ideally this would be an increment