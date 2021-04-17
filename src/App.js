import logo from './logo.svg';
import './App.css';
import { Header } from './components/header.component';

function App() {
  const keyword = ['Developer', 'Photo enthusiast', 'Cinephile']
  return (
    <div className="App">

      <header className="App-header">
        <p className="icon">  </p>
        <img className="App-logo" src={`https://scontent.fcok7-1.fna.fbcdn.net/v/t1.6435-9/fr/cp0/e15/q65/157356657_3463373903772270_8903439184444970675_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=85a577&efg=eyJpIjoidCJ9&_nc_ohc=KuyG7R0A-D4AX95MMja&_nc_ht=scontent.fcok7-1.fna&tp=14&oh=1484677fa9f7ddc8d34ba2e551bbdd03&oe=609E7B6B`} alt="Logo" />

        <h1> Vaisakh M A </h1>

        <p>Hi, I'm a </p> <p><span class="toBeReplaced"> </span></p>

        {/* <h4> Angular  React  Python Agile Ngrx Redux Javascript D3.js Google cloud store</h4> */}
        {/* <Header></Header> */}

        <div class="entry-buttons">

          <div class="options">  <p> You're a Recruiter</p></div>
          <div class="options">  <p> You're a Friend/Family/Follower</p></div>

        </div>


      </header>
    </div>
  );
}

export default App;
