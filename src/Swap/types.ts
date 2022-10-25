export interface Token {
    id: number;
    name: string;
    unit_name: string;
    logo: {
        png: string;
    };
    decimals: number;
}

export interface Transaction {
    transactions: Array<{
        txns: string[];
        signed_txns: Array<string | any[]>;
        tx_id?: string;
    }>;
    tx_id: string;
}
