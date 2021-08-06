export default {
    FETCH_STARSHIPS(state, payload) {
        state.next = payload.next;
        state.prev = payload.prev;
        state.ships = payload.results;
    },
}