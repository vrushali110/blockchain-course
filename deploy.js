/*const HDwalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {interface,bytecode} = require('./compile');

const provider = new HDwalletProvider('safe because bind drastic peanut control kiss demise noodle neither boost egg',
'https://goerli.infura.io/v3/8d89f0ca74bb4e4fb06ae31629ba2843'
);

const web3 = new Web3(provider);

const deploy = async () => {
 const accounts = await web3.eth.getAccounts();

 console.log('Attempting to deploy from account',accounts[0]);
    const result = new web3.eth.Contract(JSON.parse(interface))
    .deploy({data:bytecode ,arguments:['HO']})
    .send({ from :accounts[0],gas:'1000000'});
 console.log ('contract deployed to',result.options.address);
 provide.engine.stop();
};

deploy();

*/
const HDwalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDwalletProvider(
  'safe because bind drastic peanut control kiss demise noodle neither boost egg',
  'https://goerli.infura.io/v3/8d89f0ca74bb4e4fb06ae31629ba2843'
);

const web3 = new Web3(provider);

const deploy = async () => {
  try {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
      .deploy({ data: bytecode, arguments: ['HO'] })
      .send({ from: accounts[0], gas: '1000000' });

    console.log('Contract deployed to', result.options.address);
    provider.engine.stop();
  } catch (error) {
    console.error('Error deploying contract:', error);
  }
};

deploy();




