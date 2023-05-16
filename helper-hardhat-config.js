const networkConfig = {
    11155111: {
        name: "sepolia",
        ethUsdPriceFeed: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419"
    },
    43114: {
        name: "avalanche",
        ethUsdPriceFeed: "0x976B3D034E162d8bD72D6b9C989d545b839003b0"
    },
    31337: {
        name: "localhost",
    },

}

const developmentChains = ["hardhat", "localhost"]

module.exports = {
    networkConfig,
    developmentChains,
}