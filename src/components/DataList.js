import React, { useState } from 'react'
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, ListItemSecondaryAction, IconButton } from '@material-ui/core'
import { Delete as DeleteIcon } from '@material-ui/icons'
import { deleteData } from '../api'


const styles = {
    item: {
        margin: '10px 0'
    }
}

export default function DataList({ onUpdate, data = [] }) {

    return (
        <List>
            {data.map(data =>
                <DataListItem key={data.createdAt} data={data} />)}
        </List>
    )
}


function DataListItem({ data: { deviceId, createdAt, value } }) {
    const [loading, setLoading] = useState(false)

    function deleteItem(){
        setLoading(true)
        deleteData(createdAt)
    }
    const date = new Date(createdAt)
    return (
        <ListItem style={styles.item}>
            <ListItemAvatar>
                <Avatar>{deviceId}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={`Valor: ${value}`} secondary={date.toLocaleString()} />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={deleteItem} disabled={loading}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}