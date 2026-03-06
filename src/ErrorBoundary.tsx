import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
    state: State = { hasError: false, error: null };

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.error('App crash caught by ErrorBoundary:', error, info.componentStack);
    }

    handleClearAndReload = () => {
        try {
            // Preserve wallet keys
            const walletAddress = localStorage.getItem('walletAddress');
            const walletType = localStorage.getItem('walletType');
            localStorage.clear();
            if (walletAddress) localStorage.setItem('walletAddress', walletAddress);
            if (walletType) localStorage.setItem('walletType', walletType);
        } catch {
            // If localStorage itself is broken, just proceed
        }
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    backgroundColor: '#121212',
                    color: '#fff',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    padding: '20px',
                    textAlign: 'center',
                }}>
                    <h1 style={{ fontSize: '24px', marginBottom: '16px', color: '#8bff74' }}>
                        Something went wrong
                    </h1>
                    <p style={{ fontSize: '14px', color: '#999', marginBottom: '24px', maxWidth: '400px' }}>
                        The app encountered an error. Clearing cached data usually fixes this.
                    </p>
                    <button
                        onClick={this.handleClearAndReload}
                        style={{
                            padding: '12px 32px',
                            fontSize: '16px',
                            fontWeight: 600,
                            color: '#121212',
                            backgroundColor: '#8bff74',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                        }}
                    >
                        Clear cache & reload
                    </button>
                    <p style={{ fontSize: '12px', color: '#666', marginTop: '16px' }}>
                        Your wallet connection will be preserved.
                    </p>
                </div>
            );
        }

        return this.props.children;
    }
}
