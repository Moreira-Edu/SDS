import BotaoNotificacao from "./components/botaoNotificacao";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <Card />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
