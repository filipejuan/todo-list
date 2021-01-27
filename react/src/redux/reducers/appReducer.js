const INITIAL_STATE = {
    list: [],
    FullList: [],
    new: false,
    id: 0,
    description: '',
    checked: 0,
    search: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'LOAD_LIST':
            return { ...state, list: action.payload, FullList: action.payload }
        case 'SET_EDIT':
            return { ...state, id: action.payload.id, description: action.payload.description, checked: action.payload.checked, new: false }
        case 'SET_DESCRIPTION':
            return { ...state, description: action.payload }
        case 'SET_CHECKED':
            return { ...state, checked: action.payload }
        case 'FINISH_EDIT':
            return { ...state, id: 0, description: '', checked: 0 }
        case 'SET_NEW_ITEM':
            return { ...state, new: true, id: 0, description: '', checked: 0 }
        case 'FINISH_CREATE':
            return { ...state, new: false, description: '', checked: 0 }
        case 'SEARCH':
            return { ...state, search: action.payload }
        case 'FILTERED_LIST':
            return { ...state, list: action.payload }
        default:
            return state;
    }
}