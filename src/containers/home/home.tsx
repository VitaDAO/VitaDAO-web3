import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import { StoreContext } from "../../store/store";
import useStyles from "./homeStyles";
import { LogoText } from "../../components/icons";
import PillLink from "../../components/pillLink/pillLink";

export interface Props {}

function Home(props: Props) {
  const { state } = useContext(StoreContext);
  const { theme } = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...theme });

  const raised = state.data.vita_dao.total_raised.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  const remaining = `${(
    state.data.vita_dao.percentage_remaining * 100
  ).toFixed()}%`;

  return (
    <div className={classes.Home}>
      <LogoText className={classes.logo} />
      <div className={classes.dataContainer}>
        <p className={classes.amount}>{raised}</p>
        <p className={classes.label}>raised</p>
      </div>
      <div className={classes.dataContainer}>
        <p className={classes.amount}>{remaining}</p>
        <p className={classes.label}>remaining</p>
      </div>
      <PillLink label="join the dao" color="grey" path="/join_the_dao" />
    </div>
  );
}

export default React.memo(Home);
