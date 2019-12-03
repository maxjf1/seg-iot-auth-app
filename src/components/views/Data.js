import React, { Fragment, PureComponent } from 'react';
import Header from '../Header';
import { Typography, Container } from '@material-ui/core';
import { getData } from '../../api';
import DataList from '../DataList';


const DELAY = 500

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