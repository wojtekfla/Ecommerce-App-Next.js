const Footer = () => {
  return (
    <footer className="max-w-[1440px] mx-auto px-4 md:px-6 w-full bg-[var(--color-black-two)] text-[var(--color-grey-two)] border-2 border-blue-800">
      <div className="flex flex-row ">
        <div className="border-2 border-orange-300" id="logo">
          <div>Nexus HUB</div>
          <div>2023 NexusHUB all rights reserved</div>
          <div></div>
        </div>
        <div className="border-2 border-orange-300" id="menu">
          <div>Copmany</div>
          <div>Social</div>
          <div>FAQ</div>
          <div>Resources</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/*
  <footer className="flex flex-col sm:flex-row justify-center w-full max-w-[1440px] h-[auto] lg:max-h-[494px] border-2 border-blue-800"></footer>
  <div className="max-w-[1440px] mx-auto px-4 md:px-6"></div>
*/
