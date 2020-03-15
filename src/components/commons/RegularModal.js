import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import logOut from './../assets/images/logout.png';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#ffffff',
    border: 'none',
    boxShadow: 'none',
    padding: 10,
    outline: 'none',
    opacity: 0.6,
    width: '80%',
    height: 'fit-content',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 10
  },
}));

export default function TransitionsModal({ action }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className='sectionLogOut' onClick={handleOpen}>
        <img src={logOut} alt='logOut' className='NavigationBarImg' />
    </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
            <div className={classes.paper}>
              <h3 className='ModalTitle'> Are you sure to sign out? </h3>
                <div style={{ width: '80%', margin: 'auto' }}>
                    <label className='LabeltextModal'>
                        Remember that if you log out, you must create a new account the next time you want to login.
                    </label>
                </div>
                <div className='buttonContainer'>
                    <div className='AceptButtonContainer'>
                        <button className='AceptButton' onClick={action}> Yes </button>
                    </div>
                    <div className='CancelButtonContainer'>
                        <button className='CancelButton' onClick={handleClose}> Cancel </button>
                    </div>
                </div>
            </div>
        </Fade>
      </Modal>
    </div>
  );
}
