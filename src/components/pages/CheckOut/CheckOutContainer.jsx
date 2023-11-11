import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { CartContext } from "../../../context/CartContext";

function CheckOutContainer() {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);

  const total = getTotalPrice();

  const formik = useFormik({
    initialValues: {
      nombre: "",
      Telefono: "",
      email: "",
      confirmarEmail: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("Por favor, ingrese un nombre."),
      Telefono: Yup.number().required("Por favor, ingrese un número de teléfono."),
      email: Yup.string().email("Por favor, ingrese un correo electrónico válido.").required("Por favor, ingrese un correo electrónico."),
      confirmarEmail: Yup.string().oneOf([Yup.ref("email"), null], "Los correos electrónicos deben coincidir").required("Por favor, confirme su correo electrónico."),
    }),
    onSubmit: (values) => {
      if (values.email !== values.confirmarEmail) {
        alert("Los correos electrónicos no coinciden. Por favor, inténtelo de nuevo.");
        return;
      }

      let order = {
        buyer: values,
        items: cart,
        total,
        date: serverTimestamp(),
      };

      const ordersCollection = collection(db, "orders");

      addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

      cart.forEach((elemento) => {
        updateDoc(doc(db, "products", elemento.id), {
          stock: elemento.stock - elemento.quantity,
        });
      });

      clearCart();
    },
  });

  return (
    <div>
      {orderId ? (
        <div className="border w-6/12 mx-auto mt-4 py-6 flex flex-col items-center justify-center gap-4">
          <h2 className="text-lg mb-4 w-8/12 text-center">
            Gracias por su compra, su N° de compra es {orderId}
          </h2>
          <Link
            to="/"
            className="bg-violet-400 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Seguir comprando
          </Link>
        </div>
      ) : (
        <div className="flex justify-center items-center mt-10">
          <div className="bg-gray-100 p-6 rounded-md w-10/12">
            <h2 className="text-lg font-bold mb-4">
              Ingresa los datos de facturación
            </h2>

            <form onSubmit={formik.handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="nombre"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formik.touched.nombre && formik.errors.nombre ? 'border-red-500' : ''}`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.nombre}
                />
                {formik.touched.nombre && formik.errors.nombre && (
                  <div className="text-red-500">{formik.errors.nombre}</div>
                )}
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="Telefono"
                >
                  Teléfono
                </label>
                <input
                  type="number"
                  name="Telefono"
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formik.touched.Telefono && formik.errors.Telefono ? 'border-red-500' : ''}`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Telefono}
                />
                {formik.touched.Telefono && formik.errors.Telefono && (
                  <div className="text-red-500">{formik.errors.Telefono}</div>
                )}
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-500">{formik.errors.email}</div>
                )}
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="confirmarEmail"
                >
                  Confirmar Email
                </label>
                <input
                  type="text"
                  name="confirmarEmail"
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formik.touched.confirmarEmail && formik.errors.confirmarEmail ? 'border-red-500' : ''}`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmarEmail}
                />
                {formik.touched.confirmarEmail && formik.errors.confirmarEmail && (
                  <div className="text-red-500">{formik.errors.confirmarEmail}</div>
                )}
              </div>

              <div className="mb-4">
                <button
                  type="submit"
                  className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${!formik.isValid ? 'bg-gray-400 cursor-not-allowed' : ''}`}
                  disabled={!formik.isValid}
                >
                  Comprar
                </button>
                <Link to="/cart">
                  <button
                    type="button"
                    className="bg-rose-400 hover:bg-rose-500 text-white font-bold ml-6 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Cancelar
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CheckOutContainer;
