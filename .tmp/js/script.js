'use strict'; //Initialize JS Library 
$(document).ready(function () {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors: ['Play', 'Learn', 'Teach'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: false,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        sectionsColor: ['#DFDFE3', '#4C4B55', '#DFDFE3'],
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true,

        //events
        onLeave: function onLeave(index, nextIndex, direction) {},
        afterLoad: function afterLoad(anchorLink, index) {},
        afterRender: function afterRender() {},
        afterResize: function afterResize() {},
        afterResponsive: function afterResponsive(isResponsive) {},
        afterSlideLoad: function afterSlideLoad(anchorLink, index, slideAnchor, slideIndex) {},
        onSlideLeave: function onSlideLeave(anchorLink, index, slideIndex, direction, nextSlideIndex) {} });

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImZ1bGxwYWdlIiwibWVudSIsImxvY2tBbmNob3JzIiwiYW5jaG9ycyIsIm5hdmlnYXRpb24iLCJuYXZpZ2F0aW9uUG9zaXRpb24iLCJuYXZpZ2F0aW9uVG9vbHRpcHMiLCJzaG93QWN0aXZlVG9vbHRpcCIsInNsaWRlc05hdmlnYXRpb24iLCJzbGlkZXNOYXZQb3NpdGlvbiIsImNzczMiLCJzY3JvbGxpbmdTcGVlZCIsImF1dG9TY3JvbGxpbmciLCJmaXRUb1NlY3Rpb24iLCJmaXRUb1NlY3Rpb25EZWxheSIsInNjcm9sbEJhciIsImVhc2luZyIsImVhc2luZ2NzczMiLCJsb29wQm90dG9tIiwibG9vcFRvcCIsImxvb3BIb3Jpem9udGFsIiwiY29udGludW91c1ZlcnRpY2FsIiwiY29udGludW91c0hvcml6b250YWwiLCJzY3JvbGxIb3Jpem9udGFsbHkiLCJpbnRlcmxvY2tlZFNsaWRlcyIsImRyYWdBbmRNb3ZlIiwib2Zmc2V0U2VjdGlvbnMiLCJyZXNldFNsaWRlcnMiLCJmYWRpbmdFZmZlY3QiLCJub3JtYWxTY3JvbGxFbGVtZW50cyIsInNjcm9sbE92ZXJmbG93Iiwic2Nyb2xsT3ZlcmZsb3dSZXNldCIsInNjcm9sbE92ZXJmbG93T3B0aW9ucyIsInRvdWNoU2Vuc2l0aXZpdHkiLCJub3JtYWxTY3JvbGxFbGVtZW50VG91Y2hUaHJlc2hvbGQiLCJiaWdTZWN0aW9uc0Rlc3RpbmF0aW9uIiwia2V5Ym9hcmRTY3JvbGxpbmciLCJhbmltYXRlQW5jaG9yIiwicmVjb3JkSGlzdG9yeSIsImNvbnRyb2xBcnJvd3MiLCJ2ZXJ0aWNhbENlbnRlcmVkIiwic2VjdGlvbnNDb2xvciIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiZml4ZWRFbGVtZW50cyIsInJlc3BvbnNpdmVXaWR0aCIsInJlc3BvbnNpdmVIZWlnaHQiLCJyZXNwb25zaXZlU2xpZGVzIiwic2VjdGlvblNlbGVjdG9yIiwic2xpZGVTZWxlY3RvciIsImxhenlMb2FkaW5nIiwib25MZWF2ZSIsImluZGV4IiwibmV4dEluZGV4IiwiZGlyZWN0aW9uIiwiYWZ0ZXJMb2FkIiwiYW5jaG9yTGluayIsImFmdGVyUmVuZGVyIiwiYWZ0ZXJSZXNpemUiLCJhZnRlclJlc3BvbnNpdmUiLCJpc1Jlc3BvbnNpdmUiLCJhZnRlclNsaWRlTG9hZCIsInNsaWRlQW5jaG9yIiwic2xpZGVJbmRleCIsIm9uU2xpZGVMZWF2ZSIsIm5leHRTbGlkZUluZGV4Il0sIm1hcHBpbmdzIjoiY0FBQTtBQUNBQSxFQUFFQyxRQUFGLEVBQVlDLEtBQVosQ0FBa0IsWUFBVztBQUN6QkYsTUFBRSxXQUFGLEVBQWVHLFFBQWYsQ0FBd0I7QUFDcEI7QUFDQUMsY0FBTSxPQUZjO0FBR3BCQyxxQkFBYSxLQUhPO0FBSXBCQyxpQkFBUSxDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLE9BQWxCLENBSlk7QUFLcEJDLG9CQUFZLEtBTFE7QUFNcEJDLDRCQUFvQixPQU5BO0FBT3BCQyw0QkFBb0IsQ0FBQyxZQUFELEVBQWUsYUFBZixDQVBBO0FBUXBCQywyQkFBbUIsS0FSQztBQVNwQkMsMEJBQWtCLEtBVEU7QUFVcEJDLDJCQUFtQixRQVZDOztBQVlwQjtBQUNBQyxjQUFNLElBYmM7QUFjcEJDLHdCQUFnQixHQWRJO0FBZXBCQyx1QkFBZSxJQWZLO0FBZ0JwQkMsc0JBQWMsSUFoQk07QUFpQnBCQywyQkFBbUIsSUFqQkM7QUFrQnBCQyxtQkFBVyxLQWxCUztBQW1CcEJDLGdCQUFRLGdCQW5CWTtBQW9CcEJDLG9CQUFZLE1BcEJRO0FBcUJwQkMsb0JBQVksS0FyQlE7QUFzQnBCQyxpQkFBUyxLQXRCVztBQXVCcEJDLHdCQUFnQixJQXZCSTtBQXdCcEJDLDRCQUFvQixLQXhCQTtBQXlCcEJDLDhCQUFzQixLQXpCRjtBQTBCcEJDLDRCQUFvQixLQTFCQTtBQTJCcEJDLDJCQUFtQixLQTNCQztBQTRCcEJDLHFCQUFhLEtBNUJPO0FBNkJwQkMsd0JBQWdCLEtBN0JJO0FBOEJwQkMsc0JBQWMsS0E5Qk07QUErQnBCQyxzQkFBYyxLQS9CTTtBQWdDcEJDLDhCQUFzQixzQkFoQ0Y7QUFpQ3BCQyx3QkFBZ0IsS0FqQ0k7QUFrQ3BCQyw2QkFBcUIsS0FsQ0Q7QUFtQ3BCQywrQkFBdUIsSUFuQ0g7QUFvQ3BCQywwQkFBa0IsRUFwQ0U7QUFxQ3BCQywyQ0FBbUMsQ0FyQ2Y7QUFzQ3BCQyxnQ0FBd0IsSUF0Q0o7O0FBd0NwQjtBQUNBQywyQkFBbUIsS0F6Q0M7QUEwQ3BCQyx1QkFBZSxJQTFDSztBQTJDcEJDLHVCQUFlLElBM0NLOztBQTZDcEI7QUFDQUMsdUJBQWUsSUE5Q0s7QUErQ3BCQywwQkFBa0IsSUEvQ0U7QUFnRHBCQyx1QkFBZ0IsQ0FBQyxTQUFELEVBQVksU0FBWixFQUFzQixTQUF0QixDQWhESTtBQWlEcEJDLG9CQUFZLEtBakRRO0FBa0RwQkMsdUJBQWUsTUFsREs7QUFtRHBCQyx1QkFBZSxrQkFuREs7QUFvRHBCQyx5QkFBaUIsQ0FwREc7QUFxRHBCQywwQkFBa0IsQ0FyREU7QUFzRHBCQywwQkFBa0IsS0F0REU7O0FBd0RwQjtBQUNBQyx5QkFBaUIsVUF6REc7QUEwRHBCQyx1QkFBZSxRQTFESzs7QUE0RHBCQyxxQkFBYSxJQTVETzs7QUE4RHBCO0FBQ0FDLGlCQUFTLGlCQUFTQyxLQUFULEVBQWdCQyxTQUFoQixFQUEyQkMsU0FBM0IsRUFBcUMsQ0FBRSxDQS9ENUI7QUFnRXBCQyxtQkFBVyxtQkFBU0MsVUFBVCxFQUFxQkosS0FBckIsRUFBMkIsQ0FBRSxDQWhFcEI7QUFpRXBCSyxxQkFBYSx1QkFBVSxDQUFFLENBakVMO0FBa0VwQkMscUJBQWEsdUJBQVUsQ0FBRSxDQWxFTDtBQW1FcEJDLHlCQUFpQix5QkFBU0MsWUFBVCxFQUFzQixDQUFFLENBbkVyQjtBQW9FcEJDLHdCQUFnQix3QkFBU0wsVUFBVCxFQUFxQkosS0FBckIsRUFBNEJVLFdBQTVCLEVBQXlDQyxVQUF6QyxFQUFvRCxDQUFFLENBcEVsRDtBQXFFcEJDLHNCQUFjLHNCQUFTUixVQUFULEVBQXFCSixLQUFyQixFQUE0QlcsVUFBNUIsRUFBd0NULFNBQXhDLEVBQW1EVyxjQUFuRCxFQUFrRSxDQUFFLENBckU5RCxFQUF4Qjs7QUF1RUgsQ0F4RUQiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9Jbml0aWFsaXplIEpTIExpYnJhcnkgXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAkKCcjZnVsbHBhZ2UnKS5mdWxscGFnZSh7XG4gICAgICAgIC8vTmF2aWdhdGlvblxuICAgICAgICBtZW51OiAnI21lbnUnLFxuICAgICAgICBsb2NrQW5jaG9yczogZmFsc2UsXG4gICAgICAgIGFuY2hvcnM6WydQbGF5JywgJ0xlYXJuJywgJ1RlYWNoJ10sXG4gICAgICAgIG5hdmlnYXRpb246IGZhbHNlLFxuICAgICAgICBuYXZpZ2F0aW9uUG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgIG5hdmlnYXRpb25Ub29sdGlwczogWydmaXJzdFNsaWRlJywgJ3NlY29uZFNsaWRlJ10sXG4gICAgICAgIHNob3dBY3RpdmVUb29sdGlwOiBmYWxzZSxcbiAgICAgICAgc2xpZGVzTmF2aWdhdGlvbjogZmFsc2UsXG4gICAgICAgIHNsaWRlc05hdlBvc2l0aW9uOiAnYm90dG9tJyxcblxuICAgICAgICAvL1Njcm9sbGluZ1xuICAgICAgICBjc3MzOiB0cnVlLFxuICAgICAgICBzY3JvbGxpbmdTcGVlZDogNzAwLFxuICAgICAgICBhdXRvU2Nyb2xsaW5nOiB0cnVlLFxuICAgICAgICBmaXRUb1NlY3Rpb246IHRydWUsXG4gICAgICAgIGZpdFRvU2VjdGlvbkRlbGF5OiAxMDAwLFxuICAgICAgICBzY3JvbGxCYXI6IGZhbHNlLFxuICAgICAgICBlYXNpbmc6ICdlYXNlSW5PdXRDdWJpYycsXG4gICAgICAgIGVhc2luZ2NzczM6ICdlYXNlJyxcbiAgICAgICAgbG9vcEJvdHRvbTogZmFsc2UsXG4gICAgICAgIGxvb3BUb3A6IGZhbHNlLFxuICAgICAgICBsb29wSG9yaXpvbnRhbDogdHJ1ZSxcbiAgICAgICAgY29udGludW91c1ZlcnRpY2FsOiBmYWxzZSxcbiAgICAgICAgY29udGludW91c0hvcml6b250YWw6IGZhbHNlLFxuICAgICAgICBzY3JvbGxIb3Jpem9udGFsbHk6IGZhbHNlLFxuICAgICAgICBpbnRlcmxvY2tlZFNsaWRlczogZmFsc2UsXG4gICAgICAgIGRyYWdBbmRNb3ZlOiBmYWxzZSxcbiAgICAgICAgb2Zmc2V0U2VjdGlvbnM6IGZhbHNlLFxuICAgICAgICByZXNldFNsaWRlcnM6IGZhbHNlLFxuICAgICAgICBmYWRpbmdFZmZlY3Q6IGZhbHNlLFxuICAgICAgICBub3JtYWxTY3JvbGxFbGVtZW50czogJyNlbGVtZW50MSwgLmVsZW1lbnQyJyxcbiAgICAgICAgc2Nyb2xsT3ZlcmZsb3c6IGZhbHNlLFxuICAgICAgICBzY3JvbGxPdmVyZmxvd1Jlc2V0OiBmYWxzZSxcbiAgICAgICAgc2Nyb2xsT3ZlcmZsb3dPcHRpb25zOiBudWxsLFxuICAgICAgICB0b3VjaFNlbnNpdGl2aXR5OiAxNSxcbiAgICAgICAgbm9ybWFsU2Nyb2xsRWxlbWVudFRvdWNoVGhyZXNob2xkOiA1LFxuICAgICAgICBiaWdTZWN0aW9uc0Rlc3RpbmF0aW9uOiBudWxsLFxuXG4gICAgICAgIC8vQWNjZXNzaWJpbGl0eVxuICAgICAgICBrZXlib2FyZFNjcm9sbGluZzogZmFsc2UsXG4gICAgICAgIGFuaW1hdGVBbmNob3I6IHRydWUsXG4gICAgICAgIHJlY29yZEhpc3Rvcnk6IHRydWUsXG5cbiAgICAgICAgLy9EZXNpZ25cbiAgICAgICAgY29udHJvbEFycm93czogdHJ1ZSxcbiAgICAgICAgdmVydGljYWxDZW50ZXJlZDogdHJ1ZSxcbiAgICAgICAgc2VjdGlvbnNDb2xvciA6IFsnI0RGREZFMycsICcjNEM0QjU1JywnI0RGREZFMyddLFxuICAgICAgICBwYWRkaW5nVG9wOiAnM2VtJyxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogJzEwcHgnLFxuICAgICAgICBmaXhlZEVsZW1lbnRzOiAnI2hlYWRlciwgLmZvb3RlcicsXG4gICAgICAgIHJlc3BvbnNpdmVXaWR0aDogMCxcbiAgICAgICAgcmVzcG9uc2l2ZUhlaWdodDogMCxcbiAgICAgICAgcmVzcG9uc2l2ZVNsaWRlczogZmFsc2UsXG5cbiAgICAgICAgLy9DdXN0b20gc2VsZWN0b3JzXG4gICAgICAgIHNlY3Rpb25TZWxlY3RvcjogJy5zZWN0aW9uJyxcbiAgICAgICAgc2xpZGVTZWxlY3RvcjogJy5zbGlkZScsXG5cbiAgICAgICAgbGF6eUxvYWRpbmc6IHRydWUsXG5cbiAgICAgICAgLy9ldmVudHNcbiAgICAgICAgb25MZWF2ZTogZnVuY3Rpb24oaW5kZXgsIG5leHRJbmRleCwgZGlyZWN0aW9uKXt9LFxuICAgICAgICBhZnRlckxvYWQ6IGZ1bmN0aW9uKGFuY2hvckxpbmssIGluZGV4KXt9LFxuICAgICAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24oKXt9LFxuICAgICAgICBhZnRlclJlc2l6ZTogZnVuY3Rpb24oKXt9LFxuICAgICAgICBhZnRlclJlc3BvbnNpdmU6IGZ1bmN0aW9uKGlzUmVzcG9uc2l2ZSl7fSxcbiAgICAgICAgYWZ0ZXJTbGlkZUxvYWQ6IGZ1bmN0aW9uKGFuY2hvckxpbmssIGluZGV4LCBzbGlkZUFuY2hvciwgc2xpZGVJbmRleCl7fSxcbiAgICAgICAgb25TbGlkZUxlYXZlOiBmdW5jdGlvbihhbmNob3JMaW5rLCBpbmRleCwgc2xpZGVJbmRleCwgZGlyZWN0aW9uLCBuZXh0U2xpZGVJbmRleCl7fVxuICAgIH0pO1xufSk7Il19
