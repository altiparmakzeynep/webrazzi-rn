import { FETCH_NEWS } from "../actions/homeAction";

export interface NewsItem {
    id: number;
    type: string;
    insights: boolean;
    url: string;
    title: string;
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

interface NewsItemState {
    newsContents: NewsItem[]
}
interface FetchNewsAction {
    type: typeof FETCH_NEWS;
    payload: NewsItem[];
};

const INITIAL_STATE: NewsItemState = {
    newsContents: [],
}

const homeReducer = (state = INITIAL_STATE, action: FetchNewsAction ) => {
    switch (action.type) {
        case FETCH_NEWS:
            return {
                ...state,
                newsContents: action.payload,
            }
        default:
            return state;
    }
}
export default (homeReducer);