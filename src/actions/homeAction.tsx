import axios from "axios";
import { Dispatch } from "redux";

export const FETCH_NEWS = "fetch_news";

export const fetchNews = () => {
    return (dispatch: Dispatch) => {
        axios({
            url: `https://webrazzi.com/api/v2/posts`,
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((result) => {
            dispatch({
                type: FETCH_NEWS,
                payload: result.data.data
            })
        }).catch((err) => {
            console.log("err", err.response)
        })
    }
}