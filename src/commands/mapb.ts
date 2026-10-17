import { State } from "../state.js";

export async function listPreviousMaps(state: State) {
  const pageURL = state.prevLocationsURL ?? "";
  const locations = await state.pokeApi.fetchLocation(pageURL);
  state.nextLocationsURL = locations.next;
  state.prevLocationsURL = locations.previous;

  for (const location of locations.results) {
    console.log(location.name);
  }
}
