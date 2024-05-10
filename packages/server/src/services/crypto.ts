import crypto from "node:crypto";

/**
  Länge des mit dem scrypt-Algorithmus erzeugten Schlüssels in Bytes.
*/
const SCRYPT_KEY_LENGTH = 64;

/**
  Länge des im scrypt-Algorithmus verwendeten Salts in Bytes.
*/
const SCRYPT_SALT_LENGTH = 16;

/**
  Erzeugt einen abgeleiteten Schlüssel mit dem scrypt-Algorithmus.
*/
const scrypt = (password: string, salt: Buffer) => {
  return new Promise<Buffer>((resolve, reject) => {
    crypto.scrypt(password, salt, SCRYPT_KEY_LENGTH, (err, derivedKey) => {
      if(err) {
        return reject(err);
      }

      resolve(derivedKey);
    });
  });
};

/**
  Erzeugt einen Passwort-Hash mit dem scrypt-Algorithmus.
*/
export const hashPassword = async (password: string) => {
  const salt = crypto.randomBytes(SCRYPT_SALT_LENGTH);
  const key = await scrypt(password, salt);

  const hash = Buffer.concat([
    salt,
    key
  ]);

  return hash.toString("hex");
};

/**
  Vergleicht das angegebene Passwort mit einem Hash. 
*/
export const verifyPassword = async (password: string, hash: string) => {
  const buffer = Buffer.from(hash, "hex");

  const salt = buffer.subarray(0, SCRYPT_SALT_LENGTH);
  const originalKey = buffer.subarray(SCRYPT_SALT_LENGTH);
  const comparisonKey = await scrypt(password, salt);

  return crypto.timingSafeEqual(originalKey, comparisonKey);
};
