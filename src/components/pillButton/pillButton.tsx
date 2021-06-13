import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./pillButtonStyles";
import { Spinner, Success, Fail } from "../icons/ui";

export interface Props {
  color: string;
  label: string;
  clickFunction: any;
  small?: boolean;
  disabled?: boolean;
  pending?: boolean;
  success?: boolean;
  fail?: boolean;
}

function PillButton(props: Props) {
  const { theme } = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...theme });
  const { label, clickFunction, disabled } = props;
  return (
    <button
      disabled={disabled}
      onClick={clickFunction}
      className={classes.PillButton}
    >
      {label}

      {props.pending && (
        <Spinner
          key={"pending"}
          className={`${classes.icon} ${classes.rotate}`}
        />
      )}
      {props.success && <Success key={"success"} className={classes.icon} />}
      {props.fail && <Fail key={"fail"} className={classes.icon} />}
    </button>
  );
}

export default React.memo(PillButton);
