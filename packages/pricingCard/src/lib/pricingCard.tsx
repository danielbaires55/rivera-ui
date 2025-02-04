import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export const PricingCard: React.FC = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        mt: 1,
      }}
    >
      <Card
        sx={{
          maxWidth: 500, 
          width: "100%",
          p: 3,
          borderRadius: 3,
          boxShadow: 5,
        }}
      >
        {/* Header */}
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="plan">
              P
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={
            <Typography variant="h5" fontWeight="bold">
              Basic Plan
            </Typography>
          }
          subheader="Perfect for small teams"
        />

        {/* Pricing Information */}
        <CardContent>
          <Typography variant="h4" fontWeight="bold" color="primary">
            $19.99
          </Typography>
          <Typography variant="body1" color="textSecondary">
            /month
          </Typography>
        </CardContent>

        {/* Features List */}
        <CardContent>
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            ✅ 1 User License
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            ✅ 5GB Cloud Storage
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            ✅ Basic Support
          </Typography>
        </CardContent>

        {/* Call to Action */}
        <CardActions sx={{ justifyContent: "space-between" }}>
          <Button variant="contained" color="primary" fullWidth>
            Choose Plan
          </Button>
        </CardActions>

        {/* Expandable Details */}
        <CardActions disableSpacing>
          <IconButton
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon
              sx={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          </IconButton>
        </CardActions>

        {/* Collapsible Details */}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography sx={{ marginBottom: 2 }}>
              Upgrade to our Premium Plan for:
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 1 }}>
              ⭐ 10 User License
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 1 }}>
              ⭐ 50GB Cloud Storage
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 1 }}>
              ⭐ 24/7 Premium Support
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
};

export default PricingCard;
