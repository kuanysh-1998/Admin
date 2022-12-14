import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { PostList, PostEdit, PostCreate } from './Proshivka';

const dataProvider = jsonServerProvider('https://aimoto-server-production.up.railway.app')
function App() {
  return (
    
        <Admin dataProvider={dataProvider} > 
          <Resource name="proshivka" list={PostList} edit={PostEdit} create={PostCreate} />
        
        </Admin>
    
  );
}

export default App;
