import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

const read_6_users = createAsyncThunk(
    'read_6_users',
    async()=>{
        try{
            let users = await axios(apiUrl+'users')
            console.log(users, "ususarios de action")
            return{
                users: users.data.response
            }
        } catch (error){
            console.log(error);
            return{
                users: []
            }
        }
    }
)
const signin = createAsyncThunk(
    'signin',
    async(obj)=>{
        try {
            let data = await axios.post(apiUrl+'auth/signin',obj.data)
            console.log(data, "data de signin")
            return{
                user: data.data.response.user,
                token: data.data.response.token
            }
        }
        catch (error){
            console.log(error);
            return{
                user: {},
                token: ''
            }
        }
    }
)
const user_action = { read_6_users,signin }
export default user_action