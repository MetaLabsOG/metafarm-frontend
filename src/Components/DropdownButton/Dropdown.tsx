import React, { useState, useRef, useEffect } from 'react';
import { ColumnType } from '../../Farm/PoolList/PoolList';
import { DropDownSortWrapper } from '../SwitchSelect/styled';

interface DropdownButtonProps {
    onColumnClick: (key: ColumnType) => void;
    sortKey: ColumnType;
    isAscSort: boolean;
    swapArrow: string;
    theme: any;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ onColumnClick, sortKey, isAscSort, swapArrow, theme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const displayTypes: ColumnType[] = [ColumnType.Tvl, ColumnType.Apr, ColumnType.Stake];

    const getDisplayText = (type: ColumnType): string => {
        switch (type) {
            case ColumnType.Tvl:
                return 'TVL';
            case ColumnType.Apr:
                return 'APR';
            case ColumnType.Stake:
                return 'MY STAKE';
            default:
                return 'Unknown';
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <DropDownSortWrapper>
            <div style={{ position: 'relative' }} ref={dropdownRef}>
                {isOpen ? (
                    <button
                        onClick={toggleDropdown}
                        style={{
                            backgroundColor: 'transparent',
                            color: 'gray',
                            borderRadius: '20px',
                            padding: '5px 15px',
                            width: '120px',
                            border: 'lightgreen 1px solid',
                            cursor: 'pointer',
                            outline: 'none',
                            transition: 'background-color 0.5s',
                            fontFamily: 'Montserrat',
                        }}
                    >
                        Sort By
                    </button>
                ) : (
                    <button
                        onClick={toggleDropdown}
                        style={{
                            backgroundColor: 'transparent',
                            color: 'white',
                            borderRadius: '15px',
                            padding: '5px 15px',

                            width: '120px',
                            border: 'lightgreen 1px solid',
                            cursor: 'pointer',
                            outline: 'none',
                            transition: 'background-color 0.5s',
                            fontFamily: 'Montserrat',
                        }}
                    >
                        Sort By ↓
                    </button>
                )}
                {isOpen && (
                    <div
                        style={{
                            position: 'absolute',
                            zIndex: 100,
                            backgroundColor: 'white',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                            width: '100%',
                            top: '120%',
                            left: 0,
                            borderRadius: '8px',
                        }}
                    >
                        {displayTypes.map((type) => (
                            <div
                                key={type}
                                style={{
                                    height: '35px',
                                }}
                            >
                                <div
                                    onClick={() => {
                                        onColumnClick(type);
                                    }}
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        padding: '5px 5px',
                                        cursor: 'pointer',
                                        color: theme.lightGray,
                                        fontFamily: 'Montserrat',
                                        marginTop: '10px',
                                    }}
                                >
                                    {getDisplayText(type)}
                                    {sortKey === type && (
                                        <img
                                            alt="arrow"
                                            src={swapArrow}
                                            style={{
                                                width: '15px',
                                                marginRight: '5px',
                                                height: '15px',
                                                transform: isAscSort ? 'rotate(180deg)' : 'none',
                                                transition: 'transform 0.3s',
                                            }}
                                        />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </DropDownSortWrapper>
    );
};

export default DropdownButton;
