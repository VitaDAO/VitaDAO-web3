
import types from "./actionTypes";
import { getWeb3Contracts } from "./helpers/contractBooter";

export const useActions = (state, dispatch) => ({
  setWalletConnected: () => {
    dispatch({
      type: types.SetWalletConnected.SET_WALLET_CONNECTED_SUCCESS,
      payload: "",
    });
  },
  setWalletDisconnected: () => {
    dispatch({
      type: types.SetWalletDisconnected.SET_WALLET_DISCONNECTED_SUCCESS,
      payload: "",
    });
  },
  setProvider: (data: any) => {
    dispatch({ type: types.SetProvider.SET_PROVIDER_SUCCESS, payload: data });
  },
  setContracts: (data: any) => {
    dispatch({
      type: types.SetContracts.SET_CONTRACTS_SUCCESS,
      payload: getWeb3Contracts(data),
    });
  },
  setBalances: (data) => {
    dispatch({ type: types.SetBalances.SET_BALANCES_PENDING });
    dispatch({
      type: types.SetBalances.SET_BALANCES_REQUEST,
      payload: data,
    });
  },
  setWalletAddress: (address: string) => {
    dispatch({
      type: types.SetWalletAddress.SET_WALLET_ADDRESS_SUCCESS,
      payload: address,
    });
  },
  vote: (data) => {
    dispatch({ type: types.Vote.PROPOSAL_VOTE_PENDING });
    dispatch({
      type: types.Vote.PROPOSAL_VOTE_REQUEST,
      payload: data,
    });
  },
  withdraw: (data) =>{
    dispatch({ type: types.Withdraw.WITHDRAW_TOKEN_PENDING });
    dispatch({
      type: types.Withdraw.WITHDRAW_TOKEN_REQUEST,
      payload: data,
    });
  },
  stake: (data) =>{ 
    dispatch({ type: types.Stake.STAKE_TOKENS_PENDING });
    dispatch({
      type: types.Stake.STAKE_TOKENS_REQUEST,
      payload: data,
    });
  },
  approveTokens:(data) =>{
    dispatch({ type: types.ApproveTokens.APPROVE_TOKENS_PENDING });
    dispatch({
      type: types.ApproveTokens.APPROVE_TOKENS_REQUEST,
      payload: data,
    });
  },
  getStakedBalance:(data) =>{
    dispatch({ type: types.StakedBalance.GET_STAKED_BALANCE_PENDING });
    dispatch({
      type: types.StakedBalance.GET_STAKED_BALANCE_REQUEST,
      payload: data,
    });
  },
  getProposalStatus:(data) =>{
    dispatch({ type: types.ProposalStatus.GET_PROPOSAL_STATUS_PENDING });
    dispatch({
      type: types.ProposalStatus.GET_PROPOSAL_STATUS_REQUEST,
      payload: data,
    });
  },
  getProposalData:(data) =>{
    dispatch({ type: types.ProposalData.GET_PROPOSAL_DATA_PENDING });
    dispatch({
      type: types.ProposalData.GET_PROPOSAL_DATA_REQUEST,
      payload: data,
    });
  },
  getProposalVotes:(data) =>{
    dispatch({ type: types.ProposalVotes.GET_PROPOSAL_VOTES_PENDING });
    dispatch({
      type: types.ProposalVotes.GET_PROPOSAL_VOTES_REQUEST,
      payload: data,
    });
  },
  getProposalResult:(data) =>{
    dispatch({ type: types.ProposalResult.GET_PROPOSAL_RESULT_PENDING });
    dispatch({
      type: types.ProposalResult.GET_PROPOSAL_RESULT_REQUEST,
      payload: data,
    });
  },
});

export interface Actions {
  setWalletConnected: () => void;
  setWalletDisconnected: () => void;
  setProvider: (data: any) => void;
  setContracts: (data: any) => void;
  setWalletAddress: (address: string) => void;
  setBalances:(data) => void; 
  vote:(data:any) => void;
  stake:(data:any) => void;
  withdraw:(data:any) => void;
  approveTokens:(data: any) => void;
  getStakedBalance:(data: any) => void;
  getProposalData:(data: any) => void;
  getProposalVotes:(data: any) => void;
  getProposalResult:(data: any) => void;
  getProposalStatus:(data: any) => void;
}
