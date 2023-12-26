import React, { useState } from 'react';
import { Box, IconButton, Collapse, List, ListItem, ListItemText } from '@mui/material';
import { ExpandMore as ExpandMoreIcon, ExpandLess as ExpandLessIcon } from '@mui/icons-material';

import { useGetResumesQuery } from '../../../services/useApi';

const Resume = () => {
  const {
    data: resumeInfo,
    isError: isResumeInfoError,
    isLoading: isResumeInfoLoading,
    isFetching: isResumeInfoFetching,
  } = useGetResumesQuery();

  const nirvanaEnv = "https://nirana-backend.onrender.com";
  const [expandedResumeId, setExpandedResumeId] = useState(null);

  const handleExpand = (resumeId) => {
    if (expandedResumeId === resumeId) {
      setExpandedResumeId(null);
    } else {
      setExpandedResumeId(resumeId);
    }
  };

  return (
    <Box>
      <List>
        {resumeInfo?.map((item, index) => (
          <React.Fragment key={item._id}>
            <ListItem button onClick={() => handleExpand(item._id)}>
              <ListItemText primary={`${index + 1}. ${item.name}`} />
              {expandedResumeId === item._id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItem>
            <Collapse in={expandedResumeId === item._id} timeout="auto" unmountOnExit>
              <iframe
                title={`Resume_${item._id}`}
                style={{ width: '100%', height: '800px' }}
                src={nirvanaEnv + item.resumeFilePath}
                frameBorder="0"
              />
            </Collapse>
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}

export default Resume