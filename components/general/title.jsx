export default function Title({children}){
    return (<h2 className="bg-primary-400 rounded-[4px] h-7 md:h-9 text-typoDark-200 text-white px-3 py-0.5 ">
        <span className="leading-7 md:leading-9 text-[.875rem] md:text-[1rem]">{children}</span>
    </h2>);
}