import "./App.scss"
import Button from '@mui/material/Button';
import ButtonAppBar from "./NavBar";
import SimpleAccordion from "./Accordion";
function App() {

  return (
    <section>
      <ButtonAppBar />
      <div className="App">
        <div className="box">
          <h1 className="title">Styling with scss</h1>
        </div>
      </div>
      <div>
        <p className="text-xl text-green-500">Styling with Tailwind</p>
      </div>
      <SimpleAccordion />
      <Button variant="contained" sx={{color: 'black'}}>Contained</Button>

    </section> 

  );
}

export default App;