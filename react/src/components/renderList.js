import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setEdit, setDescription, setChecked, updateList, deleteItem } from '../redux/actions/appActions'

import edit from '../assets/edit.svg';
import confirm from '../assets/confirm.svg';
import deleteIcon from '../assets/delete.svg'

function RenderList({item}) {
    const id = useSelector(state => state.AppReducer.id);
    const description = useSelector(state => state.AppReducer.description);
    const checked = useSelector(state => state.AppReducer.checked);
    const dispatch = useDispatch();

    if(item.id === id) {
        return (
            <tr key={ item.id }>
                <td>
                    <button onClick={ () => dispatch(deleteItem(item.id)) }><img src={deleteIcon} alt="delete" className="delete" height="24" width="24" /></button>
                </td>
                <td>
                    <button onClick={ () => dispatch(updateList()) }><img src={confirm} alt="confirm" className="confirm" height="24" width="24" /></button>
                </td>
                <td>
                    <input required value={description} onChange={ event => dispatch(setDescription(event.target.value)) } />
                </td>
                <td>
                    <input type="checkbox" checked={ checked === 1 } onClick={ event => dispatch(setChecked(checked === 1 ? 0 : 1)) } />
                </td>
            </tr>
        );
    }
    return(
        <tr key={ item.id }>
            <td>
                <button onClick={ () => dispatch(deleteItem(item.id)) }><img src={deleteIcon} alt="delete" className="delete" height="24" width="24" /></button>
            </td>
            <td>
                <button onClick={ () => dispatch(setEdit(item)) }><img src={edit} alt="edit" className="edit" height="24" width="24" /></button>
            </td>
            <td>
                <div className="todo-description">
                    { item.description }
                </div>
            </td>
            <td>
                <input type="checkbox" checked={ item.checked === 1 } />
            </td>
        </tr>
    );
}

export default RenderList;