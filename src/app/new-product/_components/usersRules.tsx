
"use client"
import { FunctionComponent } from "react";

interface UsersRulesProps {

}

const UsersRules: FunctionComponent<UsersRulesProps> = () => {
    return (<div className=" mb-10">
        <h4 className=" font-medium text-xl mb-4">Topdançı.az-ın sadə qaydaları</h4>
        <ul className=" list-disc text-primaryColor">
            <li><p className=" text-black font-normal text-sm">Eyni elanı bir neçə dəfə təqdim etməyin.</p></li>

            <li><p className=" text-black font-normal text-sm">Təsvir və ya şəkillərdə telefon, email və ya sayt ünvanı göstərməyin.</p></li>
            <li><p className=" text-black font-normal text-sm">Ad yerində qiymət yazmayın - bunun üçün ayrıca yer var.</p></li>
            <li><p className=" text-black font-normal text-sm">Qadağan olunmuş məhsulları satmayın.</p></li>
        </ul>

        <a href="" className=" text-base underline">
Saytın tam qaydaları</a>
    </div>);
}

export default UsersRules;