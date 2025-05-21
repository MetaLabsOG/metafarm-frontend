import styled from 'styled-components';
import { PrettyButtonContainer } from '../../common/styled';

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

export const DesktopFilterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border: none; /* Made border invisible */

    @media (max-width: 700px) {
        display: none;
    }
`;

export const MobileFilterContainer = styled.div`
    display: none;

    @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding-left: 20px;
        padding-right: 20px;
        background-color: rgba(30, 30, 30, 0.2);
        backdrop-filter: blur(6px);
        border-radius: 16px;
        padding-top: 15px;
        padding-bottom: 15px;
        transition: all 0.3s ease;
        border: none; /* Made border invisible */
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    &:hover {
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    }
`;

export const MobileFilterRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 325px;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-1px);
    }
`;

export const VerticalSpacer = styled.div<{ space?: string }>`
    height: ${({ space }) => space};
    width: 100%;
`;

export const HorizontalSpacer = styled.div<{ space?: string }>`
    padding-left: ${({ space }) => space};
`;

export const PoolListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    backdrop-filter: none;
    width: 80%;
    min-width: 1114px;
    border-radius: 10px;
    border: none;
    box-shadow: none;

    @media (max-width: 1120px) {
        background-color: transparent;
        backdrop-filter: none;
        border: none;
        box-shadow: none;
        margin-top: 0;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
        gap: 20px;
        align-items: center;
        min-width: unset;
        width: 100%;
    }

    @media (max-width: 700px) {
        margin-top: 36px;
        justify-content: space-between; /* Changed from center to space-between */
        gap: 8px; /* Add small gap between cards */
        padding: 0 8px; /* Add padding on the sides */
    }
`;

export const PoolFiltersContainer = styled.div`
    display: flex;
    gap: 20px;
    justify-content: flex-end;
    margin-bottom: 5px;

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

export const AddFarmButtonContainer = styled(PrettyButtonContainer)`
    color: white;
    border: 1px solid rgba(144, 238, 144, 0.7);
    text-decoration: none;
    background-color: transparent;
    outline: none;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.02em;
    height: 30px;
    text-align: center;
    font-family: 'Montserrat';
    transition: all 0.3s ease;

    &:hover {
        border-color: rgba(144, 238, 144, 0.9);
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }

    @media (max-width: 700px) {
        width: 140px;
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
        width: 50%;
        width: 50%;
        display: flex;
        flex-direction: column-reverse;
        padding-left: 0px;
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
        gap: 11px;
        padding-top: 4px;
        margin-left: 0px;
    }
`;

export const TopTwoButtonsMobileContainer = styled.a`
    display: flex;
    margin-bottom: 5px;

    @media (max-width: 885px) {
        display: flex;
        flex-direction: row;
        justify-content: left;
    }

    @media (max-width: 700px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-right: 0%;
        padding-top: 5px;
        gap: 2px;
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
