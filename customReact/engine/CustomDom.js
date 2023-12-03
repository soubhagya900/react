const parser = new DOMParser();


function createReactElement(htmlString){
    const doc = parser.parseFromString(htmlString, "text/html");
    const element = doc.body.children[0];
    const attribut = element.attributes;
    const newattribut =  Array.from(attribut);
    let cart = [];
    newattribut.forEach((item) => {
        let ele = {
            key: item.nodeName,
            value: item.nodeValue
        };
        cart.push(ele)
    } )
    
    let reactElement = {
        type : element.nodeName,
        children: element.innerHTML,
        props: cart
    }
    return reactElement;
}

export default createReactElement

