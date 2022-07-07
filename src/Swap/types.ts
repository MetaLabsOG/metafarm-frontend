export interface Token {
    id: number;
    name: string;
    unit_name: string;
    logo: {
        png: string;
    };
    decimals: number;
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
        signed_txns: (string | any[])[];
        tx_id?: string;
    }[];
    tx_id: string;
}
