import { ChakraProvider, Spinner, Center } from "@chakra-ui/react";
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from "../components/Login";
import { auth } from "../firebaseconfig"
import  "../styles/Login.module.css"; // Adjust the import path

function App({ Component, pageProps }) {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <ChakraProvider>
        <Center h="100vh">
          <Spinner size="xl" />
        </Center>
      </ChakraProvider>
    )
  }

  if (!user) {
    return (
      // Site başlangıç noktası
      <ChakraProvider>
        <Login /> 
      </ChakraProvider>
    )
  }

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App;