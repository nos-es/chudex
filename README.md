# chudex

`chudex` is a small command line Pokedex written in TypeScript. It uses the [PokeAPI](https://pokeapi.co/) to browse locations, find Pokemon and keep track of the ones you have caught.

The project is based on the [Build a Pokedex in TypeScript](https://www.boot.dev/courses/build-pokedex-cli-typescript) course from Boot.dev.

## Features

- interactive command line REPL
- command registry for handling user input
- HTTP requests to the PokeAPI
- browsing location areas with forward and backward pagination
- exploring areas to see which Pokemon can be found there
- catching Pokemon with a simple random catch mechanic
- in-memory Pokedex for caught Pokemon
- Pokemon details including stats, height, weight and types
- custom in-memory cache for location lists

## Scope

`chudex` is a small learning project, not a full Pokemon game.

Caught Pokemon are only stored in memory. When you close the program, your Pokedex is empty again the next time you start it.

The application needs an internet connection to fetch data from the PokeAPI. Location lists are cached in memory and old entries are periodically removed. The cache interval is currently set to five minutes.

## Build

The project uses Node.js and npm. The Node.js version is specified in `.nvmrc`.

    npm ci
    npm run build

## Usage

Start the compiled application with:

    npm start

Or compile and run it directly during development:

    npm run dev

Available commands:

- `help` shows the help message
- `map` lists the next 20 location areas
- `mapb` goes back to the previous location areas
- `explore <area>` lists Pokemon found in an area
- `catch <pokemon>` attempts to catch a Pokemon
- `inspect <pokemon>` shows details about a caught Pokemon
- `pokedex` lists all caught Pokemon
- `exit` closes the application

Example:

    Pokedex > map
    canalave-city-area
    eterna-city-area
    pastoria-city-area
    ...

    Pokedex > explore canalave-city-area
    Exploring canalave-city-area...
    Found Pokemon:
    - tentacool
    ...
    
    Pokedex > explore canalave-city-area
    Pokedex > catch tentacool
    Pokedex > pokedex
    Pokedex > inspect tentacool

Catching a Pokemon is not guaranteed, so you might have to try more than once before `inspect` works.

## Tests

The project uses Vitest for testing.

    npm test

The tests cover input parsing and the cache.

## Why I built this

Recently I have been spending more time with JavaScript and TypeScript. I wanted a bit more practice with Node.js and a project where I could use several things together instead of only doing small exercises.

The Boot.dev Pokedex project was a good fit for that. I got to work with a simple REPL, asynchronous HTTP requests, JSON responses and state that needs to be shared between commands.

It's a fairly small project, but it helped me get more comfortable with TypeScript and with putting together a command line application.
