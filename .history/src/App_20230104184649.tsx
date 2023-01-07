import Navbar from "@/scenes/navbar";

function App() {

const [selectedPage, setSelectedPage] = useState('home');

  return (
    <div className="app bg-gray-20">
      <Navbar 
        selectedPage={selectedPage}
        setSelectedPage={selectedPage}
      />
    </div>
  )
}

export default App
