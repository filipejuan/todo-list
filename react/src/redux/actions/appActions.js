export const getList = () => {
    return { type: 'ASYNC_GET_LIST' }
}

export const setEdit = item => {
    return {
        type: 'SET_EDIT',
        payload: item
    }
}

export const setDescription = text => {
    return {
        type: 'SET_DESCRIPTION',
        payload: text
    }
}

export const setChecked = value => {
    return {
        type: 'SET_CHECKED',
        payload: value
    }
}

export const updateList = () => {
    return { type: 'ASYNC_UPDATE_LIST' }
}

export const setNewItem = () => {
    return { type: 'SET_NEW_ITEM' }
}

export const createItem = () => {
    return { type: 'ASYNC_CREATE_ITEM' }
}

export const deleteItem = itemID => {
    return {
        type: 'ASYNC_DELETE_ITEM',
        payload: itemID
    }
}

export const setSearch = value => {
    return {
        type: 'SEARCH',
        payload: value
    }
}