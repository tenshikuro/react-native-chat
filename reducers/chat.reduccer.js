
const initState = {
    user: null,
    room: null,
    messages: []
}

export const chat = function(state = initState, action) {

    switch(action.type){
        case 'JOIN_REQUEST':
            return {
                ...state,
                user: action.user,
                room: action.room
            };

        case 'JOIN_SUCCESS':
            return {
                ...state,
                messages: action.messages
            };
        
        default:
            return state;
    }

    
}