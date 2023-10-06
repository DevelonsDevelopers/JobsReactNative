import * as api from '../../API/index'
import { GET_JOBAPI_JOB, LOADING, SUCCESS } from "../../Utils/Constants";


export const getJobsApiId = (id) => async (dispatch) => {
    try {
        dispatch ({ type: LOADING })
        const { data: {data} } = await api.fetchJobsApiId(id);
        dispatch ({ type: GET_JOBAPI_JOB, payload: { jobsApi: data }})
        dispatch ({ type: SUCCESS })
    } catch (error) {
        console.log(error)
    }
}
