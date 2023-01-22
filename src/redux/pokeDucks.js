import axios from "axios";

//Contantes
const dataInicial = {
  array: [],
  offset: 0,
};

//types
const OBTENER_POKEMONES_EXITO = "OBTENER_POKEMONES_EXITO";
const SIGUIENTE_POKEMONES_EXITO = "SIGUIENTE_POKEMONES_EXITO";

//Reducer
export default function pokeReducer(state = dataInicial, actions) {
  switch (actions.type) {
    case OBTENER_POKEMONES_EXITO:
      return { ...state, array: actions.payload };
    case SIGUIENTE_POKEMONES_EXITO:
      return {
        ...state,
        array: actions.payload.array,
        offset: actions.payload.offset,
      };
    default:
      return state;
  }
}

//Actions
export const obtenerPokemonesAccion = () => async (dispatch, getState) => {
  /* console.log("obtener state", getState().pokemones.offset); */
  /* const offset = getState().pokemones.offset; */

  const { offset } = getState().pokemones;

  try {
    const answer = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
    );
    dispatch({
      type: OBTENER_POKEMONES_EXITO,
      payload: answer.data.results,
    });
  } catch (error) {
    console.log(error);
  }
};

export const siguientePokemonAccion = () => async (dispatch, getState) => {
  const offset = getState().pokemones.offset;
  const next = offset + 20;
  try {
    const answer2 = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${next}&limit=20`
    );
    dispatch({
      type: SIGUIENTE_POKEMONES_EXITO,
      payload: {
        array: answer2.data.results,
        offset: next,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
