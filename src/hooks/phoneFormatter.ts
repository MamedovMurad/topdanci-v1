
    // Format the phone number
    export const formatPhoneNumber = (phone:string) => {
      const match = phone.match(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/);
      if (match) {
        return `+${match[1]}-${match[2]}-${match[3]}-${match[4]}-${match[5]}`;
      }
      return phone;
    };
  
 