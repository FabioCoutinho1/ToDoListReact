const postForTask = async (task) => {
  try {
    const res = fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    if (!res.ok) {
      throw new Error("Erro ao salvar a tarefa");
    }

    const data = res.json()

    return data

  } catch (error) {
    console.error(error);
  }
};

export default postForTask;
