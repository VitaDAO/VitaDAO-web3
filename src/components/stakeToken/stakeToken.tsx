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
  const { contracts } = useContext(ContractContext);
  const [showBuySpinner, setShowBuySpinner] = useState(false);
  const [disableMessage, setDisableMessage] = useState("Enter Staking Amount");
  const [lockButton, setLockButton] = useState(true);
  const [approvePending, setApprovePending] = useState(false);
  const [token, setToken] = useState<string>("VITA");
  const [stakeAmount, setStakeAmount] = useState<number>(0.0);
  const { account, library } = useWeb3React();

  const [editedCurrency, setEditedCurrency] = useState("");

  async function tokenBalanceAction() {
    actions.setBalances({
      ethAddress: account,
      contracts,
      provider: library,
    });
    actions.getStakedBalance({
      address: account,
      contracts,
      provider: library,
    });
  }
  const hasEnoughBalance = () => {
    return stakeAmount > state.balances[`${token.toLowerCase()}Balance`]
      ? false
      : true;
  };

  useEffect(() => {
    if (!state.isWalletConnected) {
      setStakeAmount(0);
    }
  }, [state.isWalletConnected]);

  const handleRefresh = async () => {
    await tokenBalanceAction();
  };
  useEffect(() => {
    handleRefresh();
    // eslint-disable-next-line
  }, [account, state.flags.stakedTokens]);

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
    }
  };

  const classes = useStyles({ ...props, ...theme });

  return (
    <div className={classes.Main}>
      <div className={classes.balances}>
        <p>Staked tokens: {state.stakedBalance}</p>
        <p>Vita tokens: {state.balances["vitaBalance"]}</p>
      </div>
      <div className={classes.index}>
        <h1 className={classes.title}>Stake</h1>
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
              label={"please connect wallet"}
              clickFunction={lockTokens}
              disabled={true}
              pending={false}
              success={false}
              fail={false}
            />
          </div>
        ) : (
          <>
            {!state.flags.approvedTokens ? (
              <div className={classes.buttonContainer}>
                <PillButton
                  color="green"
                  label="Approve tokens"
                  clickFunction={() => approveTokens()}
                />
              </div>
            ) : (
              <div className={classes.buttonContainer}>
                <PillButton
                  color="green"
                  label="Stake tokens"
                  clickFunction={() => lockTokens()}
                  disabled={state.flags.approvedTokensPending}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default React.memo(StakeToken);
