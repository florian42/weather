import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles["AppWrapper"]}>
      <Header />
      <main className={styles["AppMain"]}>
        <SearchBar />
      </main>
      <Footer />
    </div>
  );
}

export default App;
