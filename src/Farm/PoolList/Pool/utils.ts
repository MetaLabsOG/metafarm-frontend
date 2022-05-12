export const isValidAmount = (amount: number, balance: number) => (amount === 0 || amount > balance ? false : true);
