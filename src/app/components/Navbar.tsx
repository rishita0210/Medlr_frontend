// components/Navbar.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart ,faHeart} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Image from 'next/image'
import logo from '/images/logo.png' 

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          
            <div className="h-10 w-auto text-black-300">
                <Image src="/images/logo.png" alt="Medlr" width={440} height={40} />
              </div>
          
          <div className="ml-4">
            <Link href="/" legacyBehavior>
              <a className="text-black-400 hover:text-blue-400">Home</a>
            </Link>
            <Link href="/shop" legacyBehavior>
              <a className="text-balck-400 hover:text-blue-400 ml-4">Shop</a>
            </Link>
            <Link href="/categories" legacyBehavior>
              <a className="text-black-400 hover:text-blue-400 ml-4">Categories</a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a className="text-black-400 hover:text-blue-400 ml-4">Contact Us</a>
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-6 text-l text-black-70 mr-9">
          <Link href="/wishlist" legacyBehavior>
            <a className="flex items-center space-x-1 hover:text-blue-100">
              <FontAwesomeIcon icon={faHeart}  className="h-5 w-5"  />
              <span text-s> Wishlist</span>
            </a>
          </Link>
          <Link href="/cart" legacyBehavior>
            <a className="hover:text-blue-100">
              <FontAwesomeIcon icon={faShoppingCart}  className="h-5 w-5" />
              <span className='text-s'>Cart</span>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

