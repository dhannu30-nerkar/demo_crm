import React, { useState } from "react";


function Leads(){

    const data = [
         {
        Name : "Shrihari",
        email : "shrihari@gmail.com",
        phone : 1234567890,
        status : "new",
        LeadSource : "website",
        Date : "19-06-23"
    },

    {
        Name : "om",
        email : "om@gmail.com",
        phone : 1234567800,
        status : "new",
        LeadSource : "website",
        Date : "17-06-23"
    },

    {
        Name : "mannan",
        email : "mannan@gmail.com",
        phone : 1134567890,
        status : "new",
        LeadSource : "website",
        Date : "27-06-23"
    },

    {
        Name : "ayush",
        email : "ayush@gmail.com",
        phone : 1234567801,
        status : "new",
        LeadSource : "website",
        Date : "24-06-23"
    },

    {
        Name : "gourav",
        email : "gourav@gmail.com",
        phone : 1134557890,
        status : "new",
        LeadSource : "website",
        Date : "20-06-23"
    },
    ]
   
    const [search, setSearch] = useState("");

  const searchHandle = (event) => {
    setSearch(event.target.value);
  };

  // Case-insensitive filtering
  const filterName = data.filter((lead) =>
    lead.Name.toLowerCase().includes(search.toLowerCase())
  );



    return(
        <>

        <style>
            {`

            body{
            font-family : Arial, sans-serif;
            background-color : #e0e0e0;
            
            }

            .table-container{
            border : 1px solid black;
            border-radius : 1px;
            min-width : 600px;
            }

            table {
            width : 100%;
            border-collapse :collapse;
            }

            th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
            }
            `}

        </style>

        <h1>Leads table</h1>


        <input placeholder="Search by Name"
        value={search}
         onChange={searchHandle}
         
        />
        
        <br/><br/>

        <div className="table-container">

        <table>

        <thead className="heading">
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>status</th>
                <th>Lead source</th>
                <th>Date</th>
            </tr>            

        </thead>

        <tbody>
            {filterName.map((leadData) => (
                <tr>
                    <td> {leadData.Name}</td>
                    <td> {leadData.email}</td>
                    <td> {leadData.phone}</td>
                    <td> {leadData.status}</td>
                    <td> {leadData.LeadSource}</td>
                    <td> {leadData.Date}</td>
                </tr>
            ) 
            )}
        </tbody>

        </table>
        </div>
        
        
        </>
    )
}

export {Leads};