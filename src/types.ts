type NetworkAccount = {
    addr: string
}


export type Account = {
    networkAccount: NetworkAccount
    getAddress: () => void

}