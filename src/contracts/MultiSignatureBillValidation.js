import { ethers } from 'ethers';

const abi = [[
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_owner2",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_owner3",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_billId",
                "type": "uint256"
            }
        ],
        "name": "approveBill",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "billCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "bills",
        "outputs": [
            {
                "internalType": "string",
                "name": "billData",
                "type": "string"
            },
            {
                "internalType": "bool",
                "name": "isApprovedByOwner1",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "isApprovedByOwner2",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "isApprovedByOwner3",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_billId",
                "type": "uint256"
            }
        ],
        "name": "isBillApproved",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "isOwner",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner1",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner2",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner3",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_billData",
                "type": "string"
            }
        ],
        "name": "uploadBill",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]];
const contractAddress = '0x6d791488bd2B4ae7391037aD3F492C89f793F01D'; // Replace with the actual contract address

const provider = window.ethereum ? new ethers.providers.Web3Provider(window.ethereum) : null;
if (provider) {
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
} else {
    console.error("Ethereum provider not available. Make sure you're connected to an Ethereum wallet.");
}
export default contract;
