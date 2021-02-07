import { useFormik } from "formik";
import * as Yup from "yup";

export default function Form() {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    errors,
    resetForm,
  } = useFormik({
    initialValues: {
      phoneNumber: "",
      message: "",
    },
    validationSchema: Yup.object({
      phoneNumber: Yup.number()
        .min(900000000, "El número de teléfono debe empezar con 9")
        .max(999999999, "El número de teléfono debe tener 9 dígitos")
        .required("El número de teléfono es obligatorio"),
      message: Yup.string(),
    }),
    onSubmit: (datos) => {
      const message = `${datos.message.replace(/\n/g, "%0A")}`;
      const link =
        message === ""
          ? `https://${
              window.innerWidth < 801 ? "api" : "api"
            }.whatsapp.com/send?phone=51${datos.phoneNumber}`
          : `https://${
              window.innerWidth < 801 ? "api" : "api"
            }.whatsapp.com/send?phone=51${datos.phoneNumber}&text=${message}`;

      // console.log(datos);
      window.open(link, "_blank");
      resetForm();
    },
  });

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form
          className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-8 space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="sm:col-span-2">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700 text-center md:text-justify"
            >
              Número de teléfono
            </label>
            <div className="mt-1 relative rounded-md shadow-sm border">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="h-full py-0 pl-5 pr-10 border-transparent bg-transparent text-gray-500 focus:ring-wal-green focus:border-wal-green rounded-md"
                >
                  <option>PE +51</option>
                </select>
              </div>
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                autoComplete="tel"
                className="py-3 px-4 block w-full pl-28 focus:ring-wal-green focus:border-wal-green border-gray-300 rounded-md"
                placeholder="987 654 321"
                maxLength="9"
                // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                value={values.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {touched.phoneNumber && errors.phoneNumber ? (
              <div className="my-2 bg-gray-50 border-l-4 border-red-700 text-red-700 p-4 text-sm">
                <p className="">Error: {errors.phoneNumber} </p>
              </div>
            ) : null}
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 text-center md:text-justify"
            >
              Mensaje (opcional)
            </label>
            <div className="mt-1 border rounded-md shadow-sm ">
              <textarea
                id="message"
                name="message"
                rows="4"
                className="py-3 px-4 block w-full focus:ring-wal-green focus:border-wal-green border-gray-300 rounded-md"
                maxLength="40"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
              ></textarea>
            </div>
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-wal-green hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-wal-green"
              value="Enviar mensaje"
            >
              Enviar Mensaje
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
