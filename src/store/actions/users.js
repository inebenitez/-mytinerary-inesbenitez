import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

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

const signin_token = createAsyncThunk(
    'signin_token',
    async()=>{
        try {
            let token = localStorage.getItem('token')
            let authorization = {headers:{'Authorization':`Bearer ${token}`}}
            let data = await axios.post(apiUrl+'auth/token',null,authorization)
            console.log(data);
            localStorage.setItem('token', data.data.response.token)
            return {
                user:data.data.response.user,
                token:data.data.response.token
            }
        } catch (error) {
            console.log(error);
            return {
                user:{},
                token: ''
            }
        }
    }
)

const signout = createAsyncThunk(
    'signout',
    async()=>{
        try {
            let token = localStorage.getItem('token')
            let authorization = {headers:{'Authorization':`Bearer ${token}`}}
            let data = await axios.post(apiUrl+'auth/signout',null,authorization)
            console.log(data);
            localStorage.removeItem('token')
            return {
                user:{},
                token:''
            }
        } catch (error) {
            console.log(error);
            return {
                user:{},
                token: ''
            }
        }
    }
)

const register = createAsyncThunk(
    'register',
    async (obj)=>{
        try{
            let data = await axios.post(apiUrl+'auth/register',obj.data)
            console.log("REGISTER:", data);
            return{
                success:data.data.success
            }
        }catch(error){
            console.log(error);
            return{
                messages: error.response.data.messages || [error.response.data.message]
            }
        }
    }
)

const user_action = { signin,signin_token,signout,register }
export default user_action