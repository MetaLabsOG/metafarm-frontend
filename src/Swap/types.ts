export interface Token {
    id: number;
    name: string;
    unit_name: string;
    logo: {
        png: string;
    };
    decimals: number;
}

export interface BestSwapInfo {
    best_swap: number;
    direct_swap: number;
    best_path: Array<{
        unit_name: string;
    }>;
    usdc_diff: number;
}

export interface Transaction {
    transactions: Array<{
        txns: string[];
        signed_txns: Array<string | any[]>;
        tx_id?: string;
    }>;
    tx_id: string;
}
