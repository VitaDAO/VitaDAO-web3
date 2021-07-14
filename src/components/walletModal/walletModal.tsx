import React, { useContext } from 'react';
import useStyles from './walletModalStyles';
import WalletButton from './walletButton/walletButton';
import ClickAwayListener from 'react-click-away-listener';
import { ThemeContext } from '../../store/themeContext/themeContext';
import { useWallets } from '../../store/walletContext/WalletContext';

export interface Props {}

function WalletModal(props: Props) {
	// const [activatingConnector, setActivatingConnector] = useState<any>();
	const { theme } = useContext(ThemeContext);
	const { setShowWalletModal, wallets } = useWallets();
	const classes = useStyles({ ...props, ...theme });

	const handleClickAway = () => {
		setShowWalletModal(false);
	};

	const buttons = wallets.map((wallet) => (
		<WalletButton
			key={wallet.name}
			connectFunction={wallet.connectFunction}
			selected={wallet.selected}
			activating={wallet.activating}
			active={wallet.active}
			name={wallet.name}
			Icon={wallet.icon}
		/>
	));

	return (
		<div className={classes.overlay}>
			<ClickAwayListener onClickAway={handleClickAway}>
				<div className={classes.WalletModal}>
					<div className={`${classes.container} ${classes.text}`}>
						<h2 className={classes.title}>Connect Wallet</h2>
						<h4 className={classes.secondaryTitle}>
							Please connect your wallet to continue.
						</h4>
					</div>
					<div className={`${classes.container} ${classes.button}`}>
						{buttons}
					</div>

					{/* <div className={classes.connectButtonContainer}>
            <button
              disabled={!props.canConnect}
              className={classes.button}
              onClick={props.handleConnect}
            >
              Connect
            </button>
            <button className={classes.button} onClick={props.disconnectWallet}>
              Disconnect
            </button>
          </div> */}
				</div>
			</ClickAwayListener>
		</div>
	);
}

export default React.memo(WalletModal);
