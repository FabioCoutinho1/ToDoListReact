const fetchTask = async () => {
  const res = await fetch("http://localhost:3000/tasks");
  const data = res.json();
  return data;
};

export default fetchTask;
