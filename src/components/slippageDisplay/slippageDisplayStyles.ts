import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./slippageDisplay";

const useStyles = makeStyles(() =>
	createStyles({
		SlippageDisplay: {
			width: "100%",
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
			color: (style: Theme & Props) => style.textColor,
			margin: "auto",
			font: (style: Theme & Props) => style.typography.p3,
		},
		slippageTextBox: {
			display: "flex",
		},
		slippageAmountButton: {
			backgroundColor: "transparent",
			border: "2px solid var(--grey3)",
			borderRadius: "2rem",
			padding:"1rem",
			color: (style: Theme & Props) => style.textColor,
			"&:hover": {
				filter: "brightness(1.2)",
			},
		},
		questionMarkContainer: {
			position: "relative",
			width: "2.5rem",
			height: "2.5rem",
			margin: "auto auto auto 1rem",
		},
		questionMark: {
			fill: "gray",
			width: "2rem",
			height: "2rem",
			margin: "auto",
		},
	})
);

export default useStyles;
