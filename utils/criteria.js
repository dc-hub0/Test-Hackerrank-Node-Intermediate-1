const CRITERIA_ONE_FAIL_MESSAGE = 'MRP should be less than equal to the Price';
const CRITERIA_TWO_FAIL_MESSAGE = 'Stock count is 0';

function checkFirsCriteria(product) {
  return product.mrp >= product.price ? true : false;
}
function checkSecondCriteria(product) {
  return product.stock > 0 ? true : false;
}

function checkCriterias(product) {
  let criteriasMessages = [];
  const firstCriteria = checkFirsCriteria(product);
  const secondCriteria = checkSecondCriteria(product);

  if (!firstCriteria) criteriasMessages.push(CRITERIA_ONE_FAIL_MESSAGE);
  if (!secondCriteria) criteriasMessages.push(CRITERIA_TWO_FAIL_MESSAGE);
  return criteriasMessages;
}

module.exports = { checkCriterias };
