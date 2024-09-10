import PropTypes from 'prop-types';
import {

  formatCurrency,

} from "../../utils/helpers";

function OrderItem({ item }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}OrderItem.propTypes = {
  item: PropTypes.string.isRequired,
  isLoadingIngredients: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired
};
export default OrderItem;
