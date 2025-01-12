import { FunctionComponent } from "react";

interface AboutWholeSaleProps {

}

const AboutWholeSale: FunctionComponent<AboutWholeSaleProps> = () => {
    return (<div className=" mt-8">
        <div className="px-[95px] py-14 bg-[#F0F0F0] rounded-[20px]">
            <h2 className=" font-bold text-4xl">EFOR MMC</h2>
            <div>
                <p className=" text-sm font-medium mt-10">Lorem ipsum odor amet, consectetuer adipiscing elit. Nibh ornare lacinia dui id nisl quis ac condimentum. Efficitur dignissim fusce proin vestibulum litora. Scelerisque ultricies id quisque sapien fermentum amet posuere. Sociosqu penatibus nisl sollicitudin dapibus conubia neque metus. Accumsan per diam phasellus senectus penatibus phasellus sodales ridiculus ullamcorper. Eget primis gravida ligula curae volutpat molestie. Purus iaculis semper at aenean rutrum quis urna id etiam. <br />
                    <br />
                    Interdum diam mus aliquet sem ornare. Rutrum praesent leo vitae quis efficitur aptent. Ligula class quis massa pretium, ex feugiat. Leo conubia maximus varius fringilla venenatis dapibus aptent. Gravida netus netus mollis litora phasellus nulla dolor. Sit sed curabitur ut suspendisse pretium pretium tempus ut. Dictum dignissim imperdiet porttitor semper praesent posuere ipsum dapibus. Ultrices montes fermentum libero lobortis
                    facilisis torquent finibus semper netus. Primis donec scelerisque interdum consequat est.</p>
            </div>

            <div className="mt-10">
            <iframe className=" w-full" height="598" src="https://www.youtube.com/embed/QGV0lLvAV2E?si=TFCEv6TA1LEk6N7w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>
    </div>);
}

export default AboutWholeSale;