#include <bits/stdc++.h>
#define all(x) x.begin(),x.end()
#define ff first
#define ss second


vector<bool> generate_primes(auto SIZE) {
  auto sieve = vector<bool>(SIZE, true);
  auto primes = vi();

  for (size_t i = 2; i < SIZE; i++) {
    if (sieve[i]) {
      for (size_t j = i * i; j < SIZE; j += i) {
        sieve[j] = false;
      }
      primes.push_back(i);
    }
  }
  return primes;
}

int main(int argc, char const *argv[]) {

  return 0;
}
