import OurServices from "./OurServices";

const services = {
  img: "/images/seo.png",
  title: "Designing complex websites and seo ",
  flag:true,
  dis: "In the form of SPA with the latest technologies along with optimization for Google along with support for PWA mode and SEO of your sites",
};
const services1 = {
    img: "/images/seo.png",
    flag:false,
    title: "Designing complex websites and seo ",
    dis: "In the form of SPA with the latest technologies along with optimization for Google along with support for PWA mode and SEO of your sites",
  };
const Services = () => {
  return (
    <div>
      <div className="mt-16 md:mt-10 grid grid-cols-7 gap-4">
        <div className="md:col-span-3">
          
        </div>
        <div className="mt-16 md:mt-10 col-span-4 md:ml-16">
          <OurServices info={services} />
          <OurServices info={services1} />
          <OurServices info={services} />
          <OurServices info={services1} />
        </div>
      </div>
    </div>
  );
};

export default Services;
