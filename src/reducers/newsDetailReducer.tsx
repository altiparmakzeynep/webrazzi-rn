import { FETCH_NEWS_DETAIL } from "../actions/newsDetailAction";

export interface NewsDetailItem {
    id: number;
    type: string;
    insights: boolean;
    insights_access: boolean;
    url: string;
    title: string;
    content: string;
    summary: string,
    excerpt: string;
    published_at: string;
    modified_at: string;
    categories: { title: string; id: number }[];
    tags: { title: string; id: number }[];
    author: {
      id: number;
      username: string;
      full_name: string;
      avatar: string;
    };
    interaction: {
      bookmarked: boolean;
      liked: boolean;
    };
    comment_count: number;
    comment_enabled: boolean;
    is_advertorial: boolean;
    is_guest_author: boolean;
    thumbnails: {
      full: {
        url: string;
        width: number;
        height: number;
      };
    };
  }

interface NewsDetailItemState {
    newsDetail: NewsDetailItem[],
}

interface FetchNewsDetailAction {
    type: typeof FETCH_NEWS_DETAIL;
    payload: NewsDetailItem[];
};

const INITIAL_STATE: NewsDetailItemState = {
    newsDetail: []
}

const newsDetailReducer = (state = INITIAL_STATE, action: FetchNewsDetailAction ) => {
    switch (action.type) {
        case FETCH_NEWS_DETAIL:
            return {
                ...state,
                newsDetail: action.payload
            }
        default:
            return state;
    }
}
export default (newsDetailReducer);