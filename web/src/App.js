import './App.css';
import AppHeader from './components/AppHeader';
import TattooItem from './components/TattooItem';
import TattooPost from './components/TattooPost';
import tattoos from './data/tattoos';
import {useState} from 'react';
import AppSearch from './components/AppSearch';

function App() {

  //state is a plain javascript object that is data we can use in App()
  //setState() is a method that we can use to update state
  //This variable is a state variable that holds the current state of the app(selectedTattoo)
  const [selectedTattoo, setSelectedTattoo] = useState(null)
  const [searchText, setSearchText] = useState('')

  //Phone
  function onTattooOpenClicked(theTattoo){
    setSelectedTattoo(theTattoo) //Has changing state with selectedTattoo.
  }

  //unphone
  function onTattooCloseClicked() {
    setSelectedTattoo(null)
  }

  //สิ่งที่จะเก็บใน filteredTattoos เป็น component
  //สิ่งที่จะเก็บใน tattooElements เป็น component
  const tattooElements = tattoos.filter((tattoo) => {
    return tattoo.title.toLowerCase().includes(searchText.toLowerCase())
  }).map((tattoo, index) => {
    return <TattooItem key={index} tattoo={tattoo} onTattooClicked={onTattooOpenClicked}/>
  })

  //Store component ที่จะเกิดขึ้น
  let tattooPost = null

  //state has changed ทำให้คำสั่งทั้งหมดใน App รันใหม่ ทำให้ some UI มีการเปลี่ยนแปลง
  //If selectedTattoo is not null, we want to show the TattooPost component
  if (!!selectedTattoo) {
    //tattoo becomes props that receives from state called selectedTattoo
    tattooPost = <TattooPost tattoo={selectedTattoo} onBgClick={onTattooCloseClicked}/>
  }

  return (
    <div className="App">
      <AppHeader/>
      <section className='app-section'>
        <div className='app-container'>
          <AppSearch value={searchText} onValueChange={setSearchText}/>
          <div className="app-grid">
            {tattooElements}
          </div>
        </div>
      </section>
      {tattooPost}
    </div>
  );
}

export default App;
