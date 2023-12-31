import{ useState } from "react";
import MonacoEditor from "react-monaco-editor";
import transiciones  from "./transiciones";


function validarCadena(cadena: string): { esValida: boolean, mensajeError: string } {
  let estado = "0";
  let posicionError = -1;

  for (let i = 0; i < cadena.length; i++) {
    const caracter = cadena[i];
    if (transiciones[estado] && transiciones[estado][caracter]) {
      estado = transiciones[estado][caracter];
    } else {
      posicionError = i;
      break;
    }
  }

  if (posicionError !== -1) {
    // Se encontró un caracter incorrecto en la posición `posicionError`
    const mensajeError = `Error en la posición ${posicionError}: '${cadena[posicionError]}'`;
    return { esValida: false, mensajeError };
  }

  // Verifica si el estado actual es "10" después de recorrer la cadena completa
  const esValida = estado === "18";
  return { esValida, mensajeError: "" };
}



const generarTransiciones = (cadena: string): string => {
  let estadoActual = "0";
  let transicionesMensaje = "";

  for (const caracter of cadena) {
    if (transiciones[estadoActual]) {
      const transicion = transiciones[estadoActual][caracter];
      if (transicion !== undefined) {
        transicionesMensaje += `Estado ${estadoActual} -> Estado ${transicion}: '${caracter}'\n`;
        estadoActual = transicion;
      } else {
        transicionesMensaje += `Estado ${estadoActual} -> Error: '${caracter}'\n`;
        break;
      }
    } else {
      transicionesMensaje += `Error: Estado ${estadoActual} no existe.\n`;
      break;
    }
  }

  return transicionesMensaje;
};

function App() {
    const [esValida, setEsValida] = useState(false);
    const [editorContent, setEditorContent] = useState('');
    const [mensajeError, setMensajeError] = useState("");

  
  
    const handleValidarClick = () => {
      const { esValida, mensajeError } = validarCadena(editorContent); // Usar el contenido del editor
      setEsValida(esValida);
      const transicionesMensaje = generarTransiciones(editorContent); // Usar el contenido del editor
    
      if (esValida) {
        console.log(`La cadena es válida: ${esValida}`);
        console.log('Transiciones:');
        console.log(transicionesMensaje);
      } else {
        console.error("La cadena no es válida");
        console.error(mensajeError);
        console.log('Transiciones:');
        console.log(transicionesMensaje);
      }
    
      // Mostrar mensaje de error en el componente
      setMensajeError(esValida ? "" : mensajeError);
    };
    
  
    return (
      <div className="bg-blue-50 min-h-screen pt-0 flex flex-col justify-center items-center p-4">
    
        <MonacoEditor
          width="800"
          height="400"
          language="javascript"
          theme="vs-dark"
          value={editorContent}
          onChange={(newContent) => setEditorContent(newContent)}
          className="rounded-lg shadow-lg mb-4"
        />
    
        <button
          onClick={handleValidarClick}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Compilar
        </button>
    
        <p className="text-lg font-semibold mt-2">
          La cadena es válida: {esValida ? 'Sí' : 'No'}
        </p>
    
        {mensajeError && (
          <p className="text-red-500 text-sm mt-2">
            {mensajeError}
          </p>
        )}
    
      </div>
    );
    
  }

export default App;
