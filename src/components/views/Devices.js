import React, { Fragment, PureComponent } from 'react';
import Header from '../Header';
import { Typography, Container, CircularProgress, IconButton } from '@material-ui/core';
import { getDevices } from '../../api';
import DevicesList from '../DevicesList';
import { Refresh as RefreshIcon } from '@material-ui/icons';

const styles = {
    loader: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 'auto'
    }
}

class Devices extends PureComponent {

    state = {
        loading: false,
        devices: []
    }

    getDevices = async () => {
        this.setState({ loading: true })
        const devices = await getDevices()
        this.setState({ devices, loading: false })
    }

    componentDidMount() {
        this.getDevices()
    }

    render() {
        const { devices, loading } = this.state
        return (
            <Fragment>
                <Header title="Todos Dispositivos" 
                    rightAction={
                        <IconButton color="inherit" onClick={this.getDevices} disabled={loading}>
                            <RefreshIcon />
                        </IconButton>
                    }
                />
                <main>
                    <Container maxWidth="sm">
                        {loading ?
                            <CircularProgress size={80} style={styles.loader} /> :
                            <>
                                {devices.length === 0 &&
                                    <Typography style={{ margin: '20vh 0' }} variant="h2" align="center">
                                        Nenhum dispositivo encontrado
                                    </Typography>
                                }
                                <DevicesList onUpdate={this.getDevices} devices={devices} />
                            </>
                        }
                    </Container>
                </main>
            </Fragment>
        );
    }
}

export default Devices;