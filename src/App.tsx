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
      } else {
        console.error("La cadena no es válida");
        console.error(mensajeError);
      }
    
      // Mostrar mensaje de error en el componente
      setMensajeError(esValida ? "" : mensajeError);
    };
    
  
    return (
      <div>


  
        <MonacoEditor
          width="800"
          height="600"
          language="javascript"
          theme="vs-dark"
          value={editorContent}
          onChange={(newContent) => setEditorContent(newContent)}
        />
  
        <button onClick={handleValidarClick}>Validar</button>
        <p>La cadena es válida: {esValida ? 'Sí' : 'No'}</p>
        {mensajeError && (
        <p style={{ color: "red" }}>{mensajeError}</p>
        )}
        
      </div>
    );
  }

export default App;
