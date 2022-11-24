import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import styles from "./App.module.css";
import "./reset.css";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>main</main>
      </div>
    </div>
  );
}
