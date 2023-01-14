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
import { TiktokLogo, InstagramLogo, PinterestLogo } from "phosphor-react";
import { Backpack, KawaiiMood } from "react-kawaii";
import { useState, useEffect } from "react";

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
      "ko",
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
    <Flex justifyContent={"center"}>
      <View className="App">
        <Card>
          <Flex justifyContent={"center"}>
            <Heading level={1}>this is the landing page</Heading>
          </Flex>
          <Flex justifyContent={"center"}>
            <Backpack size={200} mood={mood} color="#FDA7DC" />
          </Flex>
        </Card>
        <Icons />
      </View>
    </Flex>
  );
}

function Icons() {
  return (
    <Card>
      <Flex justifyContent={"center"}>
        <PinterestLogo size={48} color="#145d44" weight="duotone" />
        <TiktokLogo size={48} color="#145d44" weight="duotone" />
        <InstagramLogo size={48} color="#145d44" weight="duotone" />
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
