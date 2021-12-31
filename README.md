# Viaplay Backend Documentation
## The building blocks and folder structure
The main entry point is `server.js` and this file handles our server and also using any routes or adapters. Then we have `docker-compose.yml` and `Dockerfile` to run our servers in a containerized environment in order to be easily managable, maintainable, ready to integrate with already existing microservice architecture, and easily deploayble. Last but not least we run the app in a container to prevent _"it's working on my machine!"_ 🤷‍♂️.

  - Domain Logic: This folder contains our logic, be it anything. It only calls our _ports_ to intract with outside world like 3rd party APIs, other services, databases and anything that is external.
  - Ports: This is an _anti-corruption layer (ACL)_, a pattern between domain logic (model) and any other bounded context (code) that wants to intract with our domain model (logic). This pattern prevents any intrusion twards the domain model (logic).
  - Adapters: This is a pattern for intracting from other services, repository layers, or anything external with the domain model (logic) and from the domain model (logic) with other services and in general outside world.

## Run the application
Since the application is dockerized you can use `docker-compose up -d --build` for the first time to build it and then run it and after that you can only use `docker-compose up -d` to run it again (incase you've stoped it!).

## Architectrual Design
The backend architecture is based on _Hexagonal Architecture_, a microservice and DDD based architecture.

