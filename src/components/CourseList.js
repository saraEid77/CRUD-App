import React, { Component, Fragment } from 'react'
import {Button, Grid ,Chip} from '@material-ui/core';

export class CourseList extends Component {
  constructor(props) {  
        super(props)  
        this.state = { 
          ProductData: []  
        }  
      }  
    state = {
      isEdit :false
    }
    //render course 
    renderForm1 = () => {
      return(
        <li>
            <Grid
                justify="flex-end" // Add it here :)
                container 
                spacing={6}
                >
                   <Grid item xs={12} md={6}> 
                   <Chip label={ this.props.details.name } />
                    
                   </Grid>
                   < Grid item xs={12} md={6}>
                        <Button mr={3} variant="contained" color="primary" type="submit" onClick={ () => {this.toggleState()} }>Edit course</Button>
                        <Button variant="contained" color="secondary" type="submit" 
                        onClick={ () => {this.props.deleteCourse(this.props.key)}} >
                        Delete Course </Button>
                    </Grid>
        </Grid>
        </li>
       )
    }
    // toggle is edit 
    toggleState =()=> {
        let isEdit = this.state.isEdit
        this.setState({
            isEdit : !isEdit
        })
    }
    // render course form 
    renderForm2 =()=>{
      return(
          <form onSubmit={this.updateCourseItem}>
              <Grid
                justify="flex-end" // Add it here :)
                container 
                spacing={6}
                >
                <Grid item xs={12} md={6}> 
                   <input style={{width:'100%',height:"30px"}} type='text' ref={ (v) => this.input =v  } defaultValue={this.props.details.name}/>
                </Grid>
                <Grid item xs={12} md={6}> 
                  <Button variant="contained" color="secondary" type='submit'>Update Course</Button>
                </Grid>
            </Grid>
          </form>
      )
    }

    // update course item 
    updateCourseItem =(e)=>{
      e.preventDefault();
      this.props.editCourse(this.props.index , this.input.value )
      this.toggleState()
    }

    render() {
        let {isEdit} = this.state
        return (
            <Fragment>
               {isEdit ? this.renderForm2() : this.renderForm1()}
            </Fragment>
        )
    }
}

export default CourseList
