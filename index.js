var seamlessImmutableJs = require('seamless-immutable');
var immutableJs = require('immutable');
var moriJs = require('mori');

var REPEATS;
var repeats = [1000, 5000, 10000, 50000, 100000, 500000, 1000000, 5000000];

function getFormatedRepeats() {
    switch(REPEATS) {
        case 1000:     return '    1000';
        case 5000:     return '    5000';
        case 10000:    return '   10000';
        case 50000:    return '   50000';
        case 100000:   return '  100000';
        case 500000:   return '  500000';
        case 1000000:  return ' 1000000';
        case 5000000:  return ' 5000000';
    }
}

function test(callback) {
    for(var i = 0; i < repeats.length; i++) {
        REPEATS = repeats[i]
        var startTime = Date.now();
        callback();
        var testTime = Date.now() - startTime;
        console.log(getFormatedRepeats() + ' / ' + testTime);
        global.gc();
    }
}

//== get ==

function objectGetNative() {
    var obj = {
        value : Math.random()
    };
    var value;
    for(var i = 0; i < REPEATS; i++) {
        value = obj.value;
    }
}

function objectGetSeamlessImmutableJs() {
    var obj = seamlessImmutableJs.from({
        value : Math.random()
    });
    var value;
    for(var i = 0; i < REPEATS; i++) {
        value = obj.value;
    }
}

function objectGetImmutableJs() {
    var obj = new immutableJs.fromJS({
        value : Math.random()
    });
    var value;
    for(var i = 0; i < REPEATS; i++) {
        value = obj.get('value');
    }
}

function objectGetMoriJs() {
    var obj = moriJs.hashMap('value', Math.random());
    var value;
    for(var i = 0; i < REPEATS; i++) {
        value = moriJs.get(obj, 'value');
    }
}

function arrayGetNative() {
    var arr = [
        Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    ];
    var value;
    var maxIndex = arr.length - 1;
    for(var i = 0; i < REPEATS; i++) {
        value = arr[~~(Math.random() * maxIndex)];
    }
}

function arrayGetSeamlessImmutableJs() {
    var arr = seamlessImmutableJs.from([
        Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    ]);
    var value;
    var maxIndex = arr.length - 1;
    for(var i = 0; i < REPEATS; i++) {
        value = arr[~~(Math.random() * maxIndex)];
    }
}

function arrayGetImmutablejs() {
    var arr = new immutableJs.fromJS([
        Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    ]);
    var value;
    var maxIndex = arr.size - 1;
    for(var i = 0; i < REPEATS; i++) {
        value = arr.get(~~(Math.random() * maxIndex));
    }
}

function arrayGetMoriJs() {
    var arr = moriJs.vector(Math.random(), Math.random(), Math.random(), Math.random(), Math.random());
    var value;
    var maxIndex = moriJs.count(arr) - 1;
    for(var i = 0; i < REPEATS; i++) {
        value = moriJs.get(arr, ~~(Math.random() * maxIndex));
    }
}

//=== getIn ===

function objectGetInNative() {
    var obj = {
        data : {
            value : Math.random()
        }
    };
    var value;
    for(var i = 0; i < REPEATS; i++) {
        value = obj.data.value;
    }
}

function objectGetInSeamlessImmutableJs() {
    var obj = seamlessImmutableJs.from({
        data : {
            value : Math.random()
        }
    });
    var value;
    for(var i = 0; i < REPEATS; i++) {
        value = obj.data.value;
    }
}

function objectGetInImmutableJs() {
    var obj = immutableJs.Map({
        data : immutableJs.Map({
            value : Math.random()
        })
    });
    var value;
    for(var i = 0; i < REPEATS; i++) {
        value = obj.getIn(['data', 'value']);
    }
}

function objectGetInMoriJs() {
    var obj = moriJs.hashMap('data', moriJs.hashMap('value', Math.random()));
    var value;
    for(var i = 0; i < REPEATS; i++) {
        value = moriJs.getIn(obj, ['data', 'value']);
    }
}

function arrayGetInNative() {
    var arr = [[
        Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    ]];
    var value;
    var maxIndex = arr[0].length - 1;
    for(var i = 0; i < REPEATS; i++) {
        value = arr[0][~~(Math.random() * maxIndex)];
    }
}

function arrayGetInSeamlessImmutableJs() {
    var arr = seamlessImmutableJs.from([[
        Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    ]]);
    var value;
    var maxIndex = arr[0].length - 1;
    for(var i = 0; i < REPEATS; i++) {
        value = arr[0][~~(Math.random() * maxIndex)];
    }
}

