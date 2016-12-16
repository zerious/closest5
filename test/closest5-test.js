/* global bench describe it is */

var solutions = {
  heap: require('../heap'),
  sort: require('../sort')
}

var n = 5
var a = []
var x = 41029
var seed = 0
for (var i = 0; i < 1e4; i++) {
  seed = (seed * 9301 + 49297) % 233280
  a.push(seed - 116640)
}

bench('Benchmark', function () {
  Object.keys(solutions).forEach(function (name) {
    var solution = solutions[name]
    it(name, function () {
      solution(n, a, x)
    })
  })
})

describe('Verify', function () {
  Object.keys(solutions).forEach(function (name) {
    var solution = solutions[name]
    it(name, function () {
      var c = solution(n, a, x)
      is.same(c, [41014, 41002, 40993, 41066, 40987])
    })
  })
})
