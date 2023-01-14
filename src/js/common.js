
// ハンバーガーメニュー開閉
~((_) => {
	const menuBtn = document.getElementById("menuBtn");
	const body = document.body;

	menuBtn.addEventListener("click", () => {
		body.classList.toggle("js-menuOpen");
	});

	const disableTriggers = document.querySelectorAll(".overlay, .menuNav_item");
	disableTriggers.forEach((trigger) => {
		trigger.addEventListener("click", () => {
			body.classList.remove("js-menuOpen");
		});
	});
})``;