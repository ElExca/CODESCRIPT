import React, { useState } from "react";
import MonacoEditor from "react-monaco-editor";

// Inicializa el contenido del editor
type Transiciones = Record<string, Record<string, string>>;

const transiciones: Transiciones = {
  "0": { F: "1" },
  "1": { C: "2" },
  "2": { N: "3" },
  "3": { _: "4" },
  "4": {
    "(": "5",
    A: "4",
    B: "4",
    C: "4",
    D: "4",
    E: "4",
    F: "4",
    G: "4",
    H: "4",
    I: "4",
    J: "4",
    K: "4",
    L: "4",
    M: "4",
    N: "4",
    O: "4",
    P: "4",
    Q: "4",
    R: "4",
    S: "4",
    T: "4",
    U: "4",
    V: "4",
    W: "4",
    X: "4",
    Y: "4",
    Z: "4",
  },
  "5": { ")": "6" },
  "6": { "[": "7" },
  "7": {
    "": "7",
    ' ': '7',
    '\n': '7',
    '\r': '7',
    '\t': '7',
    ':': '8',
    A: "7",
    B: "7",
    C: "7",
    D: "7",
    E: "7",
    F: "7",
    G: "7",
    H: "7",
    I: "7",
    J: "7",
    K: "7",
    L: "7",
    M: "7",
    N: "7",
    O: "7",
    P: "7",
    Q: "7",
    R: "7",
    S: "7",
    T: "7",
    U: "7",
    V: "7",
    W: "7",
    X: "7",
    Y: "7",
    Z: "7",
    IF:"8"
  },
  "8": {'0': '8',
  '1': '8',
  '2': '8',
  '3': '8',
  '4': '8',
  '5': '8',
  '6': '8',
  '7': '8',
  '8': '8',
  '9': '8',
  "]": "9",
  ' ': '8',
  '\n': '8',
  '\r': '8',
  '\t': '8',
  A: "7",
  B: "7",
  C: "7",
  D: "7",
  E: "7",
  F: "7",
  G: "7",
  H: "7",
  I: "7",
  J: "7",
  K: "7",
  L: "7",
  M: "7",
  N: "7",
  O: "7",
  P: "7",
  Q: "7",
  R: "7",
  S: "7",
  T: "7",
  U: "7",
  V: "7",
  W: "7",
  X: "7",
  Y: "7",
  Z: "7",},
  "9":{} // Estado final
};

function validarCadena(cadena: string): boolean {
  let estado = '0';
  let dentroDeCorchetes = false;
  let caracteresDentroDeCorchetes = '';

  for (const caracter of cadena) {
    if (transiciones[estado] && transiciones[estado][caracter]) {
      estado = transiciones[estado][caracter];

      if (estado === '8') {
        // Entrar en el estado de corchetes
        dentroDeCorchetes = true;
      }

      if (estado === '9' && dentroDeCorchetes) {
        // Salir del estado de corchetes
        dentroDeCorchetes = false;
        caracteresDentroDeCorchetes = ''; // Restablecer caracteres dentro de corchetes
      }

      if (dentroDeCorchetes) {
        caracteresDentroDeCorchetes += caracter; // Recopilar caracteres dentro de corchetes
      }
    } else {
      return false; // Si no se cumple una transición, la cadena no es válida
    }
  }

  // Verifica si el estado actual es '9' después de recorrer la cadena completa
  return estado === '9' && !dentroDeCorchetes && !caracteresDentroDeCorchetes.includes(': ');
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
    const [cadena, setCadena] = useState('');
    const [esValida, setEsValida] = useState(false);
    const [editorContent, setEditorContent] = useState('');
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;
      setCadena(inputValue);
      setEsValida(false);
    };
  
    const handleValidarClick = () => {
      const esValida = validarCadena(editorContent); // Usar el contenido del editor
      setEsValida(esValida);
      const transicionesMensaje = generarTransiciones(editorContent); // Usar el contenido del editor
      console.log(`La cadena es válida: ${esValida}`);
      console.log('Transiciones:');
      console.log(transicionesMensaje);
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
      </div>
    );
  }

export default App;
