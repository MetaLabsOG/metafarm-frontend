import React from 'react';
import { createComponent } from 'effector-react';
import { LaaSCard } from './LaaSCard';
import { $laasPools } from './store';
import { CreateVaultContainer, LaaSContainer } from './styled';

export const LaaS = createComponent($laasPools, (_props, state) => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        <CreateVaultContainer href={`/addlaas`} rel="noreferrer">
            Create vault
        </CreateVaultContainer>
        <LaaSContainer>
            {state.map((vault, idx) => (
                <LaaSCard key={idx} vault={vault} />
            ))}
        </LaaSContainer>
    </div>
));
