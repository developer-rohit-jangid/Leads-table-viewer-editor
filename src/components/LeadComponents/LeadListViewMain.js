import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import * as LeadAction from '../../action/LeadAction';
import LeadListView from './LeadListView';



export class LeadListViewMain extends React.Component {

   


    componentDidMount() {
        this.props.action.getLeadAction()
            .catch(error => {
                toastr.error(error);
                console.log(error)
            });
    }
    render() {
        const { LeadData } = this.props;

        if (!LeadData) {
            return (
                <div>Loading...</div>
            );
        }
        console.log(LeadData)
        return (
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col">
                        <h1>Leads</h1>                        
                    </div>
                </div>

               

                <div className="row">
                    <div className="col">
                        <LeadListView LeadData={LeadData}/>
                    </div>
                </div>
            </div>
        );
    }
}



const mapStateToProps = state => ({
    LeadData: state.coursesReducer.LeadData
});



const mapDispatchToProps = dispatch => ({
    action: bindActionCreators(LeadAction, dispatch)

});



LeadListViewMain.propTypes = {
    LeadData: PropTypes.array,
    action: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};



export default connect(mapStateToProps, mapDispatchToProps)(LeadListViewMain);
