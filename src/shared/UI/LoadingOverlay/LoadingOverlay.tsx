
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import React from 'react'

export default function LoadingOverlay({ loading }: { loading: boolean }) {

    return (loading ? <Box sx={{
        position: 'absolute',
        display: 'flex',
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        zIndex: 999
    }}>
        <CircularProgress />
    </Box> : null)

}