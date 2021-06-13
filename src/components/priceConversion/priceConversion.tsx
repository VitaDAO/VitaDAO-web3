import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import { StoreContext } from "../../store/store";
import useStyles from "./priceConversionStyles";

export interface Props {
  token: string;
}

function PriceConversionContainer(props: Props) {
  const { theme } = useContext(ThemeContext);
  const { state } = useContext(StoreContext);

  const classes = useStyles({ ...props, ...theme });
  const price = state.prices[`${props.token.toLowerCase()}Price`];

  return (
    <div className={classes.priceConversionContainer}>
      <div>Price</div>
      <div>{`${price} ${props.token} per VITA`}</div>
    </div>
  );
}

export default React.memo(PriceConversionContainer);
