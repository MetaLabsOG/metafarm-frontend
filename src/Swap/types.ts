declare global {
    interface Window {
        algorand: {
            signTxns: (param: { txn: string }[]) => Promise<string[]>;
        };
    }
}

export interface TokenSelectOption {
    value: string;
    name: string;
    unit_name: string;
    logo: string;
    amount: number;
}

export interface Token {
    id: number;
    name: string;
    unit_name: string;
    logo: {
        png: string;
    };
}

export interface BestSwap {
    best_swap: number;
    direct_swap: number;
    best_path: {
        unit_name: string;
    }[];
    usdc_diff: number;
}

export interface Transaction {
    transactions: {
        txns: string[];
        signed_txns: string[];
        tx_id?: string;
    }[];
    tx_id: string;
}
