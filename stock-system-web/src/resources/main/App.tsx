import { Routes, Route } from 'react-router-dom';

import LoginScreen from '../../screens/screenLogin/screen/loginScreen';
import HomeScreen from '../../screens/ScreenHome/screen/homeScreen';
import { ProductScreen } from '../../screens/screenProducts/screen/product';
import { CategoryScreen } from '../../screens/screenCategory/screen/category';
import InputScreen from '../../screens/screenInputs/screen/inputs';
import OutputScreen from '../../screens/screenOutputs/screen/output';
import ItemInputScreen from '../../screens/screenItemInput/screen/itemInput';
import ItemOutputScreen from '../../screens/screenItemOutput/screen/itemOutput';
import SupplierScreen from '../../screens/screenSupliers/screen/suppliers';
import UserScreen from '../../screens/screenUsers/screen/users';
import SettingsScreen from '../../screens/screenSettings/screen/settings';
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
        <Route path="/home" element={<HomeScreen />} />
          <Route path="/productScreen" element={<ProductScreen />} />
             <Route path="/categoryScreen" element={<CategoryScreen />} />
               <Route path="/inputScreen" element={<InputScreen />} />
                   <Route path="/outputScreen" element={<OutputScreen />} />
                       <Route path="/itemInputScreen" element={<ItemInputScreen />} />
                          <Route path="/itemOutputScreen" element={<ItemOutputScreen />} />
                               <Route path="/supplierScreen" element={<SupplierScreen />} />
                                  <Route path="/userScreen" element={<UserScreen />} />
                                        <Route path="/settingsScreen" element={<SettingsScreen />} />
    </Routes>
  );
}