window.__RUNTIME_CONFIG__ = {
  INDEXER__URL: "http://localhost:8000",
  CHAINBRIDGE: {
    chains: [
      {
        domainId: 3,
        networkId: 83,
        name: "Meter - Testnet",
        decimals: 18,
        bridgeAddress: "0xBFa1654352e2E3A75F4F59572afcbA3e3E694572",
        erc20HandlerAddress: "0x43727c35e6B91f8564240F6627449a747B066647",
        rpcUrl: "https://rpctest.meter.io",
        type: "Ethereum",
        nativeTokenSymbol: "MTR",
        tokens: [
          {
            address: "0xb518b34D9ffD86931d3b6fe0D8c4Ae62E0ccE07c",
            name: "WETH",
            symbol: "WETH",
            imageUri: "WETHIcon",
            resourceId:
              "0x000000000000000000000000000000e389d61c11e5fe32ec1735b3cd38c69500",
          },
        ],
      },
      {
        domainId: 1,
        networkId: 4,
        name: "Ethereum - Rinkeby",
        decimals: 18,
        bridgeAddress: "0x48a23CB0a361D906BD52BBE6c1eaa8c7eF5Fe8dA",
        erc20HandlerAddress: "0x1d14Bc9615cD06cAa7d04dab2AccBdd7cbbc1861",
        rpcUrl: "https://rinkeby.infura.io/v3/399a938ed62f49549742560a06c076d5",
        type: "Ethereum",
        nativeTokenSymbol: "ETH",
        tokens: [
          {
            address: "0xD6e761838cC5F94e1C2453331ed48DFfaE8c019B",
            name: "WETH",
            symbol: "WETH",
            imageUri: "WETHIcon",
            resourceId:
              "0x000000000000000000000000000000e389d61c11e5fe32ec1735b3cd38c69500",
          },
        ],
      },
      {
        domainId: 5,
        networkId: 1287,
        name: "Ethereum - Moonbase Alpha",
        decimals: 18,
        bridgeAddress: "0x0515703147C18817a0E73339fbA56AB362b0D1D9",
        erc20HandlerAddress: "0x138924B369421B87176CfFbA55634E70AE105E98",
        rpcUrl: "https://rpc.api.moonbase.moonbeam.network",
        type: "Ethereum",
        nativeTokenSymbol: "ETH",
        tokens: [
          {
            address: "0x4dCb66025F8cB55a0D46c8D3BA9f974863e7E0eE",
            name: "WETH",
            symbol: "WETH",
            imageUri: "WETHIcon",
            resourceId:
              "0x000000000000000000000000000000e389d61c11e5fe32ec1735b3cd38c69500",
          },
        ],
      },
    ],
  },
};
