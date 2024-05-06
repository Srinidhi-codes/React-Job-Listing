import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50rem',
    borderRadius: '20px',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function JobModal(props) {
    const { open, setOpen, jobDesc, index } = props

    const handleClose = () => setOpen(false);


    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {jobDesc[index]?.companyName}
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            {jobDesc[index]?.jobDetailsFromCompany}
                        </Typography>
                        <div className='mt-5'>
                            <Link to={jobDesc[index]?.jdLink} target='_blank' className='bg-[#55EFC2] text-[1rem] rounded-xl w-full p-3  text-center font-medium'>⚡ Easy Apply</Link>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}