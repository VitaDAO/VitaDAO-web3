import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import { StoreContext } from "../../store/store";
import useStyles from "./buyTokenModalStyles";
import { useWeb3React } from "@web3-react/core";
import BuySellBox from "./../../components/buySellBox/buySellBox";
import { ContractContext } from "../../store/contractContext/contractContext";
import PriceConversionContainer from "../../components/priceConversion/priceConversion";
import ActionButtons from "../actionButtons/actionButtons";
import TradeCompleteOptions from "../../components/tradeCompleteOptions/tradeCompleteOptions";
import ProgressBubbles from "../../components/progressBubbles/progressBubbles";
import PillButton from "../../components/pillButton/pillButton";
// import { useToggle } from "../../hooks";
export interface Props {
  // walletConnected: boolean;
  // toggleWalletModal: () => void;
  // chainIdIsCorrect: boolean;
}

function BuyTokenModal(props: any) {
  const { theme } = useContext(ThemeContext);
  const { state, actions } = useContext(StoreContext);
  const { contracts } = useContext(ContractContext);
  // const [transaction, setTransaction] = useState("buy");
  const [sellToken, setSellToken] = useState<string>("ETH");
  const [sellAmount, setSellAmount] = useState<number>(0.0);
  const [showBuySpinner, setShowBuySpinner] = useState(false);
  const [showSellSpinner, setShowSellSpinner] = useState(false);
  const [disableMessage, setDisableMessage] = useState("Enter a Trade Amount");
  const [lockActionButtons, setLockActionButtons] = useState(true);
  const [buyToken, setBuyToken] = useState<string>("VITA");
  const [buyAmount, setBuyAmount] = useState<number>(0.0);
  const { account, library } = useWeb3React();
  // const [slippage, setSlippage] = useState<number>(1);
  // const [showSlippage, setShowSlippage] = useState(false);
  // const [showToast, setShowToast] = useState(false);
  const [editedCurrency, setEditedCurrency] = useState("");

  async function tokenBalanceAction() {
    await actions.setBalances({
      ethAddress: account,
      contracts,
      provider: library,
    });
  }

  useEffect(() => {
    if (sellAmount === 0) {
      setBuyAmount(0);
    }
  }, [sellAmount, buyAmount]);

  const resetAfterTradeComplete = () => {
    setSellToken("ETH");
    setBuyAmount(0.0);
    setSellAmount(0.0);
    // actions.clear();
    tokenBalanceAction();
  };

  useEffect(() => {
    if (!state.isWalletConnected) {
      setBuyAmount(0.0);
      setSellAmount(0.0);
    }
  }, [state.isWalletConnected]);

  const hasEnoughBalance = () => {
    return sellAmount > state.balances[`${sellToken.toLowerCase()}Balance`]
      ? false
      : true;
  };
  const handleRefresh = async () => {
    await tokenBalanceAction();
    setTimeout(() => {}, 2000);
  };
  useEffect(() => {
    handleRefresh();
    // eslint-disable-next-line
  }, [account]);

  useEffect(() => {
    !hasEnoughBalance() &&
      setDisableMessage(`Insufficient ${sellToken.toUpperCase()} Balance`);
    // eslint-disable-next-line
  }, [buyAmount, sellAmount, state.balances, sellToken]);

  useEffect(() => {
    buyAmount === 0 ||
      sellAmount === 0 ||
      (!hasEnoughBalance() && setLockActionButtons(true));
    // eslint-disable-next-line
  }, [buyAmount, sellAmount]);

  useEffect(() => {
    if (sellToken !== "VITA") {
      setAmountFromSell(sellAmount, sellToken);
    }
    // eslint-disable-next-line
  }, [sellToken]);

  const onInputChangeSell = (amount: number, token: string) => {
    setEditedCurrency("token");
    setSellAmount(amount);
    setSellToken(token);
  };

  const onInputChangeBuy = async (amount: number, token: string) => {
    setEditedCurrency("VITA");
    setBuyAmount(amount);
  };

  useEffect(() => {
    const runConversion = async () => {
      if (editedCurrency === "token") {
        if (sellAmount && sellAmount > 0) {
          setShowBuySpinner(true);
          setLockActionButtons(true);
          setDisableMessage("Calculating...");
          // const reward = await getReward(contracts, sellAmount, sellToken);
          if (sellAmount > 0) {
            setDisableMessage("");
            setLockActionButtons(false);
            setShowBuySpinner(false);
            // setBuyAmount(reward);
          } else {
            setBuyAmount(0);
            setLockActionButtons(true);
            setDisableMessage("Enter a Trade Amount");
          }
        } else {
          setSellAmount(0);
          setBuyAmount(0);
          setDisableMessage("Enter a Trade Amount");
          setLockActionButtons(true);
          setShowBuySpinner(false);
        }
      }
    };
    runConversion();
  }, [sellAmount, editedCurrency]);

  useEffect(() => {
    const runConversion = async () => {
      if (editedCurrency === "VITA") {
        if (buyAmount) {
          setBuyAmount(buyAmount);
          if (buyAmount > 0) {
            setShowSellSpinner(true);
            setLockActionButtons(true);
            setDisableMessage("Calculating...");
            // getCost(contracts, buyAmount, buyToken, sellToken).then((cost) => {
            //   setDisableMessage("");
            //   setLockActionButtons(false);
            //   setShowSellSpinner(false);
            //   setSellAmount(cost);
            // });
          } else {
            setSellAmount(0);
            setLockActionButtons(true);
            setDisableMessage("Enter a Trade Amount");
          }
        } else {
          setSellAmount(0);
          setBuyAmount(0);
          // getCost(contracts, 0, buyToken, sellToken).then((cost) => {
          //   setDisableMessage("Enter a Trade Amount");
          //   setLockActionButtons(true);
          //   setShowSellSpinner(false);
          //   setSellAmount(cost);
          // });
        }
      }
    };
    runConversion();
  }, [buyAmount, buyToken, editedCurrency]);

  function setAmountFromSell(amount: number, token: string) {
    if (amount) {
      setSellAmount(amount);
      if (amount > 0) {
        setShowBuySpinner(true);
        setLockActionButtons(true);
        setDisableMessage("Calculating...");
        // getReward(contracts, amount, token).then((reward) => {
        //   setDisableMessage("");
        //   setLockActionButtons(false);
        //   setShowBuySpinner(false);
        //   setBuyAmount(reward);
        // });
      } else {
        setBuyAmount(0);
        setLockActionButtons(true);
        setDisableMessage("Enter a Trade Amount");
      }
    } else {
      setSellAmount(0);
      setBuyAmount(0);
      // getReward(contracts, 0, token).then((reward) => {
      //   setDisableMessage("Enter a Trade Amount");
      //   setLockActionButtons(true);
      //   setShowBuySpinner(false);
      //   setBuyAmount(reward);
      // });
    }
  }

  async function swap() {
    const options = {
      userAddress: account,
      amount: sellAmount,
      token: sellToken,
    };
    // sellToken === "ETH"
    //   ? await actions.swapEth(options)
    //   : await actions.swapToken(options);
  }

  async function mintTokens() {}

  const approveAction = async () => {
    // await actions.approveMint({
    //   contracts: state.contracts,
    //   ethAddress: account,
    //   amount: sellAmount,
    //   token: sellToken,
    //   slippage: slippage,
    // });
  };

  const finalAction = async () => await mintTokens();

  const classes = useStyles({ ...props, ...theme });

  const priceToken = sellToken === "VITA" ? buyToken : sellToken;
  return (
    <div className={classes.Main}>
      <div className={classes.index}>
        <h1 className={classes.title}>Exchange</h1>
        <div className={classes.buySellContainer}>
          <div className={classes.topTransaction}>
            <BuySellBox
              setSellAmount={setSellAmount}
              onInputChange={onInputChangeSell}
              transaction="From"
              amount={sellAmount}
              token={sellToken}
              defaultCurrency={sellToken}
              setBuyToken={setSellToken}
              showSpinner={showSellSpinner}
            />
          </div>
          <div className={classes.bottomTransaction}>
            <BuySellBox
              setSellAmount={setSellAmount}
              onInputChange={onInputChangeBuy}
              amount={buyAmount}
              transaction="To"
              token={buyToken}
              defaultCurrency={buyToken}
              setBuyToken={setSellToken}
              showSpinner={showBuySpinner}
            />
          </div>
        </div>
        <div className={classes.conversionContainer}>
          <PriceConversionContainer token={priceToken} />
        </div>
        {!state.isWalletConnected || !hasEnoughBalance() ? (
          <div className={classes.buttonContainer}>
            <PillButton
              color={"grey"}
              label={"please connect wallet"}
              clickFunction={null}
              disabled={true}
              pending={false}
              success={false}
              fail={false}
            />
          </div>
        ) : state.flags.transactionSuccess || state.flags.transactionFail ? (
          <TradeCompleteOptions resetFunction={resetAfterTradeComplete} />
        ) : (
          <>
            <div className={classes.buttonContainer}>
              <ActionButtons
                sellToken={sellToken}
                walletConnected={state.isWalletConnected}
                approveAction={approveAction}
                swapAction={swap}
                finalAction={finalAction}
                transactionType={buyToken === "VITA" ? "Buy" : "Sell"}
                step={state.flags.transactionStep}
                disabled={lockActionButtons}
                disableMessage={disableMessage}
              />
            </div>
            <ProgressBubbles
              stepCount={sellToken === "ETH" || sellToken === "VITA" ? 2 : 3}
              currentStep={state.flags.transactionStep}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default React.memo(BuyTokenModal);
