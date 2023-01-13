import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  Authenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { TiktokLogo,  InstagramLogo, PinterestLogo } from "phosphor-react";

function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/" element={<LandingPage/>}/>
        </Routes>
    </Router>
  );
}

function LandingPage () {
  return (
    <View className="App">
          <Card>
            <Heading level={1}>this is the landing page</Heading>
          </Card>
          <Icons/>
        </View>
  )
}

function Icons() {
  return (
    <Card>
      <PinterestLogo size={48} color="#145d44" weight="duotone" />
      <TiktokLogo size={48} color="#145d44" weight="duotone" />
      <InstagramLogo size={48} color="#145d44" weight="duotone" />
    </Card>
  )
}

function Admin() {
  return (
    <Authenticator hideSignUp={true}>
      {({ signOut, user }) => (
        <View className="App">
          <Card>
            <Image src={logo} className="App-logo" alt="logo" />
            <Heading level={1}>You are now signed in! Good job you.</Heading>
            <Button onClick={signOut}>Sign Out</Button>
          </Card>
        </View>
      )}
    </Authenticator>
  );
}

export default App;
