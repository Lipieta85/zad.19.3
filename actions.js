import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

const boundAddComment = text => dispatch(addComment(text));

///////////////////////////////////////////////////////////////////////

function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        text,
        id
    }
}

const boundEditComment = (text, id) => dispatch(editComment(text, id));

////////////////////////////////////////////////////////////////////////

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}

const boundRemoveComment = id => dispatch(removeComment(id));

////////////////////////////////////////////////////////////////////////

function thumbUpComment(id, value) {
    return {
        type: THUMB_UP_COMMENT,
        id,
        value: +1
    }
}

const boundThumbUpComment = (id, value) => dispatch(thumbUpComment(id, value));

////////////////////////////////////////////////////////////////////////

function thumbUpComment(id, value) {
    return {
        type: THUMB_DOWN_COMMENT,
        id,
        value: -1
    }
}

const boundThumbDownComment = (id, value) => dispatch(thumbDownComment(id, value));