import React from 'react'
import { CardContent, Typography } from '@mui/material';
import { Line } from 'react-chartjs-2';

function CovidDataGraphs({province, active, date, confirmed, death}) {
    
  // Data for graphs. Instaled from react-chartjs-2 library
  const data = {
        labels: ['Active', 'Confirmed', 'Death'],
        datasets: [
          {
            label: date,
            data: [active, confirmed, death],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
        ],
        
      };
      
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };
      
    return (
 <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {date}
      </Typography>
      <Typography variant="h5" component="div">
       {province}
      </Typography>
      <Typography variant="body2">
        <Line data={data} options={options} />
      </Typography>
  </CardContent>
    )
}

export default CovidDataGraphs
