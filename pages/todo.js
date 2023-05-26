import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Todos = ({ todos }) => {
  return (
    <div className={styles.container}>
      <h1>Todos</h1>
      {todos.length === 0 ? (
        <>Loading.....</>
      ) : (
        todos.slice(0, 100).map((item) => {
          return (
            <Link href={`/${item.id}`} key={item.id}>
              <p>
                {item.id} {item.title}
              </p>
            </Link>
          );
        })
      )}
    </div>
  );
};

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return {
    props: {
      todos: data,
    },
  };
}

export default Todos;
