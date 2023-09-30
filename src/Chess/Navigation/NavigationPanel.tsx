import { useUnit } from 'effector-react';
import { $globalStage } from '../store';
import LoginScreen from './LoginScreen';
import Dashboard from './Dashboard';

const NavigationPanel: React.FC = () => {
    const globalStage = useUnit($globalStage);

    return (
        <div>
            {globalStage === 'LOGIN' && <LoginScreen />}
            {globalStage === 'Dashboard' && <Dashboard />}
        </div>
    );
};

export default NavigationPanel;
