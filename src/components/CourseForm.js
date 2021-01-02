import React  from 'react'
import {Button, TextField,Grid} from '@material-ui/core'

const CourseForm = (props) => {
    
    return (
    
        <form onSubmit={props.addCourse}>
            <Grid
                justify="space-between" // Add it here :)
                container 
                spacing={6}
                >
                   <Grid item xs={12} md={6}> 
                        <TextField style = {{width: '100%' }}
                            id="outlined-basic" label="Outlined" 
                            variant="outlined" type="text" required onChange={props.updateCourse} value={props.current} />
                   </Grid>
                 
                   <Grid item xs={12} md={6}>
                       <Button style = {{width: '60%',marginLeft:'10%'}} variant="contained" color="primary" type="submit" > Add Course </Button>
                    </Grid>
             </Grid>
        </form>
    )
}

export default CourseForm
