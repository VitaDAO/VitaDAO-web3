import types from "./actionTypes";
import { getBalances } from './services/balances';
import { createProposal, getAllProposals, getProposalCount, getProposalData, getProposalResult, getProposalStatus, getProposalVotes, vote } from './services/raphael';
import { getStakedBalance, getUnlockTime, stake, withdraw } from './services/staking';
import { approveTokens } from './services/token';

export const applyMiddleware = (dispatch) => (action) => {
  switch (action.type) {
    case types.SetBalances.SET_BALANCES_REQUEST:
      return getBalances(action.payload)
          .then((res) => {
            dispatch({
              type: types.SetBalances.SET_BALANCES_SUCCESS,
              payload: res,
            });
          })
          .catch((err) =>
            dispatch({
              type: types.SetBalances.SET_BALANCES_FAIL,
              payload: err.response,
            })
          );
    case types.Vote.PROPOSAL_VOTE_REQUEST:
      return vote(action.payload)
      .then((res) => {
        dispatch({
          type: types.Vote.PROPOSAL_VOTE_SUCCESS,
          payload: res,
        });
      })
      .catch((err) =>
        dispatch({
          type: types.Vote.PROPOSAL_VOTE_FAIL,
          payload: err.response,
        })
      );
    case types.Stake.STAKE_TOKENS_REQUEST:
      return stake(action.payload)
        .then((res) => {
          dispatch({
            type: types.Stake.STAKE_TOKENS_SUCCESS,
            payload: res,
          });
        })
        .catch((err) =>
          dispatch({
            type: types.Stake.STAKE_TOKENS_FAIL,
            payload: err.response,
          })
        );
    case types.Withdraw.WITHDRAW_TOKEN_REQUEST:
      return withdraw(action.payload)
      .then((res) => {
        dispatch({
          type: types.Withdraw.WITHDRAW_TOKEN_SUCCESS,
          payload: res,
        });
      })
      .catch((err) =>
        dispatch({
          type: types.Withdraw.WITHDRAW_TOKEN_FAIL,
          payload: err.response,
        })
      );
    case types.ApproveTokens.APPROVE_TOKENS_REQUEST:
      return approveTokens(action.payload)
      .then((res) => {
        dispatch({
          type: types.ApproveTokens.APPROVE_TOKENS_SUCCESS,
          payload: res,
        });
      })
      .catch((err) =>
        dispatch({
          type: types.ApproveTokens.APPROVE_TOKENS_FAIL,
          payload: err.response,
        })
      );
    case types.StakedBalance.GET_STAKED_BALANCE_REQUEST:
      return getStakedBalance(action.payload)
      .then((res) => {
        dispatch({
          type: types.StakedBalance.GET_STAKED_BALANCE_SUCCESS,
          payload: res,
        });
      })
      .catch((err) =>
        dispatch({
          type: types.StakedBalance.GET_STAKED_BALANCE_FAIL,
          payload: err.response,
        })
      );
    case types.ProposalStatus.GET_PROPOSAL_STATUS_REQUEST:
      return getProposalStatus(action.payload)
      .then((res) => {
        dispatch({
          type: types.ProposalStatus.GET_PROPOSAL_STATUS_SUCCESS,
          payload: res,
        });
      })
      .catch((err) =>
        dispatch({
          type: types.ProposalStatus.GET_PROPOSAL_STATUS_FAIL,
          payload: err.response,
        })
      );
    case types.ProposalData.GET_PROPOSAL_DATA_REQUEST:
      return getProposalData(action.payload)
      .then((res) => {
        dispatch({
          type: types.ProposalData.GET_PROPOSAL_DATA_SUCCESS,
          payload: res,
        });
      })
      .catch((err) =>
        dispatch({
          type: types.ProposalData.GET_PROPOSAL_DATA_FAIL,
          payload: err.response,
        })
      );
    case types.ProposalVotes.GET_PROPOSAL_VOTES_REQUEST:
      return getProposalVotes(action.payload)
      .then((res) => {
        dispatch({
          type: types.ProposalVotes.GET_PROPOSAL_VOTES_SUCCESS,
          payload: res,
        });
      })
      .catch((err) =>
        dispatch({
          type: types.ProposalVotes.GET_PROPOSAL_VOTES_FAIL,
          payload: err.response,
        })
      );
    case types.ProposalResult.GET_PROPOSAL_RESULT_REQUEST:
      return getProposalResult(action.payload)
      .then((res) => {
        dispatch({
          type: types.ProposalResult.GET_PROPOSAL_RESULT_SUCCESS,
          payload: res,
        });
      })
      .catch((err) =>
        dispatch({
          type: types.ProposalResult.GET_PROPOSAL_RESULT_FAIL,
          payload: err.response,
        })
      );
    case types.ProposalNumber.GET_PROPOSAL_NUMBER_REQUEST:
      return getProposalCount(action.payload)
      .then((res) => {
        dispatch({
          type: types.ProposalNumber.GET_PROPOSAL_NUMBER_SUCCESS,
          payload: res,
        });
      })
      .catch((err) =>
        dispatch({
          type: types.ProposalNumber.GET_PROPOSAL_NUMBER_FAIL,
          payload: err.response,
        })
      );
    case types.GetAllProposals.GET_ALL_PROPOSAL_DATA_REQUEST:
      return getAllProposals(action.payload)
      .then((res) => {
        dispatch({
          type: types.GetAllProposals.GET_ALL_PROPOSAL_DATA_SUCCESS,
          payload: res,
        });
      })
      .catch((err) =>
        dispatch({
          type: types.GetAllProposals.GET_ALL_PROPOSAL_DATA_FAIL,
          payload: err.response,
        })
      );
    case types.CreateProposal.CREATE_PROPOSAL_REQUEST:
      return createProposal(action.payload)
      .then((res) => {
        dispatch({
          type: types.CreateProposal.CREATE_PROPOSAL_SUCCESS,
          payload: res,
        });
      })
      .catch((err) =>
        dispatch({
          type: types.CreateProposal.CREATE_PROPOSAL_FAIL,
          payload: err.response,
        })
      );
    case types.GetUnlockTime.GET_UNLOCK_TIME_REQUEST:
      return getUnlockTime(action.payload)
      .then((res) => {
        dispatch({
          type: types.GetUnlockTime.GET_UNLOCK_TIME_SUCCESS,
          payload: res,
        });
      })
      .catch((err) =>
        dispatch({
          type: types.GetUnlockTime.GET_UNLOCK_TIME_FAIL,
          payload: err.response,
        })
      );
    default:
      dispatch(action);
  }
};
