import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component={'span'} color="text.danger" className="d-flex flex-column align-items-center">
            <span style={{fontFamily:"IRANSansXFaNum"}}>{`${Math.round(props.value)}%`}</span>
            <span style={{fontSize:"9px",color: "#707070"}}>رزرو شده</span>
        </Typography>
      </Box>
    </Box>
  );
}

export default CircularProgressWithLabel;
