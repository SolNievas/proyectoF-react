import bag from "./img/bag.svg";

const CartWidget = () => {
    return (
        <div>
            <button type="button" className="btn btn-warning position-relative">
                <img src={bag} alt="Carrito" width={24} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    1
                    <span className="visually-hidden">unread messages</span>
                </span>
            </button>
        </div>
    )
}

export default CartWidget;