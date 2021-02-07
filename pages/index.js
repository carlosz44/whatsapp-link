// import Form from "@components/form";
import Form from "@components/form";

export default function Home() {
  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-md px-4 ">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-50 ">
          Contact sales
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-50 max-w">
          Envía un mensaje a cualquer número de WhatsApp de Perú sin agregarlo a
          tus contactos.
        </p>
      </div>
      <Form />
    </>
  );
}
