import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1 id="name">
          <a href="#">your name</a>
        </h1>
        <nav>
          <div id="navbutton">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul id="nav" class="menuitems">
            <li>
              <a href="#gointro">Intro</a>
            </li>
            <li>
              <a href="#gostuff">Stuff</a>
            </li>
            <li>
              <a href="#gocontact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <div id="gohero" class="anchor"></div>
      <div id="gointro" class="anchor"></div>
      <div id="gostuff" class="anchor"></div>
      <div id="gocontact" class="anchor"></div>

      <main id="content">
        <section id="hero"></section>
        <section id="intro">
          <h2>Introduction</h2>
          <div class="cardcontent">
            <article>Stuff</article>
            <article>In</article>
            <article>Here</article>
          </div>
        </section>
        <section id="stuff">
          <h2>Stuff</h2>
        </section>
        <section id="contact">
          <h2>Contact</h2>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
