var seamlessImmutableJs = require('seamless-immutable');
var immutableJs = require('immutable');
var moriJs = require('mori');

var REPEATS;

function test(callback) {
    var startTime = Date.now();
    callback();
    return (Date.now() - startTime) + ' ms';
    global.gc();
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

var repeats = [1000, 5000, 10000, 50000, 100000, 500000, 1000000];
for(var i = 0; i < repeats.length; i++) {
    REPEATS = repeats[i];
    console.log('==== REPEATS = ' + REPEATS + '====');

    console.log('== get ===');
    console.log('Object Native:                ' + test(objectGetNative));
    console.log('Object Seamless-immutable.js: ' + test(objectGetSeamlessImmutableJs));
    console.log('Object Immutable.js:          ' + test(objectGetImmutableJs));
    console.log('Object Mori.js:               ' + test(objectGetMoriJs));
    console.log('Array Native:                 ' + test(arrayGetNative));
    console.log('Array Seamless-immutable.js:  ' + test(arrayGetSeamlessImmutableJs));
    console.log('Array Immutable.js:           ' + test(arrayGetImmutablejs));
    console.log('Array Mori.js:                ' + test(arrayGetMoriJs));

    console.log('== getIn ==');
    console.log('Object Native. GetIn:         ' + test(objectGetInNative));
    console.log('Object Seamless-immutable:    ' + test(objectGetInSeamlessImmutableJs));
    console.log('Object Immutable.js:          ' + test(objectGetInImmutableJs));
    console.log('Object Mori.js:               ' + test(objectGetInMoriJs));
    console.log('Array Native:                 ' + test(arrayGetInNative));
    console.log('Array Seamless-immutable.js:  ' + test(arrayGetInSeamlessImmutableJs));
    console.log('Array Immutable.js:           ' + test(arrayGetInImmutableJs));
    console.log('Array Mori.js:                ' + test(arrayGetInMoriJs));

    console.log('== set ==');
    console.log('Object Native:                ' + test(objectSetNative));
    console.log('Object Seamless-immutable.js: ' + test(objectSetSeamlessImmutableJs));
    console.log('Object Immutable.js:          ' + test(objectSetImmutableJs));
    console.log('Object Mori.js:               ' + test(objectSetMoriJs));
    console.log('Array Native:                 ' + test(arraySetNative));
    console.log('Array Seamless-immutable.js:  ' + test(arraySetSeamlessImmutableJs));
    console.log('Array Immutable.js:           ' + test(arraySetImmutableJs));
    console.log('Array Mori.js:                ' + test(arraySetMoriJs));

    console.log('== setIn ==');
    console.log('Object Native:                ' + test(objectSetInNative));
    console.log('Object Seamless-immutable.js: ' + test(objectSetInSeamlessImmutableJs));
    console.log('Object Immutable.js:          ' + test(objectSetInImmutableJs));
    console.log('Object Mori.js:               ' + test(objectSetInMoriJs));
    console.log('Array Native:                 ' + test(arraySetInNative));
    console.log('Array Seamless-immutable.js:  ' + test(arraySetInSeamlessImmutableJs));
    console.log('Array Immutable.js:           ' + test(arraySetInImmutableJs));
    console.log('Array Mori.js:                ' + test(arraySetInMoriJs));

    console.log();
}

