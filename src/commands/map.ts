import { State } from "../state.js";

export async function listMaps(state: State) {
  const pageURL = state.nextLocationsURL ?? "";
  const locations = await state.pokeApi.fetchLocation(pageURL);
  state.nextLocationsURL = locations.next;
  state.prevLocationsURL = locations.previous;

  for (const location of locations.results) {
    console.log(location.name);
  }
}
