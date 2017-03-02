import assert from 'assert';
import eeyoreJs from '../lib';

var now = require("performance-now")

describe('Eeyore.js', function () {

  // Generic functionality test
  it('should grab some sort of result.', function () {
    // assert(false, 'we expected this package author to add actual unit tests.');
    eeyoreJs('andrewsosa001').then(res => {
      if(res){
        // console.log(res);
        assert(true, 'We got something! Maybe it is what we wanted.');
      }
      else {
        assert(false, 'Did not get any result; must not be working.');
      }
    });
  });

  // Test with caching
  it('use caching for the second call', function () {
    // assert(false, 'we expected this package author to add actual unit tests.');
    var options = {dir:'./tmp/', ttl:10000};


    // first run, no caching
    var before1 = now();
    eeyoreJs('andrewsosa001', options).then(res => {});
    var diff1 = now() - before1;

    // second fun, use cache
    var before2 = now();
    eeyoreJs('andrewsosa001', options).then(res => {});
    var diff2 = now() - before2;

    // console.log(diff1)
    // console.log(diff2)

    // cached should take less than 50% of uncached (hopefully).
    if(diff2 < (diff1/2)) {
      assert(true, 'Cached execution ran in <50% time of uncached.');
    } else {
      assert(false, 'Cached execution ran in >50% time of uncached.')
    }

  });
});
