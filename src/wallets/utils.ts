const isMetamaskEnabled: () => boolean = () => {
  try {
    if ((window as any).ethereum) {
      if ((window as any).ethereum.isMetaMask === true) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } catch (error) {
    console.log(
      `Something went wrong while checking MetaMask installation. \nError => ${error}`
    );
    return false;
  }
};

const enableAccount = async (provider: any) => {
  return await provider.enable();
};

export { isMetamaskEnabled, enableAccount };
