(function () {

    window.addEventListener("load", edualHeight);

    function edualHeight() {
        var domSelector = document.querySelectorAll('.equalHeight');
        className = [];
        Height = [];
        domSelector.forEach(function (ele) {
            if (className.indexOf(ele.parentNode.className.split(' ')[0]) == -1) { className.push(ele.parentNode.className.split(' ')[0]); }
        });
        className.forEach(function (ele) {
            var NodeList = document.querySelectorAll('.' + ele);
            NodeList.forEach(function (element, index) {
                for (let i = 0; i < element.children.length; i++) {
                    Height.push(element.children[i].clientHeight);
                }
                for (let i = 0; i < element.children.length; i++) {
                    element.children[i].style.height = Math.max.apply(null, Height) + "px";
                }
                Height = [];
            });
        });
    }

})()
