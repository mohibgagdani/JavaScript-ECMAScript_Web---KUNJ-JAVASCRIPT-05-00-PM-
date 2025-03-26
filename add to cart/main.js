let noti = document.querySelector('h1');
	let select = document.querySelector('.select');
	let button = document.getElementsByTagName('button');
	for(let but of button){
		but.addEventListener('click', (e)=>{
			let add = Number(noti.getAttribute('data-count') || 0);
			noti.setAttribute('data-count', add +1);
			noti.classList.add('zero')
			
			let parent = e.target.parentNode;
			let clone = parent.cloneNode(true);
			select.appendChild(clone);
			clone.lastElementChild.innerText = "Buy-now";
			
			if (clone) {
				noti.onclick = ()=>{
					select.classList.toggle('display');
				}	
			}
		})
	}
	