import select from '@inquirer/select'
import { mintDeployer, deployAppAndAgency, setTokenURIEngine, changeDeployerTokenURI, rebaseFee } from './mintDeployer'
import { approvePush, stakeSelect } from "./stake"
import chalk from 'chalk'

const userSelect = await select({
    message: "Wrap Protocol Interaction Selection",
    choices: [
        {
            name: "Bid Agency",
            value: "mintDeployer",
            description: "Spend ETH to mint agency to participate"
        },
        {
            name: "Deploy App and Agency",
            value: "deployAppAndAgency",
            description: `Deploy app and agency. This process can be done after ${chalk.blueBright("Mint Deployer")}`
        },
        {
            name: "Manage TokenURI",
            value: "setTokenURIEngine",
            description: `Manage agency's TokenURI.`
        },
        {
            name: "Change Deployer NFT TokenURI",
            value: "changeDeployerTokenURI",
            description: `Change deployer's TokenURI.`
        },
        {
            name: "Exact Fee From Agency",
            value: "rebaseFee",
            description: `Exact fee from agency to deployer NFT ERC6551 Account.`
        },
        {
            name: "Config Stake Push",
            value: "approvePush",
            description: `Config Push to Stake NFT.`
        },
        {
            name: "Stake And Update",
            value: "stakeSelect",
            description: `Stake NFT And Update Pool.`
        }
    ]
})


switch (userSelect) {
    case "mintDeployer":
        await mintDeployer()
        break;

    case "deployAppAndAgency":
        await deployAppAndAgency()
        break;
    
    case "setTokenURIEngine":
        await setTokenURIEngine()
        break;

    case "changeDeployerTokenURI":
        await changeDeployerTokenURI()
        break;

    case "rebaseFee":
        await rebaseFee()
        break;

    case "approvePush":
        await approvePush()
        break;

    case "stakeSelect":
        await stakeSelect()
        break;
        
    default:
        break;
}