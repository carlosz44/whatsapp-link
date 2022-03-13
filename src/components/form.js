import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

export default function Form() {
  const countries = [
    {
      id: 51,
      label: "PE +51",
    },
    {
      id: 52,
      label: "MX +52",
    },
    {
      id: 54,
      label: "AR +54",
    },
    {
      id: 56,
      label: "CL +56",
    },
    {
      id: 57,
      label: "CO +57",
    },
  ];
  const [message, setMessage] = useState("");
  const handleTextChange = (e) => setMessage(e.target.value);
  const handlePaste = (e) => {
    e.preventDefault();
    const input = document.getElementById("phoneNumber");
    const pastedText = (e.clipboardData || window.clipboardData).getData(
      "text"
    );
    values.phoneNumber = input.value = pastedText.replace(/\D/g, "");
  };

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
      country: "51",
      message: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      phoneNumber: Yup.number()
        .min(900000000, "El número de teléfono debe empezar con 9")
        .max(999999999, "El número de teléfono debe tener 9 dígitos")
        .required("El número de teléfono es obligatorio"),
      message: Yup.string(),
      country: Yup.number(),
    }),
    onSubmit: (formData) => {
      const formattedMessage = `${message.replace(/\n/g, "%0A")}`;
      let link = `https://api.whatsapp.com/send?phone=${formData.country}${formData.phoneNumber}`;
      message !== "" ? (link += `&text=${formattedMessage}`) : "";

      window.open(link, "_blank");
      resetForm();
      setMessage("");
    },
  });

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form
          className="grid grid-cols-1 sm:gap-x-8 space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="col-span-1">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700 text-center md:text-justify"
            >
              Número de teléfono
            </label>
            <div className="grid grid-cols-3 gap-2 mt-1 rounded-md ">
              <div className="col-span-1 text-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.country}
                >
                  {countries.map((country) => (
                    <option key={country.id} value={country.id}>
                      {country.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-2">
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  autoComplete="tel"
                  className="mt-1 w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  maxLength="15"
                  placeholder="987 654 321"
                  // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  onPaste={handlePaste}
                  value={values.phoneNumber}
                />
              </div>
            </div>
            {touched.phoneNumber && errors.phoneNumber ? (
              <div className="my-2 bg-gray-50 border-l-4 border-red-700 text-red-700 p-4 text-sm">
                <p>Error: {errors.phoneNumber}</p>
              </div>
            ) : null}
          </div>
          <div className="col-span-1">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 text-center md:text-justify"
            >
              Mensaje (opcional)
            </label>
            <div>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="py-3 px-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                maxLength="120"
                onChange={handleTextChange}
                onBlur={handleBlur}
                placeholder="Hola!"
                value={message}
              ></textarea>
            </div>
          </div>
          <div className="col-span-1">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-w-green hover:bg-ic-yellow hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ic-blue transition duration-300"
              value="Enviar mensaje"
            >
              Enviar mensaje
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
