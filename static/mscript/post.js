

document.querySelector('.iButton').addEventListener('mouseenter', popup);
function popup(){
    const item=`<ul class="text">
                    <li><p>Open the video on YouTube</p></li>
                    <li><p>Click on share button</p></li>
                    <li><p>Click on '&lt;Embed&gt;' option</p></li>                  
                    <li><p>Copy the iframe link and paste in the input box</p></li>                  
                </ul>`
    let title= document.createElement('div')
    title.className='popUp';
    title.innerHTML=item;
    document.body.appendChild(title);
}

document.querySelector('.iButton').addEventListener('mouseleave', popupDelete);
function popupDelete(){
    let parent =document.body;
    let element= parent.querySelector('.popUp');
    parent.removeChild(element);
}