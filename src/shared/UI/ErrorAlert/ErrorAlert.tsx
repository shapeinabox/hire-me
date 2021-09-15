
// import ErrorOutlineRoundedIcon from '@material-ui/icons/ErrorOutlineRounded';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useTheme from '@mui/material/styles/useTheme';
import Typography from '@mui/material/Typography';
import React from 'react'

interface IErrorAlertProps {
    show: boolean,
    error?: string,
    dismiss?: () => void
}

export default function ErrorAlert({ show, error, dismiss }: IErrorAlertProps) {

    const theme = useTheme();

    return (
        <Dialog
            open={show}
            onClose={dismiss}
            aria-labelledby="error-dialog-title"
            aria-describedby="error-dialog-description"
        >
            <DialogTitle id="error-dialog-title">
                Something went wrong
            </DialogTitle>
            <DialogContent sx={{ textAlign: 'center' }} >
                <Typography component="p" sx={{ marginY: 2 }}>
                    {/* <ErrorOutlineRoundedIcon sx={{ fontSize: 45 }} htmlColor={theme.palette.error.main} /> */}
                </Typography>
                <DialogContentText id="error-dialog-description">
                    {error && error}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={dismiss} autoFocus>
                    Dismiss
                </Button>
            </DialogActions>
        </Dialog>
    )

}