qsn no-1
--------
What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans:
Era sobai HTML element select korte help kore, kintu fundamental kichu difference ache.
#getElementById:
i) Unique ID diye element khoje.
ii) Single element return kore.
iii) Sobcheye fast.
Example: document.getElementById('myId')
#getElementsByClassName:
i)Class name diye element khoje.
ii)Matching sob element ke HTMLCollection hishebe return kore.
Example: document.getElementsByClassName('myClass')
#querySelector:
i) CSS selector (like #id, .class, tag) diye khoje.
ii) Prothom matching element-ta return kore
Example: document.querySelector('.myClass')
#querySelectorAll:
i) CSS selector diye khoje.
ii) Matching sob element ke NodeList hishebe return kore.
Example: document.querySelectorAll('p.highlight')
Summary: getElementById IDs ke, getElementsByClassName classes ke, ar querySelector/querySelectorAll CSS selectors ke target kore.

qsn no -2 
---------
How do you create and insert a new element into the DOM?
ans:
DOM-e notun element add korar steps gulo holo:
i) Element toiri kora:
const newDiv = document.createElement("div");
ii) tag er content set kora
newDiv.textContent = "Ei ta ekta notun div element";
iii) dom er insert kora 
document.body.appendChild(newDiv);

qsn no- 3
---------
What is Event Bubbling and how does it work?
ans:
Event Bubbling holo ekta process jekhane kono element e event hole, oi event ta prothome oi element e, tarpor tar parent e, tarpor grandparent e... evabe DOM tree er root porjonto execute hoy. Eita niche theke upore ekta bubble uthar moto kaj kore.
#Kivabe kaj kore:
Jodi <span>ke click kora hoi jeta<p>er modhye ar<p>ta<div>er modhye, tahole event ta prothome<span>e, erpore<p>e, finally<div>` e fire hobe.

qsn no - 4
----------
#What is Event Delegation in JavaScript? Why is it useful?
ans:
Event Delegation holo Event Bubbling use kore DOM e event handler efficiently attach korar ekta techniqe. Ekhane, aladavabe child element e listener na diye, shudhu tar common parent element e ekta single event listener attach kora hoy.

#Kivabe kaj kore:
Child e event hole, bubbling er jonno event ta parent e pouchai. Parent er listener event.target check kore kon child theke event aslo, evabe kaj kore.

#Keno eta dorkari:
i) Memory Efficiency: Onek child element er jonno shudhu 1ta listener use hoy, memory save kore.
ii) Dynamic Elements Handling: Notun add kora element gulo automatic handle hoy.
iii) Cleaner Code

qsn no - 5
----------
What is the difference between preventDefault() and stopPropagation() methods?
ans: 
Dui-tai event handling e important, kintu alada kaj kore:
#event.preventDefault():
Event er default browser action-ke thamai.
Example: <a> link click korle page redirect hoy, preventDefault() dile eta hobe na. <form> submit korle page reload hoy, preventDefault() dile eta hobe na.

#event.stopPropagation():
i) Event Bubbling process ke thamai.
ii) Event ke parent element e upore bubble korte dey na.
Example: Child <button> e click korle jodi stopPropagation() use kora hoi, taile event ta tar parent <div> er click listener-e jabe na.

#Summary:
preventDefault() browser er default behavior thamai.
stopPropagation() event ke DOM tree te bubble kora thamai.
