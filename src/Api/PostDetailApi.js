import axios from 'axios'
import Constants from '../Statics/Constants';

export class PostDetailApi {

    getComments(postId) {
        return axios.get(Constants.url + postId + '/comments');
    }

    getPostDetail(postId) {
        return axios.get(Constants.url + postId);
    }
}

export default PostDetailApi;