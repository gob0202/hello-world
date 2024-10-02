import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

function EditCar(props) {
  const [open, setOpen] = useState(false);
  const [car, setCar] = useState({
    brand: '',
    model:'',
    color: '',
    year: '',
    tuel: '',
    price: ''
  })

  const handleClickOpen = () => { 
    setCar({
      brand: props.data.row.brand,
      model: props.data.row.model,
      color: props.data.row.color,
      year: props.data.row.year,
      fuel: props.data.row.fuel,
      price: props.data.row.price,
    })
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

  const handleChange = (event) => {
  setCar({...car, [event.target.name]: event.target.value});
  }

  const handleSave = () => {
    props.updateCar(car, props.data.id);
    handleClose();   
  }

  return ( 
  <div>
    <IconButton onClick={handleClickOpen}>
    <EditIcon color="primary" /></IconButton>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit Car</DialogTitle>            
      <DialogContent>
        <input placeholder='Brand' name="brand" value={car.brand} onChange={handleChange}/>
        <br/>
        <input placeholder='Model' name="model" value={car.model} onChange={handleChange}/>
        <br/>
        <input placeholder='Color' name="color" value={car.color} onChange={handleChange}/>
        <br/>
        <input placeholder='Year' name="year" value={car.year} onChange={handleChange}/>
        <br/>
        <input placeholder='Price' name="price" value={car.price} onChange={handleChange}/>
        <br/>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  </div>
  )
}

export default EditCar;