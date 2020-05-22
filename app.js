const form = document.querySelector('#memeForm');
const imgInput = document.querySelector('input[name="imgInput"]');
const topInput = document.querySelector('input[name="topInput"]');
const bottomInput = document.querySelector('input[name="bottomInput"]');
const results = document.querySelector('#results');

form.addEventListener('submit', function (e) {
	e.preventDefault();
	const newImg = makeImg(imgInput.value);
	const topText = makeTopText(topInput.value);
	const bottomText = makeBottomText(bottomInput.value);
	const newDiv = document.createElement('div');
	const removeBTN = document.createElement('button');
	removeBTN.innerText = 'Remove Meme';
	newDiv.id = 'newDiv';
	results.appendChild(newDiv);
	newDiv.appendChild(newImg);
	newDiv.appendChild(topText);
	newDiv.appendChild(bottomText);
	newDiv.appendChild(removeBTN);
});

results.addEventListener('click', function (e) {
	if (e.target.tagName === 'BUTTON') {
		e.target.parentElement.remove();
	}
});

function makeImg (img) {
	const newImg = document.createElement('img');
	newImg.src = img;
	return newImg;
}

function makeTopText (topTxt) {
	const topText = document.createElement('h2');
	topText.innerText = topTxt;
	topText.setAttribute('id', 'topText');
	return topText;
}

function makeBottomText (bottomTxt) {
	const bottomText = document.createElement('h2');
	bottomText.innerText = bottomTxt;
	bottomText.setAttribute('id', 'bottomText');
	return bottomText;
}
