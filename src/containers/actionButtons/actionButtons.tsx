import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./actionButtonsStyles";
import PillButton from "../../components/pillButton/pillButton";
import { StoreContext } from "../../store/store";

export interface Props {
  walletConnected: boolean;
  approveAction: any;
  finalAction: any;
  transactionType: string;
  sellToken: string;
  swapAction: any;
  step: number;
  disabled: boolean;
  disableMessage: string;
}

function ActionButtons(props: Props) {
  const {
    state: {
      flags: {
        swapPending,
        swapSuccess,
        swapFail,
        mintApprovalPending,
        burnApprovalPending,
        mintApprovalSuccess,
        burnApprovalSuccess,
        mintApprovalFail,
        burnApprovalFail,
        mintPending,
        mintFail,
        mintSuccess,
        burnPending,
        burnFail,
        burnSuccess,
      },
    },
  } = useContext(StoreContext);
  const { theme } = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...theme });
  const {
    approveAction,
    finalAction,
    walletConnected,
    transactionType,
    swapAction,
    step,
    disabled,
    disableMessage,
  } = props;

  return (
    <div className={classes.ActionButtons}>
      {disabled ? (
        <PillButton
          color={"grey"}
          clickFunction={null}
          onMouseEnterFunction={null}
          onMouseLeaveFunction={null}
          label={disableMessage}
          disabled={true}
          pending={false}
          success={false}
          fail={false}
        />
      ) : (
        <>
          {step <= 1 && (
            <PillButton
              color={"white"}
              clickFunction={approveAction}
              onMouseEnterFunction={null}
              onMouseLeaveFunction={null}
              label={"Approve"}
              disabled={
                disabled ||
                !walletConnected ||
                mintApprovalPending ||
                burnApprovalPending
              }
              pending={mintApprovalPending || burnApprovalPending}
              success={mintApprovalSuccess || burnApprovalSuccess}
              fail={mintApprovalFail || burnApprovalFail}
            />
          )}

          {step === 2 && (
            <PillButton
              color={"white"}
              clickFunction={swapAction}
              onMouseEnterFunction={null}
              onMouseLeaveFunction={null}
              label={"Swap"}
              disabled={disabled || !walletConnected || swapPending}
              pending={swapPending}
              success={swapSuccess}
              fail={swapFail}
            />
          )}
          {step === 3 && (
            <PillButton
              color={"white"}
              clickFunction={finalAction}
              onMouseEnterFunction={null}
              onMouseLeaveFunction={null}
              label={`${transactionType} VITA`}
              disabled={
                disabled || !walletConnected || mintPending || burnPending
              }
              pending={mintPending || burnPending}
              success={mintSuccess || burnSuccess}
              fail={mintFail || burnFail}
            />
          )}
        </>
      )}
    </div>
  );
}

export default ActionButtons;
