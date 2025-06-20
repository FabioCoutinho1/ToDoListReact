import "./App.css";
import ContainerBoxTask from "./components/containerTask/ContainerBoxTask";
import RightMenu from "./components/rightAsideMenu/RightMenu";

function App() {
  return (
    <main className="flex h-screen bg-cover bg-[url(/src/assets/background.jpg)]">
      <ContainerBoxTask />
      <RightMenu />
    </main>
  );
}

export default App;
