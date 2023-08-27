import Product from './Product'
import './Store.scss'
import Storeheader from './Storeheader'

const Store = () => {
  return (
    <>
      <div className="store ">
        <Storeheader/>
        <Product/>
      </div>
    </>
  )
}

export default Store
