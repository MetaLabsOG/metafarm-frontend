# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [17.2.4](https://github.com/MetaLabsOG/cometa-contracts/compare/@metalabsog/farm@17.2.3...@metalabsog/farm@17.2.4) (2022-08-03)

**Note:** Version bump only for package @metalabsog/farm





## [17.2.3](https://github.com/MetaLabsOG/cometa-contracts/compare/@metalabsog/farm@17.2.2...@metalabsog/farm@17.2.3) (2022-08-02)

**Note:** Version bump only for package @metalabsog/farm





## [17.2.2](https://github.com/MetaLabsOG/cometa-contracts/compare/@metalabsog/farm@17.2.1...@metalabsog/farm@17.2.2) (2022-08-01)

**Note:** Version bump only for package @metalabsog/farm





## [17.2.1](https://github.com/MetaLabsOG/cometa-contracts/compare/@metalabsog/farm@17.2.0...@metalabsog/farm@17.2.1) (2022-07-20)


### Bug Fixes

* :bug: Expose extraAlgoRewardPerBlock in the initial state ([6845217](https://github.com/MetaLabsOG/cometa-contracts/commit/6845217756888d9a4a7e541f89f84c4fe8c9f557))





# [17.2.0](https://github.com/MetaLabsOG/cometa-contracts/compare/@metalabsog/farm@17.1.0...@metalabsog/farm@17.2.0) (2022-07-20)


### Bug Fixes

* :bug: Remove locks after pool is ended ([279c9e6](https://github.com/MetaLabsOG/cometa-contracts/commit/279c9e60ad6fc4c7cfc2e550d5798e041843632e))


### Features

* :sparkles: Algo rewards (+ tests) ([e8d489d](https://github.com/MetaLabsOG/cometa-contracts/commit/e8d489d43b4e3ffdb5684ab1c4babc6a133edaec))
* :sparkles: Extra rewards in algo ([5e01ada](https://github.com/MetaLabsOG/cometa-contracts/commit/5e01ada7b930a267d87ae3907fc7a55e52d4e684))





# [17.1.0](https://github.com/MetaLabsOG/cometa-contracts/compare/@metalabsog/farm@17.0.2...@metalabsog/farm@17.1.0) (2022-06-21)


### Features

* :sparkles: Fees for farm creation for beneficiary (us) ([ce44f4b](https://github.com/MetaLabsOG/cometa-contracts/commit/ce44f4b49e2bb35f83128a8e28a164cfa863edb7))





## [17.0.2](https://github.com/MetaLabsOG/cometa-contracts/compare/@metalabsog/farm@17.0.1...@metalabsog/farm@17.0.2) (2022-06-13)


### Bug Fixes

* :bug: Using`thisConsensusTime` properly (avoid futher delays) ([ba701b6](https://github.com/MetaLabsOG/cometa-contracts/commit/ba701b683b16c6fa4cf6b787119e32dbec27b9be))





## [17.0.1](https://github.com/MetaLabsOG/cometa-contracts/compare/@metalabsog/farm@17.0.0...@metalabsog/farm@17.0.1) (2022-06-13)


### Bug Fixes

* :bug: Fix time delay in reward calculation ([e79eee9](https://github.com/MetaLabsOG/cometa-contracts/commit/e79eee9aa4c8dc6c50b4b59b92030c07331bdc0f))





# [17.0.0](https://github.com/MetaLabsOG/cometa-contracts/compare/@metalabsog/farm@16.0.2...@metalabsog/farm@17.0.0) (2022-06-13)

**Note:** Version bump only for package @metalabsog/farm





## [16.0.2](https://github.com/MetaLabsOG/cometa-contracts/compare/@metalabsog/farm@16.1.0...@metalabsog/farm@16.0.2) (2022-06-13)

**Note:** Version bump only for package @metalabsog/farm





# [16.1.0](https://github.com/MetaLabsOG/cometa-contracts/compare/@metalabsog/farm@16.0.0...@metalabsog/farm@16.1.0) (2022-06-13)


### Bug Fixes

* **farm:** :bug: use thisConsensusTime in farm (because it actually works) ([13de0f6](https://github.com/MetaLabsOG/cometa-contracts/commit/13de0f640df4020eccb7b81c2917a12c898c373b))
* **farm:** :hammer: support new contract features in testnet_deploy_all script ([2f65b17](https://github.com/MetaLabsOG/cometa-contracts/commit/2f65b17d76b91141c7dd34a66d6b72002a14c929))


### Features

* **farm:** :clown_face: initial version of python digital twin for farm ([5ba02cc](https://github.com/MetaLabsOG/cometa-contracts/commit/5ba02ccaae79ecb3f6d05525fd2c0f55031dd6b4))
* **farm:** :sparkles: add rewardPerTokenStored and rewardsPaid to view ([1308bc0](https://github.com/MetaLabsOG/cometa-contracts/commit/1308bc0631a13df4e8e8747accfe36ad1a0e19e3))





# [16.0.0](https://github.com/MetaLabsOG/cometa-contracts/compare/@metalabsog/farm@15.2.0...@metalabsog/farm@16.0.0) (2022-06-08)

**Note:** Version bump only for package @metalabsog/farm





# [15.2.0](https://github.com/MetaLabsOG/cometa-contracts/compare/@metalabsog/farm@15.1.0...@metalabsog/farm@15.2.0) (2022-06-08)


### Bug Fixes

* :bug: Change `stake` interface regarding fees, fix test bugs ([842dab8](https://github.com/MetaLabsOG/cometa-contracts/commit/842dab8a27959fee143a62e0f62975a34bd64eee))
* **farm:** :ambulance: fix rewards in farm which could be rounded down to zero ([e749202](https://github.com/MetaLabsOG/cometa-contracts/commit/e74920253e4d717a55b0d420e1fe3eb832ff2ec9))
* **farm:** :bug: Properly fix overflows/round errors in farms with UInt64 ([ce678cc](https://github.com/MetaLabsOG/cometa-contracts/commit/ce678cc87721a69ace02ceda606f8a367d7f44ce))


### Features

* :sparkles: Entrance/exit fees in the contract code ([d34713e](https://github.com/MetaLabsOG/cometa-contracts/commit/d34713e8df611c645fa5e9f0cc0489e581ddcbcd))
* **farm:** :hammer: script for deploying smart testnet farms from a list and updating backend ([0cd4abe](https://github.com/MetaLabsOG/cometa-contracts/commit/0cd4abed60a2dd50f559ff0ad848065e4d1d958e))
* **farm:** :sparkles: add lock mechanism to farm ([f2d7854](https://github.com/MetaLabsOG/cometa-contracts/commit/f2d78547992c6e03b87b072344ed8527bc58e04c))





# [15.1.0](https://github.com/MetaLabsOG/cometa-contracts/compare/@metalabsog/farm@15.0.3...@metalabsog/farm@15.1.0) (2022-05-16)


### Features

* :rocket: Script for farms redeployment to the new version ([192253f](https://github.com/MetaLabsOG/cometa-contracts/commit/192253fb84845e6e37633c8f931ceedc6b4b2d06))





## [15.0.3](https://github.com/MetaLabsOG/cometa-contracts/compare/@metalabsog/farm@15.0.2...@metalabsog/farm@15.0.3) (2022-05-09)

**Note:** Version bump only for package @metalabsog/farm





## [15.0.2](https://github.com/MetaLabsOG/cometa-contracts/compare/@metalabsog/farm@15.0.1...@metalabsog/farm@15.0.2) (2022-05-09)


### Bug Fixes

* oops forgot to expose reach in previous commits ([0427459](https://github.com/MetaLabsOG/cometa-contracts/commit/0427459f1dd1085f98c28b7a33a2729cb07cf95a))





## [15.0.1](https://github.com/MetaLabsOG/cometa-contracts/compare/@metalabsog/farm@15.0.0...@metalabsog/farm@15.0.1) (2022-05-05)

**Note:** Version bump only for package @metalabsog/farm





# [15.0.0](https://github.com/MetaLabsOG/cometa-contracts/compare/@metalabsog/farm@14.0.1...@metalabsog/farm@15.0.0) (2022-05-05)


### Features

* :technologist: Expose reach library from each workspace/npm package ([ca9d984](https://github.com/MetaLabsOG/cometa-contracts/commit/ca9d9841741ff94bb839b4af5d601676340f1f79))





## [14.0.1](https://github.com/MetaLabsOG/cometa-contracts/compare/@metalabsog/farm@13.1.0...@metalabsog/farm@14.0.1) (2022-05-02)


### Features

* **farm:** :hammer: Add script to check if farm is deployed and was properly initialized ([affec15](https://github.com/MetaLabsOG/cometa-contracts/commit/affec153a2664425bfff2e4be4eac4fb07d238db))





# [14.0.0](https://github.com/MetaLabsOG/cometa-contracts/compare/@metalabsog/farm@13.1.0...@metalabsog/farm@14.0.0) (2022-05-02)


### Features

* **farm:** :hammer: Add script to check if farm is deployed and was properly initialized ([affec15](https://github.com/MetaLabsOG/cometa-contracts/commit/affec153a2664425bfff2e4be4eac4fb07d238db))





# [13.1.0](https://github.com/MetaLabsOG/cometa-contracts/compare/@metalabsog/farm@13.0.2...@metalabsog/farm@13.1.0) (2022-04-25)


### Features

* **farm:** :hammer: Inject time in farm only in developer environment ([0fbdb2b](https://github.com/MetaLabsOG/cometa-contracts/commit/0fbdb2b67be84eb0de644f73994063dfe8be66bb))
* **farm:** :rocket: add TestNet deployment script for farm ([6e8b820](https://github.com/MetaLabsOG/cometa-contracts/commit/6e8b820e3104c1d55d29e650b2e546c4613d19a1))





## [13.0.2](https://github.com/MetaLabsOG/cometa-contracts/compare/@metalabsog/farm@13.0.1...@metalabsog/farm@13.0.2) (2022-04-21)

**Note:** Version bump only for package @metalabsog/farm





## [13.0.1](https://github.com/MetaLabsOG/cometa-contracts/compare/@metalabsog/farm@13.0.0...@metalabsog/farm@13.0.1) (2022-04-20)


### Bug Fixes

* :pencil2: Use proper [@metalabsog](https://github.com/metalabsog) imports instead of old [@cometa](https://github.com/cometa) ([b920aa1](https://github.com/MetaLabsOG/cometa-contracts/commit/b920aa1db32bec7ab75001122ea1d310533d6007))





# 13.0.0 (2022-04-20)



## 1.0.7 (2022-04-18)



## 1.0.6 (2022-04-18)



## 1.0.4 (2022-04-18)



## 1.0.3 (2022-04-18)



## 1.0.2 (2022-04-18)



## 1.0.1 (2022-04-18)

**Note:** Version bump only for package @metalabsog/farm





## [1.0.7](https://github.com/MetaLabsOG/cometa-contracts/compare/v1.0.6...v1.0.7) (2022-04-18)

**Note:** Version bump only for package @metalabsog/farm





## [1.0.6](https://github.com/MetaLabsOG/cometa-contracts/compare/v1.0.4...v1.0.6) (2022-04-18)

**Note:** Version bump only for package @metalabsog/farm





## [1.0.5](https://github.com/MetaLabsOG/cometa-contracts/compare/v1.0.4...v1.0.5) (2022-04-18)

**Note:** Version bump only for package @metalabsog/farm





## [1.0.4](https://github.com/MetaLabsOG/cometa-contracts/compare/v1.0.3...v1.0.4) (2022-04-18)

**Note:** Version bump only for package @metalabsog/farm





## [1.0.3](https://github.com/MetaLabsOG/cometa-contracts/compare/v1.0.2...v1.0.3) (2022-04-18)

**Note:** Version bump only for package @cometa/farm





## 1.0.1 (2022-04-18)

**Note:** Version bump only for package @cometa/farm
