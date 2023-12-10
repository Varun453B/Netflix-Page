const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
	// Remove all show and border classes
	removeBorder();
	removeShow();
	// Add border to current tab item
	this.classList.add('tab-border');
	// Grab content item from DOM
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	// Add show class
	tabContentItem.classList.add('show');
}

// Remove bottom borders from all tab items
function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
	});
}

// Remove show class from all content items
function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

// Listen for tab item click
tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});


console.clear();

	  const cardsContainer = document.querySelector(".cards");
	  const cardsContainerInner = document.querySelector(".cards__inner");
	  const cards = Array.from(document.querySelectorAll(".card"));
	  const overlay = document.querySelector(".overlay");
	  
	  const applyOverlayMask = (e) => {
		const overlayEl = e.currentTarget;
		const x = e.pageX - cardsContainer.offsetLeft;
		const y = e.pageY - cardsContainer.offsetTop;
	  
		overlayEl.style = `--opacity: 1; --x: ${x}px; --y:${y}px;`;
	  };
	  
	  const createOverlayCta = (overlayCard, ctaEl) => {
		const overlayCta = document.createElement("div");
		overlayCta.classList.add("cta");
		overlayCta.textContent = ctaEl.textContent;
		overlayCta.setAttribute("aria-hidden", true);
		overlayCard.append(overlayCta);
	  };
	  
	  const observer = new ResizeObserver((entries) => {
		entries.forEach((entry) => {
			  const cardIndex = cards.indexOf(entry.target);
			  let width = entry.borderBoxSize[0].inlineSize;
			  let height = entry.borderBoxSize[0].blockSize;
	  
			  if (cardIndex >= 0) {
				overlay.children[cardIndex].style.width = `${width}px`;
				overlay.children[cardIndex].style.height = `${height}px`;
			  }
		});
	  });
	  
	  const initOverlayCard = (cardEl) => {
		const overlayCard = document.createElement("div");
		overlayCard.classList.add("card");
		createOverlayCta(overlayCard, cardEl.lastElementChild);
		overlay.append(overlayCard);
		observer.observe(cardEl);
	  };
	  
	  cards.forEach(initOverlayCard);
	  document.body.addEventListener("pointermove", applyOverlayMask);
