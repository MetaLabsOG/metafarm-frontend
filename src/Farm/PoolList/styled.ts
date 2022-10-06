import styled from 'styled-components';

export const PoolListHeader = styled.div`
    display: flex;
    color: ${(props) => props.theme.gray};
    height: 71px;
    width: 95%;
    align-items: center;
    justify-content: flex-start;
    padding-right: 40px;
    padding-left: 20px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.08em;
    text-transform: uppercase;

    @media (max-width: 1120px) {
        display: none;
    }
`;

export const PoolListHeaderElement = styled.div<{ width?: string }>`
    width: ${({ width }) => width};
    padding-right: 5px;

    :hover {
        cursor: pointer;
        color: var(--lightGray);
        user-select: none;
    }
`;

export const PoolListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--newDarkGray);
    width: 80%;
    min-width: 1114px;
    border-radius: 10px;

    @media (max-width: 1120px) {
        background-color: black;
        margin-top: 0;
    }
`;

export const PoolFiltersContainer = styled.div`
    display: flex;
    gap: 20px;
    justify-content: flex-end;
    margin-bottom: 5px;
    margin-right: 10px;

    @media (max-width: 1120px) {
        justify-content: center;
    }
`;

export const PoolListArrow = styled.img<{ isAscSort?: boolean }>`
    width: 9px;
    transition: transform 0.2s ease;
    transform: ${({ isAscSort }) => (isAscSort ? 'translate(0) rotate(180deg)' : '')};

    :hover {
        cursor: pointer;
    }
`;

export const PoolTopLineContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1120px) {
        justify-content: center;
    }
`;

export const AddFarmButtonContainer = styled.a`
    color: var(--lightGray);
    text-decoration: none;
    :hover {
        cursor: pointer;
        color: var(--lightGreen);
    }

    @media (max-width: 1120px) {
        display: none;
    }
`;
