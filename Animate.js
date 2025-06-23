const texts = [
          `Victrix Integrated Services Nigeria Limited, 
          is a world class engineering and Construction 
          company situated in Lagos State. It was incorporated for 
          business in 2018 by Nigeria's Corporate Affairs 
          commission as an engineering concern, the firm is a 
          privately owned indigenous firm, managed by a group 
          of Nigerian Engineering professionals who have 
          proven their mettle in the field of Engineering 
          in Oil and Gas industries.\n

          As an oil and gas Engineering service firm,
          we offer different services in the oil and gas 
          sector like, Supply of fuel dispensers for Diesel 
          and PMS, pumps, pressure testing, construction of 
          gas stations, calibration of tanks, construction 
          of tanks, sales and servicing of flow Meters,dip 
          stick fabrication,water separation etc.\n\n`
  ];
  
  let charIndex = 0;
  let speed = 50; // typing speed
  
  function type(){
    const currentText = texts[0];
    const displayedText = currentText.substring(0, charIndex);
    document.getElementById('typewriter').textContent =
    displayedText;

    if(charIndex < currentText.length){
        charIndex ++;
        setTimeout(type, speed);
    }
  }
  
  type();
