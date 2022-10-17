import { createComponent } from 'effector-react';
import { ContractInfo } from '../common/store';
import { LaaSCard } from './LaaSCard';
import { $laasPools, setLaasPoolInfos } from './store';
import { LaaSContainer } from './styled';

export const LaaS = createComponent($laasPools, (_props, state) => (
    <LaaSContainer style={{ marginTop: 40 }}>
        {state.map((vault, idx) => (
            <LaaSCard key={idx} vault={vault} />
        ))}
    </LaaSContainer>
));
