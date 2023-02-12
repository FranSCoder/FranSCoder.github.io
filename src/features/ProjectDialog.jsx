import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogContent';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Image from 'mui-image';
import React from 'react';
import { useTranslation } from 'react-i18next';

function ProjectDialog({ onClose, projectId, open }) {
  const handleClose = () => {
    onClose(projectId);
  };

  const { t } = useTranslation();

  if (open) {
    return (
      <Dialog onClose={handleClose} open={open} maxWidth='sm'>
        <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: '30px',
            paddingBottom: '0',
            textDecoration: 'underline',
          }}
        >
          {t(`projects.${Number(projectId)}.title`)}
        </DialogTitle>
        <DialogContent
          sx={{
            paddingBottom: '0',
          }}
        >
          <Image
            src={t(`projects.${Number(projectId)}.image`)}
            height='100%'
            width='100%'
            fit='cover'
            duration={900}
            easing='cubic-bezier(0.7, 0, 0.6, 1)'
            showLoading={false}
            errorIcon={true}
            shift={null}
            distance='100px'
            shiftDuration={900}
            bgColor='inherit'
          />
          <Box paddingY={1}>
            <Typography variant='body1'>
              {t(`projects.${Number(projectId)}.description`)}
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            paddingY: '20px',
          }}
        >
          <Link
            href={t(`projects.${Number(projectId)}.url`)}
            target='_blank'
            rel='noopener'
            sx={{
              textDecoration: 'none',
            }}
          >
            <Button
              variant='contained'
              sx={{
                ':hover': {
                  backgroundColor: 'lightskyblue',
                },
              }}
            >
              {t('dialogButtons.item1')}
            </Button>
          </Link>
          <Link
            href={`https://github.com/FranSCoder/${t(
              `projects.${Number(projectId)}.path`
            )}`}
            target='_blank'
            rel='noopener'
            sx={{
              textDecoration: 'none',
            }}
          >
            <Button
              variant='contained'
              sx={{
                ':hover': {
                  backgroundColor: 'lightskyblue',
                },
              }}
            >
              {t('dialogButtons.item2')}
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    );
  }
}

export default ProjectDialog;
