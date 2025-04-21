import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState:{

    },
    reducers:{
        cacheResults:(state,action)=>{
            // This line merges the properties from action.payload into the state object.
            // It creates a new object by spreading the properties of action.payload first,
            // followed by the properties of the current state. If there are any overlapping
            // properties, the values from action.payload will overwrite those in state.
            // state = {...action.payload, ...state}
            state = Object.assign(state,action.payload)
        }
    }
})
export const {cacheResults} = searchSlice.actions
export default searchSlice.reducer
/*
    * LRU Cache results(Least recently used)

*/ 