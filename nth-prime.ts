const isPrime = (num: number): boolean => {
  if (num <= 3) return true;
  for (let i = 2; i <= num / 2; i++) {
    if (!(num % i)) return false;
  }
  return true;
};

export function nth(num: number): number {
  let i = 1;
  let prime = 2;
  if (num <= 0) {
    throw 'Prime is not possible';
  }
  while (i <= num) {
    if (isPrime(prime)) {
      i++;
    }
    prime++;
  }
  return prime - 1;
}
