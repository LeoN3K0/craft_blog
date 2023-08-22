import { Paper, Typography, Card, CardContent, CardMedia } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

export default function HighlightedPosts() {
  return (
    <Paper
      elevation={2}
      square
      sx={{
        backgroundColor: 'rgba(32, 178, 170, 0.2)',
        margin: '50px 0px',
        padding: '20px 0px',
      }}
    >
      <Grid2 container justifyContent='center' spacing={2}>
        <Grid2
          xs={12}
          sm={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant='h6' paddingBottom={2}>
            Blog Owners Suggested Post
          </Typography>
          <Card
            sx={{
              backgroundColor: 'whitesmoke',
              width: '50%',
              '&:hover': {
                transform: 'scale(1.05) perspective(1000px) rotateY(20deg)',
                boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)',
              },
            }}
          >
            <Typography
              variant='body2'
              color='text.secondary'
              sx={{ p: 2, marginLeft: 3 }}
            >
              Post Title
            </Typography>
            <CardMedia
              component='img'
              height='140'
              image='/landscape3.jpg'
              alt="Blog Owner's Suggested Post Image"
              sx={{
                margin: '0 auto',
                width: '80%',
                boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
              }}
            />
            <CardContent>
              <Typography
                variant='body2'
                color='text.secondary'
                sx={{ marginLeft: 3 }}
              >
                Content 1...
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2
          xs={12}
          sm={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant='h6' paddingBottom={2}>
            Communitys Top Rated Post
          </Typography>
          <Card
            sx={{
              backgroundColor: 'whitesmoke',
              width: '50%',
              '&:hover': {
                transform: 'scale(1.05) perspective(1000px) rotateY(-20deg)',
                boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)',
              },
            }}
          >
            <Typography
              variant='body2'
              color='text.secondary'
              sx={{ p: 2, marginLeft: 3 }}
            >
              Post Title
            </Typography>
            <CardMedia
              component='img'
              height='140'
              image='/landscape1.jpg'
              alt="Community's Top Rated Post Image"
              sx={{
                margin: '0 auto',
                width: '80%',
                boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
              }}
            />
            <CardContent>
              <Typography
                variant='body2'
                color='text.secondary'
                sx={{ marginLeft: 3 }}
              >
                Content 2...
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </Paper>
  );
}
