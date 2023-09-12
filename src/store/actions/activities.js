import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

const read_activities_itinerary = createAsyncThunk(
  "read_activities", //nombre de la accion
    async (obj) => {
    try {
        let data = await axios(apiUrl + 'activities?itinerary_id=' + obj.itinerary_id);
            console.log(data)
            return {
        activitiesItinerary: data.data.response,
    };
    } catch (error) {
        return {
        activitiesItinerary: [],
    };
    }
}
);

const activity_actions = { read_activities_itinerary };
export default activity_actions;