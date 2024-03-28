import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";

function App() {
  return (
    <main>
      {/* <Input id="name" label="name" type="text" />
      <Input id="age" label="Age" type="number" /> */}
      {/* <p>
        <Button el="button">A Button</Button>
      </p>

      <p>
        <Button el="anchor" href="https://www.google.com">
          A Link
        </Button>
      </p> */}
      <Container as={Button} />
    </main>
  );
}

export default App;
