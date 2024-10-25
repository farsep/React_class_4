/*import './App.css';
import { DBS_Characters_List } from './components/DBS_Characters_List.tsx';
import DBS_Data from './data/DBS_Data.ts';
function App() {
  return (
    <>

        {DBS_Data.map(({name, image, id}) => (
            <DBS_Characters_List name={name} image={image} key={id} />
        ))}a
    </>
  )
}

export default App*/

import './App.css';
import { DBS_Characters_List } from './components/DBS_Characters_List.tsx';
import DBS_Data from './data/DBS_Data.ts';

function App() {
    return (
        <>
            {DBS_Data.map(({ name, image, id }) => {
                return (
                    <DBS_Characters_List name={name} image={image} key={id}/>
                );
            })}
        </>
    );
}

export default App;
