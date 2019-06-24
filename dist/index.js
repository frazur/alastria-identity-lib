"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var alastria_id_1 = require("./alastria-id");
exports.sayHello = alastria_id_1.sayHello;
exports.sayGoodbye = alastria_id_1.sayGoodbye;
exports.setProvider = alastria_id_1.setProvider;
exports.setAccount = alastria_id_1.setAccount;
exports.setContract = alastria_id_1.setContract;
exports.addSubjectPresentationRegistry = alastria_id_1.addSubjectPresentationRegistry;
var transactions_factory_1 = require("./factory/transactions-factory");
exports.getTransactionGenerateAccessToken = transactions_factory_1.getTransactionGenerateAccessToken;
exports.getTransactionCreateAlastriaIdentity = transactions_factory_1.getTransactionCreateAlastriaIdentity;
exports.getTransactionCreateIdentity = transactions_factory_1.getTransactionCreateIdentity;
exports.getTransactionDelegateCall = transactions_factory_1.getTransactionDelegateCall;
exports.getTransactionCheckMessageData = transactions_factory_1.getTransactionCheckMessageData;
exports.getTransactionPayable = transactions_factory_1.getTransactionPayable;
exports.getTransactionForward = transactions_factory_1.getTransactionForward;
exports.getTransactionIsRecover = transactions_factory_1.getTransactionIsRecover;
exports.getTransactionAddSubjectPresentation = transactions_factory_1.getTransactionAddSubjectPresentation;
exports.getTransactionUpdateSubjectPresentation = transactions_factory_1.getTransactionUpdateSubjectPresentation;
exports.getTransactionGetSubjectPresentationStatus = transactions_factory_1.getTransactionGetSubjectPresentationStatus;
exports.getTransactionGetSubjectPresentationList = transactions_factory_1.getTransactionGetSubjectPresentationList;
exports.getTransactionUpdateReceiverPresentation = transactions_factory_1.getTransactionUpdateReceiverPresentation;
exports.getTransactionGetReceiverPresentationStatus = transactions_factory_1.getTransactionGetReceiverPresentationStatus;
exports.getTransactionGetPresentationStatus = transactions_factory_1.getTransactionGetPresentationStatus;
exports.getTransactionAddSubjectCredential = transactions_factory_1.getTransactionAddSubjectCredential;
exports.getTransactionDeleteSubjectCredential = transactions_factory_1.getTransactionDeleteSubjectCredential;
exports.getTransactionGetSubjectCredentialStatus = transactions_factory_1.getTransactionGetSubjectCredentialStatus;
exports.getTransactionUpdateCredentialStatus = transactions_factory_1.getTransactionUpdateCredentialStatus;
exports.getTransactionGetIssuerCredentialStatus = transactions_factory_1.getTransactionGetIssuerCredentialStatus;
exports.getTransactionGetCredentialStatus = transactions_factory_1.getTransactionGetCredentialStatus;
exports.getTransactionAddKey = transactions_factory_1.getTransactionAddKey;
exports.getTransactionRevokePublicKey = transactions_factory_1.getTransactionRevokePublicKey;
exports.getTransactionDeletePublicKey = transactions_factory_1.getTransactionDeletePublicKey;
exports.getTransactionGetCurrentPublicKey = transactions_factory_1.getTransactionGetCurrentPublicKey;
exports.getTransactionGetPublicKeyStatus = transactions_factory_1.getTransactionGetPublicKeyStatus;
var transactionProcess_1 = require("./factory/transactionProcess");
exports.UserIdentity = transactionProcess_1.UserIdentity;
