import React from 'react';
import { useStore } from 'effector-react';
import { $eventLogs } from './store';

const LogPanel: React.FC = () => {
    const eventLogs = useStore($eventLogs);

    return (
        <div className="right-panel">
            <div className="p-4 rounded-lg shadow-md">
                <h2 className="text-xl mb-2">Event Logs</h2>
                <ul>
                    {eventLogs.map((log, index) => (
                        <li key={index} className="badge badge[primary outline]">
                            {log.message}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default LogPanel;
