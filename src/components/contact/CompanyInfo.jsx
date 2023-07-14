import React from "react";
import NewSocial from "../NewSocial";

const CompanyInfo = () => {

    const socialmedia = (<NewSocial/>);

  const personalInfoContent = [
    {
      id: 1,
      colClass: "left",
      info: [
          {
              id: 1,
              name: "Telefon",
              content: "+48 504 946 549",
            },
           
      ],
    },
    {
      id: 2,
      colClass: "center",
      info: [
        {
            id: 2,
            name: "E-mail",
            content: "jacek@gonera.design",
            },
        {
          id: 2,
          name: "Miasto",
          content: socialmedia,
        }
      ],
    },
    {
        id: 3,
        colClass: "right",
        info: [
          {
              id: 3,
              name: "E-mail",
              content: "jacek@gonera.design",
            }
        ],
      },
  ];
  return (
    <>
     {/* <div className="contact-box"> */}


      <div className='right'  >
          <div className="tokyo_tm_info">
            <ul>
                {/* <li>
                  <span>Telefon</span>
                  <span>+48 504 946 549</span>
                </li> */}
                <li className="li-contact-item" >
                    <a target="_blank" rel="noopener noreferrer" href="tel:504-946-549">
              <img  className="png-contact-icon"
                width='25px'style={{   marginRight: "10px" }}
                src={"/assets/img/svg/my-icon/icons8-ringer-volume-30.png"}
                alt="phone"
              ></img>
                  <span className="text-contact-title">
                    +48 504 946 549
                  </span>
            </a>
                </li>
            </ul>
          </div>
        </div>
      <div className='left' id="right-box-contact-mail" >
          <div className="tokyo_tm_info">
            <ul style={{ maxWidth: '210px' }} >
                <li   className="li-contact-item"  >
                <a target="_blank" rel="noopener noreferrer" href="mailto:jacek@gonera.design"> 
              <img className="png-contact-icon"
                width='23px' style={{paddingLeft: "1px", marginRight: "10px" }}
                src={"/assets/img/svg/my-icon/icons8-mail-64.png"}
                alt="mail"
              ></img>
                  <span className=" text-contact-title" >
                    jacek@gonera.design

                  </span>
            </a>
                </li>
            </ul>
          </div>
        </div>

        {/* </div> */}
    </>
  );
};

export default CompanyInfo;
