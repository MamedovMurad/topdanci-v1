import { FunctionComponent } from "react";

interface AboutWholeSaleProps {

}

const AboutWholeSale: FunctionComponent<AboutWholeSaleProps> = () => {
    return (<div className=" mt-8 lg:px px-5">
        <div className="lg:px-[95px] lg:py-14 py-4 px-7 bg-[#F0F0F0] lg:rounded-[20px] rounded">
            <h2 className=" font-bold lg:text-4xl text-xs">EFOR MMC</h2>
            <div>
                <p className=" lg:text-sm  text-[6px] font-medium lg:mt-10 mt-3">Lorem ipsum odor amet, consectetuer adipiscing elit. Nibh ornare lacinia dui id nisl quis ac condimentum. Efficitur dignissim fusce proin vestibulum litora. Scelerisque ultricies id quisque sapien fermentum amet posuere. Sociosqu penatibus nisl sollicitudin dapibus conubia neque metus. Accumsan per diam phasellus senectus penatibus phasellus sodales ridiculus ullamcorper. Eget primis gravida ligula curae volutpat molestie. Purus iaculis semper at aenean rutrum quis urna id etiam. <br />
                    <br />
                    Interdum diam mus aliquet sem ornare. Rutrum praesent leo vitae quis efficitur aptent. Ligula class quis massa pretium, ex feugiat. Leo conubia maximus varius fringilla venenatis dapibus aptent. Gravida netus netus mollis litora phasellus nulla dolor. Sit sed curabitur ut suspendisse pretium pretium tempus ut. Dictum dignissim imperdiet porttitor semper praesent posuere ipsum dapibus. Ultrices montes fermentum libero lobortis
                    facilisis torquent finibus semper netus. Primis donec scelerisque interdum consequat est.</p>
            </div>

            <div className="mt-10">
            <iframe className=" w-full lg:h-[598px] h-[188px]" height="598" src="https://www.youtube.com/embed/QGV0lLvAV2E?si=TFCEv6TA1LEk6N7w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>
    </div>);
}

export default AboutWholeSale;