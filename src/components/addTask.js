import react from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
function addTask(){

    return (
        <>
        <div>
           <textarea name="add task" placeholder="Add task" /> 
           <Fab color="primary" aria-label="add">
                <AddIcon />
          </Fab>
          <div>hello</div>
        </div>
        </>
    )
}

export default addTask;