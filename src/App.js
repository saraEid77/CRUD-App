import React ,{ Component }from 'react';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';
import {Container} from  '@material-ui/core';
import './App.css';

class App extends Component{

  state ={
    courses :[
      {name : 'HTML'},
      {name : 'CSS'},
      {name : 'PHP'},
    ],
    current :'',
  }

  
  // update course 

    updateCourse = (e) =>{
          this.setState({
           current:e.target.value
      })
    }
  
  // add course 
  addCourse = (e) =>{
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    courses.push({name:current});
    this.setState({
      courses: courses ,
      current :'',
    })
  }

  // delete course  
  deleteCourse =(index) =>{
    let courses=this.state.courses;
    courses.splice(index, 1);
    this.setState({
      courses
    })
  }

  // edit Course 
  editCourse =(index, value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course['name'] = value ;
    this.setState({
      courses
    })
  }



  render(){

    const {courses} =this.state;
    const courseList = courses.map( (course , index ) => {
      return <CourseList data ={this.state} details ={course} key={index}  index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse} />
    })
    
    
  return (
    <Container  className="App">
      <h2 style={{}}>Add Course</h2>
      <CourseForm 
        current ={this.state.current}
        updateCourse ={this.updateCourse}
        addCourse={this.addCourse }
        />
      
      { this.state.courses.length  > 0 ? <ul> { courseList} </ul> : <p>There Is No Courses To Show</p> }
     
    </Container>
  );
}
}
export default App;
