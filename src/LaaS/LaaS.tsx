import { createComponent } from 'effector-react';
import { laasCtcMockAuction, laasCtcMockRunning, laasCtcMockSubscription, laasCtcMockWithdraw } from '../common/mocks';
import { Contract } from '../common/store';
import { LaaSCard } from './LaaSCard';
import { LaaSContainer } from './styled';

const laasPools: Contract<'laas'>[] = [
    laasCtcMockSubscription,
    laasCtcMockRunning,
    laasCtcMockAuction,
    laasCtcMockWithdraw,
];

export const LaaS = createComponent(laasPools, (_props, state) => (
    <LaaSContainer style={{ marginTop: 40 }}>
        {state.map((vault, idx) => (
            <LaaSCard key={idx} vault={vault} />
        ))}
    </LaaSContainer>
));
