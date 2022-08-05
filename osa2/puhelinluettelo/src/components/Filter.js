const Filter = (props) => {
    return (
        <div>filter shown with a 
            <input value = {props.filterValue} onChange = {props.handleFilterChange}></input>
        </div>
    )
  }
  
export default Filter