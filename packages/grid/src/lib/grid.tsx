import { Box, Card, CardContent, Typography, Stack } from "@mui/material";
import styles from "./grid.module.css";

export function Grid() {
  const gridItems = [
    { title: "Design System", description: "Consistent UI components." },
    { title: "Dark Mode", description: "Built-in theme support." },
    { title: "Performance", description: "Optimized rendering speed." },
    { title: "Accessibility", description: "ARIA-compliant components." },
    { title: "Customization", description: "Fully extendable styles." },
    { title: "Open Source", description: "MIT-licensed and community-driven." },
  ];

  return (
    <Box className={styles.gridContainer}>
      <Stack 
        direction="row" 
        flexWrap="wrap" 
        justifyContent="center" 
        gap={4}
      >      
        {gridItems.map((item, index) => (
          <Card key={index} className={styles.gridItem}>
            <CardContent>
              <Typography variant="h5" component="h3">
                {item.title}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}

export default Grid;
