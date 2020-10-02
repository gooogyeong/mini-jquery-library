// mocking jQuery library e.g. $(.menu-list)
// so dollars sign ($) in jQuery was just another function name
function $(selector) {
    const self = {
        element: document.querySelector(selector),
        html: () => self.element,
        on: (event, callback) => {
            document.addEventListener(event, callback)
        },
        hide: () => {
            self.element.style.display = 'none'
        },
        attr: (name, value) => {
            if (value == null) self.element.getAttribute(name)
            else self.element.setAttribute(name, value)
        }
    }
    return self
}

console.log($('h3').html())

$('h1').on('click', () => {
    alert('clicked!')
})

$('h2').hide() // hides the first h2 element (title) to be found


