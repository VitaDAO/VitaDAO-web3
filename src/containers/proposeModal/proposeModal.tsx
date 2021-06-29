import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./proposeModalStyles";
import PillButton from "../../components/pillButton/pillButton";
export interface Props {}

function ProposeModal(props: Props) {
  const { theme } = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...theme });

  return (
    <div className={classes.Propose}>
      <div>
        <h1 className={classes.Header}>Propose</h1>
        <p className={classes.Paragraph}>
          Make proposals to other members of VitaDAO.
        </p>
        <p className={classes.ParagraphAlert}>
          Please reach us with your proposal on discord channel.
        </p>
        {/* <div style={{ margin: "1rem 0" }}>
          <PillButton
            label="propose"
            color="white"
            clickFunction={() =>
              alert("connect your wallet before making a proposal")
            }
          />
        </div> */}
      </div>
    </div>
  );
}

export default React.memo(ProposeModal);
