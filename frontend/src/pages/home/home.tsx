// Home.tsx
import AddPost from "./AddPost";
import Balance from "./Balance";
import Portafolio from "./Portafolio";
import Teams from "./Teams";
import UserCard from "./UserCard";
import UserPos from "./UserPos";
import Hero from "./Hero"; 

const users = [
  {
    id: 1,
    name: "Juan Pérez",
    profession: "Desarrollador de Software",
    skills: ["JavaScript", "React", "Node.js"],
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "María López",
    profession: "Diseñador Gráfico",
    skills: ["Photoshop", "Illustrator", "Figma"],
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Carlos García",
    profession: "Documentador",
    skills: ["Markdown", "Scrivener", "Confluence"],
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Ana Torres",
    profession: "Arquitecto",
    skills: ["AutoCAD", "Revit", "SketchUp"],
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Pedro Martínez",
    profession: "Médico",
    skills: ["Diagnóstico Clínico", "Cirugía General", "Anatomía"],
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

function Home() {
  return (
    <div className="home-container">
      {/* Columna Izquierda */}
      <div className="left-column">
        <Balance />
        <Portafolio />
      </div>

      {/* Columna Central */}
      <div className="center-column">
        <AddPost />
        {users.map((user) => (
          <UserCard key={user.id} userData={user} />
        ))}
      </div>

      {/* Columna Derecha */}
      <div className="right-column">
        <UserPos />
        <Teams />
      </div>
    </div>
  );
}

export default Home;
