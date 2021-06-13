import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./footerStyles";

export interface Props {}

function Footer(props: Props) {
  const { theme } = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...theme });

  return (
    <div className={classes.Footer}>
      <span>
        © 2021 VitaDAO. All rights reserved.{" "}
        <a className={classes.link} href="/">
          Imprint
        </a>
      </span>
    </div>
  );
}

export default React.memo(Footer);
