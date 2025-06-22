const mainList = document.querySelector("#categories");
const mainItems = mainList.querySelectorAll(".item");
console.log(`Numbers of categories: ${mainItems.length}`);

mainItems.forEach((item) => {
  const subtitle = item.querySelector("h2").textContent;
  const elementsCount = item.querySelectorAll("ul li").length;
  console.log(`Category: ${subtitle}`);
  console.log(`Elements: ${elementsCount}`);
});
