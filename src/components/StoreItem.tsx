import { Button, Card } from "react-bootstrap";
import formatCurrency from "../FormatCurrency";
type StoreItemType = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemType) => {
  const quantity = 1;
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
            <Button className="w-100">+ Add to cart</Button>
          ) : (
            <div
              className="d-flex flex-column justify-content-center"
              style={{ gap: ".5rem" }}
            >
              <div className="d-flex justify-content-center">
                <Button>+</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button>-</Button>
              </div>
              <div
                style={{ gap: ".5rem" }}
                className="d-flex justify-content-center"
              >
                <Button>Remove</Button>
              </div>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
