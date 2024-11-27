import React from 'react';
import { Pagination } from '@mui/material';

const PageControl = ({ count, page, onChange }) => {
  return (
    <Pagination
      count={count}
      page={page}
      onChange={onChange}
      color="primary"
      sx={{
        '& .Mui-selected': {
          backgroundColor: 'primary.main !important',
          color: 'white !important',
          fontWeight: 600,
        },
        '& .MuiPaginationItem-root': {
          fontSize: '14px',
          margin: '0 4px',
        },
      }}
    />
  );
};

export default PageControl;
