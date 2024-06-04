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
// export default function FormElectionDialog({ open, handleClose }: Props) {
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());
//   return (
//     <React.Fragment>
//       <Dialog open={open} onClose={handleClose} maxWidth="lg">
//         <DialogTitle>Create Election</DialogTitle>
//         <DialogContent style={{ minHeight: "40vh" }}>
//           <DialogContentText>Please Fill the form below</DialogContentText>
//           <Grid container spacing={10} columnSpacing={10}>
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
//               <Box>
//                 <InputLabel id="demo-simple-select-label">
//                   Election start Date
//                 </InputLabel>
//                 <DatePicker
//                   selected={startDate}
//                   onChange={(date) => setStartDate(date)}
//                   peekNextMonth
//                   showMonthDropdown
//                   showYearDropdown
//                   dropdownMode="select"
//                   required
//                 />
//               </Box>
//             </Grid>
//             <Grid item md={4}>
//               <Box>
//                 <InputLabel id="demo-simple-select-label">
//                   Election End Date
//                 </InputLabel>
//                 <DatePicker
//                   selected={endDate}
//                   onChange={(date) => setEndDate(date)}
//                   peekNextMonth
//                   showMonthDropdown
//                   showYearDropdown
//                   dropdownMode="select"
//                 />
//               </Box>
//             </Grid>
//             <Grid item md={4}></Grid>
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