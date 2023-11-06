// transiciones.ts

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
  "5": {
  A: "5",
  B: "5",
  C: "5",
  D: "5",
  E: "5",
  F: "5",
  G: "5",
  H: "5",
  I: "5",
  J: "5",
  K: "5",
  L: "5",
  M: "5",
  N: "5",
  O: "5",
  P: "5",
  Q: "5",
  R: "5",
  S: "5",
  T: "5",
  U: "5",
  V: "5",
  W: "5",
  X: "5",
  Y: "5",
  Z: "5",
  ",":"5", 
  ")": "6" },
  "6": { "[": "7" },
  "7": {
    "\n": "7",
    "\r": "7",
    "\t": "7",
    ":": "8",
    f:"19",
    i:"10",
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
  },
  "8": {
    "0": "9",
    "1": "9",
    "2": "9",
    "3": "9",
    "4": "9",
    "5": "9",
    "6": "9",
    "7": "9",
    "8": "9",
    "9": "9",
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
  },
  "9": {
    "]": "18",
    ")":"17",
    "}":"32",
    "0": "9",
    "1": "9",
    "2": "9",
    "3": "9",
    "4": "9",
    "5": "9",
    "6": "9",
    "7": "9",
    "8": "9",
    "9": "9",
    " ": "9",
    i:"10",
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
    "\n": "9",
    "\r": "9",
    "\t": "9",
  },
  "10": {"f":"11"},
  "11":{" ":"12",},
  "12":{
    A: "13",
    B: "13",
    C: "13",
    D: "13",
    E: "13",
    F: "13",
    G: "13",
    H: "13",
    I: "13",
    J: "13",
    K: "13",
    L: "13",
    M: "13",
    N: "13",
    O: "13",
    P: "13",
    Q: "13",
    R: "13",
    S: "13",
    T: "13",
    U: "13",
    V: "13",
    W: "13",
    X: "13",
    Y: "13",
    Z: "13",
    },
  "13":{ 
  A: "13",
  B: "13",
  C: "13",
  D: "13",
  E: "13",
  F: "13",
  G: "13",
  H: "13",
  I: "13",
  J: "13",
  K: "13",
  L: "13",
  M: "13",
  N: "13",
  O: "13",
  P: "13",
  Q: "13",
  R: "13",
  S: "13",
  T: "13",
  U: "13",
  V: "13",
  W: "13",
  X: "13",
  Y: "13",
  Z: "13",
  "<":"14",
  ">":"14",
  "=":"14"},
  "14":{
  "=":"14",
  A: "15",
  B: "15",
  C: "15",
  D: "15",
  E: "15",
  F: "15",
  G: "15",
  H: "15",
  I: "15",
  J: "15",
  K: "15",
  L: "15",
  M: "15",
  N: "15",
  O: "15",
  P: "15",
  Q: "15",
  R: "15",
  S: "15",
  T: "15",
  U: "15",
  V: "15",
  W: "15",
  X: "15",
  Y: "15",
  Z: "15",
  "0": "15",
  "1": "15",
  "2": "15",
  "3": "15",
  "4": "15",
  "5": "15",
  "6": "15",
  "7": "15",
  "8": "15",
  "9": "15",
  
  },
  "15":{
    "0": "15",
    "1": "15",
    "2": "15",
    "3": "15",
    "4": "15",
    "5": "15",
    "6": "15",
    "7": "15",
    "8": "15",
    "9": "15",
  A: "15",
  B: "15",
  C: "15",
  D: "15",
  E: "15",
  F: "15",
  G: "15",
  H: "15",
  I: "15",
  J: "15",
  K: "15",
  L: "15",
  M: "15",
  N: "15",
  O: "15",
  P: "15",
  Q: "15",
  R: "15",
  S: "15",
  T: "15",
  U: "15",
  V: "15",
  W: "15",
  X: "15",
  Y: "15",
  Z: "15",
  "(":"16"
  },
  "16":{
  i:"10",
  f:"19",
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
  },
  "17":{"]":"18"},
  "18":{},
  "19":{"o":"20"},
  "20":{"r":"21"},
  "21":{" ":"22"},
  "22":{
  A: "23",
  B: "23",
  C: "23",
  D: "23",
  E: "23",
  F: "23",
  G: "23",
  H: "23",
  I: "23",
  J: "23",
  K: "23",
  L: "23",
  M: "23",
  N: "23",
  O: "23",
  P: "23",
  Q: "23",
  R: "23",
  S: "23",
  T: "23",
  U: "23",
  V: "23",
  W: "23",
  X: "23",
  Y: "23",
  Z: "23",
  "0": "24",
  "1": "24",
  "2": "24",
  "3": "24",
  "4": "24",
  "5": "24",
  "6": "24",
  "7": "24",
  "8": "24",
  "9": "24",
},
"23":{
A:"23",  
B: "23",
C: "23",
D: "23",
E: "23",
F: "23",
G: "23",
H: "23",
I: "23",
J: "23",
K: "23",
L: "23",
M: "23",
N: "23",
O: "23",
P: "23",
Q: "23",
R: "23",
S: "23",
T: "23",
U: "23",
V: "23",
W: "23",
X: "23",
Y: "23",
Z: "23",
":":"25"},
"24":{
"0": "24",
"1": "24",
"2": "24",
"3": "24",
"4": "24",
"5": "24",
"6": "24",
"7": "24",
"8": "24",
"9": "24",
":":"25"},
"25":{
  A:"25",  
  B: "25",
  C: "25",
  D: "25",
  E: "25",
  F: "25",
  G: "25",
  H: "25",
  I: "25",
  J: "25",
  K: "25",
  L: "25",
  M: "25",
  N: "25",
  O: "25",
  P: "25",
  Q: "25",
  R: "25",
  S: "25",
  T: "25",
  U: "25",
  V: "25",
  W: "25",
  X: "25",
  Y: "25",
  Z: "25",
  "0": "25",
  "1": "25",
  "2": "25",
  "3": "25",
  "4": "25",
  "5": "25",
  "6": "25",
  "7": "25",
  "8": "25",
  "9": "25",
":":"27"
},
"27":{"+":"28","-":"29"},
"28":{"+":"30"},
"29":{"-":"30"},
"30":{"{":"31"},
"31":{
  i:"10",
  f:"20",
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
},
"32":{")":"17","]":"18"}
};

export default transiciones;
