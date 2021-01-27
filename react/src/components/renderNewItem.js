import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setDescription, setChecked, createItem } from '../redux/actions/appActions'

import confirm from '../assets/confirm.svg';

function RenderNewItem() {
    const description = useSelector(state => state.AppReducer.description);
    const checked = useSelector(state => state.AppReducer.checked);
    const dispatch = useDispatch();

    return (
        <tr>
            <td>
                
            </td>
            <td>
                <button onClick={ () => dispatch(createItem()) }><img src={confirm} alt="confirm" className="confirm" height="24" width="24" /></button>
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

export default RenderNewItem;