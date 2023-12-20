function App() {
  const users = ["varadhan", "archana", "mohan", "varadhan"];

  return (
    <>
      {users.map((e) => {
        return (
          <>
            <h1>Welcome to {e}</h1>
          </>
        );
      })}
    </>
  );
}

export default App;
