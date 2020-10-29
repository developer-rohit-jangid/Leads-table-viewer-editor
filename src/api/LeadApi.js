// import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const LeadData = [
    { 
        "id":' 1', 
        "name":"Rishi Bhatia",
        "project":"Uday Emerals Park",
        "activity_score":"72",
        "activity_status":"Warm",
        "leads_assigned_to":"Nikhil"
    },
    
    {   
        "id": '2', 
        "name":"Nikki Troiani",
        "project":"GK Aryavat",
        "activity_score":"82",
        "activity_status":"Interested",
        "leads_assigned_to":"Nikhil"
    },
    
    {   
        "id": '3', 
        "name":"George Fields",
        "project":"Reuted Dwarka SUn Crest Phase II",
        "activity_score":"76",
        "activity_status":"Interested",
        "leads_assigned_to":"Rishi"
    },
    
    {   
        "id": '4', 
        "name":"Rebecca Moore",
        "project":"Reputed Gyan Ganga Society",
        "activity_score":"61",
        "activity_status":"Warm",
        "leads_assigned_to":"Ashwin"
    },
    
    {   
        "id": '5', 
        "name":"Jane Doe",
        "project":"Reputed Vrindavan Ellegance",
        "activity_score":"52",
        "activity_status":"Interested",
        "leads_assigned_to":"Rishi"
    }
];
class LeadApi {
    static getAllLead() {
        return new Promise((resolve) => {
            
                resolve(Object.assign([], LeadData));
         
        });
    }

    static saveLead(lead) {
        lead = Object.assign({}, lead); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            
                // Simulate server-side validation
                const minleadTitleLength = 1;
                if (lead.name.length < minleadTitleLength) {
                    reject(`Title must be at least ${minleadTitleLength} characters.`);
                }

                    const existingleadIndex = LeadData.findIndex(a => a.id === lead.id);
                    LeadData.splice(existingleadIndex, 1, lead);
                
                resolve(lead);
          
        });
    }


    static getLead(leadId) {
        return new Promise((resolve) => {
            
                const existingLeadIndex = LeadData.findIndex(lead => lead.id == leadId);
                console.log(LeadData[existingLeadIndex])
                const LeadFound = Object.assign({}, LeadData[existingLeadIndex]);

                resolve(LeadFound);

           
        });
    }

}

export default LeadApi;
