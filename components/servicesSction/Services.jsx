import OurServices from "./OurServices";

const services = [
  {
    img: "/images/seo.png",
    title: "Designing complex websites and seo",
    flag: false,
    dis: "In the form of SPA with the latest technologies along with optimization for Google along with support for PWA mode and SEO of your sites",
  },
  {
    img: "/images/Preparation.png",
    title: "Preparation of your startup proposal",
    flag: true,
    dis: "A business plan is the foundation of a business; a way to think about the key elements of a business. Leave it to us.",
  },
  {
    img: "/images/uiux.png",
    title: "UI / UX design for your startup",
    flag: false,
    dis: "Website and app design according to the latest trends with a convenient and pleasant user experience.",
  },
  {
    img: "/images/mobile.png",
    title: "Mobile app design for your business",
    flag: true,
    dis: "We design the most advanced apps according to your taste and business needs.",
  },
  {
    img: "/images/wibsite.png",
    title: "Website design with WordPress",
    flag: false,
    dis: "Designing all kinds of sites with WordPress for your business.leave it to us.",
  },
];

const Services = () => {
  return (
    <div>
      <div className="mt-16 block  md:mt-10 md:grid grid-cols-7 gap-4">
        <div className="md:col-span-3">
              <span className="bg-primary-400 text-white p-2  rounded dark:bg-secondary-400 dark:text-black">
                Services
              </span>
              <p className="mt-16 mb-10 w-[318px] md:w-auto ">
              We are here to provide services in the field of website design such as: front-end development, back-end development and user interface design. The Talent Network team from zero to one hundred sets up dedicated sites with laravel, nextjs, and reactjs technologies with a dedicated user interface design. Click for more information.
              </p>
              <span className="bg-primary-400 text-white p-2   rounded dark:bg-primary-50 dark:text-black dark:shadow-[2px_4px_16px_rgba(195,197,248,0.3)]">
              View Portfolio
              </span>
        </div>
        <div className='mt-16 md:mt-10 col-span-4 md:ml-16'>
          {services.map((service, index) => (
            <OurServices key={index} info={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
