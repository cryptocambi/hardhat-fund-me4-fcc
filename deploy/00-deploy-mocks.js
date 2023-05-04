const { network } = require("hardhat")
const {
    developmentChains,
    DECIMALS,
    INITIAL_ANSWER,
} = require("../helper-hardhat-config")
const { verify } = require("../utils/verify")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    //const chainId = network.config.chainId

    if (developmentChains.includes(network.config.name)) {
        log("Local network detected: Deploy mock...")
        await deploy("MockV3Aggregator", {
            contract: "MockV3Aggregator",
            from: deployer,
            log: true,
            arg: [DECIMALS, INITIAL_ANSWER],
        })
        log("Mock deployed!")
        log("----------------------------------------")
    }

    module.exports.tags = ["All", "mocks"]
}
