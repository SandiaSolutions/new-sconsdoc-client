import axios from 'axios';
export const GET_SCON = 'GET_SCON';
export const GET_SHIFTS = 'GET_SHIFTS';
const rootUrl = "https://sconsdocdev.unm.edu/public_html/api";



export const getScon = ()=>{
    return async function(dispatch,getState){

        await axios.get(`${rootUrl}/scon`)
            .then(result=>{
                dispatch({type : GET_SCON, payload : result.data});
            })
            .catch(error=>{
                dispatch({type : GET_SCON,payload : {error}})
        });

    }
};

export const getShiftsByShiftPlanId = (id : number)=>{
    return async function(dispatch,getState){
        await axios.get(`${rootUrl}/Shift?ShiftPlanId=${id}`)
            .then(result=>{
                dispatch({type : GET_SHIFTS, payload : result.data});
            })
            .catch(error=>{
                dispatch({type : GET_SHIFTS,payload : {error}})
            });
    }
};