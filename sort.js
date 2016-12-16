/**
 * Find the N numbers in an unsorted array A that are closest to X.
 *
 * @param  {Number} n          The number of results to return.
 * @param  {Array<Number>}  a  The array to search.
 * @param  {Number} x          The number that results must be closest to.
 * @return {Array<Number>}     The N numbers in A that are closest to X.
 */
module.exports = function findClosest (n, a, x) {
  return a
    // Copy the array to ensure that sorting isn't a side-effect.
    .slice(0, a.length)
    // Sort by distance from x.
    .sort(function (n1, n2) {
      return Math.abs(n1 - x) - Math.abs(n2 - x)
    })
    // Prune to the closest N.
    .slice(0, n)
}
