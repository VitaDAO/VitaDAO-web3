import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./applyStyles";
import PillLink from "../../components/pillLink/pillLink";

export interface Props {}

function Apply(props: Props) {
  const { theme } = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...theme });

  return (
    <div className={classes.Apply}>
      <h1 className={classes.title}>apply for funding</h1>
      <p className={classes.subheading}>
        Working to develop longevity therapeutics or novel therapies for age
        related disease? Apply for funding from VitaDAO.
      </p>
      <p className={classes.text}>
        Members provide $50,000 to $1,000,000 in support for projects. If a
        member is interested in funding your project, they can put it up for a
        vote and, if more members vote to support the project than not, during a
        7 day voting period, the fundraise will be approved. The process is
        quick, easy, and we will work with you to structure the investment.
      </p>
      <div className={classes.buttonContainer}>
        <PillLink label="apply now" color="green" path="/apply_now" />
      </div>
    </div>
  );
}

export default React.memo(Apply);
