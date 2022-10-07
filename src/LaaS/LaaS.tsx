import { createComponent } from 'effector-react';
import { ContractInfo } from '../common/store';
import { LaaSCard } from './LaaSCard';
import { $laasPools, setLaasPoolInfos } from './store';
import { LaaSContainer } from './styled';

const vaultAppId = 114637307;
const vaultAppInfo: ContractInfo<'laas'> = {
    type: 'laas',
    id: vaultAppId,
    version: '0.0.1',
    deployed_timestamp: Date.now(),
    description: 'Test laas pool',
    metadata: {},
};

setLaasPoolInfos([vaultAppInfo]);

export const LaaS = createComponent($laasPools, (_props, state) => (
    <LaaSContainer style={{ marginTop: 40 }}>
        {state.map((vault, idx) => (
            <LaaSCard key={idx} vault={vault} />
        ))}
    </LaaSContainer>
));
