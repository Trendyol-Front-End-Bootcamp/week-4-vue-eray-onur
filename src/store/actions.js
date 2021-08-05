import axios from 'axios';
import {GET_ALL_STARSHIPS} from './../constants/api.constants';
export default {
    fetchStarships(context) {
        axios.get(GET_ALL_STARSHIPS).then(response => {
            console.log("STARSHIPS FETCH RESPONSE: ");
            console.log(response);
            context.commit('FETCH_STARSHIPS', response.data);
        });
    },
    fetchStarshipByName(context) {
        axios.get(GET_ALL_STARSHIPS).then(response => {
            console.log("STARSHIPS FETCH RESPONSE: ");
            console.log(response);
            context.commit('FETCH_STARSHIPS', response.data);
        });
    }
}