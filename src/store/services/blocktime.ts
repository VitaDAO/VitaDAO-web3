
const getBlockAverageTime = async (provider: any) => {
    const web3Provider = provider;
    const span = 25
    const times = []
    const currentNumber = await web3Provider.eth.getBlockNumber()
    const firstBlock = await web3Provider.eth.getBlock(currentNumber - span)
    let prevTimestamp = firstBlock.timestamp
  
    for (let i = currentNumber - span + 1; i <= currentNumber; i++) {
      const block = await web3Provider.eth.getBlock(i)
      let time = block.timestamp - prevTimestamp
      prevTimestamp = block.timestamp
      times.push(time)
    }
  
    return Math.round(times.reduce((a, b) => a + b) / times.length)
  }

  export default getBlockAverageTime;