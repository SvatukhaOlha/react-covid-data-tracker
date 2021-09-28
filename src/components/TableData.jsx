import React, {useState} from 'react'
import {Table, TableBody, TableContainer, 
    TableHead, TableRow, Paper, TableCell, Container} from '@mui/material/';
import {Link} from "react-router-dom";

function TableData({covidData, setCovidData}) {
    const [direction, setDirection] = useState(null) //direction for sort

    function sortBy(key) {
      setDirection(direction === 'up' ? 'down' : 'up');
      let sortedData = covidData.slice(0).sort((a,b) => {
        if(direction === 'up') {
          return b[key] - a[key]
        } else {
          return a[key] - b[key]
        }
      })
      setCovidData(sortedData);
    } 
    return (
    <Container maxWidth='md' className='container'>
      <Link to='/'  className='btn'>Go Back</Link>
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Province</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Active
              {direction === 'up' ? (
                <button className='sort' onClick={() => sortBy('Active')}>↑</button>)
              : (<button className='sort' onClick={() => sortBy('Active')}>↓</button>)
              }  
            </TableCell>
            <TableCell align="right">Confirmed
                {direction === 'up' ? (
                  <button className='sort' onClick={() => sortBy('Confirmed')}>↑</button>)
                : (<button className='sort' onClick={() => sortBy('Confirmed')}>↓</button>)
                } 
            </TableCell>
            <TableCell align="right">Deaths
                {direction === 'up' ? (
                  <button className='sort' onClick={() => sortBy('Deaths')}>↑</button>)
                : (<button className='sort' onClick={() => sortBy('Deaths')}>↓</button>)
                } 
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {covidData.map(row => (
            <TableRow
              key={row.Province}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Province}
              </TableCell>
              <TableCell align="right">{row.Date.slice(0,-10)}</TableCell>
              <TableCell className='sort' align="right">{row.Active}</TableCell>
              <TableCell className='sort' align="right">{row.Confirmed}</TableCell>
              <TableCell className='sort' align="right">{row.Deaths}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
</Container>
    )
}

export default TableData;
