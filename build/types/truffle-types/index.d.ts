/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

/// <reference types="truffle-typings" />
import {BigNumber} from "bignumber.js";

export interface ConvertLibContract
  extends Truffle.Contract<ConvertLibInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<ConvertLibInstance>;
}

export interface FlashLoanReceiverBaseContract
  extends Truffle.Contract<FlashLoanReceiverBaseInstance> {
  "new"(
    _provider: string | BigNumber,
    meta?: Truffle.TransactionDetails
  ): Promise<FlashLoanReceiverBaseInstance>;
}

export interface ILendingPoolAddressesProviderContract
  extends Truffle.Contract<ILendingPoolAddressesProviderInstance> {
  "new"(
    meta?: Truffle.TransactionDetails
  ): Promise<ILendingPoolAddressesProviderInstance>;
}

export interface LendingPoolContract
  extends Truffle.Contract<LendingPoolInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<LendingPoolInstance>;
}

export interface LiquidatorContract
  extends Truffle.Contract<LiquidatorInstance> {
  "new"(
    ILendingAddress: string | BigNumber,
    meta?: Truffle.TransactionDetails
  ): Promise<LiquidatorInstance>;
}

export interface MetaCoinContract extends Truffle.Contract<MetaCoinInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<MetaCoinInstance>;
}

export interface MigrationsContract
  extends Truffle.Contract<MigrationsInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<MigrationsInstance>;
}

export interface OptionsContractContract
  extends Truffle.Contract<OptionsContractInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<OptionsContractInstance>;
}

export interface OptionsExchangeContract
  extends Truffle.Contract<OptionsExchangeInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<OptionsExchangeInstance>;
}

