import React from 'react'
import { Typography, Card, CardContent, Button, CardActions } from '@material-ui/core'
import { authorize, unauthorize } from '../api'

const styles = {
    item: {
        margin: '10px 0'
    }
}

export default function DevicesList({ onUpdate, devices = [] }) {

    return (
        <div>
            {devices.map(device =>
                <DevicesListItem key={device.id} device={device} onUpdate={onUpdate} />)}
        </div>
    )
}


function DevicesListItem({ onUpdate = () => { }, device: { id, name, createdAt, ip, address, authorized: auth } }) {
    const date = new Date(createdAt)
    return (
        <Card style={styles.item}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {date.toLocaleDateString()}, às {date.toLocaleTimeString()}
                </Typography>
                <Typography variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography color={auth === null ? 'textSecondary' : auth ? 'primary' : 'error'}>
                    Autorização: {auth === null ?
                        'Não definido' :
                        auth ? 'Autorizado' : 'Revogada'}
                </Typography>
                <Typography variant="body2" component="p">
                    <b>IP: </b> {ip || 'Local'} <br />
                    <b>Endereço: </b> {!address ? 'Não informado' :
                        <address>{address}</address>
                    }
                </Typography>
            </CardContent>
            <CardActions>
                <Button color="primary" size="small" onClick={() => authorize(id).then(onUpdate)}>Autorizar</Button>
                <Button color="secondary" size="small" onClick={() => unauthorize(id).then(onUpdate)}>Revogar</Button>
            </CardActions>
        </Card>
    )
}