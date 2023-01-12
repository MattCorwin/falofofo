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

function App() {
  return (
    <Authenticator hideSignUp={true}>
      {({ signOut, user }) => (
        <View className="App">
          <Card>
            <Image src={logo} className="App-logo" alt="logo" />
            <Heading level={1}>You are now signed in! Good job you.</Heading>
          </Card>
          <Button onClick={signOut}>Sign Out</Button>
        </View>
      )}
    </Authenticator>
  );
}

export default App;
