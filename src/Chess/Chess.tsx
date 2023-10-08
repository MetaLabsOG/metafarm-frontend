import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';
import DetailedInfoPanel from './DetailedInfoPanel';
import NavigationPanel from './Navigation/NavigationPanel';
import LogPanel from './LogPanel';

export const SERVER_URL = 'http://api.cometa.farm:5420';

export function Chess() {
    return (
        <div data-theme="forest" className="h-screen p-4 flex flex-col">
            <h1 className="text-3xl font-bold mb-4">Metachess</h1>
            <div className="main-layout grid grid-cols-3 gap-4 flex-1">
                <DetailedInfoPanel />
                <NavigationPanel />
                <LogPanel />
            </div>
        </div>
    );
}

// http://137.184.11.123:5420/battle/new&auth_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF5ZXJfaWQiOiIwYjA1YzZmZC0yMjFlLTRmMDgtYjMyMC0yZWVkNDZjYTc3MzQiLCJ0aW1lc3RhbXAiOjE2OTM3NzExMTN9.6GUN6kr69MvTbeeWHoHvMQZo7xPhX9Dy9SXojm4Q2Ps
