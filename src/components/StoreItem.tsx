import { Card } from "react-bootstrap";

type StoreItemType = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemType) => {
  return (
    <Card>
      <Card.Img
        src={imgUrl}
        style={{ objectFit: "cover" }}
        height="200px"
        variant="top"
      />
    </Card>
  );
};

export default StoreItem;
