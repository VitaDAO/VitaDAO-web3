import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import { StoreContext } from "../../store/store";
import useStyles from "./stakeTokenStyles";
import { useWeb3React } from "@web3-react/core";
import BuySellBox from "./../../components/buySellBox/buySellBox";
import { ContractContext } from "../../store/contractContext/contractContext";
import PillButton from "../../components/pillButton/pillButton";
export interface Props {
  // walletConnected: boolean;
  // toggleWalletModal: () => void;
  // chainIdIsCorrect: boolean;
}

function StakeToken(props: any) {
  const { theme } = useContext(ThemeContext);
  const { state, actions } = useContext(StoreContext);
  const { contracts, initializeWeb3 } = useContext(ContractContext);
  const [showBuySpinner] = useState(false);
  const [disableMessage, setDisableMessage] = useState("Please Connect Wallet");
  const [token, setToken] = useState<string>("VITA");
  const [stakeAmount, setStakeAmount] = useState<number>(0.0);
  const [approvedAmount, setApprovedAmount] = useState<number>(0.0);
  const [withdrawnAmount, setWithdrawnAmount] = useState<number>(0.0);
  const { account, library } = useWeb3React();

  const [editedCurrency, setEditedCurrency] = useState("");

  async function tokenBalanceAction() {
    actions.setBalances({
      ethAddress: account,
      contracts,
      provider: library,
    });
    actions.getApprovedAllowance({
      address: account,
      contracts,
      provider: library,
    });
    actions.getStakedBalance({
      address: account,
      contracts,
      provider: library,
    });
    actions.getUnlockTime({
      address: account,
      contracts,
      provider: initializeWeb3,
    });
    if (state.flags.stakedTokens) setStakeAmount(0.0);
    if (state.flags.approvedTokens) setApprovedAmount(0.0);
    if (state.flags.withdrawnTokens) setWithdrawnAmount(0.0);
  }
  const hasEnoughBalance = () => {
    return stakeAmount > state.balances[`${token.toLowerCase()}Balance`]
      ? false
      : true;
  };

  const [actionText, setActionText] = useState("Amount")

  useEffect(() => {
    if (!state.isWalletConnected) {
      setStakeAmount(0);
      setApprovedAmount(0);
      setWithdrawnAmount(0);
    }
  }, [state.isWalletConnected]);

  const handleRefresh = async () => {
    await tokenBalanceAction();
  };
  useEffect(() => {
    handleRefresh();
    // eslint-disable-next-line
  }, [account, state.flags.stakedTokens, state.flags.approvedTokens, state.flags.withdrawnTokens]);

  useEffect(() => {
    !hasEnoughBalance() &&
      setDisableMessage(`Insufficient ${token.toUpperCase()} Balance`);
    // eslint-disable-next-line
  }, [stakeAmount, state.balances, token]);

  const onInputChange = async (amount: number, token: string) => {
    setEditedCurrency("VITA");
    setStakeAmount(amount);
  };

  useEffect(() => {}, [stakeAmount, token]);

  const lockTokens = async () => {
    if (state.isWalletConnected) {
      actions.stake({
        address: account,
        contracts,
        provider: library,
        stakingAmount: stakeAmount,
      });
      await tokenBalanceAction();
    }
  };

  const approveTokens = async () => {
    if (state.isWalletConnected) {
      actions.approveTokens({
        address: account,
        contracts,
        provider: library,
        amount: stakeAmount,
      });      
      await tokenBalanceAction();
    }
  };

  const withdrawTokens = async () => {
    if (state.isWalletConnected) {
      actions.withdraw({
        address: account,
        contracts,
        provider: library,
        withdrawalAmount: stakeAmount,
      });
      await tokenBalanceAction();
    }
  };

  const canWithdraw = () => {
    // Can only withdraw if staked token balance is greater than zero
    // Can only withdraw if unlock date is in the past. 
    const unlockDatePassed = Date.now() >= Date.parse(state.unlockTime);
    return (state.stakedBalance > 0 && unlockDatePassed) ? true : false;
  }
  
  const canStake = () => {
    // can only stake the given amount if there are enough allowed tokens to cover
    // both already staked tokens and the amount user is trying to stake
    const hasEnoughAllowed = state.balances.allowedBalance >= stakeAmount;
    // and the stakeAmount has to be greater than zero
    return hasEnoughAllowed && (stakeAmount > 0);
  }

  const classes = useStyles({ ...props, ...theme });

  return (
    <div className={classes.Main}>
      <div className={classes.balances}>
        <label>Staked Tokens: {state.stakedBalance} </label>

        <p>Unlock Date: {state.unlockTime}</p>

        <p>Vita Tokens: {state.balances["vitaBalance"]}</p>
        <p>Approved Tokens: {state.balances["allowedBalance"]}</p> 
      </div>
      <div className={classes.index}>
        <h1 className={classes.title}>{actionText}</h1>
        <div className={classes.buySellContainer}>
          <div className={classes.topTransaction}>
            <BuySellBox
              setSellAmount={setStakeAmount}
              onInputChange={onInputChange}
              amount={stakeAmount}
              token={token}
              defaultCurrency={token}
              setBuyToken={setToken}
              showSpinner={showBuySpinner}
            />
          </div>
        </div>
        {!state.isWalletConnected || !hasEnoughBalance() ? (
          <div className={classes.buttonContainer}>
            <PillButton
              color={"grey"}
              label={disableMessage}
              clickFunction={lockTokens}
              onMouseEnterFunction={null}
              onMouseLeaveFunction={null}
              disabled={true}
              pending={false}
              success={false}
              fail={false}
            />
          </div>
        ) : (
          <>
            <div className={classes.buttonContainer}>
              <PillButton
                color={stakeAmount > 0 ? "green" : "grey"}
                label={stakeAmount > 0 ? "Approve tokens" : "Enter Approval Amount"}
                pending={state.flags.approvedTokensPending}
                clickFunction={stakeAmount > 0 ? () => approveTokens() : null}
                onMouseEnterFunction={() => setActionText("Approve")}
                onMouseLeaveFunction={() => setActionText("Amount")}
                disabled={false}
                success={false}
                fail={false}
              />
            </div>
            <div className={classes.buttonContainer}>
              <PillButton
                color={canStake() ? "green" : "grey"}
                label={canStake() ? "Stake tokens" : "Cannot Stake Yet"}
                pending={state.flags.stakeTokensPending}
                clickFunction={canStake() ? () => lockTokens() : null}
                onMouseEnterFunction={() => setActionText("Stake")}
                onMouseLeaveFunction={() => setActionText("Amount")}
                disabled={false}
                success={false}
                fail={false}
              />
            </div>
            <div className={classes.buttonContainer}>
              <PillButton
                color={canWithdraw() ? "green" : "grey"}
                label={canWithdraw()? "Withdraw" : "Cannot Withdraw Yet"}
                pending={state.flags.withdrawTokensPending}
                clickFunction={canWithdraw()? () => withdrawTokens() : null}
                onMouseEnterFunction={() => setActionText("Withdraw")}
                onMouseLeaveFunction={() => setActionText("Amount")}
                disabled={false}
                success={false}
                fail={false}
              />
            </div>
          </>
          )
        }
        <div className={classes.buttonContainer}></div>
      </div>
    </div>
  );
}

export default React.memo(StakeToken);
