let account;
var connectMetamask = async () => {
    //connecting to metamask
    if (window.ethereum !== "undefined") {
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        account = accounts[0];
    }
}
var connectContract = async () => {
    //connecting to smart contract
    const ABI = [
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "arr",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "prod",
                    "type": "string"
                },
                {
                    "internalType": "int256",
                    "name": "n",
                    "type": "int256"
                },
                {
                    "internalType": "string",
                    "name": "subdate",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "date",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "status",
                    "type": "string"
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
            "name": "carr",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "prod",
                    "type": "string"
                },
                {
                    "internalType": "int256",
                    "name": "n",
                    "type": "int256"
                },
                {
                    "internalType": "string",
                    "name": "subdate",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "date",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "cdate",
                    "type": "string"
                },
                {
                    "internalType": "int256",
                    "name": "budget",
                    "type": "int256"
                },
                {
                    "internalType": "string",
                    "name": "status",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getMyStructs",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "prod",
                            "type": "string"
                        },
                        {
                            "internalType": "int256",
                            "name": "n",
                            "type": "int256"
                        },
                        {
                            "internalType": "string",
                            "name": "subdate",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "date",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "status",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct demoArray.l1[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getconformed",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "prod",
                            "type": "string"
                        },
                        {
                            "internalType": "int256",
                            "name": "n",
                            "type": "int256"
                        },
                        {
                            "internalType": "string",
                            "name": "subdate",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "date",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "cdate",
                            "type": "string"
                        },
                        {
                            "internalType": "int256",
                            "name": "budget",
                            "type": "int256"
                        },
                        {
                            "internalType": "string",
                            "name": "status",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct demoArray.l2[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "n2",
                    "type": "string"
                },
                {
                    "internalType": "int256",
                    "name": "n3",
                    "type": "int256"
                },
                {
                    "internalType": "string",
                    "name": "date",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "x",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                }
            ],
            "name": "push_element",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "prod",
                            "type": "string"
                        },
                        {
                            "internalType": "int256",
                            "name": "n",
                            "type": "int256"
                        },
                        {
                            "internalType": "string",
                            "name": "subdate",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "date",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "cdate",
                            "type": "string"
                        },
                        {
                            "internalType": "int256",
                            "name": "budget",
                            "type": "int256"
                        },
                        {
                            "internalType": "string",
                            "name": "status",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct demoArray.l2",
                    "name": "x",
                    "type": "tuple"
                }
            ],
            "name": "setconformed",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "i",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "k",
                    "type": "uint256"
                }
            ],
            "name": "update",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ];

    const Address = "0x172a8A22a92e02D69a06625231b1084b243535b0";
    window.web3 = new Web3(window.ethereum);
    window.contract = new window.web3.eth.Contract(ABI, Address);
}