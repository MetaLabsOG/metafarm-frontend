import React, { useState, useRef, useEffect } from 'react';
import { ColumnType } from '../../Farm/PoolList/PoolList';

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
        <div>
            <div style={{ position: 'relative' }} ref={dropdownRef}>
                {isOpen ? (
                    <button
                        onClick={toggleDropdown}
                        style={{
                            height: 30,
                            backgroundColor: 'rgba(30, 30, 30, 0.25)',
                            color: 'white',
                            fontSize: '13px',
                            fontWeight: 500,
                            letterSpacing: '0.02em',
                            borderRadius: '15px',
                            padding: '7px 15px',
                            width: '140px',
                            border: 'rgba(125, 125, 125, 0.2) 1px solid',
                            cursor: 'pointer',
                            outline: 'none',
                            transition: 'all 0.3s ease',
                            fontFamily: 'Montserrat',
                            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                       Sort By
                    </button>
                ) : (
                    <button
                        onClick={toggleDropdown}
                        style={{
                            height: 30,
                            backgroundColor: 'rgba(30, 30, 30, 0.25)',
                            color: 'white',
                            borderRadius: '15px',
                            fontSize: '13px',
                            fontWeight: 500,
                            letterSpacing: '0.02em',
                            padding: '7px 15px',
                            width: '140px',
                            border: 'rgba(144, 238, 144, 0.3) 1px solid',
                            cursor: 'pointer',
                            outline: 'none',
                            transition: 'all 0.3s ease',
                            fontFamily: 'Montserrat',
                            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
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
                            backgroundColor: 'rgba(30, 30, 30, 0.9)',
                            fontSize: '13px',
                            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
                            width: '100%',
                            top: '120%',
                            left: 0,
                            borderRadius: '12px',
                            backdropFilter: 'blur(8px)',
                            border: '1px solid rgba(144, 238, 144, 0.2)',
                            padding: '5px',
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
                                        padding: '8px 10px',
                                        cursor: 'pointer',
                                        color: 'white',
                                        fontFamily: 'Montserrat',
                                        fontWeight: 500,
                                        letterSpacing: '0.02em',
                                        marginTop: '2px',
                                        borderRadius: '8px',
                                        transition: 'all 0.2s ease',
                                        backgroundColor: sortKey === type ? 'rgba(144, 238, 144, 0.2)' : 'transparent',
                                        boxShadow: sortKey === type ? '0 1px 3px rgba(0, 0, 0, 0.1)' : 'none',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = sortKey === type
                                            ? 'rgba(144, 238, 144, 0.3)'
                                            : 'rgba(255, 255, 255, 0.1)';
                                        e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.15)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = sortKey === type
                                            ? 'rgba(144, 238, 144, 0.2)'
                                            : 'transparent';
                                        e.currentTarget.style.boxShadow = sortKey === type
                                            ? '0 1px 3px rgba(0, 0, 0, 0.1)'
                                            : 'none';
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
        </div>
    );
};

export default DropdownButton;
