import { createReducer } from "@reduxjs/toolkit";
import activity_actions from "../actions/activities";

const { read_activities_itinerary } = activity_actions;

const initial_state = {
    activitiesItinerary: [],
};

const activity_reducer = createReducer(
    initial_state, 
    (builder) =>
        builder.addCase(
        read_activities_itinerary.fulfilled, 
        (state, action) => {
        let new_state = {
            ...state, 
            activitiesItinerary: action.payload.activitiesItinerary,
        };
        return new_state; 
    }
    )
);

export default activity_reducer;
