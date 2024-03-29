import DogTile from "./DogTile";

function App() {
  return (
    <div className="App">
      Welcome to Learning Components
      <DogTile text = "Cute Puppy" image = "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"/>
      <DogTile text="Cute Puppy" image="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"> 
        <p>This is children prop</p>
      </DogTile>
    </div>
  );
}

export default App;
