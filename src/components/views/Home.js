import React, { Fragment, PureComponent } from 'react';
import Header from '../Header';
import { Typography, Button, Container } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { getNewDevices } from '../../api';
import DevicesList from '../DevicesList';
import { EmojiEmotions as HappyIcon } from '@material-ui/icons';

const DELAY = 1000

class Home extends PureComponent {

    state = {
        newDevices: []
    }

    updateNewDevices = async () => {
        const newDevices = await getNewDevices()
        if (!this.timeout) return
        this.setState({ newDevices })
        this.timeout = setTimeout(this.updateNewDevices, DELAY)
    }

    componentDidMount() {
        this.timeout = setTimeout(this.updateNewDevices, 0)
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
        this.timeout = null
    }

    render() {
        const { newDevices } = this.state
        return (
            <Fragment>
                <Header title="Dispositivos novos" />
                <main>
                    <Container>
                        {newDevices.length === 0 &&
                            <Typography style={{margin: '20vh 0'}} variant="h2" align="center">
                                Nenhum dispositivo novo <br /><br />
                                <HappyIcon fontSize="inherit" />
                            </Typography>
                        }
                        
                        <DevicesList devices={newDevices} />
                    </Container>
                </main>
            </Fragment>
        );
    }
}

export default Home;