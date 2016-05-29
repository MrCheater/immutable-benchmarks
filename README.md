##Seamless-immutable vs Immutable.js vs Mori
####[get] Object Native (repeats / ms):
```javascript
    1000 / 0
    5000 / 0
   10000 / 0
   50000 / 1
  100000 / 0
  500000 / 1
 1000000 / 0
 5000000 / 4
```
####[get] Object Seamless-immutable.js (repeats / ms):
```javascript
    1000 / 1
    5000 / 0
   10000 / 0
   50000 / 2
  100000 / 1
  500000 / 1
 1000000 / 2
 5000000 / 4
```
####[get] Object Immutable.js (repeats / ms):
```javascript
    1000 / 3
    5000 / 1
   10000 / 2
   50000 / 4
  100000 / 4
  500000 / 14
 1000000 / 30
 5000000 / 144
```
####[get] Object Mori.js (repeats / ms):
```javascript
    1000 / 4
    5000 / 2
   10000 / 2
   50000 / 6
  100000 / 9
  500000 / 35
 1000000 / 68
 5000000 / 327
```
####[get] Array Native (repeats / ms):
```javascript
    1000 / 1
    5000 / 0
   10000 / 1
   50000 / 3
  100000 / 1
  500000 / 6
 1000000 / 12
 5000000 / 60
```
####[get] Array Seamless-immutable.js (repeats / ms):
```javascript
    1000 / 1
    5000 / 0
   10000 / 1
   50000 / 3
  100000 / 3
  500000 / 9
 1000000 / 14
 5000000 / 64
```
####[get] Array Immutable.js (repeats / ms):
```javascript
    1000 / 2
    5000 / 1
   10000 / 7
   50000 / 9
  100000 / 11
  500000 / 30
 1000000 / 54
 5000000 / 243
```
####[get] Array Mori.js (repeats / ms):
```javascript
    1000 / 2
    5000 / 2
   10000 / 5
   50000 / 8
  100000 / 12
  500000 / 44
 1000000 / 87
 5000000 / 406
```
####[getIn] Object Native. GetIn (repeats / ms):
```javascript
    1000 / 0
    5000 / 0
   10000 / 0
   50000 / 1
  100000 / 0
  500000 / 1
 1000000 / 1
 5000000 / 4
```
####[getIn] Object Seamless-immutable (repeats / ms):
```javascript
    1000 / 1
    5000 / 1
   10000 / 0
   50000 / 1
  100000 / 1
  500000 / 1
 1000000 / 2
 5000000 / 4
```
####[getIn] Object Immutable.js (repeats / ms):
```javascript
    1000 / 3
    5000 / 4
   10000 / 7
   50000 / 19
  100000 / 34
  500000 / 153
 1000000 / 297
 5000000 / 1489
```
####[getIn] Object Mori.js (repeats / ms):
```javascript
    1000 / 4
    5000 / 4
   10000 / 7
   50000 / 19
  100000 / 31
  500000 / 139
 1000000 / 267
 5000000 / 1288
```
####[getIn] Array Native (repeats / ms):
```javascript
    1000 / 0
    5000 / 0
   10000 / 2
   50000 / 1
  100000 / 2
  500000 / 7
 1000000 / 15
 5000000 / 72
```
####[getIn] Array Seamless-immutable.js (repeats / ms):
```javascript
    1000 / 2
    5000 / 0
   10000 / 2
   50000 / 3
  100000 / 4
  500000 / 10
 1000000 / 17
 5000000 / 74
```
####[getIn] Array Immutable.js (repeats / ms):
```javascript
    1000 / 4
    5000 / 5
   10000 / 11
   50000 / 25
  100000 / 58
  500000 / 315
 1000000 / 601
 5000000 / 2974
```
####[getIn] Array Mori.js (repeats / ms):
```javascript
    1000 / 4
    5000 / 5
   10000 / 9
   50000 / 32
  100000 / 81
  500000 / 467
 1000000 / 918
 5000000 / 4544
```
####[set] Object Native (repeats / ms):
```javascript
    1000 / 1
    5000 / 3
   10000 / 7
   50000 / 21
  100000 / 42
  500000 / 207
 1000000 / 417
 5000000 / 2073
```
####[set] Object Seamless-immutable.js (repeats / ms):
```javascript
    1000 / 8
    5000 / 24
   10000 / 49
   50000 / 236
  100000 / 462
  500000 / 2322
 1000000 / 4644
 5000000 / 23065
```
####[set] Object Immutable.js (repeats / ms):
```javascript
    1000 / 6
    5000 / 25
   10000 / 49
   50000 / 248
  100000 / 491
  500000 / 2446
 1000000 / 4858
 5000000 / 24581
```
####[set] Object Mori.js (repeats / ms):
```javascript
    1000 / 3
    5000 / 3
   10000 / 4
   50000 / 12
  100000 / 24
  500000 / 103
 1000000 / 160
 5000000 / 796
```
####[set] Array Native (repeats / ms):
```javascript
    1000 / 1
    5000 / 2
   10000 / 6
   50000 / 19
  100000 / 38
  500000 / 189
 1000000 / 379
 5000000 / 1892
```
####[set] Array Seamless-immutable.js (repeats / ms):
```javascript
    1000 / 16
    5000 / 72
   10000 / 141
   50000 / 687
  100000 / 1366
  500000 / 6747
 1000000 / 13472
 5000000 / 68317
```
####[set] Array Immutable.js (repeats / ms):
```javascript
    1000 / 4
    5000 / 4
   10000 / 11
   50000 / 29
  100000 / 50
  500000 / 223
 1000000 / 445
 5000000 / 2129
```
####[set] Array Mori.js (repeats / ms):
```javascript
    1000 / 3
    5000 / 2
   10000 / 7
   50000 / 15
  100000 / 25
  500000 / 90
 1000000 / 174
 5000000 / 820
```
####[setIn] Object Native (repeats / ms):
```javascript
    1000 / 2
    5000 / 6
   10000 / 12
   50000 / 45
  100000 / 86
  500000 / 419
 1000000 / 828
 5000000 / 4143
```
####[setIn] Object Seamless-immutable.js (repeats / ms):
```javascript
    1000 / 11
    5000 / 50
   10000 / 100
   50000 / 500
  100000 / 988
  500000 / 4941
 1000000 / 9905
 5000000 / 49705
```
####[setIn] Object Immutable.js (repeats / ms):
```javascript
    1000 / 7
    5000 / 10
   10000 / 15
   50000 / 64
  100000 / 122
  500000 / 598
 1000000 / 1266
 5000000 / 6327
```
####[setIn] Object Mori.js (repeats / ms):
```javascript
    1000 / 6
    5000 / 6
   10000 / 12
   50000 / 47
  100000 / 92
  500000 / 435
 1000000 / 890
 5000000 / 4342
```
####[setIn] Array Native (repeats / ms):
```javascript
    1000 / 1
    5000 / 5
   10000 / 11
   50000 / 40
  100000 / 80
  500000 / 396
 1000000 / 790
 5000000 / 3944
```
####[setIn] Array Seamless-immutable.js (repeats / ms):
    1000 / 30
    5000 / 124
   10000 / 251
   50000 / 1325
  100000 / 2640
  500000 / 13280
 1000000 / 26380
 5000000 / 128553
```
####[setIn] Array Immutable.js (repeats / ms):
```javascript
    1000 / 6
    5000 / 10
   10000 / 23
   50000 / 107
  100000 / 209
  500000 / 1020
 1000000 / 2042
 5000000 / 10101
```
####[setIn] Array Mori.js (repeats / ms):
```javascript
    1000 / 6
    5000 / 8
   10000 / 16
   50000 / 66
  100000 / 128
  500000 / 696
 1000000 / 1393
 5000000 / 6955
```