export interface ConvertLibInstance extends Truffle.ContractInstance {
  convert(
    amount: number | BigNumber | string,
    conversionRate: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;
}

export interface FlashLoanReceiverBaseInstance
  extends Truffle.ContractInstance {
  addressesProvider(txDetails?: Truffle.TransactionDetails): Promise<string>;
}

export interface ILendingPoolAddressesProviderInstance
  extends Truffle.ContractInstance {
  getLendingPool(txDetails?: Truffle.TransactionDetails): Promise<string>;

  setLendingPoolImpl: {
    (
      _pool: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _pool: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _pool: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _pool: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getLendingPoolCore(txDetails?: Truffle.TransactionDetails): Promise<string>;

  setLendingPoolCoreImpl: {
    (
      _lendingPoolCore: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _lendingPoolCore: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _lendingPoolCore: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _lendingPoolCore: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getLendingPoolConfigurator(
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  setLendingPoolConfiguratorImpl: {
    (
      _configurator: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _configurator: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _configurator: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _configurator: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getLendingPoolDataProvider(
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  setLendingPoolDataProviderImpl: {
    (
      _provider: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _provider: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _provider: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _provider: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getLendingPoolParametersProvider(
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  setLendingPoolParametersProviderImpl: {
    (
      _parametersProvider: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _parametersProvider: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _parametersProvider: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _parametersProvider: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getTokenDistributor(txDetails?: Truffle.TransactionDetails): Promise<string>;

  setTokenDistributor: {
    (
      _tokenDistributor: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _tokenDistributor: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _tokenDistributor: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _tokenDistributor: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getFeeProvider(txDetails?: Truffle.TransactionDetails): Promise<string>;

  setFeeProviderImpl: {
    (
      _feeProvider: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _feeProvider: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _feeProvider: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _feeProvider: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getLendingPoolLiquidationManager(
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  setLendingPoolLiquidationManager: {
    (
      _manager: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _manager: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _manager: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _manager: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getLendingPoolManager(
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  setLendingPoolManager: {
    (
      _lendingPoolManager: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _lendingPoolManager: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _lendingPoolManager: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _lendingPoolManager: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getPriceOracle(txDetails?: Truffle.TransactionDetails): Promise<string>;

  setPriceOracle: {
    (
      _priceOracle: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _priceOracle: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _priceOracle: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _priceOracle: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getLendingRateOracle(txDetails?: Truffle.TransactionDetails): Promise<string>;

  setLendingRateOracle: {
    (
      _lendingRateOracle: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _lendingRateOracle: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _lendingRateOracle: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _lendingRateOracle: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };
}

export interface LendingPoolInstance extends Truffle.ContractInstance {
  flashLoan: {
    (
      _receiver: string | BigNumber,
      _reserve: string | BigNumber,
      _amount: number | BigNumber | string,
      _params: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _receiver: string | BigNumber,
      _reserve: string | BigNumber,
      _amount: number | BigNumber | string,
      _params: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _receiver: string | BigNumber,
      _reserve: string | BigNumber,
      _amount: number | BigNumber | string,
      _params: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _receiver: string | BigNumber,
      _reserve: string | BigNumber,
      _amount: number | BigNumber | string,
      _params: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  deposit: {
    (
      _reserve: string | BigNumber,
      _amount: number | BigNumber | string,
      _referralCode: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _reserve: string | BigNumber,
      _amount: number | BigNumber | string,
      _referralCode: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _reserve: string | BigNumber,
      _amount: number | BigNumber | string,
      _referralCode: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _reserve: string | BigNumber,
      _amount: number | BigNumber | string,
      _referralCode: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getReserveData(
    _reserve: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      string,
      BigNumber
    ]
  >;
}

export interface LiquidatorInstance extends Truffle.ContractInstance {
  addressesProvider(txDetails?: Truffle.TransactionDetails): Promise<string>;

  executeOperation: {
    (
      _reserve: string | BigNumber,
      _amount: number | BigNumber | string,
      _fee: number | BigNumber | string,
      _params: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _reserve: string | BigNumber,
      _amount: number | BigNumber | string,
      _fee: number | BigNumber | string,
      _params: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _reserve: string | BigNumber,
      _amount: number | BigNumber | string,
      _fee: number | BigNumber | string,
      _params: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _reserve: string | BigNumber,
      _amount: number | BigNumber | string,
      _fee: number | BigNumber | string,
      _params: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getParams(
    source: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<[string, string]>;
}

export interface MetaCoinInstance extends Truffle.ContractInstance {
  sendCoin: {
    (
      receiver: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      receiver: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      receiver: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      receiver: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getBalanceInEth(
    addr: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  getBalance(
    addr: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;
}

export interface MigrationsInstance extends Truffle.ContractInstance {
  last_completed_migration(
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

  setCompleted: {
    (
      completed: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      completed: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      completed: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      completed: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  upgrade: {
    (
      new_address: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      new_address: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      new_address: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      new_address: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };
}

export interface OptionsContractInstance extends Truffle.ContractInstance {
  liquidate: {
    (
      vaultOwner: string | BigNumber,
      oTokensToLiquidate: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      vaultOwner: string | BigNumber,
      oTokensToLiquidate: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      vaultOwner: string | BigNumber,
      oTokensToLiquidate: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      vaultOwner: string | BigNumber,
      oTokensToLiquidate: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  maxOTokensLiquidatable(
    vaultOwner: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  isUnsafe(
    vaultOwner: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  approve: {
    (
      spender: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      spender: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      spender: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      spender: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };
}

export interface OptionsExchangeInstance extends Truffle.ContractInstance {
  buyOTokens: {
    (
      receiver: string | BigNumber,
      oTokenAddress: string | BigNumber,
      paymentTokenAddress: string | BigNumber,
      oTokensToBuy: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      receiver: string | BigNumber,
      oTokenAddress: string | BigNumber,
      paymentTokenAddress: string | BigNumber,
      oTokensToBuy: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      receiver: string | BigNumber,
      oTokenAddress: string | BigNumber,
      paymentTokenAddress: string | BigNumber,
      oTokensToBuy: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      receiver: string | BigNumber,
      oTokenAddress: string | BigNumber,
      paymentTokenAddress: string | BigNumber,
      oTokensToBuy: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  premiumToPay(
    oTokenAddress: string | BigNumber,
    paymentTokenAddress: string | BigNumber,
    oTokensToBuy: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;
}