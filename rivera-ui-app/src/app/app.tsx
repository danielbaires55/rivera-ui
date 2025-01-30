import { Button } from '@rivera-ui/button';
import { Header } from '@rivera-ui/header';
import { Hero } from '@rivera-ui/hero';
import { Grid } from '@rivera-ui/grid';
import { PricingCard } from '@rivera-ui/pricingCard';
import { Footer } from '@rivera-ui/footer';

export function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Grid />
      <PricingCard />
      {/* <Button /> */}
      <Footer />
    </div>
  );
}

export default App;
