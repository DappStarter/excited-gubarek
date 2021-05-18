require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth oven proof gesture nasty food gentle'; 
let testAccounts = [
"0x74b21805bf4c611be212abfb7c03e940c346fa47bb5a69d5aa9797053b67c1d4",
"0xae079d0b6b2fe2fe76cd02e4d325b0074b4d75b53569c4c47a9fc679c046c3d8",
"0xd1fe54cf5da465297c99cef3c2927d906ae7c8d00efdd70098f15c1260a283ee",
"0x275275e91173da31f6cd7f3b70f5efca330eb9175663d7763701ee1a8609ff7e",
"0xa61b934b452e1e30869a4a04dc34f08fa326d36df13d90af8592b38c40466f71",
"0x82f1680599f37afa602251f94dc442a9944f0cab0f95c5e3d4d4261c3a092b0a",
"0x6df43a71f33aa9f1ad6f130aefdbc0aec2318256e8da0672414a1208277de794",
"0x0f7e30faa323d949676f40ff19c80c96211bd2d59068437dfb89a355a21037e2",
"0x0b7d5d08f9024449bf46d61d65a327fb65e6bcfc7bcad9576c73fd4d7be91d0f",
"0xee9a0c37db86904404163c869ddf8be15b4c164e67342a6d94c56a67de8c5fd4"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
