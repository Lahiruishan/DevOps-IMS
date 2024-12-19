import React from "react";
import { Helmet } from "react-helmet";
import Header1 from "../../../../components/Header1";

function TimeTable(){
    return(
        <>

         <Helmet>
                <title>IMS-Web-TimeTable</title>
                <meta
                  name="description"
                  content="Discover our online education platform offering a variety of courses in Biological Science, Physical Science, and Commerce."
                />
              </Helmet>

              <div className="min-h-screen flex flex-col w-full bg-gradient-to-r from-blue-300 to-green-300">
              
              <Header1 className="w-full bg-indigo-900" />






              </div>

        </>
    );
}
export default TimeTable