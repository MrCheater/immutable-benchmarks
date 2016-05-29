##Seamless-immutable vs Immutable.js vs Mori
### REPEATS = 1000
#### get
```javascript
Object Native:                0 ms
Object Seamless-immutable.js: 0 ms
Object Immutable.js:          3 ms
Object Mori.js:               3 ms
Array Native:                 1 ms
Array Seamless-immutable.js:  0 ms
Array Immutable.js:           2 ms
Array Mori.js:                4 ms
```
#### getIn
```javascript
Object Native. GetIn:         0 ms
Object Seamless-immutable:    0 ms
Object Immutable.js:          2 ms
Object Mori.js:               3 ms
Array Native:                 0 ms
Array Seamless-immutable.js:  1 ms
Array Immutable.js:           2 ms
Array Mori.js:                3 ms
```
#### set
```javascript
Object Native:                1 ms
Object Seamless-immutable.js: 9 ms
Object Immutable.js:          4 ms
Object Mori.js:               2 ms
Array Native:                 1 ms
Array Seamless-immutable.js:  16 ms
Array Immutable.js:           3 ms
Array Mori.js:                3 ms
```
#### setIn
```javascript
Object Native:                2 ms
Object Seamless-immutable.js: 11 ms
Object Immutable.js:          5 ms
Object Mori.js:               5 ms
Array Native:                 1 ms
Array Seamless-immutable.js:  29 ms
Array Immutable.js:           5 ms
Array Mori.js:                1 ms
```
### REPEATS = 5000
#### get
```javascript
Object Native:                0 ms
Object Seamless-immutable.js: 0 ms
Object Immutable.js:          1 ms
Object Mori.js:               0 ms
Array Native:                 1 ms
Array Seamless-immutable.js:  0 ms
Array Immutable.js:           1 ms
Array Mori.js:                0 ms
```
#### getIn
```javascript
Object Native. GetIn:         0 ms
Object Seamless-immutable:    1 ms
Object Immutable.js:          1 ms
Object Mori.js:               3 ms
Array Native:                 0 ms
Array Seamless-immutable.js:  1 ms
Array Immutable.js:           2 ms
Array Mori.js:                1 ms
```
#### set
```javascript
Object Native:                3 ms
Object Seamless-immutable.js: 24 ms
Object Immutable.js:          23 ms
Object Mori.js:               2 ms
Array Native:                 2 ms
Array Seamless-immutable.js:  62 ms
Array Immutable.js:           3 ms
Array Mori.js:                1 ms
```
#### setIn
```javascript
Object Native:                6 ms
Object Seamless-immutable.js: 47 ms
Object Immutable.js:          8 ms
Object Mori.js:               3 ms
Array Native:                 5 ms
Array Seamless-immutable.js:  113 ms
Array Immutable.js:           8 ms
Array Mori.js:                3 ms
```
### REPEATS = 10000
#### get
```javascript
Object Native:                0 ms
Object Seamless-immutable.js: 1 ms
Object Immutable.js:          0 ms
Object Mori.js:               2 ms
Array Native:                 1 ms
Array Seamless-immutable.js:  1 ms
Array Immutable.js:           6 ms
Array Mori.js:                3 ms
```
#### getIn
```javascript
Object Native. GetIn:         1 ms
Object Seamless-immutable:    0 ms
Object Immutable.js:          6 ms
Object Mori.js:               3 ms
Array Native:                 2 ms
Array Seamless-immutable.js:  2 ms
Array Immutable.js:           8 ms
Array Mori.js:                5 ms
```
#### set
```javascript
Object Native:                6 ms
Object Seamless-immutable.js: 47 ms
Object Immutable.js:          47 ms
Object Mori.js:               3 ms
Array Native:                 6 ms
Array Seamless-immutable.js:  122 ms
Array Immutable.js:           11 ms
Array Mori.js:                5 ms
```
#### setIn
```javascript
Object Native:                10 ms
Object Seamless-immutable.js: 95 ms
Object Immutable.js:          10 ms
Object Mori.js:               7 ms
Array Native:                 10 ms
Array Seamless-immutable.js:  231 ms
Array Immutable.js:           20 ms
Array Mori.js:                8 ms
```
### REPEATS = 50000
#### get
```javascript
Object Native:                1 ms
Object Seamless-immutable.js: 1 ms
Object Immutable.js:          3 ms
Object Mori.js:               4 ms
Array Native:                 2 ms
Array Seamless-immutable.js:  3 ms
Array Immutable.js:           2 ms
Array Mori.js:                4 ms
```
#### getIn
```javascript
Object Native. GetIn:         0 ms
Object Seamless-immutable:    1 ms
Object Immutable.js:          8 ms
Object Mori.js:               9 ms
Array Native:                 1 ms
Array Seamless-immutable.js:  1 ms
Array Immutable.js:           11 ms
Array Mori.js:                10 ms
```
#### set
```javascript
Object Native:                21 ms
Object Seamless-immutable.js: 229 ms
Object Immutable.js:          229 ms
Object Mori.js:               10 ms
Array Native:                 19 ms
Array Seamless-immutable.js:  592 ms
Array Immutable.js:           25 ms
Array Mori.js:                11 ms
```
#### setIn
```javascript
Object Native:                42 ms
Object Seamless-immutable.js: 473 ms
Object Immutable.js:          44 ms
Object Mori.js:               18 ms
Array Native:                 40 ms
Array Seamless-immutable.js:  1149 ms
Array Immutable.js:           70 ms
Array Mori.js:                18 ms
```
### REPEATS = 100000
#### get
```javascript
Object Native:                0 ms
Object Seamless-immutable.js: 0 ms
Object Immutable.js:          8 ms
Object Mori.js:               17 ms
Array Native:                 2 ms
Array Seamless-immutable.js:  3 ms
Array Immutable.js:           11 ms
Array Mori.js:                13 ms
```
#### getIn
```javascript
Object Native. GetIn:         0 ms
Object Seamless-immutable:    1 ms
Object Immutable.js:          38 ms
Object Mori.js:               24 ms
Array Native:                 1 ms
Array Seamless-immutable.js:  4 ms
Array Immutable.js:           40 ms
Array Mori.js:                26 ms
```
#### set
```javascript
Object Native:                42 ms
Object Seamless-immutable.js: 467 ms
Object Immutable.js:          467 ms
Object Mori.js:               19 ms
Array Native:                 38 ms
Array Seamless-immutable.js:  1210 ms
Array Immutable.js:           53 ms
Array Mori.js:                26 ms
```
#### setIn
```javascript
Object Native:                88 ms
Object Seamless-immutable.js: 965 ms
Object Immutable.js:          103 ms
Object Mori.js:               40 ms
Array Native:                 79 ms
Array Seamless-immutable.js:  2471 ms
Array Immutable.js:           163 ms
Array Mori.js:                41 ms
```
### REPEATS = 500000
#### get
```javascript
Object Native:                0 ms
Object Seamless-immutable.js: 1 ms
Object Immutable.js:          20 ms
Object Mori.js:               35 ms
Array Native:                 6 ms
Array Seamless-immutable.js:  9 ms
Array Immutable.js:           31 ms
Array Mori.js:                43 ms
```
#### getIn
```javascript
Object Native. GetIn:         0 ms
Object Seamless-immutable:    1 ms
Object Immutable.js:          156 ms
Object Mori.js:               89 ms
Array Native:                 7 ms
Array Seamless-immutable.js:  10 ms
Array Immutable.js:           179 ms
Array Mori.js:                102 ms
```
#### set
```javascript
Object Native:                210 ms
Object Seamless-immutable.js: 2318 ms
Object Immutable.js:          2339 ms
Object Mori.js:               77 ms
Array Native:                 191 ms
Array Seamless-immutable.js:  5777 ms
Array Immutable.js:           240 ms
Array Mori.js:                63 ms
```
#### setIn
```javascript
Object Native:                417 ms
Object Seamless-immutable.js: 4812 ms
Object Immutable.js:          497 ms
Object Mori.js:               176 ms
Array Native:                 396 ms
Array Seamless-immutable.js:  12412 ms
Array Immutable.js:           781 ms
Array Mori.js:                174 ms
```
### REPEATS = 1000000
#### get
```javascript
Object Native:                0 ms
Object Seamless-immutable.js: 1 ms
Object Immutable.js:          35 ms
Object Mori.js:               70 ms
Array Native:                 12 ms
Array Seamless-immutable.js:  15 ms
Array Immutable.js:           49 ms
Array Mori.js:                85 ms
```
#### getIn
```javascript
Object Native. GetIn:         1 ms
Object Seamless-immutable:    1 ms
Object Immutable.js:          300 ms
Object Mori.js:               177 ms
Array Native:                 14 ms
Array Seamless-immutable.js:  17 ms
Array Immutable.js:           343 ms
Array Mori.js:                204 ms
```
#### set
```javascript
Object Native:                420 ms
Object Seamless-immutable.js: 4610 ms
Object Immutable.js:          4644 ms
Object Mori.js:               123 ms
Array Native:                 379 ms
Array Seamless-immutable.js:  12206 ms
Array Immutable.js:           462 ms
Array Mori.js:                125 ms
```
#### setIn
```javascript
Object Native:                834 ms
Object Seamless-immutable.js: 9602 ms
Object Immutable.js:          997 ms
Object Mori.js:               351 ms
Array Native:                 790 ms
Array Seamless-immutable.js:  24776 ms
Array Immutable.js:           1562 ms
Array Mori.js:                345 ms
```
