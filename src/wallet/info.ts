import { getNfd } from '../providers/nfdProvider';

const WALLET_TYPE_KEY = 'connectedWalletType';
const WALLET_ADDRESS = 'walletAddress';
const WALLET_NFD_NAME = 'walletNfdName';

export function updateWalletType(walletType: string) {
    localStorage.setItem(WALLET_TYPE_KEY, walletType);
}

export function updateWalletAddress(walletAddress: string) {
    localStorage.setItem(WALLET_ADDRESS, walletAddress);
}

export function getWalletType() {
    return localStorage.getItem(WALLET_TYPE_KEY);
}

export function getWalletAddress() {
    return localStorage.getItem(WALLET_ADDRESS);
}

export function clearWalletData() {
    localStorage.removeItem(WALLET_TYPE_KEY);
    localStorage.removeItem(WALLET_ADDRESS);
    localStorage.removeItem(WALLET_NFD_NAME);
}

export async function getWalletNfd(): Promise<string | undefined> {
    const address = getWalletAddress();
    if (address === null) {
        return undefined;
    }

    const savedNfd = localStorage.getItem(WALLET_NFD_NAME);
    if (savedNfd === address) {
        return undefined;
    }
    if (savedNfd !== null) {
        return savedNfd;
    }

    const addressNfd = await getNfd(address);
    localStorage.setItem(WALLET_NFD_NAME, addressNfd ?? address);
    return addressNfd;
}
