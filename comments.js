import { ADD_COMMENT } from './actions';
import { REMOVE_COMMENT } from './actions';
import { EDIT_COMMENT } from './actions';
import { THUMB_UP_COMMENT } from './actions';
import { THUMB_DOWN_COMMENT } from './actions';

const initialState = {
    comments: [],
    users: []
};

export function comments(state = [], action) {
    switch (action.type) {

        case ADD_COMMENT:
            return Object.assign({}, state, {
                comments: [
                    {
                        id: action.id,
                        text: action.text,
                        votes: 0
                    }
                    , ...state]
            });

        case REMOVE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(comment => comment.id !== action.id)
            });

            case EDIT_COMMENT:
			return state.map(comment => {
				if(comment.id === action.id){
					return Object.assign({}, comment, {
						text: action.text
					});
                } 
                else {
					return comment;
				}
			});
		
		case THUMB_UP_COMMENT:
			return state.map(comment => {
				if(comment.id === action.id){
					return Object.assign({}, comment, {
						votes: action.votes + 1
					});
                } 
                else {
					return comment;
				}
			});
			
		case THUMB_DOWN_COMMENT:
			return state.map(comment => {
				if(comment.id === action.id) {
					return Object.assign({}, comment, {
						votes: action.votes - 1
					});
				
                } 
                else {
					return comment;
				}
			});
			
		default: 
			return state;
	}
}