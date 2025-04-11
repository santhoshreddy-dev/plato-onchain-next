"use client";

import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownLink,
  WalletDropdownDisconnect,
  WalletDefault,
} from "@coinbase/onchainkit/wallet";
import {
  Address,
  Avatar,
  Name,
  Identity,
  EthBalance,
} from "@coinbase/onchainkit/identity";
import {
  useAccount,
  useAccountEffect,
  useBalance,
  useBlock,
  useBlockNumber,
  useBlockTransactionCount,
  useBytecode,
  useCall,
  useChainId,
  useChains,
  useClient,
  useConfig,
  useConnect,
  useConnections,
  useConnectorClient,
  useConnectors,
  useDeployContract,
  useDisconnect,
  useEnsAddress,
  useEnsAvatar,
  useEnsName,
  useEnsResolver,
  useEnsText,
  useEstimateFeesPerGas,
  useEstimateGas,
  useEstimateMaxPriorityFeePerGas,
  useFeeHistory,
  useGasPrice,
  useInfiniteReadContracts,
  usePrepareTransactionRequest,
  useProof,
  usePublicClient,
  useReadContract,
  useReadContracts,
  useReconnect,
  useSendTransaction,
  useSignMessage,
  useSignTypedData,
  useSimulateContract,
  useStorageAt,
  useSwitchAccount,
  useSwitchChain,
  useTransaction,
  useTransactionConfirmations,
  useTransactionCount,
  useTransactionReceipt,
  useVerifyMessage,
  useVerifyTypedData,
  useWaitForTransactionReceipt,
  useWalletClient,
  useWatchAsset,
  useWatchBlockNumber,
  useWatchBlocks,
  useWatchContractEvent,
  useWatchPendingTransactions,
  useWriteContract,
} from "wagmi";

export default function App() {
  return (
    <div className=" flex flex-col min-h-screen font-sans dark:bg-background dark:text-white bg-white text-black">
      <main className="flex flex-col items-center justify-center"></main>
    </div>
  );
}
