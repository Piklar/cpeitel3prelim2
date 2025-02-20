import './index.css';
import { useState } from 'react';
import { skills } from './data';
import { Box, Button, Typography } from '@mui/material';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const hasNext = index < skills.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleBackClick() {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(skills.length - 1);
    }
  }


  let skill = skills[index];

  return (
    <Box sx={{width: '500px', margin: 'auto', padding: '20px', borderRadius: '10px', boxShadow: 3, bgcolor: 'white'}}>
      <Typography variant="h5">10 Things that Require Zero Talent</Typography>
      <Typography variant="h6" color='grey'>by Ernz Danielle Manalo</Typography>

      <Box sx={{ mt: 2 }}>
        <img className="skills-image" src={skill.url} alt={skill.alt} style={{ width: '100%', borderRadius: '10px' }} />
      </Box>

      <Typography variant="h5" fontWeight="bold" sx={{ mt: 2 }}>{skill.skill}</Typography>

          <Typography variant="body2"  sx={{ mt: 1, px: 2 }}>
          {skill.description}
          </Typography>

      <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
        <Button variant="contained" color="info" onClick={handleBackClick}>
          Back
        </Button>
        
        <Button variant="contained" color="info" onClick={handleNextClick}>
          Next
        </Button>
      </Box>

    </Box>
  );
}
