const normal = '01234567890_abcdefghijklmnopqrstuvwxyz';
const cipher = '01234567890_zyxwvutsrqponmlkjihgfedcba';

export function encode(plainText: string): string {
  return plainText
    .toLowerCase()
    .split('')
    .map((letter) => cipher[normal.indexOf(letter)])
    .join('')
    .replace(/(.{5})/g, '$1 ')
    .trim();
}
export function decode(cipherText: string): string {
  return cipherText
    .toLowerCase()
    .replace(/\s/g, '')
    .split('')
    .map((letter) => normal[cipher.indexOf(letter)])
    .join('');
}
