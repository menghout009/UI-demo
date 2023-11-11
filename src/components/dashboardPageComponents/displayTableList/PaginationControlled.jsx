
import "/src/components/dashboardPageComponents/displayTableList/stylePagination.css" 
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationControlled() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Stack spacing={2} className='text-primary'>
      {/* <Typography className='text-sm' size="">Page: {page}</Typography> */}
      {/* <Pagination count={10} page={page} onChange={handleChange} outline="primary" color="primary" size='small'/> */}
      {/* <Pagination count={10} color="secondary" /> */}
      <Pagination count={5}  color="primary"  />
      {/* <Pagination count={10} variant="outlined" color="primary" /> */}
    </Stack>
  );
}