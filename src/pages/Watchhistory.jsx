import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getHistory } from '../service/allapi';



function Watchhistory() {

  const [history, setHistory] = useState([])


  useEffect(() => {
    getWatchHistory()


  }, [])


  const getWatchHistory = async () => {
    const { data } = await getHistory()
    setHistory(data)


  }
  console.log(history);



  return (
    <>


      <TableContainer className=' border' component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">NAME</TableCell>
              <TableCell align="right">URL</TableCell>
              <TableCell align="right">DATE</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>

            {
              history?.map((item, index) => (

                <TableRow>
                  <TableCell component="th" scope="row">
                    {index+1}
                  </TableCell>
                  <TableCell align="right">{item?.categoryName}</TableCell>
                  <TableCell align="right">{item?.url}</TableCell>
                  <TableCell align="right">{item?.date}</TableCell>

                </TableRow>




              ))

            }



          </TableBody>
        </Table>
      </TableContainer>


    </>
  )
}

export default Watchhistory