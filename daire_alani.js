const prompt = require('prompt');

const pi = 3.14;

prompt.start();

prompt.get(['yaricap'], function(err, result){
    if(err) {
        console.log(err);
        return -1;
    }

    let alan = pi * Math.pow(result.yaricap, 2);

    console.log("Yarıcapı " + result.yaricap + " olan dairenin alanı: " + alan);
});