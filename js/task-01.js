const itemRef = document.querySelectorAll(".item");

const getCatInfo = () => {
    itemRef.forEach(item => {
        console.log(`Category: ${item.firstElementChild.textContent}`);
        console.log(`Elements: ${item.lastElementChild.children.length}`)
    });
};



