import React from "react";

const ContactFormIntro = ({children}) => {
  const introContentForm = {
    name: "GONERA DESIGN",
    subname: "Zaprojektujmy razem fajne wnętrze!",
    subtitle: "Stwórzmy razem fajny projekt…",
    designation: "FORMULARZ KONTAKTOWY",
    text: (        
        <p className="second" >Zaprojektujmy razem fajne wnętrze!</p>
     
    ),
  };

  return (
    <>
    <div className="tokyo_tm_about custom-main-title-page "   >
        <div  className="about_title contact_title" >
            {/* <h4>{introContentForm.name}</h4> */}
            <h3 className="contact_subtitle" >
                {introContentForm.subtitle}
            </h3>
            {/* <div className="contact_form_subtitle--second ">
                <h6 className="text-accent">{introContentForm.text}</h6>
            </div> */}
        </div>
            <p className="p-contact-form-title custom-button-text tokyo_tm_title">{introContentForm.designation}</p>
        {children ? children : ""}
    </div>
    </>
  );
};

export default ContactFormIntro;
