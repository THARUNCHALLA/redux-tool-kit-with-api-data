import { configureStore, createSlice,createAsyncThunk } from "@reduxjs/toolkit"


let data = {
    userValue:[],
    status:"",
    error:false
}

export const fetchuser = createAsyncThunk("user",async () =>{
try{
    const reponse = await fetch("https://jsonplaceholder.typicode.com/users")
    const Data = await reponse.json()
    return Data
}
catch(error){
    throw error
}    

})


const UserSlice = createSlice({
    name:"user",
    initialState:data,
    extraReducers:(builder)=>{
        builder.addCase(fetchuser.pending,(state)=>{
                state.status="loading"
        })
        .addCase(fetchuser.fulfilled,(state,action)=>{
            state.status="success"
            state.userValue=action.payload
        })
        .addCase(fetchuser.rejected,(state,action)=>{
            state.status="Failure"
            state.userValue=[]
            state.error=action.error.message
        })
    }

})

const store = configureStore(({
    reducer:{
        user:UserSlice.reducer
    }
}))

export default store