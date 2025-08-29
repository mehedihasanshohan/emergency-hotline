getElementById, getElementsByClassName, and querySelector / querySelectorAll er modhye Parthokko Ki?
Era sobai HTML element select korte help kore, kintu fundamental kichu difference ache:

getElementById:

Unique ID diye element khoje.

Single element return kore (cause ID unique hoy).

Sobcheye fast.

Example: document.getElementById('myUniqueId')

getElementsByClassName:

Class name diye element khoje.

Matching sob element ke HTMLCollection hishebe return kore.

Example: document.getElementsByClassName('myClass')

querySelector:

CSS selector (like #id, .class, tag) diye khoje.

Prothom matching element-ta return kore.

Example: document.querySelector('.myClass')

querySelectorAll:

CSS selector diye khoje.

Matching sob element ke NodeList hishebe return kore.

Example: document.querySelectorAll('p.highlight')

Summary: getElementById IDs ke, getElementsByClassName classes ke, ar querySelector/querySelectorAll CSS selectors ke target kore.

Kivabe ekta notun element toiri kore DOM-e jog korben?
DOM-e notun element add korar steps gulo holo:

Element toiri korun: document.createElement() diye.

const newDiv = document.createElement('div');

Content jog korun (optional): textContent or innerHTML diye.

newDiv.textContent = 'Ami notun ekta div!';

Attributes set korun (optional): classList.add(), id, style use kore.

newDiv.classList.add('my-new-class');

DOM-e jog korun: appendChild() (parent er sheshe) or insertBefore() (ektar age) use kore.

const parentElement = document.getElementById('parent-container');
parentElement.appendChild(newDiv);

Event Bubbling Ki ebong eta kivabe kaj kore?
Event Bubbling holo ekta process jekhane kono element e event hole, oi event ta prothome oi element e, tarpor tar parent e, tarpor grandparent e... evabe DOM tree er root porjonto execute hoy. Eita niche theke upore ekta bubble uthar moto kaj kore.

Kivabe kaj kore:
Jodi <span>ke click koren jeta<p>er modhye ar<p>ta<div>er modhye, tahole event ta prothome<span>e, then<p>e, finally<div>` e fire hobe (jodi listeners thake).

Event Delegation Ki? Keno eta dorkari?
Event Delegation holo Event Bubbling use kore DOM e event handler efficiently attach korar ekta technique. Ekhane, individual child element e listener na diye, shudhu tar common parent element e ekta single event listener attach kora hoy.

Kivabe kaj kore:
Child e event hole, bubbling er jonno event ta parent e pouche. Parent er listener event.target check kore kon child theke event esheche, then kaj kore.

Keno eta dorkari:

Memory Efficiency: Onek child element er jonno shudhu 1ta listener use hoy, memory save kore.

Dynamic Elements Handling: Notun add kora element gulo automatic handle hoy.

Cleaner Code: Code beshi organized ar short hoy.

preventDefault() ebong stopPropagation() methods er modhye Parthokko Ki?
Dui-tai event handling e important, kintu alada kaj kore:

event.preventDefault():

Event er default browser action-ke theme diye dey.

Example: <a> link click korle page redirect hoy, preventDefault() dile eta hobe na. <form> submit korle page reload hoy, preventDefault() dile eta hobe na.

event.stopPropagation():

Event Bubbling process ke theme diye dey.

Event ke parent element e upore bubble korte dey na.

Example: Child <button> e click korle jodi stopPropagation() use koren, tahole event ta tar parent <div> er click listener-e jabe na.

Summary:

preventDefault() browser er default behavior theme dey.

stopPropagation() event ke DOM tree te bubble kora theme dey.
