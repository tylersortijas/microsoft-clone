import { React, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Bounce from "../images/bounce-title-carousel.jpg";
import Bing from "../images/bing-ai-title-carousel.jpg";
import Xbox from "../images/xbox-series-x.jpg";
import HistoryMonth from "../images/asian-black-history-month.jpg";

// Links from React are to be used for internal links that are being used directly from the page.
// Anchor tags should only be used in case of absolute links or (in other words) external links.

function HomePage() {
  return (
    <main className="antialiased">
      <nav className="flex justify-around items-center p-4 gap-40">
        <div id="nav-left" className="flex items-center gap-10">
          <img
            src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"
            alt="Microsoft Logo"
            className="max-w-title"
          />
          <ul className="flex cursor-pointer gap-10 text-sm">
            <li className="hover:underline decoration-2">Microsoft 365</li>
            <li className="hover:underline decoration-2">Teams</li>
            <li className="hover:underline decoration-2">Windows</li>
            <li className="hover:underline decoration-2">Surface</li>
            <li className="hover:underline decoration-2">Xbox</li>
            <li className="hover:underline decoration-2">Deals</li>
            <li className="hover:underline decoration-2">Small Business</li>
            <li className="hover:underline decoration-2">Support</li>
          </ul>
        </div>
        <div id="nav-right" className="flex gap-5 text-sm">
          <div id="search" className="flex gap-5">
            <label className="hover:underline decoration-2 cursor-pointer">
              {" "}
              All Microsoft
              <select name="" id=""></select>
            </label>
            <button className="hover:underline decoration-2">Search</button>
          </div>
          <div id="sign-in" className="flex gap-5">
            <button className="hover:underline decoration-2">Cart</button>
            <button className="hover:underline decoration-2">Sign in</button>
          </div>
        </div>
      </nav>
      <header className="bg-blue p-4 text-center">
        <a
          className="hover:underline text-white font-semibold flex justify-center items-center"
          href="https://www.microsoft.com/en-us/store/b/holiday-gift-guide?icid=mscom_marcom_TS1a_Grad23"
        >
          Congratulate and celebrate your grad with tech that's as impressive as
          they are. Shop gift ideas <BsChevronCompactRight />
        </a>
      </header>
      <section id="title-carousel" className="relative mb-[100px]">
        <div className="carousel-items relative">
          <img src={Bing} alt="Bing AI Splash Art" className="relative" id="bing-carousel-image"/>
          <div id="bing-text" className="carousel-text absolute top-[132px] left-[210px] bg-white p-12 flex flex-col items-start gap-5">
            <h2 className="text-4xl font-semibold">
              Announcing the next wave of AI
              <br /> innovation
            </h2>
            <p>
              The new Microsoft Bing and Edge will soon feature more visual
              search
              <br /> responses, chat history, and persistent chat within Edge.
              We're also adding
              <br /> actions to help people complete tasks.
            </p>
            <button className="bg-blue text-white font-semibold px-3 py-2 hover:bg-dark-blue rounded">
              Learn more about it
            </button>
          </div>
        </div>
        <div className="carousel-items absolute hidden">
          <img src={Bounce} alt="Bounce Splash Art" />
          <div className="carousel-text">
            <h2>Microsoft 365</h2>
            <p>
              Turn your ideas into reality, stay safer online and off, and focue
              on what matters
              <br /> most with Microsoft 365 apps
            </p>
            <div className="carousel-links">
              <button>For 1 person</button>
              <p>For up to 6 people</p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="small-islands"
        className="flex justify-center gap-10 mb-[80px]"
      >
        <div className="island-cards flex flex-col justify-center items-center gap-3">
          <img
            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/surface-go2-link-list-120x120?wid=40&hei=40"
            alt=""
          />
          <a
            className="underline text-blue font-semibold"
            href="https://www.microsoft.com/en-us/store/b/shop-all-microsoft-surface?icid=MSCOM_QL_Surface"
          >
            Shop Surface devices
          </a>
        </div>
        <div className="island-cards flex flex-col justify-center items-center gap-3">
          <img
            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Quick-Link-Icon-80x80-Microsoft-365?wid=40&hei=40"
            alt=""
          />
          <a
            className="underline text-blue font-semibold"
            href="https://www.microsoft.com/EN-US/microsoft-365/compare-all-microsoft-365-products?icid=MSCOM_QL_M365"
          >
            Choose your Microsoft 365
          </a>
        </div>
        <div className="island-cards flex flex-col justify-center items-center gap-3">
          <img
            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/xbox-blk-logo-link-list-120x120?wid=40&hei=40"
            alt=""
          />
          <a
            className="underline text-blue font-semibold"
            href="https://www.microsoft.com/en-us/store/b/xbox?icid=MSCOM_QL_Xbox"
          >
            Buy Xbox games and consoles
          </a>
        </div>
        <div className="island-cards flex flex-col justify-center items-center gap-3">
          <img
            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Quick-Link-Icon-80x80-Microsoft-365?wid=40&hei=40"
            alt=""
          />
          <a
            className="underline text-blue font-semibold"
            href="https://www.microsoft.com/en-us/windows/get-windows-11?icid=MSCOM_QL_Windows"
          >
            Get Windows 11
          </a>
        </div>
        <div className="island-cards flex flex-col justify-center items-center gap-3">
          <img
            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/keyboard-mouse-link-list-120x120?wid=40&hei=40"
            alt=""
          />
          <a
            className="underline text-blue font-semibold"
            href="https://www.microsoft.com/en-us/store/b/accessories?icid=MSCOM_QL_Accessories"
          >
            Shop for accessories
          </a>
        </div>
        <div className="island-cards flex flex-col justify-center items-center gap-3">
          <img
            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-ICON-LL-briefcase-120x120?wid=40&hei=40"
            alt=""
          />
          <a
            className="underline text-blue font-semibold"
            href="https://www.microsoft.com/en-us/store/b/business?icid=MSCOM_QL_Business"
          >
            Shop business
          </a>
        </div>
      </section>
      <section
        id="large-islands"
        className="flex justify-center gap-6 mb-[80px]"
      >
        <div id="large-islands-left" className="flex">
          <div className="lg-island-cards flex flex-col gap-5 max-w-[406px]">
            <img
              src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Xbox-2023-Event-Games-Showcase?wid=515&hei=293&fit=crop"
              alt=""
              className="max-w-[382px] max-h-[214px]"
            />
            <h2 className="text-3xl font-semibold">Xbox Games Showcase</h2>
            <p>
              Join us on June 11 at 10 AM PT for a double feature
              <br /> to look at new games from Xbox, Bethesda, and more
              <br /> —Xbox Games Showcase, immediately followed by Starfield
              District
            </p>
            <a
              className="flex justify-left items-center text-blue font-semibold hover:underline"
              href="https://www.microsoft.com/en-us/d/surface-laptop-5/8XN49V61S1BN?icid=mscom_marcom_CPH1a_SurfaceLaptop5Offer"
            >
              Learn more about the event <BsChevronCompactRight />
            </a>
          </div>
          <div className="lg-island-cards flex flex-col gap-5 max-w-[406px]">
            <img
              src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Test-Surface-Pro-9-Contextual-Lifestyle-01?wid=515&hei=293&fit=crop"
              alt=""
              className="max-w-[382px] max-h-[214px]"
            />
            <h2 className="text-3xl font-semibold">Surface Pro 9</h2>
            <p>
              Tablet versatility and laptop power — all in one ultra-
              <br />
              portable device.
            </p>
            <a
              className="flex justify-left items-center text-blue font-semibold hover:underline"
              href="https://www.microsoft.com/en-us/d/surface-pro-9/93VKD8NP4FVK?icid=mscom_marcom_CPH2a_SurfacePro9"
            >
              Shop now <BsChevronCompactRight />
            </a>
          </div>
        </div>
        <div id="large-islands-right" className="flex">
          <div className="lg-island-cards flex flex-col gap-5 max-w-[406px]">
            <img
              src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Xbox-Series-S-Star-Wars-Jedi-Survivor-Bundle?wid=515&hei=293&fit=crop"
              alt=""
              className="max-w-[382px] max-h-[214px]"
            />
            <h2 className="text-3xl font-semibold">
              Buy an Xbox Series S, save $35 on Star Wars Jedi: Survivor™
            </h2>
            <p>
              For a limited time, save when you add Star Wars Jedi:
              <br /> Survivor™ Deluxe or Standard Edition to your Xbox
              <br /> Series S purchase.
            </p>
            <a
              className="flex justify-left items-center text-blue font-semibold hover:underline"
              href="https://www.microsoft.com/en-us/store/collections/xboxseriessoffer?icid=mscom_marcom_CPH3a_JediSurvivorbundle"
            >
              Shop Xbox Series S <BsChevronCompactRight />
            </a>
          </div>
          <div className="lg-island-cards flex flex-col gap-5 max-w-[406px]">
            <img
              src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Test-Surface-Laptop-5-Sandstone-02?wid=515&hei=293&fit=crop"
              alt=""
              className="max-w-[382px] max-h-[214px]"
            />
            <h2 className="text-3xl font-semibold">
              Save up to $300 on surface Laptop 5
            </h2>
            <p>
              Sophisticated style and multitasking speed powered
              <br /> by 12th Gen Intel® Core. Offer ends 5/29.
            </p>
            <a
              className="flex justify-left items-center text-blue font-semibold hover:underline"
              href="https://news.xbox.com/en-us/2023/05/03/xbox-games-showcase-starfield-direct-june-11/?icid=mscom_marcom_CPH4a_StarfieldDirectShowcase"
            >
              Shop Surface Laptop 5 <BsChevronCompactRight />
            </a>
          </div>
        </div>
      </section>
      <section id="xbox-ad" className="mb-[150px]">
        <img src={Xbox} alt="Xbox Series X" className="m-auto" />
        <div
          id="xbox-ad-text"
          className="absolute top-[1714px] left-[316px] max-w-[479px] text-white flex flex-col gap-6 items-start"
        >
          <h2 className="text-4xl font-semibold">
            Xbox Series X - Forza Horizon 5 Bundle
          </h2>
          <p>
            Kickstart your ultimate adventure with the fastest,
            <br /> most powerful Xbox ever and Forza Horizon 5<br /> Premium
            Edition.
          </p>
          <button className="bg-blue px-3 py-2 hover:bg-dark-blue rounded">
            <a
              className="font-semibold"
              href="https://www.microsoft.com/en-us/d/Xbox-Series-X-Forza-Horizon-5-Bundle/8v5cpws7xvk4?icid=mscom_marcom_MPH1a_XboxSeriesXForza"
            >
              Shop Xbox Series X Bundle now
            </a>
          </button>
        </div>
      </section>
      <section
        id="for-business"
        className="flex justify-center gap-5 mb-[80px]"
      >
        <div id="business-left" className="flex">
          <div className="business-islands flex flex-col gap-5 max-w-[406px]">
            <h2 id="for-business" className="text-4xl font-semibold absolute top-[2204px]">
              For business
            </h2>
            <img
              src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Surface-Laptop-5-LIfestyle-M2?wid=515&hei=293&fit=crop"
              alt=""
              className="max-w-[382px] max-h-[214px]"
            />
            <h2 className="text-3xl font-semibold">
              Save up to $250 on Surface Laptop 5 for Business
            </h2>
            <p>
              Lightning-fast performance, built-in security and sleek
              <br />
              portability designed for your small business. Offer
              <br /> ends 5/31.
            </p>
            <a
              className="flex justify-start items-center text-blue hover:underline font-semibold"
              href="https://www.microsoft.com/en-us/d/surface-laptop-5-for-business/8WX8RSM6L09N?icid=mscom_marcom_CPW1a_SurfaceLaptop5BusinessOffer"
            >
              Shop now <BsChevronCompactRight />
            </a>
          </div>
          <div className="business-islands flex flex-col gap-5 max-w-[406px]">
            <img
              src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Microsoft-365-Copilot?wid=515&hei=293&fit=crop"
              alt=""
              className="max-w-[382px] max-h-[214px]"
            />
            <h2 className="text-3xl font-semibold">Microsoft 365 Copilot</h2>
            <p>
              Discover a new way to work with next-gen AI
              <br /> embedded in the Microsoft 365 apps you use every
              <br /> day.
            </p>
            <a
              className="flex justify-start items-center text-blue hover:underline font-semibold"
              href="https://www.microsoft.com/en-us/microsoft-365/blog/2023/03/16/introducing-microsoft-365-copilot-a-whole-new-way-to-work/?icid=mscom_marcom_CPW2a_M365forBusiness_Copilot"
            >
              Learn more about Microsoft 365 Copilot <BsChevronCompactRight />
            </a>
            <a
              className="flex justify-start items-center text-blue hover:underline font-semibold"
              href="https://www.microsoft.com/en-us/microsoft-365?icid=mscom_marcom_CPW2b_M365forBusiness_Explore"
            >
              Explore Microsoft 365 for Business <BsChevronCompactRight />
            </a>
          </div>
        </div>
        <div id="business-right" className="flex gap-6">
          <div className="business-islands flex flex-col gap-5 max-w-[406px]">
            <img
              src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Windows-11-Business?wid=515&hei=293&fit=crop"
              alt=""
              className="max-w-[382px] max-h-[214px]"
            />
            <h2 className="text-3xl font-semibold">Windows 11 for business</h2>
            <p>
              Designed for hybrid work. Powerful for employees.
              <br /> Consistent for IT. Secure for all.
            </p>
            <a
              className="flex justify-start items-center text-blue hover:underline font-semibold"
              href="https://www.microsoft.com/en-us/windows/business?icid=mscom_marcom_CPW3a_Windows11forBusiness"
            >
              Learn more <BsChevronCompactRight />
            </a>
          </div>
          <div className="business-islands flex flex-col gap-5 max-w-[406px]">
            <img
              src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Azure-AI-Bloom?wid=515&hei=293&fit=crop"
              alt=""
              className="max-w-[382px] max-h-[214px]"
            />
            <h2 className="text-3xl font-semibold">Join the ear of AI</h2>
            <p>
              Create, communicate, and code with the latest
              <br /> Microsoft AI solutions.
            </p>
            <a
              className="flex justify-start items-center font-semibold hover:underline text-blue"
              href="https://www.microsoft.com/en-us/ai?icid=mscom_marcom_CPW4a_AzureAI"
            >
              Explore AI solutions <BsChevronCompactRight />
            </a>
          </div>
        </div>
      </section>
      <section id="footer-carousel" className="mb-[100px]">
        <img
          className="max-w-[1600px] m-auto"
          src={HistoryMonth}
          alt="History Month (Asian and Black)"
        />
        <div
          id="footer-carousel-text"
          className="bg-white p-12 flex flex-col items-start gap-5 absolute top-[2894px] left-[284px]"
        >
          <h2 className="text-4xl font-semibold">
            Celebrating the Asian
            <br /> community
          </h2>
          <p>
            This Asian American and Pacific Islander Heritage Month, explore
            <br />
            employee stories—plus learn how to engage all year long.
          </p>
          <button className="bg-blue text-white font-semibold px-3 py-2 hover:bg-dark-blue rounded">
            Read their stories
          </button>
        </div>
      </section>
      <footer className="bg-grey px-10 py-8">
        <div id="column-wrapper" className="flex justify-around mb-[40px]">
          <div className="footer-columns flex flex-col gap-5">
            <h4 className="text-sm font-semibold">What's new</h4>
            <ul className="text-xs flex flex-col gap-5">
              <li>Surface Pro 9</li>
              <li>Surface Laptop 5</li>
              <li>Surface Studio 2+</li>
              <li>Surface Laptop Go 2</li>
              <li>Surface Laptop Studio</li>
              <li>Surface Go 3</li>
              <li>Microsoft 365</li>
              <li>Windows 11 apps</li>
            </ul>
          </div>
          <div className="footer-columns flex flex-col gap-5">
            <h4 className="text-sm font-semibold">Microsoft Store</h4>
            <ul className="text-xs flex flex-col gap-5">
              <li>Account Profile</li>
              <li>Download Center</li>
              <li>Microsoft Store Support</li>
              <li>Returns</li>
              <li>Order Tracking</li>
              <li>Virtual workshops and training</li>
              <li>Microsoft Store Promise</li>
              <li>Flexible Payments</li>
            </ul>
          </div>
          <div className="footer-columns flex flex-col gap-5">
            <h4 className="text-sm font-semibold">Education</h4>
            <ul className="text-xs flex flex-col gap-5">
              <li>Microsoft in education</li>
              <li>Devices for education</li>
              <li>Microsoft Teams for Education</li>
              <li>Microsoft 365 Education</li>
              <li>How to buy for your school</li>
              <li>Educator training and development</li>
              <li>Deals for students and parents</li>
              <li>Azure for students</li>
            </ul>
          </div>
          <div className="footer-columns flex flex-col gap-5">
            <h4 className="text-sm font-semibold">Business</h4>
            <ul className="text-xs flex flex-col gap-5">
              <li>Microsoft Cloud</li>
              <li>Microsoft Security</li>
              <li>Dynamics 365</li>
              <li>Microsoft 365</li>
              <li>Microsoft Power Platform</li>
              <li>Microsoft Teams</li>
              <li>Microsoft Industry</li>
              <li>Small Business</li>
            </ul>
          </div>
          <div className="footer-columns flex flex-col gap-5">
            <h4 className="text-sm font-semibold">Developer & IT</h4>
            <ul className="text-xs flex flex-col gap-5">
              <li>Azure</li>
              <li>Developer Center</li>
              <li>Documentation</li>
              <li>Microsoft Learn</li>
              <li>Microsoft Tech Community</li>
              <li>Azure Marketplace</li>
              <li>AppSource</li>
              <li>Visual Studio</li>
            </ul>
          </div>
          <div className="footer-columns flex flex-col gap-5">
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="text-xs flex flex-col gap-5">
              <li>Careers</li>
              <li>About Microsoft</li>
              <li>Company news</li>
              <li>Privacy at Microsoft</li>
              <li>Investors</li>
              <li>Diversity and inclusion</li>
              <li>Accessibility</li>
              <li>Sustainability</li>
            </ul>
          </div>
        </div>
        <div id="footer-bottom-wrapper" className="flex justify-around">
          <div id="privacy" className="text-xs flex gap-10">
            <p>English (United States)</p>
            <p>Your California Privacy Choices </p>
          </div>
          <div id="footer-links">
            <ul className="text-xs flex gap-10">
              <li>Sitemap</li>
              <li>Contact Microsoft</li>
              <li>Privacy</li>
              <li>Terms of use</li>
              <li>Trademarks</li>
              <li>Safety & eco</li>
              <li>Recycling</li>
              <li>About our ads</li>
              <li>© Microsoft 2023</li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default HomePage;
