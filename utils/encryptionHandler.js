import crypto from "crypto";
const secret = process.env.DECRYPT_SECRET;
export const encrypt = (password) => {
  const iv = Buffer.from(crypto.randomBytes(16));
  const cipher = crypto.createCipheriv("aes-256-ctr", Buffer.from(secret), iv);
  const encryptedPassword = Buffer.concat([
    cipher.update(password),
    cipher.final(),
  ]);

  return {
    iv: iv.toString("hex"),
    password: encryptedPassword.toString("hex"),
  };
};

export const decrypt = ({ password, iv }) => {
  const decipher = crypto.createDecipheriv(
    "aes-256-ctr",
    Buffer.from(secret),
    Buffer.from(iv, "hex")
  );
  const decryptedPassword = Buffer.concat([
    decipher.update(Buffer.from(password, "hex")),
    decipher.final(),
  ]);
  return decryptedPassword.toString();
};
