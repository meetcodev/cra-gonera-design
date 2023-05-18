import React from "react";

const Intro = ({children}) => {
  const introContent = {
    image: "/img/slider/1.jpg",
    name: "Jacek Gonera",
    designation: "Architekt wnętrz",
    text: (
      <> 
        <em>         {/*  //BUG poprawić to  */}
        <p className="first" >
            Jestem absolwentem kierunku Architektury Wnętrz i&nbsp;Wzornictwa na Akademii Sztuk Pięknych we&nbsp;Wrocławiu. Zajmuję się aranżacją przestrzeni od&nbsp;ponad czterech lat, a&nbsp;własne studio projektowe prowadzę od 2020 r.
        </p>
            <div className="second">
                Moim celem jest tworzenie ponadczasowych wnętrz idealnie dopasowanych do&nbsp;klienta. 
            </div>
        <p className="first" >Dobrze zaprojektowane wnętrza podnoszą jakość życia ich użytkowników.
            W&nbsp;swoich projektach kieruje się zasadą, że&nbsp;prawdziwe piękno jest ukryte w&nbsp;detalach. Wierze w&nbsp;to, że&nbsp;dobre projektowanie oparte jest na&nbsp;umiejętnym słuchaniu i&nbsp;empatii względem drugiego człowieka - w&nbsp;tym przypadku mojego Inwestora. Analizuję możliwości jakie oferuje zastana przestrzeń pod kątem funkcji i&nbsp;ergonomii.
            Staram się łączyć użytkowość projektów z&nbsp;estetyką i&nbsp;trwałością materiałów których używam w&nbsp;swoich aranżacjach.
         </p>
      </em>
      </>
    ),
  };

  return (
    <>
      {/* <div className="top_author_image">
        <img src={introContent.image} alt="about" />
      </div> */}
    <div className="tokyo_tm_about custom-main-title-page">
        <div className="about_title ">
            <h3>{introContent.name}</h3>
            <span>{introContent.designation}</span>
        </div>
        <div className="about_text">{introContent.text}</div>
        {children ? children : ""}
    </div>
    </>
  );
};

export default Intro;
