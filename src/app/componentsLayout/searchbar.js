'use-client';

import { InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  return (
    <Paper
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 200,
        borderRadius: 3,
      }}
    >
      <SearchIcon sx={{ p: '5px', color: 'purple' }} />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder='Search Blogs'
        inputProps={{ 'aria-label': 'Search Blogs' }}
      />
    </Paper>
  );
}
