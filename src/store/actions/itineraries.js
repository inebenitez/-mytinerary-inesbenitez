import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

const read_itineraries_from_city = createAsyncThunk(
    'read_itineraries_from_city',
    async(obj) => {
        try {
            let data = await axios(apiUrl + "itineraries?city_id=" + obj.city_id );
            console.log(data)
            return {
                itineraries_from_city: data.data.response
            }
        } catch (error) {
            console.log(error)
            return {
                itineraries_from_city: []
            }
        }
    }
)
const read_itineraries_from_OneCity = createAsyncThunk(
    'read_itineraries_from_OneCity',
    async(obj) => {
        try {
            let data = await axios(apiUrl + "itineraries/" + obj.city_id );
            return {
                read_itineraries_from_OneCity: data.data.response
            }
        } catch (error) {
            console.log(error)
            return {
                read_itineraries_from_OneCity: []
            }
        }
    }
)

const itinerary_actions = { read_itineraries_from_city,read_itineraries_from_OneCity }
export default itinerary_actions
