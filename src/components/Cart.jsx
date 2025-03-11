import { useState } from 'react';
import {
  ShoppingBagIcon,
  XMarkIcon,
  PlusIcon,
  MinusIcon,
} from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

export default function Cart() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    getCartTotal,
  } = useCart();

  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [userId, setUserId] = useState('');
  const [username, setUsername] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  if (!isCartOpen) return null;

  const paypalOptions = {
    'client-id':
      'ATfBV8LY6ZA_eyq4S3dDtFrGtv7pbQkZ_KXBjWPGa6e2GOPZgso1x-Tfj05xzv-Nqzt9gq9QTOmBEoMY',
    currency: 'USD',
  };

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: getCartTotal().toFixed(2),
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      setPaymentCompleted(true);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formspreeEndpoint = 'https://formspree.io/f/mjkyvwqj';

    const formData = {
      userId,
      username,
      cart: JSON.stringify(cart),
      total: getCartTotal().toFixed(2),
    };

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormSubmitted(true);
      } else {
        alert('Hubo un error al enviar la información.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al enviar la información.');
    }
  };

  const handleOpenDiscord = () => {
    window.open('https://discord.gg/tu-enlace-de-invitacion', '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={() => setIsCartOpen(false)}
      ></div>
      <div className="absolute right-0 top-0 h-full w-full md:w-[480px] bg-dark">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-white">Carrito</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {cart.length === 0 ? (
              <div className="text-center text-gray-400 mt-8">
                <ShoppingBagIcon className="h-12 w-12 mx-auto mb-4" />
                <p>Tu carrito está vacío</p>
              </div>
            ) : paymentCompleted ? (
              formSubmitted ? (
                <div className="text-center text-white space-y-4">
                  <h3 className="text-xl font-semibold">
                    ¡Gracias por tu compra!
                  </h3>
                  <p>
                    Por favor, reclama tu compra en Discord abriendo un ticket.
                  </p>
                  <button
                    onClick={handleOpenDiscord}
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                  >
                    Abrir Discord y reclamar
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-white block mb-1">ID:</label>
                    <input
                      type="text"
                      value={userId}
                      onChange={(e) => setUserId(e.target.value)}
                      className="w-full p-2 rounded bg-gray-700 text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-white block mb-1">
                      Nombre de usuario:
                    </label>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full p-2 rounded bg-gray-700 text-white"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#3394ed] text-white py-2 rounded hover:bg-[#2084e3]"
                  >
                    Enviar información
                  </button>
                </form>
              )
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 md:w-20 h-16 md:h-20 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-semibold truncate">
                        {item.name}
                      </h3>
                      <p className="text-[#3394ed]">
                        USD$ {item.price.toFixed(2)}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="text-gray-400 hover:text-white"
                        >
                          <MinusIcon className="h-4 w-4" />
                        </button>
                        <span className="text-white">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="text-gray-400 hover:text-white"
                        >
                          <PlusIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-white flex-shrink-0"
                    >
                      <XMarkIcon className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {!paymentCompleted && cart.length > 0 && (
            <div className="border-t border-gray-700 p-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-white">Total:</span>
                <span className="text-[#3394ed] text-xl font-bold">
                  USD$ {getCartTotal().toFixed(2)}
                </span>
              </div>
              <PayPalScriptProvider options={paypalOptions}>
                <PayPalButtons
                  createOrder={createOrder}
                  onApprove={onApprove}
                  style={{ layout: 'vertical' }}
                />
              </PayPalScriptProvider>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