function arrayGetInImmutableJs() {
    var arr = new immutableJs.fromJS([[
        Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    ]]);
    var value;
    var maxIndex = arr.get(0).size - 1;
    for(var i = 0; i < REPEATS; i++) {
        value = arr.getIn([0, ~~(Math.random() * maxIndex)]);
    }
}

function arrayGetInMoriJs() {
    var arr = moriJs.vector(moriJs.vector(Math.random(), Math.random(), Math.random(), Math.random(), Math.random()));
    var value;
    var maxIndex = moriJs.count(moriJs.get(arr, 0)) - 1;
    for(var i = 0; i < REPEATS; i++) {
        value = moriJs.getIn(arr, [0, ~~(Math.random() * maxIndex)]);
    }
}

//== set ==

function objectSetNative() {
    var obj = {
        value : Math.random()
    };
    for(var i = 0; i < REPEATS; i++) {
        obj = Object.assign({}, obj, {
            value : Math.random()
        });
    }
}

function objectSetSeamlessImmutableJs() {
    var obj = seamlessImmutableJs.from({
        value : Math.random()
    });
    for(var i = 0; i < REPEATS; i++) {
        obj.set('value', Math.random());
    }
}


function objectSetImmutableJs() {
    var obj = seamlessImmutableJs.from({
        value : Math.random()
    });
    for(var i = 0; i < REPEATS; i++) {
        obj.set('value', Math.random());
    }
}

function objectSetMoriJs() {
    var obj = moriJs.hashMap('value', Math.random());
    var value;
    for(var i = 0; i < REPEATS; i++) {
        moriJs.assoc(obj, 'value', Math.random());
    }
}

function arraySetNative() {
    var arr = [
        Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    ];
    var maxIndex = arr.length - 1;
    for(var i = 0; i < REPEATS; i++) {
        arr = [].concat(arr);
        arr[~~(Math.random() * maxIndex)] = Math.random();
    }
}

function arraySetSeamlessImmutableJs() {
    var arr = seamlessImmutableJs.from([
        Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    ]);
    var maxIndex = arr.length - 1;
    for(var i = 0; i < REPEATS; i++) {
        arr.set(~~(Math.random() * maxIndex), Math.random());
    }
}

function arraySetImmutableJs() {
    var arr = new immutableJs.fromJS([
        Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    ]);
    var maxIndex = arr.size - 1;
    for(var i = 0; i < REPEATS; i++) {
        arr = arr.set(~~(Math.random() * maxIndex), Math.random());
    }
}

function arraySetMoriJs() {
    var arr = moriJs.vector(Math.random(), Math.random(), Math.random(), Math.random(), Math.random());
    var value;
    var maxIndex = moriJs.count(arr) - 1;
    for(var i = 0; i < REPEATS; i++) {
        value = moriJs.assoc(arr, ~~(Math.random() * maxIndex), Math.random());
    }
}

//== setIn ==

function objectSetInNative() {
    var obj = {
        data : {
            value : Math.random()
        }
    };
    for(var i = 0; i < REPEATS; i++) {
        obj = Object.assign({}, obj, {
            data : Object.assign({}, obj.data, {
                value : Math.random()
            })
        });
    }
}

function objectSetInSeamlessImmutableJs() {
    var obj = seamlessImmutableJs.from({
        data : {
            value : Math.random()
        }
    });
    for(var i = 0; i < REPEATS; i++) {
        obj = obj.setIn(['data', 'value'], Math.random());
    }
}

function objectSetInImmutableJs() {
    var obj = immutableJs.Map({
        data : immutableJs.Map({
            value : Math.random()
        })
    });
    for(var i = 0; i < REPEATS; i++) {
        obj = obj.setIn(['data', 'value'], Math.random());
    }
}

function objectSetInMoriJs() {
    var obj = moriJs.hashMap('data', moriJs.hashMap('value', Math.random()));
    var value;
    for(var i = 0; i < REPEATS; i++) {
        value = moriJs.assocIn(obj, ['data', 'value'], Math.random());
    }
}

function arraySetInNative() {
    var arr = [[
        Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    ]];
    var maxIndex = arr[0].length - 1;
    for(var i = 0; i < REPEATS; i++) {
        arr = [].concat(arr);
        arr[0] = [].concat(arr[0]);
        arr[0][~~(Math.random() * maxIndex)] = Math.random();
    }
}

