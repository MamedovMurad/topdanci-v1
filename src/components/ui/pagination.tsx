import { useRouter } from "next/navigation";
import { FunctionComponent } from "react";
import ReactPaginate from "react-paginate";

interface PaginationUIProps {
    pageCount?: number,
    defval?: { label: string, value: string };
    searchVal?: string | null,
    type?: string;
    start?:number
    category?:string|null;
    isAuth?:boolean;
}

const PaginationUI: FunctionComponent<PaginationUIProps> = ({ defval, searchVal, type,pageCount,start,category,isAuth=false }) => {

    function handleChange (selected:number){
        if (isAuth) {
            router.push(`?page=${selected+1}`)
        } else{
            router.push(`/products?advert_type=${type || ""}&search-text=${searchVal || ""}&city=${defval?.value ||
                ""}&city-name=${defval?.label || ""}&page=${selected+1}&category=${category||""}`)
        }
    }
    const router = useRouter()
    //()=>router.push(`/products?advert_type=${type||""}&search-text=${searchVal || ""}&city=${defval?.value || ""}&city-name=${defval?.label || ""}`)
    return (
        <ReactPaginate
          forcePage={start}
            previousLabel={'Əvvələ'}
            nextLabel={'Sonra'}
            breakLabel={'...'}
            hrefAllControls
            pageCount={pageCount||0}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={({ selected }) => 
                handleChange(selected)
            }
            containerClassName={'flex justify-center space-x-2'}
            pageClassName={' h-8 px-3 flex items-center justify-center  rounded-[6px]'}
            activeClassName={' bg-primaryColor text-white'}
            previousClassName={'h-8 text-[#757575]  flex items-center justify-center bg-transparent rounded '}
            nextClassName={'h-8 text-[#757575] flex items-center justify-center  rounded '}
            disabledClassName={' text-[#757575] cursor-not-allowed'}
        />
    );
}

export default PaginationUI;