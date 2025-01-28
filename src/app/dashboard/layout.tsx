
"use client"
import LabelHeader from "@/components/label";
import Payments from "@/components/payments";
import { FunctionComponent } from "react";

interface DashboardProps {
    children: React.ReactNode;
}
 
const Dashboard: FunctionComponent<DashboardProps> = ({children}) => {
    return (<main>
         <section className=" lg:block hidden">
         <LabelHeader title="Şəxsi kabinet"/>
         </section>
         <div className="container mx-auto">
            <div className="flex lg:justify-end mb-[30px] px-5 lg:px-0">
                <Payments/>
            </div>

         

{children}

         </div>
    </main> );
}
 
export default Dashboard;