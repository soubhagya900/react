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

function render(container, reactElement){

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for(const prop in reactElement.props){
        domElement.setAttribute(reactElement.props[prop].key,reactElement.props[prop].value)
    }
    container.appendChild(domElement)
    
}

const newElele = createReactElement("<h1 id='he' class='h1Clas'>helo gulu</h1>")
const newElele2 = createReactElement("<h2 id='he' class='h1Clas'>helo gulu 2</h2>")

const container = document.getElementById('root');

render(container,newElele)
render(container,newElele2)


//TODO work on if iner html having more inner tag 

