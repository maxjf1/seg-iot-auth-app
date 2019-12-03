import React from 'react'
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction, Paper } from '@material-ui/core';
import { FiberNew as NewIcon, History as HistoryIcon, DataUsage as DataIcon } from '@material-ui/icons';

const styles = {
    root: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0
    },
    placeholder: {
        height: 56
    }
}
export default function Footer() {
    const { pathname } = useLocation()
    return (
        <>
            <footer style={styles.root}>
                <Paper square elevation={3}>
                    <BottomNavigation
                        value={pathname}
                        // onChange={(event, newValue) => {
                        // setValue(newValue);
                        // }}
                        showLabels
                    >
                        <BottomNavigationAction component={Link} to="/" value="/" label="Dispositivos Novos" icon={<NewIcon />} />
                        <BottomNavigationAction component={Link} to="/all" value="/all" label="Todos Dispositivos" icon={<HistoryIcon />} />
                        <BottomNavigationAction component={Link} to="/data" value="/data" label="Dados" icon={<DataIcon />} />
                    </BottomNavigation>
                </Paper>

            </footer>
            <div style={styles.placeholder} />
        </>
    )
}
