import { config } from '../config';
import { transactionFactory } from './transactionFactory'

/**
 * function addKey(string memory publicKey, address subject) public
 * @param web3
 * @param publicKey
 * @param subject
 */
export function addKey(web3, publicKey) {
  let transaction = Object.assign({}, config.basicTransaction)
  let delegatedData = web3.eth.abi.encodeFunctionCall(
    config.contractsAbi["AlastriaPublicKeyRegistry"]["addKey"], 
    [publicKey]);
  transaction.data = delegated(web3, delegatedData);
  transaction.to = config.alastriaIdentityManager;
  transaction.gasLimit = 600000;
  return transaction
}

/**
 * function revokePublicKey(string memory publicKey) public
 * @param web3
 * @param publicKey
 */
export function revokePublicKey(web3, publicKey) {
  let transaction = Object.assign({}, config.basicTransaction)
  let delegatedData = web3.eth.abi.encodeFunctionCall(
    config.contractsAbi["AlastriaPublicKeyRegistry"]["revokePublicKey"], [publicKey]);
  transaction.data = delegated(web3, delegatedData);
  transaction.to = config.alastriaIdentityManager;
  transaction.gasLimit = 600000;
  return transaction;
}

/**
 * function deletePublicKey(string memory publicKey) public
 * @param web3
 * @param publicKey
 */
export function deletePublicKey(web3, publicKey) {
  let transaction = Object.assign({}, config.basicTransaction)
  let delegatedData = web3.eth.abi.encodeFunctionCall(
    config.contractsAbi["AlastriaPublicKeyRegistry"]["deletePublicKey"],
    [publicKey]);
  transaction.data = delegated(web3, delegatedData);
  transaction.to = config.alastriaIdentityManager;
  transaction.gasLimit = 600000;
  return transaction;
}

/**
 * function getCurrentPublicKey(address subject) view public validAddress(subject) returns (string)
 * @param web3
 * @param subject
 */
export function getCurrentPublicKey(web3, subject) {
  let transaction = Object.assign({}, config.basicTransaction)
  transaction.data = web3.eth.abi.encodeFunctionCall(
    config.contractsAbi["AlastriaPublicKeyRegistry"]["getCurrentPublicKey"],
    [subject]);
  transaction.to = config.alastriaPublicKeyRegistry;
  transaction.gasLimit = 600000;
  return transaction;
}

/**
 * function getPublicKeyStatus(address subject, string memory publicKey) view public validAddress(subject)
 * @param web3
 * @param subject
 * @param publicKey
 */
export function getPublicKeyStatus(web3, subject, publicKey) {
  let transaction = Object.assign({}, config.basicTransaction)
  transaction.data = web3.eth.abi.encodeFunctionCall(
    config.contractsAbi["AlastriaPublicKeyRegistry"]["getPublicKeyStatus"],
    [subject, publicKey]);
  transaction.to = config.alastriaPublicKeyRegistry;
  transaction.gasLimit = 600000;
  return transaction;
}

/**
 * function getPublicKeyStatusDecoded(address subject, string memory publicKey)
 * @param web3
 * @param subject
 * @param publicKey
 */
export function getPublicKeyStatusDecodedAsJSON(web3, subject, publicKey) {
  let publicKeyStatusTx = getPublicKeyStatus(web3, subject, publicKey);
  
  return new Promise((resolve, reject) => {
    web3.eth.call(publicKeyStatusTx)
      .then(data => {
        let publicKeyStatusDecoded = web3.eth.abi.decodeParameters(["bool","uint8", 'uint', 'uint'], data)
        let publicKeyStatusDecodedAsJSON = { 
          "exists": publicKeyStatusDecoded['0'],
          "status":publicKeyStatusDecoded['1'],
          "startDate": parseInt(publicKeyStatusDecoded['2']),
          "endDate": parseInt(publicKeyStatusDecoded['3'])
        }
        resolve(publicKeyStatusDecodedAsJSON)
      })
    })
}

/**
 * function isPublicKeyValidForDate(address subject, string memory publicKey, date as int8)
 * @param web3
 * @param subject
 * @param publicKey
 * @param date in milliseconds
 */
export function isPublicKeyValidForDate(web3, subject, publicKey, date) {
  return new Promise((resolve, reject) => {
    transactionFactory.publicKeyRegistry.getPublicKeyStatusDecodedAsJSON(web3, subject, publicKey)
      .then(publicKeyStatusAsJSON => {
        let existsPublicKey = publicKeyStatusAsJSON['exists'];

        if (existsPublicKey) {
          let isUserDateBetweenDates = _isUserDateBetweeenDates(date, publicKeyStatusAsJSON['startDate'], publicKeyStatusAsJSON['endDate'])
          resolve(isUserDateBetweenDates)
        } else {
          reject(new Error("Public key does not exist"));
        }
      })
    })
}

/**
 * function _isUserDateBetweeenDates(int userDate, int publicKeyStartDate, int publicKeyEnddate)
 * @param userDate in milliseconds
 * @param publicKeyStartDate in milliseconds
 * @param publicKeyEndDate in milliseconds. If equals to 0, there is no enddate
 */
function _isUserDateBetweeenDates(userDate, publicKeyStartDate, publicKeyEndDate) {
  return (userDate >= publicKeyStartDate && userDate <= publicKeyEndDate);
}


function delegated(web3, delegatedData) {
  return web3.eth.abi.encodeFunctionCall(
    config.contractsAbi["AlastriaIdentityManager"]["delegateCall"],
    [config.alastriaPublicKeyRegistry, 0, delegatedData])
}
