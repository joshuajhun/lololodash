var arrayEachRight = require('./internal/arrayEachRight'),
    baseEachRight = require('./internal/baseEachRight'),
    isArray = require('./isArray'),
    toFunction = require('./internal/toFunction');

/**
 * This method is like `_.forEach` except that it iterates over elements of
 * `collection` from right to left.
 *
 * @static
 * @memberOf _
 * @alias eachRight
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @example
 *
 * _.forEachRight([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => logs `2` then `1`
 */
function forEachRight(collection, iteratee) {
  return (typeof iteratee == 'function' && isArray(collection))
    ? arrayEachRight(collection, iteratee)
    : baseEachRight(collection, toFunction(iteratee));
}

module.exports = forEachRight;
