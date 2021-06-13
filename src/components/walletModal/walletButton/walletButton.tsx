import React, { useContext } from "react";
import { ThemeContext } from "../../../store/themeContext/themeContext";
import useStyles from "./walletButtonStyles";
import { Check } from "../../icons";

export interface Props {
  name: string;
  connectFunction: () => void;
  selected: boolean;
  activating: boolean;
  active: boolean;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

function WalletButton(props: Props) {
  const { theme } = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...theme });
  const { name, connectFunction, Icon, activating, active } = props;

  const handleClick = () => {
    connectFunction && connectFunction();
  };
  return (
    <button onClick={handleClick} className={classes.WalletButton}>
      <div className={classes.labelContainer}>
        <p className={classes.label}>{activating ? "Connecting..." : name}</p>
        {active && <Check className={classes.check} />}
      </div>
      <div className={classes.iconContainer}>
        <Icon className={classes.icon} />
      </div>
    </button>
  );
}

export default React.memo(WalletButton);
