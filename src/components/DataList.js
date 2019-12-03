import React, { useState } from 'react'
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, ListItemSecondaryAction, IconButton, Divider, Grow } from '@material-ui/core'
import { Delete as DeleteIcon } from '@material-ui/icons'
import { deleteData } from '../api'


const styles = {
    list: {
        margin: '10px 0'
    }
}

export default function DataList({ onUpdate, data = [] }) {

    return (
        <List style={styles.list}>
            {data.map(data =>
                <DataListItem key={data.createdAt} data={data} />)}
        </List>
    )
}


function DataListItem({ data: { deviceId, createdAt, value } }) {
    const [loading, setLoading] = useState(false)

    function deleteItem() {
        setLoading(true)
        deleteData(createdAt)
    }
    const date = new Date(createdAt)
    return (
        <Grow in={!loading}>
            <div>
                <ListItem>
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
                <Divider inlist />
            </div>
        </Grow>
    )
}