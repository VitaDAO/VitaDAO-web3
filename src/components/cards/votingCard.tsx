import React, { useContext, useEffect} from "react";
import CardWrapper from "./cardWrapper/cardWrapper";
import CardHeader from "./cardHeader/cardHeader";
import CardBody from "./cardBody/proposal/cardBody";
import PillButton from "../pillButton/pillButton";
import { StoreContext } from "../../store/store";
import { ContractContext } from "../../store/contractContext/contractContext";
import { useWeb3React } from "@web3-react/core";
import VoteRedirect from "./voteRedirect/voteRedirect";
import { useParams } from "react-router-dom";

export interface Props {
  id: string;
  startDate: Date;
  endDate: Date;
  status: string;
  yesVotes: number;
  noVotes: number;
}
interface RouteParams {
  id: string;
}

function VotingCard(props: Props) {
  const { state, actions } = useContext(StoreContext);
  const { contracts } = useContext(ContractContext);
  const { account, library } = useWeb3React();
  const headerTitle = "Voting Progress";
  const params = useParams<RouteParams>();

  const size =
    new Date().getTime() >= new Date(props.endDate).getTime() ||
    new Date().getTime() <= new Date(props.startDate).getTime()
      ? "smallest"
      : "small";
  useEffect(() => {
    if (state.isWalletConnected && state.stakedBalance === null) {
      setStakedBalance();
    }
  });
  useEffect(() => {
    if (state.isWalletConnected) {
      getDidVote();
    }
  });

  const getDidVote = async () => {
    actions.getDidVote({
      address: state.userAddress,
      contracts,
      provider: library
    });
  }

  const setStakedBalance = async () => {
    actions.getStakedBalance({
      proposalIndex: params.id,
      contracts,
      provider: library
    });
  };

  const vote = async (vote: boolean) => {
    actions.vote({
      address: account,
      contracts,
      provider: library,
      vote: vote,
      proposalIndex: params.id,
    });
  };

  return (
    <CardWrapper size={size}>
      <CardHeader heading={headerTitle} />
      <CardBody
        status={props.status}
        size={size}
        startDate={props.startDate}
        endDate={props.endDate}
        votesYes={props.yesVotes}
        votesNo={props.noVotes}
      />
      {/* // TODO: path must be dynamic, leading to governance :id */}
      {state.didVote === true && <p>You already voted on this proposal.</p>}

      {size !== "smallest" && state.stakedBalance > 0 ? (
        <>
          <PillButton
            label="vote yes"
            color="blue"
            clickFunction={() => vote(true)}
          />

          <PillButton
            label="vote no"
            color="yellow"
            clickFunction={() => vote(false)}
          />
        </>
      ) : state.stakedBalance === null || state.stakedBalance < 0.001 ? (
        <VoteRedirect></VoteRedirect>
      ) : (
        <></>
      )}
    </CardWrapper>
  );
}

export default VotingCard;
