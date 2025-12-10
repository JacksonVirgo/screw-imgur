function findImgurImages(root = document) {
	const imgs = root.querySelectorAll("img");
	const urls = Array.from(imgs).filter(img => img.src.includes("imgur.com")).map((v) => {
		return v.currentSrc;
	});

	return Array.from(new Set(urls));
}

(() => {
	let images = findImgurImages();
	console.log("Images:", images);
})();
