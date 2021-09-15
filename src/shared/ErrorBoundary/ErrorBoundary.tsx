import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import React from 'react';


class ErrorBoundary extends React.Component<any> {

    state: any;

    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: any) {
        return { hasError: true };
    }

    componentDidCatch(error: any, errorInfo: any) {
        this.setState({ error, errorInfo })
    }

    render() {
        if (this.state.hasError) {
            return (
                <Box sx={{ width: "100%", height: "100%" }}>
                    <h3>Errore Generico</h3>
                    <p className="mt-2">{this.state.error?.message}</p>
                    <p className="mt-2">{this.state.errorInfo?.componentStack}</p>

                    <Button onClick={() => window.location.reload()}>Ricarica</Button>
                </Box>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary
