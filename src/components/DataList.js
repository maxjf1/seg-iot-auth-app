import React from 'react'
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core'


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
    const date = new Date(createdAt)
    return (
        <ListItem style={styles.item}>
            <ListItemAvatar>
                <Avatar>{deviceId}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={`Valor: ${value}`} secondary={date.toLocaleString()} />
        </ListItem>
    )
}