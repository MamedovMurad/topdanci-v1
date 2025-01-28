

    export function useCheckWindow(){

 
      
        if (typeof window !== "undefined") {
           
              const isMobile = window.innerWidth <= 768; // Adjust this value based on your mobile breakpoint
              console.log(isMobile,'test123');
              
                return isMobile
            
          

           
    }

}