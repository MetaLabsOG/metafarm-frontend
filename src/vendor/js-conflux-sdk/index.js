// Mock implementation of js-conflux-sdk for use with @reach-sh/stdlib
// This provides the minimum functionality needed by @reach-sh/stdlib

const Conflux = function() {
  return {
    provider: {
      call: async () => '0x',
      sendTransaction: async () => '0x',
      getTransactionReceipt: async () => null,
      getBlockByHash: async () => ({ transactions: [] }),
      getBlockByEpochNumber: async () => ({ transactions: [] }),
      getStatus: async () => ({ epochNumber: '0x0' }),
      getNextNonce: async () => '0x0',
      getBalance: async () => '0x0',
      getCode: async () => '0x',
      getStorageAt: async () => '0x0',
      getTransactionByHash: async () => null,
      getAccountInfo: async () => ({ balance: '0x0', nonce: '0x0' }),
      getBlocksByEpochNumber: async () => [],
      getEpochNumber: async () => '0x0',
      getGasPrice: async () => '0x1',
      estimateGasAndCollateral: async () => ({ gasUsed: '0x0', storageCollateralized: '0x0' }),
      getConfirmationRiskByHash: async () => 0,
      getInterestRate: async () => '0x0',
      getAccumulateInterestRate: async () => '0x0',
      getSupplyInfo: async () => ({ totalIssued: '0x0', totalStaking: '0x0', totalCollateral: '0x0' }),
      getCollateralForStorage: async () => '0x0',
      getAdmin: async () => '0x0',
      getSponsorInfo: async () => ({ sponsorBalanceForGas: '0x0', sponsorBalanceForCollateral: '0x0', sponsorGasBound: '0x0' }),
      getStakingBalance: async () => '0x0',
      getDepositList: async () => [],
      getVoteList: async () => [],
      getBlockRewardInfo: async () => ({ blockHash: '0x0', author: '0x0', totalReward: '0x0', baseReward: '0x0', txFee: '0x0' }),
      getClientVersion: async () => 'mock-js-conflux-sdk',
      getStatus: async () => ({ chainId: 1 }),
    },
    wallet: {
      addPrivateKey: () => {},
      delPrivateKey: () => {},
      signTransaction: async () => '0x',
      signMessage: async () => '0x',
    },
    Contract: function() {
      return {
        call: async () => '0x',
        sendTransaction: async () => '0x',
      };
    },
    format: {
      hex: (val) => '0x' + val.toString(16),
      address: (val) => val,
      bytes: (val) => val,
      uInt: (val) => val,
      bigInt: (val) => val,
      bigUInt: (val) => val,
      fixed64: (val) => val,
    },
  };
};

Conflux.format = {
  hex: (val) => '0x' + val.toString(16),
  address: (val) => val,
  bytes: (val) => val,
  uInt: (val) => val,
  bigInt: (val) => val,
  bigUInt: (val) => val,
  fixed64: (val) => val,
};

module.exports = { Conflux }; 