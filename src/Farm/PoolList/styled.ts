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
    background-color: var(--backgroundCard);
    width: 80%;
    min-width: 1114px;
    border-radius: 10px;

    @media (max-width: 1120px) {
        background-color: transparent;
        margin-top: 0;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        gap: 20px;
        align-items: center;
        min-width: unset;
        width: 100%;
    }

    @media (max-width: 700px) {
        margin-top: 50px;
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

    @media (max-width: 700px) {
        display: flex;
        flex-direction: row;
        align-items: center;
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

    @media (max-width: 700px) {
        justify-content: center;
        flex-direction: column;
    }
`;

export const AddFarmButtonContainer = styled.a`
    color: white;
    border: 1px solid #90ee90;
    text-decoration: none;
    background-color: transparent,
    outline: none;
    border-radius: 15px;
    font-size: 15px;
    font-weight: 300;
    padding: 5px 15px 5px 15px;
    padding-bottom: 5px;
    width: 100%;
    height: 30px;

    :hover {
        cursor: pointer;
        color: gray;
        
    }

    @media (max-width: 922px) {
        font-size: 13px;
        padding: 6px 15px 6px 15px;
        height: 30px;
    }

    @media (max-width: 872px) {
        font-size: 13px;
        padding: 6px 14px 6px 14px;
        height: 30px;
    }

    @media (max-width: 700px) {
        text-align: center;
        border-radius: 15px;
        font-size: 12px;
        padding: 6px 15px 6px 15px;
        font-weight: 300;
        width: 130px;
        height: 29px;
        margin-top: 10px;

        :hover {
            cursor: pointer;
        }
    }
`;

export const SwitchersContainer = styled.a`
    display: flex;
    flex-direction: row;
    gap: 40px;

    @media (max-width: 870px) {
        gap: 10px;
    }

    @media (max-width: 700px) {
        display: flex;
        flex-direction: column-reverse;
        padding-left: 15px;
        padding-top: 5px;
        gap: 0px;
    }
`;

export const SwitchersAndSearchContainer = styled.a`
    display: flex;
    flex-direction: row;
    gap: 20px;

    @media (max-width: 840px) {
        gap: 5px;
    }

    @media (max-width: 820px) {
        margin-bottom: 10px;
    }

    @media (max-width: 805px) {
        gap: 10px;
    }

    @media (max-width: 700px) {
        margin-bottom: 0px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-top: 5px;
        margin-left: 0px;
    }
`;

export const TopTwoButtonsMobileContainer = styled.a`
    display: flex;
    margin-bottom: 5px;

    @media (max-width: 885px) {
        display: flex;
        flex-direction: row;
        align-items: left;
        justify-content: left;
    }

    @media (max-width: 700px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-right: 0%;
        padding-top: 5px;
        gap: 0px;
        margin-bottom: 0px;
    }
`;

export const MobileOnly = styled.div`
    display: none;

    @media (max-width: 700px) {
        display: block;
    }
`;

export const DesktopOnly = styled.div`
    display: block;

    @media (max-width: 700px) {
        display: none;
    }
`;
