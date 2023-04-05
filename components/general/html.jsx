export default function HTMLString({html}){
    return (<div dangerouslySetInnerHTML={{ __html:html }} />);
}