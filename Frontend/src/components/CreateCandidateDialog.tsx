// import * as React from "react";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogTitle from "@mui/material/DialogTitle";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import {
//   Box,
//   DialogContentText,
//   FormControl,
//   FormControlLabel,
//   FormLabel,
//   Grid,
//   InputLabel,
//   MenuItem,
//   Radio,
//   RadioGroup,
//   Select,
// } from "@mui/material";
// import { States, assembly, party } from "../utils/data";
// import { useState } from "react";
// interface Props {
//   open: boolean;
//   handleClose: () => void;
// }
// export default function FormCandidateDialog({ open, handleClose }: Props) {
//   const [startDate, setStartDate] = useState(new Date());
//   return (
//     <React.Fragment>
//       <Dialog open={open} onClose={handleClose} maxWidth="md">
//         <DialogTitle>Create Candidate</DialogTitle>
//         <DialogContent style={{ minHeight: "50vh" }}>
//           <DialogContentText>Please Fill the form below</DialogContentText>
//           <Grid container spacing={2}>
//             <Grid item md={4}>
//               <TextField
//                 autoFocus
//                 required
//                 margin="dense"
//                 id="name"
//                 name="name"
//                 label="Enter Name"
//                 type="text"
//                 variant="standard"
//               />
//             </Grid>
//             <Grid item md={4}>
//               <TextField
//                 autoFocus
//                 required
//                 margin="dense"
//                 id="email"
//                 name="email"
//                 label="Email Address"
//                 type="email"
//                 variant="standard"
//               />
//             </Grid>
//             <Grid item md={4}>
//               <TextField
//                 autoFocus
//                 required
//                 margin="dense"
//                 id="aadhar"
//                 name="aadhar"
//                 label="Enter Aadhar No"
//                 type="text"
//                 variant="standard"
//               />
//             </Grid>
//             <Grid item md={4}>
//               <FormControl>
//                 <FormLabel id="demo-row-radio-buttons-group-label">
//                   Gender
//                 </FormLabel>
//                 <RadioGroup
//                   row
//                   aria-labelledby="demo-row-radio-buttons-group-label"
//                   name="row-radio-buttons-group"
//                 >
//                   <FormControlLabel
//                     value="female"
//                     control={<Radio />}
//                     label="Female"
//                   />
//                   <FormControlLabel
//                     value="male"
//                     control={<Radio />}
//                     label="Male"
//                   />
//                   <FormControlLabel
//                     value="other"
//                     control={<Radio />}
//                     label="Other"
//                   />
//                 </RadioGroup>
//               </FormControl>
//             </Grid>
//             <Grid item md={4}>
//               <TextField
//                 autoFocus
//                 required
//                 margin="dense"
//                 id="voterId"
//                 name="voterId"
//                 label="Enter Epic-no"
//                 type="text"
//                 variant="standard"
//               />
//             </Grid>
//             <Grid item md={4}>
//               <TextField
//                 autoFocus
//                 required
//                 margin="dense"
//                 id="mobile"
//                 name="mobile"
//                 label="Enter mobile"
//                 type="text"
//                 variant="standard"
//               />
//             </Grid>
//             <Grid item md={4}>
//               <TextField
//                 autoFocus
//                 required
//                 margin="dense"
//                 id="address"
//                 name="address"
//                 label="Enter address"
//                 type="text"
//                 variant="standard"
//               />
//             </Grid>
//             <Grid item md={4}>
//               <FormControl style={{ minWidth: "10rem" }}>
//                 <InputLabel id="demo-simple-select-label">
//                   Election Name
//                 </InputLabel>
//                 <Select
//                   labelId="demo-simple-select-label"
//                   id="demo-simple-select"
//                   //   value={age}
//                   label="Election Name"
//                   variant="standard"
//                   margin="dense"
//                   required

//                   //   onChange={handleChange}
//                 >
//                   <MenuItem value={"Lok Sabha"}>Lok Sabha</MenuItem>
//                   <MenuItem value={"Bidhan Sabha"}>Bidhan Sabha</MenuItem>
//                 </Select>
//               </FormControl>
//             </Grid>
//             <Grid item md={4}>
//               <FormControl style={{ minWidth: "10rem" }}>
//                 <InputLabel id="demo-simple-select-label">State</InputLabel>
//                 <Select
//                   labelId="demo-simple-select-label"
//                   id="demo-simple-select"
//                   //   value={age}
//                   label="State"
//                   margin="dense"
//                   variant="standard"
//                   required
//                   //   onChange={handleChange}
//                 >
//                   {States.map((item) => {
//                     return <MenuItem value={item}>{item}</MenuItem>;
//                   })}
//                 </Select>
//               </FormControl>
//             </Grid>
//             <Grid item md={4}>
//               <FormControl style={{ minWidth: "10rem" }}>
//                 <InputLabel id="demo-simple-select-label">Party</InputLabel>
//                 <Select
//                   labelId="demo-simple-select-label"
//                   id="demo-simple-select"
//                   //   value={age}
//                   label="Party"
//                   margin="dense"
//                   variant="standard"
//                   required
//                   //   onChange={handleChange}
//                 >
//                   {party.map((item) => {
//                     return <MenuItem value={item}>{item}</MenuItem>;
//                   })}
//                 </Select>
//               </FormControl>
//             </Grid>
//             <Grid item md={4}>
//               <FormControl style={{ minWidth: "10rem" }}>
//                 <InputLabel id="demo-simple-select-label">
//                   Select Assembly
//                 </InputLabel>
//                 <Select
//                   labelId="demo-simple-select-label"
//                   id="demo-simple-select"
//                   //   value={age}
//                   label="Assembly"
//                   margin="dense"
//                   variant="standard"
//                   required
//                   //   onChange={handleChange}
//                 >
//                   {assembly.map((item) => {
//                     return <MenuItem value={item}>{item}</MenuItem>;
//                   })}
//                 </Select>
//               </FormControl>
//             </Grid>
//             <Grid item md={4}>
//               <Box>
//                 <InputLabel id="demo-simple-select-label">Enter DOB</InputLabel>
//                 <DatePicker
//                   selected={startDate}
//                   onChange={(date) => setStartDate(date)}
//                   peekNextMonth
//                   showMonthDropdown
//                   showYearDropdown
//                   dropdownMode="select"
//                 />
//               </Box>
//             </Grid>
//           </Grid>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>close</Button>
//           <Button type="submit">Create</Button>
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   );
// }