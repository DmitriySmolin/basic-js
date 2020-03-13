class VigenereCipheringMachine {
    constructor(mode) {
        this.mode = mode;
        this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    encrypt(message, key) {

        if (!message || !key) throw new Error();

        let m = message.toUpperCase();
        let k = key.toUpperCase();

        let result = '';

        for (let i = 0, j = 0; i < m.length; i += 1) {

            if (!this.alphabet.includes(m[i])) {
                result += m[i];
                continue;
            }

            let resultIndex = this.alphabet.indexOf(m[i]) + this.alphabet.indexOf(k[j]);

            if (this.alphabet.length - 1 - resultIndex < 0) {
                resultIndex = Math.abs(this.alphabet.length - 1 - resultIndex) - 1;
            } else {
                resultIndex = resultIndex;
            }

            result += this.alphabet[resultIndex];

            j += 1;
            if (j === k.length) j = 0;
        }

        this.mode === false ? result = result.split('').reverse().join('') : result

        return result;
    }

    decrypt(encryptedMessage, key) {

        if (!encryptedMessage || !key) throw new Error();


        let m = encryptedMessage.toUpperCase();
        let k = key.toUpperCase();

        let result = '';

        for (let i = 0, j = 0; i < m.length; i += 1) {

            if (!this.alphabet.includes(m[i])) {
                result += m[i];
                continue;
            }

            let mIdx = this.alphabet.indexOf(m[i]);
            let kIdx = this.alphabet.indexOf(k[j]);

            let resultIndex = 1 + (mIdx > kIdx) ? mIdx - kIdx : null;

            if (resultIndex < 0) resultIndex = this.alphabet.length + resultIndex;

            result += this.alphabet[resultIndex];

            j += 1;
            if (j === k.length) j = 0;
        }

        this.mode === false ? result = result.split('').reverse().join('') : result


        return result;
    }
}

module.exports = VigenereCipheringMachine;