import { ShallowLocations } from "../services/pokeapi.js";
import { State } from "../state.js";

export async function listPreviousMaps(state: State) {
  const pageURL = state.prevLocationsURL ?? "";

  const locationInCache = state.pokeCache.get<ShallowLocations>(pageURL);
  let locations: ShallowLocations;

  if (locationInCache) {
    locations = locationInCache.value;
  } else {
    locations = await state.pokeApi.fetchLocation(pageURL);
    state.pokeCache.add<ShallowLocations>(pageURL, locations);
  }

  state.nextLocationsURL = locations.next;
  state.prevLocationsURL = locations.previous;

  for (const location of locations.results) {
    console.log(location.name);
  }
}
