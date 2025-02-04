import { useRef } from 'react';
import { Header } from '@rivera-ui/header';
import { Hero } from '@rivera-ui/hero';
import { Grid } from '@rivera-ui/grid';
import { PricingCard } from '@rivera-ui/pricingCard';
import { Footer } from '@rivera-ui/footer';
import { Box, Typography } from '@mui/material';
import { Form } from '@rivera-ui/form';

export function App() {
  const gridRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToGrid = () => {
    gridRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Header />
      <Hero onComponentsClick={handleScrollToGrid} />

      <div className="h-16"></div>

      {/* Sezione Grid */}
      <Box display="flex" justifyContent="center" py={3}>
        <Typography variant="h4" component="h2" fontWeight="bold">
          Grid
        </Typography>
      </Box>

      <div ref={gridRef}>
        <Grid />
      </div>

      <Box display="flex" justifyContent="center" py={2} mb={0}>
        <Typography variant="h4" component="h2" fontWeight="bold">
          Card
        </Typography>
      </Box>

      <Box mt={-20} mb={-15}>
        <PricingCard />
      </Box>

      <Box display="flex" justifyContent="center" py={2} mb={0} mt={-2}>
        <Typography variant="h4" component="h2" fontWeight="bold">
          Form
        </Typography>
      </Box>

      <Form />

      <Footer />
    </div>
  );
}

export default App;
