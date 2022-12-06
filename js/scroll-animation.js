//skills show

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("showSkills");
			entry.target.classList.remove("hiddenSkills");
		}

		// else {
		// 	entry.target.classList.remove("showSkills");
		// 	entry.target.classList.add("hiddenSkills");
		// }
	});
});

const hiddenElements = document.querySelectorAll(".hiddenSkills");
hiddenElements.forEach((el) => observer.observe(el));

//skill title show

const observerSkill = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("showTitle");
			entry.target.classList.remove("hiddenTitle");
		}

		// else {
		// 	entry.target.classList.remove("showSkills");
		// 	entry.target.classList.add("hiddenSkills");
		// }
	});
});

const skillTitle = document.querySelectorAll(".hiddenTitle");
skillTitle.forEach((el) => observerSkill.observe(el));

//SUBTITLE

const observerSubtitle = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			setTimeout(() => {
				entry.target.classList.add("showSubtitle");
				entry.target.classList.remove("hiddenSubtitle");
			}, 400);
		}

		// else {
		// 	entry.target.classList.remove("showSkills");
		// 	entry.target.classList.add("hiddenSkills");
		// }
	});
});

const allSubtitle = document.querySelectorAll(".hiddenSubtitle");
allSubtitle.forEach((el) => observerSubtitle.observe(el));

//navItem show

window.onload = () => {
	navItems.forEach((entry) => {
		entry.classList.add("showNavItem");
		entry.classList.remove("hiddenNavItem");
	});

	// setTimeout(() => {
	// 	headerTitle.classList.add("show-title");
	// }, 500);

	setTimeout(() => {
		headerName.classList.add("show-title");
	}, 1500);
};

const navItems = document.querySelectorAll(".menu-btn-li");
const headerName = document.getElementsByClassName("header-name")[0];
const headerTitle = document.getElementsByClassName("header-title")[0];
