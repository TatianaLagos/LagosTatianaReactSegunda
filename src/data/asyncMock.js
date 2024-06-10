import blusa from '../Imgenes/blusa.png';
import bufanda from '../Imgenes/bufanda.png';
import Bolso from '../Imgenes/Bolso.png';
import Chaqueta from '../Imgenes/Chaqueta.png';
import gafas from '../Imgenes/gafas.png';
import jean from '../Imgenes/jean.png';
import sombrero from '../Imgenes/sombrero.png';
import tennis from '../Imgenes/tennis.png';
import vestido from '../Imgenes/vestido.png';
export const productos = [
  {
    id: 1,
    nombre: "Blusa",
    precio: 65000,
    categoria: "Blusas",
    stock: 5,
    descripcion:"Las Blusa son 100% algodón. No se deforman, ni pierden el color.",
    img: blusa,
  },
  {
    id: 2,
    nombre: "Bufanda",
    precio: 13000,
    categoria: "Accesorios",
    stock: 5,
    descripcion:"La bufanda, hecha de algodón.",
    img: bufanda,
  },
  {
    id: 3,
    nombre: "Bolso",
    precio: 75000,
    categoria: "Accesorios",
    stock: 5,
    descripcion:" Bolso de mano, hecho de cuero.",
    img: Bolso,
  },
  {
    id: 4,
    nombre: "Chaqueta",
    precio: 225000,
    categoria: "Chaquetas",
    stock: 5,
    descripcion:"Prenda exterior de vestir, con tela de animal-print ",
    img: Chaqueta,
  },
  {
    id: 5,
    nombre: "Gafas",
    precio: 15000,
    categoria: "Accesorios",
    stock: 5,
    descripcion:"lentes tipo aviador para mujer.",
    img: gafas,
  },
  {
    id: 6,
    nombre: "Jean",
    precio: 14500,
    categoria: "Jeans",
    stock: 5,
    descripcion:"Jeans en denim con dobles costuras y remaches en las costuras",
    img: jean,
  },
  {
    id: 7,
    nombre: "Sombrero",
    precio: 45000,
    categoria: "Accesorios",
    stock: 5,
    descripcion:"Sombrero pava para mujer playa ",
    img: sombrero,
  },
  {
    id: 8, 
    nombre: "Vestido",
    precio: 85000,
    categoria: "Vestidos",
    stock: 5,
    descripcion:"vestido fiesta verde",
    img: vestido,
  },
  {
    id: 9,
    nombre: "Tennis",
    precio: 250000,
    categoria: "Tennis",
    stock: 5,
    descripcion:
      "tennis blancos para mujer",
    img: tennis,
  },
];

export const getProducts = () => {
  return new Promise((resolve) => { 
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => { 
    const productosFiltrados = productos.filter((prod) => prod.categoria === category);
    setTimeout(() => {
      resolve(productosFiltrados);
    }, 2000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => { 
    const productoFiltrado = productos.find((prod) => prod.id === parseInt(id));
    setTimeout(() => {
      resolve(productoFiltrado);
    }, 2000);
  });
};