function arraySetInSeamlessImmutableJs() {
    var arr = seamlessImmutableJs.from([[
        Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    ]]);
    var maxIndex = arr[0].length - 1;
    for(var i = 0; i < REPEATS; i++) {
        arr = arr.setIn([0, ~~(Math.random() * maxIndex)], Math.random());
    }
}

function arraySetInImmutableJs() {
    var arr = new immutableJs.fromJS([[
        Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    ]]);
    var maxIndex = arr.get(0).size - 1;
    for(var i = 0; i < REPEATS; i++) {
        arr = arr.setIn([0, ~~(Math.random() * maxIndex)], Math.random());
    }
}

function arraySetInMoriJs() {
    var arr = moriJs.vector(moriJs.vector(Math.random(), Math.random(), Math.random(), Math.random(), Math.random()));
    var maxIndex = moriJs.count(moriJs.get(arr, 0)) - 1;
    for(var i = 0; i < REPEATS; i++) {
        arr = moriJs.assocIn(arr, [0, ~~(Math.random() * maxIndex)], Math.random());
    }
}

console.log('[get] Object Native (repeats / ms):');
test(objectGetNative);
console.log('[get] Object Seamless-immutable.js (repeats / ms): ');
test(objectGetSeamlessImmutableJs);
console.log('[get] Object Immutable.js (repeats / ms):');
test(objectGetImmutableJs);
console.log('[get] Object Mori.js (repeats / ms):');
test(objectGetMoriJs);
console.log('[get] Array Native (repeats / ms):');
test(arrayGetNative);
console.log('[get] Array Seamless-immutable.js (repeats / ms):');
test(arrayGetSeamlessImmutableJs);
console.log('[get] Array Immutable.js (repeats / ms):');
test(arrayGetImmutablejs);
console.log('[get] Array Mori.js (repeats / ms):');
test(arrayGetMoriJs);

console.log('[getIn] Object Native. GetIn (repeats / ms):');
test(objectGetInNative);
console.log('[getIn] Object Seamless-immutable (repeats / ms):');
test(objectGetInSeamlessImmutableJs);
console.log('[getIn] Object Immutable.js (repeats / ms):');
test(objectGetInImmutableJs);
console.log('[getIn] Object Mori.js (repeats / ms):');
test(objectGetInMoriJs);
console.log('[getIn] Array Native (repeats / ms):');
test(arrayGetInNative);
console.log('[getIn] Array Seamless-immutable.js (repeats / ms):');
test(arrayGetInSeamlessImmutableJs);
console.log('[getIn] Array Immutable.js (repeats / ms):');
test(arrayGetInImmutableJs);
console.log('[getIn] Array Mori.js (repeats / ms):');
test(arrayGetInMoriJs);

console.log('[set] Object Native (repeats / ms):');
test(objectSetNative);
console.log('[set] Object Seamless-immutable.js (repeats / ms):');
test(objectSetSeamlessImmutableJs);
console.log('[set] Object Immutable.js (repeats / ms):');
test(objectSetImmutableJs);
console.log('[set] Object Mori.js (repeats / ms):');
test(objectSetMoriJs);
console.log('[set] Array Native (repeats / ms):');
test(arraySetNative);
console.log('[set] Array Seamless-immutable.js (repeats / ms):');
test(arraySetSeamlessImmutableJs);
console.log('[set] Array Immutable.js (repeats / ms):');
test(arraySetImmutableJs);
console.log('[set] Array Mori.js (repeats / ms):');
test(arraySetMoriJs);

console.log('[setIn] Object Native (repeats / ms):');
test(objectSetInNative);
console.log('[setIn] Object Seamless-immutable.js (repeats / ms):');
test(objectSetInSeamlessImmutableJs);
console.log('[setIn] Object Immutable.js (repeats / ms):');
test(objectSetInImmutableJs);
console.log('[setIn] Object Mori.js (repeats / ms):');
test(objectSetInMoriJs);
console.log('[setIn] Array Native (repeats / ms):');
test(arraySetInNative);
console.log('[setIn] Array Seamless-immutable.js (repeats / ms):');
test(arraySetInSeamlessImmutableJs);
console.log('[setIn] Array Immutable.js (repeats / ms):');
test(arraySetInImmutableJs);
console.log('[setIn] Array Mori.js (repeats / ms):');
test(arraySetInMoriJs);
