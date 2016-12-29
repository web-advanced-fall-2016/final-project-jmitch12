(function() {
    if (document.readyState != 'loading') {
        handleAccordions();
    } else {
        document.addEventListener('DOMContentLoaded', handleAccordions);
    }

    function handleAccordions() {
        let accordions = document.querySelectorAll('.accordion');


        for (let accordion of accordions) {
            // let items = accordion.querySelectorAll(':scope > .accordion-item'); // NO IE support for :scope !!
            let items = accordion.querySelectorAll('.accordion-item');
            for (let item of items) {
                if (item.parentNode === accordion) { //   IE fix 
                    let title = item.querySelector('.item-title');
                    title.addEventListener('click', function(evnt) {
                        let item = evnt.target.parentNode;

                        evnt.stopPropagation();
                        if (item.classList.contains('open')) {
                            closeItem(item);
                        } else {
                            openItem(item);
                        }
                    }, false);
                }

            }
        }

        function closeItem(item) {
            let itemContent = item.querySelector('.item-content');
            let contentHeight = itemContent.getBoundingClientRect().height;
            itemContent.style.height = `${contentHeight}px`;
            let interval = setInterval(function() {
                if (parseInt(itemContent.style.height.split('px')[0]) <= 2) {
                    clearInterval(interval);
                    itemContent.style.height = `0px`;
                    itemContent.style.removeProperty('height');
                    item.classList.remove('open');
                }
                itemContent.style.height = `${parseInt(itemContent.style.height.split('px')[0]) - 2}px`;

            }, Math.ceil(200 / (contentHeight / 2)));

        }

        function openItem(item) {
            let itemContent = item.querySelector('.item-content');
            itemContent.style.visibility = 'hidden';
            itemContent.style.position = 'absolute';
            itemContent.style.display = 'block';
            let contentHeight = itemContent.getBoundingClientRect().height;
            itemContent.style.removeProperty('display');
            itemContent.style.removeProperty('position');
            itemContent.style.removeProperty('visibility');

            itemContent.style.height = '0px';
            item.classList.add('open');

            let interval = setInterval(function() {
                if (parseInt(itemContent.style.height.split('px')[0]) >= contentHeight) {
                    clearInterval(interval);
                    itemContent.style.removeProperty('height');
                }
                itemContent.style.height = `${parseInt(itemContent.style.height.split('px')[0]) + 2}px`;

            }, Math.ceil(200 / (contentHeight / 2)));


        }
    }

})();