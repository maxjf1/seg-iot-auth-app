import React, { Fragment, PureComponent } from 'react';
import Header from '../Header';
import { Typography, Container, CircularProgress } from '@material-ui/core';
import { getDevices, getData } from '../../api';
import DevicesList from '../DevicesList';
import { position } from 'dom-helpers';
import DataList from '../DataList';

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

const DELAY = 5000

class Data extends PureComponent {

    state = {
        data: []
    }


    updateData = async () => {
        const data = await getData()
        if (!this.timeout) return
        this.setState({ data })
        this.timeout = setTimeout(this.updateData, DELAY)
    }

    componentDidMount() {
        this.timeout = setTimeout(this.updateData, 0)
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
        this.timeout = null
    }


    render() {
        const { data } = this.state
        return (
            <Fragment>
                <Header title="Dados Coletados" />
                <main>
                    <Container>

                        {data.length === 0 &&
                            <Typography style={{ margin: '20vh 0' }} variant="h2" align="center">
                                Nenhum dado encontrado
                                    </Typography>
                        }
                        <DataList data={data} />

                    </Container>
                </main>
            </Fragment>
        );
    }
}

export default Data;