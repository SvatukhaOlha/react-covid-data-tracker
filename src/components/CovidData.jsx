import React, {useState} from 'react'
import CovidDataGraphs from './CovidDataGraphs';
import { Pagination, Container } from '@mui/material';
import MenuBtn from './MenuBtn';

function CovidData({covidData}) {
    const [page, setPage] = useState(1);
  
  if (covidData) {
    covidData =  covidData.map(el => {
      return (
          <CovidDataGraphs 
          province={el.Province} 
          active={el.Active}
          date={el.Date.slice(0, -10)}
          confirmed={el.Confirmed}
          death={el.Deaths}
          key={el.ID} />
        ) 
    })
  }

//   Pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

//   Shows max 10 countries per page
  const maxResultPerPage = covidData.slice((page*10)-10, (page*10) - 1)
  
  return (
    <Container maxWidth='sm' className='container'>
      <MenuBtn />
        <Pagination 
        count={Math.ceil(covidData.length/10)}
        onChange={handleChangePage} 
        variant="outlined" 
        color="primary"
        className='pagination' />
          {maxResultPerPage}
    </Container>
    )
}

export default CovidData
