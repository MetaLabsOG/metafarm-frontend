import { createComponent } from 'effector-react';
import {
    vaultCtcMockAuction,
    vaultCtcMockRunning,
    vaultCtcMockSubscription,
    vaultCtcMockTEST,
    vaultCtcMockWithdraw,
} from '../common/mocks';
import { Contract } from '../common/store';
import { VaultCard } from './VaultCard';
import { VaultContainer } from './styled';

const vaultPools: Contract<'vault'>[] = [
    vaultCtcMockRunning,
    vaultCtcMockTEST,
    vaultCtcMockSubscription,
    vaultCtcMockAuction,
    vaultCtcMockWithdraw,
];

export const Vault = createComponent(vaultPools, (_props, state) => (
    <VaultContainer style={{ marginTop: 40 }}>
        {state.map((vault, idx) => (
            <VaultCard key={idx} vault={vault} />
        ))}
    </VaultContainer>
));
