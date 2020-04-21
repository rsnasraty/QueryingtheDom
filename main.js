// 1

const articleHeader = document.querySelector(".article__header");
articleHeader.textContent = "Welcome to Roxanne's Blog";

// 2 Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.

const allArticleHeaders = document.querySelectorAll(".article__header");
for (let i = 0; i < allArticleHeaders.length; i++) {
    allArticleHeaders[i].classList.add"important");
}

//3 Obtain a reference of the element with a class of dashed and remove it.

const dashed = document.querySelector(".dashed");
dashed.classList.remove("dashed");

//4 Obtain a reference to the element with a class of article__footer and add the class of goldenrod it.

const articleFooter = document.querySelector(".article__footer");
articleFooter.classList.add("goldenrod");

