import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box'; 

export const PricingCard: React.FC = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
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
          title="Basic Plan"
          subheader="Perfect for small teams"
        />
        
        {/* Pricing Information */}
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            $19.99
          </Typography>
          <Typography variant="body2" color="textSecondary">
            /month
          </Typography>
        </CardContent>

        {/* Features List */}
        <CardContent>
          <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 1 }}>
            - 1 User License
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 1 }}>
            - 5GB Cloud Storage
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 1 }}>
            - Basic Support
          </Typography>
        </CardContent>

        {/* Call to Action */}
        <CardActions>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>

        {/* Expandable Details */}
        <CardActions disableSpacing>
          <IconButton
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon sx={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }} />
          </IconButton>
        </CardActions>

        {/* Collapsible Details */}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography sx={{ marginBottom: 2 }}>
              For more advanced features, consider upgrading to our Premium Plan. You'll get:
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: 2 }}>
              - 10 User License
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: 2 }}>
              - 50GB Cloud Storage
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: 2 }}>
              - 24/7 Premium Support
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
};

export default PricingCard;
