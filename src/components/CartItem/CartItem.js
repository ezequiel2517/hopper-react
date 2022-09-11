import { useContext } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { CartContext } from "../../contexts/CartContext/CartContext";
import './CartItem.scss'

function CartItem({ item: { cantidad, name, precio, screen_url, id } }) {

    const { deleteItem } = useContext(CartContext);

    return (
        <tr>
            <td className="imageIcon" style={{ backgroundImage: `url(${screen_url})` }}>
            </td>
            <td>{cantidad}</td>
            <td>{name}</td>
            <td>${precio}</td>
            <td
                className="deleteIcon"
            ><BsFillTrashFill onClick={() => deleteItem(id)} />
            </td>
        </tr>
    );
}

export default CartItem;