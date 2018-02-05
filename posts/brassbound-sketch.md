---
title: "Brassbound, A Usable Crypto Library"
date: "January 31st, 2018"
---

What if crypto libraries actually tried to help the developer using them, instead of being an incomprehensible pile of functions?

```
(encrypt "attack at dawn" "super secret password")
=> <ciphertext>

(decrypt <ciphertext> "super secret password")
=> "attack at dawn"
```

```
(encrypt "yellow submarine" "letmein" :cipher DES)
warning: DES is known to be insecure, consider using a more secure cipher, such as AES

(encrypt "yellow submarine" "letmein" :block-size 64)
warning: A block size of 64 is too small to be secure for most ciphers, consider using 256 or 128
```

```
(encrypt "attack at dawn" "correct-password")
=> <ciphertext>

(decrypt <ciphertext> "incorrect-password")
error: incorrect password or corrupted data
```

Needs to be able to specify different behaviors for handling information passed with the encryption, e.g. the IV.

Different library for message auth, more advanced formats?

## syntax

encrypt source key {cipher mode block-size iv nonce padding key-derivation}

## functions

random-block [size]
