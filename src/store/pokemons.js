import { createSlice } from "@reduxjs/toolkit";
import FirebaseClass from "../services/firebase";

export const slice = createSlice({
    name: 'pokemons',
    initialState: {
        isLoading: false,
        data: {},
        error: null,
        selectedPokemons: {},
        player2Pokemons: {},
        winner: 0,
    },
    reducers: {
        fetchPokemons: state => ({
            ...state,
            isLoading: true,
        }),
        fetchPokemonsResolve: (state, action) => ({
            ...state,
            isLoading: false,
            data: action.payload,
        }),
        fetchPokemonsReject: (state, action) => ({
            ...state,
            isLoading: false,
            data: {},
            error: action.payload,
        }),
        handleSelectedPokemons: (state, { payload: { key, pokemon } }) => {
            const newPokemons = { ...state.selectedPokemons };
            if (newPokemons[key]) {
                delete newPokemons[key];
                return { ...state, selectedPokemons: newPokemons };
            }

            if (Object.entries(state.selectedPokemons).length < 5) {
                newPokemons[key] = pokemon;
                return { ...state, selectedPokemons: newPokemons };
            }
        },
        handleSetPlayer2: (state, action) => {
            console.log(state);
            return {
                ...state,
                player2Pokemons: {
                    ...action.payload
                }
            }
        },
        cleanPokemons: (state) => {
            return {
                ...state,
                selectedPokemons: {},
                player2Pokemons: {}
            }
        },
        handleSetWinner: (state, action) => {
            return {
                ...state,
                winner: action.payload
            }
        }
    }
});

export const { fetchPokemons, fetchPokemonsResolve, fetchPokemonsReject, handleSelectedPokemons, handleSetPlayer2, cleanPokemons, handleSetWinner } = slice.actions;

export const selectPokemonsData = state => state.pokemons.data;
export const player2PokemonsData = state => state.pokemons.player2Pokemons;
export const selectedPokemons = state => state.pokemons.selectedPokemons;
export const winner = state => state.pokemons.winner;

export const getPokemonsAsync = () => async (dispatch) => {
    dispatch(fetchPokemons());
    const data = await FirebaseClass.getPokemonsOnce();
    dispatch(fetchPokemonsResolve(data));
}

export default slice.reducer;