import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  Authenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
  Flex,
} from "@aws-amplify/ui-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  TiktokLogo,
  InstagramLogo,
  PinterestLogo,
  Storefront,
} from "phosphor-react";
import { useState } from "react";
// import fofo from './assets/Fofo_Curious2.png';
import fofo from './assets/Fofo_Gif.gif';

function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

function LandingPage() {
  return (
      <View className="App">
        <Card>
          <Flex justifyContent={"center"}>
            <Heading level={1} margin={".4em"}>
              falo fofo
            </Heading>
          </Flex>
          <Flex justifyContent={"center"}>
            <img src={fofo} alt={'Fofo, a rabbit like creature'} width={'250em'} height={'400em'} style={{marginLeft: '2em'}}></img>
          </Flex>
        </Card>
        <Icons />
      </View>
  );
}

function Icons() {
  const [storeHovered, setStoreHovered] = useState<boolean>(false);
  const [pinterestHovered, setPinterestHovered] = useState<boolean>(false);
  const [tiktokHovered, setTiktokHovered] = useState<boolean>(false);
  const [instagramHovered, setInstagramHovered] = useState<boolean>(false);

  const setHoverState = (event: any, target?: string) => {
    const hoverState = event?.type === 'mouseenter';

    switch (target) {
      case 'store':
        setStoreHovered(hoverState);
        break;
      case 'pinterest':
        setPinterestHovered(hoverState);
        break;
      case 'tiktok':
        setTiktokHovered(hoverState);
        break;
      case 'instagram':
        setInstagramHovered(hoverState);
        break;
      case 'default':
        setStoreHovered(hoverState);
        setPinterestHovered(hoverState);
        setTiktokHovered(hoverState);
        setInstagramHovered(hoverState);
    }
  } 
  return (
    <Card margin={".5em"}>
      <Flex justifyContent={"center"}>
        <a href="https://www.teacherspayteachers.com/Store/Falofofo">
          <div style={{width: "3.1em"}}>
          <Storefront
            id="store"
            size={storeHovered ? 70 : 48}
            color="#145d44"
            weight="duotone"
            onMouseEnter={(e) => setHoverState(e, 'store')}
            onMouseLeave={(e) => setHoverState(e, 'store')}
            onClick={(e) => setHoverState(e)}
          />
          </div>
        </a>
        <a href="https://www.pinterest.com/falofofo/">
        <div style={{width: "3.1em"}}>
          <PinterestLogo
            id="pinterest"
            size={pinterestHovered ? 70 : 48}
            color="#145d44"
            weight="duotone"
            onMouseEnter={(e) => setHoverState(e, 'pinterest')}
            onMouseLeave={(e) => setHoverState(e, 'pinterest')}
            onClick={(e) => setHoverState(e)}
          />
          </div>
        </a>
        <a href="https://www.tiktok.com/@falofofo">
        <div style={{width: "3.1em"}}>
          <TiktokLogo
            id="tiktok"
            size={tiktokHovered ? 70 : 48}
            color="#145d44"
            weight="duotone"
            onMouseEnter={(e) => setHoverState(e, 'tiktok')}
            onMouseLeave={(e) => setHoverState(e, 'tiktok')}
            onClick={(e) => setHoverState(e)}
          />
          </div>
        </a>
        <a href="https://www.instagram.com/falofofo_eu/">
        <div style={{width: "3.1em"}}>
          <InstagramLogo
            id="instagram"
            size={instagramHovered ? 70 : 48}
            color="#145d44"
            weight="duotone"
            onMouseEnter={(e) => setHoverState(e, 'instagram')}
            onMouseLeave={(e) => setHoverState(e, 'instagram')}
            onClick={(e) => setHoverState(e)}
          />
          </div>
        </a>
      </Flex>
    </Card>
  );
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
