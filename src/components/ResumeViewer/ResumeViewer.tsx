import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from '@mui/material';

interface ResumeViewerProps {
  resumeLink: string;
}

const ResumeViewer: React.FC<ResumeViewerProps> = ({ resumeLink }) => {
  const [isPreviewVisible, setIsPreviewVisible] = useState<boolean>(false);

  const handleTogglePreview = () => {
    setIsPreviewVisible((prev) => !prev); // Toggle visibility of the preview
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeLink;
    link.download = 'Your_Resume.pdf'; // Set the name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <Button
        variant='contained'
        onClick={handleTogglePreview}
        sx={{
          backgroundColor: '#3dcfb6',
          color: 'black',
          '&:hover': {
            backgroundColor: '#3dccc7',
          },
        }}
      >
        {isPreviewVisible ? 'Hide Preview' : 'Preview Resume'}
      </Button>

      <Dialog
        open={isPreviewVisible}
        onClose={handleTogglePreview}
        maxWidth='md'
        fullWidth
      >
        <DialogTitle>Resume Preview</DialogTitle>
        <DialogContent>
          <Typography variant='body1'>
            It seems that the document cannot be displayed directly here. You
            can download or preview my resume using the button below.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDownload} color='primary'>
            Download Resume
          </Button>
          <Button onClick={handleTogglePreview} color='secondary'>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ResumeViewer;
