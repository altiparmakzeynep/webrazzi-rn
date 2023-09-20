import axios from "axios";
import { Dispatch } from "redux";

export const FETCH_NEWS_DETAIL = "fetch_news_detail";

export const fetchNewsDetail = (itemId: number) => {
    return (dispatch: Dispatch) => {
        axios({
            url: `https://webrazzi.com/api/v2/posts/${itemId}`,
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((result) => {
            dispatch({
                type: FETCH_NEWS_DETAIL,
                payload: result.data
            })
        }).catch((err) => {
            console.log("err", err)
        })
    }
}