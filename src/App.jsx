// import { Provider } from 'react-redux'
// import { ChakraProvider } from "@chakra-ui/react";
// import { store } from './app/store';

import { Routing } from "./routing/Routing";

function App() {
  return (
    // <Provider store={store}>
    //   <ChakraProvider>
    //     <CustomRoutes />
    //   </ChakraProvider>
    // </Provider>
    <>
      <Routing />
    </>
  );
}

export default App;
