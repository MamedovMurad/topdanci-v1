"use client"
import TopdanciCard from "@/components/Card/topdanciCard";
import LabelHeader from "@/components/label";
import { FunctionComponent } from "react";

interface TopdancilarProps {

}

const Topdancilar: FunctionComponent<TopdancilarProps> = () => {
    return (<main>
      <LabelHeader/>

        <section>
            <div className="container mx-auto">
                <TopdanciCard/>
                <TopdanciCard/>
                <TopdanciCard/>
            </div>
        </section>

    </main>);
}

export default Topdancilar;