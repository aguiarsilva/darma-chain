<<<<<<< HEAD
const ChainUtil = require('../chain-util');
const { INITIAL_BALANCE } = require('../config');

class Wallet {
    constuctor(){
        this.balance = INITIAL_BALANCE;
        this.keyPair = ChainUtil.genKeyPair();
        this.publicKey = this.keyPair.getPublic().encode('hex');
    }

    toString() {
        return `Wallet -
        publicKey : ${this.publicKey.toString}
        balance   : ${this.balance}`
      }

      sign(dataHash) {
          return this.keyPair.sign(dataHash);
      }
}

=======
const ChainUtil = require('../chain-util');
const { INITIAL_BALANCE } = require('../config');

class Wallet {
    constuctor(){
        this.balance = INITIAL_BALANCE;
        this.keyPair = ChainUtil.genKeyPair();
        this.publicKey = this.keyPair.getPublic().encode('hex');
    }

    toString() {
        return `Wallet -
        publicKey : ${this.publicKey.toString}
        balance   : ${this.balance}`
      }

      sign(dataHash) {
          return this.keyPair.sign(dataHash);
      }
}

>>>>>>> cdc5d704096711c07929c6bde882e76182cc8694
module.exports = Wallet;