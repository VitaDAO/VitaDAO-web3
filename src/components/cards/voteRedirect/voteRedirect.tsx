import React, { useContext } from "react";
import { ThemeContext } from "../../../store/themeContext/themeContext";
import { StoreContext } from "../../../store/store";
import useStyles from "./voteRedirectStyles";
import { Link } from "react-router-dom";
import PillButton from "../../pillButton/pillButton";

export interface Props {}

function VoteRedirect(props: Props) {
  const { state } = useContext(StoreContext);
  const { theme } = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...theme });

  return (
    <div className={classes.BoilerPlate}>
      {!state.isWalletConnected ? (
        <PillButton
          color={"grey"}
          label={"please connect wallet"}
          clickFunction={null}
          disabled={true}
          pending={false}
          success={false}
          fail={false}
        />
      ) : (
        <p>
          In order to vote you need to{" "}
          <Link className={classes.link} to="/my_wallet">
            {" "}
            STAKE{" "}
          </Link>
          your tokens
        </p>
      )}
    </div>
  );
}

export default React.memo(VoteRedirect);
