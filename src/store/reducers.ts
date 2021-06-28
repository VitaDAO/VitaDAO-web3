import { Contracts } from "./stateTypes";
import types from "./actionTypes";

const initialContracts = {
  tokenContract: null,
  raphaelContract: null,
  stakingContract: null
};


export interface IFlags {
  transactionInProgress: boolean;
  transactionSuccess: boolean;
  transactionFail: boolean;
  swapApproval1Pending: boolean;
  swapApproval2Pending: boolean;
  swapApproval1Done: boolean;
  swapApproval2Done: boolean;
  swapPending: boolean;
  swapFail: boolean;
  swapSuccess: boolean;
  mintApprovalPending: boolean;
  burnApprovalPending: boolean;
  mintApprovalSuccess: boolean;
  burnApprovalSuccess: boolean;
  mintApprovalFail: boolean;
  burnApprovalFail: boolean;
  mintPending: boolean;
  mintFail: boolean;
  mintSuccess: boolean;
  burnPending: boolean;
  burnFail: boolean;
  burnSuccess: boolean;
  transactionStep: number;
  approvedTokens:boolean;
  approvedTokensPending: boolean;
  stakeTokensPending: boolean;
  stakedTokens: boolean;
  loadingProposalNumbers:boolean;
  proposalCreated: boolean;
  creatingProposal: boolean;
}


export interface IBalances {
  vitaBalance: number;
  ethBalance: number;
}
export interface Prices {
  ethPrice: string;
}

export interface IProposal{
  status: any;
  data: any;
  votes: any;
  result: any;
}

export interface State {
  provider: any;
  isWalletConnected: boolean;
  contracts: Contracts;
  userAddress: string;
  balances: IBalances;
  flags: IFlags;
  error: string;
  data: any;
  prices:Prices;
  loading: boolean;
  stakedBalance: number;
  proposals:any;
  proposalStatus: any;
  proposalData: any;
  proposalVotes: any;
  proposalResult: any;
  loadingProposal: boolean;
  voted:boolean;
  loadingStakedBalance: boolean;
  proposalNumber: any;
  contractsLoaded:boolean;

}

