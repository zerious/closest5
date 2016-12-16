/**
 * Find the N numbers in an unsorted array A that are closest to X.
 *
 * @param  {Number} n          The number of results to return.
 * @param  {Array<Number>}  a  The array to search.
 * @param  {Number} x          The number that results must be closest to.
 * @return {Array<Number>}     The N numbers in A that are closest to X.
 */
module.exports = function findClosest (n, a, x) {
  var l = a.length

  // Sorting function for sorting by distance "d".
  function byDistance (c1, c2) {
    return c1.d - c2.d
  }

  // Add the first N as objects with distance (to avoid recalculating distance).
  // NOTE: It is assumed that the array A has at least N elements.
  var closest = new Array(n)
  var maxDistance = 0
  for (var i = 0; i < n; i++) {
    var value = a[i]
    var distance = Math.abs(value - x)
    closest[i] = {
      v: value,
      d: distance
    }
    maxDistance = Math.max(distance, maxDistance)
  }
  closest.sort(byDistance)

  // Iterate over the rest of the elements, keeping a handmade min heap.
  for (i = n; i < l; i++) {
    value = a[i]
    distance = Math.abs(value - x)
    if (distance < maxDistance) {
      closest[n - 1] = {
        v: value,
        d: distance
      }
      closest.sort(byDistance)
      maxDistance = closest[n - 1].d
    }
  }

  // Just return the values.
  for (i = 0; i < n; i++) {
    closest[i] = closest[i].v
  }

  return closest
}
