---
title: "The Universe"
date: "02-04-2022"
author: "FedericoTorres"
github: "federicotorres233"
---

## The universe

The **universe** is all of space and time and their contents, including _planets_, _stars_, _galaxies_, and all other forms of matter and energy.
The **Big Bang theory** is the prevailing cosmological description of the development of the universe. According to this theory, space and time emerged together aproximately **13.787** billion years ago, and the universe has been expanding ever since. While the spatial size of the entire universe is unknown, it is possible to measure the size of the observable universe, which is approximately **93 billion** light-years in diameter.

---

### Coding example

:bulb: _To set up a python environment for coding go to this page_

Use `cosmo.age` to get the age of the universe

```py
from astropy.cosmology import WMAP9 as cosmo

cosmo.age(0)
```

That should output the following:

`<Quantity 13.76889912 Gyr>`