const initialFlags: IFlags = {
  transactionInProgress: false,
  transactionSuccess: false,
  transactionFail: false,
  swapApproval1Pending: false,
  swapApproval2Pending: false,
  swapApproval1Done: false,
  swapApproval2Done: false,
  swapPending: false,
  swapFail: false,
  swapSuccess: false,
  mintApprovalPending: false,
  burnApprovalPending: false,
  mintApprovalSuccess: false,
  burnApprovalSuccess: false,
  mintApprovalFail: false,
  burnApprovalFail: false,
  mintPending: false,
  mintFail: false,
  mintSuccess: false,
  burnPending: false,
  burnFail: false,
  burnSuccess: false,
  transactionStep: 0,
  approvedTokens: false,
  approvedTokensPending: false,
  stakedTokens: false,
  stakeTokensPending: false,
  loadingProposalNumbers: false,
  proposalCreated: false,
  creatingProposal: false
};
const initialPrices = {
  ethPrice: "0.00",
};
const initialState: State = {
  provider: {},
  isWalletConnected: false,
  contracts: initialContracts,
  userAddress: "",
  error: "",
  flags: initialFlags,
  balances: {
    vitaBalance: 0,
    ethBalance: 0,
  },
  prices: initialPrices,
  data: null,
  loading: true,
  stakedBalance: 0,
  proposals:[],
  proposalData: {},
  proposalStatus: {},
  proposalVotes: {},
  proposalResult:{},
  loadingProposal: true,
  voted:false,
  loadingStakedBalance: true,
  proposalNumber: 0,
  contractsLoaded: false
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case types.SetWalletDisconnected.SET_WALLET_DISCONNECTED_SUCCESS:
      return {
        ...state,
        isWalletConnected: false,
        stakedBalance: null,
        balance: {
          vitaBalance: 0,
          ethBalance: 0,
        },
        userAddress: "",
        provider: {},
      };
    case types.SetProvider.SET_PROVIDER_SUCCESS:
      return { ...state, provider: action.payload };
    case types.SetContracts.SET_CONTRACTS_SUCCESS:
      return {
        ...state,
        contracts: action.payload,
        contractsLoaded:true
      };
    case types.SetWalletAddress.SET_WALLET_ADDRESS_SUCCESS:
      return { ...state, userAddress: action.payload, stakedBalance: null,
        balance: {
          vitaBalance: 0,
          ethBalance: 0,
        }};
    case types.SetWalletConnected.SET_WALLET_CONNECTED_SUCCESS:
        return { ...state, isWalletConnected: true };
    case types.SetBalances.SET_BALANCES_FAIL:
      return { ...state, error: action.payload, loading: false };
    case types.SetBalances.SET_BALANCES_SUCCESS:
      return { ...state, balances: action.payload, loading: false };
    case types.ApproveTokens.APPROVE_TOKENS_SUCCESS:
      return { ...state, flags: {...state.flags, approvedTokens:true, stakedTokens:false, approvedTokensPending:false}};
    case types.Stake.STAKE_TOKENS_REQUEST:
      return { ...state, flags: {...state.flags,stakeTokensPending:true}};
    case types.Stake.STAKE_TOKENS_SUCCESS:
      return { ...state, flags: {...state.flags,approvedTokens:false, stakedTokens:true, stakeTokensPending:false}};
    case types.Stake.STAKE_TOKENS_FAIL:
        return { ...state, flags: {...state.flags, stakedTokens:false, stakeTokensPending:false}};
    case types.ApproveTokens.APPROVE_TOKENS_FAIL:
      return { ...state, flags: {...state.flags, approvedTokens:false
      },error: action.payload,};
    case types.StakedBalance.GET_STAKED_BALANCE_SUCCESS:
      return { ...state, stakedBalance: action.payload, loadingStakedBalance: false };
    case types.StakedBalance.GET_STAKED_BALANCE_FAIL:
      return { ...state, stakedBalance: null, loadingStakedBalance: false, error: action.payload, };

    case types.ProposalStatus.GET_PROPOSAL_STATUS_FAIL:
      return { ...state, error: action.payload, loadingProposal: false};
    case types.ProposalStatus.GET_PROPOSAL_STATUS_SUCCESS:
      return { ...state, proposalStatus:action.payload, loadingProposal: false };
    case types.ProposalData.GET_PROPOSAL_DATA_FAIL:
      return { ...state, error: action.payload, loadingProposal: false};
    case types.ProposalData.GET_PROPOSAL_DATA_SUCCESS:
      return { ...state,  proposals: [...state.proposals, action.payload], loadingProposal: false };
    case types.ProposalVotes.GET_PROPOSAL_VOTES_FAIL:
      return { ...state, error: action.payload, loadingProposal: false };
    case types.ProposalVotes.GET_PROPOSAL_VOTES_SUCCESS:
      return { ...state,  proposalVotes:action.payload, loadingProposal: false };
    case types.ProposalResult.GET_PROPOSAL_RESULT_FAIL:
      return { ...state, error: action.payload, loadingProposal: false};
    case types.ProposalResult.GET_PROPOSAL_RESULT_SUCCESS:
      return { ...state,   proposalResult:action.payload, loadingProposal: false };
    case types.Vote.PROPOSAL_VOTE_SUCCESS:
      return { ...state, voted:true };
    case types.Vote.PROPOSAL_VOTE_REQUEST:
      return { ...state, voted:false };
    case types.Vote.PROPOSAL_VOTE_FAIL:
      return { ...state, error: action.payload, voted:false};
    case types.ProposalNumber.GET_PROPOSAL_NUMBER_SUCCESS:
      return { ...state, proposalNumber:action.payload, flags: {...state.flags, loadingProposalNumber: true}};
    case types.ProposalNumber.GET_PROPOSAL_NUMBER_FAIL:
      return { ...state, error: action.payload};
    case types.GetAllProposals.GET_ALL_PROPOSAL_DATA_SUCCESS:
      return { ...state, data:action.payload };
    case types.GetAllProposals.GET_ALL_PROPOSAL_DATA_FAIL:
      return { ...state, error: action.payload, voted:false};
    case types.CreateProposal.CREATE_PROPOSAL_SUCCESS:
      return { ...state, flags: {...state.flags, proposalCreated:true, creatingProposal:false}};
    case types.CreateProposal.CREATE_PROPOSAL_FAIL:
        return { ...state, flags: {...state.flags, proposalCreated:false, creatingProposal:false}};
    case types.CreateProposal.CREATE_PROPOSAL_REQUEST:
      return { ...state, flags: {...state.flags, proposalCreated:false, creatingProposal:true}};
  default:
      return state;
  }
};

export { initialState, reducer };
