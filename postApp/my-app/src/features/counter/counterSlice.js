import { createSlice } from "@reduxjs/toolkit"



export const counterSlice = createSlice({
    //name ใช้ในการบอกว่าเวลาดุู time line จะรู้ว่าเป็น state อะไรที่ทำงานอยู่
    name: "counter",
    initialState: {
        counter: 0
    },
    reducers: {
        increment: (state) => {
            state.counter += 1 //tool ที่แปลง state ส่งเข้ามาตรง ๆ ชื่อ Immer
        },
        decrement: (state) => {
            state.counter -= 1 //tool ที่แปลง state ส่งเข้ามาตรง ๆ ชื่อ Immer
        },
        reset: (state) => {
            state.counter = 0 //tool ที่แปลง state ส่งเข้ามาตรง ๆ ชื่อ Immer
        },
        addamount: (state, action) => {
            state.counter += action.payload;
        },
        decrementamount: (state, action) => {
            state.counter -= action.payload
        }
    }
});

export const { increment, decrement, reset, addamount, decrementamount } = counterSlice.actions;

export default counterSlice.reducer;