require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remain quality hunt gloom obscure suit'; 
let testAccounts = [
"0xb03cb32deccd29d5b69819a463908aad482632d7c07095c7685759423c828226",
"0xf7b5ea9513cbb12601cdf9b50aeb867bcaf042959902f2571bb10bbaf05bc36c",
"0xd701a9d0739560a509a9852e7525e0c86fc5af7f871769f999f3a01d8db4de40",
"0xb6b9073483296430a1c90bcbd7aa77b635c04f37c81d74534883096ca72885e3",
"0x8b4e7f84697334a3a0d96eb7562a1ac5c35c8c375591e1815d85a4a29663ece2",
"0x999af09ab11ae13469f85c0d64c6e0dae9896a9e5822531dc922d8e48d5e72ed",
"0x202e0551fb65a7a44e379bf7c42e26f5fcc00ccbcbfc9f5dc5717a87a781dc7b",
"0xf1ee6108fd79e40d8521751f0c75e12d5e4aaa3ded65a234a0e839239eb63b45",
"0xcd4f8e0ff417db274d0b47a39d81b0094caaf4fd817da7048834ce927a5976ff",
"0xe030ba78c7239023df97de8b3392b7d87e6716727a892a3a7e00dc82ed12d01d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

