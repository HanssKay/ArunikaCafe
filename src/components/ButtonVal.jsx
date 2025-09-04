import { useCart } from "./CartContext";

export default function JumlahPesan({ product }) {
  const { cartItems, addToCart, removeFromCart } = useCart();

  // Kalau product belum ada (misal saat render pertama), langsung return null
  if (!product) return null;

  const itemInCart = cartItems.find(item => item.title === product.title);
  const count = itemInCart ? itemInCart.quantity : 0;

  return (
    <div className="flex items-center md:h-8 h-3 md:px-2 px-1.5 md:py-0 py-2 ms-7 md:mt-5 mt-7 rounded-sm bg-amber-500">
      {/* Tombol Minus */}
      <button
        onClick={() => removeFromCart(product.title)}
        className="text-white font-bold md:text-lg text-[6px] cursor-pointer hover:text-black transition"
      >
        −
      </button>

      {/* Jumlah */}
      <span className="min-w-[20px] text-center md:text-lg text-[8px] font-bold text-white">
        {count}
      </span>

      {/* Tombol Plus */}
      <button
        onClick={() => addToCart(product)}
        className="text-white font-bold md:text-lg text-[6px] cursor-pointer hover:text-black transition"
      >
        +
      </button>
    </div>
  );
}
