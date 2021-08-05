export default {
    FETCH_STARSHIPS(state, payload) {
        state.next = payload.next;
        state.prev = payload.prev;
        state.ships = payload.results;
    },
    FETCH_STARSHIP(state, payload) {
        state.ship = payload.result;
    }
}