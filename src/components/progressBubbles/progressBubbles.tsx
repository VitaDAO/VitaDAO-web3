import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./progressBubblesStyles";

export interface Props {
  stepCount: number; // 2 or 3
  currentStep: number; // 1, 2, or 3
}

function ProgressBubbles(props: Props) {
  const { theme } = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...theme });
  const twoBubbles = (
    <>
      <div className={`${classes.bubble} ${classes.oneOfTwo}`}>1</div>
      <div className={classes.lineBig}></div>
      <div className={`${classes.bubble} ${classes.twoOfTwo}`}>2</div>
    </>
  );

  const threeBubbles = (
    <>
      <div className={`${classes.bubble} ${classes.oneOfThree}`}>1</div>
      <div className={`${classes.lineSmall} ${classes.one}`}></div>
      <div className={`${classes.bubble} ${classes.twoOfThree}`}>2</div>
      <div className={`${classes.lineSmall} ${classes.two}`}></div>
      <div className={`${classes.bubble} ${classes.threeOfThree}`}>3</div>
    </>
  );

  return (
    <div className={classes.ProgressBubbles}>
      {props.stepCount === 2 && twoBubbles}
      {props.stepCount === 3 && threeBubbles}
    </div>
  );
}

export default React.memo(ProgressBubbles);
