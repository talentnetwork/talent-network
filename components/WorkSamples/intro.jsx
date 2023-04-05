import HTMLString from "../general/html";

export default function Intro({title,text}){
    return (<div className="w-full mb-12 lg:mb-5 [&>*]:leading-7">
        <h4 className="font-[700] text-[1rem] md:text-[1.125rem]">{title}:</h4>
        <HTMLString html={text} />
    </div>);
}