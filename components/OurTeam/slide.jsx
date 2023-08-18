import Image from "next/image";
import Link from "next/link";


export default function Slide({ person }) {

  return (
    <div
      data="slider slide"
      className="px-2 lg:px-4 py-2 lg:py-4 h-full w-full"
    >
      <div className="bg-white w-full h-full rounded-2xl shadow-[3px_6px_10px_rgba(0,0,0,0.12)] dark:bg-bgDark-200">
        <div className="w-full flex flex-col justify-center justify-items-center h-full">
          <div className="w-full ">
            <div className="w-[100px] lg:w-[140px] h-[100px] lg:h-[140px] bg-secondary-600 rounded-full mx-auto relative overflow-hidden">
              <Image
                src={person.img_url || "/images/default-user.png"}
                alt={`${person.member_name} ${person.member_last_name}`}
                fill
              />
            </div>
            <h3 className="text-center mt-4 lg:mt-9 mb-2 text-[1rem] lg:text-xl font-[800] text-typoLight-400 dark:text-typoDark-50">{`${person.member_name} ${person.member_last_name}`}</h3>
            <p className="text-center font-[400] text-[10px] lg:text-xs text-typoLight-200 mb-5 lg:mb-10">
              {person.job || "Developer"}
            </p>
            <div className="flex text-center justify-center justify-items-center gap-3">
              <Link href={`mailto:${person.email}`}>
                <div className="w-6 lg:w-7 h-6 lg:h-7 relative">
                  <i className="icon-message leading-6 lg:leading-7 w-full h-full text-center block text-2xl text-typoLight-200 dark:text-typoDark-400 hover:text-primary-400 transition"></i>
                </div>
              </Link>
              <Link href={person.github}>
                <div className="w-6 lg:w-7 h-6 lg:h-7 relative">
                  <i className="icon-github leading-6 lg:leading-7 w-full h-full text-center block text-2xl text-typoLight-200 dark:text-typoDark-400 hover:text-primary-400 transition"></i>
                </div>
              </Link>
              <a href={person.linkedin} passHref={true}>
                <div className="w-6 lg:w-7 h-6 lg:h-7 relative">
                  <i className="icon-linkedin leading-6 lg:leading-7 w-full h-full text-center block text-2xl text-typoLight-200 dark:text-typoDark-400 hover:text-primary-400 transition"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
