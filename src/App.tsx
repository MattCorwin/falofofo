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
import { Backpack, KawaiiMood } from "react-kawaii";
import { useState, useEffect, MouseEvent } from "react";

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
  const [mood, setMood] = useState<KawaiiMood>("blissful");

  useEffect(() => {
    const moods: KawaiiMood[] = [
      "blissful",
      "excited",
      "happy",
      "lovestruck",
      "sad",
      "shocked",
    ];
    const updateMood = () => {
      const currentIdx = moods.findIndex((listMood) => listMood === mood);
      const nextIdx = currentIdx + 1 === moods.length ? 0 : currentIdx + 1;
      setMood(moods[nextIdx]);
    };
    const timer = setTimeout(updateMood, 1000);
    return () => clearTimeout(timer);
  }, [mood]);

  return (
      <View className="App">
        <Card>
          <Flex justifyContent={"center"}>
            <Heading level={1} margin={".5em"} marginTop={"1em"}>
              Falo fofo
            </Heading>
          </Flex>
          <Flex justifyContent={"center"}>
            <Backpack size={200} mood={mood} color="#99F693" />
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
  /*
  const onMouseEnter = (event: MouseEvent<SVGSVGElement>) => {
    setHovered((event as any).target.id);
  };
  const onMouseLeave = (event: MouseEvent<SVGSVGElement>) => {
    setHovered('');
  }
  const getSize = (id: string) => {
    if (hovered === id) {
      return 70;
    }
    return 48;
  };
  */
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
            onMouseEnter={() => setStoreHovered(true)}
            onMouseLeave={() => setStoreHovered(false)}
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
            onMouseEnter={() => setPinterestHovered(true)}
            onMouseLeave={() => setPinterestHovered(false)}
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
            onMouseEnter={() => setTiktokHovered(true)}
            onMouseLeave={() => setTiktokHovered(false)}
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
            onMouseEnter={() => setInstagramHovered(true)}
            onMouseLeave={() => setInstagramHovered(false)}
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
