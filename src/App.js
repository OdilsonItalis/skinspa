import LandingPageLayout from "./layouts/LandingPageLayout";
import SpinspaLandingPage from "./pages/SpinspaLanding";

function App() {
  return (
    <div className="App">
      <LandingPageLayout>
        <SpinspaLandingPage />
      </LandingPageLayout>
    </div>
  );
}

export default App;
