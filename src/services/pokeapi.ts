export class PokeAPI {
  private static readonly baseUrl: string = "https://pokeapi.co/api/v2";

  constructor() { }
  async fetchLocation(pageURL?: string): Promise<ShallowLocations> {
    let locationURL: string = `${PokeAPI.baseUrl}/location-area?offset=0&limit=20`;

    if (pageURL) {
      locationURL = pageURL;
    }

    try {
      const response = await fetch(locationURL, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response.json();
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
    }
    throw new Error("A Problem occured when trying to fetch locations");
  }
  async fetchPokemonByLocation(location: string): Promise<PokemonEncounters> {
    let locationURL: string = `${PokeAPI.baseUrl}/location-area/${location}`;

    try {
      const response = await fetch(locationURL, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response.json();
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
    }
    throw new Error("A Problem occured when trying to fetch encounters");
  }
  async fetchPokemon(pokemonName: string): Promise<Pokemon> {
    let pokemonURL: string = `${PokeAPI.baseUrl}/pokemon/${pokemonName}`;

    try {
      const response = await fetch(pokemonURL, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response.json();
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
    }
    throw new Error("A Problem occured when trying to fetch pokemon");
  }
}

export type PokemonEncounters = {
  pokemon_encounters: PokemonEncounter[];
};
export type PokemonEncounter = {
  pokemon: Pokemon;
};

export type Pokemon = {
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    },
  ];
  types: [
    {
      type: {
        name: string;
      };
    },
  ];
};

export type ShallowLocations = {
  count: number;
  next: string;
  previous: string;
  results: Location[];
};

export type Location = {
  name: string;
  url: string;
};
