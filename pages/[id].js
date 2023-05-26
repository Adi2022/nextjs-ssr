const SingleTodo = ({ todo }) => {
  return (
    <div>
      <h2>Single Todo</h2>
      <p>Ttile:{todo?.title}</p>
      <p>Id:{todo?.id}</p>
      <p>UserId:{todo?.userId}</p>
      <p>Status:{todo?.completed?"true":"false"}</p>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  const data = await response.json();
  return {
    props: {
      todo: data,
    },
  };
}

export default SingleTodo;
