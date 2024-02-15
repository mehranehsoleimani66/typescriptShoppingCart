import { Button, Card } from "react-bootstrap";
import formatCurrency from "../FormatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";
type StoreItemType = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemType) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  console.log("q", quantity);
  return (
    <Card className="w-100">
      <Card.Img
        src={imgUrl}
        style={{ objectFit: "cover" }}
        height="200px"
        variant="top"
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              + Add to cart
            </Button>
          ) : (
            <div
              className="d-flex flex-column justify-content-center"
              style={{ gap: ".5rem" }}
            >
              <div className="d-flex justify-content-center">
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
              </div>
              <div
                style={{ gap: ".5rem" }}
                className="d-flex justify-content-center"
              >
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeFromCart(id)}
                >
                  Remove
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
