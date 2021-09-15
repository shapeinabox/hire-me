import React, { FC } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AppErrorDialog from "../AppErrorDialog/AppErrorDialog";
import AppLoadingOverlay from "../AppLoadingOverlay/AppLoadingOverlay";

const Layout: FC = ({ children }) => {

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Hire-Me Challenge / Alberto Bonino
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Container maxWidth="md" sx={{ position: "relative" }}>
                <AppLoadingOverlay />
                <Box sx={{ minWidth: "100%", minHeight: '100%', padding: 10 }}>
                    {children}
                </Box>
            </Container>
            <AppErrorDialog />
        </>
    )

}

export default Layout