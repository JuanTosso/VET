import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ setPacientes, pacientes, paciente, setPaciente }) => {
  const [input, setInput] = useState({
    mascota: "",
    propietario: "",
    email: "",
    date: "",
    sintomas: "",
  });
  const [error, setError] = useState({});

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setInput(paciente);
    }
  }, [paciente]);

  const validate = (input) => {
    const error = {};
    if (
      input.mascota === "" ||
      input.propietario === "" ||
      input.email === "" ||
      input.date === "" ||
      input.sintomas === ""
    ) {
      error.error = "faltan campos";
    }
    return error;
  };

  const idGenerator = () => {
    const id =
      Math.random().toString(36).substring(2) + Date.now().toString(36);
    return id;
  };

  const handleForm = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setError(validate({ ...input, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion del formulario
    if (error.error) {
      setError({
        ...error,
        message: "Faltan campos",
      });
    } else {
      if (paciente.id) {
        //editando
        input.id = paciente.id;
        const pacientesActualizados = pacientes.map((p) =>
          p.id === paciente.id ? input : p
        );
        setPacientes(pacientesActualizados);
        setPaciente({});
      } else {
        const id = idGenerator();
        const registro = { ...input, id };
        setPacientes([...pacientes, registro]);
      }

      setInput({
        mascota: "",
        propietario: "",
        email: "",
        date: "",
        sintomas: "",
      });
    }
  };

  return (
    <div className="md:w-1/2 lg:2/5">
      <h2 className="font-black text-center text-3xl">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold"> Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        <div className="mb-4">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            name="mascota"
            value={input.mascota}
            onChange={handleForm}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            name="propietario"
            value={input.propietario}
            onChange={handleForm}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            name="email"
            value={input.email}
            onChange={handleForm}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            name="date"
            value={input.date}
            onChange={handleForm}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas"
            name="sintomas"
            value={input.sintomas}
            onChange={handleForm}
          />
        </div>
        {error.message && <Error mensaje="Todos los campos son obligatorios" />}
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value={paciente.id ? "Editar Paciente" : "Agregar paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
