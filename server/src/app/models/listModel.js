module.exports = {

    getList(connection, callback) {
        connection.query(`SELECT id, description, checked FROM tbl_list`, callback);
    },

    createList(connection, list, callback) { 
        connection.query('INSERT INTO tbl_list set ?', list, callback); 
    },

    updateList(connection, list, callback) { 
        connection.query(`UPDATE tbl_list SET description = '${list.description}', checked = '${list.checked}' WHERE id = ${list.id}`, callback); 
    },

    deleteList(connection, itemID, callback) { 
        connection.query(`DELETE FROM tbl_list WHERE id = ${itemID}`, callback); 
    },
}