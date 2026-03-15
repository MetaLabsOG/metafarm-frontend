import React, { Component, ErrorInfo, ReactNode } from 'react';
import * as Sentry from '@sentry/react';

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
        Sentry.captureException(error, { extra: { componentStack: info.componentStack } });
    }

    handleClearAndReload = () => {
        try {
            // Preserve wallet keys
            const walletAddress = localStorage.getItem('walletAddress');
            const walletType = localStorage.getItem('connectedWalletType');
            const walletNfd = localStorage.getItem('walletNfdName');
            localStorage.clear();
            if (walletAddress) localStorage.setItem('walletAddress', walletAddress);
            if (walletType) localStorage.setItem('connectedWalletType', walletType);
            if (walletNfd) localStorage.setItem('walletNfdName', walletNfd);
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
                    backgroundColor: 'var(--background)',
                    color: '#fff',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    padding: '20px',
                    textAlign: 'center',
                }}>
                    <h1 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--accent-muted)' }}>
                        Something went wrong
                    </h1>
                    <p style={{ fontSize: '14px', color: 'var(--newnewGray)', marginBottom: '24px', maxWidth: '400px' }}>
                        The app encountered an error. Clearing cached data usually fixes this.
                    </p>
                    <button
                        onClick={this.handleClearAndReload}
                        style={{
                            padding: '12px 32px',
                            fontSize: '16px',
                            fontWeight: 600,
                            color: 'var(--background)',
                            backgroundColor: 'var(--accent-muted)',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                        }}
                    >
                        Clear cache & reload
                    </button>
                    <p style={{ fontSize: '12px', color: 'var(--gray)', marginTop: '16px' }}>
                        Your wallet connection will be preserved.
                    </p>
                </div>
            );
        }

        return this.props.children;
    }
}
