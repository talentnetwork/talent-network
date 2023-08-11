import HTMLString from "../general/html";

export default function Intro({title,text}){
    const lines = text.split(",");
   
    return (<div className="w-full mb-12 lg:mb-5 [&>*]:leading-7">
        <h4 className="font-[700] text-[1rem] md:text-[1.125rem]">{title}:</h4>
        {lines.map((line,index)=>index>0 ? <p key={index}>{line}</p>:<p key={index}>{line}</p>)}
    </div>);
}