
"use client"
import LabelHeader from "@/components/label";
import Payments from "@/components/payments";
import { redirect } from "next/navigation";
import { FunctionComponent, useEffect } from "react";

interface DashboardProps {
    children: React.ReactNode;
}
 
const Dashboard: FunctionComponent<DashboardProps> = ({children}) => {
 
    useEffect(() => {
       
        if (typeof window!=="undefined") {
           if (localStorage.getItem('agent')) {
          
           }
           else{
            redirect('/login')
           }
        }
    }, [typeof window!=="undefined"]);
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