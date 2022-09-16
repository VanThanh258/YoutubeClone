import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import channelApi from "../api/channelApi";
const channelSlice = createSlice({
    name: 'channel',
    initialState:{
        listChannel: [],
    },
    reducers:{
        setChannel(state, action){
            state.channel = action.payload;
        }
    },
    extraReducers:(builder) => {
        builder
        .addCase(fetchChannel.fulfilled, (state, action) => {
            state.listChannel = [...state.listChannel, ...action.payload]
        })
    }
})
export const channelSliceAction = channelSlice.actions;
export const fetchChannel = createAsyncThunk('channel/fetchChannel', async (id) => {
    const channel = await channelApi.getChannel(id)
    return channel.items
})

export default channelSlice;