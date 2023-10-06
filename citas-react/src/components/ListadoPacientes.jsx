import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPacientes, setPaciente }) => {
  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter((p) => p.id !== id);
    setPacientes(pacientesActualizados);
  };

  return (
    <div className="md:w-1/2 lg:w-3/5 ">
      {pacientes.length > 0 ? (
        <>
          <h2 className="font-black text-center text-3xl">Listado Pacientes</h2>
          <p className=" text-xl mt-5 mb-10 text-center">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
        </>
      ) : (
        <>
          <h2 className="font-black text-center text-3xl">No Hay pacientes</h2>
          <p className=" text-xl mt-5 mb-10 text-center">
            Comienza agregando{" "}
            <span className="text-indigo-600 font-bold">Pacientes</span>
          </p>
        </>
      )}

      <div className="md:max-h-screen overflow-y-scroll">
        {pacientes.map((paciente, i) => (
          <Paciente
            paciente={paciente}
            setPaciente={setPaciente}
            key={i}
            eliminarPaciente={eliminarPaciente}
          />
        ))}
      </div>
    </div>
  );
};

export default ListadoPacientes;
