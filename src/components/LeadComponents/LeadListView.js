import React, { PropTypes } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { NavLink } from "react-router-dom";






const titleFormatter = (cell, row) => {
  return <NavLink to={`/lead/${row.id}`}>{cell}</NavLink>
};



class CourseList extends React.Component {

    constructor(props) {
        super(props);

        this.options = {
            sortIndicator: true,
            noDataText: 'No data'
        };

        this.selectRowProp = {
            mode: 'radio',
            bgColor: '#c1f291',
            onSelect: props.handleRowSelect,
            clickToSelect: true, 
            hideSelectColumn: true            
        };
    }



    render() {


        return (
            <BootstrapTable data={this.props.LeadData}   striped hover condensed>
                <TableHeaderColumn dataField="id" isKey hidden>Id</TableHeaderColumn>
                
                <TableHeaderColumn 
                    dataField="name"
                    dataFormat={titleFormatter} 
                    // dataSort={true}
                    // caretRender={getCaret}
                    
                    columnTitle
                >
                    Name
                </TableHeaderColumn>

                <TableHeaderColumn 
                    dataField="project"
                    // dataSort={true}
                    // caretRender={getCaret}
                    columnTitle
                >
                    Project
                </TableHeaderColumn>

                <TableHeaderColumn 
                    dataField="activity_score"
                    // dataSort={true}
                    // caretRender={getCaret}
                    // filter={{type: 'TextFilter', delay: 0 }}
                    columnTitle
                >
                    Activity Score
                </TableHeaderColumn>  

                <TableHeaderColumn 
                    dataField="activity_status"
                    // dataSort={true}
                    // caretRender={getCaret}
                    // filter={{type: 'TextFilter', delay: 0 }}
                    columnTitle
                >
                    Activity Status
                </TableHeaderColumn>     
                <TableHeaderColumn 
                    dataField="leads_assigned_to"
                    // dataSort={true}
                    // caretRender={getCaret}
                    // filter={{type: 'TextFilter', delay: 0 }}
                    columnTitle
                >
                   Leads Assigned to
                </TableHeaderColumn>                           
            </BootstrapTable>
        );
    }

}



CourseList.propTypes = {
    courses: PropTypes.array.isRequired,
    handleRowSelect: PropTypes.func.isRequired
};



export default CourseList;
