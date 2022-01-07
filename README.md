# Viaplay Backend Documentation
## The building blocks and folder structure
The main entry point is `server.js` and this file handles our server and also using any routes or adapters. Then we have `docker-compose.yml` and `Dockerfile` to run our servers in a containerized environment in order to be easily managable, maintainable, ready to integrate with already existing microservice architecture, and easily deploayble. Last but not least we run the app in a container to prevent _"it's working on my machine!"_ 🤷‍♂️.

  - Domain Logic: This folder contains our logic, be it anything. It only calls our _ports_ to intract with outside world like 3rd party APIs, other services, databases and anything that is external.
  - Ports: This is an _anti-corruption layer (ACL)_, a pattern between domain logic (model) and any other bounded context (code) that wants to intract with our domain model (logic). This pattern prevents any intrusion twards the domain model (logic).
  - Adapters: This is a pattern for intracting from other services, repository layers, or anything external with the domain model (logic) and from the domain model (logic) with other services and in general outside world.

Root file consists of the test file, server file, dockerfile and docker compose `yml` file.
- Adapters
  - handleViaplayRequstAdapter.js : this file will be called inside our API function and will receive a link and will have an axios call in then pass the axios data to the Port to be passed to the DomainLogic.
  - tmdbAxiosAdapter.js : as the name shows this will handle the ouside call to the third party API which is from _TMDb_ to retrive the trailers youtube vide results with other assiciated data.
- Ports
  - handleViaplayRequstPort.js : this is the port that will call the domain logic in order to invoke it and retrive the data that it send back.
  - tmdbAxiosPort.js : this will invoke the _tmdbAxiosAdapter.js_ module to send the axios API call.
- DomainLogic: in this test there's only one file included and it will be invoked via our endpoint and invoke the axios call to the TMDb API to retrive the youtube related information, clean the received data from the module and create an array of youtube links. Then it'll send it back to the handleViaplayRequstPort.js and then to handleViaplayRequstAdapter.js in order to send back the response to the router function.
- Route: in this test we only have one router, and it'll call the handleViaplayRequstAdapter.js to send the link and also recieve the response back.

## Run the application
Since the application is dockerized you can use `docker-compose up -d --build` for the first time to build it and then run it and after that you can only use `docker-compose up -d` to run it again (incase you've stoped it!).
You need to hava a .env file to provide your `TMDB_API_KEY`.
## Architectrual Design
_The Architectural design of the test is visualized and you can find them in pdf and image file type in root of the application!_
The backend architecture is based on _Hexagonal Architecture_, a microservice and DDD based architecture.

This archtectural style allows us to break down the code to three parts:
  - Adapters: in order to communicate with and from outside the world from the domain logic
  - Ports: an anti-corruption layer that allows the _adapters_ to talk to the _domain logic_ or vice versa.
  - Domain logic: which is the main logic and the business capability that we have to provide as a service.

This architecture allows us to change code so rapidly and refactor or even remove/add code so rapidly. Also provides a better testing experience and more organized and modular code, hence we will have a better maintainability.

This architecture style will cover the business logic from being directly changed or invoked and create _interface_ layers (function layer in this particular example since we don't have typed language) and create boundries.
