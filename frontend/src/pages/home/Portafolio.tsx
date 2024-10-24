// Portafolio.tsx
import React, { useEffect, useState } from 'react';
import styles from './Portafolio.module.css'; // Importar el CSS modular

const Portafolio: React.FC = () => {
  const data = [
    { name: 'Juan', description: '5 estrellas', rating: 5 },
    { name: 'Shakira', description: '4 estrellas', rating: 4 },
    { name: 'Carlos', description: '5 estrellas', rating: 5 },
    { name: 'Maria', description: '4 estrellas', rating: 4 },
    { name: 'Luis', description: '5 estrellas', rating: 5 },
    { name: 'Ana', description: '4 estrellas', rating: 4 },
    { name: 'Pedro', description: '5 estrellas', rating: 5 },
    { name: 'Lucia', description: '5 estrellas', rating: 5 },
    { name: 'Esteban', description: '4 estrellas', rating: 4 },
    { name: 'Camila', description: '5 estrellas', rating: 5 },
    { name: 'Isabel', description: '4 estrellas', rating: 4 },
    { name: 'Jorge', description: '5 estrellas', rating: 5 },
    { name: 'Valentina', description: '4 estrellas', rating: 4 },
    { name: 'Fabian', description: '5 estrellas', rating: 5 },
    { name: 'Mateo', description: '4 estrellas', rating: 4 },
    { name: 'Sofia', description: '5 estrellas', rating: 5 },
    { name: 'Manuel', description: '4 estrellas', rating: 4 },
    { name: 'Claudia', description: '5 estrellas', rating: 5 },
    { name: 'Ricardo', description: '4 estrellas', rating: 4 },
    { name: 'Carolina', description: '5 estrellas', rating: 5 },
    { name: 'Pablo', description: '4 estrellas', rating: 4 },
    { name: 'Fernanda', description: '5 estrellas', rating: 5 },
    { name: 'Sebastian', description: '4 estrellas', rating: 4 },
    { name: 'Gabriel', description: '5 estrellas', rating: 5 },
    { name: 'Diego', description: '4 estrellas', rating: 4 },
    { name: 'Andrea', description: '5 estrellas', rating: 5 },
    { name: 'Daniel', description: '4 estrellas', rating: 4 },
    { name: 'Angela', description: '5 estrellas', rating: 5 },
    { name: 'Miguel', description: '4 estrellas', rating: 4 },
  ];

  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 4) % (data.length * 20));
    }, 36);

    return () => clearInterval(interval);
  }, [data.length]);

  const renderStars = (rating: number) => (
    Array(5)
      .fill(0)
      .map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 ${index < rating ? styles.starFilled : styles.starEmpty}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Most Featured Users</h2>
        <button className={styles.closeButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v16h16M4 4l16 16" />
          </svg>
        </button>
      </div>

      <div className={styles.listContainer}>
        <ul className={styles.userList} style={{ transform: `translateY(-${position}px)` }}>
          {Array(10)
            .fill([...data])
            .flat()
            .map((user, index) => (
              <li key={index} className={styles.userItem}>
                <div className={styles.userInfo}>
                  <div className={styles.avatar}>
                    <span>{user.name[0]}</span>
                  </div>
                  <div>
                    <p className={styles.userName}>{user.name}</p>
                    <p className={styles.userDescription}>{user.description}</p>
                  </div>
                </div>
                <div className={styles.userRating}>{renderStars(user.rating)}</div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Portafolio;
