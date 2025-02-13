
"use client"
import { FunctionComponent } from "react";

interface UsersRulesProps {

}

const UsersRules: FunctionComponent<UsersRulesProps> = () => {
    return (<div className=" mb-10 lg:px-0 px-5">
        <h4 className=" font-medium lg:text-xl text-base mb-4">Topdançı.az-ın sadə qaydaları</h4>
        <ul className=" list-disc text-primaryColor lg:px-0 px-1">
            <li><p className=" text-black font-normal lg:text-sm text-xs">Eyni elanı bir neçə dəfə təqdim etməyin.</p></li>

            <li><p className=" text-black font-normal lg:text-sm text-xs">Təsvir və ya şəkillərdə telefon, email və ya sayt ünvanı göstərməyin.</p></li>
            <li><p className=" text-black font-normal lg:text-sm text-xs">Ad yerində qiymət yazmayın - bunun üçün ayrıca yer var.</p></li>
            <li><p className=" text-black font-normal lg:text-sm text-xs">Qadağan olunmuş məhsulları satmayın.</p></li>
        </ul>

        <a href="" className=" lg:text-base text-sm lg:mt-0 mt-1 underline">
Saytın tam qaydaları</a>
    </div>);
}

export default UsersRules;