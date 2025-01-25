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
            <div className="container mx-auto lg:px-0 px-5">
                <TopdanciCard/>
                <TopdanciCard/>
                <TopdanciCard/>
            </div>
        </section>

    </main>);
}

export default Topdancilar;