import {product} from '../product'
const Image= () => {
    return (
        <div>
            <img src={product.imgURL} alt={product.name} />
        </div>
    )
}
export default Image