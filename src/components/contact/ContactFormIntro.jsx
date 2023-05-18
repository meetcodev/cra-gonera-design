import React from "react";

const ContactFormIntro = ({children}) => {
  const introContentForm = {
    name: "GONERA DESIGN",
    subname: "by Jacek Gonera",
    designation: "Formularz kontaktowy",
    text: (        
        <p className="second" >Zaprojektujmy razem fajne wnętrze!</p>
     
    ),
  };

  return (
    <>
    <div className="tokyo_tm_about custom-main-title-page "   >
        <div  className="about_title contact_title" >
            <h4>{introContentForm.name}</h4>
            <h3>{introContentForm.subname}</h3>
        <div className="contact_form_subtitle--second ">
            <h6 className="text-accent">{introContentForm.text}</h6></div>
        </div>
            <p>{introContentForm.designation}</p>
        {children ? children : ""}
    </div>
    </>
  );
};

export default ContactFormIntro;
