import Formulario from "./components/Formulario";
import Header from "./components/Headers";
import ListadoPacientes from "./components/ListadoPacientes";
import { useState, useEffect } from "react";

const App = () => {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];
      console.log(pacientesLS);
      setPacientes(pacientesLS);
    };
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  return (
    <div className="container mt-20 mx-auto w-11/12">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          setPacientes={setPacientes}
          pacientes={pacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPacientes={setPacientes}
          setPaciente={setPaciente}
        />
      </div>
    </div>
  );
};

export default App;
