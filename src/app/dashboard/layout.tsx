
"use client"
import LabelHeader from "@/components/label";
import Payments from "@/components/payments";
import { FunctionComponent } from "react";

interface DashboardProps {
    children: React.ReactNode;
}
 
const Dashboard: FunctionComponent<DashboardProps> = ({children}) => {
    return (<main>
         <LabelHeader title="Şəxsi kabinet"/>
         <div className="container mx-auto">
            <div className="flex justify-end mb-[30px]">
                <Payments/>
            </div>

         

{children}

         </div>
    </main> );
}
 
export default Dashboard;