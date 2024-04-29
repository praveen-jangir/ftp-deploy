import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

export default function CountryCode(props) {
  return (
    <>
        {/* // For showing picker just put show state to show prop */}
        <PhoneInput 
          country={'IN'} // Provide the correct country code "GB"
          enableSearch={true} 
          value={props.phone} 
          onChange={(phone) => props.setPhone(phone)} 
          defaultValue={"IN"} // Set "UK" as the default country
        /> 
    </>
  )
}
