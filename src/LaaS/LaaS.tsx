import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { createComponent, useUnit } from 'effector-react';
import { ContractInfo } from '../common/store';
import { getContracts } from '../providers/apiProvider';
import { LaaSCard } from './LaaSCard';
import { $laasPools, initializeLaasPool, setLaasPoolInfos } from './store';
import { CreateVaultContainer, LaaSContainer } from './styled';

const LaaSInner = createComponent($laasPools, (_props, state) => {
    const initEvent = useUnit(initializeLaasPool);

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <CreateVaultContainer href={`/addlaas`} rel="noreferrer">
                Create vault
            </CreateVaultContainer>
            <LaaSContainer>
                {state.map((vault, idx) => (
                    <LaaSCard key={idx} vault={vault} initEvent={initEvent} />
                ))}
            </LaaSContainer>
        </div>
    );
});

export const LaaS = () => {
    const setLaasPoolInfosEvent = useUnit(setLaasPoolInfos);
    const laasFetch = useQuery(['contracts', 'laas'], async () => getContracts('laas'));

    useEffect(() => {
        if (laasFetch.isSuccess) {
            const data = laasFetch.data! as Array<ContractInfo<'laas'>>;
            setLaasPoolInfosEvent(data);
        }
    }, [laasFetch, setLaasPoolInfosEvent]);

    return <LaaSInner />;
};
